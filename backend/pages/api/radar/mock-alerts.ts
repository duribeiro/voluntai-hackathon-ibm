import type { NextApiRequest, NextApiResponse } from 'next'
import { externalAlerts, needs, generateId, Need, classifyUrgency } from '../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const { source, title, description, city, state, severity, force_create_need = false } = req.body
  
  if (!source || !title || !description || !city || !state) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  
  // Process alert
  const { urgency, justification } = classifyUrgency(description)
  
  const alert = {
    id: generateId('alert'),
    source,
    title,
    description,
    city,
    state,
    severity: severity || urgency,
    created_at: new Date().toISOString(),
    processed: true,
    need_created: force_create_need
  }
  
  externalAlerts.push(alert as any)
  
  let createdNeed: Need | null = null
  
  // Create need if forced or critical
  if (force_create_need || severity === 'critical') {
    const needType = description.toLowerCase().includes('abrigo') ? 'shelter' :
                     description.toLowerCase().includes('resgate') ? 'rescue' :
                     description.toLowerCase().includes('saúde') || description.toLowerCase().includes('enfermagem') ? 'health' :
                     'logistics'
    
    createdNeed = {
      id: generateId('need'),
      institution_id: 'auto-generated',
      type: needType,
      description: `[ALERTA ${source.toUpperCase()}] ${description}`,
      urgency,
      urgency_justification: `Gerado automaticamente a partir de alerta ${source}: ${justification}`,
      city,
      state,
      quantity_needed: 10,
      quantity_filled: 0,
      status: 'open',
      required_skills: [],
      created_at: new Date().toISOString()
    }
    
    needs.push(createdNeed)
  }
  
  res.status(201).json({
    alert,
    need_created: !!createdNeed,
    need: createdNeed,
    message: createdNeed 
      ? `Alerta processado e necessidade criada automaticamente` 
      : `Alerta processado. Use force_create_need=true para criar necessidade.`
  })
}
