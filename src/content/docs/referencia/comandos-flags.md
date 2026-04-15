---
title: Comandos & Flags
description: Todos os comandos e flags do Claude Code com exemplos de uso.
---

## Iniciar o Claude

```bash
claude                          # inicia sessão interativa
claude "sua instrução"          # executa instrução e encerra
claude -p "prompt" arquivo.js   # aplica prompt a um arquivo específico
```

## Flags

| Flag | Descrição | Exemplo |
|------|-----------|---------|
| `--model` | Especifica o modelo | `claude --model claude-opus-4-5` |
| `--print` | Imprime resposta e encerra | `claude --print "explica esse erro"` |
| `--dangerously-skip-permissions` | Sem confirmações (cuidado!) | `claude --dangerously-skip-permissions` |
| `--debug` | Modo verbose | `claude --debug` |
| `--version` | Mostra versão | `claude --version` |
| `--help` | Ajuda | `claude --help` |

## Slash Commands (dentro de sessão)

| Comando | Descrição |
|---------|-----------|
| `/help` | Lista todos os comandos |
| `/clear` | Limpa histórico da sessão |
| `/compact` | Resume conversa (economiza tokens) |
| `/cost` | Mostra custo da sessão atual |
| `/model` | Troca o modelo |
| `/mcp` | Lista MCP servers conectados |
| `/exit` | Encerra a sessão |

## Modelos Disponíveis

| Modelo | Uso |
|--------|-----|
| `claude-sonnet-4-6` | Padrão — equilíbrio velocidade/qualidade |
| `claude-opus-4-5` | Mais poderoso, mais lento |
| `claude-haiku-4-5` | Mais rápido, tarefas simples |
