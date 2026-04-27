# 📋 Levantamento de Requisitos — VoluntAI

> Plataforma Inteligente de Voluntariado para Situações de Crise
> Participante: Eduardo Ribeiro
> Data: 2026-04-24

---

## 1. Definição do Sistema

### 1.1 Nome do Sistema
VoluntAI — Plataforma Inteligente de Voluntariado para Situações de Crise

### 1.2 Breve Descrição
O VoluntAI é uma plataforma web inteligente de logística voluntária em crises. Conecta voluntários, instituições, doadores/investidores e sinais públicos de crise para priorizar necessidades, recomendar contribuições e orquestrar ações com IA agentic via IBM watsonx Orchestrate.

### 1.3 Contextualização do Propósito
Em situações de desastres naturais, crises humanitárias ou ações sociais contínuas, existe uma desconexão significativa entre pessoas que desejam ajudar e instituições que precisam de apoio organizado. Voluntários não sabem como suas habilidades podem ser melhor utilizadas, instituições têm dificuldade em mapear e coordenar voluntários, e em cenários de emergência há falta de priorização, redundância de esforços e comunicação fragmentada. Esses problemas resultam em desperdício de potencial humano, atrasos em respostas críticas e redução do impacto social das ações voluntárias.

Diante desse cenário, propõe-se o desenvolvimento de uma plataforma que centralize o cadastro de voluntários e instituições, consuma sinais externos de crise, utilize IA para recomendar as melhores formas de contribuição e orquestre fluxos de ação, comunicação e acompanhamento via IBM watsonx Orchestrate. A solução não substitui serviços oficiais de emergência/resgate; seu escopo é logística, priorização e coordenação de voluntariado e recursos.

### 1.4 Público-alvo
- **Voluntários:** pessoas dispostas a contribuir com suas habilidades em cenários de crise
- **Instituições:** ONGs, Defesa Civil, igrejas, prefeituras, hospitais — organizações que precisam de voluntários organizados
- **Doador/Investidor:** pessoa física ou empresa que precisa de visão consolidada para direcionar dinheiro, alimentos, equipamentos ou maquinário onde há maior urgência

---

## 2. Levantamento de Requisitos

### 2.1 Técnicas Utilizadas
- Brainstorming com o stakeholder principal (Eduardo Ribeiro)
- Análise do edital e tema oficial do Hackathon UNASP + IBM 2026
- Research profundo de dados reais (enchentes RS 2024, desastres Brasil, plataformas existentes)
- Confronto do mapeamento de problema/solução com os requisitos do edital

### 2.2 Registro do Processo de Elicitação
O processo foi conduzido por Eduardo Ribeiro, com apoio de ferramentas de IA para pesquisa, organização e documentação. Inicialmente, o problema e a solução foram mapeados com base no research compilado. Em seguida, Eduardo revisou o edital e o tema do hackathon, identificando palavras-chave e intuições sobre o tipo de sistema esperado. O confronto entre o mapeamento inicial e o edital confirmou alinhamento 1:1. Eduardo trouxe decisões importantes: a PoC precisa de cadastro real, backend com API, web app, agentes IBM para orquestração, fontes externas de dados e painel para doador/investidor. A partir dessas decisões, os requisitos foram detalhados.

### 2.3 Justificativa da Escolha das Técnicas
O brainstorming foi utilizado por ser a técnica mais adequada para um projeto de hackathon com escopo pequeno e prazo curto, permitindo captar visão, intuições e decisões rapidamente. A análise do edital garante que os requisitos atendem ao que é avaliado. O research de dados reais fundamenta o problema e evita desconexão com a realidade.

---

## 3. Situação-Problema

Em situações de desastres naturais (enchentes RS 2024, Brumadinho, Petrópolis, São Sebastião), crises humanitárias ou ações sociais contínuas, existe uma desconexão significativa entre pessoas que desejam ajudar e instituições que precisam de apoio organizado.

Entre os principais problemas identificados estão:

- Voluntários frequentemente não sabem como suas habilidades podem ser melhor utilizadas
- Instituições têm dificuldade em mapear, filtrar e coordenar voluntários de forma eficiente
- Em cenários de emergência, há falta de priorização, redundância de esforços e comunicação fragmentada
- Pouca utilização de dados e IA para tomada de decisão rápida e escalável
- Dependência excessiva de cadastro manual por instituições, tornando muitas soluções reativas
- Falta de cruzamento entre alertas oficiais, sinais sociais e necessidades cadastradas
- Desperdício de potencial humano, atrasos em respostas críticas e redução do impacto social

