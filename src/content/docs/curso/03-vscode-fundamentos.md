---
title: 3. Fundamentos do VS Code
description: Aprenda a navegar na interface do VS Code, entenda os tipos de pasta e domine os atalhos essenciais.
---

O VS Code (Visual Studio Code) é o editor onde você vai trabalhar. Este módulo mostra tudo que você precisa saber para se mover com eficiência.

## A Interface

Quando você abre o VS Code, a tela está dividida em áreas:

```
┌─────────────────────────────────────────────────────────┐
│  Barra de Menu (File, Edit, View...)                     │
├──────┬──────────────────────────────────────┬───────────┤
│      │                                      │           │
│Barra │        Área do Editor                │  Painel   │
│Late- │    (onde você lê e escreve)          │  Lateral  │
│ral   │                                      │(opcional) │
│      │                                      │           │
├──────┴──────────────────────────────────────┴───────────┤
│              Terminal Integrado                          │
└─────────────────────────────────────────────────────────┘
```

**Barra Lateral (Activity Bar)** — ícones à esquerda:
- 📁 **Explorer** — árvore de arquivos do projeto
- 🔍 **Search** — busca em todos os arquivos
- 🔀 **Source Control** — Git (commits, branches)
- 🧩 **Extensions** — instalar extensões

## Tipos de Pasta — A Diferença Importa

Este é um dos conceitos que mais confunde quem está começando.

### Pasta Raiz (Root Folder)

É a pasta principal do seu projeto — a que você abre no VS Code. Tudo dentro dela faz parte do projeto. O Claude Code sempre lê o projeto a partir desta pasta.

```
~/meu-projeto/          ← Pasta raiz
├── src/
│   ├── index.js
│   └── utils.js
├── package.json
└── CLAUDE.md
```

### Workspace

Um **workspace** é quando você quer trabalhar com **múltiplas pastas ao mesmo tempo** no VS Code. É salvo em um arquivo `.code-workspace`.

```
meu-workspace.code-workspace
├── frontend/    ← pasta 1
└── backend/     ← pasta 2
```

Use workspace quando seu projeto tem partes separadas que você precisa ver juntas (ex: frontend + backend em repos diferentes).

### Projeto

Na prática do dia a dia, "projeto" = "a pasta raiz que você abriu". Para 90% dos casos, você só vai lidar com pasta raiz.

**Regra simples:** Abra sempre a **pasta raiz do projeto** no VS Code, não uma subpasta. O Claude Code precisa ver o projeto inteiro para trabalhar bem.

## Como Abrir uma Pasta

**Opção 1 — Menu:**
`File` → `Open Folder...` → selecione a pasta do projeto

**Opção 2 — Terminal:**
```bash
cd ~/meu-projeto
code .
```
O `.` significa "abrir o VS Code aqui, nesta pasta".

## Como Salvar Arquivos

| Ação | macOS | Windows/Linux |
|------|-------|---------------|
| Salvar arquivo atual | `Cmd+S` | `Ctrl+S` |
| Salvar todos os arquivos | `Cmd+Opt+S` | `Ctrl+K S` |
| Desfazer | `Cmd+Z` | `Ctrl+Z` |
| Refazer | `Cmd+Shift+Z` | `Ctrl+Y` |

**Auto-save:** Para ativar, vá em `File` → `Auto Save`. Recomendado para iniciantes.

## Terminal Integrado

O terminal é onde você roda comandos — como `claude`, `npm install`, `git commit`.

**Abrir terminal:**
- macOS: `` Cmd+` ``
- Windows/Linux: `` Ctrl+` ``

**Dividir o terminal em painéis:**
- Clique no ícone `+` na barra do terminal para novo terminal
- Clique no ícone de divisão para colocar dois terminais lado a lado

## Atalhos Essenciais

| Ação | macOS | Windows/Linux |
|------|-------|---------------|
| Abrir arquivo pelo nome | `Cmd+P` | `Ctrl+P` |
| Paleta de comandos | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Abrir/fechar terminal | `` Cmd+` `` | `` Ctrl+` `` |
| Abrir/fechar sidebar | `Cmd+B` | `Ctrl+B` |
| Buscar em todos os arquivos | `Cmd+Shift+F` | `Ctrl+Shift+F` |
| Ir para linha | `Ctrl+G` | `Ctrl+G` |
| Comentar linha | `Cmd+/` | `Ctrl+/` |
| Duplicar linha | `Opt+Shift+↓` | `Alt+Shift+↓` |

:::tip[Dica]
A **Paleta de Comandos** (`Cmd+Shift+P`) é o atalho mais importante. Se você não sabe como fazer algo no VS Code, abra ela e digite o que quer fazer em inglês ou português.
:::

## Navegação entre Arquivos

- **`Cmd+P`** — abre qualquer arquivo do projeto pelo nome (começa a digitar, ele filtra)
- **`Cmd+Tab`** — alterna entre arquivos abertos recentemente
- **Clique no Explorer** — navega pela árvore de arquivos
- **`Cmd+\`** — divide o editor em dois painéis (bom para ver dois arquivos ao mesmo tempo)
