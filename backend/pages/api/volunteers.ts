import type { NextApiRequest, NextApiResponse } from 'next'
import { volunteers, generateId, Volunteer, fromApiAvailability, toApiAvailability } from '../../lib/data'

function toApiVolunteer(volunteer: Volunteer) {
  return {
    id: volunteer.id,
    full_name: volunteer.name,
    city: volunteer.city,
    state: volunteer.state,
    skills: volunteer.skills,
    availability: toApiAvailability(volunteer.availability),
    created_at: volunteer.created_at
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { full_name, name, cpf, phone, email, skills, city, state, availability, cnh_type } = req.body
    const volunteerName = full_name || name
    
    if (!volunteerName || !cpf || !phone || !skills || !city || !state || !availability) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const newVolunteer: Volunteer = {
      id: generateId('vol'),
      name: volunteerName,
      email: email || `${generateId('voluntario')}@voluntai.local`,
      cpf,
      phone,
      skills: Array.isArray(skills) ? skills : [skills],
      city,
      state,
      availability: fromApiAvailability(availability),
      cnh_type,
      created_at: new Date().toISOString()
    }
    
    volunteers.push(newVolunteer)
    
    return res.status(201).json(toApiVolunteer(newVolunteer))
  }
  
  if (req.method === 'GET') {
    return res.status(200).json({ items: volunteers.map(toApiVolunteer) })
  }
  
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
