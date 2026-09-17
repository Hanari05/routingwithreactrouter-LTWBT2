import Link from "next/link";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { profile, skills, projects } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="max-w-3xl pb-12">
        <p className="mb-4 text-sm font-bold tracking-widest text-purple">
          XIN CHÀO, MÌNH LÀ GIA HÂN 👋
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-lg text-pink">{profile.role}</p>
        <p className="mt-4 max-w-2xl leading-7 text-muted">{profile.bio}</p>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link href="/about" className="button">
            Về mình 🌸
          </Link>
          <Link href="/projects" className="text-link">
            Xem dự án →
          </Link>
        </div>
      </section>
      <section aria-labelledby="featured-skills" className="mb-12">
        <h2 id="featured-skills" className="mb-5 text-2xl font-bold">
          Kỹ năng nổi bật
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {skills.slice(0, 3).map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <Link href="/skills" className="text-link mt-5 inline-block text-sm">
          Tất cả kỹ năng →
        </Link>
      </section>
      <section aria-labelledby="featured-projects">
        <h2 id="featured-projects" className="mb-5 text-2xl font-bold">
          Dự án tiêu biểu
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
