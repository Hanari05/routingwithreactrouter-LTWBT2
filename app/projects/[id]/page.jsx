import Link from "next/link";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/portfolio";

// Chỉ chấp nhận các ID có trong danh sách, trả HTTP 404 cho ID khác.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title:
      projects.find((project) => project.id === id)?.name ||
      "Không tìm thấy dự án",
  };
}

export default async function ProjectDetailPage({ params }) {
  // Next.js 16: params là Promise, cần await trước khi đọc id.
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <article className="max-w-3xl">
      <Link href="/projects" className="text-link mb-8 inline-block text-sm">
        ← Tất cả dự án
      </Link>
      <SectionTitle
        label={`DỰ ÁN ${project.id}`}
        title={project.name}
        description={project.description}
      />
      <div className="panel">
        <span aria-hidden="true" className="text-4xl">
          {project.icon}
        </span>
        <p className="mt-5 leading-7 text-muted">{project.details}</p>
        <h2 className="mt-6 text-xl font-bold">Chức năng chính</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <h2 className="mt-6 text-xl font-bold">Công nghệ</h2>
        <p className="mt-3 text-purple">{project.technologies.join(" · ")}</p>
        {project.source && (
          <a
            className="text-link mt-6 inline-block"
            href={project.source}
            target="_blank"
            rel="noreferrer"
          >
            Xem mã nguồn trên GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}
