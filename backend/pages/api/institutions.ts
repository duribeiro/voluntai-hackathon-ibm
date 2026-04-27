import type { NextApiRequest, NextApiResponse } from 'next'
import { institutions, generateId, Institution } from '../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, type, city, state, contact_name, contact_phone, capacity } = req.body
    
    if (!name || !type || !city || !state) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const newInstitution: Institution = {
      id: generateId('inst'),
      name,
      type,
      city,
      state,
      contact_name,
      contact_phone,
      capacity,
      created_at: new Date().toISOString()
    }
    
    institutions.push(newInstitution)
    
    return res.status(201).json(newInstitution)
  }
  
  if (req.method === 'GET') {
    return res.status(200).json({ institutions })
  }
  
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
