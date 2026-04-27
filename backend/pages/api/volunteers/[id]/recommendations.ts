import type { NextApiRequest, NextApiResponse } from 'next'
import { volunteers, needs, calculateMatchScore } from '../../../../lib/data'

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
    .slice(0, 3)
    .map(m => ({
      need_id: m.need.id,
      description: m.need.description,
      urgency: m.need.urgency,
      city: m.need.city,
      required_skills: m.need.required_skills,
      score: m.score,
      reason: `Compatibilidade de ${m.score}% baseada em: ${m.need.required_skills.filter(s => 
        volunteer.skills.some(vs => vs.toLowerCase() === s.toLowerCase())
      ).join(', ')}`
    }))
  
  res.status(200).json({
    volunteer_id: volunteer.id,
    volunteer_name: volunteer.name,
    recommendations: matches
  })
}
