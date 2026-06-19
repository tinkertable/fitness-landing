# Studio Landing — 자영업 원페이지 랜딩 템플릿

필라테스/PT/공방/미용실 등 **로컬 스몰비즈니스용 1페이지 랜딩** 템플릿.
Next.js 16 (App Router) + Tailwind v4. 외부 이미지/폰트 CDN 의존성 없이 즉시 렌더되고,
**설정 파일 하나만 고치면 다른 가게로 리브랜딩**됩니다.

데모 브랜드: `코어무브 필라테스` (가상)

---

## 🚀 빠른 시작

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (타입체크 포함)
```

## ♻️ 새 클라이언트용 리브랜딩 (5분)

대부분 **`src/lib/site.ts` 한 파일**만 수정하면 됩니다.

| 바꿀 것 | 위치 |
|---|---|
| 상호·태그라인·연락처·주소·영업시간 | `src/lib/site.ts` → `site` |
| 프로그램 카드 | `programs` |
| 가격표 | `pricing` |
| 강사 소개 | `trainers` |
| 후기 | `reviews` |
| 신뢰 지표(통계 바) | `site.stats` |
| **색상 톤** | `src/app/globals.css` 상단 `@theme` (색 토큰만 교체) |

업종이 바뀌면 카피·라벨만 바꾸면 그대로 PT샵/미용실/공방 등에 재사용 가능합니다.

## 🖼️ 사진 넣기

코드에 `사진 교체 지점` 주석이 달린 곳에 클라이언트 사진을 넣으세요:

- 히어로 비주얼: `src/components/Hero.tsx`
- 강사 사진: `src/components/Trainers.tsx`
- 지도: `src/components/Location.tsx` (네이버 지도 → 공유 → iframe 붙여넣기)

배경으로 넣을 땐 해당 `div`에 `style={{ backgroundImage: "url(/photos/xxx.jpg)", backgroundSize: "cover" }}` 추가.
사진은 `public/` 폴더에 두면 됩니다.

## 📩 예약 폼 실연동 (이 템플릿의 핵심 차별점)

폼은 서버 액션(`src/app/actions.ts`)으로 동작합니다. 지금은 데모라 콘솔에만 기록.
실가동하려면 아래 중 하나를 `actions.ts`의 `TODO` 자리에 연결:

| 방식 | 추천 도구 | 비용 |
|---|---|---|
| 실시간 알림(가장 빠름) | 슬랙/디스코드 Webhook | 무료 |
| 카카오 알림톡/문자 | 솔라피(SOLAPI), 알리고 | 건당 과금 |
| 이메일 | Resend, Nodemailer | 무료~ |
| DB 적재 | 구글시트 API, Supabase | 무료~ |

키는 `.env.local`에 저장하고 코드에서 `process.env`로 참조하세요.

## ☁️ 배포 (Vercel, 무료)

```bash
npm i -g vercel
vercel        # 프리뷰
vercel --prod # 운영 배포
```

GitHub 연동 시 push만 하면 자동 배포. 커스텀 도메인 연결 가능.

---

## 포함 섹션

상단 네비 · 히어로 · 신뢰지표 · 프로그램 · 강점 · 후기 · 가격 · 강사진 · 예약폼 · 오시는길 · 푸터
(모두 모바일 반응형, 스크롤 앵커 이동, 접근성 라벨 포함)

## 판매 시 어필 포인트

- ⚡ 외부 CDN 의존성 0 → 어디서나 빠른 로딩, 광고 차단기에도 안 깨짐
- 📱 100% 모바일 최적화 (방문자 대부분이 모바일)
- 🔔 **폼 → 사장님 휴대폰/카톡 실시간 알림** (디자이너는 못 하는 부분)
- 🔍 메타데이터·OG 태그 세팅 완료 (네이버/카톡 공유 시 미리보기)
- 🛠️ 유지보수 쉬움 → 월 관리비 모델로 반복 매출
