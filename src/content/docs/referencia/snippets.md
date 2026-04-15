---
title: Snippets Prontos
description: Prompts reutilizáveis para tarefas comuns com Claude Code. Copie, adapte e use.
---

## Setup e Configuração

**Criar CLAUDE.md para o projeto atual:**
```
lê todos os arquivos do projeto e cria um CLAUDE.md completo na raiz com: descrição do projeto, stack técnica, estrutura de pastas, convenções de código e comandos principais (dev, build, test)
```

**Criar .env.example:**
```
verifica todas as variáveis de ambiente usadas no projeto e cria um arquivo .env.example com cada variável listada (sem os valores reais) e um comentário explicando para que serve. adiciona .env ao .gitignore se ainda não estiver lá.
```

**Setup inicial de projeto Node.js:**
```
cria a estrutura inicial de um projeto Node.js com: package.json, .gitignore (node, env, os), README.md básico, pasta src/ com index.js vazio. não instala dependências ainda.
```

---

## Entendimento de Código

**Explicar um arquivo:**
```
explica o que o arquivo [nome] faz, função por função. usa linguagem simples, como se eu não soubesse programar bem.
```

**Encontrar bugs:**
```
revisa o arquivo [nome] procurando: erros lógicos, problemas de segurança, edge cases não tratados, e code smells. lista tudo que encontrar com explicação de por que é um problema.
```

**Entender um erro:**
```
estou recebendo esse erro: [cola o erro completo]. contexto: [descreve o que você estava fazendo]. qual a causa provável e como corrigir?
```

---

## Desenvolvimento

**Criar componente React:**
```
cria um componente React chamado [Nome] em src/components/[Nome].tsx. ele recebe as props: [lista as props e tipos]. exibe: [descreve o visual]. usa Tailwind CSS para estilização. exporta como default.
```

**Adicionar endpoint de API:**
```
cria um endpoint [METHOD] /api/[rota] no arquivo [caminho]. ele deve: [descreve o que faz]. recebe: [descreve o body/params]. retorna: [descreve a resposta]. trata os erros com status codes adequados.
```

**Escrever testes:**
```
escreve testes unitários para o arquivo [nome]. cobre: casos normais, casos extremos (arrays vazios, null, undefined), e casos de erro. usa [jest/vitest/pytest — o que o projeto já usa].
```

---

## Git e Deploy

**Commitar com mensagem boa:**
```
commita todas as mudanças com uma mensagem descritiva seguindo o padrão Conventional Commits (feat:, fix:, chore:, etc.)
```

**Resumir o que mudou:**
```
olha o git diff e explica em português o que mudou, como se fosse um resumo para alguém que não viu o código
```

---

## Refatoração

**Refatorar função grande:**
```
a função [nome] em [arquivo] está grande demais. refatora ela extraindo partes em funções menores com nomes descritivos. mantém o comportamento idêntico. adiciona JSDoc nas funções extraídas.
```

**Renomear variáveis:**
```
as variáveis em [arquivo] têm nomes ruins (a, b, x, temp...). renomeia todas para nomes descritivos em inglês que refletem o que elas armazenam. atualiza todas as referências.
```
