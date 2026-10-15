import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { FEATURES, NICHES, STEPS } from "@/lib/content";
import { getLatestPosts } from "@/lib/blog";
import { getPlans } from "@/lib/plans";
import PlansSection from "@/components/PlansSection";
import { APP_URL, BLOG_URL, SIGNUP_URL, SITE_URL, TRIAL_DAYS, contactHref } from "@/lib/site";

const MODULES = ["Vendas", "Financeiro", "Notas fiscais", "Estoque", "PDV", "Cobrança"];

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function Home() {
  const [posts, { plans, catalog }] = await Promise.all([getLatestPosts(3), getPlans()]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Controle Dois",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      {
        "@type": "SoftwareApplication",
        name: "Controle Dois",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-100 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-block rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-brand-700 ring-1 ring-line">
              Gestão para vários segmentos
            </p>
            <h1 className="mt-5 text-[38px] font-bold leading-[1.08] tracking-tight text-ink sm:text-[54px]">
              O sistema que se adapta ao seu negócio
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              Vendas, financeiro, notas fiscais, estoque e PDV em um só lugar, com as telas e os recursos do seu segmento já
              prontos para usar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={SIGNUP_URL}>Testar grátis por {TRIAL_DAYS} dias</ButtonLink>
              <ButtonLink href={contactHref()} variant="ghost">
                Falar com a gente
              </ButtonLink>
            </div>
            <p className="mt-4 text-[13.5px] text-ink-soft">
              Sem cartão de crédito. Em 2 minutos você cria a conta e escolhe o seu segmento.
            </p>
            <p className="mt-2 text-[13.5px] text-ink-soft">
              Já é cliente?{" "}
              <a href={APP_URL} className="font-semibold text-brand-700 hover:underline">
                Entre no sistema
              </a>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(11,95,166,0.35)] ring-1 ring-line">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="" width={44} height={42} />
                <div>
                  <p className="text-[15px] font-bold text-ink">Controle Dois</p>
                  <p className="text-[12.5px] text-muted">Tudo da sua empresa em um só lugar</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {MODULES.map((module) => (
                  <div key={module} className="flex items-center gap-2.5 rounded-2xl bg-brand-100 px-4 py-3.5">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500 text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-semibold text-brand-900">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="recursos">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo o que a empresa precisa no dia a dia"
          text="Do balcão ao financeiro, cada área conversa com as outras: a venda baixa o estoque, gera a conta e emite a nota."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-line bg-white p-6 transition hover:border-brand-300">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <feature.icon size={22} />
              </span>
              <h3 className="mt-5 text-[16px] font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{feature.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Segmentos"
          title="Uma versão para cada tipo de negócio"
          text="Ao cadastrar a empresa você escolhe o segmento, e o sistema já abre com os menus e as telas certas."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NICHES.slice(0, 6).map((niche) => (
            <Link
              key={niche.slug}
              href={`/nichos#${niche.slug}`}
              className="group rounded-2xl border border-line bg-white p-6 transition hover:border-brand-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <niche.icon size={22} />
              </span>
              <h3 className="mt-5 text-[16px] font-bold text-ink">{niche.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{niche.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700">
                Saiba mais <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/nichos" variant="ghost">
            Ver todos os segmentos
          </ButtonLink>
        </div>
      </Section>

      {plans.length > 0 && (
        <Section id="planos" tone="soft">
          <SectionHeading
            eyebrow="Planos"
            title="Planos para cada fase do seu negócio"
            text={`Teste grátis por ${TRIAL_DAYS} dias, sem cartão de crédito. Assine quando quiser e pague por PIX.`}
            center
          />
          <div className="mt-10">
            <PlansSection plans={plans} catalog={catalog} />
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow="Como funciona" title="Comece em três passos" center />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-[16px] font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {posts.length > 0 && (
        <Section tone="soft">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Blog" title="Para ler e aprender" text="Dicas de gestão, novidades do sistema e conteúdo para o seu segmento." />
            <a href={BLOG_URL} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-700 hover:underline">
              Ver todos os artigos <ArrowRight size={14} />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.id}
                href={`${BLOG_URL}/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:border-brand-300"
              >
                {post.cover_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.cover_url} alt={post.cover_alt ?? ""} className="aspect-[16/9] w-full object-cover" loading="lazy" />
                ) : (
                  <div className="aspect-[16/9] w-full bg-brand-100" />
                )}
                <div className="p-5">
                  {post.category && <p className="text-[12px] font-bold uppercase tracking-wide text-brand-500">{post.category}</p>}
                  <h3 className="mt-1.5 text-[16.5px] font-bold leading-snug text-ink group-hover:text-brand-700">{post.title}</h3>
                  {post.excerpt && <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</p>}
                  <p className="mt-4 text-[12.5px] text-muted">
                    {formatDate(post.published_at)} · {post.reading_minutes} min de leitura
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Section>
      )}

      <Section tone="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[30px] font-bold leading-tight tracking-tight sm:text-[38px]">
            Comece hoje, sem compromisso
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-brand-100">
            Crie a conta em 2 minutos e use por {TRIAL_DAYS} dias grátis, sem cartão de crédito.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={SIGNUP_URL} variant="light">
              Testar grátis por {TRIAL_DAYS} dias
            </ButtonLink>
            <ButtonLink href={contactHref()} variant="ghost">
              Falar com a gente
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
