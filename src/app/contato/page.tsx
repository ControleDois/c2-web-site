import type { Metadata } from "next";
import { Mail, MessageCircle, LogIn } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { APP_URL, CONTACT_EMAIL, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o Controle Dois para conhecer o sistema ou tirar dúvidas.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const whatsapp = whatsappLink();
  const cards = [
    whatsapp && {
      icon: MessageCircle,
      title: "WhatsApp",
      text: "Conte sobre o seu negócio e responderemos por lá.",
      href: whatsapp,
      action: "Chamar no WhatsApp",
    },
    CONTACT_EMAIL && {
      icon: Mail,
      title: "E-mail",
      text: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      action: "Enviar e-mail",
    },
    {
      icon: LogIn,
      title: "Já é cliente?",
      text: "Acesse o sistema com o seu usuário e senha.",
      href: APP_URL,
      action: "Entrar no sistema",
    },
  ].filter(Boolean) as { icon: typeof Mail; title: string; text: string; href: string; action: string }[];

  return (
    <>
      <Section tone="soft" className="!pb-12">
        <SectionHeading eyebrow="Contato" title="Vamos conversar?" text="Escolha o canal que for melhor para você." />
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a key={card.title} href={card.href} className="rounded-2xl border border-line bg-white p-7 transition hover:border-brand-300">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <card.icon size={24} />
              </span>
              <h2 className="mt-5 text-[18px] font-bold text-ink">{card.title}</h2>
              <p className="mt-2 break-words text-[14.5px] leading-relaxed text-ink-soft">{card.text}</p>
              <span className="mt-5 inline-block text-[14px] font-semibold text-brand-700">{card.action}</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