A necessidade do projeto surge da busca por uma solução tecnológica que centralize voluntários, instituições e doadores, consuma sinais públicos de crise, utilize IA para matching inteligente e orquestre fluxos de ação, comunicação e alocação de recursos, sem eliminar a dimensão humana e solidária do voluntariado.

---

## 4. Requisitos do Sistema

### 4.1 Requisitos Funcionais

**RF01** — O sistema deve permitir cadastrar voluntários.
**RF02** — O sistema deve permitir cadastrar instituições.
**RF03** — O sistema deve permitir cadastrar necessidades.
**RF04** — O sistema deve permitir editar e visualizar cadastros existentes.
**RF05** — O sistema deve permitir listar voluntários com filtros.
**RF06** — O sistema deve permitir listar necessidades com filtros.
**RF07** — O sistema deve realizar matching automático entre voluntários e necessidades.
**RF08** — O sistema deve recomendar necessidades compatíveis ao voluntário.
**RF09** — O sistema deve classificar a urgência das necessidades por IA.
**RF10** — O sistema deve orquestrar fluxos coordenados quando uma necessidade crítica é cadastrada ou validada pelo Radar.
**RF11** — O sistema deve notificar voluntários compatíveis quando nova necessidade é cadastrada.
**RF12** — O sistema deve notificar instituições quando voluntários são alocados.
**RF13** — O sistema deve gerar comunicação em linguagem natural humana e empática.
**RF14** — O sistema deve manter histórico de notificações visível no painel.
**RF15** — O sistema deve exibir painel de doador/investidor com visão consolidada.
**RF16** — O sistema deve destacar necessidades críticas sem voluntários ou recursos alocados.
**RF17** — O sistema deve gerar relatório resumo de status geral.
**RF18** — O sistema deve capturar alertas externos de APIs públicas e X/Twitter.
**RF19** — O sistema deve agrupar e validar automaticamente sinais externos por IA.
**RF20** — O sistema deve transformar alertas validados em necessidades acionáveis.
**RF21** — O sistema deve notificar instituições próximas quando o Radar detectar uma necessidade externa.

### 4.2 Requisitos Não Funcionais

**RNF01** — O sistema deve ser responsivo (desktop e mobile).
**RNF02** — Interface e agentes devem responder em até 2 segundos nas operações principais.
**RNF03** — O sistema deve garantir 99% de uptime durante avaliação.
**RNF04** — O sistema deve proteger dados sensíveis.
**RNF05** — O sistema deve suportar expansão além dados mockados.
**RNF06** — O sistema deve ter interface em português brasileiro.
**RNF07** — O sistema deve ter repositório GitHub público com documentação.
**RNF08** — O sistema deve utilizar IBM watsonx Orchestrate como núcleo de coordenação.
**RNF09** — O sistema deve ter deploy automatizado (frontend e backend em cloud gratuita).
**RNF10** — O sistema deve manter rastreabilidade das fontes externas consultadas.

---

## 5. Negociação de Requisitos

Durante o levantamento, foram identificadas tensões entre escopo ideal e viabilidade de PoC:

- **Cadastro completo vs. dados mockados:** O sistema precisa de cadastro funcional, mas para a PoC os dados iniciais serão mockados (20 voluntários, 20 instituições, 8-12 necessidades). O cadastro via interface e via agente deve funcionar, mas o seed inicial é mockado.
- **Notificação por WhatsApp vs. notificação in-app:** WhatsApp seria ideal para alcance real, mas requer integração complexa. Para a PoC, notificações in-app são suficientes. A arquitetura deve permitir adicionar WhatsApp depois.
- **Agentes para front/back vs. código tradicional:** Agentes IBM são para decisão e comunicação. Frontend e backend são código tradicional. Não agregar agentes para infra — é over-engineering.
- **Matching avançado vs. matching básico:** O matching ideal usaria embeddings e ML. Para a PoC, matching por categorias de habilidade + localização + urgência é suficiente e demonstrável.
- **Resgate emergencial vs. logística de crise:** O sistema não substitui 190/193 nem despacho oficial de resgate. O escopo é apoiar logística, priorização, voluntariado e doações a partir de dados e agentes IBM.
- **Fontes reais vs. estabilidade da demo:** A arquitetura prevê X/Twitter via RapidAPI e APIs públicas/governamentais como fontes-alvo. Para a PoC, essas entradas podem ser simuladas com payloads mockados representando formatos reais, garantindo estabilidade da demonstração sem descaracterizar a solução.

