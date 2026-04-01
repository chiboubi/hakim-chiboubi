
import { NextRequest, NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { SCUGPHubUltimate } from '@/lib/scugp-service';

/**
 * @api {post} /api/update Point d'Entrée du Global Networks Bridge
 * Reçoit les paquets de données du script SCUGP_Integrator (Python).
 * Ancre les politiques IEA et capacités IRENA sur le Ledger.
 */
export async function POST(request: NextRequest) {
  const { firestore: db } = initializeFirebase();
  
  try {
    const payload = await request.json();
    
    // Validation du paquet
    if (!payload.source || !payload.global_stats) {
      return NextResponse.json({ 
        error: 'PAQUET_INVALIDE', 
        message: 'La source et les statistiques globales sont requises.' 
      }, { status: 400 });
    }

    // Persistance sémantique sur Firestore
    await SCUGPHubUltimate.processGlobalBridgeUpdate(db, payload);

    console.log(`[SYNC] Paquet reçu de ${payload.source} à ${payload.timestamp}`);

    return NextResponse.json({ 
      status: 'SCELLÉ_Ω', 
      message: 'Mise à jour du système SCUGP réussie.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Bridge Update Error:', error);
    return NextResponse.json({ 
      error: 'ÉCHEC_SYNCHRONISATION', 
      details: error instanceof Error ? error.message : 'Erreur inconnue'
    }, { status: 500 });
  }
}
