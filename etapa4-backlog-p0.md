# 🧭 Etapa 4 — Planejamento de Processo e Backlog P0

> Projeto: VoluntAI — Plataforma Inteligente de Voluntariado para Situações de Crise  
> Data: 2026-04-25  
> Objetivo: transformar o MVP validado em sequência concreta de construção da PoC.

---

## 1. Decisão de Arquitetura para Construção

O P0 será construído sobre uma API própria do VoluntAI, com dados mockados/controlados e contrato OpenAPI importável pelo IBM watsonx Orchestrate.

Premissa oficial:

**Agentes orquestram. API executa. Supabase persiste. Dados mockados estabilizam a demo.**

APIs reais de governo, X/Twitter, Inmet, Cemaden ou GDACS não entram no caminho crítico. Elas aparecem como evolução técnica e como fonte simulada no Radar.

---

## 2. Artefato Base do P0

Contrato criado:

`orchestrate/openapi/voluntai-p0.openapi.yaml`

Validação técnica inicial:

- OpenAPI: 3.0.3
- Servers: 1
- Operações: 11
- `operationId`: 100% preenchidos
- Entrada/saída: JSON

---

## 3. Backlog P0 — Obrigatório para Demo

### P0.1 — Bootstrap do Projeto

**Objetivo:** criar base técnica executável rapidamente.

Tarefas:

- Criar projeto Next.js ou API Node/Next com rotas server-side.
- Definir estrutura mínima de pastas.
- Configurar TypeScript.
- Configurar variáveis de ambiente.
- Criar endpoint `/health`.
- Preparar deploy em Vercel.

Critério de pronto:

- URL local responde `/health`.
- Deploy consegue subir sem erro.

---

### P0.2 — Modelagem e Seed Mockado

**Objetivo:** ter dados estáveis para demo sem depender de integrações externas.

Tarefas:

- Criar entidades/tabelas: volunteers, institutions, needs, matches, notifications, external_alerts.
- Criar seed com dados fictícios:
  - 20 voluntários.
  - 5 a 8 instituições.
  - 8 a 12 necessidades.
  - 3 a 5 alertas externos mockados.
- Usar dados brasileiros e contexto RS 2024.
- Garantir que existam matches óbvios para a demo.

Critério de pronto:

- Base inicial populada.
- Há pelo menos 1 cenário crítico com voluntários compatíveis.
- Há pelo menos 1 gargalo crítico sem cobertura para aparecer no dashboard.

---

### P0.3 — Endpoints de Cadastro

**Objetivo:** permitir que os agentes cadastrem entidades centrais.

Endpoints:

- `POST /volunteers`
- `POST /institutions`
- `POST /needs`
- `GET /needs`

Critério de pronto:

- Agente ou frontend consegue criar voluntário.
- Agente ou frontend consegue criar instituição.
- Agente ou frontend consegue criar necessidade.
- Necessidade criada aparece na listagem.

---

### P0.4 — Urgência e Matching

**Objetivo:** provar inteligência operacional mínima.

Endpoints:

- `POST /needs/classify-urgency`
- `POST /needs/{need_id}/match`
- `GET /volunteers/{volunteer_id}/recommendations`

Tarefas:

- Implementar classificação inicial por regras + texto.
- Retornar justificativa em linguagem simples.
- Implementar matching por:
  - habilidade principal;
  - cidade/UF;
  - disponibilidade;
  - urgência.
- Calcular score simples de compatibilidade.

Critério de pronto:

- Descrição crítica recebe `critica` ou `alta` com justificativa.
- Necessidade retorna lista de voluntários compatíveis.
- Voluntário recebe top 3 recomendações.

---

### P0.5 — Notificação In-App Mockada

**Objetivo:** fechar o ciclo detectar → combinar → comunicar.

Endpoint:

- `POST /notifications`

Tarefas:

- Criar notificação in-app.
- Permitir mensagem gerada pelo agente.
- Registrar status `created` ou `sent_mock`.
- Associar notificação a uma necessidade quando existir.

Critério de pronto:

- Matching gera mensagem para voluntário compatível.
- Notificação aparece no painel/demo.

---

### P0.6 — Radar Simulado

**Objetivo:** demonstrar diferencial sem depender de API externa instável.

Endpoint:

- `POST /radar/mock-alerts/process`

Tarefas:

- Receber alerta mockado com fonte, texto, cidade/UF.
- Classificar urgência.
- Registrar alerta externo.
- Converter alerta em necessidade quando `force_create_need = true`.
- Preservar rastreabilidade: fonte, texto original, horário, explicação.

Critério de pronto:

- Um alerta `cemaden_mock` ou `inmet_mock` gera uma necessidade acionável.
- Essa necessidade pode passar por matching.

