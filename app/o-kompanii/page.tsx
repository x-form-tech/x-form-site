import type { Metadata } from "next";
import { ShieldCheck, Clock, Award } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section, SectionHeader } from "@/components/ui/Section";
import { stats } from "@/lib/site";

const guarantees = [
  {
    icon: Award,
    title: "Сертифицированная команда",
    text: "Личные сертификаты специалистов Битрикс24 и опыт десятков внедрений.", // TODO
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на работы",
    text: "Даём гарантию N месяцев и бесплатно исправляем, если что-то пошло не так.", // TODO
  },
  {
    icon: Clock,
    title: "SLA по поддержке",
    text: "Фиксированное время реакции на обращения, закреплённое в договоре.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title="Команда, которая доводит Битрикс24 до результата"
        subtitle="Мы не просто настраиваем систему — отвечаем за то, чтобы ей пользовались и она окупалась."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />

      {/* Stats */}
      <Section className="bg-transparent">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-surface-muted/50 p-6 text-center"
            >
              <div className="text-3xl font-semibold text-gradient md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl text-lg leading-relaxed text-ink-muted">
          {/* TODO: заменить на реальный текст о компании */}
          <p>
            X-Form занимается внедрением, автоматизацией и поддержкой Битрикс24.
            Помогаем отделам продаж навести порядок в заявках, выстроить
            прозрачную воронку и связать CRM с 1С, телефонией и другими
            системами. Работаем на результат, а не на «сдали и ушли».
          </p>
        </div>
      </Section>

      {/* Как мы работаем */}
      <Process />

      {/* Гарантии и SLA */}
      <Section className="bg-surface-muted/40">
        <SectionHeader
          eyebrow="Гарантии и SLA"
          title="Что мы гарантируем"
          subtitle="Это компенсирует отсутствие партнёрского бейджа — реальными обязательствами."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {guarantees.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
