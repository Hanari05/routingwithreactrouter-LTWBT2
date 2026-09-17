import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { documents } from "@/data/docs";

export const metadata = { title: "Ghi chép" };
export default function DocsPage() {
  return (
    <section className="max-w-3xl">
      <SectionTitle
        label="GHI CHÉP"
        title="Góc học tập"
        description="Một vài ghi chú ngắn khi học React và Next.js."
      />
      <ul className="panel space-y-5">
        {documents.map((doc) => (
          <li key={doc.slug.join("/")}>
            <Link className="text-link" href={`/docs/${doc.slug.join("/")}`}>
              {doc.title}
            </Link>
            <p className="mt-1 text-xs text-muted">{doc.slug.join(" / ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
