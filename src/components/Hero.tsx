import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 배경 장식 (외부 이미지 의존성 없음 — 즉시 렌더) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 20%, rgba(108,122,82,0.16), transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(189,107,74,0.12), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* 좌측 카피 */}
        <div className="rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-sand/60 px-4 py-1.5 text-xs font-semibold text-moss-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            {site.addressShort}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-black leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            당신의 한계,
            <br />
            <span className="text-moss">함께 깹니다</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            체성분 분석부터 식단까지, 전담 트레이너의 1:1 설계.
            <br />
            다이어트·바디프로필·재활, 목표까지 가장 빠른 길로.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-ink/10 transition-transform hover:-translate-y-0.5 hover:bg-moss-deep"
            >
              39,000원 체험 PT 예약
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-sand/60"
            >
              {site.phone}
            </a>
          </div>
        </div>

        {/* 우측 비주얼 (사진 교체 지점: 아래 div 배경을 스튜디오 사진으로) */}
        <div className="rise relative" style={{ animationDelay: "0.12s" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-sand via-sand-deep to-moss/30 shadow-2xl shadow-ink/10">
            {/* 사진 교체: backgroundImage 로 스튜디오 사진 넣으면 됩니다 */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="rounded-2xl bg-cream/85 p-6 backdrop-blur-sm">
                <p className="font-serif text-2xl font-bold text-ink">
                  &ldquo;3개월 만에 11kg, 인생이 바뀌었어요&rdquo;
                </p>
                <p className="mt-2 text-sm text-muted">
                  — 누적 회원 2,000명이 증명한 변화
                </p>
              </div>
            </div>
            {/* 데코 라인 */}
            <svg
              aria-hidden
              className="absolute -right-6 -top-6 h-40 w-40 text-moss/30"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
