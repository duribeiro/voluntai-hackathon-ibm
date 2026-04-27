import type { NextApiRequest, NextApiResponse } from 'next'
import { needs, institutions, generateId, Need, classifyUrgency } from '../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { institution_id, type, description, city, state, quantity_needed, required_skills } = req.body
    
    if (!institution_id || !type || !description || !city || !state) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    // Auto-classify urgency
    const { urgency, justification } = classifyUrgency(description)
    
    const newNeed: Need = {
      id: generateId('need'),
      institution_id,
      type,
      description,
      urgency,
      urgency_justification: justification,
      city,
      state,
      quantity_needed: quantity_needed || 1,
      quantity_filled: 0,
      status: 'open',
      required_skills: required_skills || [],
      created_at: new Date().toISOString()
    }
    
    needs.push(newNeed)
    
    return res.status(201).json(newNeed)
  }
  
  if (req.method === 'GET') {
    // Optional filters
    const { city, urgency, status } = req.query
    
    let filtered = needs
    
    if (city) {
      filtered = filtered.filter(n => n.city.toLowerCase() === (city as string).toLowerCase())
    }
    
    if (urgency) {
      filtered = filtered.filter(n => n.urgency === urgency)
    }
    
    if (status) {
      filtered = filtered.filter(n => n.status === status)
    }
    
    return res.status(200).json({ 
      needs: filtered,
      total: filtered.length
    })
  }
  
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
