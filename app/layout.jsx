import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: { default: "Gia Hân | Portfolio", template: "%s | Gia Hân" },
  description: "Portfolio của Nguyễn Ngọc Gia Hân — Công nghệ Đa phương tiện.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:bg-ink focus:p-4"
        >
          Đến nội dung chính
        </a>
        <div className="mx-auto flex min-h-screen w-[calc(100%-40px)] max-w-5xl flex-col">
          <Navbar />
          <main id="main-content" className="min-w-0 flex-1 py-12 sm:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
