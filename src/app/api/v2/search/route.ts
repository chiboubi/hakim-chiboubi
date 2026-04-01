
import { NextRequest, NextResponse } from 'next/server';
import { SCUGPHubUltimate } from '@/lib/scugp-service';

/**
 * @api {get} /api/v2/search Rechercher des certificats
 * @apiName SearchCertificates
 * @apiGroup PublicAPI
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');
  const diplomas = SCUGPHubUltimate.getDiplomas();

  const results = diplomas.filter(d => {
    if (type && d.type.toLowerCase() !== type.toLowerCase()) return false;
    return true;
  });

  return NextResponse.json({
    total: results.length,
    results: results.map(d => ({
      id: d.certificateId,
      title: d.title,
      type: d.type,
      status: d.status
    }))
  });
}
