import { SectionHeading } from "./SectionHeading";

const results = [
  { metric: "−12kg", label: "평균 감량", sub: "3개월 기준" },
  { metric: "−8%", label: "체지방률 감소", sub: "20회권 기준" },
  { metric: "96%", label: "목표 달성률", sub: "12주 이상 유지 회원" },
  { metric: "2,000+", label: "누적 변화", sub: "지금도 진행 중" },
];

export function Results() {
  return (
    <section className="border-y border-line bg-sand-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          label="Results"
          title="숫자로 증명합니다"
          desc="약속이 아니라 결과로 말합니다. 포지 회원들의 실제 변화."
          center
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r) => (
            <div
              key={r.label}
              className="flex flex-col items-center rounded-2xl border border-line bg-cream/50 px-6 py-10 text-center transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl font-black text-moss-deep sm:text-5xl">
                {r.metric}
              </span>
              <span className="mt-3 text-base font-bold text-ink">
                {r.label}
              </span>
              <span className="mt-1 text-sm text-muted">{r.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