---

## 6. Especificação Detalhada dos Requisitos

### 6.1 Requisitos Funcionais

#### 6.1.1 Requisito: RF01
**Nome:** Cadastro de voluntários
**Descrição:** O sistema deve permitir o cadastro de voluntários, contemplando dados pessoais, habilidades, disponibilidade e localização.
**Objetivo:** Criar a base de voluntários disponíveis para matching com necessidades institucionais ou necessidades detectadas por sinais externos.
**Entradas:**
- Nome completo
- CPF
- Telefone/WhatsApp
- Cidade/UF
- Habilidades (seleção múltipla: saúde, logística, apoio, tech, social — com subcategorias)
- Disponibilidade (integral/parcial/fim de semana)
- Tipo de CNH (se aplicável)
**Processamento:** O sistema valida campos obrigatórios, evita duplicidade pelo CPF, registra os dados e armazena o perfil do voluntário para consultas e matching.
**Saídas:** Cadastro salvo no sistema, voluntário disponível para matching.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será considerado atendido quando for possível cadastrar um voluntário com todos os campos, salvar e recuperar o cadastro posteriormente.

---

#### 6.1.2 Requisito: RF02
**Nome:** Cadastro de instituições
**Descrição:** O sistema deve permitir o cadastro de instituições que necessitam de voluntários.
**Objetivo:** Registrar organizações que podem criar necessidades de voluntariado ou serem acionadas diante de necessidades detectadas por sinais externos.
**Entradas:**
- Nome da instituição
- Tipo (ONG/Defesa Civil/igreja/prefeitura/hospital/outro)
- Cidade/UF
- CNPJ
- Telefone/WhatsApp
- Nome do responsável
**Processamento:** O sistema valida campos obrigatórios e registra a instituição.
**Saídas:** Cadastro salvo, instituição disponível para criar necessidades.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando for possível cadastrar uma instituição com todos os campos e recuperá-la posteriormente.

---

#### 6.1.3 Requisito: RF03
**Nome:** Cadastro de necessidades
**Descrição:** O sistema deve permitir que instituições cadastrem necessidades de voluntários, descrevendo o que precisam, com que urgência e onde.
**Objetivo:** Registrar as demandas institucionais que serão combinadas com perfis de voluntários.
**Entradas:**
- Título da necessidade
- Descrição detalhada
- Instituição de origem (selecionar do cadastro)
- Tipo de habilidade necessária (seleção)
- Quantidade de voluntários necessários
- Nível de urgência (crítica/alta/média/baixa)
- Local (cidade/UF ou endereço)
- Data/hora
**Processamento:** O sistema registra a necessidade, aciona o MatchAgent para identificar voluntários compatíveis e, se urgência for crítica, dispara o fluxo de orquestração (notificação imediata).
**Saídas:** Necessidade salva, matches identificados, notificações disparadas (se urgente).
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando uma instituição puder cadastrar uma necessidade e o sistema identificar automaticamente voluntários compatíveis.

---

#### 6.1.4 Requisito: RF04
**Nome:** Edição e visualização de cadastros
**Descrição:** O sistema deve permitir editar e visualizar cadastros existentes de voluntários, instituições e necessidades.
**Objetivo:** Manter os dados atualizados e permitir consulta.
**Entradas:** ID ou filtro para localizar o cadastro, campos atualizados.
**Processamento:** O sistema localiza o registro, aplica alterações e salva.
**Saídas:** Cadastro atualizado.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando for possível visualizar e editar qualquer cadastro existente.

---

#### 6.1.5 Requisito: RF05
**Nome:** Listagem de voluntários com filtros
**Descrição:** O sistema deve permitir listar voluntários aplicando filtros por habilidade, cidade e disponibilidade.
**Objetivo:** Facilitar a busca e seleção de voluntários.
**Entradas:** Filtros selecionados (habilidade, cidade, disponibilidade).
**Processamento:** O sistema consulta a base filtrando pelos critérios selecionados.
**Saídas:** Lista de voluntários que atendem aos filtros.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando for possível filtrar voluntários e obter resultados relevantes.

