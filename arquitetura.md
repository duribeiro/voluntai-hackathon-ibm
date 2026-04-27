# 🏗️ Arquitetura da PoC — VoluntAI

> **Nome provisório:** VoluntAI (Voluntário + AI)
> **Tema:** Orquestrando o Voluntariado Inteligente para Situações de Crise
> **Tech obrigatória:** IBM watsonx Orchestrate

---

## 💡 Conceito

Plataforma que usa IA agentic para **conectar voluntários às necessidades certas, no momento certo, com a urgência certa** — funcionando ANTES, DURANTE e DEPOIS de crises.

**Gancho:** "Enchentes RS 2024 — 2,4 milhões afetados, milhares de voluntários dispostos, e NENHUMA IA orquestrando essa ajuda."

---

## 🎯 Personas

| Persona | Descrição | Necessidade |
|---------|-----------|-------------|
| **Voluntário** | Pessoa disposta a ajudar | Saber ONDE e COMO sua habilidade é mais útil |
| **Instituição** | ONG, Defesa Civil, abrigo | Mapear necessidades e receber voluntários certos |
| **Doador (Investidor)** | Pessoa ou Empresa com recursos | Visão geral (Heatmap) para saber onde injetar dinheiro, comida ou maquinário |

---

## 🤖 Agentes watsonx Orchestrate

### Agente 1: Voluntário Inteligente (Match Agent)
**Para quem:** Voluntário
**O que faz:**
- Recebe perfil (habilidades, localização, disponibilidade)
- Cruza com necessidades ativas
- Recomenda as 3 melhores formas de contribuir
- Prioriza por urgência e proximidade

**Inputs:** nome, habilidades, cidade, disponibilidade
**Output:** recomendações personalizadas com prioridade

### Agente 2: Gestor de Necessidades (Need Agent)
**Para quem:** Instituição
**O que faz:**
- Cadastro de demandas (tipo, urgência, local, quantidade)
- Classificação automática de urgência (IA)
- Matching com voluntários disponíveis
- Alertas quando demanda crítica sem voluntários

**Inputs:** tipo de necessidade, local, urgência, descrição
**Output:** demanda classificada + voluntários recomendados

### Agente 3: Agente Radar (Social Listening & Clusterização)
**Para quem:** Doador/Investidor e Backend
**O que faz:**
- Monitora APIs Governamentais (Inmet, Cemaden) e Twitter/X
- Identifica padrões e agrupa menções sobre um mesmo local
- Valida emergências automaticamente (Inteligência Coletiva baseada em dados)
- Mostra Heatmap/Gargalos para o Doador alocar recursos

**Inputs:** Feeds de APIs, palavras-chave, localização
**Output:** Necessidades validadas automaticamente + mapa de calor

---

## 🔄 Fluxos de Orquestração

### Fluxo 1: Onboarding de Voluntário
```
Voluntário se cadastra
  → Match Agent analisa perfil
  → Busca necessidades compatíveis
  → Retorna Top 3 recomendações
  → Voluntário escolhe e é alocado
```

### Fluxo 2: Cadastro de Necessidade
```
Instituição cadastra demanda
  → Need Agent classifica urgência
  → Busca voluntários com skills compatíveis
  → Notifica voluntários próximos
  → Confirma alocação
```

### Fluxo 3: Doador / Investidor & Validação Autônoma
```
Agente Radar capta anomalia via APIs (X, Governo)
  → Agrupa X menções no mesmo local (Inteligência Coletiva)
  → Cria a urgência automaticamente
  → Doador/Investidor acessa Heatmap
  → Decide onde injetar recursos com base no alerta validado
```

---

## 📊 Knowledge Base

Dados para alimentar os agentes:

1. **Enchentes RS 2024** — casos reais, dados de impacto
2. **Classificação de urgência** — critérios (risco de vida > logística > doação)
3. **Taxonomia de habilidades** — categorias de voluntariado (saúde, logística, resgate, cozinhar, dirigir, tradução, etc.)
4. **Mapeamento de crises brasileiras** — Brumadinho, Petrópolis, São Sebastião, RS
5. **Plataformas existentes** — gaps e lições aprendidas

---

## 🎭 Demo Script (Pitch)

1. **ABERTURA (30s):** "Em 2024, 2,4 milhões de pessoas foram afetadas pelas enchentes no RS. Milhares de voluntários se mobilizaram. Mas a ajuda foi caótica."
2. **PROBLEMA (30s):** Mostrar gaps — voluntários não sabem onde ir, instituições não sabem quem chegou, esforços redundantes
3. **SOLUÇÃO (60s):** Demo ao vivo — cadastrar voluntário → IA recomenda → alocar em necessidade real
4. **DIFERENCIAL (30s):** "Nós já operamos orquestração de agentes na prática. Estendemos esse conceito para voluntariado de crise com IBM watsonx."
5. **VISÃO (15s):** "Quando a próxima crise chegar, estaremos prontos."

---

## ✅ Checklist PoC

- [ ] Acessar watsonx Orchestrate
- [ ] Criar 3 agentes (Match, Need, Radar)
- [ ] Configurar Knowledge Base com dados RS 2024
- [ ] Criar Fluxo 1 (Onboarding voluntário)
- [ ] Criar Fluxo 2 (Cadastro necessidade ONG)
- [ ] Criar Fluxo 3 (Radar Autônomo + Heatmap Doador)
- [ ] Preparar dados demo (5-10 voluntários, 5-8 necessidades)
- [ ] Testar fluxo end-to-end
- [ ] Montar apresentação/pitch
- [ ] Gravar demo (backup)

---

_Criado em — 2026-04-24_