"use client";

import { useState, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import { submitContactForm } from "@/app/[locale]/contact/actions";
import Button from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  shopType: string;
  area: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  shopType: "",
  area: "",
  message: "",
};

const shopTypeKeys = [
  "convenience",
  "tobacco",
  "grocery",
  "pharmacy",
  "chain",
  "other",
] as const;

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [isPending, startTransition] = useTransition();

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = t("validation.nameRequired");
    }
    if (!data.email.trim()) {
      errs.email = t("validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = t("validation.emailInvalid");
    }
    if (!data.message.trim()) {
      errs.message = t("validation.messageRequired");
    }

    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setServerError(null);

    startTransition(async () => {
      const result = await submitContactForm({
        ...data,
        honeypot,
        locale,
      });

      if (result.success) {
        setData(initialData);
        setSubmitted(true);
      } else if (result.error === "rateLimited") {
        setServerError(t("errors.rateLimited"));
      } else {
        setServerError(t("errors.serverError"));
      }
    });
  }

  function handleChange(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (serverError) setServerError(null);
    if (submitted) setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-success/30 bg-success/10 p-8 text-center">
        <p className="text-lg font-bold text-success">{t("success")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded border border-border bg-cream-light px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none disabled:opacity-50";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {serverError && (
        <div className="rounded-lg border border-error/30 bg-error/10 p-4">
          <p className="text-sm font-bold text-error">{serverError}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-bold">
          {t("name")} *
        </label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder={t("namePlaceholder")}
          disabled={isPending}
          className={inputClass}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-bold">
          {t("email")} *
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder={t("emailPlaceholder")}
          disabled={isPending}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email}</p>
        )}
      </div>

      {/* Phone + Country row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-bold">
            {t("phone")}
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder={t("phonePlaceholder")}
            disabled={isPending}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="country" className="mb-1 block text-sm font-bold">
            {t("country")}
          </label>
          <input
            id="country"
            type="text"
            value={data.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder={t("countryPlaceholder")}
            disabled={isPending}
            className={inputClass}
          />
        </div>
      </div>

      {/* Shop type + Area row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="shopType" className="mb-1 block text-sm font-bold">
            {t("shopType")}
          </label>
          <select
            id="shopType"
            value={data.shopType}
            onChange={(e) => handleChange("shopType", e.target.value)}
            disabled={isPending}
            className={inputClass}
          >
            <option value="">{t("shopTypePlaceholder")}</option>
            {shopTypeKeys.map((key) => (
              <option key={key} value={key}>
                {t(`shopTypeOptions.${key}`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="area" className="mb-1 block text-sm font-bold">
            {t("area")}
          </label>
          <input
            id="area"
            type="number"
            min="0"
            value={data.area}
            onChange={(e) => handleChange("area", e.target.value)}
            placeholder={t("areaPlaceholder")}
            disabled={isPending}
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-bold">
          {t("message")} *
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder={t("messagePlaceholder")}
          disabled={isPending}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message}</p>
        )}
      </div>

      <Button variant="primary" type="submit" disabled={isPending}>
        {isPending ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}
