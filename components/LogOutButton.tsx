"use client";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    window.location.href = "/"; // กลับไปหน้าหลักทันที
  };

  return (
    <button
      onClick={handleLogout}
      className="hover:font-bold px-3 py-1 rounded"
    >
      ออกจากระบบ
    </button>
  );
}
