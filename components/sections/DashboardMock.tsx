import { TrendingUp, Phone, Boxes, CheckCircle2 } from "lucide-react";

// Декоративный «продукт в деле» вместо стокового фото.
// Абстрактный дашборд CRM — чистый, воздушный, без реальных данных.
export function DashboardMock() {
  const funnel = [
    { label: "Новые", value: 82, w: "100%" },
    { label: "В работе", value: 54, w: "72%" },
    { label: "Счёт", value: 31, w: "48%" },
    { label: "Оплачено", value: 19, w: "30%" },
  ];

  return (
    <div className="relative mx-auto max-w-md">
      {/* main card */}
      <div className="gradient-border animate-float rounded-3xl border border-line bg-panel/80 p-5 shadow-lift backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-ink">Воронка продаж</p>
            <p className="text-xs text-ink-muted">Обновлено только что</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-medium text-brandink">
            <TrendingUp className="h-3.5 w-3.5" /> +18%
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {funnel.map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between text-xs text-ink-muted">
                <span>{row.label}</span>
                <span className="font-medium text-ink-soft">{row.value}</span>
              </div>
              <div className="h-2.5 rounded-full bg-surface-sunken">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-accent"
                  style={{ width: row.w }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { icon: Phone, label: "Звонки" },
            { icon: Boxes, label: "1С" },
            { icon: CheckCircle2, label: "Задачи" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-surface-sunken py-3"
            >
              <Icon className="h-4 w-4 text-brandink" />
              <span className="text-[11px] text-ink-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-panel/90 p-3.5 shadow-glow backdrop-blur-md sm:block">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">−40%</p>
            <p className="text-xs text-ink-muted">времени на заявку</p>
          </div>
        </div>
      </div>
    </div>
  );
}
