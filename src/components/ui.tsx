import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "soft" | "brand";
  id?: string;
}) {
  const background = tone === "soft" ? "bg-brand-50" : tone === "brand" ? "bg-brand-900 text-white" : "bg-white";
  return (
    <section id={id} className={`${background} py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-[12.5px] font-bold uppercase tracking-widest text-brand-500">{eyebrow}</p>}
      <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px]">{title}</h2>
      {text && <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{text}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
}) {
  const styles =
    variant === "primary"
      ? "bg-brand-500 text-white hover:bg-brand-700"
      : variant === "light"
        ? "bg-white text-brand-700 hover:bg-brand-100"
        : "border border-line bg-white text-ink hover:border-brand-300";
  const className = `inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[15px] font-semibold transition ${styles}`;
  const external = /^https?:/.test(href);
  return external ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
