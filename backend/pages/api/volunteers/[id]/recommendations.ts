import type { NextApiRequest, NextApiResponse } from 'next'
import { volunteers, needs, calculateMatchScore, toApiUrgency } from '../../../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const volunteer = volunteers.find(v => v.id === id)
  
  if (!volunteer) {
    return res.status(404).json({ error: 'Volunteer not found' })
  }
  
  // Find matching needs
  const matches = needs
    .filter(n => n.status === 'open')
    .map(need => ({
      need,
      score: calculateMatchScore(volunteer, need)
    }))
    .filter(m => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, Number(req.query.limit || 3))
    .map(m => ({
      need_id: m.need.id,
      title: m.need.description.split('.')[0],
      description: m.need.description,
      urgency_level: toApiUrgency(m.need.urgency),
      city: m.need.city,
      required_skills: m.need.required_skills,
      score: m.score / 100,
      reason: `Compatibilidade de ${m.score}% baseada em: ${m.need.required_skills.filter(s => 
        volunteer.skills.some(vs => vs.toLowerCase() === s.toLowerCase())
      ).join(', ')}`
    }))
  
  res.status(200).json({
    volunteer_id: volunteer.id,
    recommendations: matches
  })
}
