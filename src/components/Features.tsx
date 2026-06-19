import { SectionHeading } from "./SectionHeading";

const features = [
  {
    title: "InBody 분석부터 시작",
    desc: "현재를 숫자로 파악하고 목표까지 역산해 설계합니다. 감(感)이 아닌 데이터로.",
    icon: "M3 12h4l3 8 4-16 3 8h4",
  },
  {
    title: "전담 트레이너 1:1 책임",
    desc: "매번 바뀌는 강사 없이, 내 몸을 아는 한 사람이 첫날부터 끝까지 함께합니다.",
    icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 21a7 7 0 0 1 14 0",
  },
  {
    title: "식단까지 함께 관리",
    desc: "운동만으론 안 됩니다. 끼니별 코칭으로 결과를 눈에 띄게 앞당깁니다.",
    icon: "M4 7h16M4 7l1.5 13h13L20 7M9 7V4h6v3",
  },
  {
    title: "새벽 6시 – 밤 11시",
    desc: "성수역 3분. 출근 전이든 퇴근 후든, 당신 시간에 맞춰 운동할 수 있게.",
    icon: "M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11Zm0-8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
];

export function Features() {
  return (
    <section className="border-y border-line bg-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          label="Why FORGE"
          title="왜 포지에서 결과가 나올까"
          center
        />

        {/* 2×2 대형 카드 그리드 (1호의 4컬럼 소형 아이콘과 차별화) */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-cream p-8 transition-transform hover:-translate-y-0.5"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-moss/15 text-moss-deep">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
