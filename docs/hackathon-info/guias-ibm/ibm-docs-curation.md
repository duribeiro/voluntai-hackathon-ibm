# 🔭 Curadoria IBM Watsonx Orchestrate — Hackathon UNASP+IBM 2026

> **Foco:** APENAS como criar agentes de IA e como orquestrá-los. Zero joio.
> **Data:** 2026-04-26 | **Deadline hackathon:** 27/04

---

## 🎯 TL;DR — O que você PRECISA saber

1. **Agentes nativos** = YAML/JSON/Python → `orchestrate agents import -f arquivo.yaml`
2. **3 estilos de agente**: `default` (simples), `react` (Think→Act→Observe), `planner` (planeia antes)
3. **Colaboradores** = agentes que chamam outros agentes (orquestração nativa)
4. **Ferramentas** = Python, OpenAPI, Agentic Workflows, MCP
5. **Knowledge bases** = Milvus/Elasticsearch internos ou externos
6. **Agentes externos** = via `external_chat` (OpenAI-style API) ou protocolo A2A
7. **CLI é o caminho**: `orchestrate agents create/import`, `orchestrate env activate`

---

## 📦 Arquitetura de um Agente Nativo

### Componentes obrigatórios e opcionais

```yaml
spec_version: v1
kind: native          # native | external | assistant
name: crisis_coordinator_agent   # snake_case obrigatório
llm: watsonx/ibm/granite-3-8b-instruct  # provedor/desenvolvedor/model_id
style: planner        # default | react | planner
hide_reasoning: False
description: |
  Coordena voluntários e recursos em situações de crise,
  priorizando por gravidade e proximidade.
instructions: |
  Você é um coordenador de crise. Sempre priorize:
  1. Vidas em risco iminente
  2. Acesso a abrigos e suprimentos
  3. Logística de voluntários
  Use a ferramenta map_shelters para localizar abrigos próximos.
  Se não houver dados suficientes, pergunte antes de agir.
collaborators:
  - shelter_finder_agent
  - volunteer_match_agent
tools:
  - map_shelters
  - prioritize_requests
  - notify_volunteers
knowledge_base:
  - crisis_protocols_kb
guidelines:
  - condition: "Há risco de vida iminente relatado"
    action: "Priorizar imediatamente, notificar equipe de resgate"
  - condition: "Voluntário sem skill específico"
    action: "Direcionar para tarefas gerais (distribuição, limpeza)"
restrictions: editable
```

### Formatos aceitos

| Formato | Quando usar |
|---------|-------------|
| **YAML** | Leitura fácil, recomendado para hackathon |
| **JSON** | Se for gerar via código/script |
| **Python** | Se precisar de lógica programática na definição |

---

## 🧠 3 Estilos de Agente — QUAL USAR NO HACKATHON

| Estilo | Como funciona | Melhor para | ⚡ Recomendação hackathon |
|--------|--------------|-------------|--------------------------|
| **`default`** | LLM decide ferramenta e ação dinamicamente | Tarefas lineares simples | ❌ Pouco para crise |
| **`react`** | Think → Act → Observe (loop iterativo) | Tarefas complexas/ambíguas, pesquisa | ⚠️ Bom para agente de análise |
| **`planner`** | Cria plano estruturado → executa passo a passo | Workflows multi-step com transparência | ✅ **IDEAL para orquestração de crise** |

### Por que `planner` é o melhor para o projeto:

- Cria plano visível antes de agir (transparência = confiança do usuário)
- Lista tarefas, ferramentas e colaboradores no plano
- Re-planeja se condições mudam (crise = imprevisível)
- Suporta `structured_output` (resposta formatada) ou `custom_join_tool`
- Suporta TODOS os tipos de ferramenta (Python, OpenAPI, MCP, colaboradores)

### Exemplo planner com structured_output:

```yaml
spec_version: v1
style: planner
structured_output:
  type: "object"
  additionalProperties: false
  properties:
    priority_level: {type: "string"}
    assigned_shelter: {type: "string"}
    volunteers_needed: {type: "integer"}
```

---

## 🔗 Orquestração: Colaboradores = Agentes chamando Agentes

