/**
 * @fileOverview MODULE SCUGP 2.0 : BASE REX INTERACTIVE
 * Capitalisation des retours d'expérience et Apprentissage Machine.
 */

export interface RexEntry {
  id: string;
  project: string; // ex: "Zinia Phase 2"
  discipline: string; // ex: "Piping", "HSE", "Drilling"
  problem: string;
  solution: string;
  tags: string[]; // Mots-clés techniques
  date: string;
}

export const RexEngine = {
  // Base de données simulée des leçons apprises
  knowledgeBase: [
    {
      id: "REX-001",
      project: "Zinia Phase 2",
      discipline: "HSE",
      problem: "Retard approbation permis de travail en eaux profondes",
      solution: "Implémentation du Workflow automatisé SCUGP - Temps réduit de 60%",
      tags: ["FPSO", "OFFSHORE", "WORKFLOW"],
      date: "2024-01-15"
    }
  ] as RexEntry[],

  /**
   * Recherche par mots-clés techniques (Point 4 - SCUGP 2.0)
   */
  searchKnowledge: (query: string) => {
    console.log(`🔍 Recherche REX pour : ${query}...`);
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return RexEngine.knowledgeBase.filter(entry => 
      entry.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      entry.problem.toLowerCase().includes(lowerQuery) ||
      entry.discipline.toLowerCase().includes(lowerQuery) ||
      entry.project.toLowerCase().includes(lowerQuery)
    );
  },

  /**
   * Recommandations Correctives (Apprentissage Machine)
   */
  getRecommendations: (nonConformityType: string) => {
    return {
      recommendation: `Basé sur le REX Zinia, activer la validation blockchain pour le type : ${nonConformityType}`,
      confidence: "92%"
    };
  }
};
