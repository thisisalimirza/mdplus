import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COURSE_PASSWORD = process.env.COURSE_PASSWORD ?? "frontSeat";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let the unlock page through unconditionally
  if (pathname === "/ai-course/unlock") return NextResponse.next();

  const authCookie = request.cookies.get("mdplus_course_auth");

  if (authCookie?.value !== COURSE_PASSWORD) {
    return NextResponse.redirect(new URL("/ai-course/unlock", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ai-course/:path*"],
};
