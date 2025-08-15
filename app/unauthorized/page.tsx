import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="max-w-md mx-auto text-center space-y-3">
      <h1 className="text-2xl font-bold">เข้าหน้านี้ไม่ได้</h1>
      <p className="text-gray-600">เฉพาะผู้ดูแลระบบ (Admin) เท่านั้น</p>
      <Link href="/login" className="text-blue-600 underline">ไปหน้าเข้าสู่ระบบ</Link>
    </div>
  );
}
