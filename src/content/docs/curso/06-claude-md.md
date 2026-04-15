---
title: 6. CLAUDE.md — A Memória do Projeto
description: O arquivo CLAUDE.md é lido automaticamente pelo Claude em toda sessão. É onde você escreve o contexto permanente do seu projeto.
---

Toda vez que você inicia o Claude Code em um projeto (`claude`), ele procura por um arquivo chamado `CLAUDE.md` na raiz. Se encontrar, lê automaticamente antes de qualquer coisa.

É a solução para o problema: "toda vez que abro uma sessão nova preciso explicar meu projeto do zero".

## Onde Criar

Na **raiz do projeto** — a mesma pasta onde está o `package.json` ou `README.md`:

```
meu-projeto/
├── src/
├── package.json
├── README.md
└── CLAUDE.md    ← aqui
```

## O que Escrever

Pense no `CLAUDE.md` como um briefing para um desenvolvedor que nunca viu seu projeto. Inclua:

1. **O que o projeto é** — uma frase
2. **Stack técnica** — linguagens, frameworks, bibliotecas principais
3. **Estrutura de pastas** — o que fica em cada pasta
4. **Convenções** — padrões que você quer que o Claude siga
5. **Regras** — o que o Claude **nunca** deve fazer
6. **Comandos úteis** — como rodar, testar, fazer build

## Exemplo Real

```markdown
# Meu Projeto

App de gestão de tarefas pessoal.

## Stack
- Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Backend: API Routes do Next.js
- Banco: PostgreSQL com Prisma ORM
- Auth: NextAuth.js com Google OAuth

## Estrutura
- `src/app/` — páginas e rotas (App Router)
- `src/components/` — componentes reutilizáveis
- `src/lib/` — utilitários e configurações
- `prisma/` — schema e migrations

## Convenções
- Componentes em PascalCase (ex: `TaskCard.tsx`)
- Funções utilitárias em camelCase (ex: `formatDate.ts`)
- Sempre usar TypeScript — sem `any`
- Estilização com Tailwind — sem CSS modules

## Regras
- Nunca commitar sem mensagem descritiva
- Nunca usar `console.log` em produção — usar logger próprio
- Nunca modificar arquivos em `prisma/migrations/`

## Comandos
- Dev: `npm run dev`
- Build: `npm run build`
- Testes: `npm test`
- Migrations: `npx prisma migrate dev`
```

## O que o Claude Faz com esse Arquivo

Toda vez que você iniciar o Claude (`claude`), ele vai:

1. Ler o `CLAUDE.md`
2. Saber que o projeto usa Next.js 14 com App Router
3. Saber que deve usar TypeScript sem `any`
4. Saber que não pode commitar sem mensagem descritiva

Você não precisa repetir essas instruções em toda sessão.

## CLAUDE.md Aninhados

Você pode ter um `CLAUDE.md` em subpastas. O Claude lê todos — o da raiz primeiro, depois os das subpastas conforme navega.

Útil para projetos grandes com partes muito diferentes:

```
meu-projeto/
├── CLAUDE.md              ← contexto geral
├── frontend/
│   └── CLAUDE.md          ← contexto específico do frontend
└── backend/
    └── CLAUDE.md          ← contexto específico do backend
```

## Criar o CLAUDE.md do Seu Projeto Agora

Abra o Claude Code em qualquer projeto e peça:

> "lê todos os arquivos do projeto e cria um CLAUDE.md completo na raiz, com: descrição do projeto, stack técnica, estrutura de pastas, convenções de código e comandos principais"

O Claude vai ler o projeto e gerar um `CLAUDE.md` personalizado. Revise e ajuste conforme necessário.
