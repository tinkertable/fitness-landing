import { trainers } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Trainers() {
  return (
    <section id="trainers" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <SectionHeading
        label="Trainers"
        title="당신의 몸을 아는 사람들"
        desc="자격과 경력을 갖춘 전담 강사가 첫 분석부터 마지막 수업까지 함께합니다."
      />

      {/* 2컬럼 대형 가로 프로필 카드 (1호의 3컬럼 세로 카드와 차별화) */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {trainers.map((t) => (
          <div
            key={t.name}
            className="group grid items-center overflow-hidden rounded-2xl border border-line bg-cream sm:grid-cols-[10rem_1fr] last:sm:col-span-2 last:sm:mx-auto last:sm:max-w-[calc(50%-0.625rem)]"
          >
            {/* 사진 교체 지점 */}
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sand via-sand-deep to-moss/30 sm:aspect-auto sm:h-full">
              <span className="text-6xl font-bold text-moss-deep/40">
                {t.initial}
              </span>
            </div>
            <div className="p-6 sm:py-8 sm:pr-8 sm:pl-6">
              <h3 className="text-2xl font-bold text-ink">{t.name}</h3>
              <p className="mt-2 font-medium text-moss">{t.role}</p>
              <p className="mt-1 text-sm text-muted">{t.years}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
