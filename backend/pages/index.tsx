import { useEffect, useState } from 'react'

interface DashboardData {
  volunteers_total: number
  institutions_total: number
  open_needs_total: number
  critical_needs_total: number
  matches_total: number
  bottlenecks: { need_id: string; title: string; urgency_level: string; reason: string }[]
}

interface Need {
  id: string
  title: string
  required_skill: string
  urgency_level: string
  location_city: string
  volunteers_needed: number
  status: string
}

const API_BASE = 'https://voluntai-hackathon-ibm.vercel.app/api'

export default function Presentation() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null)
  const [needs, setNeeds] = useState<Need[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/dashboard/summary`).then(r => r.json()),
      fetch(`${API_BASE}/needs`).then(r => r.json()),
    ])
      .then(([dash, needsData]) => {
        setDashboard(dash)
        setNeeds(needsData.items?.slice(0, 6) || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const styles = {
    page: {
      minHeight: '100vh',
      margin: 0,
      background: '#0a0e1a',
      color: '#e2e8f0',
      fontFamily: '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif',
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0 32px',
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center' as const,
      position: 'relative' as const,
      overflow: 'hidden',
    },
    heroGlow1: {
      position: 'absolute' as const,
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
      top: '-200px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '50%',
      pointerEvents: 'none' as const,
    },
    heroGlow2: {
      position: 'absolute' as const,
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
      bottom: '-100px',
      right: '-100px',
      borderRadius: '50%',
      pointerEvents: 'none' as const,
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(59,130,246,0.15)',
      border: '1px solid rgba(59,130,246,0.3)',
      borderRadius: '999px',
      padding: '6px 16px',
      fontSize: '13px',
      fontWeight: 600,
      color: '#60a5fa',
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
      marginBottom: '24px',
    },
    title: {
      fontSize: 'clamp(48px, 8vw, 80px)',
      fontWeight: 800,
      lineHeight: 1.1,
      margin: '0 0 16px',
      background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 'clamp(18px, 3vw, 24px)',
      fontWeight: 400,
      color: '#94a3b8',
      maxWidth: '680px',
      margin: '0 auto 32px',
    },
    section: {
      padding: '80px 0',
      position: 'relative' as const,
    },
    sectionTitle: {
      fontSize: 'clamp(28px, 5vw, 40px)',
      fontWeight: 700,
      marginBottom: '12px',
      color: '#f1f5f9',
    },
    sectionSubtitle: {
      fontSize: '16px',
      color: '#94a3b8',
      marginBottom: '40px',
      maxWidth: '600px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      borderRadius: '16px',
      padding: '28px',
      backdropFilter: 'blur(12px)',
      transition: 'transform 0.2s, border-color 0.2s',
    },
    cardIcon: {
      fontSize: '28px',
      marginBottom: '12px',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '8px',
      color: '#f1f5f9',
    },
    cardText: {
      fontSize: '14px',
      color: '#94a3b8',
      lineHeight: 1.6,
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '16px',
      marginBottom: '32px',
    },
    statCard: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center' as const,
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #60a5fa, #34d399)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
    },
    statLabel: {
      fontSize: '13px',
      color: '#94a3b8',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      marginTop: '4px',
    },
    archBox: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '12px',
      padding: '20px',
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      borderRadius: '12px',
      textAlign: 'center' as const,
    },
    archArrow: {
      fontSize: '24px',
      color: '#475569',
      textAlign: 'center' as const,
      padding: '4px 0',
    },
    archLabel: {
      fontSize: '11px',
      color: '#64748b',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
    },
    archTitle: {
      fontSize: '15px',
      fontWeight: 600,
      color: '#e2e8f0',
    },
    needRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 18px',
      background: 'rgba(30, 41, 59, 0.4)',
      borderRadius: '10px',
      borderLeft: '3px solid',
      marginBottom: '8px',
    },
    urgencyCritical: { borderLeftColor: '#ef4444' },
    urgencyHigh: { borderLeftColor: '#f59e0b' },
    urgencyMedium: { borderLeftColor: '#3b82f6' },
    urgencyLow: { borderLeftColor: '#6b7280' },
    needTitle: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#e2e8f0',
      flex: 1,
    },
    needBadge: {
      fontSize: '11px',
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: '999px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    videoSection: {
      background: 'rgba(15, 23, 42, 0.8)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(148, 163, 184, 0.1)',
    },
    apiLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      borderRadius: '10px',
      color: '#60a5fa',
      fontSize: '13px',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      textDecoration: 'none',
      transition: 'background 0.2s',
    },
    divider: {
      border: 'none',
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
      margin: '0',
    },
    footer: {
      padding: '40px 0',
      textAlign: 'center' as const,
      color: '#475569',
      fontSize: '13px',
    },
    flowGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0',
      maxWidth: '500px',
      margin: '0 auto',
    },
    agentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
    },
    agentCard: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center' as const,
    },
    agentIcon: {
      fontSize: '32px',
      marginBottom: '8px',
    },
    agentName: {
      fontSize: '15px',
      fontWeight: 600,
      color: '#e2e8f0',
      marginBottom: '4px',
    },
    agentDesc: {
      fontSize: '12px',
      color: '#94a3b8',
    },
  }

  const getUrgencyStyle = (level: string) => {
    switch (level) {
      case 'critica': return styles.urgencyCritical
      case 'alta': return styles.urgencyHigh
      case 'media': return styles.urgencyMedium
      default: return styles.urgencyLow
    }
  }

  const getUrgencyBadgeBg = (level: string) => {
    switch (level) {
      case 'critica': return { background: 'rgba(239,68,68,0.15)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.3)' }
      case 'alta': return { background: 'rgba(245,158,11,0.15)', color: '#fcd34d', border: '1px solid rgba(245,158,11,0.3)' }
      case 'media': return { background: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }
      default: return { background: 'rgba(107,114,128,0.15)', color: '#d1d5db', border: '1px solid rgba(107,114,128,0.3)' }
    }
  }

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroGlow1} />
        <div style={styles.heroGlow2} />
        <div style={{ ...styles.container, position: 'relative' as const, zIndex: 1 }}>
          <div style={styles.badge}>🏆 Hackathon UNASP + IBM 2026</div>
          <h1 style={styles.title}>VoluntAI</h1>
          <p style={styles.subtitle}>
            Orquestrando o voluntariado inteligente para situações de crise.
            Conectando quem quer ajudar com quem precisa — com velocidade e precisão.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <a href="#demo" style={{ ...styles.apiLink, background: 'rgba(59,130,246,0.2)', borderColor: 'rgba(59,130,246,0.4)', color: '#93c5fd', fontWeight: 600 }}>
              ▶ Ver Demo
            </a>
            <a href="#api" style={styles.apiLink}>
              🔗 API Endpoints
            </a>
            <a href="https://github.com/duribeiro/voluntai-hackathon-ibm" target="_blank" rel="noopener" style={styles.apiLink}>
              ⭐ GitHub
            </a>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* PROBLEMA */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>O Problema</div>
          <h2 style={styles.sectionTitle}>Em uma crise, cada minuto conta</h2>
          <p style={styles.sectionSubtitle}>
            Enchentes no RS deixaram 500 mil desalojados. Voluntários querem ajudar, mas não sabem onde.
            Instituições precisam de gente, mas não conseguem filtrar e coordenar.
          </p>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🔍</div>
              <div style={styles.cardTitle}>Desconexão</div>
              <div style={styles.cardText}>Voluntários com habilidades certas não encontram as necessidades certas. Instituições não filtram por competência ou disponibilidade.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>⏱️</div>
              <div style={styles.cardTitle}>Lentidão</div>
              <div style={styles.cardText}>Processos manuais de cadastro e triagem demoram horas. Em crise, horas custam vidas.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>📡</div>
              <div style={styles.cardTitle}>Fragmentação</div>
              <div style={styles.cardText}>Sem radar de alertas, sem priorização automática, sem comunicação coordenada entre frente de crise e retaguarda.</div>
            </div>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* SOLUÇÃO */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>A Solução</div>
          <h2 style={styles.sectionTitle}>IA agêntica que conecta e coordena</h2>
          <p style={styles.sectionSubtitle}>
            VoluntAI usa agentes de IA no IBM watsonx Orchestrate para orquestrar o ciclo completo:
            cadastro → classificação → matching → notificação → radar de crises.
          </p>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardIcon}>📋</div>
              <div style={styles.cardTitle}>Cadastro inteligente</div>
              <div style={styles.cardText}>Conversa natural. O agente coleta dados, valida e registra — sem formulário, sem atrito.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>⚡</div>
              <div style={styles.cardTitle}>Classificação de urgência</div>
              <div style={styles.cardText}>IA analisa a descrição da necessidade e classifica criticidade automaticamente: crítica, alta, média ou baixa.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🎯</div>
              <div style={styles.cardTitle}>Matching por compatibilidade</div>
              <div style={styles.cardText}>Cruza habilidades, localização e disponibilidade. Retorna os 3 melhores voluntários para cada necessidade.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🔔</div>
              <div style={styles.cardTitle}>Notificação acionável</div>
              <div style={styles.cardText}>Voluntários são notificados com contexto completo: onde, o quê, por quê, e quão urgente.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>🌪️</div>
              <div style={styles.cardTitle}>Radar de crises</div>
              <div style={styles.cardText}>Alertas simulados de Cemaden/Inmet são processados e transformados em necessidades acionáveis automaticamente.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardIcon}>📊</div>
              <div style={styles.cardTitle}>Dashboard operacional</div>
              <div style={styles.cardText}>Visão em tempo real: gargalos, necessidades críticas e gap de voluntários por região.</div>
            </div>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* ARQUITETURA */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>Arquitetura</div>
          <h2 style={styles.sectionTitle}>Fluxo agêntico end-to-end</h2>
          <p style={styles.sectionSubtitle}>
            O usuário conversa com um orquestrador que roteia para agentes especializados — tudo via IBM watsonx Orchestrate.
          </p>

          <div style={styles.flowGrid}>
            <div style={styles.archBox}>
              <div style={styles.archLabel}>Interface</div>
              <div style={{ fontSize: '28px' }}>👤</div>
              <div style={styles.archTitle}>Usuário</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Voluntário ou Instituição</div>
            </div>
            <div style={styles.archArrow}>▼</div>
            <div style={{ ...styles.archBox, borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.08)' }}>
              <div style={styles.archLabel}>Orquestração</div>
              <div style={{ fontSize: '28px' }}>🧠</div>
              <div style={styles.archTitle}>Orchestrator</div>
              <div style={{ fontSize: '12px', color: '#60a5fa' }}>IBM watsonx Orchestrate</div>
            </div>
            <div style={styles.archArrow}>▼</div>
            <div style={styles.agentGrid}>
              <div style={styles.agentCard}>
                <div style={styles.agentIcon}>📝</div>
                <div style={styles.agentName}>Cadastro</div>
                <div style={styles.agentDesc}>Registra voluntários e instituições</div>
              </div>
              <div style={styles.agentCard}>
                <div style={styles.agentIcon}>🎯</div>
                <div style={styles.agentName}>Matching</div>
                <div style={styles.agentDesc}>Cruza perfis com necessidades</div>
              </div>
              <div style={styles.agentCard}>
                <div style={styles.agentIcon}>🔔</div>
                <div style={styles.agentName}>Notificação</div>
                <div style={styles.agentDesc}>Alerta voluntários compatíveis</div>
              </div>
              <div style={styles.agentCard}>
                <div style={styles.agentIcon}>🌪️</div>
                <div style={styles.agentName}>Radar</div>
                <div style={styles.agentDesc}>Processa alertas de crise</div>
              </div>
            </div>
            <div style={styles.archArrow}>▼</div>
            <div style={{ ...styles.archBox, borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.05)' }}>
              <div style={styles.archLabel}>API</div>
              <div style={{ fontSize: '28px' }}>🔗</div>
              <div style={styles.archTitle}>REST API</div>
              <div style={{ fontSize: '12px', color: '#34d399' }}>10 endpoints • Next.js • Vercel</div>
            </div>
            <div style={styles.archArrow}>▼</div>
            <div style={{ ...styles.archBox, borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.05)' }}>
              <div style={styles.archLabel}>Dados</div>
              <div style={{ fontSize: '28px' }}>🗄️</div>
              <div style={styles.archTitle}>Mock Data</div>
              <div style={{ fontSize: '12px', color: '#c084fc' }}>30 voluntários • 7 instituições • 12 necessidades</div>
            </div>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* DASHBOARD AO VIVO */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>Dados ao Vivo</div>
          <h2 style={styles.sectionTitle}>Dashboard operacional</h2>
          <p style={styles.sectionSubtitle}>
            Dados reais da API, atualizados em tempo real.
          </p>

          {loading ? (
            <div style={{ textAlign: 'center' as const, padding: '40px', color: '#64748b' }}>
              Carregando dados...
            </div>
          ) : dashboard ? (
            <>
              <div style={styles.statGrid}>
                <div style={styles.statCard}>
                  <span style={styles.statNumber}>{dashboard.volunteers_total}</span>
                  <div style={styles.statLabel}>Voluntários</div>
                </div>
                <div style={styles.statCard}>
                  <span style={styles.statNumber}>{dashboard.institutions_total}</span>
                  <div style={styles.statLabel}>Instituições</div>
                </div>
                <div style={styles.statCard}>
                  <span style={styles.statNumber}>{dashboard.open_needs_total}</span>
                  <div style={styles.statLabel}>Necessidades</div>
                </div>
                <div style={styles.statCard}>
                  <span style={styles.statNumber}>{dashboard.critical_needs_total}</span>
                  <div style={styles.statLabel}>Críticas</div>
                </div>
                <div style={styles.statCard}>
                  <span style={styles.statNumber}>{dashboard.matches_total}</span>
                  <div style={styles.statLabel}>Matches</div>
                </div>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#f1f5f9' }}>
                🚨 Gargalos Críticos
              </h3>
              {dashboard.bottlenecks?.map((b: any) => (
                <div key={b.need_id} style={{ ...styles.needRow, ...getUrgencyStyle(b.urgency_level) }}>
                  <div style={styles.needTitle}>{b.title}</div>
                  <span style={{ ...styles.needBadge, ...getUrgencyBadgeBg(b.urgency_level) as any }}>
                    {b.urgency_level}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <div style={{ textAlign: 'center' as const, padding: '40px', color: '#64748b' }}>
              Não foi possível carregar os dados.
            </div>
          )}
        </div>
      </section>

      <hr style={styles.divider} />

      {/* NECESSIDADES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>Necessidades</div>
          <h2 style={styles.sectionTitle}>Necessidades ativas por urgência</h2>
          <p style={styles.sectionSubtitle}>
            Dados da API mostrando priorização automática por classificação de urgência.
          </p>

          {needs.map((need) => (
            <div key={need.id} style={{ ...styles.needRow, ...getUrgencyStyle(need.urgency_level) }}>
              <div style={{ minWidth: '70px', fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>
                {need.id}
              </div>
              <div style={styles.needTitle}>{need.title}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginRight: '8px' }}>
                {need.location_city} • {need.required_skill}
              </div>
              <span style={{ ...styles.needBadge, ...getUrgencyBadgeBg(need.urgency_level) as any }}>
                {need.urgency_level}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr style={styles.divider} />

      {/* DEMO VIDEO */}
      <section id="demo" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>🎥 Demo</div>
          <h2 style={styles.sectionTitle}>Veja o VoluntAI em ação</h2>
          <p style={styles.sectionSubtitle}>
            Demonstração completa do fluxo: cadastro, classificação de urgência, matching e radar de crises.
          </p>
          <div style={styles.videoSection}>
            <video
              controls
              preload="metadata"
              poster=""
              src="/video/demo-voluntai.mp4"
              style={{
                width: '100%',
                maxHeight: '70vh',
                background: '#000',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* AGENTES WATSONX */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>Agentes</div>
          <h2 style={styles.sectionTitle}>4 agentes especializados + 1 orquestrador</h2>
          <p style={styles.sectionSubtitle}>
            Cada agente tem instruções dedicadas e tools mapeadas via OpenAPI. O Orchestrator roteia automaticamente.
          </p>
          <div style={styles.agentGrid}>
            <div style={{ ...styles.agentCard, borderColor: 'rgba(59,130,246,0.3)' }}>
              <div style={styles.agentIcon}>🧠</div>
              <div style={styles.agentName}>Orchestrator</div>
              <div style={styles.agentDesc}>Ponto único de contato. Roteia, classifica e coordena todos os fluxos.</div>
            </div>
            <div style={{ ...styles.agentCard, borderColor: 'rgba(16,185,129,0.3)' }}>
              <div style={styles.agentIcon}>📝</div>
              <div style={styles.agentName}>Cadastro</div>
              <div style={styles.agentDesc}>Registra voluntários e instituições com validação conversacional.</div>
            </div>
            <div style={{ ...styles.agentCard, borderColor: 'rgba(245,158,11,0.3)' }}>
              <div style={styles.agentIcon}>🎯</div>
              <div style={styles.agentName}>Matching</div>
              <div style={styles.agentDesc}>Cruza habilidades + localização + disponibilidade para encontrar o match perfeito.</div>
            </div>
            <div style={{ ...styles.agentCard, borderColor: 'rgba(239,68,68,0.3)' }}>
              <div style={styles.agentIcon}>🔔</div>
              <div style={styles.agentName}>Notificação</div>
              <div style={styles.agentDesc}>Alerta voluntários compatíveis com contexto completo da necessidade.</div>
            </div>
            <div style={{ ...styles.agentCard, borderColor: 'rgba(168,85,247,0.3)' }}>
              <div style={styles.agentIcon}>🌪️</div>
              <div style={styles.agentName}>Radar</div>
              <div style={styles.agentDesc}>Processa alertas Cemaden/Inmet e transforma em necessidades acionáveis.</div>
            </div>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* API ENDPOINTS */}
      <section id="api" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>API</div>
          <h2 style={styles.sectionTitle}>10 endpoints funcionais</h2>
          <p style={styles.sectionSubtitle}>
            Todos rodando e documentados. Clique para ver a resposta ao vivo.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
            <a href={`${API_BASE}/health`} target="_blank" rel="noopener" style={styles.apiLink}>
              🟢 GET /api/health — Health check
            </a>
            <a href={`${API_BASE}/volunteers`} target="_blank" rel="noopener" style={styles.apiLink}>
              👥 GET /api/volunteers — Listar voluntários
            </a>
            <a href={`${API_BASE}/volunteers/vol-001/recommendations`} target="_blank" rel="noopener" style={styles.apiLink}>
              🎯 GET /api/volunteers/vol-001/recommendations — Recomendações
            </a>
            <a href={`${API_BASE}/institutions`} target="_blank" rel="noopener" style={styles.apiLink}>
              🏛️ GET /api/institutions — Listar instituições
            </a>
            <a href={`${API_BASE}/needs`} target="_blank" rel="noopener" style={styles.apiLink}>
              📋 GET /api/needs — Listar necessidades
            </a>
            <a href={`${API_BASE}/dashboard/summary`} target="_blank" rel="noopener" style={styles.apiLink}>
              📊 GET /api/dashboard/summary — Dashboard
            </a>
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* STACK */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>Stack</div>
          <h2 style={styles.sectionTitle}>Tecnologias</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🧠', name: 'IBM watsonx Orchestrate', desc: 'Orquestração de agentes com tools OpenAPI' },
              { icon: '🤖', name: 'IBM watsonx.ai', desc: 'Modelos Granite para classificação de urgência' },
              { icon: '⚡', name: 'Next.js + TypeScript', desc: 'API REST com 10 endpoints documentados' },
              { icon: '☁️', name: 'Vercel', desc: 'Deploy contínuo, HTTPS, CDN global' },
              { icon: '📄', name: 'OpenAPI 3.0', desc: 'Spec importada diretamente no Orchestrate' },
              { icon: '🗄️', name: 'Dados mockados RS 2024', desc: '30 voluntários, 7 instituições, 12 necessidades' },
            ].map((tech) => (
              <div key={tech.name} style={{ ...styles.card, padding: '20px' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{tech.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>{tech.name}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={styles.divider} />

      {/* EQUIPE */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.badge}>Equipe</div>
          <h2 style={styles.sectionTitle}>Eduardo Ribeiro + VoluntAI</h2>
          <p style={styles.sectionSubtitle}>
            Desenvolvimento full-stack, arquitetura de agentes e integração com watsonx.
            Pesquisa com dados reais das enchentes RS 2024.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          <div style={{ marginBottom: '16px' }}>
            <a href="https://github.com/duribeiro/voluntai-hackathon-ibm" target="_blank" rel="noopener" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}>
              ⭐ github.com/duribeiro/voluntai-hackathon-ibm
            </a>
          </div>
          <div>VoluntAI — Hackathon IA Descomplicada UNASP + IBM 2026</div>
          <div style={{ marginTop: '4px' }}>Orquestrando o voluntariado inteligente para situações de crise 🤝</div>
        </div>
      </div>
    </div>
  )
}