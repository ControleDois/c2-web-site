import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Car,
  ClipboardList,
  CreditCard,
  FileText,
  Layers,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const FEATURES: Feature[] = [
  {
    icon: ShoppingCart,
    title: "Vendas e PDV",
    text: "Venda rápida com leitor de código de barras, balança etiquetadora, CPF na nota e impressão direta de cupom e fichas.",
  },
  {
    icon: FileText,
    title: "Notas fiscais",
    text: "NF-e, NFC-e, NFS-e, CT-e e MDF-e emitidas pelo próprio sistema, com fila de envio e acompanhamento do status.",
  },
  {
    icon: Wallet,
    title: "Financeiro completo",
    text: "Contas a pagar e a receber, extrato bancário, caixa, centros de custo e relatórios para saber para onde vai o dinheiro.",
  },
  {
    icon: CreditCard,
    title: "Boleto, PIX e cobrança",
    text: "Boletos e PIX integrados ao banco, e cobrança automática por WhatsApp para quem está com a conta em aberto.",
  },
  {
    icon: Boxes,
    title: "Estoque e compras",
    text: "Produtos com variações, movimentações de estoque, notas de compra e expedição, sempre ligados às vendas.",
  },
  {
    icon: ClipboardList,
    title: "Ordens de serviço e contratos",
    text: "Ordens de serviço com checklist e fotos, e contratos com assinatura digital, do orçamento ao faturamento.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápio digital e delivery",
    text: "Cardápio online, pedidos de delivery, mesas e comandas para restaurantes, pizzarias, lanchonetes e padarias.",
  },
  {
    icon: ShieldCheck,
    title: "Várias empresas, um acesso",
    text: "Grupos de empresas, perfis de acesso por função e registro de auditoria de quem mudou o quê.",
  },
];

export interface Niche {
  slug: string;
  name: string;
  text: string;
  icon: LucideIcon;
  highlights: string[];
}

export const NICHES: Niche[] = [
  {
    slug: "mercearia",
    name: "Mercearia e varejo",
    text: "Venda rápida com leitor de código de barras, produtos pesados na balança etiquetadora e catálogo pronto para começar.",
    icon: ShoppingCart,
    highlights: ["PDV com leitor e balança", "Catálogo com códigos de barras", "NFC-e com CPF na nota"],
  },
  {
    slug: "locacao-de-veiculos",
    name: "Locação de veículos",
    text: "Contratos de aluguel diário, semanal ou mensal, renovação, devolução e cobrança das diárias.",
    icon: Car,
    highlights: ["Contratos e renovações", "Vistoria e checklist", "Uma conta por vencimento"],
  },
  {
    slug: "alimentacao",
    name: "Pizzaria, lanchonete, hamburgueria e padaria",
    text: "Mesas, comandas, cardápio digital, delivery e PDV, com impressão direta na cozinha e no caixa.",
    icon: UtensilsCrossed,
    highlights: ["Cardápio digital", "Mesas e comandas", "Delivery e entregadores"],
  },
  {
    slug: "distribuidora-de-bebidas",
    name: "Distribuidora de bebidas",
    text: "Vendas por atacado e varejo, fichas por unidade vendida, delivery e controle de estoque.",
    icon: Boxes,
    highlights: ["Fichas por unidade", "Delivery", "Estoque por depósito"],
  },
  {
    slug: "protecao-veicular",
    name: "Proteção veicular",
    text: "Associados, veículos, planos, cotações, eventos e cobrança mensal automática.",
    icon: ShieldCheck,
    highlights: ["Planos e coberturas", "Cotações e eventos", "Cobrança mensal"],
  },
  {
    slug: "emprestimos",
    name: "Empréstimos e financeiras",
    text: "Solicitações de crédito, análise de cadastro, limite por cliente e parcelas com cobrança.",
    icon: Wallet,
    highlights: ["Análise de cadastro", "Limite de crédito", "Parcelas e cobrança"],
  },
  {
    slug: "vidracaria",
    name: "Vidraçaria",
    text: "Orçamentos por modelo e medida, cálculo de preço por tipo de vidro, compras e pedidos com nota fiscal.",
    icon: Layers,
    highlights: ["Orçamento por medida", "Tabela de preços de vidro", "Pedido e nota fiscal"],
  },
  {
    slug: "oficina-e-guincho",
    name: "Oficina, guincho e cegonha",
    text: "Ordens de serviço, mecânicos, vistorias e controle de veículos e transporte.",
    icon: ClipboardList,
    highlights: ["Ordens de serviço", "Vistoria de veículos", "Rotas e seguros de transporte"],
  },
  {
    slug: "ti-e-software-house",
    name: "TI e software house",
    text: "Clientes com acesso remoto às máquinas (RustDesk, AnyDesk e TeamViewer), ordens de serviço e contratos.",
    icon: Smartphone,
    highlights: ["Acesso remoto por cliente", "Ordens de serviço", "Contratos e cobrança"],
  },
  {
    slug: "vestuario",
    name: "Vestuário e acessórios",
    text: "Produtos com grade de tamanho e cor, estoque por variação e venda no balcão ou online.",
    icon: Layers,
    highlights: ["Grade de tamanho e cor", "Estoque por variação", "Venda no balcão"],
  },
  {
    slug: "outros",
    name: "E outros segmentos",
    text: "Sorveteria, controle de mídia, CRM, clube de grupos e o modelo geral para quem ainda não tem um segmento próprio.",
    icon: MessageCircle,
    highlights: ["Modelo geral", "CRM de leads", "Controle de mídia"],
  },
];

export const STEPS = [
  {
    title: "Cadastre sua empresa",
    text: "Informe os dados da empresa e escolha o segmento. O sistema já nasce com os menus e as telas do seu tipo de negócio.",
  },
  {
    title: "Configure do seu jeito",
    text: "Produtos, formas de pagamento, impressoras, notas fiscais e integrações bancárias, tudo pelo painel.",
  },
  {
    title: "Venda, cobre e emita notas",
    text: "Comece a vender no balcão, no celular ou online, acompanhe o caixa e deixe as cobranças com o sistema.",
  },
];
