import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Controle Dois | Sistema de gestão para o seu negócio",
    template: "%s | Controle Dois",
  },
  description:
    "Vendas, financeiro, notas fiscais, estoque e PDV em um só sistema, com a versão certa para o seu segmento: mercearia, locação de veículos, alimentação, vidraçaria e mais.",
  openGraph: {
    type: "website",
    siteName: "Controle Dois",
    locale: "pt_BR",
    images: ["/logo.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
