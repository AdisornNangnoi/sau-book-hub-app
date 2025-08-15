// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { cookies } from "next/headers";
import NavBarMain from "@/components/NavBarMain";
import NavBarAdmin from "@/components/NavBarAdmin";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAU Book Hub",
  description: "ชุมชนคนรักการอ่าน แนะนำหนังสือ รีวิว และพูดคุย",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;
  const role = cookieStore.get("role")?.value;
  const isLoggedIn = auth === "1";
  const isAdmin = role === "admin";

  return (
    <html lang="th" className="h-full">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col h-full`}>
    <div className="sticky top-0 z-50">
      {isAdmin ? (
        <NavBarAdmin />
      ) : (
        <NavBarMain isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      )}
    </div>

    <main className="flex-1 container mx-auto px-4 py-8">
      {children}
    </main>

    <footer className="flex justify-center items-center h-16 bg-gray-200">
      <p className="text-gray-600 text-sm">© 2025 SAU Book Hub</p>
    </footer>
  </body>
</html>

  );
}
