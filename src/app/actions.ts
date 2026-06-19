"use server";

/**
 * 예약/상담 신청 서버 액션.
 *
 * ▼▼ 실제 납품 시 연동 지점 (택1 또는 병행) ▼▼
 *  1) 카카오 알림톡 / 문자  : 솔라피(SOLAPI), 알리고 등 API 호출
 *  2) 이메일                : Resend, Nodemailer 로 사장님 메일함에 전송
 *  3) 구글시트              : Google Sheets API 로 행 추가 (가장 저렴)
 *  4) 슬랙/디스코드 웹훅     : 가장 빠른 실시간 알림
 *
 * 지금은 데모이므로 서버 콘솔에만 기록합니다.
 * 환경변수(.env.local)에 키를 넣고 아래 TODO 부분만 채우면 실가동됩니다.
 */

export type ReservationState = {
  ok: boolean;
  message: string;
};

export async function submitReservation(
  _prev: ReservationState | null,
  formData: FormData,
): Promise<ReservationState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const program = String(formData.get("program") ?? "").trim();
  const memo = String(formData.get("memo") ?? "").trim();

  // 간단 검증
  if (name.length < 2) {
    return { ok: false, message: "이름을 정확히 입력해 주세요." };
  }
  if (!/^01[0-9]-?\d{3,4}-?\d{4}$/.test(phone.replace(/\s/g, ""))) {
    return { ok: false, message: "휴대폰 번호 형식을 확인해 주세요. (예: 010-1234-5678)" };
  }

  const payload = {
    name,
    phone,
    program: program || "미선택",
    memo: memo || "-",
    // 서버 액션 안에서는 Date.now() 사용 가능 (워크플로 스크립트와 무관)
    receivedAt: new Date().toISOString(),
  };

  // 슬랙 웹훅 알림 (환경변수가 있을 때만 전송)
  if (process.env.SLACK_WEBHOOK_URL) {
    try {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: [
            `📩 *새 체험 예약*`,
            `• 이름: ${name}`,
            `• 연락처: ${phone}`,
            `• 프로그램: ${program || "미선택"}`,
            `• 메모: ${memo || "-"}`,
            `• 접수: ${payload.receivedAt}`,
          ].join("\n"),
        }),
      });
    } catch (e) {
      console.error("[슬랙 웹훅 실패]", e);
    }
  }

  console.log("[예약 신청 접수]", payload);

  return {
    ok: true,
    message: `${name}님, 신청이 접수되었습니다. 영업시간 내 연락드리겠습니다 🌿`,
  };
}
