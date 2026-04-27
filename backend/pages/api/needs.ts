import type { NextApiRequest, NextApiResponse } from 'next'
import { needs, generateId, Need, classifyUrgency, fromApiUrgency, toApiNeedStatus, toApiUrgency } from '../../lib/data'

function inferNeedType(requiredSkill: string): Need['type'] {
  const skill = requiredSkill.toLowerCase()
  if (skill.includes('saude') || skill.includes('saúde') || skill.includes('enfermagem') || skill.includes('medico')) return 'health'
  if (skill.includes('cozinha') || skill.includes('alimento')) return 'food'
  if (skill.includes('resgate') || skill.includes('natacao') || skill.includes('natação')) return 'rescue'
  if (skill.includes('transporte') || skill.includes('motorista')) return 'transport'
  if (skill.includes('limpeza')) return 'cleaning'
  return 'logistics'
}

function toApiNeed(need: Need) {
  return {
    id: need.id,
    title: need.description.split('.')[0],
    description: need.description,
    institution_id: need.institution_id,
    required_skill: need.required_skills[0] || need.type,
    volunteers_needed: need.quantity_needed,
    urgency_level: toApiUrgency(need.urgency),
    location_city: need.city,
    location_state: need.state,
    status: toApiNeedStatus(need.status),
    created_at: need.created_at
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      title,
      description,
      institution_id,
      required_skill,
      volunteers_needed,
      urgency_level,
      location_city,
      location_state,
      type,
      city,
      state,
      quantity_needed,
      required_skills
    } = req.body
    
    const needCity = location_city || city
    const needState = location_state || state
    const mainSkill = required_skill || required_skills?.[0] || type
    
    if (!institution_id || !description || !needCity || !needState || !mainSkill) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const classified = classifyUrgency(description)
    const urgency = urgency_level ? fromApiUrgency(urgency_level) : classified.urgency
    
    const newNeed: Need = {
      id: generateId('need'),
      institution_id,
      type: type || inferNeedType(mainSkill),
      description: title ? `${title}. ${description}` : description,
      urgency,
      urgency_justification: classified.justification,
      city: needCity,
      state: needState,
      quantity_needed: volunteers_needed || quantity_needed || 1,
      quantity_filled: 0,
      status: 'open',
      required_skills: required_skills || [mainSkill],
      created_at: new Date().toISOString()
    }
    
    needs.push(newNeed)
    
    return res.status(201).json(toApiNeed(newNeed))
  }
  
  if (req.method === 'GET') {
    // Optional filters
    const { city, state, urgency_level, urgency, status } = req.query
    
    let filtered = needs
    
    if (city) {
      filtered = filtered.filter(n => n.city.toLowerCase() === (city as string).toLowerCase())
    }

    if (state) {
      filtered = filtered.filter(n => n.state.toLowerCase() === (state as string).toLowerCase())
    }
    
    if (urgency_level || urgency) {
      filtered = filtered.filter(n => n.urgency === fromApiUrgency((urgency_level || urgency) as string))
    }
    
    if (status) {
      const statusMap: Record<string, Need['status']> = {
        aberta: 'open',
        em_matching: 'in_progress',
        notificada: 'in_progress',
        em_atendimento: 'in_progress',
        resolvida: 'closed'
      }
      filtered = filtered.filter(n => n.status === (statusMap[status as string] || status))
    }
    
    return res.status(200).json({ 
      items: filtered.map(toApiNeed)
    })
  }
  
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
