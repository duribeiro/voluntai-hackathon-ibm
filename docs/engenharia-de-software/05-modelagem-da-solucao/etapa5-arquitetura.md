# 🏗️ Etapa 2 — Arquitetura e Histórias de Usuário

> VoluntAI — Plataforma Inteligente de Voluntariado para Situações de Crise
> Data: 2026-04-24

---

## 1. Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                    USUÁRIOS                         │
│     Voluntário / Instituição / Doador (Investidor)  │
└──────────────┬──────────────────────┬───────────────┘
               │                      │
               ▼                      ▼
┌──────────────────────┐  ┌────────────────────────────┐
│   FRONTEND (Next.js) │  │  IBM watsonx Orchestrate   │
│   Vercel             │  │                            │
│                      │  │  ┌───────────────────────┐ │
│ - Cadastro           │  │  │  Agente Orquestrador  │ │
│ - Listagens          │  │  │  (triagem + coordena) │ │
│ - Painel do Doador   │  │  └───┬─────┬─────┬─────┬─┘ │
│ - Notificações       │  │      │     │     │     │   │
│ - Chat com agente    │◄─┼──────┘     │     │     │   │
│                      │  │            │     │     │   │
│                      │  │  ┌─────────▼┐ ┌──▼────┐│   │
│                      │  │  │Cadastro  │ │Radar  ││   │
│                      │  │  │Agent     │ │Agent  ││   │
│                      │  │  └────┬─────┘ └──┬────┘│   │
│                      │  │       │          │     │   │
│                      │  │  ┌────▼─────┐ ┌──▼─────▼─┐ │
│                      │  │  │ Matching │ │News      │ │
│                      │  │  │ Agent    │ │Agent     │ │
│                      │  │  └────┬─────┘ └────┬─────┘ │
│                      │  │       │            │       │
│                      │  │       └─────┬──────┘       │
│                      │  │             │              │
│                      │  │     Custom Tools           │
│                      │  │     (chamam API abaixo)    │
└──────────┬───────────┘  └─────────────┼──────────────┘
           │                            │
           ▼                            ▼
┌─────────────────────────────────────────────────────┐
│              BACKEND (Supabase)                     │
│              PostgreSQL + REST API                  │
│                                                     │
│  Tabelas:                                           │
│  - volunteers      (voluntários)                    │
│  - institutions    (instituições)                   │
│  - needs           (necessidades)                   │
│  - external_alerts (APIs + X/Twitter)               │
│  - matches         (matches realizados)             │
│  - notifications   (notificações)                   │
│  - skills          (catálogo de habilidades)        │
└───────────────────────────────▲─────────────────────┘
                                │
                                │
