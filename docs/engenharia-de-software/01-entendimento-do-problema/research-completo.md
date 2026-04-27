# 🔭 Research Completo — Hackathon UNASP + IBM 2026
## "Orquestrando o Voluntariado Inteligente para Situações de Crise"

> Compilado por Kairos | 2026-04-24

---

## 📋 Resumo Executivo Geral

O Brasil vive um ciclo de desastres crescente (1.161 ocorrências em 2023, recorde do Cemaden). Em cada crise, a resposta voluntária é massiva mas descoordenada — tecnologias emergem ad-hoc, funcionam parcialmente, e morrem quando a crise passa. O gap central não é falta de voluntários, é **falta de orquestração inteligente** entre quem precisa de ajuda, quem pode ajudar, e quem coordena.

---

## 1. 🌊 Enchentes no Rio Grande do Sul (2024)

### Resumo Executivo
Maior catástrofe climática da história do RS. A resposta voluntária foi heróica mas expôs falhas crônicas de coordenação. Apps surgiram em horas, salvaram milhares, mas operaram em ilhas.

### Dados Concretos
- **184 mortes** confirmadas (25 desaparecidos até 04/2025)
- **2,4 milhões de pessoas** afetadas em **478 municípios** (96% do estado)
- **442 mil desalojados** (18 mil em abrigos, 423 mil desalojados)
- **Prejuízo: R$ 4,6 bilhões** (CNM) + R$ 97 bilhões de impacto nacional (CNC)
- **640 mil residências** sem água, **440 mil** sem energia
- Guaíba atingiu **5,37m** (recorde histórico, superando 1941)
- Chuva: **500-700mm** em dias (1/3 da média anual)
- **14 trilhões de litros** de água despejados no Guaíba (quase metade de Itaipu)

### O que Funcionou ✅ (Green Flags)
1. **Salva RS** — Web app criado em <24h por professores da UniRitter. Duas interfaces: "Preciso de Resgate" + "Consigo Resgatar". Geolocalização + rotas em tempo real. **Resultado: colaborou no resgate de 12.220 pessoas**. Sistema de verificação para eliminar pedidos duplicados.
2. **Abrigos RS** — Criado por coletivo de 100+ profissionais no Tecnopuc. Gestão de abrigos, conectou órgãos públicos com voluntários.
3. **Apoio Enchentes RS** — Baseado no app "Adote o Amanhã" (adoção), adaptado para conectar doadores a abrigos.
4. **AjudeRS** (ajuders.com.br) — 200+ especialistas em tech criaram app com IA para simplificar e agilizar conexão ajuda↔necessidade.
5. **Solidariedade RS** — Plataforma oficial do governo (startup WideLabs, gratuito), integrada ao SOS Enchentes. Abrigos cadastram demandas, doadores visualizam. Checagem prévia de instituições.
6. **SOS Enchentes** (Procergs/governo) — Portal central: alertas Defesa Civil, estradas, abrigos, voluntários, nível das águas.
7. **Corrente humana de Mathias Velho** (Canoas) — Voluntários formaram cordão para puxar barcos e resgatar ilhados. Organização orgânica, sem tecnologia.
8. **Cadastro de voluntários do governo** — Estado criou cadastro oficial de profissionais (médicos, etc.) para atuação em regiões afetadas.
9. **Resgate animal** — Centro em Canoas abrigou 600+ cães. Resgate do cavalo Caramelo virou símbolo.

### O que Falhou ❌ (Red Flags)
1. **Comunicação fragmentada** — Pedidos de socorro espalhados em dezenas de grupos de WhatsApp, sem centralização inicial.
2. **Redundância de esforços** — Múltiplos apps criados paralelamente (Salva RS, Abrigos RS, AjudeRS, Solidariedade RS), competindo pela mesma atenção em vez de interoperar desde o início.
3. **Desconexão com o poder público** — Apps voluntários surgiram independentes; integração com Defesa Civil e Bombeiros veio depois, não foi projetada.
4. **Internet precária** — 220 dos 497 municípios com problemas de conectividade (Anatel). Apps web-dependent falharam onde mais se precisava.
5. **Falta de qualificação de voluntários** — Pessoas sem treinamento arriscaram a vida em resgates. Sem triagem de habilidades.
6. **Dados duplicados** — Salva RS teve que criar sistema ad-hoc para eliminar pedidos duplicados. Nenhum sistema unificado de verificação.
7. **Sustentabilidade pós-crise** — Plataformas criadas na emergência sem plano de manutenção. Maioria saiu do ar ou ficou obsoleta.
8. **Alertas meteorológicos ignorados** — Defesa Civil emitiu avisos, mas a população não respondeu proporcionalmente. Falha na comunicação de risco.

