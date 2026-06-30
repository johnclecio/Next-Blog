import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
      }}
    >
      <h1>Artigo não encontrado</h1>

      <p>O artigo solicitado não existe.</p>

      <Link href="/">Voltar para a página inicial</Link>
    </main>
  );
}