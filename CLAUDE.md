# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## О проекте

Корпоративный сайт **X-Form** — интегратора Битрикс24 (внедрение, автоматизация,
продажа лицензий). Стилистика: современная, чистая, «воздушная», без нагромождения.
Позиционирование без апелляции к партнёрскому статусу — упор на цифры, гарантии,
кейсы (см. `tz_struktura_saita_bitrix24 (1).md` — исходное ТЗ и прототип главной).

Разделы: главная, хаб «Услуги» + 11 подстраниц, кейсы, цены, о компании, блог,
контакты. Карта сайта и слуги — в `lib/nav.ts`.

## Стек

- **Next.js 14.2** (App Router) + **TypeScript** (strict)
- **Tailwind CSS** — дизайн-токены в `tailwind.config.ts`, слои в `app/globals.css`
- **Формы:** React Hook Form + Zod (`@hookform/resolvers`)
- **Иконки:** `lucide-react`
- **Шрифт:** Inter через `next/font/google` (subsets latin + cyrillic)
- **Деплой:** Vercel

## Контент = файлы (пока без БД)

Контент (услуги, кейсы, статьи блога, отзывы, преимущества, контакты, цифры)
живёт в `lib/` как типизированные TS-массивы, **не в базе данных**:

- `lib/site.ts` — глобальный конфиг: контакты, `stats` (доверительные цифры)
- `lib/services.ts` — 11 услуг (slug, заголовок, иконка, блоки), `getService()`
- `lib/content.ts` — боли, этапы, преимущества, кейсы, отзывы, статьи, `formatDate()`
- `lib/nav.ts` — главное меню и меню футера

Prisma + PostgreSQL из первоначального плана **сознательно отложены** до момента,
когда понадобится админка. Тогда слой `lib/*` заменяется на выборки из БД, а
компоненты не трогаются (они принимают данные, а не лезут в источник). Все места
с временными данными помечены комментарием `TODO` — реальные цифры, контакты,
кейсы и тексты подставляются туда.

## Структура

```
/app
  layout.tsx            # шапка + футер + метаданные, lang="ru", Inter
  page.tsx              # главная (композиция секций)
  globals.css           # Tailwind-слои, утилиты (.container-x, .card, .text-gradient, .bg-grid)
  sitemap.ts, robots.ts # SEO
  /uslugi   /[slug]     # хаб услуг + шаблон подстраницы (generateStaticParams)
  /keysy    /[slug]     # кейсы + карточка кейса
  /blog     /[slug]     # блог + статья
  /ceny  /o-kompanii  /kontakty  /politika
  /api/lead/route.ts    # приём заявок (заглушка: honeypot + console.log)
/components
  /layout               # Header (client, "use client"), Footer, Logo
  /ui                   # Button (Link) / ButtonEl (button), Section, SectionHeader
  /sections             # блоки страниц: Hero, Pains, ServicesGrid, Process, Cases,
                        # WhyUs, Testimonials, BlogPreview, FinalCta, PageHero,
                        # CtaBanner, DashboardMock
  /forms/LeadForm.tsx   # client-форма (RHF + Zod, honeypot-поле "company")
/lib                    # данные + утилиты (cn.ts)
```

Секции переиспользуются между страницами (`ServicesGrid`, `Cases`, `Process`,
`FinalCta` принимают пропсы `limit`/`standalone`). Новую страницу собираем из
`PageHero` + существующих секций, а не с нуля.

## Команды

```bash
npm run dev     # локальный сервер (localhost:3000)
npm run build   # продакшн-сборка (включает проверку типов и lint)
npm run start   # запуск собранного приложения
npm run lint    # ESLint (next/core-web-vitals)
```

Отдельная страница/маршрут не имеют юнит-тестов; проверка — через `npm run build`
(типы + сборка всех роутов) и визуально в `npm run dev`.

## ⚠️ Пробел в пути ломает `next build` (Windows)

Полный путь проекта содержит пробел (`...\Claude cod\...`). Из-за известного бага
Next.js 14 на Windows минификатор падает на этом пробеле — **`next build` не
проходит локально** (`x A numeric separator is only allowed between two digits`).