### Gap de Oportunidade 🎯
Nenhuma plataforma integrou **triagem inteligente de voluntários + geolocalização de demandas + orquestração automatizada de fluxos**. Os apps eram "listas com mapa". Faltou um **orchestrator** que: (1) classificasse pedidos por urgência, (2) match-easse voluntários por habilidade/proximidade, (3) coordenasse comunicação em tempo real, (4) operasse offline/low-bandwidth.

---

## 2. 🏚️ Desastres no Brasil (Últimos 5 Anos)

### Brumadinho (2019)
- **270 mortes** (maior acidente de trabalho do Brasil em perdas de vida)
- Rompimento de barragem da Vale, classificada como "baixo risco"
- 7 anos depois: vítimas ainda excluídas dos acordos, leis pouco mudaram
- **Falha central:** falta de visão sistêmica e multidisciplinar para prevenção. Coordenação entre entes governamentais não se concretizou.
- **Lições:** políticas falharam na execução, não na inexistência. Comunicação multissetorial precisa ser contínua, dinâmica, humanizada e personalizada por contexto.

### Petrópolis (2022)
- Maior desastre ambiental da história da cidade (fevereiro e março)
- Parte de um padrão: em 2022, ao menos 4 casos significativos (MG, PE, SC)
- **Falha:** sistemas de alerta e planos de contingência ainda são falhos (estudo Fapesp/Cemaden)
- **3.900+ óbitos** por desastres climáticos no Brasil entre 1991-2022

### São Sebastião / Litoral Norte SP (2023)
- **64-65 mortes** por deslizamentos (fevereiro 2023)
- **Falha documentada:** círculo de atuação do sistema de alerta não funcionou adequadamente (Cemaden)
- Ano de 2023: **1.161 desastres naturais registrados** (recorde do Cemaden)
- Descompasso entre ambições diplomáticas (COP 30) e governança real de desastres

### Padrão Recorrente
- Brasil tem **45 barragens** de alto risco atualmente
- 2022-2023: entre 800 e 1.161 ocorrências/ano
- Prof. Unesp (Pós-Grad em Desastres Naturais): "falhas do país na governança de desastres e incapacidade política de estabelecer políticas que estimulem ações preventivas"

### Red Flags Sistêmicas
1. Alertas existem mas não são eficazmente comunicados à população
2. Coordenação intergovernmental falha na prática
3. Sem plataforma nacional unificada de voluntariado em crises
4. Resposta é reativa, não preventiva
5. Voluntários operam sem triagem, coordenados por WhatsApp

### Gap de Oportunidade 🎯
Nenhum sistema nacional integra **prevenção + resposta + voluntariado**. O Brasil precisa de uma camada de orquestração que funcione ANTES (cadastro preventivo de voluntários), DURANTE (match + coordenação em tempo real) e DEPOIS (reconstrução + aprendizado).

---

## 3. 📱 Plataformas Existentes de Voluntariado

### Brasil

| Plataforma | Tipo | Funciona em Crise? | Gap |
|-----------|------|-------------------|-----|
| **Atados** | Conexão voluntário↔ONG (geral) | ❌ Focado em voluntariado contínuo, não emergencial | Sem triagem de urgência, sem geolocalização em tempo real |
| **FreeHelper** | Conecta habilidades a ONGs | ❌ Remoto, curta duração, não emergencial | Sem resposta em tempo real, sem coordenação de crise |
| **Pátria Voluntária** | Rede social de voluntariado | ⚠️ Parcial | Sem automação, sem priorização por urgência |
| **Solidariedade RS** | Conecta abrigos↔doadores | ✅ Mas específico RS, pós-crise | Não escala para outros estados, sem IA |
| **SOS Enchentes** | Portal governamental | ✅ Mas informativo, não operacional | Não orquestra voluntários, só informa |

