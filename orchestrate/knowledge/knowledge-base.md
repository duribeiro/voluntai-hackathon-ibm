# Base de Conhecimento — VoluntAI

> Arquivo para upload no watsonx Orchestrate (Knowledge)
> Este documento será usado pelo agente para responder perguntas sobre voluntariado em crises

---

## CONTEXTO GERAL

VoluntAI é uma plataforma de orquestração inteligente de voluntariado para situações de crise. O sistema conecta voluntários às necessidades certas, no momento certo, com a urgência certa.

### Crise de Referência: Enchentes RS 2024

- **2,4 milhões de pessoas afetadas** em 478 municípios
- **184 mortes** confirmadas
- **806 feridos**
- **25 desaparecidos** (até abril 2025)
- **Prejuízo econômico:** R$ 4,6+ bilhões

**O que funcionou:**
- Corrente humana no viaduto Mathias Velho, Canoas
- Voluntários anônimos com barcos, pranchas de surfe
- Cozinhas solidárias e centros de acolhimento
- Solidariedade espontânea massiva

**O que falhou:**
- Poder público lento e descoordenado
- Comunicação fragmentada
- Redundância de esforços
- Falta de priorização
- Nenhuma IA orquestrando a ajuda

---

## CLASSIFICAÇÃO DE URGENCIA

### CRITICA (risco de vida, emergencia imediata)
- Resgate em areas alagadas
- Atendimento medico urgente
- Distribuicao de medicamentos
- Abrigo para desabrigados
- Agua potavel

### ALTA (precisa em ate 24h)
- Distribuicao de alimentos
- Cozinhas comunitarias
- Transporte de voluntarios
- Comunicao com familiares
- Triagem em abrigos

### MEDIA (precisa em ate 72h)
- Acolhimento psicologico
- Organizacao de doacoes
- Suporte administrativo
- Traducao para estrangeiros

### BAIXA (pode esperar 1 semana)
- Reconstrucao de moradias
- Limpeza pos-enchente
- Documentacao e registros
- Suporte de longo prazo

---

## TAXONOMIA DE HABILIDADES

### Area: Saude
- primeiros socorros
- enfermagem
- atendimento medico
- saude mental
- acolhimento

### Area: Logistica
- dirigir
- motorista
- distribuicao
- organizacao
- coordenacao

### Area: Resgate
- resgate aquático
- natacao
- maquinario pesado
- trabalho em altura

### Area: Construcao
- pedreiro
- eletricista
- carpinteiro
- encanador

### Area: Alimentacao
- cozinhar
- preparacao de refeicoes
- manipulacao de alimentos

### Area: Tecnologia
- sistemas
- gestao de dados
- comunicacao digital
- redes sociais

### Area: Comunicacao
- traducao (idiomas)
- atendimento ao publico
- assistencia social
- mediacao de conflitos

---

## MATCHING: COMO FUNCIONA

### Algoritmo de Recomendacao

1. **Calculo de compatibilidade:**
   - Match direto: habilidade solicitada = habilidade do voluntario (100%)
   - Match correlato: mesma area, habilidade diferente (70%)
   - Match adjacente: area relacionada (50%)

2. **Fatores de prioridade:**
   - Urgencia da necessidade (CRITICA > ALTA > MEDIA > BAIXA)
   - Proximidade geografica
   - Disponibilidade do voluntario

3. **Score final:**
   ```
   Score = Match x Urgencia x Proximidade x Disponibilidade
   ```

### Exemplo de Matching

**Voluntario:** Ana Silva
- Habilidades: enfermagem, primeiros socorros
- Cidade: Porto Alegre
- Disponibilidade: fins de semana

**Necessidade N1:**
- Tipo: Saude
- Local: Abrigo Sesi, Canoas (15km)
- Urgencia: CRITICA

**Calculo:**
- Match: enfermagem = habilidade direta = 100%
- Urgencia: CRITICA = peso 1.0
- Proximidade: 15km = 0.9
- Disponibilidade: fins de semana = 0.5

**Score final:** 100% x 1.0 x 0.9 x 0.5 = **45%**
**Recomendacao:** N1 com match 45%

---

## FLUXOS DE ORQUESTACAO

### Fluxo 1: Onboarding de Voluntario

1. Voluntario se cadastra com perfil
2. Match Agent analisa perfil
3. Busca necessidades compativeis na regiao
4. Retorna Top 3 recomendacoes
5. Voluntario escolhe e e alocado

### Fluxo 2: Cadastro de Necessidade

1. Instituicao cadastra demanda
2. Need Agent classifica urgencia automaticamente
3. Sistema busca voluntarios com skills compativeis
4. Notifica voluntarios proximos
5. Confirma alocacao

### Fluxo 3: Coordenacao de Crise

1. Coordenador acessa painel
2. Crisis Agent consolida dados
3. Identifica gargalos (demandas sem voluntarios)
4. Sugere realocacao de recursos
5. Emite alertas prioritarios

---

## ALERTAS E NOTIFICACOES

### Tipos de Alerta

1. **URGENTE:** Necessidade CRITICA sem voluntarios
2. **GARGALO:** Regiao com demanda > oferta
3. **REALOCACAO:** Sugestao de movimento de voluntarios
4. **CONCLUSAO:** Necessidade atendida, liberar voluntarios

### Canais de Notificacao

- Slack (integracao)
- WhatsApp (API)
- Email
- Painel web

---

## DADOS HISTORICOS PARA REFERENCIA

### Casos Brasileiros de Desastres

1. **Brumadinho (2019):** 270 mortes, falta de triagem de habilidades
2. **Petropolis (2022):** Deslizamentos, governanca falha
3. **Sao Sebastiao (2023):** 64 mortes, alertas falhos
4. **Enchentes RS (2024):** Maior crise, maior solidariedade, maior descoordenacao

### Licoes Aprendidas

1. Voluntariado espontaneo e massivo, mas descoordenado
2. Comunicacao fragmentada e falha
3. Nenhuma plataforma usa IA para matching
4. Apps criados na hora sao abandonados pos-crise
5. Preparacao preventiva salva vidas

---

## COMO USAR ESTA BASE DE CONHECIMENTO

Quando o usuario perguntar sobre:
- **Voluntarios:** Use a taxonomia de habilidades para recomendar
- **Necessidades:** Use a classificacao de urgencia para priorizar
- **Matching:** Use o algoritmo de recomendacao
- **Crises:** Use os dados historicos para contexto
- **Fluxos:** Use os fluxos de orquestracao como guia

---

_Base de conhecimento para VoluntAI - Hackathon UNASP + IBM 2026_
_Criado em - 2026-04-24_