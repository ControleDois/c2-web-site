import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TRIAL_DAYS, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições para usar o sistema Controle Dois: cadastro, teste grátis, assinatura, responsabilidades e encerramento.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosPage() {
  const contact = whatsappLink("Olá! Tenho uma dúvida sobre os Termos de Uso do Controle Dois.");
  return (
    <LegalPage title="Termos de uso" updated="15 de outubro de 2026">
      <p>
        Estes termos explicam as condições para usar o Controle Dois, sistema de gestão oferecido pela Controle Dois (CNPJ 44.474.487/0001-10).
        Ao criar uma conta, você declara que leu e concorda com eles.
      </p>

      <h2>1. O que é o Controle Dois</h2>
      <p>
        O Controle Dois é um sistema online para gestão de empresas, com recursos como vendas, financeiro, estoque, emissão de notas fiscais,
        PDV e integrações. Os recursos disponíveis variam de acordo com o segmento escolhido e com a assinatura contratada.
      </p>

      <h2>2. Cadastro e conta</h2>
      <ul>
        <li>Para criar a conta, você informa o nome da empresa, um e-mail e uma senha.</li>
        <li>Você é responsável por manter a senha em sigilo e pelas ações feitas com o seu acesso.</li>
        <li>As informações informadas devem ser verdadeiras e atualizadas.</li>
        <li>Você pode convidar outras pessoas da sua empresa para usar o sistema, e responde pelo uso delas.</li>
      </ul>

      <h2>3. Teste grátis</h2>
      <p>
        Quem cria uma conta tem {TRIAL_DAYS} dias de teste grátis, sem necessidade de cartão de crédito. Ao fim desse período o acesso é
        bloqueado até que a assinatura seja ativada. Os dados cadastrados durante o teste continuam guardados e voltam a ficar disponíveis
        quando o acesso for liberado.
      </p>

      <h2>4. Assinatura e pagamento</h2>
      <p>
        Depois do teste, o uso do sistema depende de uma assinatura. Valores, forma e data de pagamento são combinados no momento da
        contratação. O não pagamento pode levar ao bloqueio do acesso, sem apagar os dados.
      </p>

      <h2>5. Uso adequado</h2>
      <p>Você se compromete a não usar o sistema para atividades ilegais, para prejudicar outros usuários ou para tentar acessar dados que não são seus.</p>

      <h2>6. Responsabilidades</h2>
      <ul>
        <li>
          Os dados lançados no sistema, como produtos, preços, impostos e notas fiscais, são de responsabilidade da sua empresa. Confira com o seu
          contador as informações fiscais antes de emitir documentos.
        </li>
        <li>
          Integrações com serviços de terceiros, como emissão de notas, bancos e WhatsApp, dependem desses serviços e podem sofrer indisponibilidades
          ou mudanças fora do nosso controle.
        </li>
        <li>
          Fazemos o possível para manter o sistema disponível e seguro, mas não garantimos que ele funcione sem interrupções ou erros.
        </li>
      </ul>

      <h2>7. Seus dados</h2>
      <p>
        Os dados da sua empresa pertencem a você. O tratamento de dados pessoais está descrito na <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>

      <h2>8. Cancelamento</h2>
      <p>
        Você pode parar de usar o sistema quando quiser, entrando em contato conosco. Também podemos suspender contas que violem estes termos.
      </p>

      <h2>9. Mudanças nestes termos</h2>
      <p>
        Podemos atualizar estes termos. Quando houver mudanças importantes, avisaremos pelo sistema ou por e-mail. A versão em vigor é sempre a publicada nesta página.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes termos?{" "}
        {contact ? <a href={contact}>Fale com a gente pelo WhatsApp</a> : <>Entre em contato pela página de <a href="/contato">contato</a></>}.
      </p>
    </LegalPage>
  );
}