### Internacional

| Plataforma | Tipo | Funciona em Crise? | Gap |
|-----------|------|-------------------|-----|
| **Crisis Cleanup** (EUA) | Work order management para desastres | ✅ Referência global | Focado em cleanup pós-desastre, não em voluntariado emergencial durante a crise |
| **IFRC VDMS** | Volunteer management da Cruz Vermelha | ✅ Registro + comunicação massal | Institucional, não aberto a voluntários independentes |
| **UN OCHA + AIDR** | AI for Disaster Response (machine learning em tweets) | ✅ Análise de dados sociais | Não faz match direto voluntário↔necessidade |
| **Standby Task Force** | Voluntários digitais para crises humanitárias | ✅ Mapeamento | Focado em info, não em orquestração de ação física |
| **CrisisCommons/CrisisCamps** | Coletivo tech para crises | ✅ Desde Haiti 2010 | Modelo organizacional, não plataforma |

### Green Flags das Plataformas que Funcionam
1. **Crisis Cleanup:** modelo de work orders colaborativas — reduz duplicação, melhora eficiência
2. **Salva RS:** prova que apps criados em <24h podem salvar 12K+ pessoas
3. **IFRC VDMS:** registro + comunicação massal (email, SMS, WhatsApp) + relatórios

### Red Flags das Plataformas que Falham
1. Nenhuma opera **offline/low-bandwidth** (crítica em desastres)
2. Nenhuma faz **match inteligente** (habilidade × necessidade × proximidade)
3. Nenhuma integra **IA para priorização** de pedidos por urgência
4. A maioria é **pós-crise**, não durante o pico da emergência
5. Nenhuma unifica **prevenção + resposta + recuperação** num ciclo

---

## 4. 🤖 Tecnologias Emergentes Relevantes

### watsonx Orchestrate (obrigatório no hackathon)
- Low-code/no-code para orquestração de fluxos
- Pode criar agentes que: recebem pedidos, classificam urgência, fazem match, disparam notificações
- **Fit perfeito** para o problema: voluntariado = problema de orquestração

### watsonx.ai (opcional)
- Modelos Granite para NLP/classificação
- Pode classificar pedidos de socorro por urgência
- Pode extrair habilidades de descrições de voluntários
- Prompt Lab para prototipagem rápida

### AIDR (Artificial Intelligence for Disaster Response)
- Machine learning para processar tweets/social media em crises
- Usado pela ONU desde Haiti
- Classifica automaticamente: necessidade, localização, urgência

### Chatbots + WhatsApp
- WhatsApp é o canal de comunicação real no Brasil durante crises
- Chatbot pode triar pedidos, coletar dados, rotear para voluntários
- **Vantagem:** opera em baixa banda, acessível em feature phones

### Geolocalização + Mapas
- Salva RS provou o modelo: pedido → ponto no mapa → rota para voluntário
- Pode ser ampliado com clusterização de pedidos próximos

### IA para Deduplicação
- Salva RS teve que criar sistema ad-hoc para pedidos duplicados
- IA pode identificar automaticamente: mesmo endereço, mesma pessoa, múltiplos pedidos

---

## 5. 🎤 Apelo Emocional e Pitch

### O que funciona em hackathons vencedores

**Estrutura de pitch vencedor (síntese):**
1. **Hook emocional** — abrir com história real, não com dados
2. **Problema urgente** — mostrar que é agora, não amanhã
3. **Solução clara** — 1 frase que resume o que faz
4. **Demo funcional** — mostrar funcionando, mesmo que simples
5. **Impacto mensurável** — números concretos de impacto
6. **Credibilidade** — por que essa equipe é a certa

**Casos de referência:**
- **Inspira (lawtech, Web Summit 2023):** gancho emocional com trocadilho sobre Brasil "campeão mundial de processos". Número como hook.
- **Hackathon Vida (PR, 2020):** critérios dos jurados = criatividade + aplicabilidade + pitch + disruptividade. "A tecnologia por si só não significa nada."
- **Casa do Impacto (Portugal):** projeto de habitação social venceu focando no problema humano, não na tecnologia.

