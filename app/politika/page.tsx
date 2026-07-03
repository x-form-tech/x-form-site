import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Политика конфиденциальности"
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Политика конфиденциальности" },
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container-x max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {/* TODO: заменить на юридически выверенный текст политики. */}
          <p>
            Настоящая политика описывает порядок обработки персональных данных,
            которые {site.name} получает через формы на сайте {site.url}.
          </p>
          <p>
            Оставляя заявку, пользователь соглашается на обработку указанных им
            данных (имя, телефон, комментарий) с целью обратной связи по запросу.
          </p>
          <p className="rounded-2xl border border-dashed border-line bg-surface-muted/50 p-5 text-ink-muted">
            Это черновик-заглушка. Перед запуском разместите здесь полный текст
            политики конфиденциальности, согласованный с юристом.
          </p>
        </div>
      </section>
    </>
  );
}
