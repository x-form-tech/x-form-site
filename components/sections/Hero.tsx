import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/site";
import { DashboardMock } from "./DashboardMock";

const heroFacts = [
  "120+ завершённых проектов", // TODO: реальные цифры
  "Фиксированная стоимость проекта",
  "Внедрение от 3 недель",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[120px]" />

      <div className="container-x grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="eyebrow mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Интегратор Битрикс24
          </span>

          <h1 className="text-4xl font-semibold leading-[1.08] md:text-5xl lg:text-6xl">
            Битрикс24, который{" "}
            <span className="text-gradient">реально работает</span> на продажи
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Настройка, интеграции и поддержка CRM для отделов продаж — от 5 до
            200+ менеджеров. Внедряем так, чтобы система окупалась.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {heroFacts.map((fact) => (
              <li
                key={fact}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft"
              >
                <Check className="h-4 w-4 text-brandink" />
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/kontakty" size="lg">
              Получить бесплатный аудит
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/uslugi" size="lg" variant="secondary">
              Смотреть услуги
            </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <DashboardMock />
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-y border-line bg-surface-muted/60">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl font-semibold text-ink md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
