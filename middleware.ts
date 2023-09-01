import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  const siteURL = new URL("/", request.url);
  const securityURL = new URL("/security", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") return NextResponse.next();
    return NextResponse.redirect(siteURL);
  }

  if (request.nextUrl.pathname === "/") return NextResponse.redirect(securityURL);
}

export const config = {
  matcher: ["/", "/security/:path*"],
};
