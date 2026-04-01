
import { NextRequest, NextResponse } from 'next/server';
import { SCUGPHubUltimate } from '@/lib/scugp-service';

/**
 * @api {post} /api/v2/webhooks Gérer les abonnements webhooks
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { url, events, secret } = body;

  if (!url || !events) {
    return NextResponse.json({ error: 'URL and events are required' }, { status: 400 });
  }

  // Simulation d'enregistrement d'abonnement
  console.log(`Webhook registered: ${url} for events: ${events.join(', ')}`);

  return NextResponse.json({
    id: `WEB-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    status: 'ACTIVE',
    url,
    events,
    createdAt: new Date().toISOString()
  });
}

/**
 * @api {get} /api/v2/webhooks Lister les événements disponibles
 */
export async function GET() {
  return NextResponse.json({
    available_events: [
      'certificate.verified',
      'certificate.issued',
      'certificate.revoked',
      'biometric.match_success',
      'fraud.alert_high'
    ]
  });
}