---

#### 6.1.6 Requisito: RF06
**Nome:** Listagem de necessidades com filtros
**Descrição:** O sistema deve permitir listar necessidades aplicando filtros por urgência, cidade, tipo de habilidade e status.
**Objetivo:** Facilitar a visualização de demandas e priorização.
**Entradas:** Filtros selecionados (urgência, cidade, habilidade, status).
**Processamento:** O sistema consulta a base filtrando pelos critérios.
**Saídas:** Lista de necessidades filtradas.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando for possível filtrar necessidades e obter resultados relevantes.

---

#### 6.1.7 Requisito: RF07
**Nome:** Matching automático
**Descrição:** O sistema deve identificar voluntários compatíveis quando uma necessidade for cadastrada ou detectada por sinais externos, cruzando habilidade + localização + disponibilidade.
**Objetivo:** Automatizar a conexão entre quem precisa e quem pode ajudar.
**Entradas:** Dados da necessidade cadastrada ou detectada por sinais externos, base de voluntários.
**Processamento:** O sistema cruza o tipo de habilidade necessária com as habilidades dos voluntários, filtra por proximidade geográfica (cidade/UF) e disponibilidade, e retorna os voluntários mais compatíveis.
**Saídas:** Lista de voluntários compatíveis ordenados por relevância.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando uma necessidade cadastrada ou detectada por sinais externos retornar voluntários com habilidades, localização e disponibilidade compatíveis.

---

#### 6.1.8 Requisito: RF08
**Nome:** Recomendação ao voluntário
**Descrição:** O sistema deve sugerir ao voluntário as melhores necessidades compatíveis com seu perfil.
**Objetivo:** Mostrar ao voluntário onde ele é mais útil.
**Entradas:** Perfil do voluntário (habilidades, localização, disponibilidade), base de necessidades.
**Processamento:** O sistema cruza o perfil do voluntário com necessidades abertas e retorna as 3 melhores opções, priorizando por urgência e proximidade.
**Saídas:** Top 3 necessidades recomendadas com justificativa.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando o voluntário visualizar recomendações relevantes baseadas em seu perfil.

---

#### 6.1.9 Requisito: RF09
**Nome:** Classificação de urgência por IA
**Descrição:** O agente de IA deve analisar a descrição da necessidade e sugerir/propor o nível de urgência.
**Objetivo:** Garantir que a priorização não dependa apenas do critério humano, mas tenha validação inteligente.
**Entradas:** Descrição textual da necessidade.
**Processamento:** O agente de IA analisa o texto e classifica a urgência com base em palavras-chave, contexto e gravidade (ex: "risco de vida" → crítica, "logística" → média).
**Saídas:** Nível de urgência sugerido (crítica/alta/média/baixa) com justificativa.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando o agente sugerir corretamente a urgência com base na descrição textual.

---

#### 6.1.10 Requisito: RF10
**Nome:** Orquestração de fluxos via IBM watsonx
**Descrição:** Quando uma necessidade crítica for cadastrada ou detectada por sinais externos, o sistema deve disparar automaticamente fluxo coordenado: buscar voluntários compatíveis, notificar e acompanhar.
**Objetivo:** Garantir resposta rápida a necessidades urgentes sem depender de um coordenador humano como gargalo operacional.
**Entradas:** Necessidade com urgência "crítica" cadastrada por instituição ou detectada por sinais externos.
**Processamento:** O IBM watsonx Orchestrate atua como núcleo coordenador, aciona o MatchAgent para buscar voluntários compatíveis e, em paralelo, aciona o NotifyAgent para comunicar os voluntários identificados.
**Saídas:** Voluntários notificados, necessidade em status "em acompanhamento".
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando uma necessidade crítica, cadastrada ou validada por dados externos, disparar matching e notificação automaticamente.

---

#### 6.1.11 Requisito: RF11
**Nome:** Notificação de voluntário compatível
**Descrição:** O sistema deve notificar voluntários compatíveis quando uma nova necessidade é cadastrada.
**Objetivo:** Informar voluntários relevantes sobre oportunidades de contribuição.
**Entradas:** Resultado do matching (voluntários compatíveis + necessidade).
**Processamento:** O sistema gera notificação personalizada para cada voluntário compatível e entrega via painel in-app.
**Saídas:** Notificação exibida no painel do voluntário.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando o voluntário receber notificação in-app sobre necessidade compatível.

