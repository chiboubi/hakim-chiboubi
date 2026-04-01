import { NextRequest, NextResponse } from 'next/server';
import { PDFExportService } from '@/lib/pdf-export-service';
import { SCUGPHubUltimate } from '@/lib/scugp-service';

/**
 * @api {get} /api/portfolio Génération du Portfolio Suprême
 * Compile l'intégralité des 50+ titres académiques dans un document PDF de prestige.
 */
export async function GET(request: NextRequest) {
  try {
    // Extraction des diplômes depuis le génôme Source consolidé
    const diplomas = SCUGPHubUltimate.getDiplomas();

    if (!diplomas || diplomas.length === 0) {
      return NextResponse.json({ error: 'Aucun diplôme trouvé dans la Source.' }, { status: 404 });
    }

    // Génération du buffer PDF via le service de rendu vectoriel
    const pdfBuffer = await PDFExportService.generatePortfolio(diplomas);
    
    // Retour du document avec les headers de sécurité et de prestige
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="SCUGP-PORTFOLIO-RÉGALIEN-CHIBOUBI.pdf"',
        'Cache-Control': 'no-store, max-age=0',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY'
      },
    });
  } catch (error) {
    console.error('Portfolio Generation Critical Failure:', error);
    return NextResponse.json({ 
      error: 'Erreur lors de la génération du portfolio PDF',
      details: error instanceof Error ? error.message : 'Unknown ontological error'
    }, { status: 500 });
  }
}
