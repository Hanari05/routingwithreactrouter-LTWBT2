import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <>
      <nav
        aria-label="Thông tin cá nhân"
        className="mb-8 flex flex-wrap gap-5 text-sm"
      >
        <Link className="text-link" href="/about">
          Tổng quan
        </Link>
        <Link className="text-link" href="/about/education">
          Học vấn
        </Link>
        <Link className="text-link" href="/about/experience">
          Kinh nghiệm
        </Link>
      </nav>
      {children}
    </>
  );
}
