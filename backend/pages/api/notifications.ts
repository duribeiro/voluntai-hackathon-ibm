import type { NextApiRequest, NextApiResponse } from 'next'
import { notifications, generateId, Notification } from '../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const { volunteer_id, need_id, message, type = 'match' } = req.body
  
  if (!volunteer_id || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  
  const newNotification: Notification = {
    id: generateId('notif'),
    volunteer_id,
    need_id,
    message,
    type,
    status: 'sent',
    created_at: new Date().toISOString()
  }
  
  notifications.push(newNotification)
  
  res.status(201).json({
    notification: newNotification,
    delivered: true,
    mock: true,
    note: 'Notification created (mock delivery - no actual SMS/email sent)'
  })
}
