import Link from "next/link";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import { documents } from "@/data/docs";

export function generateStaticParams() {
  return documents.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title:
      documents.find((doc) => doc.slug.join("/") === slug.join("/"))?.title ||
      "Không tìm thấy ghi chép",
  };
}

export default async function DocPage({ params }) {
  // Catch-all: slug là mảng, ví dụ ['react', 'components', 'props'].
  const { slug } = await params;
  const document = documents.find(
    (doc) => doc.slug.join("/") === slug.join("/"),
  );
  if (!document) notFound();

  return (
    <article className="max-w-3xl">
      <nav
        aria-label="Đường dẫn ghi chép"
        className="mb-8 flex flex-wrap gap-2 text-sm"
      >
        <Link className="text-link" href="/docs">
          Ghi chép
        </Link>
        {slug.map((segment, index) => (
          <span key={segment}>
            {" "}
            /{" "}
            <Link
              className="text-link"
              href={`/docs/${slug.slice(0, index + 1).join("/")}`}
              aria-current={index === slug.length - 1 ? "page" : undefined}
            >
              {segment}
            </Link>
          </span>
        ))}
      </nav>
      <SectionTitle label="GÓC HỌC TẬP" title={document.title} />
      <p className="leading-8 text-muted">{document.text}</p>
      <pre className="panel mt-6 overflow-x-auto text-sm leading-7 text-purple">
        <code>{document.code}</code>
      </pre>
      <Link href="/docs" className="text-link mt-8 inline-block">
        ← Tất cả ghi chép
      </Link>
    </article>
  );
}
