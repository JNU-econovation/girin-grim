import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("accessToken")?.value;

  if (request.nextUrl.pathname.startsWith("/login") && cookie)
    return NextResponse.redirect(new URL("/", request.url));

  if (request.nextUrl.pathname.startsWith("/join") && cookie)
    return NextResponse.redirect(new URL("/", request.url));

  if (request.nextUrl.pathname.startsWith("/funding/pledge") && !cookie)
    return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}
