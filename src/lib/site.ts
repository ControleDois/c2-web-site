export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://controledois.com.br").replace(/\/+$/, "");
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.controledois.com.br").replace(/\/+$/, "");
export const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL ?? "https://blog.controledois.com.br").replace(/\/+$/, "");
export const API_URL = (process.env.API_URL ?? "http://localhost:3333").replace(/\/+$/, "");

const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, "");
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export function whatsappLink(message = "Olá! Quero conhecer o Controle Dois.") {
  return whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}` : null;
}

// Para onde vão os botões "Falar com a gente": WhatsApp quando configurado, senão a página de contato.
export function contactHref(message?: string) {
  return whatsappLink(message) ?? "/contato";
}

export const WHATSAPP_ENABLED = Boolean(whatsapp);
