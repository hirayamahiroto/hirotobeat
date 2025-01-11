import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const allowedOrigins = ["https://hirotobe.vercel.app", "https://localhost:3001"];
  const nonce = crypto.randomUUID();
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    [
      `script-src 'self' 'unsafe-inline' 'nonce-${nonce}'`,
      "img-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self'",
    ].join("; ")
  );

  return response;
}
