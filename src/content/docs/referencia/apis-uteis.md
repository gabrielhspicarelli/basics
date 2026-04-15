---
title: APIs Úteis — Lista Curada
description: APIs gratuitas para usar nos seus projetos, com exemplos de prompt para integrar com Claude.
---

## APIs sem Autenticação

### ViaCEP — Endereço por CEP

```
GET https://viacep.com.br/ws/{cep}/json/
```

**Exemplo:** `https://viacep.com.br/ws/01310100/json/`

**Prompt Claude:**
> "integra ViaCEP no campo de CEP: ao digitar e sair do campo, preenche automaticamente rua, bairro e cidade. GET https://viacep.com.br/ws/{cep}/json/"

---

### Open-Meteo — Previsão do Tempo

```
GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m
```

**Exemplo SP:** `https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m`

**Prompt Claude:**
> "busca temperatura atual de São Paulo usando Open-Meteo e mostra no header. lat=-23.5505, lon=-46.6333"

---

### IBGE — Dados do Brasil

```
GET https://servicodados.ibge.gov.br/api/v1/localidades/estados
```

**Prompt Claude:**
> "preenche o dropdown de estados com dados da API do IBGE: GET https://servicodados.ibge.gov.br/api/v1/localidades/estados"

---

## APIs com API Key Gratuita

### ExchangeRate-API — Câmbio

Cadastro em [exchangerate-api.com](https://www.exchangerate-api.com) (1500 req/mês grátis)

```
GET https://v6.exchangerate-api.com/v6/{API_KEY}/latest/USD
```

---

### NewsAPI — Notícias

Cadastro em [newsapi.org](https://newsapi.org) (100 req/dia grátis)

```
GET https://newsapi.org/v2/top-headlines?country=br&apiKey={API_KEY}
```

---

### OpenWeatherMap — Clima

Cadastro em [openweathermap.org](https://openweathermap.org) (1000 req/dia grátis)

```
GET https://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo&appid={API_KEY}&units=metric&lang=pt_br
```

---

## APIs do Governo Brasileiro

| API | URL | Dados |
|-----|-----|-------|
| BCB — Selic | `https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json` | Taxa Selic |
| IBGE — Municípios | `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios` | Cidades por estado |
| IBGE — Estados | `https://servicodados.ibge.gov.br/api/v1/localidades/estados` | Lista de estados |

---

## Onde Encontrar Mais

- [github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) — 1000+ APIs públicas
- [rapidapi.com](https://rapidapi.com) — filtro por "Free"
- [any-api.com](https://any-api.com) — documentação de APIs populares
