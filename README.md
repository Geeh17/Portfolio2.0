# Portfólio — Geraldo Luiz

Portfólio pessoal reconstruído com stack moderna.

## Stack

- **Vite** — build tool
- **React 19 + TypeScript**
- **Tailwind CSS v4** — estilização (CSS-first, via `@theme` em `src/index.css`)
- **Framer Motion** — animações e reveals ao rolar a página
- **lucide-react** + **react-icons** — ícones
- **Iconify** (CDN) — ícones de tecnologias na seção "Tecnologias"

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview   # para testar o build localmente
```

O resultado fica em `dist/`, pronto para deploy em Vercel, Netlify, GitHub Pages etc.

## Estrutura

```
src/
  components/     # componentes de UI (Hero, About, Experience, TechStack, Projects, Contact...)
  data/content.ts # todo o conteúdo textual (fácil de editar, sem mexer em componente)
  hooks/useTheme.ts
  assets/images/  # imagens dos projetos
```

## Editando o conteúdo

Praticamente todo o texto do site (experiência, formação, projetos, links sociais) está
centralizado em `src/data/content.ts`. Não é necessário editar componentes para atualizar
informações — só esse arquivo.

## Design

Identidade visual "console de sistema": tipografia Space Grotesk (display) + Inter (corpo) +
JetBrains Mono (labels/terminal), paleta escura em grafite/azul-marinho com acento âmbar,
fundo em grid de pontos (referência a diagrama de schema/ER) e um terminal com efeito de
digitação no hero. Tema claro/escuro alternável (ícone no header), com preferência salva no
navegador.

## Pendências / sugestões

- Otimizar imagens grandes em `src/assets/images` (ex.: `img.png`, `projetorbarber.png`,
  `carro.png`) — estão pesadas e ainda não passaram por compressão.
- Trocar textos de placeholder de projetos sem descrição real, se houver.
- Configurar domínio próprio ao fazer deploy.
