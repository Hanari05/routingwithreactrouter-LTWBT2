"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Trang chủ"],
  ["/about", "Giới thiệu"],
  ["/skills", "Kỹ năng"],
  ["/projects", "Dự án"],
  ["/docs", "Ghi chép"],
  ["/contact", "Liên hệ"],
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="flex flex-col gap-5 border-b border-white/15 py-6 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="text-xl font-bold text-pink">
        Gia Hân 🌸
      </Link>
      <nav
        aria-label="Điều hướng chính"
        className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"
      >
        {links.map(([href, label]) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`py-2 hover:text-pink ${active ? "text-purple underline underline-offset-8" : "text-muted"}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
