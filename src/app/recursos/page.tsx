import type { Metadata } from "next";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { FEATURES } from "@/lib/content";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Vendas e PDV, notas fiscais, financeiro, boleto e PIX, estoque, ordens de serviço, delivery e controle de várias empresas no mesmo sistema.",
  alternates: { canonical: "/recursos" },
};

export default function RecursosPage() {
  return (
    <>
      <Section tone="soft" className="!pb-12">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo integrado, sem planilhas paralelas"
          text="Cada recurso conversa com os outros: a venda baixa o estoque, gera a conta a receber e emite a nota fiscal."
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-5 rounded-2xl border border-line bg-white p-7">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <feature.icon size={24} />
              </span>
              <div>
                <h2 className="text-[18px] font-bold text-ink">{feature.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href={contactHref()}>Quero conhecer</ButtonLink>
        </div>
      </Section>
    </>
  );
}
