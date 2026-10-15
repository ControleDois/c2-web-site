export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://controledois.com.br").replace(/\/+$/, "");
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.controledois.com.br").replace(/\/+$/, "");
export const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL ?? "https://blog.controledois.com.br").replace(/\/+$/, "");
// Em produção, sem API_URL configurada, usa a API oficial: antes o blog ficava vazio e todo artigo dava 404 em silêncio.
const DEFAULT_API_URL = process.env.NODE_ENV === "production" ? "https://api.grupoamsfacilita.com.br" : "http://localhost:3333";
export const API_URL = (process.env.API_URL ?? DEFAULT_API_URL).replace(/\/+$/, "");

// Sem NEXT_PUBLIC_WHATSAPP configurado, usa o WhatsApp do suporte já divulgado no rodapé do sistema.
const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP ?? "5565992819663").replace(/\D/g, "");
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export function whatsappLink(message = "Olá! Quero conhecer o Controle Dois.") {
  return whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}` : null;
}

// Para onde vão os botões "Falar com a gente": WhatsApp quando configurado, senão a página de contato.
export function contactHref(message?: string) {
  return whatsappLink(message) ?? "/contato";
}

export const WHATSAPP_ENABLED = Boolean(whatsapp);

// Teste grátis: o botão leva direto à criação de conta no sistema.
export const TRIAL_DAYS = 7;
export const SIGNUP_URL = `${APP_URL}/?cadastro=1`;
