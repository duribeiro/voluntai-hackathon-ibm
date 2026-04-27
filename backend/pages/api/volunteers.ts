import type { NextApiRequest, NextApiResponse } from 'next'
import { volunteers, generateId, Volunteer } from '../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, skills, city, state, availability } = req.body
    
    if (!name || !email || !skills || !city || !state || !availability) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const newVolunteer: Volunteer = {
      id: generateId('vol'),
      name,
      email,
      skills: Array.isArray(skills) ? skills : [skills],
      city,
      state,
      availability,
      created_at: new Date().toISOString()
    }
    
    volunteers.push(newVolunteer)
    
    return res.status(201).json(newVolunteer)
  }
  
  if (req.method === 'GET') {
    return res.status(200).json({ volunteers })
  }
  
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
