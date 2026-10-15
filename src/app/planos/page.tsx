import type { Metadata } from "next";
import PlansSection from "@/components/PlansSection";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { getPlans } from "@/lib/plans";
import { SIGNUP_URL, TRIAL_DAYS, contactHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planos e preços",
  description:
    "Escolha o plano do Controle Dois: vendas, financeiro, notas fiscais, assinatura digital e WhatsApp. Teste grátis por 7 dias, sem cartão de crédito, e pague por PIX.",
  alternates: { canonical: "/planos" },
};

const FAQ = [
  {
    question: "Preciso de cartão de crédito para testar?",
    answer: `Não. O teste de ${TRIAL_DAYS} dias é grátis e você cria a conta só com nome da empresa, e-mail e senha.`,
  },
  {
    question: "O que o teste grátis inclui?",
    answer:
      "O básico do sistema: cadastros, vendas, PDV, estoque e financeiro. Emitir notas fiscais, enviar contratos para assinatura e usar o WhatsApp fazem parte dos planos.",
  },
  {
    question: "Como eu pago?",
    answer:
      "No próprio sistema, por PIX (ou boleto). O pagamento é gerado na hora e o plano é liberado assim que a confirmação chega, sem esperar contato nosso.",
  },
  {
    question: "Posso trocar de plano depois?",
    answer: "Pode. Em Planos e assinatura, dentro do sistema, você escolhe outro plano e paga. O novo plano passa a valer a partir do pagamento.",
  },
  {
    question: "O que acontece com os meus dados se o teste acabar?",
    answer: "Ficam guardados. O acesso é bloqueado até você escolher um plano, e depois volta tudo como estava.",
  },
];

export default async function PlanosPage() {
  const { plans, catalog } = await getPlans();

  return (
    <>
      <Section tone="soft" className="!pb-12">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano certo para o seu negócio"
          text={`Comece com ${TRIAL_DAYS} dias grátis, sem cartão de crédito. Quando quiser, assine pelo próprio sistema e pague por PIX.`}
        />
      </Section>

      <Section>
        {plans.length > 0 ? (
          <PlansSection plans={plans} catalog={catalog} />
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-10 text-center">
            <h2 className="text-[22px] font-bold text-ink">Os planos estão sendo atualizados</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Crie a conta e teste grátis por {TRIAL_DAYS} dias, ou fale com a gente para conhecer as opções.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href={SIGNUP_URL}>Testar grátis por {TRIAL_DAYS} dias</ButtonLink>
              <ButtonLink href={contactHref()} variant="ghost">
                Falar com a gente
              </ButtonLink>
            </div>
          </div>
        )}
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" center />
        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
          {FAQ.map((item) => (
            <div key={item.question} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-[16px] font-bold text-ink">{item.question}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={contactHref()} variant="ghost">
            Ainda com dúvida? Fale com a gente
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
