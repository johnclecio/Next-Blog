import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getArtigos,
  getArtigoBySlug,
} from "../../lib/artigos"//"@/lib/artigos";

import styles from "./Slug.module.css";

export const revalidate = 3600;

export async function generateStaticParams() {
  const artigos = await getArtigos();

  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const artigo = getArtigoBySlug(slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não existe.",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.conteudo.substring(0, 160),
  };
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artigo = getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{artigo.titulo}</h1>

      <p className={styles.text}>
        <strong className={styles.strong}>Autor:</strong> {artigo.autor}
      </p>

      <p className={styles.text}>
        <strong className={styles.strong}>Publicado em:</strong>{" "}
        {artigo.dataPublicacao}
      </p>

      <hr className={styles.divider} />

      <p className={styles.content}>{artigo.conteudo}</p>

      <Link className={styles.artigos_volta} href="/">
        Voltar
      </Link>
    </main>
  );
}