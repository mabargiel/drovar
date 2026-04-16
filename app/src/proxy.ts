import { NextResponse, type NextRequest } from "next/server";
import { timingSafeEqual } from "node:crypto";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const handleI18n = createMiddleware(routing);

const REALM = "Drovar";

function isAuthorized(req: NextRequest, expected: string): boolean {
  const header = req.headers.get("authorization");
  if (!header || !header.startsWith("Basic ")) return false;
  const provided = header.slice(6).trim();
  const providedBuf = Buffer.from(provided);
  const expectedBuf = Buffer.from(expected);
  if (providedBuf.length !== expectedBuf.length) return false;
  return timingSafeEqual(providedBuf, expectedBuf);
}

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    const expected = process.env.SITE_AUTH_BASIC;
    if (expected && !isAuthorized(request, expected)) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": `Basic realm="${REALM}"` },
      });
    }
  }
  return handleI18n(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|assets|.*\\..*).*)"],
};
