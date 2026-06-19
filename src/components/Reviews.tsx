import { reviews } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading label="Reviews" title="회원들의 진짜 후기" center />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.author}
            className="flex flex-col rounded-3xl border border-line bg-cream p-7"
          >
            <div className="mb-4 text-moss" aria-label="별점 5점">
              {"★★★★★"}
            </div>
            <blockquote className="flex-1 leading-relaxed text-ink-soft">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <span className="font-semibold text-ink">{r.author}</span>
              <span className="ml-2 text-sm text-muted">{r.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