┌───────────────────────────────┴─────────────────────┐
│              FONTES DE DADOS EXTERNAS (Radar)       │
│  - APIs Governamentais (Cemaden, Inmet)             │
│  - API do X/Twitter (via RapidAPI)                  │
└─────────────────────────────────────────────────────┘
```

---

## 2. Modelagem de Dados

### 2.1 Tabela: skills (catálogo de habilidades)

| Campo     | Tipo    | Descrição                           |
|-----------|---------|-------------------------------------|
| id        | UUID    | PK                                  |
| category  | TEXT    | Categoria (saúde, logística, etc.)  |
| name      | TEXT    | Nome da habilidade                  |
| icon      | TEXT    | Emoji representativo                |

**Seed:**
- Saúde: enfermeiro, médico, socorrista, psicólogo, farmacêutico
- Logística: motorista, piloto de barco, operador de maquinário, carregador
- Apoio: cozinheiro, eletricista, pedreiro, encanador, faxineiro
- Tech: programador, operador de rádio, operador de drone
- Social: assistente social, tradutor/Libras, organizador comunitário

### 2.2 Tabela: volunteers

| Campo          | Tipo    | Descrição                              |
|----------------|---------|----------------------------------------|
| id             | UUID    | PK                                     |
| name           | TEXT    | Nome completo                          |
| email          | TEXT    | E-mail (único)                         |
| phone          | TEXT    | Telefone                               |
| city           | TEXT    | Cidade                                 |
| state          | TEXT    | UF                                     |
| skill_ids      | UUID[]  | FK skills (array)                      |
| availability   | TEXT    | integral / parcial / fim_de_semana     |
| cnh_type       | TEXT    | Tipo CNH (nullable)                    |
| created_at     | TIMESTAMPTZ | Data de cadastro                   |

### 2.3 Tabela: institutions

| Campo          | Tipo    | Descrição                              |
|----------------|---------|----------------------------------------|
| id             | UUID    | PK                                     |
| name           | TEXT    | Nome da instituição                    |
| type           | TEXT    | ONG / defesa_civil / igreja / prefeitura / hospital / outro |
| city           | TEXT    | Cidade                                 |
| state          | TEXT    | UF                                     |
| email          | TEXT    | E-mail                                 |
| phone          | TEXT    | Telefone                               |
| responsible    | TEXT    | Nome do responsável                    |
| created_at     | TIMESTAMPTZ | Data de cadastro                   |

### 2.4 Tabela: needs

| Campo            | Tipo    | Descrição                                    |
|------------------|---------|----------------------------------------------|
| id               | UUID    | PK                                           |
| title            | TEXT    | Título da necessidade                        |
| description      | TEXT    | Descrição detalhada                          |
| institution_id   | UUID    | FK institutions                              |
| skill_ids        | UUID[]  | FK skills (habilidades necessárias)          |
| volunteers_needed| INT     | Quantidade de voluntários necessários        |
| urgency          | TEXT    | crítica / alta / média / baixa               |
| urgency_suggested| TEXT    | Urgência sugerida pela IA                    |
| city             | TEXT    | Cidade da necessidade                        |
| state            | TEXT    | UF                                           |
| status           | TEXT    | aberta / em_andamento / atendida / cancelada |
| due_date         | TIMESTAMPTZ | Data/hora limite                         |
| created_at       | TIMESTAMPTZ | Data de cadastro                         |

### 2.5 Tabela: matches

| Campo          | Tipo    | Descrição                              |
|----------------|---------|----------------------------------------|
| id             | UUID    | PK                                     |
| volunteer_id   | UUID    | FK volunteers                           |
| need_id        | UUID    | FK needs                                |
| status         | TEXT    | sugerido / aceito / recusado / concluído |
| score          | FLOAT   | Score de compatibilidade (0-1)          |
| notified_at    | TIMESTAMPTZ | Quando o voluntário foi notificado   |
| accepted_at    | TIMESTAMPTZ | Quando aceitou                       |
| created_at     | TIMESTAMPTZ | Data de criação do match             |

### 2.6 Tabela: notifications

| Campo          | Tipo    | Descrição                              |
|----------------|---------|----------------------------------------|
| id             | UUID    | PK                                     |
| user_type      | TEXT    | volunteer / institution / donor        |
| user_id        | UUID    | FK volunteers ou institutions           |
| type           | TEXT    | match_suggested / match_accepted / urgent_need / bottleneck |
| title          | TEXT    | Título da notificação                  |
| message        | TEXT    | Mensagem gerada pelo agente (empática)  |
| read           | BOOLEAN | Se foi lida                             |
| created_at     | TIMESTAMPTZ | Data de envio                       |

### 2.7 Tabela: external_alerts (NOVA)

| Campo          | Tipo    | Descrição                              |
|----------------|---------|----------------------------------------|
| id             | UUID    | PK                                     |
| source         | TEXT    | x_twitter / inmet / cemaden / gdacs    |
| original_text  | TEXT    | Texto/Payload original capturado       |
| classification | TEXT    | enchente / incêndio / resgate / logistica |
| location       | TEXT    | Localização extraída pela IA           |
| urgency        | TEXT    | Sugerida pela IA (crítica, alta, etc)  |
| validated_need | BOOLEAN | Se virou necessidade (Agrupamento IA)  |
| created_at     | TIMESTAMPTZ | Data de extração                    |

---

## 3. Endpoints da API (Supabase REST)

### 3.1 Voluntários

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| POST   | /volunteers          | Cadastrar voluntário   | RF01    |
| GET    | /volunteers          | Listar com filtros     | RF05    |
| GET    | /volunteers/:id      | Visualizar voluntário  | RF04    |
| PATCH  | /volunteers/:id      | Editar voluntário      | RF04    |
| GET    | /volunteers/:id/recommendations | Recomendações de necessidades | RF08 |

### 3.2 Instituições

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| POST   | /institutions        | Cadastrar instituição  | RF02    |
| GET    | /institutions        | Listar                 | RF04    |
| GET    | /institutions/:id    | Visualizar             | RF04    |
| PATCH  | /institutions/:id    | Editar                 | RF04    |

### 3.3 Necessidades

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| POST   | /needs               | Cadastrar necessidade  | RF03    |
| GET    | /needs               | Listar com filtros     | RF06    |
| GET    | /needs/:id           | Visualizar             | RF04    |
| PATCH  | /needs/:id           | Editar/status          | RF04    |
| POST   | /needs/:id/match     | Disparar matching      | RF07    |
| POST   | /needs/classify-urgency | Classificar urgência por IA | RF09 |

### 3.4 Matches

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| GET    | /matches             | Listar matches         | RF07    |
| PATCH  | /matches/:id         | Aceitar/recusar match  | RF07    |

### 3.5 Notificações

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| GET    | /notifications       | Listar por usuário     | RF14    |
| PATCH  | /notifications/:id   | Marcar como lida       | RF14    |

### 3.6 Doador / Investidor (Heatmap)

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| GET    | /dashboard/heatmap   | Visão consolidada de urgências | RF15    |
| GET    | /dashboard/bottlenecks | Gargalos (críticos sem voluntários) | RF16    |
| GET    | /dashboard/report    | Relatório resumo de impacto   | RF17    |

### 3.7 Radar Externo (APIs e Social Listening)

| Método | Endpoint             | Descrição              | RF      |
|--------|----------------------|------------------------|---------|
| POST   | /radar/alerts        | Registrar alerta bruto (X, Governo) | RF09    |
| GET    | /radar/alerts        | Listar alertas brutos pendentes | RF09    |
| POST   | /radar/cluster       | Validar grupo de alertas em Need | RF09    |

---

## 4. Custom Tools para watsonx Orchestrate

Os agentes chamam a API do backend via custom tools (JSON):

### Tool 1: volunteer_create
- **Endpoint:** POST /volunteers
- **Parâmetros:** name, email, phone, city, state, skill_ids, availability, cnh_type
- **Uso:** Agente de Cadastro cria voluntário via conversa

### Tool 2: institution_create
- **Endpoint:** POST /institutions
- **Parâmetros:** name, type, city, state, email, phone, responsible
- **Uso:** Agente de Cadastro cria instituição

### Tool 3: need_create
- **Endpoint:** POST /needs
- **Parâmetros:** title, description, institution_id, skill_ids, volunteers_needed, urgency, city, state, due_date
- **Uso:** Agente de Cadastro cria necessidade

### Tool 4: need_match
- **Endpoint:** POST /needs/:id/match
- **Parâmetros:** need_id
- **Uso:** Agente de Matching busca voluntários compatíveis

### Tool 8: radar_fetch (NOVA)
- **Endpoint:** POST /radar/fetch
- **Parâmetros:** keywords, location, source
- **Uso:** Agente Radar busca alertas nas APIs externas (X, Inmet, etc) e popula a tabela `external_alerts`.

### Tool 9: radar_cluster (NOVA)
- **Endpoint:** POST /radar/cluster
- **Parâmetros:** location, event_type
- **Uso:** Agente Radar agrupa alertas similares e cria uma nova `need` baseada na inteligência coletiva/dados sem depender de formulário da instituição.

### Tool 5: urgency_classify
- **Endpoint:** POST /needs/classify-urgency
- **Parâmetros:** description
- **Uso:** Agente de Matching classifica urgência por IA

### Tool 6: volunteer_recommend
- **Endpoint:** GET /volunteers/:id/recommendations
- **Parâmetros:** volunteer_id
- **Uso:** Agente de Matching recomenda necessidades ao voluntário

### Tool 7: notification_send
- **Endpoint:** POST /notifications
- **Parâmetros:** user_type, user_id, type, title, message
- **Uso:** Agente de Notificação envia notificação empática

---

## 5. Fluxos de Orquestração (detalhados)

### Fluxo 1: Cadastro de Voluntário
```
Usuário → "Quero me cadastrar como voluntário"
  → Orquestrador direciona para Agente de Cadastro
  → Agente de Cadastro coleta dados em linguagem natural
  → Chama volunteer_create (custom tool)
  → Sucesso: Agente de Notificação envia mensagem de boas-vindas
  → Agente de Matching busca recomendações e sugere necessidades compatíveis
