---
title: 11. APIs — Como Encontrar e Usar
description: O que é uma API, onde encontrar APIs gratuitas e como pedir ao Claude para integrá-las no seu projeto.
---

## O que é uma API

**API (Application Programming Interface)** é uma forma de dois sistemas se comunicarem.

A analogia mais simples: um garçom num restaurante. Você (o cliente) não vai direto à cozinha. Você faz o pedido ao garçom (API), que leva para a cozinha (o serviço) e traz de volta o que você pediu.

```
Seu código  →  API  →  Serviço externo (clima, banco, notícias...)
            ←       ←  Dados retornados
```

## Tipos de API

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Gratuita** | Sem custo, sem limite ou com limite generoso | Open-Meteo (clima) |
| **Freemium** | Grátis até certo volume, pago acima | OpenWeatherMap |
| **Paga** | Cobra por requisição ou assinatura | Bloomberg, Twilio |
| **Pública** | Aberta, sem autenticação | ViaCEP, IBGE |
| **Privada** | Requer chave (API key) | OpenAI, Stripe |

## Onde Encontrar APIs Gratuitas

**Repositório de ouro:**
- [github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) — lista enorme de APIs públicas por categoria

**APIs do governo brasileiro:**
- [dadosabertos.bcb.gov.br](https://dadosabertos.bcb.gov.br) — Banco Central (câmbio, Selic, IPCA)
- [servicodados.ibge.gov.br](https://servicodados.ibge.gov.br) — IBGE (dados populacionais, geográficos)
- [dados.gov.br](https://dados.gov.br) — portal de dados abertos do governo

**Plataformas de APIs:**
- [rapidapi.com](https://rapidapi.com) — marketplace com milhares de APIs, muitas gratuitas
- [api.nasa.gov](https://api.nasa.gov) — NASA (fotos, dados espaciais)

## APIs Úteis para Começar

| API | O que faz | Autenticação |
|-----|-----------|--------------|
| [ViaCEP](https://viacep.com.br) | Busca endereço por CEP | Nenhuma |
| [Open-Meteo](https://open-meteo.com) | Previsão do tempo | Nenhuma |
| [ExchangeRate-API](https://exchangerate-api.com) | Cotação de moedas | API key gratuita |
| [IBGE API](https://servicodados.ibge.gov.br/api/docs/) | Dados do Brasil | Nenhuma |
| [BCB SGS](https://dadosabertos.bcb.gov.br) | Selic, IPCA, câmbio | Nenhuma |

## Como Testar uma API

Antes de integrar, teste direto no browser ou no terminal:

**No browser** (para GETs simples):
```
https://viacep.com.br/ws/01310100/json/
```

**No terminal com curl:**
```bash
curl "https://viacep.com.br/ws/01310100/json/"
```

**Resultado:**
```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

## Como Pedir ao Claude para Integrar uma API

**Exemplo 1 — busca de CEP:**
```
> integra a API do ViaCEP no formulário de cadastro.
> quando o usuário digitar um CEP válido no campo #cep e pressionar Tab,
> busca o endereço automaticamente e preenche os campos #rua, #bairro e #cidade.
> a API é: GET https://viacep.com.br/ws/{cep}/json/
> o projeto usa HTML/CSS/JS puro, sem frameworks.
```

**Exemplo 2 — previsão do tempo:**
```
> adiciona uma seção de previsão do tempo na página inicial.
> usa a API Open-Meteo (gratuita, sem API key): https://api.open-meteo.com/v1/forecast
> mostra temperatura atual e máx/mín para os próximos 3 dias.
> o projeto usa Next.js 14 com App Router. cria um Server Component que busca os dados.
> coordenadas de São Paulo: lat=-23.5505, lon=-46.6333
```

## Boas Práticas com APIs

- **Nunca coloque API keys no código** — use variáveis de ambiente (`.env`)
- **Adicione `.env` ao `.gitignore`** — para não subir para o GitHub
- **Trate erros** — a API pode estar fora do ar; seu código não pode quebrar por isso
- **Respeite os limites** — cada API tem rate limits; não faça requisições em loop

**Pedindo ao Claude para criar o `.env`:**
```
> cria um arquivo .env.example com todas as variáveis de ambiente necessárias para o projeto. adiciona .env ao .gitignore se ainda não estiver lá.
```
