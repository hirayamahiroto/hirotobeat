import { NextResponse } from "next/server";

export function middleware() {
  const nonce = crypto.randomUUID();
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    [
      `default-src 'self'`,
      `script-src 'self' 'unsafe-inline' 'nonce-${nonce}'`,
      `img-src 'self'`,
      `style-src 'self' 'unsafe-inline'`,
      `connect-src 'self'`,
    ].join("; ")
  );

  return response;
}