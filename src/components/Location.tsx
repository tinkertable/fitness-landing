import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Location() {
  return (
    <section id="location" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <SectionHeading label="Location" title="오시는 길" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* 정보 */}
        <div className="space-y-6">
          <InfoRow label="주소">
            <p className="text-ink-soft">{site.address}</p>
            <p className="mt-1 text-sm text-muted">{site.addressShort}</p>
          </InfoRow>

          <InfoRow label="운영 시간">
            <ul className="space-y-1.5">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-ink-soft sm:max-w-xs">
                  <span className="font-medium">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </InfoRow>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-moss-deep"
            >
              네이버 지도 길찾기
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sand/60"
            >
              {site.phone}
            </a>
          </div>
        </div>

        {/* 지도 자리 (납품 시 네이버/카카오 지도 iframe 으로 교체) */}
        <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-line bg-sand/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto h-10 w-10 text-moss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <p className="mt-2 text-sm text-muted">{site.addressShort}</p>
              <p className="mt-1 text-xs text-muted/70">
                {/* 지도 교체: 네이버 지도 → 공유 → 'HTML 태그'의 iframe 삽입 */}
                지도 iframe 삽입 영역
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-moss/40 pl-5">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-moss">
        {label}
      </h3>
      {children}
    </div>
  );
}
