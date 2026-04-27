import type { NextApiRequest, NextApiResponse } from 'next'
import { needs, classifyUrgency } from '../../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const { description } = req.body
  
  if (!description) {
    return res.status(400).json({ error: 'Description is required' })
  }
  
  const { urgency, justification } = classifyUrgency(description)
  
  res.status(200).json({
    description,
    urgency,
    justification,
    confidence: urgency === 'critical' ? 0.95 : urgency === 'high' ? 0.85 : 0.70
  })
}
