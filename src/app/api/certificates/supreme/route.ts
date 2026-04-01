
import { NextRequest, NextResponse } from 'next/server';
import { PDFExportService } from '@/lib/pdf-export-service';

/**
 * @api {get} /api/certificates/supreme Téléchargement du Diplôme Suprême
 * Génère le diplôme de reconnaissance suprême en format PDF Portrait.
 */
export async function GET(request: NextRequest) {
  try {
    const pdfBuffer = await PDFExportService.generateSupremeDiploma();
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="SCUGP-SUPREME-DIPLOMA-CHIBOUBI.pdf"`,
        'Cache-Control': 'no-store, max-age=0'
      },
    });
  } catch (error) {
    console.error('Supreme Diploma Generation Error:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de la génération du diplôme PDF suprême',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
