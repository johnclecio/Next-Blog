import artigosJson from "../components/data/artigos.json"//"@/data/artigos.json";
import slugify from "slugify";
import type { Artigo } from "../types/artigo"//"/types/artigo";

const artigos: Artigo[] = artigosJson.map((artigo) => ({
  ...artigo,
  slug: slugify(artigo.titulo, {
    lower: true,
    strict: true,
    locale: "pt",
  }),
}));

export async function getArtigos() {
  // Simula uma chamada para API
  await new Promise((resolve) => setTimeout(resolve, 300));

  return artigos;
}

export function getArtigoBySlug(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}