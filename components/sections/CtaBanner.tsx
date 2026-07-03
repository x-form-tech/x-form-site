import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaBanner({
  title = "Не нашли нужное или не знаете, с чего начать?",
  text = "Проведём бесплатный аудит и подскажем оптимальное решение под вашу задачу.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-8 py-12 text-white md:px-14 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-white/80">{text}</p>
            </div>
            <Button
              href="/kontakty"
              size="lg"
              variant="secondary"
              className="shrink-0"
            >
              Получить аудит
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
