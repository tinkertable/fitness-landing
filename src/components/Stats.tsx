import { site } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-line bg-sand/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 sm:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="px-2 py-8 text-center sm:py-10">
            <div className="font-serif text-3xl font-bold text-moss-deep sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
