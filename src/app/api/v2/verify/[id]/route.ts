import { NextRequest, NextResponse } from 'next/server';
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from '@/lib/scugp-service';

/**
 * @api {get} /api/v2/verify/:id Vérification Multi-Dimensionnelle de Titre
 * Renvoie le génome complet du certificat et l'identité de l'Architecte.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const diplomas = SCUGPHubUltimate.getDiplomas();
  const diploma = diplomas.find(d => d.certificateId === id);

  if (!diploma) {
    return NextResponse.json({
      valid: false,
      error: 'CERTIFICATE_NOT_FOUND',
      message: 'Aucun titre trouvé dans le maillage neural SCUGP.'
    }, { status: 404 });
  }

  const response = {
    valid: diploma.status === 'actif',
    verifiedAt: new Date().toISOString(),
    protocol: "SCUGP-OMEGA-2.0",
    owner: {
      name: `${SCUGP_CORE_OPTIONS.owner.firstName} ${SCUGP_CORE_OPTIONS.owner.lastName}`,
      dob: SCUGP_CORE_OPTIONS.owner.birthDate,
      address: SCUGP_CORE_OPTIONS.owner.address,
      orcid: SCUGP_CORE_OPTIONS.owner.orcid
    },
    certificate: {
      id: diploma.certificateId,
      title: diploma.title,
      type: diploma.type,
      grade: diploma.grade,
      issueDate: diploma.issueDate,
      honors: diploma.honors,
      blockchain: {
        hash: diploma.blockchainHash,
        seal: diploma.biometricSeal,
        network: "Quantum-Mesh-Alpha"
      }
    },
    institution: {
      name: SCUGP_CORE_OPTIONS.university,
      contact: SCUGP_CORE_OPTIONS.universityContact
    }
  };

  return NextResponse.json(response);
}
