---
title: 7. Claude Code Básico
description: Como iniciar o Claude Code, quais slash commands existem, flags úteis e o fluxo do dia a dia.
---

## Iniciando o Claude Code

Sempre abra o terminal **dentro da pasta do projeto**:

```bash
cd ~/meu-projeto
claude
```

O Claude vai mostrar o prompt `>`. A partir daí, você digita em linguagem natural.

## Modos de Uso

**Conversa interativa** (padrão):
```bash
claude
> adiciona um botão de logout no header
```

**Comando direto** (sem abrir sessão):
```bash
claude "adiciona um botão de logout no header"
```

**Processar um arquivo específico:**
```bash
claude -p "explica o que esse arquivo faz" src/utils/auth.js
```

## Slash Commands

Dentro de uma sessão (`>`), você pode usar comandos especiais:

| Comando | O que faz |
|---------|-----------|
| `/help` | Lista todos os comandos disponíveis |
| `/clear` | Limpa o histórico da conversa atual (começa do zero) |
| `/compact` | Resume a conversa para economizar tokens |
| `/cost` | Mostra quanto você gastou de API na sessão atual |
| `/model` | Troca o modelo (ex: para Claude Opus se quiser mais poder) |
| `/exit` | Encerra a sessão |

## Flags Mais Usadas

```bash
# Não pede confirmação para executar ações (use com cuidado)
claude --dangerously-skip-permissions

# Imprime a resposta no terminal sem abrir sessão interativa
claude --print "qual versão do node está instalada?"

# Especifica qual modelo usar
claude --model claude-opus-4-5

# Modo debug (mostra mais informações)
claude --debug
```

## O Fluxo do Dia a Dia

Um dia típico usando Claude Code:

```
1. Abrir o VS Code na pasta do projeto
2. Abrir o terminal integrado (Cmd+`)
3. cd para a pasta certa (se necessário)
4. claude
5. Descrever o que você quer fazer
6. Revisar o que o Claude fez (diff no Source Control)
7. Aprovar (Enter) ou pedir ajustes
8. Claude commita automaticamente
9. Repetir
```

## Como o Claude Lê e Escreve Arquivos

Quando você pede algo, o Claude:
1. Lê os arquivos relevantes do projeto
2. Mostra o que pretende fazer (diff)
3. Aguarda sua confirmação
4. Executa a mudança

Você sempre vê o que vai acontecer **antes** de acontecer.

## Como Revisar Antes de Aceitar

Quando o Claude propõe uma mudança, você vê algo como:

```
● Write(src/components/Header.tsx)
  + import { LogoutButton } from './LogoutButton'
  + 
  + // resto do código...

Accept this change? [Y/n]
```

- `Y` ou `Enter` — aceita
- `n` — recusa
- Você pode digitar um comentário para ajustar antes de aceitar

No VS Code, o painel **Source Control** também mostra o diff completo.

## Contexto da Sessão

O Claude mantém o contexto dentro de uma sessão. Você pode referenciar coisas que disse antes:

```
> cria um componente Button
> (Claude cria o componente)
> agora adiciona uma variante "destructive" nesse componente
> (Claude sabe que está falando do Button que acabou de criar)
```

Quando a sessão fica longa demais (muitos tokens), use `/compact` para resumir sem perder o fio da meada.

## Boas Práticas

- Sempre rode `claude` dentro da pasta raiz do projeto
- Use `/clear` quando mudar de assunto completamente
- Use `/cost` para monitorar uso de API
- Revise sempre o diff antes de aceitar — o Claude pode errar
- Se o resultado não foi bom, itere na mesma sessão em vez de começar do zero
