# 📊 Dados Demo — VoluntAI PoC

> Dados de demonstração para testar os fluxos no watsonx Orchestrate
> Criado: 2026-04-24

---

## Voluntários (10 exemplos)

| ID | Nome | Cidade | Habilidades | Disponibilidade |
|----|------|--------|-------------|-----------------|
| V1 | Ana Silva | Porto Alegre | enfermagem, primeiros socorros | fins de semana |
| V2 | Bruno Costa | Canoas | dirigir, logística | qualquer horário |
| V3 | Carla Mendes | São Leopoldo | cozinhar, organização | manhãs |
| V4 | Diego Santos | Novo Hamburgo | resgate, natação | urgente, 24h |
| V5 | Elena Ferreira | Gravataí | tradução (inglês, espanhol), comunicação | tardes |
| V6 | Felipe Luz | Caxias do Sul | motorista, maquinário pesado | qualquer horário |
| V7 | Gabriela Wu | Porto Alegre | saúde mental, acolhimento | fins de semana |
| V8 | Hugo Martins | Esteio | construção, eletrica | manhãs e tardes |
| V9 | Irene Alves | Sapucaia | assistência social, triagem | qualquer horário |
| V10 | João Pedro | Pelotas | tecnologia, sistemas | remotamente |

---

## Necessidades (8 exemplos)

| ID | Tipo | Local | Urgência | Descrição | Qtd Voluntários |
|----|------|-------|----------|-----------|----------------|
| N1 | Saúde | Abrigo Sesi, Canoas | CRÍTICA | Atendimento médico para 200 pessoas | 5 |
| N2 | Logística | CEU, Porto Alegre | ALTA | Distribuição de doações | 10 |
| N3 | Resgate | Região Sul, Canoas | CRÍTICA | Resgate em áreas alagadas | 8 |
| N4 | Acolhimento | Igreja Central, São Leopoldo | MÉDIA | Acolhimento psicológico | 3 |
| N5 | Cozinha | Ginásio, Gravataí | ALTA | Preparar 500 refeições/dia | 6 |
| N6 | Construção | Bairro Mathias Velho | BAIXA | Reconstrução de moradias | 15 |
| N7 | Tecnologia | Centro de Comando | MÉDIA | Sistema de gestão de voluntários | 2 |
| N8 | Tradução | Abrigo Internacional | ALTA | Tradução para voluntários estrangeiros | 2 |

---

## Classificação de Urgência

```
CRÍTICA → risco de vida, emergência imediata
ALTA    → precisa em até 24h
MÉDIA   → precisa em até 72h
BAIXA   → pode esperar 1 semana
```

---

## Taxonomia de Habilidades

### Área: Saúde
- primeiros socorros
- enfermagem
- atendimento médico
- saúde mental
- acolhimento

### Área: Logística
- dirigir
- motorista
- distribuição
- organização
- coordenação

### Área: Resgate
- resgate aquático
- natação
- maquinário pesado
- altura

### Área: Construção
- pedreiro
- eletricista
- carpinteiro
- encanador

### Área: Alimentação
- cozinhar
- preparação de refeições
- manipulação de alimentos

### Área: Tecnologia
- sistemas
- gestão de dados
- comunicação digital
- redes sociais

### Área: Comunicação
- tradução (idiomas)
- atendimento ao público
- assistência social
- mediação de conflitos

---

## Cenários de Teste

### Cenário 1: Onboarding de Voluntário
**Input:**
```
Nome: Ana Silva
Cidade: Porto Alegre
Habilidades: enfermagem, primeiros socorros
Disponibilidade: fins de semana
```

**Output Esperado:**
```
Recomendações:
1. [CRÍTICA] N1 - Atendimento médico no Abrigo Sesi (Canoas)
   Match: 95% - habilidades diretas, fins de semana OK
2. [ALTA] N4 - Acolhimento psicológico (São Leopoldo)
   Match: 80% - saúde mental correlata
3. [MÉDIA] N7 - Sistema de gestão (Centro de Comando)
   Match: 60% - pode ajudar com triagem
```

### Cenário 2: Cadastro de Necessidade
**Input:**
```
Tipo: Saúde
Local: Abrigo Sesi, Canoas
Urgência: CRÍTICA
Descrição: Atendimento médico para 200 pessoas
Qtd voluntários: 5
```

**Output Esperado:**
```
Classificação: CRÍTICA ✓
Voluntários recomendados:
1. Ana Silva (enfermagem) - 95% match
2. Diego Santos (resgate, primeiros socorros) - 85% match
3. Gabriela Wu (saúde mental) - 75% match
Alerta: faltam 2 voluntários para meta
```

### Cenário 3: Coordenação de Crise
**Input:**
```
Região: Porto Alegre
Tipo de crise: Enchente
```

**Output Esperado:**
```
Visão Geral:
- 45 voluntários cadastrados
- 8 necessidades ativas
- 3 críticas sem voluntários suficientes

Gargalos:
- N3 (Resgate): precisa de 8, tem 2 → ALERTA
- N1 (Saúde): precisa de 5, tem 3 → ALERTA

Sugestão de Realocação:
- Diego Santos pode cobrir N3 (resgate)
- Enviar notificação para voluntários disponíveis em Canoas
```

---

_Criado por Aria — 2026-04-24_