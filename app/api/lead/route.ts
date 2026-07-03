import { NextResponse } from "next/server";

// Приём заявок. Сейчас — заглушка: валидируем honeypot и логируем.
// TODO: подключить реальную доставку (email/Bitrix24 REST/Telegram-бот).
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // honeypot: если поле заполнено — это бот, тихо принимаем и игнорируем
    if (data?.company) {
      return NextResponse.json({ ok: true });
    }

    if (!data?.name || !data?.phone) {
      return NextResponse.json(
        { ok: false, error: "name and phone are required" },
        { status: 400 }
      );
    }

    // eslint-disable-next-line no-console
    console.log("[lead] new request:", {
      name: data.name,
      phone: data.phone,
      task: data.task ?? null,
      comment: data.comment ?? null,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid payload" },
      { status: 400 }
    );
  }
}
