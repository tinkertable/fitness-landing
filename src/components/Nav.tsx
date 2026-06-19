import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#programs", label: "프로그램" },
  { href: "#pricing", label: "가격" },
  { href: "#trainers", label: "강사진" },
  { href: "#location", label: "오시는 길" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tight text-ink">
            {site.brand}
          </span>
          <span className="text-[10px] font-medium tracking-[0.25em] text-moss">
            {site.brandEn}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-moss"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reserve"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-moss-deep"
        >
          체험 예약
        </a>
      </nav>
    </header>
  );
}
