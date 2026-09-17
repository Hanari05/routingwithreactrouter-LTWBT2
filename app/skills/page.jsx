import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/portfolio";

export const metadata = { title: "Kỹ năng" };
export default function SkillsPage() {
  return (
    <section>
      <SectionTitle
        label="KỸ NĂNG"
        title="Những điều mình đang học và làm"
        description="Từ thiết kế giao diện đến phát triển ứng dụng và game."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
