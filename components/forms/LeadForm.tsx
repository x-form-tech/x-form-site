"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";
import { ButtonEl } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z
    .string()
    .min(10, "Укажите корректный телефон")
    .regex(/^[\d\s()+\-]+$/, "Только цифры и символы + ( ) -"),
  task: z.string().optional(),
  comment: z.string().max(1000).optional(),
  // honeypot — реальные пользователи это поле не видят и не заполняют
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm({
  withTask = false,
  compact = false,
}: {
  withTask?: boolean;
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
      reset();
    } catch {
      // Плейсхолдер обработки ошибки. TODO: показать понятное сообщение / retry.
      alert("Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.");
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface-muted p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" />
        <p className="text-lg font-semibold text-ink">Заявка отправлена</p>
        <p className="text-sm text-ink-muted">
          Свяжемся с вами в рабочее время — обычно в течение пары часов.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <Field label="Имя" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Как к вам обращаться"
            className={inputCls}
            autoComplete="name"
          />
        </Field>
        <Field label="Телефон" error={errors.phone?.message}>
          <input
            {...register("phone")}
            placeholder="+7 (___) ___-__-__"
            className={inputCls}
            inputMode="tel"
            autoComplete="tel"
          />
        </Field>
      </div>

      {withTask && (
        <Field label="Задача" error={errors.task?.message}>
          <select {...register("task")} className={inputCls} defaultValue="">
            <option value="" disabled>
              Выберите услугу
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Другое">Другое / не знаю</option>
          </select>
        </Field>
      )}

      {withTask && (
        <Field label="Комментарий" error={errors.comment?.message}>
          <textarea
            {...register("comment")}
            rows={3}
            placeholder="Коротко о задаче (необязательно)"
            className={cn(inputCls, "resize-none")}
          />
        </Field>
      )}

      {/* honeypot: скрыто от людей, ловит ботов */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Компания
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <ButtonEl type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Отправляем…
          </>
        ) : (
          "Отправить заявку"
        )}
      </ButtonEl>

      <p className="text-center text-xs text-ink-muted">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/politika" className="underline hover:text-ink">
          политикой конфиденциальности
        </a>
        .
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-surface-muted px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
