import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center py-20">
      <div className="container-x text-center">
        <p className="text-7xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-ink">
          Страница не найдена
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">
          Возможно, страница переехала или ссылка устарела. Вернитесь на главную
          или посмотрите наши услуги.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">На главную</Button>
          <Button href="/uslugi" variant="secondary">
            Услуги
          </Button>
        </div>
      </div>
    </section>
  );
}
