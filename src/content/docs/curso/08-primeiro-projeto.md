---
title: 8. Primeiro Projeto — Do Zero ao Deploy
description: Construa uma landing page completa do zero ao GitHub Pages usando Claude Code. Fluxo completo comentado.
---

Vamos construir uma landing page pessoal e publicá-la no GitHub Pages. Você vai usar tudo o que aprendeu até aqui.

## O que você vai construir

Uma landing page com:
- Seu nome e uma breve bio
- Links para GitHub, LinkedIn ou outros
- Design responsivo (funciona no celular)
- Deploy automático no GitHub Pages

## Passo 1 — Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) → clicar em **New**
2. Repository name: `minha-landing-page`
3. Visibility: **Public**
4. **Não** marcar Initialize repository (vai criar do zero)
5. Clicar em **Create repository**

## Passo 2 — Criar e abrir no VS Code

```bash
mkdir ~/minha-landing-page
cd ~/minha-landing-page
git init
code .
```

## Passo 3 — Iniciar o Claude Code

No terminal integrado do VS Code:

```bash
claude
```

## Passo 4 — Pedir ao Claude para criar a estrutura

```
> cria uma landing page pessoal em HTML, CSS e JavaScript puro (sem frameworks).
> estrutura:
> - index.html
> - styles.css
> - script.js (pode ficar vazio por agora)
>
> a página deve ter:
> - header com meu nome e título "Desenvolvedor"
> - seção sobre mim com um parágrafo curto
> - seção com links: GitHub e LinkedIn (links placeholder)
> - footer com o ano atual
>
> design: fundo escuro (#1a1a2e), texto claro, tipografia clean, responsivo para mobile
> sem usar Bootstrap, Tailwind ou qualquer biblioteca
```

O Claude vai criar os três arquivos. Revise o diff e confirme.

## Passo 5 — Visualizar no browser

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Veja como ficou. Se quiser ajustar algo:

```
> a seção de links está muito pequena. aumenta os botões e adiciona um efeito hover
```

## Passo 6 — Commitar

```bash
git add .
git commit -m "feat: landing page inicial"
```

Ou peça ao Claude:
```
> commita tudo com uma mensagem descritiva
```

## Passo 7 — Conectar ao GitHub e fazer push

```bash
git remote add origin https://github.com/seu-usuario/minha-landing-page.git
git branch -M main
git push -u origin main
```

## Passo 8 — Ativar GitHub Pages

1. No GitHub, vá no repositório → **Settings** → **Pages**
2. Em "Source": selecione **Deploy from a branch**
3. Branch: **main**, pasta: **/ (root)**
4. Clique em **Save**

Aguarde 1-2 minutos. Sua página estará em:
`https://seu-usuario.github.io/minha-landing-page`

## Iterando no Projeto

Agora que o fluxo está funcionando, adicione mais coisas:

```
> adiciona uma seção "Projetos" com 3 cards. cada card tem: título, descrição curta, e um botão "Ver no GitHub". usa dados fictícios por agora.
```

```
> otimiza o CSS para mobile — no celular os cards de projetos devem ficar em coluna única
```

Cada mudança → Claude commita → você faz `git push` → GitHub Pages atualiza automaticamente.

## O que Você Aprendeu Neste Módulo

- Fluxo completo de um projeto: criar → desenvolver → commitar → publicar
- Como dar instruções específicas para o Claude construir algo do zero
- Como iterar incrementalmente sobre o mesmo projeto
- Como usar GitHub Pages para publicar gratuitamente
