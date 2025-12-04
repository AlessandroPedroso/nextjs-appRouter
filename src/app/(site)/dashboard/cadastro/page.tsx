import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel - Cadastrando usuário",
  description: "Entre em contato com o Alessandro Pedroso",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "Programação",
    "Github",
    "repositório",
  ],
  openGraph: {
    images: [
      "https://sujeitoprogramador.com/wp-content/uploads/2025/11/iadev.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function Cadastro() {
  return (
    <div>
      <h1>Cadastrando cliente</h1>
      <p>Essa é a pagina de cadastro de clientes dashboard</p>
    </div>
  );
}
