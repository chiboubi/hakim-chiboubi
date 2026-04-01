/**
 * @fileOverview SCHÉMA DE DONNÉES : FICHE PROJET SCUGP 4.0
 * Utilisé pour l'initialisation des 11 plans de pilotage.
 */

export const ProjectSheetV4 = {
  identity: {
    id: "SCGZ-MZ41-2025",
    name: "Conversion H2 + Solaire - Champ MZ-41",
    client: "Direction Transition Énergétique",
    geo: { lat: 31.6, long: 2.5, type: "Onshore/Algeria" }
  },
  
  strategicObjectives: [
    { label: "Réduction CO2", target: "30%", weight: 0.4, kpi: "Tonne/An" },
    { label: "Rendement Énergétique", target: "+15%", weight: 0.3, kpi: "Wh/m3" },
    { label: "Conformité ESG", target: "Audit WorldBank", weight: 0.3, kpi: "Score" }
  ],

  activatedDimensions: {
    D1_Time: { active: true, desc: "Planning projet, jalons critiques" },
    D2_Cost: { active: true, desc: "Budget, CAPEX / OPEX, EAC" },
    D3_Quality: { active: true, desc: "Déviations techniques, revues" },
    D4_Resources: { active: true, desc: "Charges internes, sous-traitants" },
    D5_Risks: { active: true, desc: "Cartographie dynamique, scoring IA" },
    D6_Comm: { active: true, desc: "RACI, validation, comité de pilotage" },
    D7_Compliance: { active: true, desc: "Normes API / HSE / ISO" },
    D8_Ops: { active: true, desc: "KPI production, TRS, consommation" },
    D9_ESG: { active: true, desc: "CO2, déversements, biodiversité" },
    D10_Innovation: { active: true, desc: "Nouvelles techno, brevets, TRL" },
    D11_AI: { active: true, desc: "Synthèse REX, suggestions IA, copilote" }
  },

  ecosystemConnectors: {
    SAP_S4HANA: "CONNECTED",
    DMS_Internal: "CONNECTED",
    IoT_SCADA: "CONNECTED",
    Jira_Agile: "CONNECTED"
  }
};
