---
title: 4. Git e GitHub do Zero
description: O que são Git e GitHub, por que usar, e como o Claude Code os usa automaticamente no seu fluxo.
---

Git e GitHub são ferramentas separadas que trabalham juntas. Este módulo explica cada uma do zero.

## O que é Git

**Git** é um sistema de controle de versão que roda **no seu computador**. Ele tira "fotos" do seu projeto em momentos específicos — essas fotos são chamadas de **commits**.

Pense no Git como um histórico de saves num videogame: você pode voltar para qualquer ponto anterior se algo der errado.

```
Sem Git:
  projeto-final.zip
  projeto-final-v2.zip
  projeto-final-ESSE-mesmo.zip   😅

Com Git:
  commit: "adiciona formulário de login"
  commit: "corrige bug no botão"
  commit: "adiciona validação de email"   ← você pode voltar pra qualquer um
```

## O que é GitHub

**GitHub** é um site onde você armazena seu projeto Git na **nuvem**. É como o Google Drive, mas para código, com superpoderes.

| | Git | GitHub |
|---|---|---|
| Onde fica | Seu computador | Internet (nuvem) |
| O que faz | Salva histórico localmente | Armazena e compartilha remotamente |
| Precisa de internet | Não | Sim |
| Gratuito | Sim | Sim (plano básico) |

**Fluxo típico:** você trabalha no seu computador com Git → quando quiser salvar na nuvem, faz `git push` para o GitHub.

## Conceitos Essenciais

**Repository (repo):** A pasta do seu projeto com o histórico Git dentro.

**Commit:** Uma "foto" salva do projeto num momento específico. Todo commit tem uma mensagem explicando o que mudou.

**Branch:** Uma linha de desenvolvimento paralela. A branch principal se chama `main`. Você cria outras branches para testar coisas sem afetar o `main`.

**Push:** Enviar seus commits locais para o GitHub.

**Pull:** Baixar commits do GitHub para o seu computador.

**Clone:** Copiar um repositório do GitHub para o seu computador.

## Instalar o Git

**macOS:** O Git geralmente já vem instalado. Verificar:
```bash
git --version
```

Se não estiver, instale via [git-scm.com](https://git-scm.com).

**Windows:** Baixe em [git-scm.com](https://git-scm.com). Durante a instalação, aceite as opções padrão.

## Configuração Inicial (só uma vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Use o mesmo email da sua conta do GitHub.

## Fluxo Básico

```bash
# 1. Criar um novo projeto com Git
mkdir meu-projeto
cd meu-projeto
git init                    # inicia o Git na pasta

# 2. Criar ou editar arquivos
echo "# Meu Projeto" > README.md

# 3. Adicionar ao "staging" (selecionar o que vai na foto)
git add README.md           # adiciona um arquivo específico
# ou
git add .                   # adiciona tudo

# 4. Fazer o commit (tirar a foto)
git commit -m "primeiro commit"

# 5. Verificar o status
git status                  # mostra o que mudou
git log --oneline           # mostra o histórico de commits
```

## Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New** (botão verde)
3. Dê um nome ao repositório (ex: `meu-projeto`)
4. Deixe como **Public** ou **Private**
5. **Não marque** "Add README" (você já tem um)
6. Clique em **Create repository**

O GitHub vai mostrar comandos para conectar seu projeto local. Execute:

```bash
git remote add origin https://github.com/seu-usuario/meu-projeto.git
git branch -M main
git push -u origin main
```

Agora seu projeto está na nuvem.

## GitHub Pages — Publicar um Site Grátis

O **GitHub Pages** transforma seu repositório em um site acessível publicamente.

Para ativar:
1. Vá no repositório no GitHub
2. Clique em **Settings** → **Pages**
3. Em "Source", selecione **GitHub Actions**
4. Salve

Com um arquivo de workflow configurado (como o deste curso), cada push publica automaticamente.

## Como o Claude Code usa Git

O Claude Code commita automaticamente quando você confirma uma mudança. Você vê os commits no painel **Source Control** do VS Code ou rodando:

```bash
git log --oneline
```

O Claude segue boas práticas de commit: mensagens descritivas, commits atômicos (uma coisa por commit). Você pode pedir ao Claude para commitar com:

> "commita as mudanças com uma mensagem descritiva"
