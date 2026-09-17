import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 py-6 text-sm text-muted">
      © 2026 {profile.name}
    </footer>
  );
}
