import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos - Aprendendo NextJS",
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

export default function Contatos() {
  return (
    <div>
      <h1>Página de contatos</h1>
      <span>(xx) 000230-2323</span>
    </div>
  );
}
