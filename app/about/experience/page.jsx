import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata = { title: "Kinh nghiệm" };
export default function ExperiencePage() {
  return (
    <section className="max-w-3xl">
      <SectionTitle
        label="KINH NGHIỆM"
        title="Học thông qua thực hành"
        description="Những trải nghiệm từ các bài tập và dự án học tập."
      />
      <div className="panel">
        <h2 className="text-xl font-bold">Xây dựng ứng dụng web</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-muted">
          <li>
            Tạo website cá nhân với React Router và chia giao diện thành
            component.
          </li>
          <li>
            Thực hành thư viện game, hiển thị dữ liệu và tương tác trong trình
            duyệt.
          </li>
          <li>Nâng cấp portfolio với Next.js App Router và Tailwind CSS.</li>
        </ul>
        <Link href="/projects" className="text-link mt-6 inline-block">
          Xem các dự án →
        </Link>
      </div>
    </section>
  );
}
