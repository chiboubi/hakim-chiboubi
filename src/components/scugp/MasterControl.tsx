"use client"

/**
 * @fileOverview Master Control Panel for SCUGP V60.
 * Consolidates real-time sensing (Arctic Eye) and predictive intelligence (GeoPredictor+).
 */

import { ArcticRadarView } from "./ArcticRadarView";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Cpu, Zap, PlayCircle, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { runFullSystemStressTest } from "@/scugp-core/tests/stress-test";
import { useToast } from "@/hooks/use-toast";
import { ScugpGovernance } from "@/scugp-core/governance/Ledger";

export const MasterControlPanel = () => {
  const { toast } = useToast();

  const handleStressTest = async () => {
    const result = await runFullSystemStressTest();
    toast({
      title: "Stress Test Completed",
      description: `System switched to ${result.strategy.mode}. Compliance: ${result.compliance}`,
    });
  };

  const handleGovernanceApproval = async () => {
    const result = ScugpGovernance.approveDocument("V60-AUTO-CERT-001", "AI-SYSTEM-ADMIN");
    if (result.success) {
      toast({
        title: "Governance Certified",
        description: result.message,
      });
    }
  };

  return (
    <div className="space-y-6 p-6 bg-slate-950 border-2 border-slate-800 rounded-2xl shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <Cpu className="h-5 w-5 text-amber-500" />
          </div>
          <h3 className="text-amber-500 font-black tracking-tighter text-xl uppercase">SCUGP Operational Command</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 h-8"
            onClick={handleGovernanceApproval}
          >
            <FileCheck className="mr-2 h-4 w-4" />
            Certify Ops
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 h-8"
            onClick={handleStressTest}
          >
            <PlayCircle className="mr-2 h-4 w-4" />
            Run Stress Test
          </Button>
          <Badge className="bg-emerald-600/20 text-emerald-500 border-emerald-500/30 animate-pulse px-3 py-1">
            SYSTEM SYNC: 100%
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vue LiDAR en direct */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest flex items-center gap-2">
              <Zap className="h-3 w-3 text-cyan-400" />
              Flux Cryosphérique (Standard 1.4)
            </p>
            <span className="text-[9px] font-mono text-cyan-500/50">LIDAR_ACTIVE_V60</span>
          </div>
          <div className="min-h-[250px] rounded-xl overflow-hidden border border-slate-800">
            <ArcticRadarView />
          </div>
        </div>

        {/* Status de l'IA GéoPrédictive */}
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/50 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest flex items-center gap-2 mb-4">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              AI GeoPredictor+ (Standard 1.2)
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                <span className="text-xs text-slate-400">Stabilité du Gisement</span>
                <span className="text-emerald-400 font-mono text-sm font-bold">NOMINAL</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                <span className="text-xs text-slate-400">Prédiction Séisme (24h)</span>
                <span className="text-blue-400 font-mono text-sm font-bold">0.02%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                <span className="text-xs text-slate-400">Compliance Factor</span>
                <span className="text-amber-400 font-mono text-sm font-bold">98.5%</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/10 rounded-lg">
            <p className="text-[11px] text-amber-200/60 italic leading-relaxed text-center">
              "L'IA prédictive réduit les coûts de maintenance de 18% tout en garantissant l'intégrité structurelle."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
