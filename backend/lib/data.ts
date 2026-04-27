// Dados mockados - VoluntAI
// Contexto: Enchentes RS 2024

export interface Volunteer {
  id: string
  name: string
  email: string
  phone?: string
  skills: string[]
  city: string
  state: string
  availability: 'immediate' | 'today' | 'this_week' | 'weekends'
  created_at: string
}

export interface Institution {
  id: string
  name: string
  type: 'ngo' | 'government' | 'church' | 'hospital' | 'shelter'
  city: string
  state: string
  contact_name?: string
  contact_phone?: string
  capacity?: number
  created_at: string
}

export interface Need {
  id: string
  institution_id: string
  type: 'health' | 'food' | 'shelter' | 'rescue' | 'logistics' | 'cleaning' | 'transport'
  description: string
  urgency: 'critical' | 'high' | 'medium' | 'low'
  urgency_justification?: string
  city: string
  state: string
  quantity_needed: number
  quantity_filled: number
  status: 'open' | 'in_progress' | 'closed'
  required_skills: string[]
  created_at: string
}

export interface Match {
  id: string
  volunteer_id: string
  need_id: string
  score: number
  status: 'pending' | 'accepted' | 'rejected' | 'completed'
  created_at: string
}

export interface Notification {
  id: string
  volunteer_id: string
  need_id?: string
  message: string
  type: 'match' | 'urgent' | 'system'
  status: 'created' | 'sent' | 'read'
  created_at: string
}

export interface ExternalAlert {
  id: string
  source: 'cemaden' | 'inmet' | 'gdacs' | 'twitter'
  title: string
  description: string
  city: string
  state: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  created_at: string
  processed: boolean
  need_created?: boolean
}

