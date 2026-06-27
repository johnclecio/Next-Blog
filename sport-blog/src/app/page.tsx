import Link from "next/link";
import styles from "./App.module.css";

import { getArtigos } from "../app/lib/artigos"//"@/lib/artigos";

export const revalidate = 3600;

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Artigos</h1>

      {artigos.map((artigo) => (
        <div key={artigo.id} className={styles.card}>
          <h2>{artigo.titulo}</h2>

          <p>
            <strong>Autor:</strong> {artigo.autor}
          </p>

          <p>
            <strong>Publicado em:</strong> {artigo.dataPublicacao}
          </p>

          <p>{artigo.conteudo.substring(0, 100)}...</p>

          <Link
            className={styles.artigos_ler}
            href={`/artigos/${artigo.slug}`}
          >
            Ler artigo
          </Link>

          <hr />
        </div>
      ))}

      <footer className={styles.footer}>
        Todos os direitos reservados © 2026
      </footer>
    </main>
  );
}