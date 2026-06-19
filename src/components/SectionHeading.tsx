export function SectionHeading({
  label,
  title,
  desc,
  center = false,
}: {
  label: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-moss">
        {label}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{desc}</p>}
    </div>
  );
}