**Ganchos emocionais para este hackathon:**
1. **Salva RS: 12.220 pessoas resgatadas** — e se pudesse ser 10x mais?
2. **"Preciso de Resgate" vs "Consigo Resgatar"** — a conexão que faltou
3. **Cordão humano de Canoas** — pessoas deram as mãos porque a tecnologia não deu
4. **25 pessoas ainda desaparecidas** no RS — se tivesse orquestração inteligente...
5. **1.161 desastres em 2023** — o próximo é questão de quando, não se

**Abertura sugerida para pitch:**
> "Em maio de 2024, Andréi Nowa dormia 2 horas por dia. Ele recebia pedidos de resgate segundo a segundo. Seus amigos de infância em Canoas mandavam: 'pelo amor de Deus, salva meus pais'. A plataforma Salva RS ajudou a salvar 12 mil pessoas. Mas milhares de pedidos se perdiam em dezenas de grupos de WhatsApp. O problema não era falta de voluntários. Era falta de orquestração. Nós construímos essa orquestração."

---

## 6. 🎯 Gap Central de Oportunidade

### O problema NÃO é:
- ❌ Falta de voluntários
- ❌ Falta de plataformas
- ❌ Falta de dados

### O problema É:
- ✅ **Falta de orquestração inteligente** entre demanda, oferta e coordenação
- ✅ Plataformas operam em **silos** (cada uma faz uma parte, nenhuma integra)
- ✅ Nenhum sistema faz **match automático** de habilidade × necessidade × localização
- ✅ Nenhum sistema funciona **offline/low-bandwidth** (crítico em crises)
- ✅ Nenhum sistema unifica o **ciclo completo** (prevenção → resposta → recuperação)

### O que o MVP deve ser:
**Um orchestrator de voluntariado em crises** que:
1. **Cadastra voluntários preventivamente** (habilidades, localização, disponibilidade)
2. **Recebe pedidos de socorro** (multi-canal: app, WhatsApp, web)
3. **Classifica por urgência** com IA (watsonx.ai)
4. **Faz match automático** voluntário↔necessidade (watsonx Orchestrate)
5. **Coordena comunicação** em tempo real (notificações, atualizações de status)
6. **Opera em baixa conectividade** (offline-first, sync quando volta)
7. **Elimina duplicação** automaticamente (IA)

### Vantagem competitiva da equipe Eduardo + Aria:
- Arquitetura de agentes é o dia a dia (Aria = orchestrator)
- Taxonomia Client → Orchestration → Agents → Tool Catalog → Tools mapeia 1:1
- Pensam em orquestração inteligente, não em "app"
- Isso é o que os jurados querem ouvir: **não viemos fazer um app, viemos orquestrar**

---

## 🔗 Fontes

