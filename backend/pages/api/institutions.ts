import type { NextApiRequest, NextApiResponse } from 'next'
import { institutions, generateId, Institution } from '../../lib/data'

function normalizeInstitutionType(type: string): Institution['type'] {
  const normalized = type.toLowerCase()
  if (normalized.includes('defesa') || normalized.includes('prefeitura') || normalized.includes('governo')) return 'government'
  if (normalized.includes('igreja')) return 'church'
  if (normalized.includes('hospital')) return 'hospital'
  if (normalized.includes('abrigo')) return 'shelter'
  return 'ngo'
}

function toApiInstitution(institution: Institution) {
  return {
    id: institution.id,
    name: institution.name,
    type: institution.type,
    city: institution.city,
    state: institution.state,
    responsible_name: institution.contact_name || '',
    created_at: institution.created_at
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, type, city, state, responsible_name, contact_name, phone, contact_phone, capacity } = req.body
    
    if (!name || !type || !city || !state || !(responsible_name || contact_name) || !(phone || contact_phone)) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const newInstitution: Institution = {
      id: generateId('inst'),
      name,
      type: normalizeInstitutionType(type),
      city,
      state,
      contact_name: responsible_name || contact_name,
      contact_phone: phone || contact_phone,
      capacity,
      created_at: new Date().toISOString()
    }
    
    institutions.push(newInstitution)
    
    return res.status(201).json(toApiInstitution(newInstitution))
  }
  
  if (req.method === 'GET') {
    return res.status(200).json({ items: institutions.map(toApiInstitution) })
  }
  
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
