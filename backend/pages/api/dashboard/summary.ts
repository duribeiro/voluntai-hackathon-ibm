import type { NextApiRequest, NextApiResponse } from 'next'
import { volunteers, institutions, needs, matches, toApiUrgency } from '../../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const openNeeds = needs.filter(n => n.status === 'open')
  const criticalNeeds = needs.filter(n => n.urgency === 'critical' && n.status === 'open')
  
  // Calculate bottlenecks (critical needs with few or no matches)
  const bottlenecks = criticalNeeds.filter(need => {
    const needMatches = matches.filter(m => m.need_id === need.id && m.status === 'accepted')
    return needMatches.length < need.quantity_needed
  }).map(need => ({
    need_id: need.id,
    description: need.description.substring(0, 100) + '...',
    city: need.city,
    urgency: need.urgency,
    volunteers_needed: need.quantity_needed,
    volunteers_found: matches.filter(m => m.need_id === need.id && m.status === 'accepted').length,
    gap: need.quantity_needed - matches.filter(m => m.need_id === need.id && m.status === 'accepted').length
  }))
  
  res.status(200).json({
    volunteers_total: volunteers.length,
    institutions_total: institutions.length,
    open_needs_total: openNeeds.length,
    critical_needs_total: criticalNeeds.length,
    matches_total: matches.length,
    bottlenecks: bottlenecks.map(item => ({
      need_id: item.need_id,
      title: item.description,
      urgency_level: toApiUrgency(item.urgency),
      reason: `Faltam ${item.gap} voluntários para completar a demanda em ${item.city}.`
    }))
  })
}
