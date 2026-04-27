import type { NextApiRequest, NextApiResponse } from 'next'
import { needs, volunteers, calculateMatchScore, toApiAvailability, toApiUrgency } from '../../../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const need = needs.find(n => n.id === id)
  
  if (!need) {
    return res.status(404).json({ error: 'Need not found' })
  }
  
  // Find matching volunteers
  const matches = volunteers
    .map(vol => ({
      volunteer: vol,
      score: calculateMatchScore(vol, need)
    }))
    .filter(m => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(m => ({
      volunteer_id: m.volunteer.id,
      full_name: m.volunteer.name,
      skills: m.volunteer.skills,
      city: m.volunteer.city,
      state: m.volunteer.state,
      availability: toApiAvailability(m.volunteer.availability),
      score: m.score / 100,
      reason: `${m.volunteer.city === need.city ? 'Mesma cidade' : 'Mesma UF'}, habilidade compatível e disponibilidade ${toApiAvailability(m.volunteer.availability)}.`
    }))
  
  res.status(200).json({
    need_id: need.id,
    matches,
    summary: `Encontrados ${matches.length} voluntários compatíveis para necessidade ${toApiUrgency(need.urgency)} em ${need.city}/${need.state}.`
  })
}
