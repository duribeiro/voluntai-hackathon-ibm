-- 0001_initial_schema.sql
-- Estrutura inicial do banco de dados VoluntAI (Supabase / PostgreSQL)

-- 1. Instituições
CREATE TABLE institutions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL, -- ONG, Defesa Civil, Igreja, Prefeitura, Hospital
    city VARCHAR(100) NOT NULL,
    state VARCHAR(2) NOT NULL,
    cnpj VARCHAR(20) UNIQUE,
    phone VARCHAR(20),
    contact_name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Voluntários
CREATE TABLE volunteers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(2) NOT NULL,
    skills JSONB NOT NULL DEFAULT '[]', -- Array de strings: ['saude', 'logistica', 'tech']
    availability VARCHAR(50) NOT NULL, -- integral, parcial, fim_de_semana
    cnh_type VARCHAR(5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Necessidades (Demandas)
CREATE TABLE needs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    institution_id UUID REFERENCES institutions(id) ON DELETE CASCADE,
    required_skill VARCHAR(100) NOT NULL,
    volunteers_needed INTEGER NOT NULL DEFAULT 1,
    urgency_level VARCHAR(20) NOT NULL, -- critica, alta, media, baixa
    location_city VARCHAR(100) NOT NULL,
    location_state VARCHAR(2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'open', -- open, in_progress, resolved
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Alertas Externos (Radar)
CREATE TABLE external_alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source VARCHAR(100) NOT NULL, -- twitter, defesacivil, api_clima
    original_text TEXT NOT NULL,
    captured_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ai_classification JSONB, -- { "urgency": "alta", "needs_rescue": true, "location": "Canoas/RS" }
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- pending, validated, dismissed
    converted_to_need_id UUID REFERENCES needs(id) ON DELETE SET NULL
);

-- 5. Matchings (Alocações)
CREATE TABLE matchings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    volunteer_id UUID REFERENCES volunteers(id) ON DELETE CASCADE,
    need_id UUID REFERENCES needs(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- pending, accepted, rejected, completed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(volunteer_id, need_id)
);
