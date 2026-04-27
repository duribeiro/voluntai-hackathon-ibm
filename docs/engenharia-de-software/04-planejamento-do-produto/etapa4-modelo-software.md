# ⚙️ Etapa 4 — Modelo de Software

> **Projeto:** VoluntAI
> **Data:** 2026-04-24

De acordo com o nosso Workflow de Engenharia de Qualidade, esta etapa define como o software será construído.

## 1. Modelo de Ciclo de Vida: Prototipação Incremental (Agile MVP)

Para o contexto de Hackathon (prazo curtíssimo, alta incerteza técnica com Watsonx e necessidade de demonstração rápida), o modelo "Cascata" é inviável e arriscado.

Adotamos a **Prototipação Incremental baseada em Agile**:
- **Ciclo Rápido:** Construir a espinha dorsal (API + DB) primeiro.
- **Incremento de Valor:** Integrar o Orchestrator apenas quando o "braço operacional" estiver pronto.
- **Adaptação:** Requisitos não essenciais (ex: RAG completo, integração X/Twitter real) são rebaixados para simulação caso o tempo se esgote, preservando o fluxo central da demonstração.

## 2. Metodologia de Trabalho (Simplificada)

- **Backlog Priorizado:** Dividido em P0 (Must Have), P1 (Should Have) e P2 (Nice to Have).
- **Sprints Diárias:** Ciclos de 24h para fechar incrementos (Ex: Dia 1 = Arquitetura e Supabase; Dia 2 = Endpoints; Dia 3 = Watsonx).
- **Quality Gates:** Nenhuma funcionalidade avança se quebrar a regra de 2s de resposta, vazar credenciais no código ou se não estiver no padrão OpenAPI.
