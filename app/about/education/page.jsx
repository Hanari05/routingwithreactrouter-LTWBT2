import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/portfolio";

export const metadata = { title: "Học vấn" };
export default function EducationPage() {
  return (
    <section className="max-w-3xl">
      <SectionTitle label="HỌC VẤN" title="Hành trình học tập" />
      <div className="panel">
        <h2 className="text-xl font-bold">{profile.major}</h2>
        <p className="mt-3 text-purple">Sinh viên năm {profile.studyYear}</p>
        <p className="mt-4 leading-7 text-muted">
          Mình đang thực hành xây dựng giao diện, lập trình ứng dụng web và tìm
          hiểu thiết kế game. Các bài tập React và Next.js giúp mình kết nối
          kiến thức với sản phẩm cụ thể.
        </p>
      </div>
    </section>
  );
}
