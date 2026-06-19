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

      {/* 가로형 카드 스택 (1호의 3컬럼 그리드와 차별화) */}
      <div className="mt-12 space-y-5">
        {programs.map((p, i) => (
          <div
            key={p.name}
            className={`group grid items-center gap-6 rounded-2xl border p-6 transition-transform hover:-translate-y-0.5 sm:p-8 md:grid-cols-[1fr_1.8fr] ${
              p.featured
                ? "border-moss/40 bg-moss/10 shadow-lg shadow-moss/10"
                : "border-line bg-cream"
            }`}
          >
            {/* 좌: 프로그램 넘버 + 제목 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-moss/15 text-sm font-black text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.featured && (
                  <span className="rounded-full bg-moss px-3 py-1 text-xs font-bold text-cream">
                    가장 인기
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-ink">{p.name}</h3>
            </div>

            {/* 우: 설명 + 포인트 */}
            <div>
              <p className="leading-relaxed text-ink-soft">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-full border border-line bg-sand/60 px-4 py-1.5 text-sm text-ink-soft"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
