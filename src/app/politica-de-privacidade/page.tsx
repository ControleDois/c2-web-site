import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como o Controle Dois coleta, usa e protege os dados pessoais, de acordo com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacidadePage() {
  const contact = whatsappLink("Olá! Tenho uma dúvida sobre a Política de Privacidade do Controle Dois.");
  return (
    <LegalPage title="Política de privacidade" updated="15 de outubro de 2026">
      <p>
        Esta política explica como a Controle Dois (CNPJ 44.474.487/0001-10) trata dados pessoais ao oferecer o sistema Controle Dois, em linha com a
        Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).
      </p>

      <h2>1. Que dados coletamos</h2>
      <ul>
        <li>
          <strong>Cadastro:</strong> nome da empresa, e-mail e senha (guardada de forma protegida, nunca em texto aberto).
        </li>
        <li>
          <strong>Dados da empresa:</strong> CNPJ ou CPF, razão social, telefone, endereço e outras informações que você cadastrar no sistema.
        </li>
        <li>
          <strong>Dados dos seus clientes e fornecedores:</strong> informações que a sua empresa lança no sistema para a própria operação. Nesse caso,
          a sua empresa é a responsável pelos dados e nós atuamos como operadores.
        </li>
        <li>
          <strong>Dados de uso:</strong> registros técnicos de acesso, como data, endereço IP e navegador, usados para segurança e para melhorar o
          sistema.
        </li>
      </ul>

      <h2>2. Para que usamos</h2>
      <ul>
        <li>criar e manter a sua conta e permitir o uso do sistema;</li>
        <li>prestar suporte e enviar avisos sobre o serviço, como o fim do teste grátis;</li>
        <li>cobrar a assinatura e cumprir obrigações legais;</li>
        <li>proteger o sistema contra fraudes e acessos indevidos.</li>
      </ul>

      <h2>3. Com quem compartilhamos</h2>
      <p>
        Não vendemos dados pessoais. Podemos compartilhar o mínimo necessário com prestadores que ajudam a operar o sistema, como hospedagem e
        armazenamento de arquivos, serviços de e-mail e mensagens e, quando você ativa, integrações como emissão de notas fiscais, bancos e WhatsApp.
        Também compartilhamos dados quando a lei exigir.
      </p>

      <h2>4. Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados enquanto a conta existir e pelo tempo necessário para cumprir obrigações legais e fiscais. Encerrada a relação, os dados
        podem ser apagados ou anonimizados, respeitando os prazos legais.
      </p>

      <h2>5. Segurança</h2>
      <p>
        Usamos medidas técnicas e organizacionais para proteger os dados, como senhas protegidas, comunicação criptografada e controle de acesso.
        Nenhum sistema é totalmente imune, e por isso pedimos que você mantenha sua senha em sigilo.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Você pode pedir confirmação de que tratamos seus dados, acesso, correção, anonimização, portabilidade, exclusão e informações sobre
        compartilhamento, além de revogar consentimentos, nos termos da LGPD.
      </p>

      <h2>7. Cookies</h2>
      <p>
        O site e o sistema usam recursos técnicos necessários ao funcionamento, como manter você conectado. Podemos usar ferramentas de medição de
        audiência para entender como o site é usado.
      </p>

      <h2>8. Contato</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre privacidade,{" "}
        {contact ? <a href={contact}>fale com a gente pelo WhatsApp</a> : <>use a página de <a href="/contato">contato</a></>}
        {CONTACT_EMAIL ? (
          <>
            {" "}
            ou escreva para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </>
        ) : null}
        .
      </p>

      <h2>9. Mudanças nesta política</h2>
      <p>Esta política pode ser atualizada. A versão em vigor é sempre a publicada nesta página, com a data da última atualização.</p>
    </LegalPage>
  );
}