### Conceito-chave

- **Colaborador** = outro agente que este agente pode invocar
- O agente "supervisor" usa a `description` dos colaboradores para rotear
- Hierarquia natural: agente coordenador → agentes especialistas

### Padrão para o hackathon:

```
crisis_coordinator_agent (planner, supervisor)
    ├── shelter_finder_agent (react, encontra abrigos)
    ├── volunteer_match_agent (react, matching voluntários)
    └── resource_tracker_agent (default, verifica suprimentos)
```

### Tipos de colaboradores suportados:

| Tipo | Kind | Como se conecta |
|------|------|-----------------|
| Agente nativo WXO | `native` | `collaborators: [nome_agente]` |
| Agente externo (API) | `external` | `external_chat` provider |
| Agente A2A | `external` | `external_chat/A2A/0.3.0` |
| watsonx Assistant | `assistant` | Integração nativa |

---

## 🛠️ Ferramentas: O que os agentes podem FAZER

### 4 tipos de ferramenta:

| Tipo | Quando usar | Exemplo hackathon |
|------|-------------|-------------------|
| **Python** | Lógica customizada, APIs, processamento | Geolocalização, matching, priorização |
| **OpenAPI** | Consumir APIs REST existentes | API de Cemaden, dados de abrigos |
| **Agentic Workflow** | Orquestração complexa com múltiplos passos | Fluxo de triagem completo |
| **MCP** | Integração via Model Context Protocol | Servidor de dados de crise externo |

### Exemplo de ferramenta Python:

```python
from ibm_watsonx_orchestrate.agent_builder.tools import tool

@tool
def find_nearby_shelters(lat: float, lon: float, radius_km: int = 10) -> dict:
    """Encontra abrigos próximos a uma coordenada.
    
    Args:
        lat: Latitude da localização
        lon: Longitude da localização
        radius_km: Raio de busca em km
    
    Returns:
        dict: Lista de abrigos com capacidade e distância
    """
    # lógica aqui
    return {"shelters": [...]}
```

---

## 📚 Knowledge Bases

### Para o hackathon:
- **Built-in** (Milvus interno): Upload de PDFs/documentos de protocolo de crise
- **Externo**: Conectar a Elasticsearch/Milvus existente
- Definir em YAML → importar com `orchestrate knowledge-base import`

---

## ⚙️ CLI Essencial — Comandos que você VAI usar

```bash
# Setup
orchestrate env add -n hackathon -u <instance-url>
orchestrate env activate hackathon --api-key <key>

# Criar agente direto
orchestrate agents create \
  --name crisis_coordinator \
  --kind native \
  --description "Coordena recursos em crises" \
  --llm watsonx/ibm/granite-3-8b-instruct \
  --style planner \
  --tools find_nearby_shelters \
  --collaborators shelter_finder_agent

# Importar agente de arquivo
orchestrate agents import -f crisis_coordinator.agent.yaml

# Listar agentes
orchestrate agents list

# Listar modelos disponíveis
orchestrate models list

# Deploy
orchestrate agents release --agent-id <id>
```

---

## 🔑 Modelos Disponíveis

| Modelo | Formato | Notas |
|--------|---------|-------|
| `watsonx/ibm/granite-3-8b-instruct` | watsonx/granite | Padrão IBM, bom para tarefas gerais |
| `watsonx/meta-llama/llama-3-3-70b-instruct` | watsonx/llama | Mais pesado, mais capaz |
| `groq/openai/gpt-oss-120b` | groq/openai | Default atual, 131K context, ⚠️ NÃO suporta styles (só Customer Care) |

⚠️ **CRÍTICO:** Se usar `groq/openai/gpt-oss-120b`, os estilos (default/react/planner) são IGNORADOS. Para usar `planner`, escolha outro modelo.

---

## 📋 Guidelines — Regras de comportamento

Formato: **When** `condition` **then** `action` **and/or** `invoke tool`

```yaml
guidelines:
  - condition: "Usuário relita risco de vida"
    action: "Priorizar imediatamente, escalonar para resgate"
    tool: "emergency_alert"
  - condition: "Abrigo está lotado"
    action: "Redirecionar para abrigo mais próximo com vaga"
```

