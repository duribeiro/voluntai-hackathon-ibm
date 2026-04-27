# 🏆 Hackathon IA Descomplicada — UNASP + IBM 2026

> **"Orquestrando o Voluntariado Inteligente para Situações de Crise"**
> Criado: 2026-04-22 | Deadline: **27/04 até 19h**

---

## 🎯 Tema

Criar solução de IA agentic que conecta voluntários e instituições em cenários de crise, usando **IBM watsonx Orchestrate** como núcleo de coordenação.

## 📋 Problema

- Voluntários não sabem como suas habilidades podem ser melhor usadas
- Instituições têm dificuldade em mapear, filtrar e coordenar voluntários
- Emergências: falta de priorização, redundância de esforços, comunicação fragmentada
- Baixa utilização de IA para tomada de decisão rápida e escalável

## 🔧 O que a solução deve fazer

1. **Mapear voluntários** — habilidades, disponibilidade, contexto/localização
2. **Gerenciar necessidades** — instituições cadastram demandas reais e urgentes
3. **Recomendação inteligente** — IA cruza perfil com necessidade e recomenda melhor forma de contribuir
4. **Orquestrar fluxos** — comunicação, acompanhamento e coordenação via watsonx Orchestrate

## 🛠️ Tecnologias

- **Obrigatória:** IBM watsonx Orchestrate (low-code/no-code)
- **Opcional:** IBM watsonx.ai (modelos Granite, Prompt Lab)
- **Formato:** Prova de Conceito (PoC)

## 📅 Cronograma

| Data | Evento | Status |
|------|--------|--------|
| 22/04 19h | Lançamento do desafio (Auditório Arlete Afonso) | ✅ |
| 27/04 até 19h | **Entrega do projeto** | 🔴 3 dias! |
| 30/04 | Resultado e premiação | ⏳ |

## 💰 Premiação

- 1º lugar: R$ 1.000
- 2º lugar: R$ 600
- 3º lugar: R$ 300

## 📎 Links

- [Guia IBM Cloud Trial](https://github.com/academic-initiative/documentation/blob/main/academic-initiative/how-to/How-to-Create-a-30-day-IBM-Cloud-Trial-Account/readme.md)
- [watsonx Orchestrate Guide](https://github.com/academic-initiative/documentation/blob/main/Watsonx%20Orchestrate.md)

## ✅ Pré-requisitos

- [x] ~~Criar conta IBM Cloud (email UNASP, sem VPN)~~ → **FEITO** 2026-04-24
- [ ] Estudar watsonx Orchestrate
- [ ] Estudar watsonx.ai (opcional)

## 🎯 Nossa Vantagem

- Arquitetura de agentes já é nosso dia a dia (Aria = orchestrator)
- Taxonomia de agentes (Client → Orchestration → Agents → Tool Catalog → Tools) mapeia 1:1
- Pensamos em orquestração inteligente, não em "app"
- Kairos fez pesquisa profunda com dados reais de enchentes RS 2024, desastres Brasil, plataformas existentes

## 📂 Estrutura do Projeto

```
hackathon-ibm-2026/
├── README.md           ← Este arquivo
├── research/           ← Pesquisa completa do Kairos
├── docs/               ← Documentação, editais, materiais
└── assets/             ← Fotos, prints, referências visuais
```

## 📊 Roadmap de Progresso

### ✅ ETAPA 1 — Preparação (CONCLUÍDA)
- [x] Briefing e entendimento do desafio
- [x] Research profundo (Kairos) — compilado em research/
- [x] Conta IBM Cloud criada (via Academic Initiative)
- [x] Pasta do projeto organizada (docs, research, assets)
- [x] Documentos copiados (edital, tema, guide)
- [x] Guia traduzido para PT (Guide_watsonx_Orchestrate_PT.pdf)

### ✅ ETAPA 2 — Levantamento de Requisitos (CONCLUÍDA)
- [x] Brainstorming de visão e solução
- [x] Confronto com edital — problema e solução 1:1
- [x] Definição de personas (Voluntário, Instituição, Doador/Investidor)
- [x] 21 requisitos funcionais documentados
- [x] 10 requisitos não funcionais documentados
- [x] Validação MVP concluída: manter / simplificar / simular / visão futura
- [x] 3 agentes principais definidos (Match, Need, Radar)
- [x] Stack definida: Next.js + Supabase + watsonx Orchestrate + Vercel
- [x] Dados mockados planejados (20 voluntários + 5-8 instituições + 8-12 necessidades)

### ✅ ETAPA 3 — Validação de Requisitos (CONCLUÍDA)
- [x] Matriz manter / simplificar / simular / visão futura criada
- [x] MVP validado para demo curta
- [x] Radar real movido para simulação controlada no P0
- [x] APIs governamentais reais movidas para P2 / visão futura

### ✅ ETAPA 4 — Planejamento de Processo e Backlog (CONCLUÍDA)
- [x] Premissa agente × API documentada
- [x] Contrato OpenAPI P0 criado (`orchestrate/openapi/voluntai-p0.openapi.yaml`)
- [x] Backlog P0/P1/P2 documentado
- [x] Sequência de construção definida
- [x] Fluxo demo mínimo definido
- [x] Critérios de pronto definidos

### 🔄 ETAPA 5 — Construção da PoC (PRÓXIMA)
- [ ] Bootstrap da API / projeto
- [ ] Seed mockado
- [ ] Endpoints de cadastro
- [ ] Classificação de urgência + matching
- [ ] Notificação in-app mockada
- [ ] Radar simulado
- [ ] Dashboard simples
- [ ] Deploy público
- [ ] Importar OpenAPI no watsonx Orchestrate
- [ ] Testar fluxo end-to-end

### ⬜ ETAPA 6 — Entrega
- [ ] Preparar apresentação/pitch
- [ ] Submeter no formulário (https://forms.office.com/r/hP4iGNmgM6)
- [ ] Registrar na plataforma de competição (https://compete.012601.watsonx-challenge.ibm.com)

---

_Equipe: Eduardo + Aria_
_Última atualização: 2026-04-25_