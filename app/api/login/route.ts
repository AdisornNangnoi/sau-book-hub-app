import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { role } = await req.json();

  // ตั้งค่า cookie จำลอง
  const res = NextResponse.json({ success: true, role });
  res.cookies.set("auth", "1", { httpOnly: true, path: "/" });
  res.cookies.set("role", role, { httpOnly: true, path: "/" });

  return res;
}
