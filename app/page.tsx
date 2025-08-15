import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-3">SAU Book Hub</h1>
        <p className="text-gray-600">แนะนำหนังสือ รีวิว และพูดคุยกับคนรักการอ่านเหมือนคุณ</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card href="/books" title="สำรวจหนังสือ" desc="ดูหนังสือทั้งหมด แยกตามหมวด" />
        <Card href="/reviews" title="อ่านรีวิว" desc="รีวิวจากสมาชิกในชุมชน" />
        <Card href="/chatrooms" title="ห้องพูดคุย" desc="พูดคุยตามหมวด/กลุ่มที่สนใจ" />
        <Card href="/login" title="เข้าสู่ระบบ" desc="เริ่มโพสต์/รีวิว หลังเข้าสู่ระบบ" />
        <Card href="/register" title="สมัครสมาชิก" desc="สมัครฟรี ใช้ฟีเจอร์ทั้งหมด" />
        <Card href="/profile" title="โปรไฟล์ของฉัน" desc="แก้ไขข้อมูลส่วนตัว" />
      </section>
    </div>
  );
}

function Card({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="rounded-2xl border p-6 hover:shadow transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </Link>
  );
}
