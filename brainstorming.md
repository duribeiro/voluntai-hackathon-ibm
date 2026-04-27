# 🧠 Brainstorming — VoluntAI

> Sessão de visão e brainstorming (2026-04-24)
> Antes da arquitetura — mapeando problema, solução e decisões

---

## 🔑 Palavras-chave do Edital

- **IA agentic** — baseada em agentes, não automação dura
- **Inteligência Artificial + automação** — são DUAS coisas
- **watsonx Orchestrate como núcleo de coordenação**
- **Sistema** — pode ser web app, plataforma, app
- **Ativos:** habilidades humanas, necessidades institucionais, fluxos de atuação voluntária
- **Conectar** voluntários e instituições de forma dinâmica e orquestrada
- **Orquestrar fluxos de ações, comunicação e acompanhamento**

---

## 🔴 Problema (confirmado 1:1 com o edital e com Research)

1. Voluntários não sabem como suas habilidades podem ser melhor utilizadas
2. Instituições têm dificuldade em mapear, filtrar e coordenar voluntários
3. Falta de priorização, redundância de esforços, comunicação fragmentada
4. Pouca utilização de dados e IA para tomada de decisão rápida e escalável
5. Resultado: desperdício de potencial humano, atrasos em respostas críticas
6. **[NOVO] Reatividade das soluções atuais:** plataformas dependem de preenchimento manual de formulários, o que é inútil quando a instituição está sem internet/ilhada
7. **[NOVO] Falta de visão preditiva:** necessidades escalam para tragédias sem intervenção precoce

---

## 🎯 Solução Desejada (atualizada pós-revisão)

- **Plataforma inteligente** de voluntariado skill-based e Logística de Crises
- **Limitação de Escopo Clara:** Não substitui serviços de resgate imediato (ex: 190/193), mas orquestra a logística do voluntariado em crises de média/alta escala.
- **Detecção Multicanal (Proativa + Reativa):**
  1. Cadastro direto de demandas pelas Instituições/ONGs
  2. Alertas via APIs Governamentais Abertas (INMET, Cemaden, GDACS)
  3. Social Listening via API do X (buscas ativas via RapidAPI por hashtags/palavras-chave da crise)
- **Validação por Inteligência Coletiva/Agrupamento:** IA detecta se múltiplos sinais (ex: 15 tweets e 1 alerta de API governamental) confirmam o mesmo evento, priorizando-o automaticamente sem depender de aprovação de gargalo humano.
- Orquestração de fluxos, cruzando os alertas validados com a base de voluntários (habilidade + proximidade) e gerando chamados direcionados.

---

## 💡 Decisões e Intuições

### O que a PoC precisa ter
- **Cadastro** — de voluntários e instituições (pré-requisito)
- **Backend com API** — pra o agente se conectar e automatizar
- **Web app** — interface pra acompanhar comunicação e notificações
- **Notificações** — dentro do app funciona melhor que WhatsApp/email (não depende de integração)
- **GitHub público** — entrega exige link do repositório

### Tipo de solução
- Não é automação dura (n8n/Zapier) — é **agentic**
- Agente precisa **entender** intenção e **decidir**
- Modelo mental: **CRM + matching engine**, não rede social

### Matching (lógica central)
- Skill-based (habilidade × necessidade)
- Proximity-based (localização × local da crise)
- Urgency-weighted (risco de vida > logística > doação)
- IA recomenda, humano confirma (não é Tinder onde só o humano escolhe)

### Habilidades que importam em crise
- 🏥 Saúde: enfermeiro, médico, socorrista, psicólogo
- 🚛 Logística: motorista (CNH), piloto de barco, operador de maquinário
- 🔧 Apoio: cozinheiro, eletricista, pedreiro, encanador
- 💻 Tech: programador, operador de rádio/drone
- 🤝 Social: tradutor/libras, assistente social, organizador

### Instituições válidas
ONGs, Defesa Civil, igrejas, prefeituras, hospitais

### Cenários
- **Desastre:** enchente, deslizamento, incêndio, secas
- **Emergência:** prédio caiu, acidente químico, desabamento
- **Vulnerabilidade social:** Cracolândia, fome em periferias, refugiados, população de rua

---

## ❓ Perguntas Abertas

1. O que é considerado uma PoC? Dados reais ou mockados?
2. Precisa de backend com API?
3. Web app ou interface do agente como front?
4. Quantos agentes são necessários? (edital não especifica mínimo/máximo)
5. Como o agente se conecta ao backend? (custom tool via JSON)
6. Notificações: dentro do app, email, WhatsApp?

---

_Registrado em — 2026-04-24_