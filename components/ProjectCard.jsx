import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="panel flex h-full flex-col">
      <span aria-hidden="true" className="mb-4 text-3xl">
        {project.icon}
      </span>
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p className="my-3 text-sm leading-6 text-muted">{project.description}</p>
      <ul aria-label="Công nghệ" className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded bg-purple/10 px-2 py-1 text-xs text-purple"
          >
            {tech}
          </li>
        ))}
      </ul>
      <Link
        className="text-link mt-auto text-sm"
        href={`/projects/${project.id}`}
        aria-label={`Xem chi tiết ${project.name}`}
      >
        Xem chi tiết →
      </Link>
    </article>
  );
}
