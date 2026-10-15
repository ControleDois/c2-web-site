"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { featureLines, money, type PlanFeatureDef, type PublicPlan } from "@/lib/plans";
import { APP_URL } from "@/lib/site";

type Cycle = "monthly" | "yearly";

// Cartões de planos com troca mensal/anual. "Assinar" leva ao cadastro já com o plano escolhido:
// depois de criar a conta, o sistema abre direto o pagamento.
export default function PlansSection({ plans, catalog }: { plans: PublicPlan[]; catalog: PlanFeatureDef[] }) {
  const hasYearly = plans.some((plan) => plan.yearly);
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <div>
      {hasYearly && (
        <div className="mx-auto flex w-fit rounded-xl bg-brand-100 p-1">
          {(
            [
              { value: "monthly", label: "Mensal" },
              { value: "yearly", label: "Anual" },
            ] as { value: Cycle; label: string }[]
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setCycle(option.value)}
              className={`rounded-lg px-6 py-2 text-[14px] font-semibold transition ${
                cycle === option.value ? "bg-white text-ink shadow-sm" : "text-ink-soft"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = cycle === "yearly" ? plan.yearly : plan.monthly;
          const unavailable = !price || price.price === null;
          const perMonth = cycle === "yearly" && price?.price ? price.price / 12 : null;
          const href = `${APP_URL}/?cadastro=1&plano=${plan.slug}&ciclo=${cycle === "yearly" ? "anual" : "mensal"}`;
          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border bg-white p-7 ${
                plan.highlighted ? "border-brand-500 shadow-[0_30px_60px_-35px_rgba(11,95,166,0.45)]" : "border-line"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-7 rounded-full bg-brand-500 px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-wide text-white">
                  Mais popular
                </span>
              )}
              <h3 className="text-[22px] font-bold text-ink">{plan.name}</h3>
              {plan.tagline && <p className="mt-1.5 min-h-[40px] text-[14px] leading-snug text-ink-soft">{plan.tagline}</p>}

              <div className="mt-5">
                {plan.discount && price?.base ? (
                  <p className="flex items-center gap-2 text-[13.5px] text-muted">
                    <span className="line-through">{money(price.base)}</span>
                    <span className="rounded-md bg-[#eaf2e6] px-2 py-0.5 text-[12px] font-bold text-leaf">
                      {plan.discount.label || `-${plan.discount.percent}%`}
                    </span>
                  </p>
                ) : (
                  <p className="h-5" />
                )}
                {unavailable ? (
                  <p className="text-[15px] font-semibold text-muted">Indisponível neste ciclo</p>
                ) : (
                  <p className="flex items-baseline gap-1">
                    <span className="text-[40px] font-bold tracking-tight text-ink">{money(price!.price!)}</span>
                    <span className="text-[14px] text-ink-soft">/{cycle === "yearly" ? "ano" : "mês"}</span>
                  </p>
                )}
                <p className="h-5 text-[13px] text-ink-soft">{perMonth ? `equivale a ${money(perMonth)} por mês` : ""}</p>
              </div>

              <a
                href={href}
                className={`mt-5 inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-[15px] font-semibold transition ${
                  plan.highlighted ? "bg-brand-500 text-white hover:bg-brand-700" : "border border-line text-brand-700 hover:border-brand-300"
                } ${unavailable ? "pointer-events-none opacity-50" : ""}`}
              >
                Assinar {plan.name}
              </a>
              <p className="mt-2 text-center text-[12.5px] text-muted">Teste grátis por 7 dias antes de pagar</p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <Check size={16} className="mt-0.5 flex-none text-leaf" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-5">
                <p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-muted">O que inclui</p>
                <ul className="flex flex-col gap-2">
                  {featureLines(plan, catalog).map((line) => (
                    <li key={line.text} className={`flex items-start gap-2.5 text-[13.5px] ${line.included ? "text-ink" : "text-muted"}`}>
                      {line.included ? (
                        <Check size={15} className="mt-0.5 flex-none text-brand-500" strokeWidth={3} />
                      ) : (
                        <Minus size={15} className="mt-0.5 flex-none" />
                      )}
                      <span className={line.included ? "" : "line-through"}>{line.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
