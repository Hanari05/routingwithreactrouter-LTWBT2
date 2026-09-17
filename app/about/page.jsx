import SectionTitle from "@/components/SectionTitle";
import ProfileIntro from "@/components/ProfileIntro";
import { profile } from "@/data/portfolio";

export const metadata = { title: "Giới thiệu" };
export default function AboutPage() {
  return (
    <section className="max-w-3xl">
      <SectionTitle
        label="GIỚI THIỆU"
        title="Về bản thân mình"
        description={profile.bio}
      />
      <ProfileIntro
        name={profile.name}
        studyYear={profile.studyYear}
        isStudent={profile.isStudent}
        interests={profile.interests}
      />
      <p className="mt-6 leading-7 text-muted">
        <strong className="text-white">Ngành học:</strong> {profile.major}
      </p>
    </section>
  );
}
