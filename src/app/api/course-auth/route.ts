import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const COURSE_PASSWORD = process.env.COURSE_PASSWORD ?? "frontSeat";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== COURSE_PASSWORD) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("mdplus_course_auth", COURSE_PASSWORD, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return NextResponse.json({ success: true });
}