| Fonte | URL | Contexto |
|-------|-----|----------|
| Wikipedia - Enchentes RS 2024 | https://pt.wikipedia.org/wiki/Enchentes_no_Rio_Grande_do_Sul_em_2024 | Dados oficiais consolidados |
| ANA - Estudo enchentes RS | https://www.gov.br/ana/... | 2,4M afetados, 183 mortes |
| DefesaNet - Voluntários RS | https://www.defesanet.com.br/seguranca/a-coragem-dos-voluntarios-nas-enchentes-de-2024-no-rs/ | Relato detalhado da ação voluntária |
| Exame - Salva RS (12K resgatados) | https://exame.com/tecnologia/plataforma-criada-por-voluntarios-do-rio-grande-do-sul-ja-resgatou-12-mil-pessoas/ | Funcionamento e resultados do Salva RS |
| PEGN - Apps Tecnopuc | https://revistapegn.globo.com/tecnologia/noticia/2024/05/chuvas-no-rs-coletivo-cria-aplicativos-para-conectar-abrigos-a-governos-e-interessados-em-ajudar.ghtml | Abrigos RS e Apoio Enchentes RS |
| PEGN - Ecossistema inovação | https://revistapegn.globo.com/google/amp/startups/noticia/2024/05/sos-rs-enchentes-no-estado-atingem-tambem-o-ecossistema-de-inovacao-gaucho.ghtml | 100+ devs no Tecnopuc |
| SICT RS - Solidariedade RS | https://sict.rs.gov.br/abrigos-e-instituicoes-ja-estao-recebendo-doacoes-pela-plataforma-solidariedade-rs | Plataforma oficial de doações |
| Procergs - SOS Enchentes | https://www.procergs.rs.gov.br/estado-lanca-site-sos-enchentes | Portal governamental |
| Plano Rio Grande - Solidariedade RS | https://planoriogrande.rs.gov.br/solidariedade-rs | WideLabs + SICT, plataforma oficial |
| Pacto Alegre - Abrigos RS | https://pactoalegre.poa.br/projeto-abrigos-e-habitacao/ | Ecossistema de coordenação |
| Revista Casa Comum - Tech digitais | https://revistacasacomum.com.br/as-tecnologias-digitais-a-favor-da-ecologia-integral/ | Meu Lar de Volta, AjudeRS, Estou Salvo |
| Wikipedia - Brumadinho | https://pt.wikipedia.org/wiki/Rompimento_de_barragem_em_Brumadinho | 270 mortes, maior acidente de trabalho |
| ONU Brasil - Brumadinho | https://brasil.un.org/pt-br/82492-artigo-o-que-podemos-aprender-com-cat%C3%A1strofe-de-brumadinho | Lições sistêmicas |
| UFSM - 7 anos Brumadinho | https://www.ufsm.br/projetos/institucional/observatorio-crise/2026/01/26/sete-anos-da-tragedia-de-brumadinho-o-que-aprendemos-com-o-desastre | Comunicação multissetorial |
| Unesp - Governança desastres | https://jornal.unesp.br/2025/09/23/... | Falhas em Petrópolis, São Sebastião, RS |
| Cemaden/MCTI - Recorde 2023 | https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2024/01/em-2023-cemaden-registrou-maior-numero-de-ocorrencias-de-desastres-no-brasil | 1.161 desastres em 2023 |
| Fapesp - Alertas falhos | https://agencia.fapesp.br/sistemas-de-alerta-e-planos-para-evitar-desastres-por-chuvas-extremas-ainda-sao-falhos-aponta-estudo/51557 | São Sebastião como caso |
| Crisis Cleanup | https://www.crisiscleanup.org/ | Referência global em coordenação |
| IFRC VDMS | https://www.ifrc.org/get-involved/volunteer-us/global-volunteering-alliance/harnessing-technology-humanitarian-efforts | Volunteer management da Cruz Vermelha |
| ONU - V&TCs | https://www.un.org/en/chronicle/article/volunteer-and-technical-communities-humanitarian-response | AIDR, Standby Task Force |
| GovTech - CrisisCamps | https://www.govtech.com/recovery/technical-communities-redefine-volunteerism.html | Histórico de CrisisCommons |
| Atados | https://www.atados.com.br/ | Maior plataforma BR de voluntariado |
| FreeHelper | https://www.freehelper.com.br/ | Match habilidade↔ONG |
| CNN Brasil - 1 ano RS | https://www.cnnbrasil.com.br/nacional/sul/rs/um-ano-apos-enchentes-no-rs-do-caos-a-reconstrucao/ | Balanço 1 ano |
| CNC - Prejuízo R$97bi | https://www.cnnbrasil.com.br/economia/macroeconomia/economia-brasileira-pode-ter-prejuizo-de-r-97-bilhoes-com-chuvas-no-rs-aponta-cnc/ | Impacto econômico nacional |
| Hackathon Brasil - Pitch | https://hackathonbrasil.com.br/instrucoes-essenciais-para-um-pitch-de-sucesso/ | Dicas de pitch |
| Prefeitura SP - Hackathon Covid | https://tecnologia.prefeitura.sp.gov.br/?p=2838 | Critérios: criatividade + aplicabilidade + pitch + disruptividade |
| Fundação 1Bi - Hackathon IA Educação | https://www.fundacao1bi.com.br/post/hackathon-para-impacto-social-transformando-a-educa%C3%A7%C3%A3o-com-ia | Pitch com IA assistente |

---

_Dados sem ação são curiosidade. Dados com ação são poder._