import type { ReactNode } from "react";
import { Section } from "@/components/ui";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-[32px] font-bold leading-tight tracking-tight text-ink sm:text-[40px]">{title}</h1>
        <p className="mt-2 text-[13.5px] text-muted">Última atualização: {updated}</p>
        <div className="mt-8 flex flex-col gap-4 text-[15.5px] leading-relaxed text-ink-soft [&_h2]:mt-6 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_a]:font-semibold [&_a]:text-brand-700 [&_a]:underline">
          {children}
        </div>
      </article>
    </Section>
  );
}