---

## 🔗 Links — CURADORIA (joio separado do trigo)

### ✅ LEIA AGORA (essenciais para arquitetura/código)

| Link | O que tem | Prioridade |
|------|-----------|------------|
| [Authoring native agents](https://developer.watson-orchestrate.ibm.com/agents/build_agent) | YAML/JSON/Python completo, components, guidelines | 🔴 CRÍTICO |
| [Choosing agent style](https://developer.watson-orchestrate.ibm.com/agents/agent_styles) | default vs react vs planner com exemplos | 🔴 CRÍTICO |
| [Agent descriptions & instructions](https://developer.watson-orchestrate.ibm.com/agents/descriptions) | Boas práticas para instructions, naming, LLM choice | 🟡 IMPORTANTE |
| [Connect external agents](https://developer.watson-orchestrate.ibm.com/agents/connect_agent) | external_chat, A2A protocol, integração | 🟡 IMPORTANTE |
| [Importing & deploying agents](https://developer.watson-orchestrate.ibm.com/agents/import_agent) | CLI commands, create/import/release | 🟡 IMPORTANTE |
| [Tools overview](https://developer.watson-orchestrate.ibm.com/tools/overview) | Python, OpenAPI, Agentic Workflows, MCP | 🟡 IMPORTANTE |

### 🟡 LEIA SE SOBRAR TEMPO (úteis mas não bloqueantes)

| Link | O que tem |
|------|-----------|
| [Knowledge bases](https://developer.watson-orchestrate.ibm.com/knowledge_base/overview) | Setup de KB para documentos de crise |
| [Environment setup](https://developer.watson-orchestrate.ibm.com/environment/initiate_environment) | CLI env add/activate |
| [Skills specifications](https://developer.watson-orchestrate.ibm.com/agents/skills) | MCP servers, sop-builder, wxo-builder |
| [ADK GitHub repo](https://github.com/IBM/ibm-watsonx-orchestrate-adk) | Exemplos de código, README |

### ❌ PULE (joio — renderizam vazias ou são irrelevantes)

| Link | Motivo |
|------|--------|
| `ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=getting-started` | Página JS vazia, conteúdo real está no developer.watson-orchestrate.ibm.com |
| `ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=building-agents` | Idem — redirect para dev docs |
| `dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/plan-initial.html` | Página de plano do Cloud Pak, não relevante para ADK |

---

## 🏗️ Arquitetura Recomendada para o Hackathon

```
┌─────────────────────────────────────────────────┐
│         crisis_coordinator (planner)             │
│         LLM: granite-3-8b ou llama-3-3-70b      │
│         Knowledge: protocolos_crise_kb           │
│         Tools: prioritize, notify, geolocate      │
└──────────┬──────────┬──────────┬────────────────┘
           │          │          │
    ┌──────┴──┐  ┌────┴─────┐  ┌┴──────────────┐
    │ shelter  │  │ volunteer │  │ resource       │
    │ finder   │  │ matcher   │  │ tracker        │
    │ (react)  │  │ (react)   │  │ (default)      │
    └─────────┘  └──────────┘  └───────────────┘
```

### Fluxo do planner:

1. Recebe pedido de ajuda
2. **Plan**: Cria plano com prioridades (vida > abrigo > suprimentos)
3. **Act**: Chama colaboradores e ferramentas em sequência
4. **Observe**: Verifica resultados, re-planeja se necessário
5. **Output**: structured_output com: prioridade, abrigo designado, voluntários alocados

---

## ⚡ Checklist rápido para amanhã

- [ ] `orchestrate env activate` no ambiente do hackathon
- [ ] Definir 3 agentes YAML (coordinator + 2 especialistas)
- [ ] Escolher `style: planner` para coordinator
- [ ] Escolher modelo que suporte styles (NÃO gpt-oss-120b se precisar de planner)
- [ ] Criar pelo menos 1 ferramenta Python (geolocalização ou matching)
- [ ] Importar: `orchestrate agents import -f coordinator.yaml`
- [ ] Testar no chat: `orchestrate chat`

---

*Curadoria por Kairos 🔭 — dados com ação são poder.*