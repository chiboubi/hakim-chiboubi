
/**
 * @fileOverview SCUGP Type Definitions
 * Definitions of the fundamental structures of the multiversal genome.
 */

export interface Diploma {
  certificateId: string;
  title: string;
  type: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  orcid: string;
  institution: string;
  issueDate: string;
  grade: string;
  honors: string;
  description: string;
  blockchainHash: string;
  doi: string;
  idDocumentNumber: string;
  status: 'actif' | 'révoqué' | 'SCELLÉ Ω';
  verificationCount: number;
  metrics: Record<string, number>;
}

export interface WellData {
  id: string;
  name: string;
  coords: [number, number, number];
  depth: number;
  production: number;
  improvement: number;
  status: 'active' | 'optimization' | 'warning';
}

export interface Reservoir {
  id: string;
  name: string;
  location: string;
  type: string;
  simulation_model: string;
  improvement_potential: number;
  wells_count: number;
}

export interface BiometricAuditRecord {
  userHash: string;
  biometricHash: string;
  timestamp: string;
  success: boolean;
  confidence: number;
  certificateId: string;
  verifier?: string;
}
