# 🗺️ Mapa de Navegação IBM watsonx Orchestrate — Hackathon

> **Objetivo:** URLs, caminhos e atalhos para operar rápido no IBM Cloud/WXO.
> **Criado:** 2026-04-26 | **Última atualização:** 2026-04-27

---

## 1. Links Diretos (bookmark)

| Recurso | URL |
|---------|-----|
| **IBM Cloud Dashboard** | `https://cloud.ibm.com/` |
| **Catálogo → watsonx Orchestrate** | `https://cloud.ibm.com/catalog/services/watsonx-orchestrate` |
| **Busca catálogo (watsonx orchestrate)** | `https://cloud.ibm.com/catalog?search=watsonx+orchestrate` |
| **watsonx Orchestrate Dev Docs** | `https://developer.watson-orchestrate.ibm.com/` |
| **Authoring native agents** | `https://developer.watson-orchestrate.ibm.com/agents/build_agent` |
| **Choosing agent style** | `https://developer.watson-orchestrate.ibm.com/agents/agent_styles` |
| **Agent descriptions & instructions** | `https://developer.watson-orchestrate.ibm.com/agents/descriptions` |
| **Connect external agents** | `https://developer.watson-orchestrate.ibm.com/agents/connect_agent` |
| **Importing & deploying agents** | `https://developer.watson-orchestrate.ibm.com/agents/import_agent` |
| **Tools overview** | `https://developer.watson-orchestrate.ibm.com/tools/overview` |
| **Knowledge bases** | `https://developer.watson-orchestrate.ibm.com/knowledge_base/overview` |
| **Environment setup (CLI)** | `https://developer.watson-orchestrate.ibm.com/environment/initiate_environment` |
| **Skills specifications** | `https://developer.watson-orchestrate.ibm.com/agents/skills` |
| **ADK GitHub repo** | `https://github.com/IBM/ibm-watsonx-orchestrate-adk` |

---

## 2. Caminhos no IBM Cloud (navegação via UI)

### Para provisionar o watsonx Orchestrate:
1. Login: `https://cloud.ibm.com/` (ou `https://dataplatform.cloud.ibm.com/login?context=wx`)
2. Catálogo → buscar "watsonx orchestrate" → clicar no card
3. Selecionar **localização** (Dallas/us-south recomendado para Trial)
4. Selecionar **plano Trial** (grátis por 30 dias)
5. Criar instância

### Planos disponíveis:
| Plano | Custo | Destalhes |
|-------|-------|----------|
| **Trial** | Grátis | 30 dias, 1 Workspace, Standard plan completo |
| **Essentials Agentic** | $530/instância + $150/1000 MAU | 4000 MAU, 1 Workspace |
| **Standard Agentic** | $6,360/instância + $150/1000 MAU | 40.000 MAU, 100 Workspaces |
| **Premium Agentic** | Enterprise | 50.000 MAU, data isolation |

### Localizações suportadas:
- São Paulo (br-sao) ✅
- Dallas (us-south) ✅
- Washington DC (us-east)
- Frankfurt (eu-de)
- Londres (eu-gb)
- Tóquio (jp-tok)
- Sydney (au-syd)
- Toronto (ca-tor)

### Para acessar o watsonx Orchestrate após provisionar:
1. Menu → **Resource list** → encontrar a instância
2. Ou: `https://cloud.ibm.com/resources` → filtrar por "watsonx"
3. Clicar na instância → Launch → abre o Watsonx Orchestrate UI

---

## 3. CLI — Comandos Essenciais

```bash
# Setup do ambiente
orchestrate env add -n hackathon -u <instance-url>
orchestrate env activate hackathon --api-key <key>

# Criar agente direto
orchestrate agents create \
  --name volunteer_match_agent \
  --kind native \
  --description "Faz matching entre voluntários e necessidades" \
  --llm watsonx/ibm/granite-3-8b-instruct \
  --style react \
  --tools find_nearby_shelters

# Importar agente de YAML
orchestrate agents import -f volunteer_match.agent.yaml

# Listar agentes
orchestrate agents list

# Listar modelos disponíveis
orchestrate models list

# Deploy
orchestrate agents release --agent-id <id>

# Chat de teste
orchestrate chat
```

---

## 4. Navegação rápida no Watsonx Orchestrate UI

Após login na instância:
- **Agent Builder** → criar/editar agentes
- **Skills** → ferramentas e integrações
- **Knowledge Base** → upload de documentos
- **Chat** → testar agentes
- **Settings** → API keys, environment, deploy

---

## 5. API — Conexão Direta

A instância do WXO expõe API RESTful. Para conectar:
1. Provisionar instância → obter **URL** e **API Key**
2. Endpoints seguem padrão OpenAI-compatible para agentes externos
3. Para agentes nativos: CLI (`orchestrate`) é o caminho principal
4. Para chat: usar o endpoint de chat da instância

**Modelos que suportam styles (react/planner):**
- `watsonx/ibm/granite-3-8b-instruct` ✅
- `watsonx/meta-llama/llama-3-3-70b-instruct` ✅
- `groq/openai/gpt-oss-120b` ❌ (NÃO suporta styles)

---

## 6. Estado atual da provisão (2026-04-27)

### ⚠️ CRÍTICO: Conta do Hackathon vs Conta Pessoal

O Guia do hackathon é claro: **NÃO criar instância na conta pessoal do Eduardo.**

O processo correto é:
1. Receber **convite por email** do time "AI Experiential Learning Lab"
2. Aceitar o convite → clicar "Join Now" → "Join Account"
3. Trocar para a conta **"xxxxxxx – AI Experiential Learning Lab"** no dropdown do canto superior direito
4. A instância já deve estar pré-provisionada nessa conta

**Regra:** NÃO criar novas instâncias. Usar as que já estão na conta do hackathon.

**Região:** Dallas (us-south) — conforme guia.

### Conta pessoal do Eduardo (atual no navegador):
- Já tem 5+ recursos de IA/Aprendizado de máquina provisionados
- A página de criar watsonx Orchestrate está aberta com Trial selecionado
- **Mas não devemos provisionar aqui** — é a conta pessoal, não a do hackathon

### O que Eduardo precisa fazer:
1. Verificar email (ribeiro_eduardo01@acad.unasp.edu.br) por convite do "AI Experiential Learning Lab"
2. Se não recebeu, entrar em contato com organizadores do hackathon
3. Aceitar convite, trocar para conta do Learning Lab
4. Acessar watsonx Orchestrate pela conta do hackathon

## 7. Próximos passos (checklist)

- [ ] **Eduardo verifica email do hackathon** (convite AI Experiential Learning Lab)
- [ ] Aceitar convite e trocar para conta do hackathon
- [ ] Verificar se watsonx Orchestrate já está provisionado na conta do hackathon
- [ ] Se sim: obter Instance URL + API Key
- [ ] Instalar CLI `orchestrate` (pip install ibm-watsonx-orchestrate)
- [ ] Configurar `orchestrate env activate`
- [ ] Criar YAMLs dos 3+ agentes (arquitetura real do projeto)
- [ ] Importar agentes via CLI ou UI
- [ ] Criar ferramenta Python (matching/geolocalização)
- [ ] Subir Knowledge Base (dados de crise)
- [ ] Testar via chat do Orchestrate
- [ ] Montar demo e pitch

---

_Última atualização: 2026-04-27_