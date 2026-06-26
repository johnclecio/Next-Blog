import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "BlogSport | Notícias, Artigos e Análises Esportivas",
  description: 
  "Acompanhe as últimas notícias, artigos, análises e curiosidades sobre futebol, basquete, Fórmula 1, vôlei, tênis e muito mais no BlogSport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
