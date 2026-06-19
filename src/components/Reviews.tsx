import { reviews } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading label="Reviews" title="회원들의 진짜 후기" center />

      {/* 싱글 컬럼 대형 인용문 (1호의 3컬럼 카드와 차별화) */}
      <div className="mt-12 space-y-6">
        {reviews.map((r) => (
          <figure
            key={r.author}
            className="rounded-2xl border border-line bg-cream p-8 sm:p-10"
          >
            <div className="mb-5 text-lg text-moss" aria-label="별점 5점">
              {"★★★★★"}
            </div>
            <blockquote className="max-w-3xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-moss/15 text-sm font-bold text-moss">
                {r.author.charAt(0)}
              </div>
              <div>
                <span className="font-semibold text-ink">{r.author}</span>
                <span className="ml-2 text-sm text-muted">{r.tag}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
