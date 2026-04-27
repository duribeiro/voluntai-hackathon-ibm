# VoluntAI Backend - API Mockada

API REST mockada para o Hackathon IBM 2026 - Voluntariado Inteligente para Situações de Crise.

## Setup

```bash
cd voluntai-backend
npm install
npm run dev
```

API roda em `http://localhost:3001`

## Endpoints

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/health` | GET | Health check |
| `/api/volunteers` | GET, POST | Listar/criar voluntários |
| `/api/volunteers/:id/recommendations` | GET | Recomendações para voluntário (Top 3) |
| `/api/institutions` | GET, POST | Listar/criar instituições |
| `/api/needs` | GET, POST | Listar/criar necessidades |
| `/api/needs/:id/match` | POST | Match voluntários para necessidade |
| `/api/needs/classify-urgency` | POST | Classificar urgência de texto (auto-classificação) |
| `/api/notifications` | POST | Criar notificação |
| `/api/radar/mock-alerts` | POST | Processar alerta mock (Cemaden/Inmet) |
| `/api/dashboard/summary` | GET | Resumo do dashboard com gargalos |

## Dados Mockados (Contexto: Enchentes RS 2024)

- **5 voluntários** com habilidades diversas (enfermagem, resgate, cozinha, etc.)
- **3 instituições** (abrigo, defesa civil, hospital)
- **4 necessidades** (1 crítica, 1 alta, 1 média)
- **2 matches** aceitos
- **1 alerta** processado

## Exemplos de Uso

### Cadastrar Voluntário
```bash
curl -X POST http://localhost:3001/api/volunteers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "skills": ["enfermagem", "primeiros_socorros"],
    "city": "Canoas",
    "state": "RS",
    "availability": "immediate"
  }'
```

### Classificar Urgência
```bash
curl -X POST http://localhost:3001/api/needs/classify-urgency \
  -H "Content-Type: application/json" \
  -d '{"description": "Abrigo lotado, risco de surto"}'
```

### Dashboard
```bash
curl http://localhost:3001/api/dashboard/summary
```

## Deploy Vercel

```bash
vercel --prod
```

Ou conectar repo ao Vercel dashboard.

## Integração IBM watsonx Orchestrate

Importar `orchestrate/openapi/voluntai-p0.openapi.yaml` como tools no Orchestrate.
