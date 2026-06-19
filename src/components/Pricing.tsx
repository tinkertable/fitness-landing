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

        {/* 수평 비교형 카드 (1호의 3컬럼 세로 카드와 차별화) */}
        <div className="mt-12 space-y-4">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`grid items-center gap-6 rounded-2xl border p-6 sm:p-8 md:grid-cols-[1fr_2fr_auto] ${
                p.highlight
                  ? "border-moss bg-moss/10 shadow-lg shadow-moss/10"
                  : "border-line bg-cream"
              }`}
            >
              {/* 좌: 플랜 이름 + 가격 */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                  {p.highlight && (
                    <span className="rounded-full bg-moss px-3 py-1 text-xs font-bold text-cream">
                      추천
                    </span>
                  )}
                </div>
                <div className="mt-2 text-3xl font-black text-ink">
                  {p.price}
                </div>
                <p className="mt-1 text-sm text-muted">{p.note}</p>
              </div>

              {/* 중: 포함 내역 (가로 나열) */}
              <ul className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-sand/60 px-3.5 py-1.5 text-sm text-ink-soft"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-moss"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* 우: CTA */}
              <a
                href="#reserve"
                className={`rounded-full px-7 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.highlight
                    ? "bg-moss text-cream shadow-md shadow-moss/20"
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