---

#### 6.1.12 Requisito: RF12
**Nome:** Notificação de alocação à instituição
**Descrição:** O sistema deve notificar a instituição quando voluntários são alocados às suas necessidades.
**Objetivo:** Manter a instituição informada sobre o recebimento de voluntários.
**Entradas:** Confirmação de alocação de voluntário.
**Processamento:** O sistema gera notificação para a instituição com dados do voluntário alocado.
**Saídas:** Notificação exibida no painel da instituição.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando a instituição receber notificação ao receber voluntário alocado.

---

#### 6.1.13 Requisito: RF13
**Nome:** Comunicação empática em linguagem natural
**Descrição:** O NotifyAgent deve se comunicar em linguagem natural humana, contextualizada e empática, não genérica.
**Objetivo:** Garantir que as mensagens geradas pela IA sejam humanas, não robóticas.
**Entradas:** Contexto da notificação (tipo, voluntário, necessidade, urgência).
**Processamento:** O agente gera mensagem personalizada considerando o contexto, o perfil do destinatário e o tom adequado (solidário em crises, informativo em rotina).
**Saídas:** Mensagem textual empática e contextualizada.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando as notificações geradas forem contextualizadas, empáticas e diferenciadas por cenário.

---

#### 6.1.14 Requisito: RF14
**Nome:** Histórico de notificações
**Descrição:** O sistema deve manter histórico de notificações visível no painel do usuário.
**Objetivo:** Permitir que voluntários, instituições e doadores/investidores consultem notificações anteriores.
**Entradas:** Consulta do histórico.
**Processamento:** O sistema lista notificações recebidas ordenadas por data.
**Saídas:** Lista de notificações com data, tipo e conteúdo.
**Prioridade:** Baixa
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando o usuário puder visualizar histórico completo de notificações recebidas.

---

#### 6.1.15 Requisito: RF15
**Nome:** Painel do Doador/Investidor
**Descrição:** O sistema deve exibir painel com visão consolidada de necessidades abertas, alertas validados, gargalos e recursos demandados.
**Objetivo:** Dar ao doador/investidor visibilidade para decidir onde direcionar dinheiro, alimentos, equipamentos ou maquinário.
**Entradas:** Dados agregados de voluntários, instituições, necessidades, alertas externos e alocações.
**Processamento:** O sistema consolida dados e apresenta resumo visual/heatmap.
**Saídas:** Painel com totais, distribuição por status, gargalos, urgências e mapa de calor.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando o doador/investidor visualizar painel com dados consolidados em tempo real.

---

#### 6.1.16 Requisito: RF16
**Nome:** Alerta de gargalo
**Descrição:** Necessidades críticas sem voluntários ou recursos alocados devem ser destacadas visualmente.
**Objetivo:** Chamar atenção para demandas urgentes sem cobertura operacional ou material.
**Entradas:** Necessidades com urgência crítica e zero alocações de voluntários/recursos.
**Processamento:** O sistema identifica necessidades críticas sem cobertura e as destaca com indicador visual (badge, cor, ícone).
**Saídas:** Destaque visual no painel do doador/investidor e na visão operacional.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando necessidades críticas sem cobertura forem visualmente distintas no painel.

---

#### 6.1.17 Requisito: RF17
**Nome:** Relatório resumo
**Descrição:** O sistema deve gerar relatório com voluntários totais, necessidades abertas, matches realizados, alertas externos processados e necessidades críticas pendentes.
**Objetivo:** Fornecer métricas de impacto para apresentação, acompanhamento e prestação de contas.
**Entradas:** Dados agregados do sistema.
**Processamento:** O sistema calcula totais e apresenta em formato resumo.
**Saídas:** Relatório com métricas-chave.
**Prioridade:** Baixa
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando o doador/investidor ou avaliador visualizar relatório com métricas de operação e impacto.

---

#### 6.1.18 Requisito: RF18
**Nome:** Captura de alertas externos
**Descrição:** O sistema deve capturar alertas vindos de APIs públicas/governamentais e do X/Twitter via RapidAPI.
**Objetivo:** Reduzir reatividade do sistema, permitindo que sinais externos alimentem a operação antes ou além do cadastro manual das instituições.
**Entradas:** Payloads/textos vindos de fontes externas (ex: Inmet, Cemaden, GDACS, X/Twitter).
**Processamento:** O RadarAgent ou backend registra o alerta bruto com fonte, horário, texto e localização estimada.
**Saídas:** Alerta externo armazenado na tabela `external_alerts`.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Research do Hackathon
**Critério de aceitação:** O requisito será atendido quando o sistema registrar alertas externos com fonte e conteúdo rastreável.

