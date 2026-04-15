---
title: 9. Agentes de IA
description: O que são agentes, como o Claude usa sub-agentes internamente, e como criar um agente simples com a API da Anthropic.
---

## O que é um Agente de IA

Um **chat** responde a uma pergunta e para.

Um **agente** recebe um objetivo, planeja passos, executa ações, verifica o resultado e itera até concluir — tudo sozinho.

```
Chat:
  você → pergunta → Claude → resposta → fim

Agente:
  você → objetivo → Claude → [planeja] → [executa ação 1]
                                       → [verifica resultado]
                                       → [executa ação 2]
                                       → [verifica resultado]
                                       → [entrega resultado final]
```

## Como o Claude Code já é um Agente

Quando você diz "adiciona autenticação com NextAuth.js", o Claude não só escreve código. Ele:

1. Lê os arquivos existentes do projeto
2. Planeja quais arquivos criar e modificar
3. Instala dependências (`npm install next-auth`)
4. Cria os arquivos necessários
5. Modifica arquivos existentes
6. Roda o build para verificar que não quebrou nada
7. Commita as mudanças

Isso é comportamento de agente: objetivo → planejamento → execução → verificação.

## Sub-Agentes no Claude Code

Para tarefas complexas, o Claude Code pode lançar **sub-agentes** — instâncias paralelas do Claude que trabalham em partes diferentes do problema ao mesmo tempo.

Por exemplo, ao pedir "analisa todo o projeto e encontra possíveis bugs":
- Sub-agente 1: analisa `src/components/`
- Sub-agente 2: analisa `src/api/`
- Sub-agente 3: analisa `src/utils/`
- Agente principal: consolida os resultados

Você não precisa configurar isso — o Claude decide quando usar sub-agentes automaticamente.

## Criar um Agente Simples com a API

Aqui está um agente básico em Python que verifica o preço de um ativo:

```python
# agente_alerta.py
import anthropic
import yfinance as yf

client = anthropic.Anthropic()

def verificar_preco(ticker: str, limite: float) -> str:
    """Busca o preço atual de um ativo."""
    ativo = yf.Ticker(ticker)
    preco = ativo.fast_info['lastPrice']
    return f"{ticker}: {preco:.2f} (limite: {limite:.2f})"

# Definir a ferramenta para o agente
tools = [
    {
        "name": "verificar_preco",
        "description": "Verifica o preço atual de um ativo na bolsa",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {"type": "string", "description": "Ex: VALE3.SA"},
                "limite": {"type": "number", "description": "Preço de alerta"}
            },
            "required": ["ticker", "limite"]
        }
    }
]

# Loop do agente
messages = [{"role": "user", "content": "Verifica se VALE3.SA está abaixo de 60"}]

while True:
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        tools=tools,
        messages=messages
    )

    if response.stop_reason == "tool_use":
        tool_use = next(b for b in response.content if b.type == "tool_use")
        resultado = verificar_preco(**tool_use.input)
        messages.append({"role": "assistant", "content": response.content})
        messages.append({
            "role": "user",
            "content": [{"type": "tool_result", "tool_use_id": tool_use.id, "content": resultado}]
        })
    else:
        print(response.content[0].text)
        break
```

**Para rodar:**
```bash
pip install anthropic yfinance
python agente_alerta.py
```

## Casos de Uso Práticos

| Agente | O que faz |
|--------|-----------|
| Monitor de preços | Verifica ativos e alerta quando atingem um preço |
| Resumidor de emails | Lê sua caixa de entrada e resume os emails importantes |
| Gerador de relatórios | Coleta dados de várias fontes e gera um relatório formatado |
| Revisor de código | Lê PRs no GitHub e sugere melhorias automaticamente |
| Pesquisador | Busca informações na web e consolida em um documento |

## O Próximo Nível: MCP

Para dar ao seu agente acesso ao browser, email, banco de dados e muito mais, use os **MCP servers** — explicados no próximo módulo.