---

### P0.7 — Dashboard Simples

**Objetivo:** dar evidência visual para pitch e banca.

Endpoint:

- `GET /dashboard/summary`

Tarefas:

- Mostrar total de voluntários.
- Mostrar total de instituições.
- Mostrar necessidades abertas.
- Mostrar necessidades críticas.
- Mostrar matches realizados.
- Mostrar gargalos: críticas sem match suficiente.

Critério de pronto:

- Dashboard responde com métricas consistentes.
- Pelo menos 1 gargalo crítico aparece.

---

### P0.8 — Integração watsonx Orchestrate

**Objetivo:** provar que a IBM é parte real do fluxo, não decoração.

Tarefas:

- Subir API pública.
- Atualizar `servers.url` no OpenAPI com URL real.
- Importar OpenAPI como tools no watsonx Orchestrate.
- Criar/ajustar agentes:
  - Orchestrator;
  - Cadastro Agent;
  - Matching Agent;
  - Notificação Agent;
  - Radar/Crisis Agent se couber.
- Testar no chat do Orchestrate:
  - cadastrar voluntário;
  - cadastrar necessidade;
  - classificar urgência;
  - buscar match;
  - gerar notificação.

Critério de pronto:

- Pelo menos 1 fluxo real/semi-real passa pelo Orchestrate chamando API.
- A demo consegue mostrar tool sendo usada ou resultado vindo da API.

---

## 4. Ordem Recomendada de Construção

1. Bootstrap da API.
2. Seed mockado.
3. Endpoints de cadastro.
4. Classificação de urgência.
5. Matching.
6. Notificação.
7. Radar mockado.
8. Dashboard.
9. Deploy público.
10. Importação OpenAPI no watsonx Orchestrate.
11. Teste end-to-end pelo agente.
12. Tela/demo visual.
13. Pitch e gravação de backup.

Motivo: primeiro construir o braço operacional dos agentes; depois conectar Orchestrate; por último polir UI e apresentação.

---

## 5. Backlog P1 — Importante se Sobrarem Horas

- Tela melhor para voluntário.
- Tela melhor para instituição.
- Listagem visual de notificações.
- Filtros simples no dashboard.
- Botão “processar alerta simulado”.
- Melhorar copy das mensagens geradas.
- README técnico mais bonito.
- Gravação curta da demo como backup.

---

## 6. Backlog P2 — Visão Futura / Pitch

- Integração real com Inmet.
- Integração real com Cemaden.
- Integração real com GDACS.
- Integração real com X/Twitter/RapidAPI.
- WhatsApp real.
- Autenticação por perfil.
- Heatmap geográfico real.
- Clusterização avançada de alertas.
- Matching com embeddings/ML.
- Auditoria robusta e LGPD completa.

---

## 7. Fluxo Demo Mínimo

### Cena 1 — Voluntário

Usuário diz ao agente:

> “Quero ajudar. Sou técnico de enfermagem em Canoas e tenho disponibilidade hoje.”

Agente coleta dados faltantes e chama `volunteer_create`.

### Cena 2 — Instituição

Instituição diz:

> “Estamos com abrigo lotado em Canoas e precisamos de apoio de saúde para famílias desalojadas.”

Agente chama `urgency_classify`, depois `need_create`.

### Cena 3 — Matching

Matching Agent chama `need_match` e retorna voluntários compatíveis.

### Cena 4 — Notificação

Notificação Agent chama `notification_send` com mensagem humana e contextual.

### Cena 5 — Radar

Radar Agent processa alerta `cemaden_mock`, cria nova necessidade e mostra rastreabilidade.

### Cena 6 — Dashboard

Dashboard mostra impacto: voluntários, necessidades críticas, matches e gargalos.

---

## 8. Critérios de Pronto da Etapa 4

A Etapa 4 estará concluída quando existirem:

- contrato OpenAPI P0 validado;
- backlog P0/P1/P2 documentado;
- sequência de construção definida;
- dados mockados definidos;
- fluxo mínimo de demo definido;
- critérios de pronto claros;
- dependência IBM explícita;
- plano B com API/mock caso Orchestrate atrase.

---

## 9. Plano B

Se o watsonx Orchestrate atrasar ou falhar:

- manter API e dashboard funcionando;
- mostrar OpenAPI pronto para importação;
- mostrar agentes/instructions preparados;
- gravar demo local simulando chamadas;
- no pitch, explicar que a arquitetura foi desenhada para tools OpenAPI do Orchestrate.

Mas a prioridade continua sendo ter pelo menos uma chamada real pelo Orchestrate.

---

_Resultado: backlog P0 definido para construção iterativa da PoC._
