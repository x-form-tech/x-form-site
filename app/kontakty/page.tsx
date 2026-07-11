import type { Metadata } from "next";
import { Phone, Mail, Send, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с X-Form: телефон, email, Telegram. Оставьте заявку на бесплатный аудит Битрикс24.",
};

export default function ContactsPage() {
  const contacts = [
    {
      icon: Phone,
      label: "Телефон",
      value: site.phone,
      href: `tel:${site.phoneHref}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: Send, label: "Telegram", value: "Написать", href: site.telegram },
  ];

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Обсудим ваш проект"
        subtitle="Оставьте заявку или напишите в удобный мессенджер — ответим в рабочее время."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="card card-hover"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm text-ink-muted">{label}</p>
                  <p className="mt-0.5 font-semibold text-ink">{value}</p>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-line bg-surface-muted/50 p-6 text-sm text-ink-soft">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-600" />
                {site.address}
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-brand-600" />
                {site.workingHours}
              </p>
            </div>

            {/* TODO: вставить карту (Яндекс.Карты / 2ГИС), если есть офис */}
            <div className="mt-6 flex h-56 items-center justify-center rounded-2xl border border-dashed border-line bg-surface-muted/40 text-sm text-ink-muted">
              Здесь будет карта с адресом офиса
            </div>
          </div>

          <div className="gradient-border rounded-3xl border border-line bg-panel/70 p-6 shadow-soft backdrop-blur-md md:p-8">
            <h2 className="text-xl font-semibold text-ink">Оставить заявку</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Опишите задачу — вернёмся с предложением.
            </p>
            <div className="mt-6">
              <LeadForm withTask />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
