# 🛠️ Etapa 7 — Construção Controlada

A Etapa 7 não é composta por documentos teóricos. De acordo com o nosso Workflow de Engenharia de Qualidade, esta etapa representa a **execução real e o código vivo**.

Os artefatos gerados por esta etapa residem nas seguintes pastas raiz do projeto:

- `/frontend/` — Onde o Next.js e as interfaces estão sendo construídos.
- `/backend/` — Onde o Supabase, migrações e endpoints estão implementados.
- `/orchestrate/` — Onde residem os arquivos reais de configuração dos agentes IBM:
  - `tools/` (JSONs do OpenAPI).
  - `instructions/` (O "código fonte" dos prompts dos agentes).
  - `knowledge/` (Os arquivos reais alimentados no RAG).

*Nota: Os guias de como usar a IBM Cloud que estavam aqui foram movidos para `docs/hackathon-info/guias-ibm/` para manter esta pasta puramente conceitual sobre onde encontrar o código.*
