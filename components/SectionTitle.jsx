// Server Component: chỉ trình bày nội dung, không cần state hoặc event handler.
export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm font-bold tracking-widest text-purple">
        {label}
      </p>
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}
