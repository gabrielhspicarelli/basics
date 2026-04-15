---
title: 5. Como Dar Boas Instruções ao Claude
description: A qualidade do resultado depende quase sempre da qualidade da instrução. Aprenda a escrever prompts que funcionam.
---

O maior fator que determina se o Claude vai entregar o que você quer não é a complexidade do que você pede — é **como** você pede.

## O Princípio Central

O Claude não lê sua mente. Ele só sabe o que você escreve. Quanto mais contexto e clareza você der, melhor o resultado.

## Instrução Ruim vs. Instrução Boa

**Ruim:**
> "cria um formulário"

O Claude vai criar alguma coisa. Mas provavelmente não é o que você quer — ele não sabe: qual linguagem? qual framework? com validação? com qual estilo?

**Boa:**
> "cria um formulário de contato em HTML puro com campos: nome (obrigatório), email (obrigatório, com validação de formato), mensagem (textarea, obrigatório). Ao enviar, mostrar uma mensagem de sucesso no lugar do formulário. Sem backend por agora — só o frontend."

A diferença: você deu contexto (HTML puro), campos específicos, comportamento esperado, e o que *não* fazer.

## A Fórmula

```
[O que você quer] + [contexto do projeto] + [restrições/detalhes] + [o que não fazer]
```

## Dar Contexto do Projeto

O Claude não sabe o que é seu projeto. Sempre que pedir algo novo, explique brevemente:

**Sem contexto:**
> "adiciona autenticação"

**Com contexto:**
> "estou construindo um app Next.js 14 com App Router e Prisma. adiciona autenticação com NextAuth.js usando provider Google. o banco é PostgreSQL."

## Quebrar Tarefas Grandes

Se você quer "construir um e-commerce completo", não mande tudo de uma vez. Quebre em partes:

1. "cria a estrutura de pastas do projeto Next.js com Tailwind"
2. "adiciona o componente de header com navegação"
3. "cria a página de listagem de produtos com dados mockados"
4. "conecta ao banco de dados e busca os produtos reais"

Cada parte deve ser testável antes de partir para a próxima.

## Pedir Revisão e Explicação

O Claude pode explicar o que fez:
> "explica o que esse código faz, linha por linha"

Pode sugerir melhorias:
> "como você melhoraria esse código? quais são os problemas?"

Pode revisar com critérios específicos:
> "revisa esse código focando em: segurança, performance e legibilidade"

## Quando o Resultado Não é o Esperado

Não apague e comece do zero. Itere:

> "quase isso, mas preciso que o botão fique à direita, não à esquerda. e a cor do fundo deve ser #1a1a2e"

> "o formulário está funcionando, mas ao submeter ele dá um erro 404. aqui está o console: [cola o erro]. qual pode ser a causa?"

## Exemplos de Boas Instruções

**Criar um arquivo:**
> "cria um arquivo `utils/formatDate.js` que exporta uma função `formatDate(date)` que recebe um objeto Date e retorna uma string no formato 'DD/MM/YYYY'. adiciona JSDoc."

**Corrigir um bug:**
> "a função `calculateTotal` está retornando NaN quando o array está vazio. aqui está o código: [cola o código]. corrige e adiciona um teste unitário."

**Refatorar:**
> "refatora o componente `ProductList.jsx` para usar React Query em vez de useState + useEffect para buscar os produtos. mantém a mesma interface visual."

**Criar um projeto do zero:**
> "cria um projeto Astro Starlight em `~/basics`. não modifica nenhum arquivo existente. só o scaffold inicial."

## O que o Claude Lembra (e o que não lembra)

O Claude **não lembra** de uma sessão para outra. Cada vez que você roda `claude` em um novo terminal, ele começa do zero.

O que ele **sempre vê:**
- Todos os arquivos do seu projeto
- O arquivo `CLAUDE.md` (próximo módulo)
- O histórico da conversa atual

Por isso o `CLAUDE.md` é tão importante — é a memória permanente do projeto.
