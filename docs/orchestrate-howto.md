# 🎯 watsonx Orchestrate — Guia Prático para PoC

> Compilado do Guide_watsonx_Orchestrate_PT.pdf
> Última atualização: 2026-04-24

---

## 1. O que é o watsonx Orchestrate

Plataforma **low-code/no-code** para orquestrar agentes de IA em fluxos de trabalho.

**Conceitos-chave:**
- **Trabalhadores Digitais:** Personas de IA que executam tarefas via chat
- **Orquestração:** Coordena vários apps/serviços para tarefas complexas
- **Agentes Colaboradores:** Agentes especialistas que delegam tarefas entre si

---

## 2. Criar Agente (Passo a Passo)

1. Acessar watsonx Orchestrate
2. Menu → **"Criar novo agente"** (canto inferior esquerdo)
3. Escolher **"Criar do zero"** ou usar template
4. Definir:
   - **Nome:** Ex: `VoluntAI_Match`
   - **Descrição:** Claro e específico (o orquestrador usa isso)
   - **Instruções:** Comportamento em linguagem natural

**Exemplo de instruções:**
```
Você é um agente de matching de voluntários.
Recebe: perfil do voluntário (habilidades, localização, disponibilidade).
Retorna: 3 recomendações de necessidades compatíveis, priorizadas por urgência e proximidade.
Tom: empático, direto, prático.
```

---

## 3. Adicionar Knowledge Base

Permite RAG (retrieval-augmented generation) com documentos:

1. No editor do agente → aba **"Conhecimento"** (Knowledge)
2. **"Carregar arquivos"** → `.pdf, .txt, .docx, .pptx, .csv`
3. **Importante:** Adicionar **Descrição do Conhecimento**

**Exemplo de descrição:**
```
Use este documento para:
- Classificar urgência de necessidades (risco de vida > logística > doação)
- Identificar tipos de habilidades de voluntariado
- Consultar dados de crises brasileiras (enchentes RS 2024, Brumadinho, Petrópolis)
```

**Arquivos recomendados para PoC:**
- `research-completo.md` → dados de enchentes RS
- Classificação de urgência
- Taxonomia de habilidades

---

## 4. Conectar Tools (Ferramentas)

Tools são ações/automações (ex: consultar API, enviar notificação):

1. Editor do agente → aba **"Conjunto de ferramentas"** (Toolset)
2. **"Adicionar ferramenta"**
3. Opções:
   - **Catálogo:** Ferramentas pré-construídas (Slack, Teams, Salesforce...)
   - **Arquivo OpenAPI:** Importar `.yaml` ou `.json` de APIs customizadas

**Para PoC, podemos:**
- Usar tools de catálogo (Slack para notificações)
- Criar API mock para testes

---

## 5. Agentes Colaboradores

Orquestração entre agentes especialistas:

**Setup:**
1. **Gerenciar agentes**
2. Selecionar agente principal
3. Aba **"Conjunto de ferramentas"** → **"Adicionar agente"**
4. **"Adicionar da instância local"** → selecionar colaborador
5. **Implantar (Deploy)** para ativar

**Arquitetura VoluntAI:**
```
Coordenador (Crisis Agent)
    ├── Match Agent (voluntários)
    └── Need Agent (necessidades)
```

---

## 6. Testar e Justificar

1. Usar chat do Orchestrate para testar
2. **"Mostrar justificativa"** (Show Reasoning) para debug
3. Verificar se o agente está consultando a Knowledge Base

---

## 7. Requisitos de Infra

- **Conta IBM Cloud** com Feature Code (créditos)
- **watsonx.ai** provisionado (modelos Granite)
- **watsonx Orchestrate** provisionado
- **Credenciais:** Project ID, API Key, URL de endpoint

**Monitorar:** Unidades de Recurso (RUs) — avisos em 25%, 50%, 80%

---

## Checklist PoC VoluntAI

### Setup
- [ ] Feature Code aplicado
- [ ] watsonx Orchestrate provisionado
- [ ] watsonx.ai provisionado

### Agentes
- [ ] Criar `VoluntAI_Match` (Match Agent)
- [ ] Criar `VoluntAI_Need` (Need Agent)
- [ ] Criar `VoluntAI_Crisis` (Crisis Agent)

### Knowledge
- [ ] Subir `research-completo.md`
- [ ] Criar classificação de urgência
- [ ] Criar taxonomia de habilidades

### Fluxos
- [ ] Fluxo 1: Onboarding voluntário
- [ ] Fluxo 2: Cadastro necessidade
- [ ] Fluxo 3: Coordenação crise

### Teste
- [ ] Testar matching voluntário × necessidade
- [ ] Verificar justificativa (Show Reasoning)
- [ ] Preparar dados demo

---

_Criado por Aria — 2026-04-24_