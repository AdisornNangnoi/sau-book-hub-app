"use client"; // ต้องเป็น client เพราะใช้ usePathname()

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogOutButton";

export default function NavBarMain({
  isLoggedIn,
  isAdmin,
}: {
  isLoggedIn: boolean;
  isAdmin: boolean;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? "font-bold text-black" : "hover:font-bold";

  return (
    <div className="flex justify-between items-center bg-green-500 py-5 px-8">
      {/* เมนูซ้าย */}
      <div className="flex gap-6">
        <Link href="/" className={linkClass("/")}>
          หน้าหลัก
        </Link>
        <Link href="/books" className={linkClass("/books")}>
          หนังสือ
        </Link>
        <Link href="/reviews" className={linkClass("/reviews")}>
          รีวิว
        </Link>
        <Link href="/chatrooms" className={linkClass("/chatrooms")}>
          ห้องพูดคุย
        </Link>
      </div>

      {/* เมนูขวา */}
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            {isAdmin ? (
              <Link
                href="/admin"
                className={linkClass("/admin") + " flex items-center"}
              >
                แดชบอร์ดแอดมิน
              </Link>
            ) : (
              <Link
                href="/profile"
                className={linkClass("/profile") + " flex items-center"}
              >
                โปรไฟล์ของฉัน
              </Link>
            )}
            <div className="flex items-center">
              <LogoutButton />
            </div>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={linkClass("/login") + " flex items-center"}
            >
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/register"
              className={linkClass("/register") + " flex items-center"}
            >
              สมัครสมาชิก
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
