-- seed.sql
-- Dados mockados para demonstração da PoC do VoluntAI

-- Inserindo Instituições
INSERT INTO institutions (id, name, type, city, state, cnpj, phone, contact_name) VALUES
('11111111-1111-1111-1111-111111111111', 'Defesa Civil Estadual RS', 'Defesa Civil', 'Porto Alegre', 'RS', '12.345.678/0001-90', '51999999999', 'Coronel Mendes'),
('22222222-2222-2222-2222-222222222222', 'ONG Ajuda Brasil', 'ONG', 'São Leopoldo', 'RS', '98.765.432/0001-10', '51988888888', 'Maria Silva'),
('33333333-3333-3333-3333-333333333333', 'Hospital de Clínicas', 'Hospital', 'Porto Alegre', 'RS', '55.555.555/0001-55', '51977777777', 'Dr. João');

-- Inserindo Voluntários
INSERT INTO volunteers (id, full_name, cpf, phone, city, state, skills, availability, cnh_type) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Carlos Eduardo', '111.111.111-11', '51911111111', 'Porto Alegre', 'RS', '["logistica", "motorista"]', 'integral', 'D'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Ana Luiza', '222.222.222-22', '51922222222', 'São Leopoldo', 'RS', '["saude", "enfermagem"]', 'parcial', 'B'),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Roberto Dias', '333.333.333-33', '51933333333', 'Porto Alegre', 'RS', '["tech", "dados"]', 'fim_de_semana', NULL);

-- Inserindo Necessidades
INSERT INTO needs (id, title, description, institution_id, required_skill, volunteers_needed, urgency_level, location_city, location_state, status) VALUES
('44444444-4444-4444-4444-444444444444', 'Motoristas para Resgate', 'Precisamos de motoristas com CNH D para conduzir vans de resgate em áreas alagadas.', '11111111-1111-1111-1111-111111111111', 'motorista', 5, 'critica', 'Porto Alegre', 'RS', 'open'),
('55555555-5555-5555-5555-555555555555', 'Triagem Médica', 'Enfermeiros para auxiliar na triagem de desabrigados.', '22222222-2222-2222-2222-222222222222', 'saude', 3, 'alta', 'São Leopoldo', 'RS', 'open');
