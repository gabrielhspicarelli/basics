---
title: Tipos de Pasta no VS Code
description: Diferença prática entre pasta raiz, workspace e projeto no VS Code.
---

## Pasta Raiz (Root Folder)

É a pasta que você **abriu no VS Code**. Aparece no topo do Explorer com o nome em maiúsculas.

```
MEUAPP
├── src/
├── package.json
└── CLAUDE.md
```

**Como abrir:**
```bash
cd ~/meu-app
code .          # abre a pasta atual como raiz
```

**Regra:** Abra sempre a pasta raiz do projeto, não uma subpasta. O Claude Code precisa ver o projeto inteiro.

## Workspace (.code-workspace)

Um workspace permite abrir **múltiplas pastas** no mesmo VS Code. É salvo em um arquivo `.code-workspace`.

```json
{
  "folders": [
    { "path": "./frontend" },
    { "path": "./backend" }
  ],
  "settings": {
    "editor.formatOnSave": true
  }
}
```

**Quando usar:** projetos monorepo, ou quando você precisa ver frontend e backend juntos mas em repos separados.

**Como criar:** `File` → `Save Workspace As...`

## Projeto

Na prática: "projeto" = "a pasta raiz que você abriu". Não é um conceito técnico distinto do VS Code — é a linguagem coloquial.

## `.vscode/` — Configurações do Projeto

Muitos projetos têm uma pasta `.vscode/` com configurações específicas:

```
meu-projeto/
├── .vscode/
│   ├── settings.json     ← configurações do VS Code para este projeto
│   ├── extensions.json   ← extensões recomendadas
│   └── launch.json       ← configurações de debug
```

Essas configurações têm prioridade sobre as globais do VS Code. O Claude pode criar esses arquivos por você:

```
> cria .vscode/settings.json com: formatação automática ao salvar, tab size 2, ruler em 80 colunas
```

## Resumo Visual

```
~/                              ← home do usuário
├── projeto-a/                  ← pasta raiz do Projeto A
│   ├── .vscode/
│   ├── src/
│   └── package.json
├── projeto-b/                  ← pasta raiz do Projeto B
│   └── ...
└── workspace-fullstack.code-workspace  ← workspace com A + B juntos
```
