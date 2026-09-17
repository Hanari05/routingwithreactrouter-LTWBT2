export default function SkillCard({ skill }) {
  return (
    <article className="panel">
      <h3 className="font-bold text-purple">{skill.name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{skill.description}</p>
    </article>
  );
}
