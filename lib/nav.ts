export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Кейсы", href: "/keysy" },
  { label: "Цены", href: "/ceny" },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/kontakty" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Услуги",
    links: [
      { label: "Внедрение под ключ", href: "/uslugi/vnedrenie" },
      { label: "Настройка CRM", href: "/uslugi/nastrojka-crm" },
      { label: "Интеграция с 1С", href: "/uslugi/integraciya-1c" },
      { label: "Техподдержка", href: "/uslugi/podderzhka" },
      { label: "Лицензии Битрикс24", href: "/uslugi/licenzii" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О компании", href: "/o-kompanii" },
      { label: "Кейсы", href: "/keysy" },
      { label: "Цены", href: "/ceny" },
      { label: "Блог", href: "/blog" },
      { label: "Контакты", href: "/kontakty" },
    ],
  },
];
