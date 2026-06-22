import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      {/* 배경: 다크 그라데이션 + 네온 액센트 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(182,242,61,0.08), transparent 60%), radial-gradient(circle at 80% 80%, rgba(255,106,61,0.06), transparent 50%)",
        }}
      />
      {/* 장식: 수평 라인 패턴 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, var(--color-line) 59px, var(--color-line) 60px)",
        }}
      />

      <div className="rise mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-sand/60 px-4 py-1.5 text-xs font-semibold text-moss">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          {site.addressShort}
        </span>

        <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          당신의 한계,
          <br />
          <span className="text-moss">여기서 깨집니다</span>
        </h1>

        <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-ink-soft sm:text-xl">
          체성분 분석부터 식단까지, 전담 트레이너의 1:1 설계.
          <br className="hidden sm:block" />
          다이어트·바디프로필·재활 — 목표까지 가장 빠른 길.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="#reserve"
            className="w-full rounded-full bg-moss px-8 py-4 text-center text-base font-bold text-cream shadow-lg shadow-moss/20 transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            39,000원 체험 PT 예약
          </a>
          <a
            href={site.phoneHref}
            className="w-full rounded-full border border-line px-8 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-moss hover:text-moss sm:w-auto"
          >
            {site.phone}
          </a>
        </div>

        {/* 하단 인용 */}
        <p className="mx-auto mt-14 max-w-md text-sm text-muted">
          &ldquo;3개월 만에 11kg, 인생이 바뀌었어요&rdquo; — 누적 회원
          2,000명이 증명한 변화
        </p>
      </div>
    </section>
  );
}
