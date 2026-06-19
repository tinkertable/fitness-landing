import { programs } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <SectionHeading
        label="Programs"
        title="목표에 맞는 수업을 고르세요"
        desc="처음이든, 통증이 있든, 누군가와 함께든 — 당신에게 맞는 방식이 있습니다."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-3xl border p-8 transition-transform hover:-translate-y-1 ${
              p.featured
                ? "border-moss/40 bg-moss/10 shadow-lg shadow-moss/10"
                : "border-line bg-cream"
            }`}
          >
            {p.featured && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-moss px-3 py-1 text-xs font-bold text-cream">
                가장 인기
              </span>
            )}
            <h3 className="font-serif text-2xl font-bold text-ink">{p.name}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{p.desc}</p>
            <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <svg className="h-4 w-4 shrink-0 text-moss" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
