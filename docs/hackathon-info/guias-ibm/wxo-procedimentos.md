# 🛠️ watsonx Orchestrate — Procedimentos Operacionais

> Padrões que FUNCIONARAM. Seguir exatamente assim nas próximas vezes.
> Última atualização: 2026-04-27

---

## 1. Login e Acesso

- **URL do painel:** https://cloud.ibm.com/resources
- **Launch WxO:** Resources → watsonx Orchestrate-fw → Launch
- **Login:** `IBM_ACCOUNT_EMAIL` (ver `.env`)
- **Sessão expira** → aparece "Security Key / Touch ID" → Eduardo precisa fazer login manualmente

## 2. Criar Agente (Create from scratch)

### Problemas conhecidos:
- **Checkbox de termos** na página de provisionamento: usar `input.click()` via JS
- **Dropdown de localização:** é um combobox React. Usar `nativeInputValueSetter` + `dispatchEvent('input')` + clicar na opção do menu
- **Botão Create desabilitado:** preencher nome + descrição via React setter para habilitar

### Procedimento que funciona:

1. Navigate para `https://us-south.watson-orchestrate.cloud.ibm.com/build/manage`
2. Clicar "Create agent" → "Create from scratch"
3. Preencher campos via **React native setter**:
   ```javascript
   const nativeInputSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
   nativeInputSetter.call(nameInput, 'Nome do Agente');
   nameInput.dispatchEvent(new Event('input', {bubbles: true}));
   ```
4. Para textarea: usar `HTMLTextAreaElement.prototype, 'value'`
5. Clicar botão "Create" (habilitado após preencher campos obrigatórios)

## 3. Configurar Agente

### Após criação, na tela de edição:

1. **Selecionar ReAct** (não Default): clicar no radio `#agent-style-react`
2. **Aba Behavior → Add Guideline:**
   - Preencher campos: `#text-input-name`, `#text-input-condition`, `#text-input-action`
   - Usar React setter para cada campo
   - Clicar "Save"
3. **Aba Toolset → Agents → Add agent:**
   - Clicar "Add agent"
   - Selecionar "Local instance"
   - Marcar checkboxes dos agentes desejados
   - Clicar "Add"

### Fechar modais de fundo:
```javascript
document.querySelectorAll('button[aria-label="Close"]').forEach(b => b.click());
```

## 4. Deploy

1. Clicar botão "Deploy" no header
2. Confirmar no modal: clicar `button.c4p--action-set__action-button`
3. Ignorar aviso "No instructions detected" — guidelines contam como instruções

## 5. Gerenciar Agentes

- **Manage agents:** `https://us-south.watson-orchestrate.cloud.ibm.com/build/manage#agents`
- **Editar agente:** URL formato `/build/agent/edit/{agent-id}`
- **Chat:** `https://us-south.watson-orchestrate.cloud.ibm.com/chat`

## 6. Selecionar Dropdown React (IBM Cloud)

O IBM Cloud usa componentes Carbon Design System (cds--). Dropdowns são combobox:

```javascript
// Para selecionar localização:
const input = document.getElementById('regionSelector');
const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
nativeSetter.call(input, 'Dallas');
input.dispatchEvent(new Event('input', {bubbles: true}));
// Depois clicar no item do menu que aparece
const items = document.querySelectorAll('.cds--list-box__menu-item');
const dallas = Array.from(items).find(i => i.textContent.includes('Dallas'));
dallas.click();
```

## 7. Credenciais

- Ver `ibm-credentials.md` (NÃO versionar)
- Instance ID: `IBM_WATSONX_ORCHESTRATE_INSTANCE_ID` (ver `.env`)

## 8. IDs dos Agentes

| Agente | ID |
|--------|-----|
| VoluntAI Orchestrator | `IBM_AGENT_ORCHESTRATOR_ID` |
| VoluntAI Match | `IBM_AGENT_MATCH_ID` |
| VoluntAI Cadastro | `IBM_AGENT_CADASTRO_ID` |

---

_Regra: toda ação bem-sucedida vira procedimento aqui._