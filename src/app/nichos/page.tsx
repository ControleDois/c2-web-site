import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { NICHES } from "@/lib/content";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Segmentos",
  description:
    "Mercearia, locação de veículos, pizzaria, lanchonete, distribuidora de bebidas, proteção veicular, empréstimos, vidraçaria, oficina, TI e mais: o Controle Dois tem a versão certa para o seu negócio.",
  alternates: { canonical: "/nichos" },
};

export default function NichosPage() {
  return (
    <>
      <Section tone="soft" className="!pb-12">
        <SectionHeading
          eyebrow="Segmentos"
          title="A versão certa para o seu tipo de negócio"
          text="Cada segmento tem menus, telas e recursos próprios. Não encontrou o seu? Fale com a gente: o modelo geral atende e podemos adaptar."
        />
      </Section>

      <Section>
        <div className="flex flex-col gap-6">
          {NICHES.map((niche) => (
            <article
              key={niche.slug}
              id={niche.slug}
              className="grid scroll-mt-24 gap-6 rounded-2xl border border-line bg-white p-7 md:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex gap-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <niche.icon size={24} />
                </span>
                <div>
                  <h2 className="text-[19px] font-bold text-ink">{niche.name}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{niche.text}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 self-center">
                {niche.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] font-medium text-ink">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500 text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href={contactHref()}>Falar sobre o meu segmento</ButtonLink>
        </div>
      </Section>
    </>
  );
}
