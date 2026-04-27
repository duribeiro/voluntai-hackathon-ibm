# 🧠 Etapa 4 — Premissas Agente × API × Orchestrate

> Projeto: VoluntAI  
> Data: 2026-04-25  
> Objetivo: responder à objeção “se existe API, qual é a importância do agente?” e ajustar o backlog da PoC ao funcionamento real do watsonx Orchestrate.

---

## 1. Pergunta Crítica

Se o sistema tem API para cadastrar, buscar, fazer matching e notificar, o agente está fazendo algo diferente ou é só enfeite?

Resposta curta:

**O agente não substitui a API. O agente decide quando, como e por que usar a API.**

A API executa operações determinísticas. O agente faz a camada de interpretação, decisão contextual, coleta conversacional, uso de conhecimento e orquestração entre passos.

---

## 2. Evidência no Exemplo `weather_agent`

Arquivos analisados:

- `docs/weather_agent/agents/weather_agent.yaml`
- `docs/weather_agent/tools/get_weather.py`

### Como o exemplo funciona

O agente é definido por YAML:

- `spec_version: v1`
- `kind: native`
- `name: weather_agent`
- `description`: explica para que o agente serve
- `instructions`: orienta comportamento e quando usar tools
- `llm`: modelo usado
- `tools`: lista de ferramentas disponíveis

As tools são funções Python expostas com decorator:

- `@tool(permission=ToolPermission.READ_ONLY)`
- `get_current_weather(location: str)`
- `get_weather_forecast(location: str, days: int = 3)`

Essas funções chamam uma API externa via `requests.get`, tratam erro e devolvem JSON estruturado.

---

## 3. Premissas Confirmadas pelo Exemplo

1. O agente recebe linguagem natural.
2. O agente interpreta intenção e parâmetros.
3. O agente escolhe qual tool chamar.
4. A tool chama API/serviço externo.
5. A API retorna JSON.
6. O agente transforma o JSON em resposta conversacional.
7. O agente pode pedir esclarecimento se a entrada for ambígua.
8. A tool pode ser somente leitura ou executar ação, dependendo da permissão.

Portanto, o padrão correto é:

**Usuário → Agente → Tool/API → Dados → Agente → Resposta/Próxima ação**

---

## 4. O Que o Agente Faz Que um Algoritmo Simples Não Faz

### 4.1 Interpretação de intenção

O usuário não precisa preencher formulário perfeito. Pode dizer:

> “Sou motorista em Canoas e posso ajudar no fim de semana.”

O agente extrai:

- intenção: cadastrar voluntário
- habilidade: motorista
- cidade: Canoas
- disponibilidade: fim de semana
- lacunas: nome, telefone, CPF

Um algoritmo tradicional exigiria campos explícitos ou UX rígida.

### 4.2 Coleta conversacional incremental

O agente pergunta apenas o que falta, confirma resumo e só então chama a tool.

Isso reduz fricção em cenário de crise.

### 4.3 Decisão contextual

Ao cadastrar uma necessidade, o agente pode decidir:

- classificar urgência antes de salvar
- chamar matching após salvar
- chamar notificação se urgência for alta/crítica
- consultar knowledge base para justificar prioridade

Essa sequência não é apenas CRUD; é coordenação operacional.

### 4.4 Uso de conhecimento externo

O agente pode usar knowledge base com:

- dados das enchentes RS 2024
- critérios de urgência
- taxonomia de habilidades
- padrões de crise

A API não “sabe” isso. Ela só executa operações.

### 4.5 Resposta humana e explicável

A API retorna dados. O agente transforma em resposta útil:

> “Encontrei 3 voluntários compatíveis em Canoas. Priorizei Maria porque é técnica de enfermagem, está disponível hoje e está na mesma cidade.”

Isso ajuda pitch, confiança e tomada de decisão.

### 4.6 Orquestração multiagente

O Orchestrate permite agentes colaboradores. O Orchestrator pode rotear para RegistryAgent, MatchAgent, NotifyAgent e RadarAgent.

Isso justifica o nome “Orchestrate”: não é só endpoint; é coordenação de trabalho entre especialistas.

### 4.7 Orchestrator como Ponto Único de Contato (SPOC)

