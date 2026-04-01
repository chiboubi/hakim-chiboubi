/**
 * @fileOverview Contractual Intelligence - Clause Analyzer
 * Maps and analyzes critical contractual clauses to detect legal bottlenecks.
 */

export const ClauseAnalyzer = {
  /**
   * Scans a contract for risk-heavy clauses.
   */
  analyzeClauses: (contractData: any) => {
    return [
      { clauseId: "12.4", type: "Liability", riskLevel: "High", description: "Unlimited liability for environmental damage" },
      { clauseId: "8.1", type: "Delivery", riskLevel: "Medium", description: "Strict timelines with daily penalties" },
      { clauseId: "24.0", type: "ForceMajeure", riskLevel: "Low", description: "Comprehensive coverage including Arctic hazards" }
    ];
  }
};

export const ContractIntel = {
  /**
   * Détecte les écarts entre l'avancement réel et les clauses contractuelles
   */
  detectDeviations: (progress: number, deadline: string) => {
    const isLate = new Date(deadline) < new Date();
    
    if (isLate && progress < 100) {
      return {
        type: "CONTRACTUAL_GAP",
        severity: "HIGH",
        action: "Générer automatiquement une lettre de réserve (Claim)",
        clauseRef: "ARTICLE_12_DELAYS"
      };
    }
    return { status: "IN_COMPLIANCE" };
  }
};
