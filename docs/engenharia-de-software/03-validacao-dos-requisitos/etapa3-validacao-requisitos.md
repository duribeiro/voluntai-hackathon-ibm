# ✅ Etapa 3 — Validação de Requisitos

> Projeto: VoluntAI — Plataforma Inteligente de Voluntariado para Situações de Crise  
> Data: 2026-04-25  
> Objetivo: validar os requisitos levantados contra prazo, edital, demonstrabilidade e viabilidade técnica da PoC.

---

## 1. Critério de Validação

Cada requisito foi validado por 5 perguntas:

1. É essencial para provar a proposta no hackathon?
2. É viável até 27/04, sem overengineering?
3. É demonstrável em uma PoC curta?
4. Depende obrigatoriamente do IBM watsonx Orchestrate?
5. Pode ser simulado sem prejudicar a credibilidade da solução?

A decisão final usa 4 categorias:

- **MANTER NO MVP** — precisa estar funcionando na demo.
- **MANTER SIMPLIFICADO** — entra na PoC, mas com escopo reduzido.
- **SIMULAR NA DEMO** — aparece como fluxo/dado mockado, sem integração real completa.
- **VISÃO FUTURA** — não entra na construção imediata; pode aparecer no pitch como evolução.

---

## 2. Resultado Executivo

A validação confirma que o projeto não deve tentar implementar os 21 requisitos funcionais de forma completa. Para vencer no prazo, a PoC precisa provar apenas o ciclo central:

**voluntário + necessidade + IA agentic + matching + notificação + evidência visual de impacto.**

O Radar externo e o painel do doador são diferenciais fortes, mas devem ser tratados como **demonstração simulada/controlada**, não como integração real completa com X/Twitter, Inmet, Cemaden ou APIs governamentais.

---

## 3. MVP Validado

### Fluxo obrigatório da demo

1. Cadastrar voluntário.
2. Cadastrar instituição.
3. Cadastrar necessidade.
4. Classificar urgência com IA.
5. Fazer matching voluntário × necessidade.
6. Gerar recomendação em linguagem natural.
7. Notificar voluntário compatível no painel.
8. Exibir painel simples com gargalos e métricas.
9. Mostrar Radar simulado criando uma necessidade a partir de alerta externo mockado.
10. Orquestrar pelo IBM watsonx Orchestrate ao menos um fluxo real ou semi-real, comprovando o Orchestrator como Ponto Único de Contato (SPOC) para o usuário.

---

## 4. Validação dos Requisitos Funcionais

| Req | Nome | Decisão | Justificativa |
|---|---|---|---|
| RF01 | Cadastro de voluntários | **MANTER NO MVP** | Base do matching e da narrativa. Sem isso, a solução perde prova operacional. |
| RF02 | Cadastro de instituições | **MANTER NO MVP** | Necessário para origem das demandas e credibilidade institucional. |
| RF03 | Cadastro de necessidades | **MANTER NO MVP** | Núcleo da operação; precisa disparar matching. |
| RF04 | Edição e visualização de cadastros | **VISÃO FUTURA** | Útil, mas não essencial para demo. Visualizar entra indiretamente; edição pode ficar fora. |
| RF05 | Listagem de voluntários com filtros | **MANTER SIMPLIFICADO** | Pode ser uma lista simples filtrável por habilidade/cidade; não gastar tempo com UX avançada. |
| RF06 | Listagem de necessidades com filtros | **MANTER SIMPLIFICADO** | Importante para painel operacional, mas basta filtro por urgência/status. |
| RF07 | Matching automático | **MANTER NO MVP** | É o coração da solução. Precisa funcionar de forma clara e demonstrável. |
| RF08 | Recomendação ao voluntário | **MANTER NO MVP** | Mostra valor direto ao usuário e reforça IA agentic. |
| RF09 | Classificação de urgência por IA | **MANTER NO MVP** | Requisito forte para demonstrar decisão inteligente. Pode ser feito com regras + IA. |
| RF10 | Orquestração via IBM watsonx | **MANTER NO MVP** | Obrigatório pelo edital. Precisa aparecer como núcleo coordenador, não detalhe decorativo. |
| RF11 | Notificação de voluntário compatível | **MANTER NO MVP** | Fecha o ciclo: detectar → combinar → comunicar. Pode ser in-app. |
| RF12 | Notificação de alocação à instituição | **MANTER SIMPLIFICADO** | Bom para completar fluxo, mas pode ser uma notificação/painel básico. |
| RF13 | Comunicação empática em linguagem natural | **MANTER NO MVP** | Diferencial de IA; melhora muito o pitch. |
| RF14 | Histórico de notificações | **VISÃO FUTURA** | Baixo impacto na demo; não deve consumir tempo. |
| RF15 | Painel do Doador/Investidor | **MANTER SIMPLIFICADO** | Diferencial narrativo; fazer painel simples com totais, gargalos e prioridades. |
| RF16 | Alerta de gargalo | **MANTER NO MVP** | Forte visualmente e útil no pitch; fácil de implementar com regra simples. |
| RF17 | Relatório resumo | **MANTER SIMPLIFICADO** | Pode virar cards de métricas no painel, sem relatório formal. |
| RF18 | Captura de alertas externos | **SIMULAR NA DEMO** | Integração real é arriscada no prazo. Usar payload mockado com fonte rastreável. |
| RF19 | Agrupamento e validação automática por IA | **SIMULAR NA DEMO** | Demonstrar clusterização com 3-5 alertas mockados; não implementar coleta real. |
| RF20 | Conversão de alerta em necessidade | **SIMULAR NA DEMO** | Excelente diferencial; implementar via botão/seed/fluxo controlado. |
| RF21 | Notificação de instituições próximas | **VISÃO FUTURA** | Pode aparecer no pitch, mas é secundário para a PoC. |

