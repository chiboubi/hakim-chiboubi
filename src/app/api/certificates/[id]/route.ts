import { NextRequest, NextResponse } from 'next/server';
import { PDFExportService } from '@/lib/pdf-export-service';
import { SCUGPHubUltimate } from '@/lib/scugp-service';

/**
 * @api {get} /api/certificates/:id Téléchargement de Titre Unitaire
 * Génère un certificat PDF unique scellé pour un identifiant donné.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    const diplomas = SCUGPHubUltimate.getDiplomas();
    const diploma = diplomas.find(d => d.certificateId === id);

    if (!diploma) {
      return NextResponse.json({ error: 'Certificat non trouvé dans le Ledger Source.' }, { status: 404 });
    }

    const pdfBuffer = await PDFExportService.generateCertificate(diploma);
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="SCUGP-CERT-${id}.pdf"`,
        'Cache-Control': 'no-store, max-age=0'
      },
    });
  } catch (error) {
    console.error('Unitary Certificate Generation Error:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de la génération du certificat PDF',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