- `npm run dev` работает нормально (в dev нет минификации).
- Деплой на Vercel работает нормально (там путь без пробелов).
- Чтобы собрать прод **локально** — перенесите проект в путь без пробелов
  (напр. `C:\dev\x_form_site`) либо соберите во временной копии в таком пути.

## Конвенции

- Код, имена, комментарии, коммиты — **на английском**; UI-тексты и контент — **на русском**.
- Компоненты — функциональные, типизированные пропсы. По умолчанию Server Component;
  `"use client"` только при интерактивности (Header, LeadForm).
- Файлы компонентов — PascalCase; прочее — kebab-case.
- Стили — только Tailwind-классы и утилиты из `globals.css`; без инлайн-стилей и
  отдельных CSS-файлов. Цвета/радиусы/тени — из токенов темы (`brand`, `ink`,
  `surface`, `panel`, `accent`, `line`, `shadow-soft/lift/glow`).
- **Четыре темы**, переключаются атрибутом `data-theme` на `<html>` (значения
  `brand` | `brand-light` | `dark` | `light`; по умолчанию `brand`). Выбор хранится в `localStorage`
  и применяется до отрисовки инлайн-скриптом в `app/layout.tsx`; UI —
  `components/ui/ThemeSwitcher.tsx` (в шапке). Семантические токены (`ink*` = ТЕКСТ,
  `surface*` = фон, `panel*` = карточки, `line`, `accent`, `brand-ink`, градиент
  `--grad-*`, зерно `--grain`, лейбл `--label-*`) заданы CSS-переменными в
  `app/globals.css` в блоках `[data-theme=...]` — цвета темы меняются там, компоненты
  не трогаются. Канальный формат (`R G B`) обязателен для токенов, к которым
  применяется `/opacity`.
  - **brand** (v3, официальная айдентика из `Айдентика X-Form.pdf`): тёплый чёрный
    фон `#0E080A`/`#1B1517`, основной `#454AFE` (= `brand-500`), акцент-барвинок
    `#BBBDFF` (= `brand-200`), текст `#E6E6E6`, зернистые индиго-градиентные пятна,
    eyebrow — сплошная синяя плашка-лейбл.
  - **brand-light** (v4, внутренние страницы гайда): светло-серый фон `#E9E9EB`,
    белые скруглённые карточки, тёплый чёрный текст `#1B1517`, индиго-ссылки/плашки.
  - **dark** (v2): холодный navy + циан. **light** (v1): светлая «воздушная».
- **Логотип** — официальный векторный локап в `components/layout/Logo.tsx`
  (монограмма XF с фирменным градиентом `#454AFE→#E4E4E7`, буквы через
  `currentColor` — сами подстраиваются под тему; исходники —
  `Downloads/Логотип X-Form/`).
- Не использовать литералы `bg-white`/`bg-ink` — только токены. Всегда-тёмные блоки
  (футер, финальный CTA) — токены `night*` (тёплый чёрный, фиксированы во всех темах).
- **Эффекты** (лёгкие, GPU-friendly, с `prefers-reduced-motion`): утилиты
  `.bg-grid`, `.gradient-border`, `.glass`, `.sheen`, `.text-gradient`, зерно
  `body::after` и анимации `animate-float`/`animate-shine`/`animate-pulse-soft`
  (см. `globals.css`, `tailwind.config.ts`). Никаких тяжёлых фоновых видео/канвасов.
- Шрифт — Inter (заголовки по айдентике: SemiBold + Light микс, текст Regular).
  Точная перекраска темы — в блоках `[data-theme]` (`globals.css`) и ramp `brand`
  в `tailwind.config.ts`.
- Именование маршрутов — русской транслитерацией (`/uslugi`, `/keysy`, `/o-kompanii`).

## SEO и качество

- Метаданные — через `generateMetadata` / экспорт `metadata`; заголовки шаблоном
  `%s — X-Form` (в `app/layout.tsx`). `sitemap.ts` и `robots.ts` генерируются из данных.
- Mobile-first, адаптивность обязательна.
- Форма заявки валидируется на клиенте (Zod) и сервере (`/api/lead`), спам-защита —
  honeypot-поле `company`. Реальную доставку заявок (email / Bitrix24 REST / Telegram)
  подключить в `app/api/lead/route.ts` (сейчас только `console.log`).
```