```

### Fluxo 2: Cadastro de Necessidade
```
Instituição → "Preciso de 5 enfermeiros para abrigo em Canoas"
  → Orquestrador direciona para Agente de Cadastro
  → Agente de Cadastro coleta dados da necessidade
  → Agente de Matching classifica urgência (urgency_classify)
  → Se CRÍTICA: Orquestrador dispara em paralelo:
     → Agente de Matching busca voluntários (need_match)
     → Agente de Notificação notifica voluntários compatíveis
  → Se NÃO CRÍTICA: apenas salva e notifica em batch
```

### Fluxo 3: Voluntário consulta recomendações
```
Voluntário → "Onde posso ajudar?"
  → Orquestrador direciona para Agente de Matching
  → Agente consulta volunteer_recommend
  → Retorna Top 3 necessidades com justificativa
  → Voluntário escolhe uma → match aceito
  → Agente de Notificação avisa a instituição
```

### Fluxo 4: Dashboard do Investidor / Doador
```
Investidor/Doador → "Qual o status geral? Onde falta recurso?"
  → Orquestrador direciona para Agente Radar e Matching
  → Consulta dashboard/overview (necessidades + alertas de redes/governo)
  → Retorna visão consolidada + alertas de gargalo para alocação de doações
```

---

## 6. Histórias de Usuário

### Voluntário

- **HU-01** — Como voluntário, quero me cadastrar na plataforma para que o sistema saiba minhas habilidades e disponibilidade.
- **HU-02** — Como voluntário, quero receber recomendações de necessidades compatíveis com meu perfil para saber onde posso ajudar.
- **HU-03** — Como voluntário, quero ser notificado quando uma necessidade urgente surgir na minha região para responder rapidamente.
- **HU-04** — Como voluntário, quero conversar com o agente de IA para me cadastrar ou buscar oportunidades sem preencher formulários.
- **HU-05** — Como voluntário, quero aceitar ou recusar um match para ter controle sobre minha participação.

### Instituição

- **HU-06** — Como instituição, quero cadastrar necessidades de voluntários para que o sistema encontre pessoas compatíveis.
- **HU-07** — Como instituição, quero que a IA classifique automaticamente a urgência da minha necessidade para priorizar corretamente.
- **HU-08** — Como instituição, quero ser notificada quando voluntários forem alocados para minhas necessidades.
- **HU-09** — Como instituição, quero conversar com o agente de IA para cadastrar necessidades rapidamente em linguagem natural.

### Doador / Investidor (Empresas ou Pessoas Físicas)

- **HU-10** — Como doador/investidor, quero visualizar um painel consolidado (heatmap/overview) de necessidades para saber onde meus recursos financeiros/suprimentos são mais urgentes.
- **HU-11** — Como doador/investidor, quero ver alertas de gargalos gerados pela IA (necessidades críticas sem atendimento) para priorizar minhas ações de doação.
- **HU-12** — Como doador/investidor, quero gerar relatório resumo de impacto do ecossistema.

### Sistema (agentes)

- **HU-13** — Como agente orquestrador, quero triar as solicitações do usuário e direcionar para o agente especializado correto.
- **HU-14** — Como agente de notificação, quero gerar mensagens empáticas e contextualizadas para cada destinatário.
- **HU-15** — Como sistema, quero disparar fluxo automático quando uma necessidade crítica for cadastrada (matching + notificação em paralelo).

---

## 7. Stack Tecnológica (confirmada)

| Camada | Tecnologia | Hospedagem |
|--------|-----------|------------|
| Frontend | Next.js 14 + Tailwind CSS | Vercel (free) |
| Backend | Supabase (PostgreSQL + REST) | Supabase (free tier) |
| IA/Orquestração | IBM watsonx Orchestrate | IBM Cloud |
| IA complementar | IBM watsonx.ai (opcional) | IBM Cloud |
| Repositório | GitHub público | — |

---

## 8. Estrutura do Repositório

```
voluntai/
├── README.md                    # Setup, arquitetura, demo
├── docs/
│   ├── requisitos.md             # Etapa 1 — este documento
│   ├── arquitetura.md            # Etapa 2 — este documento
│   └── hackathon/                # Editais, tema, guias
├── frontend/                     # Next.js app
│   ├── src/
│   │   ├── app/                  # Páginas (App Router)
│   │   │   ├── page.tsx          # Home
│   │   │   ├── voluntarios/      # Cadastro + listagem
│   │   │   ├── instituicoes/     # Cadastro + listagem
│   │   │   ├── necessidades/     # Cadastro + listagem
│   │   │   ├── painel/           # Coordenação
│   │   │   └── chat/             # Interface com agente
│   │   ├── components/           # Componentes reutilizáveis
│   │   └── lib/                  # Supabase client, utils
│   ├── tailwind.config.ts
│   └── package.json
├── backend/                       # Supabase
│   ├── supabase/
│   │   ├── migrations/           # SQL migrations
│   │   └── seed.sql              # Dados mockados
│   └── config.toml
├── orchestrate/                   # Configs dos agentes IBM
│   ├── tools/                    # Custom tools (JSON)
│   │   ├── volunteer_create.json
│   │   ├── institution_create.json
│   │   ├── need_create.json
│   │   ├── need_match.json
│   │   ├── urgency_classify.json
│   │   ├── volunteer_recommend.json
│   │   └── notification_send.json
│   ├── knowledge/                # Arquivos para Knowledge Base
│   │   ├── enchentes-rs-2024.txt
│   │   ├── taxonomia-habilidades.txt
│   │   └── criterios-urgencia.txt
│   └── instructions/             # Instructions dos agentes
│       ├── orchestrator.md
│       ├── cadastro-agent.md
│       ├── matching-agent.md
│       └── notificacao-agent.md
└── .github/                      # CI/CD se der tempo
```

---

_Etapa 2 completa — 2026-04-24_