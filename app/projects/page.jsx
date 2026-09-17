import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata = { title: "Dự án" };
export default function ProjectsPage() {
  return (
    <section>
      <SectionTitle
        label="DỰ ÁN"
        title="Một vài sản phẩm của mình"
        description="Những bài thực hành trong quá trình học lập trình web."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
