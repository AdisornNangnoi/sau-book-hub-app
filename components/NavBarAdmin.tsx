import Link from "next/link";
import LogoutButton from "./LogOutButton";

export default function NavBarAdmin() {
  return (
    <div className="flex justify-between items-center bg-red-600 text-white py-5 px-8">
      {/* เมนูฝั่งซ้าย */}
      <div className="flex gap-6">
        <Link className="hover:font-bold" href="/admin">Dashboard</Link>
        <Link className="hover:font-bold" href="/admin/posts">จัดการโพสต์</Link>
        <Link className="hover:font-bold" href="/admin/users">จัดการผู้ใช้</Link>
        <Link className="hover:font-bold" href="/admin/reports">รายงาน</Link>
        <Link className="hover:font-bold" href="/admin/settings">ตั้งค่า</Link>
      </div>

      {/* ปุ่มฝั่งขวา */}
      <div>
         <LogoutButton />
      </div>
    </div>
  );
}
