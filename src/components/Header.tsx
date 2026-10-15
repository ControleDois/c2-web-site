"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { APP_URL, BLOG_URL, SIGNUP_URL, TRIAL_DAYS } from "@/lib/site";

const LINKS = [
  { href: "/recursos", label: "Recursos" },
  { href: "/nichos", label: "Segmentos" },
  { href: BLOG_URL, label: "Blog", external: true },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={36} height={34} priority />
          <span className="text-[17px] font-bold tracking-tight text-ink">Controle Dois</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-ink-soft transition hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={APP_URL}
            className="rounded-xl px-4 py-2 text-[14px] font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            Entrar
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-xl bg-brand-500 px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-brand-700"
          >
            Testar {TRIAL_DAYS} dias grátis
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <a href={APP_URL} className="rounded-xl border border-line px-4 py-3 text-center text-[14px] font-semibold text-brand-700">
              Entrar
            </a>
            <a href={SIGNUP_URL} className="rounded-xl bg-brand-500 px-4 py-3 text-center text-[14px] font-semibold text-white">
              Testar {TRIAL_DAYS} dias grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
