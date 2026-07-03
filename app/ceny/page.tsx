import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Цены и тарифы",
  description:
    "Ориентировочная стоимость услуг по Битрикс24: внедрение, настройка CRM, интеграции и поддержка. Точная смета — после аудита.",
};

// TODO: заменить вилки цен на реальные значения.
const priceRows = [
  { service: "Аудит / предпроектное обследование", price: "от 15 000 ₽" },
  { service: "Настройка CRM и бизнес-процессов", price: "от 40 000 ₽" },
  { service: "Внедрение под ключ", price: "от 120 000 ₽" },
  { service: "Интеграция с 1С", price: "от 50 000 ₽" },
  { service: "Интеграция телефонии / мессенджеров", price: "от 20 000 ₽" },
  { service: "Миграция из другой CRM", price: "от 35 000 ₽" },
  { service: "Техподдержка (пакет часов)", price: "от 10 000 ₽ / мес" },
];

const factors = [
  "Количество пользователей и отделов",
  "Число и сложность интеграций",
  "Объём данных для миграции",
  "Глубина автоматизации процессов",
  "Наличие доработок под задачи",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Цены"
        title="Прозрачное ценообразование"
        subtitle="Ниже — ориентировочные вилки. Точную смету с фиксированной ценой даём после бесплатного аудита."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Цены" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-line bg-panel/60 shadow-soft backdrop-blur-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line bg-surface-muted/60 text-sm text-ink-muted">
                  <th className="px-6 py-4 font-medium">Услуга</th>
                  <th className="px-6 py-4 text-right font-medium">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr
                    key={row.service}
                    className="border-b border-line last:border-0"
                  >
                    <td className="px-6 py-4 text-[15px] text-ink-soft">
                      {row.service}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-ink">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="rounded-3xl border border-line bg-surface-muted/50 p-6">
            <h2 className="text-lg font-semibold text-ink">
              От чего зависит стоимость
            </h2>
            <ul className="mt-4 space-y-3">
              {factors.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
