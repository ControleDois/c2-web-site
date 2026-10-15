import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-28 text-center">
      <p className="text-[64px] font-bold text-brand-500">404</p>
      <h1 className="mt-2 text-[24px] font-bold text-ink">Página não encontrada</h1>
      <p className="mt-3 text-ink-soft">O endereço pode ter mudado ou não existe mais.</p>
      <div className="mt-8">
        <ButtonLink href="/">Voltar para o início</ButtonLink>
      </div>
    </div>
  );
}
