import { Header } from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Site - Aprendendo NextJS",
  description: "Site completo para praticar nextjs com o sujeito programador",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "Programação",
    "Github",
    "repositório",
  ],
  openGraph: {
    title: "Meu Site - Aprendendo NextJS",
    description: "Site completo para praticar nextjs com o sujeito programador",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <br />
        {children}
      </body>
    </html>
  );
}
