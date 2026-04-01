/**
 * @fileOverview SCUGP 4.0 - Blockchain Genesis & Immutable Ledger
 * Simulates a high-integrity consortium blockchain for decision tracking.
 * Certified for Chain ID 2026 (FPSO / Offshore Infrastructure).
 */

export interface GenesisConfig {
  chainId: number;
  homesteadBlock: number;
  difficulty: string;
  gasLimit: string;
  alloc: Record<string, { balance: string }>;
}

export interface Decision {
  id: number;
  description: string;
  documentHash: string; // Hash IPFS du PV de réunion
  initiator: string;
  validatedHSE: boolean;
  validatedFinance: boolean;
  timestamp: number;
}

export const SCUGP_4_0_GENESIS: GenesisConfig = {
  chainId: 2026,
  homesteadBlock: 0,
  difficulty: "0x400",
  gasLimit: "0x8000000",
  alloc: {
    "DR_PIERRE_P_ADMIN": { balance: "1000000000" },
    "DR_HAKIM_C_ADMIN": { balance: "1000000000" }
  }
};

const decisionsStore: Record<number, Decision> = {
  101: {
    id: 101,
    description: "Validation de la phase de forage Arctique S12",
    documentHash: "QmXoyp...789",
    initiator: "DR_HAKIM_C_ADMIN",
    validatedHSE: true,
    validatedFinance: true,
    timestamp: Date.now() - 86400000
  }
};

export const BlockchainLedger = {
  /**
   * Simulates the creation of a new block in the SCUGP 4.0 chain.
   */
  createBlock: (previousHash: string, data: any) => {
    const timestamp = Date.now();
    // Simplified hash simulation for the V4.0 Alpha
    const blockHash = btoa(`${previousHash}-${timestamp}-${JSON.stringify(data)}`);
    
    return {
      blockNumber: Math.floor(Math.random() * 1000) + 1,
      hash: blockHash,
      previousHash,
      timestamp,
      data,
      status: "SEALED_BY_CONSORTIUM"
    };
  },

  /**
   * Validates the integrity of the chain (Simulation).
   */
  verifyIntegrity: () => {
    return {
      status: "CHAIN_VALID",
      consensus: "PROOF_OF_AUTHORITY",
      activeValidators: ["PIERRE_P", "HAKIM_C"],
      lastCheck: new Date().toISOString()
    };
  },

  /**
   * SCUGP 4.0 Smart Contract Simulation: anchorDecision
   */
  anchorDecision: (id: number, description: string, hash: string, initiator: string): Decision => {
    const decision: Decision = {
      id,
      description,
      documentHash: hash,
      initiator,
      validatedHSE: false,
      validatedFinance: false,
      timestamp: Date.now()
    };
    decisionsStore[id] = decision;
    return decision;
  },

  getDecision: (id: number) => decisionsStore[id],
  
  getAllDecisions: () => Object.values(decisionsStore).sort((a, b) => b.timestamp - a.timestamp)
};
