import type { NextApiRequest, NextApiResponse } from 'next'
import { volunteers, institutions, needs, matches, notifications, externalAlerts } from '../../../lib/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  
  const openNeeds = needs.filter(n => n.status === 'open')
  const criticalNeeds = needs.filter(n => n.urgency === 'critical' && n.status === 'open')
  const inProgressNeeds = needs.filter(n => n.status === 'in_progress')
  
  // Calculate bottlenecks (critical needs with few or no matches)
  const bottlenecks = criticalNeeds.filter(need => {
    const needMatches = matches.filter(m => m.need_id === need.id && m.status === 'accepted')
    return needMatches.length < need.quantity_needed
  }).map(need => ({
    need_id: need.id,
    description: need.description.substring(0, 100) + '...',
    city: need.city,
    urgency: need.urgency,
    volunteers_needed: need.quantity_needed,
    volunteers_found: matches.filter(m => m.need_id === need.id && m.status === 'accepted').length,
    gap: need.quantity_needed - matches.filter(m => m.need_id === need.id && m.status === 'accepted').length
  }))
  
  res.status(200).json({
    summary: {
      total_volunteers: volunteers.length,
      total_institutions: institutions.length,
      needs_open: openNeeds.length,
      needs_critical: criticalNeeds.length,
      needs_in_progress: inProgressNeeds.length,
      total_matches: matches.length,
      notifications_sent: notifications.filter(n => n.status === 'sent').length,
      alerts_processed: externalAlerts.filter(a => a.processed).length
    },
    bottlenecks: {
      count: bottlenecks.length,
      items: bottlenecks
    },
    timestamp: new Date().toISOString()
  })
}
