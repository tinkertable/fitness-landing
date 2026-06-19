import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} | ${site.tagline}`,
  description: `${site.addressShort}. 전담 트레이너 1:1 퍼스널 트레이닝으로 다이어트·바디프로필·재활까지. 첫 체험 ${site.brand}에서 시작하세요.`,
  openGraph: {
    title: `${site.brand} | ${site.tagline}`,
    description: `${site.addressShort}. 1:1 퍼스널 트레이닝 스튜디오.`,
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
