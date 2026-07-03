import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Услуги по Битрикс24",
  description:
    "Внедрение, настройка CRM, интеграции с 1С и телефонией, доработка, миграция, лицензии и поддержка Битрикс24.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title="Что мы делаем с Битрикс24"
        subtitle="11 направлений — от разовой настройки до внедрения под ключ и постоянного сопровождения. Выберите задачу."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
      />
      <div className="py-16">
        <ServicesGrid standalone />
      </div>
      <Process />
      <CtaBanner />
    </>
  );
}
