import { pricing } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-sand/40">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
        <SectionHeading
          label="Pricing"
          title="투명한 가격, 숨은 비용 없이"
          desc="등록 전 1:1 체험으로 충분히 경험해 보세요. 부담 없이 시작하는 게 맞습니다."
          center
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.highlight
                  ? "border-moss bg-ink text-cream shadow-2xl shadow-ink/20 lg:-translate-y-3"
                  : "border-line bg-cream"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-moss px-4 py-1 text-xs font-bold text-cream">
                  추천
                </span>
              )}
              <h3
                className={`text-lg font-bold ${p.highlight ? "text-cream" : "text-ink"}`}
              >
                {p.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold">{p.price}</span>
              </div>
              <p
                className={`mt-1 text-sm ${p.highlight ? "text-cream/70" : "text-muted"}`}
              >
                {p.note}
              </p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-cream" : "text-moss"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={p.highlight ? "text-cream/85" : "text-ink-soft"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#reserve"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.highlight
                    ? "bg-cream text-ink hover:bg-sand"
                    : "bg-ink text-cream hover:bg-moss-deep"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
