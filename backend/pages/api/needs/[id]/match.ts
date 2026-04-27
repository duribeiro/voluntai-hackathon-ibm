import type { NextApiRequest, NextApiResponse } from 'next'
import { needs, volunteers, matches, calculateMatchScore, generateId } from '../../../../lib/data'

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
      name: m.volunteer.name,
      email: m.volunteer.email,
      phone: m.volunteer.phone,
      skills: m.volunteer.skills,
      city: m.volunteer.city,
      availability: m.volunteer.availability,
      score: m.score
    }))
  
  res.status(200).json({
    need_id: need.id,
    description: need.description,
    urgency: need.urgency,
    matches: matches
  })
}
