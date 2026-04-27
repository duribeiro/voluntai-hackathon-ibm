# Workflow Geral de Engenharia de Qualidade de Software

> **Nunca comece codando.**
> 
> Antes de implementar qualquer software, primeiro: entenda o problema, valide os requisitos, defina qualidade, modele a solução, planeje a entrega e só então construa, teste e entregue.

---

## As 10 Etapas da Engenharia de Qualidade

### 1. Entendimento do Problema
**Objetivo:** Impedir que o agente resolva “certo o problema errado”.

O agente deve identificar:
- Qual problema real o software resolve
- Quem são os usuários e stakeholders
- Qual dor operacional existe hoje
- Qual resultado esperado
- O que acontece se o sistema falhar

**Saída obrigatória:**
- Descrição do sistema
- Contexto
- Público-alvo
- Objetivo de negócio
- Riscos iniciais

*Base: as fontes destacam que muitos projetos fracassam por resolverem o problema errado, não por programarem mal.*

### 2. Levantamento de Requisitos
**Objetivo:** Transformar conversa solta em requisitos rastreáveis.

O agente deve aplicar ou simular técnicas como:
- Entrevista
- Observação
- Brainstorming
- Questionário
- Análise de documentação

**Saída obrigatória:**
- Lista de requisitos funcionais
- Lista de requisitos não funcionais
- Fonte de cada requisito
- Prioridade
- Justificativa

*Base: a atividade de requisitos pede definição do sistema, levantamento com técnica escolhida e especificação de requisitos funcionais e não funcionais.*

### 3. Validação dos Requisitos
**Objetivo:** Cortar requisito vago antes dele virar código ruim.

Cada requisito deve ser validado com checklist:
- Claro
- Completo
- Consistente
- Testável
- Viável
- Necessário
- Rastreável

**Saída obrigatória:**
- Checklist de validação
- Requisitos aprovados
- Requisitos rejeitados ou pendentes
- Conflitos entre stakeholders

*Base: o material exige validação dos requisitos com critérios como clareza, completude e consistência.*

### 4. Planejamento do Produto e do Processo
**Objetivo:** Escolher como o software será desenvolvido.

O agente deve decidir o modelo mais adequado:
- **Cascata:** quando os requisitos são estáveis
- **Prototipação:** quando há incerteza
- **Incremental:** quando dá para entregar por partes
- **Espiral:** quando há risco alto
- **Ágil/Scrum/Kanban:** quando há mudança constante

**Saída obrigatória:**
- Modelo escolhido
- Justificativa
- Backlog inicial
- Priorização
- Sprints ou fases
- Critérios de pronto

*Base: os modelos de processo definem fases, sequência, artefatos e fluxo de trabalho.*

### 5. Modelagem da Solução
**Objetivo:** Desenhar antes de construir.

O agente deve produzir:
- Fluxo principal do sistema
- Casos de uso ou histórias de usuário
- Modelo de dados inicial
- Arquitetura preliminar
- Protótipo de telas quando necessário
- Integrações externas

**Saída obrigatória:**
- Diagrama ou descrição de fluxo
- Entidades principais
- Regras de negócio
- Telas principais
- Decisões arquiteturais

*Base: o processo genérico inclui modelagem para entender arquitetura, partes do sistema e encaixe da solução antes da construção.*

### 6. Planejamento da Qualidade
**Objetivo:** Definir o que será considerado “software bom”.

O agente deve transformar qualidade em critérios verificáveis:
- Funcionalidade
- Segurança
- Desempenho
- Usabilidade
- Confiabilidade
- Manutenibilidade
- Extensibilidade
- Compatibilidade

**Saída obrigatória:**
- Atributos de qualidade
- Métricas mínimas
- Critérios de aceite
- Riscos de qualidade

*Base: as fontes definem software de qualidade como aquele que satisfaz requisitos, é fácil de manter, performático, confiável e fácil de usar.*

### 7. Construção Controlada
**Objetivo:** Codar com rastreabilidade, não no impulso.

O agente deve seguir:
- Requisitos priorizados
- Arquitetura definida
- Padrões de código
- Controle de versão
- Commits organizados
- Separação por módulos
- Reuso quando fizer sentido

**Saída obrigatória:**
- Código implementado
- Registro das decisões
- Mapeamento requisito → implementação
- Lista de pendências técnicas

*Base: Engenharia de Software envolve processo, métodos e ferramentas para desenvolver software com qualidade dentro de prazo e controle.*

### 8. Testes e Verificação
**Objetivo:** Provar que o sistema faz o que deveria fazer.

O agente deve planejar:
- Testes unitários
- Testes de integração
- Testes funcionais
- Testes de usabilidade
- Testes de desempenho
- Testes de segurança
- Testes de regressão

**Saída obrigatória:**
- Plano de testes
- Casos de teste
- Resultado esperado
- Resultado obtido
- Bugs encontrados
- Correções aplicadas

*Base: construção combina geração de código e testes para revelar erros na codificação.*

### 9. Entrega e Homologação
**Objetivo:** Colocar o usuário para validar, não deixar o dev decidir sozinho.

O agente deve gerar:
- Versão entregue
- Instruções de uso
- Critérios de aceite
- Feedback dos usuários
- Ajustes necessários
- Decisão: aprovado, reprovado ou aprovado com ressalvas

*Base: entrega significa disponibilizar o software ao cliente, que avalia e fornece feedback.*

### 10. Manutenção e Melhoria Contínua
**Objetivo:** Impedir deterioração do software.

O agente deve acompanhar:
- Bugs pós-entrega
- Novos requisitos
- Débito técnico
- Melhorias de performance
- Refatorações
- Segurança
- Documentação

**Saída obrigatória:**
- Backlog de manutenção
- Histórico de mudanças
- Impacto das alterações
- Nova rodada de testes
- Versão atualizada

*Base: software não se desgasta como hardware, mas deteriora quando mudanças introduzem defeitos; por isso precisa de controle e manutenção.*

---

## Resumo Executivo: Como isso se conecta com as 10 etapas

Aqui está o mapeamento transformado em máquina (papéis de atuação):

1. **Entender o problema** → PO
2. **Levantar requisitos** → Analista
3. **Validar requisitos** → Analista + QA
4. **Planejar processo e backlog** → PO + Tech Lead
5. **Modelar solução** → Arquiteto
6. **Definir critérios de qualidade** → QA
7. **Construir com controle** → Dev
8. **Testar e verificar** → QA
9. **Entregar e homologar** → PO
10. **Manter e melhorar** → Dev + QA