---

#### 6.1.19 Requisito: RF19
**Nome:** Agrupamento e validação automática por IA
**Descrição:** O sistema deve agrupar múltiplos sinais externos semelhantes e validar automaticamente possíveis necessidades por proximidade, evento e volume de menções.
**Objetivo:** Usar inteligência coletiva baseada em dados para reduzir falso positivo e priorizar eventos relevantes sem depender de aprovação humana centralizada.
**Entradas:** Alertas externos brutos, localização, tipo de evento, volume de menções e dados oficiais disponíveis.
**Processamento:** O RadarAgent identifica clusters de alertas similares, classifica urgência e decide se o conjunto representa uma necessidade acionável.
**Saídas:** Cluster validado ou descartado, com justificativa de IA.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Research do Hackathon
**Critério de aceitação:** O requisito será atendido quando múltiplos alertas relacionados forem agrupados e classificados com justificativa.

---

#### 6.1.20 Requisito: RF20
**Nome:** Conversão de alerta validado em necessidade acionável
**Descrição:** O sistema deve transformar alertas validados pelo RadarAgent em necessidades operacionais para matching e mobilização.
**Objetivo:** Permitir que demandas surjam também de dados externos, não apenas de formulários preenchidos por instituições.
**Entradas:** Cluster validado pelo RadarAgent.
**Processamento:** O sistema cria uma necessidade com título, descrição, local, urgência, tipo de habilidade/recurso e status inicial.
**Saídas:** Nova necessidade acionável no fluxo de matching.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Research do Hackathon
**Critério de aceitação:** O requisito será atendido quando um alerta validado gerar automaticamente uma necessidade disponível para matching.

---

#### 6.1.21 Requisito: RF21
**Nome:** Notificação de instituições próximas por alerta externo
**Descrição:** O sistema deve identificar instituições cadastradas próximas a uma necessidade detectada pelo RadarAgent e notificá-las para ciência, apoio ou tomada de responsabilidade operacional.
**Objetivo:** Permitir que instituições locais sejam acionadas quando a necessidade não nasce de um cadastro manual, mas de sinais externos validados.
**Entradas:** Necessidade validada pelo RadarAgent, localização e base de instituições cadastradas.
**Processamento:** O sistema cruza localização/tipo de crise com instituições próximas e gera notificação contextualizada.
**Saídas:** Instituições próximas notificadas sobre a necessidade externa.
**Prioridade:** Média
**Fonte:** Eduardo Ribeiro / Refinamento de escopo
**Critério de aceitação:** O requisito será atendido quando uma necessidade criada pelo RadarAgent notificar ao menos uma instituição compatível/próxima, quando houver instituição cadastrada na região.

---

### 6.2 Requisitos Não Funcionais

#### 6.2.1 Requisito: RNF01
**Nome:** Responsividade
**Descrição:** O sistema deve funcionar adequadamente em desktop e smartphones.
**Objetivo:** Garantir uso em qualquer dispositivo, especialmente mobile (voluntários em campo).
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando as principais telas forem utilizáveis em smartphone sem rolagem horizontal ou sobreposição.

---

#### 6.2.2 Requisito: RNF02
**Nome:** Performance
**Descrição:** A interface e os agentes devem responder em até 2 segundos nas operações principais. Operações pesadas de coleta externa, consulta a APIs, clusterização e processamento do Radar devem ocorrer em backend/background, sem bloquear a experiência principal.
**Objetivo:** Garantir experiência fluida, especialmente em cenários de urgência, sem depender da latência de APIs externas.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando as principais respostas da interface/agente ocorrerem em até 2 segundos e processos externos rodarem sem travar o fluxo do usuário.

---

#### 6.2.3 Requisito: RNF03
**Nome:** Disponibilidade
**Descrição:** O sistema deve manter 99% de uptime durante o período de avaliação.
**Objetivo:** Garantir que a demo funcione quando avaliadores acessarem.
**Prioridade:** Média
**Fonte:** Infraestrutura
**Critério de aceitação:** O requisito será atendido quando o sistema estiver acessível durante todo o período de avaliação do hackathon.

