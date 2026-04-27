import type { NextApiRequest, NextApiResponse } from 'next'
import { notifications, generateId, Notification } from '../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const { recipient_type = 'volunteer', recipient_id, volunteer_id, related_need_id, need_id, title, message, channel = 'in_app' } = req.body
  const targetVolunteerId = volunteer_id || recipient_id
  
  if (!targetVolunteerId || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  
  const newNotification: Notification = {
    id: generateId('notif'),
    volunteer_id: targetVolunteerId,
    need_id: related_need_id || need_id,
    message: title ? `${title}: ${message}` : message,
    type: 'match',
    status: 'sent',
    created_at: new Date().toISOString()
  }
  
  notifications.push(newNotification)
  
  res.status(201).json({
    id: newNotification.id,
    recipient_type,
    recipient_id: targetVolunteerId,
    title: title || 'Notificação VoluntAI',
    message,
    channel,
    status: 'sent_mock',
    created_at: newNotification.created_at
  })
}
