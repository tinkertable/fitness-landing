"use client";

import { useActionState } from "react";
import { submitReservation, type ReservationState } from "@/app/actions";
import { programs, site } from "@/lib/site";

const initialState: ReservationState | null = null;

export function ReservationForm() {
  const [state, formAction, pending] = useActionState(
    submitReservation,
    initialState,
  );

  return (
    <section id="reserve" className="border-t border-line bg-sand-deep scroll-mt-20">
      {/* 풀폭 싱글 컬럼 CTA (1호의 좌우 분할과 차별화) */}
      <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-clay">
            Reservation
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
            39,000원으로
            <br />
            첫 변화를 시작하세요
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-soft">
            아래 정보를 남겨주시면 영업시간 내 연락드려 일정을 잡아드립니다.
            상담은 부담 없이, 등록 강요는 절대 없습니다.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-line bg-cream p-7 sm:p-8">
          {state?.ok ? (
            <div className="flex min-h-72 flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-moss/15 text-moss-deep">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-ink">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-5">
              <Field label="이름" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="홍길동"
                  className="input"
                />
              </Field>

              <Field label="휴대폰 번호" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  required
                  inputMode="tel"
                  placeholder="010-1234-5678"
                  className="input"
                />
              </Field>

              <Field label="관심 프로그램" htmlFor="program">
                <select id="program" name="program" defaultValue="" className="input">
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  {programs.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="아직 모르겠어요">아직 모르겠어요</option>
                </select>
              </Field>

              <Field label="문의 / 희망 시간 (선택)" htmlFor="memo">
                <textarea
                  id="memo"
                  name="memo"
                  rows={3}
                  placeholder="예: 평일 저녁 7시 이후 희망합니다"
                  className="input resize-none"
                />
              </Field>

              {state && !state.ok && (
                <p className="rounded-xl bg-clay/10 px-4 py-3 text-sm font-medium text-clay">
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-full bg-moss py-3.5 text-base font-bold text-cream shadow-md shadow-moss/20 transition-colors hover:bg-moss-deep disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "접수 중…" : "체험 예약 신청하기"}
              </button>

              <p className="text-center text-xs text-muted">
                개인정보는 예약 상담 목적으로만 사용되며 안전하게 보관됩니다.
              </p>
            </form>
          )}
        </div>

        {/* 연락처 정보 */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted">
          <a href={site.phoneHref} className="hover:text-moss">
            {site.phone}
          </a>
          <span>{site.address}</span>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
