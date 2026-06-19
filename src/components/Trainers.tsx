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

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {trainers.map((t) => (
          <div
            key={t.name}
            className="group overflow-hidden rounded-3xl border border-line bg-cream"
          >
            {/* 사진 교체 지점: 아래 블록 배경을 강사 사진으로 */}
            <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sand via-sand-deep to-moss/30">
              <span className="font-serif text-6xl font-bold text-moss-deep/40">
                {t.initial}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-ink">{t.name}</h3>
              <p className="mt-1 text-sm font-medium text-moss">{t.role}</p>
              <p className="mt-1 text-sm text-muted">{t.years}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
