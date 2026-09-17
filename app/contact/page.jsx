import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/portfolio";

export const metadata = { title: "Liên hệ" };
export default function ContactPage() {
  return (
    <section>
      <SectionTitle
        label="LIÊN HỆ"
        title="Kết nối với mình"
        description="Nếu muốn trao đổi về học tập hoặc dự án, hãy liên hệ với mình nhé."
      />
      <div className="grid items-start gap-8 md:grid-cols-2">
        <address className="space-y-5 leading-7 not-italic text-muted">
          <p>
            <strong className="text-white">Email</strong>
            <br />
            <a className="text-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <p>
            <strong className="text-white">GitHub</strong>
            <br />
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/Hanari05 ↗
            </a>
          </p>
          <p>
            <strong className="text-white">Địa điểm</strong>
            <br />
            {profile.location}
          </p>
        </address>
        <ContactForm />
      </div>
    </section>
  );
}
