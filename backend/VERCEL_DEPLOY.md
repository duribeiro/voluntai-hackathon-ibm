# VoluntAI Backend - Upload para Vercel

## Instruções Rápidas (celular)

### Passo 1: Baixar este arquivo
O arquivo `voluntai-backend.zip` foi criado com todo o código.

### Passo 2: No celular
1. Acesse: https://vercel.com/dashboard
2. Login com sua conta
3. Clique: **"Add New..."** → **"Project"**
4. Selecione: **"Import Git Repository"** ou faça upload do ZIP

### Passo 3: Configurar deploy
- Framework Preset: **Next.js**
- Root Directory: (deixe vazio ou `voluntai-backend`)
- Clique: **Deploy**

### Passo 4: Me enviar a URL
Exemplo: `https://voluntai-xyz.vercel.app`

---

## Estrutura do projeto

```
voluntai-backend/
├── lib/
│   └── data.ts          # Dados mockados (30 vol, 7 inst, 15 needs)
├── pages/
│   └── api/
│       ├── health.ts
│       ├── volunteers.ts
│       ├── volunteers/[id]/recommendations.ts
│       ├── institutions.ts
│       ├── needs.ts
│       ├── needs/[id]/match.ts
│       ├── needs/classify-urgency.ts
│       ├── notifications.ts
│       ├── radar/mock-alerts.ts
│       └── dashboard/summary.ts
├── package.json
├── tsconfig.json
└── next.config.js
```

## Endpoints disponíveis

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/health` | GET | Health check |
| `/api/volunteers` | GET, POST | CRUD voluntários |
| `/api/volunteers/:id/recommendations` | GET | Top 3 matches |
| `/api/institutions` | GET, POST | CRUD instituições |
| `/api/needs` | GET, POST | CRUD necessidades |
| `/api/needs/:id/match` | POST | Match voluntários |
| `/api/needs/classify-urgency` | POST | IA classifica urgência |
| `/api/notifications` | POST | Criar notificação |
| `/api/radar/mock-alerts` | POST | Processar alerta |
| `/api/dashboard/summary` | GET | Dashboard com gargalos |

---

## Dados mockados (Contexto: Enchentes RS 2024)

- **30 voluntários** categorizados por skill
- **7 instituições** (abrigos, hospitais, defesa civil)
- **15 necessidades** (4 críticas, 5 altas, 6 médias)
- **Cidades:** Canoas, Porto Alegre, Guaíba

---

_Última atualização: 2026-04-27 10:30_
