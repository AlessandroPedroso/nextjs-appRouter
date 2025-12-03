import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel do site",
  description: "Painel do usuário no site de aprendizado NextJS",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h3>Header do dashboard</h3>
      <br />
      {children}
    </>
  );
}
