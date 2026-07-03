import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="X-Form — на главную"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-soft transition group-hover:bg-brand-700">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "text-lg font-semibold tracking-tight",
          onDark ? "text-white" : "text-ink"
        )}
      >
        X-Form
      </span>
    </Link>
  );
}
