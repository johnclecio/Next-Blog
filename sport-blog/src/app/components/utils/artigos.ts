import slugify from "slugify";
import artigos from "../data/artigos.json";

export const artigosComSlug = artigos.map((artigo) => ({
  ...artigo,
  slug: slugify(artigo.titulo, {
    lower: true,
    strict: true,
    locale: "pt",
  }),
}));