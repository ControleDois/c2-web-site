import Image from "next/image";
import Link from "next/link";
import { APP_URL, BLOG_URL, CONTACT_EMAIL, SIGNUP_URL, TRIAL_DAYS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-brand-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={32} height={30} />
            <span className="text-[16px] font-bold text-ink">Controle Dois</span>
          </div>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-soft">
            Sistema de gestão para empresas de vários segmentos: vendas, financeiro, fiscal, estoque e PDV em um só lugar.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-bold uppercase tracking-wide text-ink">Site</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-ink-soft">
            <li><Link href="/recursos" className="hover:text-brand-700">Recursos</Link></li>
            <li><Link href="/nichos" className="hover:text-brand-700">Segmentos</Link></li>
            <li><Link href="/planos" className="hover:text-brand-700">Planos</Link></li>
            <li><a href={BLOG_URL} className="hover:text-brand-700">Blog</a></li>
            <li><Link href="/contato" className="hover:text-brand-700">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-bold uppercase tracking-wide text-ink">Acesso</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-ink-soft">
            <li><a href={SIGNUP_URL} className="hover:text-brand-700">Testar {TRIAL_DAYS} dias grátis</a></li>
            <li><a href={APP_URL} className="hover:text-brand-700">Entrar no sistema</a></li>
            {CONTACT_EMAIL && (
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-700">{CONTACT_EMAIL}</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-[12.5px] text-muted">
        © {new Date().getFullYear()} Controle Dois. Todos os direitos reservados. ·{" "}
        <Link href="/termos-de-uso" className="hover:text-brand-700">Termos de uso</Link> ·{" "}
        <Link href="/politica-de-privacidade" className="hover:text-brand-700">Privacidade</Link>
      </div>
    </footer>
  );
}