// Seed data - EXPANDIDO para demonstrar matching robusto
export const volunteers: Volunteer[] = [
  // ENFERMAGEM/SAÚDE (10)
  {
    id: 'vol-001',
    name: 'Carlos Eduardo Silva',
    email: 'carlos.silva@email.com',
    phone: '(51) 98765-4321',
    skills: ['enfermagem', 'primeiros_socorros', 'motorista'],
    city: 'Canoas',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T10:00:00Z'
  },
  {
    id: 'vol-006',
    name: 'Fernanda Oliveira',
    email: 'fernanda.oliveira@email.com',
    phone: '(51) 97654-3210',
    skills: ['enfermagem', 'vacinacao', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T11:00:00Z'
  },
  {
    id: 'vol-007',
    name: 'Lucas Mendes',
    email: 'lucas.mendes@email.com',
    phone: '(51) 96543-2109',
    skills: ['medico', 'urgencia', 'enfermagem'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T09:30:00Z'
  },
  {
    id: 'vol-008',
    name: 'Camila Santos',
    email: 'camila.santos@email.com',
    skills: ['enfermagem', 'pediatria', 'primeiros_socorros'],
    city: 'Canoas',
    state: 'RS',
    availability: 'this_week',
    created_at: '2024-05-14T15:00:00Z'
  },
  {
    id: 'vol-009',
    name: 'Pedro Henrique',
    email: 'pedro.henrique@email.com',
    phone: '(51) 95432-1098',
    skills: ['fisioterapia', 'reabilitacao', 'primeiros_socorros'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T07:00:00Z'
  },
  {
    id: 'vol-010',
    name: 'Juliana Costa',
    email: 'juliana.costa@email.com',
    phone: '(51) 94321-0987',
    skills: ['enfermagem', 'urgencia', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T12:00:00Z'
  },
  // COZINHA/ALIMENTACAO (8)
  {
    id: 'vol-002',
    name: 'Maria Fernanda Costa',
    email: 'maria.costa@email.com',
    phone: '(51) 91234-5678',
    skills: ['cozinha', 'logistica', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T11:30:00Z'
  },
  {
    id: 'vol-011',
    name: 'Antonio Pereira',
    email: 'antonio.pereira@email.com',
    phone: '(51) 93210-9876',
    skills: ['cozinha', 'nutricao', 'logistica'],
    city: 'Canoas',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T08:30:00Z'
  },
  {
    id: 'vol-012',
    name: 'Sandra Lima',
    email: 'sandra.lima@email.com',
    skills: ['cozinha', 'panificacao', 'organizacao'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'this_week',
    created_at: '2024-05-14T16:00:00Z'
  },
  {
    id: 'vol-013',
    name: 'Marcos Souza',
    email: 'marcos.souza@email.com',
    phone: '(51) 92109-8765',
    skills: ['cozinha', 'distribuicao', 'motorista'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T10:30:00Z'
  },
  // RESGATE/MOTORISTAS (12)
  {
    id: 'vol-003',
    name: 'João Pedro Santos',
    email: 'joao.santos@email.com',
    skills: ['resgate', 'natação', 'motorista'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T09:00:00Z'
  },
  {
    id: 'vol-005',
    name: 'Roberto Almeida',
    email: 'roberto.almeida@email.com',
    skills: ['construcao', 'transporte', 'motorista'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T08:00:00Z'
  },
  {
    id: 'vol-014',
    name: 'Gabriel Martins',
    email: 'gabriel.martins@email.com',
    phone: '(51) 91098-7654',
    skills: ['resgate', 'primeiros_socorros', 'motorista'],
    city: 'Canoas',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T06:00:00Z'
  },
  {
    id: 'vol-015',
    name: 'Ricardo Barbosa',
    email: 'ricardo.barbosa@email.com',
    phone: '(51) 90987-6543',
    skills: ['resgate', 'barco', 'natação'],
    city: 'Canoas',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T05:00:00Z'
  },
  {
    id: 'vol-016',
    name: 'Diego Ferreira',
    email: 'diego.ferreira@email.com',
    phone: '(51) 99876-5432',
    skills: ['resgate', 'altura', 'construcao'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T11:00:00Z'
  },
  {
    id: 'vol-017',
    name: 'André Silva',
    email: 'andre.silva@email.com',
    skills: ['transporte', 'caminhao', 'motorista'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T07:30:00Z'
  },
  {
    id: 'vol-018',
    name: 'Felipe Costa',
    email: 'felipe.costa@email.com',
    phone: '(51) 98765-4321',
    skills: ['transporte', 'van', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T09:30:00Z'
  },
  // PSICOLOGIA/APOIO (6)
  {
    id: 'vol-004',
    name: 'Ana Beatriz Lima',
    email: 'ana.lima@email.com',
    phone: '(51) 99876-5432',
    skills: ['psicologia', 'apoio_emocional', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'this_week',
    created_at: '2024-05-14T14:00:00Z'
  },
  {
    id: 'vol-019',
    name: 'Patrícia Souza',
    email: 'patricia.souza@email.com',
    phone: '(51) 97654-3210',
    skills: ['psicologia', 'criancas', 'apoio_emocional'],
    city: 'Canoas',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T10:00:00Z'
  },
  {
    id: 'vol-020',
    name: 'Mariana Oliveira',
    email: 'mariana.oliveira@email.com',
    skills: ['psicologia', 'trauma', 'apoio_emocional'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'this_week',
    created_at: '2024-05-14T13:00:00Z'
  },
  // LIMPEZA/CONSTRUCAO (8)
  {
    id: 'vol-021',
    name: 'Bruno Santos',
    email: 'bruno.santos@email.com',
    phone: '(51) 96543-2109',
    skills: ['limpeza', 'desinfecao', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T08:00:00Z'
  },
  {
    id: 'vol-022',
    name: 'Carlos Henrique',
    email: 'carlos.henrique@email.com',
    phone: '(51) 95432-1098',
    skills: ['construcao', 'reformas', 'transporte'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T11:00:00Z'
  },
  {
    id: 'vol-023',
    name: 'Thiago Oliveira',
    email: 'thiago.oliveira@email.com',
    skills: ['limpeza', 'mudancas', 'motorista'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T07:00:00Z'
  },
  {
    id: 'vol-024',
    name: 'Leonardo Souza',
    email: 'leonardo.souza@email.com',
    phone: '(51) 94321-0987',
    skills: ['construcao', 'pintura', 'reparos'],
    city: 'Canoas',
    state: 'RS',
    availability: 'this_week',
    created_at: '2024-05-14T15:30:00Z'
  },
  // VARIADOS (6)
  {
    id: 'vol-025',
    name: 'Fernanda Lima',
    email: 'fernanda.lima@email.com',
    phone: '(51) 93210-9876',
    skills: ['traducao', 'comunicacao', 'organizacao'],
    city: 'Canoas',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T10:30:00Z'
  },
  {
    id: 'vol-026',
    name: 'Daniel Costa',
    email: 'daniel.costa@email.com',
    phone: '(51) 92109-8765',
    skills: ['ti', 'internet', 'comunicacao'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T08:30:00Z'
  },
  {
    id: 'vol-027',
    name: 'Amanda Souza',
    email: 'amanda.souza@email.com',
    skills: ['criancas', 'educacao', 'brincadeira'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T09:00:00Z'
  },
  {
    id: 'vol-028',
    name: 'Rafael Mendes',
    email: 'rafael.mendes@email.com',
    phone: '(51) 91098-7654',
    skills: ['animais', 'veterinario', 'resgate'],
    city: 'Canoas',
    state: 'RS',
    availability: 'immediate',
    created_at: '2024-05-15T07:30:00Z'
  },
  {
    id: 'vol-029',
    name: 'Letícia Barbosa',
    email: 'leticia.barbosa@email.com',
    phone: '(51) 90987-6543',
    skills: ['idosos', 'cuidado', 'enfermagem'],
    city: 'Porto Alegre',
    state: 'RS',
    availability: 'this_week',
    created_at: '2024-05-14T14:30:00Z'
  },
  {
    id: 'vol-030',
    name: 'Vitor Hugo',
    email: 'vitor.hugo@email.com',
    skills: ['fotografia', 'midia', 'comunicacao'],
    city: 'Guaíba',
    state: 'RS',
    availability: 'today',
    created_at: '2024-05-15T11:30:00Z'
  }
]

export const institutions: Institution[] = [
  {
    id: 'inst-001',
    name: 'Abrigo Canoas Centro',
    type: 'shelter',
    city: 'Canoas',
    state: 'RS',
    contact_name: 'Paula Gomes',
    contact_phone: '(51) 3333-4444',
    capacity: 200,
    created_at: '2024-05-10T00:00:00Z'
  },
  {
    id: 'inst-002',
    name: 'Defesa Civil Canoas',
    type: 'government',
    city: 'Canoas',
    state: 'RS',
    contact_name: 'Comandante Silva',
    contact_phone: '(51) 3333-5555',
    created_at: '2024-05-10T00:00:00Z'
  },
  {
    id: 'inst-003',
    name: 'Hospital São Lucas',
    type: 'hospital',
    city: 'Porto Alegre',
    state: 'RS',
    contact_name: 'Dra. Amanda Rocha',
    contact_phone: '(51) 3333-6666',
    capacity: 150,
    created_at: '2024-05-10T00:00:00Z'
  },
  {
    id: 'inst-004',
    name: 'Abrigo Guaíba',
    type: 'shelter',
    city: 'Guaíba',
    state: 'RS',
    contact_name: 'João Batista',
    contact_phone: '(51) 3333-7777',
    capacity: 120,
    created_at: '2024-05-10T00:00:00Z'
  },
  {
    id: 'inst-005',
    name: 'Igreja São Pedro',
    type: 'church',
    city: 'Canoas',
    state: 'RS',
    contact_name: 'Padre Miguel',
    contact_phone: '(51) 3333-8888',
    capacity: 80,
    created_at: '2024-05-10T00:00:00Z'
  },
  {
    id: 'inst-006',
    name: 'Hospital Porto Alegre',
    type: 'hospital',
    city: 'Porto Alegre',
    state: 'RS',
    contact_name: 'Dr. Ricardo Souza',
    contact_phone: '(51) 3333-9999',
    capacity: 300,
    created_at: '2024-05-10T00:00:00Z'
  },
  {
    id: 'inst-007',
    name: 'Defesa Civil Guaíba',
    type: 'government',
    city: 'Guaíba',
    state: 'RS',
    contact_name: 'Tenente Costa',
    contact_phone: '(51) 3333-0000',
    created_at: '2024-05-10T00:00:00Z'
  }
]

export const needs: Need[] = [
  {
    id: 'need-001',
    institution_id: 'inst-001',
    type: 'health',
    description: 'Abrigo lotado em Canoas precisa de apoio de saúde para famílias desalojadas. Precisamos de técnicos de enfermagem para triagem básica.',
    urgency: 'critical',
    urgency_justification: 'Abrigo lotado acima da capacidade, risco de surto de doenças',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 5,
    quantity_filled: 0,
    status: 'open',
    required_skills: ['enfermagem', 'primeiros_socorros'],
    created_at: '2024-05-15T12:00:00Z'
  },
  {
    id: 'need-002',
    institution_id: 'inst-002',
    type: 'rescue',
    description: 'Resgate em área alagada. Precisa de voluntários com capacidade de natação e resgate.',
    urgency: 'critical',
    urgency_justification: 'Pessoas presas em casas alagadas, risco de vida imediato',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 10,
    quantity_filled: 2,
    status: 'in_progress',
    required_skills: ['resgate', 'natação'],
    created_at: '2024-05-15T08:00:00Z'
  },
  {
    id: 'need-003',
    institution_id: 'inst-001',
    type: 'food',
    description: 'Preparo de refeições para 200 pessoas no abrigo.',
    urgency: 'high',
    urgency_justification: 'Alimentação essencial para população desalojada',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 8,
    quantity_filled: 3,
    status: 'open',
    required_skills: ['cozinha'],
    created_at: '2024-05-15T11:00:00Z'
  },
  {
    id: 'need-004',
    institution_id: 'inst-003',
    type: 'health',
    description: 'Apoio psicológico para vítimas do desastre.',
    urgency: 'medium',
    urgency_justification: 'Trauma pós-desastre requer atendimento emocional',
    city: 'Porto Alegre',
    state: 'RS',
    quantity_needed: 3,
    quantity_filled: 1,
    status: 'open',
    required_skills: ['psicologia', 'apoio_emocional'],
    created_at: '2024-05-14T16:00:00Z'
  },
  {
    id: 'need-005',
    institution_id: 'inst-004',
    type: 'shelter',
    description: 'Limpeza e desinfecção de abrigo após enchente. Necessário limpar 80 leitos antes de receber novas famílias.',
    urgency: 'high',
    urgency_justification: 'Sem condições de higiene para receber desalojados',
    city: 'Guaíba',
    state: 'RS',
    quantity_needed: 6,
    quantity_filled: 0,
    status: 'open',
    required_skills: ['limpeza', 'desinfecao'],
    created_at: '2024-05-15T13:00:00Z'
  },
  {
    id: 'need-006',
    institution_id: 'inst-005',
    type: 'food',
    description: 'Distribuição de água e alimentos para famílias em área isolada. Necessário veículo 4x4.',
    urgency: 'critical',
    urgency_justification: 'Acesso bloqueado, famílias sem suprimentos há 48h',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 4,
    quantity_filled: 1,
    status: 'open',
    required_skills: ['transporte', 'distribuicao'],
    created_at: '2024-05-15T14:00:00Z'
  },
  {
    id: 'need-007',
    institution_id: 'inst-006',
    type: 'health',
    description: 'Suporte médico emergencial em hospital lotado. Precisa de médicos e enfermeiros para plantão de 12h.',
    urgency: 'critical',
    urgency_justification: 'Hospital lotado, pacientes aguardando atendimento há 6h',
    city: 'Porto Alegre',
    state: 'RS',
    quantity_needed: 8,
    quantity_filled: 3,
    status: 'open',
    required_skills: ['medico', 'urgencia', 'enfermagem'],
    created_at: '2024-05-15T10:30:00Z'
  },
  {
    id: 'need-008',
    institution_id: 'inst-007',
    type: 'rescue',
    description: 'Remoção de entulhos e abertura de vias. Precisa de operários com experiência em construção civil.',
    urgency: 'high',
    urgency_justification: 'Vias bloqueadas impedem chegada de ajuda',
    city: 'Guaíba',
    state: 'RS',
    quantity_needed: 12,
    quantity_filled: 4,
    status: 'in_progress',
    required_skills: ['construcao', 'transporte'],
    created_at: '2024-05-15T09:00:00Z'
  },
  {
    id: 'need-009',
    institution_id: 'inst-001',
    type: 'logistics',
    description: 'Organização e catalogação de doações recebidas. Separação de roupas, alimentos e higiene.',
    urgency: 'medium',
    urgency_justification: 'Donações acumuladas sem organização',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 6,
    quantity_filled: 2,
    status: 'open',
    required_skills: ['logistica', 'organizacao'],
    created_at: '2024-05-14T15:00:00Z'
  },
  {
    id: 'need-010',
    institution_id: 'inst-003',
    type: 'transport',
    description: 'Transporte de pacientes entre abrigos e hospital. Necessário motoristas com veículo próprio.',
    urgency: 'high',
    urgency_justification: 'Ambulâncias insuficientes para demanda',
    city: 'Porto Alegre',
    state: 'RS',
    quantity_needed: 5,
    quantity_filled: 2,
    status: 'open',
    required_skills: ['motorista', 'transporte'],
    created_at: '2024-05-15T11:30:00Z'
  },
  {
    id: 'need-011',
    institution_id: 'inst-002',
    type: 'rescue',
    description: 'Resgate com barcos em áreas inundadas. Equipe de mergulho para verificar casas submersas.',
    urgency: 'critical',
    urgency_justification: 'Pessoas desaparecidas, casas submersas',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 6,
    quantity_filled: 2,
    status: 'in_progress',
    required_skills: ['resgate', 'barco', 'natação'],
    created_at: '2024-05-15T07:00:00Z'
  },
  {
    id: 'need-012',
    institution_id: 'inst-004',
    type: 'health',
    description: 'Atendimento de idosos em abrigo. Cuidados básicos e acompanhamento de medicação.',
    urgency: 'medium',
    urgency_justification: 'Idosos necessitam de cuidados contínuos',
    city: 'Guaíba',
    state: 'RS',
    quantity_needed: 3,
    quantity_filled: 1,
    status: 'open',
    required_skills: ['idosos', 'cuidado', 'enfermagem'],
    created_at: '2024-05-14T14:00:00Z'
  },
  {
    id: 'need-013',
    institution_id: 'inst-005',
    type: 'shelter',
    description: 'Reformas estruturais em igreja para uso como abrigo temporário. Precisa de pedreiros e carpinteiros.',
    urgency: 'high',
    urgency_justification: 'Estrutura comprometida, risco de desabamento parcial',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 4,
    quantity_filled: 0,
    status: 'open',
    required_skills: ['construcao', 'reformas'],
    created_at: '2024-05-15T12:30:00Z'
  },
  {
    id: 'need-014',
    institution_id: 'inst-001',
    type: 'food',
    description: 'Preparo de refeições especiais para diabéticos e celíacos em abrigo.',
    urgency: 'medium',
    urgency_justification: 'Necessidades alimentares específicas de desalojados',
    city: 'Canoas',
    state: 'RS',
    quantity_needed: 2,
    quantity_filled: 0,
    status: 'open',
    required_skills: ['cozinha', 'nutricao'],
    created_at: '2024-05-14T13:00:00Z'
  },
  {
    id: 'need-015',
    institution_id: 'inst-006',
    type: 'health',
    description: 'Atendimento pediátrico emergencial. Crianças com desidratação e infecções.',
    urgency: 'critical',
    urgency_justification: 'Crianças em estado grave, risco de óbito',
    city: 'Porto Alegre',
    state: 'RS',
    quantity_needed: 4,
    quantity_filled: 1,
    status: 'open',
    required_skills: ['medico', 'pediatria', 'urgencia'],
    created_at: '2024-05-15T08:30:00Z'
  }
]

export const matches: Match[] = [
  {
    id: 'match-001',
    volunteer_id: 'vol-002',
    need_id: 'need-003',
    score: 95,
    status: 'accepted',
    created_at: '2024-05-15T13:00:00Z'
  },
  {
    id: 'match-002',
    volunteer_id: 'vol-003',
    need_id: 'need-002',
    score: 98,
    status: 'accepted',
    created_at: '2024-05-15T10:00:00Z'
  }
]

export const notifications: Notification[] = [
  {
    id: 'notif-001',
    volunteer_id: 'vol-002',
    need_id: 'need-003',
    message: 'Maria, seu perfil de cozinha é ideal para a necessidade urgente no Abrigo Canoas Centro. Podemos contar com você?',
    type: 'match',
    status: 'sent',
    created_at: '2024-05-15T13:30:00Z'
  }
]

export const externalAlerts: ExternalAlert[] = [
  {
    id: 'alert-001',
    source: 'cemaden',
    title: 'Alerta de enchente - Rio Jacuí',
    description: 'Nível do rio acima do normal. Áreas de risco em Canoas.',
    city: 'Canoas',
    state: 'RS',
    severity: 'critical',
    created_at: '2024-05-15T06:00:00Z',
    processed: true,
    need_created: true
  },
  {
    id: 'alert-002',
    source: 'inmet',
    title: 'Chuva intensa prevista',
    description: 'Previsão de precipitação acima de 100mm nas próximas 24h.',
    city: 'Porto Alegre',
    state: 'RS',
    severity: 'high',
    created_at: '2024-05-15T07:00:00Z',
    processed: false
  }
]

// Helper functions
export function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
}

export function calculateMatchScore(volunteer: Volunteer, need: Need): number {
  let score = 0
  
  // Skill match (50%)
  const skillMatches = volunteer.skills.filter(s => 
    need.required_skills.some(rs => rs.toLowerCase() === s.toLowerCase())
  ).length
  if (skillMatches > 0) score += 50
  
  // Location match (30%)
  if (volunteer.city.toLowerCase() === need.city.toLowerCase()) score += 30
  
  // Availability match (20%)
  if (volunteer.availability === 'immediate') score += 20
  else if (volunteer.availability === 'today') score += 15
  else if (volunteer.availability === 'this_week') score += 10
  
  return score
}

export function classifyUrgency(description: string): { urgency: Need['urgency'], justification: string } {
  const lower = description.toLowerCase()
  
  // Critical keywords
  if (lower.includes('risco de vida') || lower.includes('lotado') || lower.includes('surto') || 
      lower.includes('presos') || lower.includes('emergência')) {
    return { 
      urgency: 'critical', 
      justification: 'Risco de vida imediato ou condições de segurança comprometidas' 
    }
  }
  
  // High keywords
  if (lower.includes('urgente') || lower.includes('muitas pessoas') || lower.includes('precisa agora') ||
      lower.includes('essencial')) {
    return { 
      urgency: 'high', 
      justification: 'Demanda urgente com impacto significativo' 
    }
  }
  
  // Medium keywords
  if (lower.includes('apoio') || lower.includes('ajuda') || lower.includes('apoio')) {
    return { 
      urgency: 'medium', 
      justification: 'Necessidade importante mas não imediata' 
    }
  }
  
  return { 
    urgency: 'low', 
    justification: 'Demanda rotineira ou de baixa prioridade' 
  }
}
