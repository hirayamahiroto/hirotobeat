import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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
