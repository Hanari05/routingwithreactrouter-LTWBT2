import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function NotFound() {
  return (
    <section>
      <SectionTitle
        label="404"
        title="Không tìm thấy trang"
        description="Đường dẫn, dự án hoặc ghi chép này không tồn tại."
      />
      <Link href="/" className="button">
        Về trang chủ
      </Link>
    </section>
  );
}
