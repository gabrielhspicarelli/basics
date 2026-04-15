---
title: 10. MCP — Superpoderes do Claude
description: MCP (Model Context Protocol) são extensões que dão ao Claude acesso a ferramentas externas. Aprenda a instalar e usar.
---

## O que é MCP

**MCP (Model Context Protocol)** é um protocolo aberto criado pela Anthropic que permite conectar o Claude a ferramentas e fontes de dados externas.

Por padrão, o Claude Code pode ler/escrever arquivos e rodar comandos no terminal. Com MCPs, ele pode:

- Controlar um browser (clicar, preencher formulários, tirar screenshots)
- Ler e enviar emails no Gmail
- Buscar informações na web em tempo real
- Acessar bancos de dados
- Interagir com APIs de serviços (Slack, Linear, GitHub)
- Controlar aplicativos no seu computador

## Como os MCPs Funcionam

Um MCP server é um processo que roda na sua máquina e expõe ferramentas para o Claude. O Claude Code se conecta a esses servidores automaticamente quando configurados.

```
Claude Code
    ↓ (MCP protocol)
MCP Server (ex: browser-tools)
    ↓
Browser / Gmail / Banco de dados / etc.
```

## Instalando MCPs

Os MCPs são configurados no arquivo `~/.claude/settings.json` (ou `.claude/settings.local.json` no projeto).

**Exemplo: MCP de filesystem (acesso a pastas além do projeto):**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/seu-usuario/Documents"]
    }
  }
}
```

**Exemplo: MCP de browser:**

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

Após adicionar, reinicie o Claude Code.

## MCPs Mais Úteis

| MCP | O que faz | Como instalar |
|-----|-----------|---------------|
| `@modelcontextprotocol/server-filesystem` | Acessa pastas do seu computador | `npx -y @modelcontextprotocol/server-filesystem /caminho` |
| `@modelcontextprotocol/server-github` | Lê e cria issues/PRs no GitHub | Requer token do GitHub |
| `@modelcontextprotocol/server-postgres` | Consulta banco PostgreSQL | Requer connection string |
| `@modelcontextprotocol/server-puppeteer` | Controla browser com Puppeteer | Requer Node.js |
| `@modelcontextprotocol/server-brave-search` | Busca na web via Brave | Requer API key grátis |

## Exemplo Prático: Buscar na Web

1. Obtenha uma API key gratuita em [brave.com/search/api](https://brave.com/search/api)

2. Configure o MCP:
```json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "sua-api-key-aqui"
      }
    }
  }
}
```

3. Inicie o Claude Code e peça:
```
> pesquisa na web: qual a cotação atual do dólar?
```

O Claude vai usar o MCP para buscar a informação em tempo real.

## Onde Encontrar Mais MCPs

- [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — repositório oficial com dezenas de servidores
- [mcp.so](https://mcp.so) — diretório da comunidade
- Busque por `mcp server nome-do-servico` no Google para encontrar MCPs não-oficiais

## Verificar MCPs Instalados

Dentro de uma sessão Claude Code:
```
/mcp
```

Lista todos os MCP servers conectados e as ferramentas disponíveis.
