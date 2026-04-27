import type { NextApiRequest, NextApiResponse } from 'next'
import { externalAlerts, needs, generateId, Need, classifyUrgency, toApiUrgency } from '../../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const { source, original_text, title, description, location_city, location_state, city, state, severity, force_create_need = false } = req.body
  const alertDescription = original_text || description
  const alertCity = location_city || city
  const alertState = location_state || state
  
  if (!source || !alertDescription || !alertCity || !alertState) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  
  // Process alert
  const { urgency, justification } = classifyUrgency(alertDescription)
  
  const alert = {
    id: generateId('alert'),
    source: source.replace('_mock', ''),
    title: title || 'Alerta externo simulado',
    description: alertDescription,
    city: alertCity,
    state: alertState,
    severity: severity || urgency,
    created_at: new Date().toISOString(),
    processed: true,
    need_created: force_create_need
  }
  
  externalAlerts.push(alert as any)
  
  let createdNeed: Need | null = null
  
  // Create need if forced or critical
  if (force_create_need || severity === 'critical') {
    const needType = alertDescription.toLowerCase().includes('abrigo') ? 'shelter' :
                     alertDescription.toLowerCase().includes('resgate') ? 'rescue' :
                     alertDescription.toLowerCase().includes('saúde') || alertDescription.toLowerCase().includes('enfermagem') ? 'health' :
                     'logistics'
    
    createdNeed = {
      id: generateId('need'),
      institution_id: 'auto-generated',
      type: needType,
      description: `[ALERTA ${source.toUpperCase()}] ${alertDescription}`,
      urgency,
      urgency_justification: `Gerado automaticamente a partir de alerta ${source}: ${justification}`,
      city: alertCity,
      state: alertState,
      quantity_needed: 10,
      quantity_filled: 0,
      status: 'open',
      required_skills: [],
      created_at: new Date().toISOString()
    }
    
    needs.push(createdNeed)
  }
  
  res.status(201).json({
    external_alert_id: alert.id,
    classified_urgency: toApiUrgency(urgency),
    validated_need: !!createdNeed,
    created_need_id: createdNeed?.id || null,
    explanation: createdNeed
      ? `Alerta mockado indica crise em ${alertCity}/${alertState}; convertido em necessidade acionável.`
      : `Alerta processado e classificado como ${toApiUrgency(urgency)}.`
  })
}
