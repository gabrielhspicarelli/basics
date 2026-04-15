---
title: 2. Instalação e Setup
description: Instale o Node.js, VS Code, e o Claude Code CLI. Configure sua API key e faça o primeiro teste.
---

Este módulo instala tudo que você precisa para começar. Siga os passos em ordem.

## 1. Instalar o Node.js

O Claude Code precisa do Node.js para funcionar.

**Verificar se já está instalado:**
```bash
node --version
```

Se aparecer algo como `v20.x.x`, pode pular este passo.

Se não estiver instalado, acesse [nodejs.org](https://nodejs.org) e baixe a versão **LTS** (Long Term Support).

**Windows:** Baixe o instalador `.msi` em [nodejs.org](https://nodejs.org) e execute.

Após instalar, abra o terminal e confirme:
```bash
node --version   # deve mostrar v18 ou superior
npm --version    # deve mostrar 9 ou superior
```

## 2. Instalar o VS Code

Acesse [code.visualstudio.com](https://code.visualstudio.com) e baixe para o seu sistema operacional.

Após instalar, abra o VS Code. Na primeira vez ele mostra uma tela de boas-vindas — pode fechar.

## 3. Instalar a Extensão Claude no VS Code

1. No VS Code, clique no ícone de extensões na barra lateral (ou pressione `Cmd+Shift+X` no Mac / `Ctrl+Shift+X` no Windows)
2. Busque por **"Claude"**
3. Instale a extensão oficial da **Anthropic**

Esta extensão integra o Claude Code diretamente no editor.

## 4. Instalar o Claude Code CLI

Abra o terminal e execute:

```bash
npm install -g @anthropic-ai/claude-code
```

Verificar instalação:
```bash
claude --version
```

Esperado: número de versão como `1.x.x`.

## 5. Obter sua API Key

1. Acesse [console.anthropic.com](https://console.anthropic.com)
2. Crie uma conta (gratuito)
3. Vá em **API Keys** → **Create Key**
4. Copie a chave — ela começa com `sk-ant-...`

:::caution[Atenção]
Nunca compartilhe sua API key. Nunca coloque ela em arquivos que vão para o GitHub.
:::

## 6. Configurar a API Key

```bash
export ANTHROPIC_API_KEY="sk-ant-sua-chave-aqui"
```

Para não precisar digitar isso toda vez, adicione ao seu perfil de shell:

**macOS/Linux (zsh):**
```bash
echo 'export ANTHROPIC_API_KEY="sk-ant-sua-chave-aqui"' >> ~/.zshrc
source ~/.zshrc
```

**Windows (PowerShell):**
```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-ant-sua-chave-aqui", "User")
```

## 7. Primeiro Teste

```bash
mkdir meu-primeiro-teste
cd meu-primeiro-teste
claude
```

O Claude vai iniciar e mostrar um prompt `>`. Digite:
```
Oi! Você está funcionando?
```

Se ele responder, está tudo configurado corretamente. Para sair, digite `/exit` ou pressione `Ctrl+C`.