---

## 5. Validação dos Requisitos Não Funcionais

| Req | Nome | Decisão | Justificativa |
|---|---|---|---|
| RNF01 | Responsividade | **MANTER NO MVP** | A demo precisa funcionar bem em desktop e minimamente em mobile. |
| RNF02 | Performance até 2s | **MANTER SIMPLIFICADO** | Exigir fluidez nas telas principais; não prometer 2s para fluxos externos/IA. |
| RNF03 | 99% uptime na avaliação | **MANTER SIMPLIFICADO** | Objetivo prático: URL pública estável durante a banca. |
| RNF04 | Segurança de dados | **MANTER SIMPLIFICADO** | Não expor CPF/telefone completo na interface; para PoC, usar dados fictícios. |
| RNF05 | Escalabilidade | **VISÃO FUTURA** | Arquitetura deve não bloquear evolução, mas não é foco da demo. |
| RNF06 | Português brasileiro | **MANTER NO MVP** | Essencial para contexto brasileiro e apresentação. |
| RNF07 | Código público e documentado | **MANTER NO MVP** | Provável exigência de entrega; README precisa estar claro. |
| RNF08 | Integração IBM watsonx Orchestrate | **MANTER NO MVP** | Obrigatório; sem isso o projeto fica desalinhado ao hackathon. |
| RNF09 | Deploy automatizado | **MANTER NO MVP** | Precisa URL pública funcional. Vercel/Supabase é o caminho mais rápido. |
| RNF10 | Rastreabilidade de fontes externas | **MANTER SIMPLIFICADO** | Para Radar mockado, preservar fonte, horário e payload original simulado. |

---

## 6. Escopo Congelado para Construção

### Deve existir funcionando

- Cadastro de voluntário.
- Cadastro de instituição.
- Cadastro de necessidade.
- Matching automático.
- Classificação de urgência.
- Recomendação personalizada.
- Notificação in-app.
- Painel simples de necessidades/gargalos/métricas.
- Fluxo no watsonx Orchestrate demonstrando orquestração.
- Radar simulado convertendo alerta externo em necessidade.

### Não construir agora

- Edição completa de todos os cadastros.
- Histórico completo de notificações.
- Integração real com X/Twitter.
- Integração real com Inmet/Cemaden/GDACS.
- Sistema robusto de autenticação/permissões.
- WhatsApp real.
- Escalabilidade avançada.

---

## 7. Riscos Identificados

| Risco | Impacto | Mitigação |
|---|---|---|
| Acesso ao watsonx Orchestrate atrasar | Alto | Solicitar/aplicar Feature Code imediatamente; manter fluxo mockado como backup. |
| Escopo grande demais | Alto | Congelar MVP e tratar Radar real como simulação. |
| Demo depender de API externa instável | Alto | Usar payloads mockados rastreáveis. |
| Tempo insuficiente para UI completa | Médio | Priorizar 4 telas: dashboard, voluntário, necessidade, demo radar. |
| IBM ficar decorativo | Alto | Garantir ao menos um fluxo real no watsonx orquestrando tool/API. |

---

## 8. Decisão Final

A Etapa 3 está validada com corte de escopo.

O projeto segue para a próxima etapa: **Planejar processo e backlog**, criando backlog priorizado por P0/P1/P2 e sequência de construção da PoC.

---

_Resultado: requisitos validados para PoC iterativa — 2026-04-25_
