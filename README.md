# 📰 Blog de Artigos com Next.js 15

## 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar os principais conceitos do **Next.js 15** utilizando o **App Router**.

A aplicação consiste em um blog onde os artigos são listados na página inicial e podem ser acessados individualmente através de rotas dinâmicas baseadas no título do artigo.

Além disso, o projeto utiliza boas práticas de SEO, geração automática de slugs e renderização estática (SSG).

---
# Link Deploy https://next-blog-beige-rho.vercel.app/
# 🚀 Tecnologias utilizadas

- Next.js 15
- React
- TypeScript
- CSS Modules
- Slugify
- JSON Local
- App Router

---

# 📂 Estrutura do projeto

```
src
│
├── app
│   ├── artigos
│   │   └── [slug]
│   │       ├── page.tsx
│   │       └── Slug.module.css
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   └── App.module.css
│
├── components
│   └── data
│         └── artigos.json
├
│
├── lib
│   └── artigos.ts
│
├── types
│   └── artigo.ts
│
└── public
```

---

# ⚙️ Como criar o projeto

## 1 - Criando o projeto

Abra o terminal e execute:

```bash
npx create-next-app@latest sport-blog
```

Durante a instalação escolha:

```
TypeScript → Yes

ESLint → Yes

App Router → Yes

Src Directory → Yes

Turbopack → Yes

Import Alias → Yes (@/*)
```

---

## 2 - Entrando no projeto

```bash
cd sport-blog
```

---

## 3 - Executando

```bash
npm run dev
```

O projeto ficará disponível em

```
http://localhost:3000
```

---

# 📦 Instalando dependências

Foi utilizada a biblioteca **slugify** para gerar automaticamente os slugs dos artigos.

Instalação:

```bash
npm install slugify
```

---

# 📄 Criando os dados

Foi criado um arquivo:

```
src/data/artigos.json
```

Exemplo:

```json
[
  {
    "id": 1,
    "titulo": "Origem do Futebol Moderno",
    "autor": "João",
    "dataPublicacao": "2026-01-01",
    "conteudo": "Texto do artigo..."
  }
]
```

Todos os artigos são carregados a partir desse JSON.

---

# 🔗 Geração automática de Slugs

Para evitar escrever manualmente cada slug foi utilizada a biblioteca **slugify**.

Exemplo:

```
Origem do Futebol Moderno
```

transforma-se em

```
origem-do-futebol-moderno
```

A lógica foi centralizada em:

```
src/lib/artigos.ts
```

---

# 📚 Camada de acesso aos dados

Foi criada uma camada responsável por acessar os artigos.

Funções utilizadas:

- getArtigos()
- getArtigoBySlug()

Isso evita repetir código em várias páginas e facilita a troca do JSON por uma API futuramente.

---

# 🏠 Página Inicial

Arquivo:

```
app/page.tsx
```

Responsável por:

- carregar todos os artigos
- listar os artigos
- mostrar título
- mostrar autor
- mostrar data
- mostrar resumo
- criar o link para o artigo

---

# 📖 Página do artigo

Arquivo:

```
app/artigos/[slug]/page.tsx
```

Responsável por:

- receber o slug da URL
- localizar o artigo correspondente
- exibir o conteúdo completo
- retornar 404 caso o artigo não exista

---

# ⚡ Rotas Dinâmicas

Foi utilizado o App Router.

Estrutura:

```
app
 └── artigos
      └── [slug]
```

Cada artigo possui uma URL própria.

Exemplo:

```
/artigos/origem-do-futebol-moderno
```

---

# 📈 Renderização Estática (SSG)

Foi utilizada a função

```ts
generateStaticParams()
```

Essa função gera todas as páginas durante o processo de build.

Vantagens:

- maior velocidade
- melhor SEO
- menor consumo do servidor

---

# 🔍 SEO Dinâmico

Cada artigo gera automaticamente seus metadados utilizando:

```ts
generateMetadata()
```

Os metadados incluem:

- título
- descrição

Isso faz com que cada página tenha seu próprio SEO.

---

# 📦 Revalidação

Foi utilizado:

```ts
export const revalidate = 3600;
```

Isso significa que a página poderá ser reconstruída automaticamente a cada 1 hora.

---

# 🎨 Estilização

A estilização foi feita utilizando:

- CSS Modules

Cada página possui seu próprio arquivo CSS.

Exemplo:

```
Slug.module.css
```

Isso evita conflitos entre estilos.

---

# 🧠 Lógica da aplicação

Fluxo da aplicação:

```
JSON

↓

lib/artigos.ts

↓

getArtigos()

↓

Página Inicial

↓

Usuário clica no artigo

↓

URL dinâmica

↓

getArtigoBySlug()

↓

generateMetadata()

↓

Página do artigo
```

---

# 📚 Conceitos praticados

Durante este projeto foram utilizados:

- App Router
- Server Components
- Data Fetching
- Rotas Dinâmicas
- SEO
- generateMetadata
- generateStaticParams
- JSON Local
- Slugify
- CSS Modules
- TypeScript
- SSG
- Revalidate

---

# ▶️ Como executar

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd sport-blog
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

Abra:

```
http://localhost:3000
```

---

# ☁️ Publicação

## GitHub

Criar um repositório.

Inicializar o Git:

```bash
git init
```

Adicionar os arquivos:

```bash
git add .
```

Criar o commit:

```bash
git commit -m "feat: projeto sport-blog com Next.js 15"
```

Adicionar o repositório remoto:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Enviar:

```bash
git push -u origin main
```

---

## Deploy no Vercel

1. Fazer login no Vercel.

2. Importar o repositório do GitHub.

3. Selecionar o projeto.

4. Manter as configurações padrão.

5. Deploy.

Após alguns segundos a aplicação estará online.

---

# 💡 Melhorias futuras

- Sistema de categorias
- Campo de pesquisa
- Paginação
- Comentários
- Banco de dados
- Painel administrativo
- Upload de imagens
- Autenticação de usuários

---

# 👨‍💻 Autor

Projeto desenvolvido como prática de **Next.js 15**, utilizando o App Router e boas práticas de desenvolvimento Front-end.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de aprendizado.