import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-lg font-black tracking-tight text-ink">
            {site.brand}
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        <div className="text-sm text-ink-soft">
          <p>{site.address}</p>
          <p className="mt-1">
            <a href={site.phoneHref} className="font-semibold hover:text-moss">
              {site.phone}
            </a>
          </p>
          {(site.instagramUrl || site.kakaoUrl) && (
            <div className="mt-4 flex gap-4">
              {site.instagramUrl && (
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-moss">
                  Instagram
                </a>
              )}
              {site.kakaoUrl && (
                <a href={site.kakaoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-moss">
                  카카오톡
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
