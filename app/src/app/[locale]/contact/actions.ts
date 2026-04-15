"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const submissions = new Map<string, number[]>();

type FormInput = {
  name: string;
  email: string;
  phone: string;
  country: string;
  shopType: string;
  area: string;
  message: string;
  honeypot: string;
  locale: string;
};

export type ActionResult = {
  success: boolean;
  error?: string;
};

function validateForm(data: FormInput): string | null {
  if (!data.name.trim()) return "nameRequired";
  if (!data.email.trim()) return "emailRequired";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "emailInvalid";
  if (!data.message.trim()) return "messageRequired";
  return null;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  submissions.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) return true;

  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

function getClientIp(headersList: Headers): string {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown"
  );
}

const confirmationSubjects: Record<string, string> = {
  pl: "Potwierdzenie zapytania — Drovar",
  en: "Enquiry confirmation — Drovar",
  de: "Bestätigung Ihrer Anfrage — Drovar",
  it: "Conferma della richiesta — Drovar",
};

const confirmationBodies: Record<string, string> = {
  pl: "Dziękujemy za Twoje zapytanie. Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.",
  en: "Thank you for your enquiry. We have received your message and will respond as soon as possible.",
  de: "Vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden so schnell wie möglich antworten.",
  it: "Grazie per la Sua richiesta. Abbiamo ricevuto il Suo messaggio e risponderemo il prima possibile.",
};

const LOGO_URL = "https://drovar.pl/assets/logo-email.png";

const emailWrapper = (content: string) => `
  <div style="background-color:#f2ede4;padding:32px 16px;font-family:'Lato',Arial,Helvetica,sans-serif;color:#3a3a3a">
    <div style="max-width:600px;margin:0 auto;background-color:#faf8f4;border-radius:8px;overflow:hidden;border:1px solid #d4d0c8">
      <div style="padding:24px 32px;border-bottom:3px solid #c8a04a">
        <img src="${LOGO_URL}" alt="Drovar" width="140" height="39" style="display:block" />
      </div>
      <div style="padding:32px">
        ${content}
      </div>
      <div style="padding:20px 32px;background-color:#f2ede4;border-top:1px solid #d4d0c8">
        <p style="margin:0;font-size:12px;color:#8a8580;line-height:1.5">
          Drovar Sp. z o.o. · ul. Sebastiana 12 · 32-020 Wieliczka · NIP: PL6832109118
        </p>
      </div>
    </div>
  </div>
`;

function buildAdminEmailHtml(data: FormInput): string {
  const rows = [
    ["Imię", data.name],
    ["Email", data.email],
    ["Telefon", data.phone || "—"],
    ["Kraj", data.country || "—"],
    ["Typ sklepu", data.shopType || "—"],
    ["Powierzchnia (m²)", data.area || "—"],
    ["Wiadomość", data.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 14px;font-weight:bold;vertical-align:top;border-bottom:1px solid #d4d0c8;color:#8a8580;font-size:13px;width:140px">${label}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #d4d0c8;font-size:14px;color:#3a3a3a">${value}</td>
        </tr>`,
    )
    .join("");

  return emailWrapper(`
    <h2 style="margin:0 0 20px;font-size:18px;color:#1e1e1e">Nowe zapytanie z formularza kontaktowego</h2>
    <table style="width:100%;border-collapse:collapse;background-color:#fff;border-radius:6px;border:1px solid #d4d0c8">${tableRows}</table>
  `);
}

export async function submitContactForm(
  data: FormInput,
): Promise<ActionResult> {
  if (data.honeypot) {
    return { success: true };
  }

  const validationError = validateForm(data);
  if (validationError) {
    return { success: false, error: validationError };
  }

  const headersList = await headers();
  const ip = getClientIp(headersList);

  if (isRateLimited(ip)) {
    return { success: false, error: "rateLimited" };
  }

  const locale = ["pl", "en", "de", "it"].includes(data.locale)
    ? data.locale
    : "en";

  try {
    await Promise.all([
      resend.emails.send({
        from: "Drovar <noreply@drovar.pl>",
        to: "info@drovar.pl",
        subject: `Nowe zapytanie od ${data.name}`,
        html: buildAdminEmailHtml(data),
      }),
      resend.emails.send({
        from: "Drovar <noreply@drovar.pl>",
        to: data.email,
        subject: confirmationSubjects[locale],
        html: emailWrapper(`
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3a3a3a">${confirmationBodies[locale]}</p>
          <div style="margin-top:24px;padding:16px;background-color:#f2ede4;border-radius:6px;border-left:3px solid #c8a04a">
            <p style="margin:0;font-size:13px;color:#5a5a5a;line-height:1.5">
              <strong>Drovar Sp. z o.o.</strong><br />
              +48 796 694 327<br />
              info@drovar.pl
            </p>
          </div>
        `),
      }),
    ]);

    return { success: true };
  } catch {
    return { success: false, error: "serverError" };
  }
}
