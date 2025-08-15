"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (role: "user" | "admin") => {
    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });
    router.push("/"); // กลับหน้าหลัก
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <h1 className="text-2xl font-bold">เข้าสู่ระบบ (จำลอง)</h1>
      <button
        onClick={() => handleLogin("user")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ล็อกอินเป็นผู้ใช้ทั่วไป
      </button>
      <button
        onClick={() => handleLogin("admin")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        ล็อกอินเป็นแอดมิน
      </button>
    </div>
  );
}
