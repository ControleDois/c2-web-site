import { API_URL } from "./site";

export interface PlanFeatureDef {
  key: string;
  label: string;
  type: "boolean" | "limit";
  requires?: string;
}

export interface PublicPlan {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  highlighted: boolean;
  highlights: string[];
  features: Record<string, boolean | number | null>;
  discount: { percent: number; label: string | null; ends_at: string | null } | null;
  monthly: { base: number | null; price: number | null };
  yearly: { base: number | null; price: number | null } | null;
}

export interface PlansData {
  catalog: PlanFeatureDef[];
  plans: PublicPlan[];
}

// Planos ativos cadastrados na matriz. Se a API estiver fora do ar, o site mostra a página sem a tabela (sem quebrar).
export async function getPlans(): Promise<PlansData> {
  try {
    const response = await fetch(`${API_URL}/connect/plans`, { next: { revalidate: 60 } });
    if (!response.ok) return { catalog: [], plans: [] };
    const body = (await response.json()) as Partial<PlansData>;
    return { catalog: body.catalog ?? [], plans: body.plans ?? [] };
  } catch {
    return { catalog: [], plans: [] };
  }
}

export function featureLines(plan: PublicPlan, catalog: PlanFeatureDef[]): { text: string; included: boolean }[] {
  const lines: { text: string; included: boolean }[] = [];
  for (const feature of catalog) {
    const value = plan.features[feature.key];
    if (feature.type === "boolean") {
      lines.push({ text: feature.label, included: value === true });
      continue;
    }
    if (feature.requires && plan.features[feature.requires] !== true) continue;
    if (value === null || value === undefined) lines.push({ text: `${feature.label}: ilimitado`, included: true });
    else lines.push({ text: `${feature.label}: até ${value}`, included: Number(value) > 0 });
  }
  return lines;
}

export const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
