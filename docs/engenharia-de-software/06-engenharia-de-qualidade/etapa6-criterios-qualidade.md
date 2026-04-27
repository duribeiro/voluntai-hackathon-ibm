# 🛡️ Etapa 6 — Engenharia de Qualidade

> **Projeto:** VoluntAI
> **Data:** 2026-04-24

Definição dos atributos, métricas e limites de qualidade que governam a construção (Etapa 7).

## 1. Atributos de Qualidade Críticos para o MVP

1. **Segurança (Zero-Trust):** 
   - Nenhuma API Key ou token exposto no código fonte. 
   - Uso obrigatório de arquivos `.env` e gerenciadores de segredos.
2. **Desempenho:**
   - Respostas da interface em até 2 segundos. 
   - Processamento pesado (clusterização do radar) deve ser em background ou mockado.
3. **Confiabilidade da Demo (Uptime):**
   - Garantir 99% de disponibilidade no momento da banca avaliadora.
   - Plano de mitigação: Todos os agentes e chamadas de API devem ter tratamento de erro (graceful degradation).

## 2. Critérios de Aceite Globais

Para uma feature ser considerada "Pronta para a Demo":
- [ ] Está mapeada no contrato OpenAPI (`voluntai-p0.openapi.yaml`).
- [ ] Funciona ponta-a-ponta (do cadastro no frontend à gravação no Supabase).
- [ ] Responde de forma correta e sem stack traces na tela.
- [ ] Se envolver IA, o agente Orchestrator consegue usar a Tool e explicar a ação de forma humana.

## 3. Riscos de Qualidade e Mitigações

| Risco | Impacto | Estratégia de Mitigação |
|-------|---------|-------------------------|
| Vazamento de Credenciais | Bloqueio do projeto | Uso da skill `secret-manager` do agente para varrer o código periodicamente. |
| Latência da API IBM | Falha na apresentação | Mockar respostas secundárias; garantir que a API principal não dependa 100% do Watsonx para existir (Dashboard direto no DB). |
| Complexidade excessiva do RAG | Não entrega do P0 | Adiar RAG completo e focar na orquestração pura de Tools (JSON) no MVP. |