O usuário final (voluntário ou instituição) **nunca** fala diretamente com os agentes especialistas. Ele interage 100% do tempo com o **Orchestrator**. É o Orchestrator que atua como o "concierge" em linguagem natural, entende a intenção e delega a execução em background para o RegistryAgent, MatchAgent, NotifyAgent e RadarAgent, devolvendo a resposta consolidada de forma humana para o usuário.

### 4.8 A Importância das Instructions (Prompts)

Para que a orquestração e o SPOC funcionem perfeitamente (como evidenciado no exemplo `weather_agent`), não basta expor a API. Cada agente precisa de **instruções rigorosas (prompts)** detalhando exatamente *quando* usar uma ferramenta, *como* interpretar os dados e *como* formatar a resposta para o Orchestrator. 

Essas diretrizes de comportamento são o núcleo da inteligência do agente e estão versionadas como código na pasta `orchestrate/instructions/`. A eficiência do sistema depende dessas regras estarem claras e bem definidas.

---

## 5. O Que a API Faz

A API é o braço operacional do sistema:

- valida dados
- persiste no Supabase
- aplica regras determinísticas
- busca registros
- calcula matching básico
- registra notificações
- expõe endpoints estáveis para tools

A API deve continuar existindo porque o agente não deve gravar direto no banco.

---

## 6. Conclusão de Arquitetura

Premissa validada:

**Agentes orquestram. Tools/API executam. Supabase persiste. Knowledge base contextualiza.**

A arquitetura defensável para banca é:

1. O watsonx Orchestrate é a camada agentic.
2. As tools são capacidades operacionais expostas aos agentes.
3. A API é a camada segura e auditável de execução.
4. O Supabase é a persistência.
5. O frontend é só a interface de demonstração e acompanhamento.

---

## 7. Consequência para o Backlog P0

Antes de telas bonitas, precisamos garantir o “braço” dos agentes:

### P0 técnico mínimo

1. Criar API pública com endpoints JSON.
2. Gerar OpenAPI 3.0 válido.
3. Cada operação precisa ter `operationId` em snake_case.
4. Cada endpoint precisa ter descrição clara para o LLM decidir quando usar.
5. Endpoints precisam aceitar/retornar JSON.
6. Criar tools compatíveis com watsonx Orchestrate.
7. Criar agentes com instruções claras.
8. Testar pelo chat do Orchestrate usando show reasoning/justificativa quando disponível.

---

## 8. Atenção: Assets Atuais Ainda Não São OpenAPI Completo

Os arquivos em `orchestrate/tools/*.json` hoje estão mais próximos de schemas de função do que de especificações OpenAPI completas.

O Orchestrate aceita tools por OpenAPI, mas a documentação exige:

- OpenAPI 3.0
- bloco `servers` com exatamente uma URL
- paths com endpoints reais
- `operationId` em cada endpoint
- `description` em cada endpoint
- entrada e saída em JSON

Então o próximo ajuste é gerar um arquivo `openapi.yaml` real para a API VoluntAI.

---

## 9. Sobre Puxar Dados/API

O exemplo `weather_agent` mostra que tools Python conseguem puxar dados de API externa usando `requests` e devolver JSON ao agente.

No ambiente local atual, o pacote `ibm_watsonx_orchestrate` não está instalado e a chave da WeatherAPI está vazia no exemplo, então não dá para executar esse agente localmente como Orchestrate agora.

Mas a premissa técnica está clara:

- via Python tool: possível chamar APIs externas diretamente;
- via OpenAPI tool: possível importar endpoints REST e permitir que o agente chame;
- via Knowledge Base: possível subir documentos para RAG;
- via document processing/flows: existe suporte a extração de texto de documentos, mas isso é mais pesado e não deve ser P0 para a PoC.

---

## 10. Frase Para Defesa na Banca

> “A API executa operações; o agente coordena decisões. O diferencial do VoluntAI não é só cadastrar dados, mas interpretar pedidos ambíguos em linguagem natural, consultar conhecimento de crise, decidir qual fluxo acionar, escolher ferramentas e explicar a recomendação. O watsonx Orchestrate é a camada que transforma endpoints isolados em um trabalhador digital capaz de coordenar voluntariado em contexto real.”

---

_Resultado: premissa agente × API validada para orientar o backlog da Etapa 4._