---

#### 6.2.4 Requisito: RNF04
**Nome:** Segurança de dados
**Descrição:** Dados sensíveis (CPF, telefone/WhatsApp, CNPJ e contatos institucionais) não devem ser expostos publicamente na interface.
**Objetivo:** Proteger informações pessoais dos voluntários, instituições e doadores/investidores.
**Prioridade:** Média
**Fonte:** Boas práticas
**Critério de aceitação:** O requisito será atendido quando dados sensíveis não forem visíveis para usuários não autorizados.

---

#### 6.2.5 Requisito: RNF05
**Nome:** Escalabilidade
**Descrição:** A arquitetura deve suportar expansão além dos dados mockados iniciais.
**Objetivo:** Permitir que o sistema evolua de PoC para produto real sem reescrita.
**Prioridade:** Baixa
**Fonte:** Visão de futuro
**Critério de aceitação:** O requisito será atendido quando a arquitetura não impedir a adição de novos dados, integrações ou funcionalidades.

---

#### 6.2.6 Requisito: RNF06
**Nome:** Idioma
**Descrição:** A interface deve ser em português brasileiro.
**Objetivo:** Atender ao público-alvo brasileiro.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Edital
**Critério de aceitação:** O requisito será atendido quando toda a interface estiver em pt-BR.

---

#### 6.2.7 Requisito: RNF07
**Nome:** Código público e documentado
**Descrição:** O repositório GitHub deve ser público com README claro, instruções de setup e documentação da arquitetura.
**Objetivo:** Atender ao requisito de entrega do hackathon (link do repositório).
**Prioridade:** Alta
**Fonte:** Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando o repositório tiver README com instruções completas de instalação e execução.

---

#### 6.2.8 Requisito: RNF08
**Nome:** Integração IBM watsonx Orchestrate
**Descrição:** O watsonx Orchestrate deve ser o núcleo obrigatório de coordenação do sistema, assumindo a orquestração operacional via agentes, sem coordenador humano como requisito central. O Orchestrator deve atuar como Single Point of Contact (SPOC). O usuário final nunca interage diretamente com os agentes especialistas (RegistryAgent, MatchAgent, etc.), mas sempre com o Orchestrator principal, que centraliza o atendimento e delega as tarefas em background.
**Objetivo:** Atender ao requisito obrigatório do edital e demonstrar IA agentic como coordenadora real do fluxo.
**Prioridade:** Alta
**Fonte:** Edital do Hackathon
**Critério de aceitação:** O requisito será atendido quando os agentes do watsonx Orchestrate estiverem orquestrando os fluxos de cadastro, radar, matching e notificação.

---

#### 6.2.9 Requisito: RNF09
**Nome:** Deploy automatizado
**Descrição:** Frontend em Vercel, backend em Supabase, ambos com deploy automatizado.
**Objetivo:** Garantir que o sistema esteja acessível via URL pública sem configuração manual.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro
**Critério de aceitação:** O requisito será atendido quando o sistema estiver acessível via URL pública após push no repositório.

---

#### 6.2.10 Requisito: RNF10
**Nome:** Rastreabilidade das fontes externas
**Descrição:** Todo alerta externo deve preservar fonte, horário de captura, texto/payload original e classificação gerada pela IA.
**Objetivo:** Garantir auditabilidade e transparência dos dados usados pelo Agente Radar.
**Prioridade:** Alta
**Fonte:** Eduardo Ribeiro / Boas práticas de dados
**Critério de aceitação:** O requisito será atendido quando alertas externos puderem ser auditados desde a origem até a necessidade criada.

---

## 7. Validação — Checklist de Requisitos

| Requisito | Claro | Completo | Consistente | Testável | Viável | Necessário | Rastreável |
|-----------|-------|----------|-------------|----------|--------|------------|------------|
| RF01 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF02 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF03 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF04 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF05 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF06 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF07 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF08 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF09 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF10 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF11 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF12 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF13 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF14 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF15 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF16 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF17 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF18 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF19 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF20 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RF21 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF01 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF02 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF03 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF04 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF05 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF06 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF07 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF08 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF09 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| RNF10 | Sim | Sim | Sim | Sim | Sim | Sim | Sim |

Todos os requisitos atendem aos critérios de qualidade e validação.

---

_Etapa 1 — Levantamento e Validação de Requisitos completo — 2026-04-24_