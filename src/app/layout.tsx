import { Header } from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Site - Aprendendo NextJS",
  description: "Site completo para praticar nextjs com o sujeito programador",
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
