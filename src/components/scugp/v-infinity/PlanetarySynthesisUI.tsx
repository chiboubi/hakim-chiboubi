"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Boxes, Zap, Globe, Share2, RefreshCw, Layers, ShieldCheck, Activity, Target, BrainCircuit, Loader2, Sparkles, Network, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const PlanetarySynthesisUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisProgress, setProgress] = useState(0);
  const metrics = SCUGPHubUltimate.getSynthesisMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSynthesis = async () => {
    if (!db) return;
    setIsSynthesizing(true);
    setProgress(0);
    
    // Simulation de synthèse nodal
    for (let i = 0; i <= 100; i += 5) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    try {
      await SCUGPHubUltimate.recordSynthesisResult(db, "GLOBAL_ENERGY_SYNTHESIS", { fidelity: 1.00 });
      toast({
        title: "Synthèse Planétaire Terminée",
        description: "L'intégralité des nœuds de savoir est harmonisée."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSynthesizing(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Fidélité Synthèse", val: metrics.synthesis_fidelity, icon: Target, color: "text-blue-400" },
          { label: "Sync Mondes", val: metrics.cross_world_sync, icon: Globe, color: "text-purple-400" },
          { label: "Harmonie Nodale", val: metrics.nodal_harmony, icon: Network, color: "text-emerald-400" },
          { label: "Output Planétaire", val: metrics.planetary_output, icon: Zap, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all backdrop-blur-3xl">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.4)] relative overflow-hidden rounded-[8rem] min-h-[850px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
               <Boxes className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">SYNTHÈSE PLANÉTAIRE Ω</CardTitle>
               <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Harmonisation du Savoir Mondial & Unification des Rendements | Dr. Hakim Chibubi</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="h-[450px] bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:50px_50px]" />
                 
                 {isSynthesizing ? (
                   <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                      <Loader2 className="h-24 w-24 text-blue-400 animate-spin" />
                      <div className="text-center space-y-4">
                        <p className="text-5xl font-mono text-blue-400 uppercase tracking-[1em] font-black">SYNTHÈSE : {synthesisProgress}%</p>
                        <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">FUSION DES NŒUDS DE CONSCIENCE...</p>
                      </div>
                   </div>
                 ) : (
                   <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                      <div className="relative">
                         <Globe size={300} className="text-blue-500/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <Database size={120} className="text-blue-400 animate-pulse drop-shadow-[0_0_100px_rgba(37,99,235,1)]" />
                         </div>
                      </div>
                      <div>
                         <p className="text-4xl font-mono text-blue-400 uppercase tracking-[1.5em] font-black animate-pulse">PLANETARY_GRID_STABLE</p>
                         <p className="text-[14px] text-slate-500 uppercase font-black mt-8 italic">"L'Univers est un seul projet, piloté par une seule synthèse."</p>
                      </div>
                   </div>
                 )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 group hover:border-blue-500/40 transition-all shadow-inner">
                    <h4 className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                      <Network className="h-6 w-6 text-blue-400" /> Harmonisation
                    </h4>
                    <p className="text-sm text-slate-400 italic">"La synthèse planétaire synchronise les apprentissages de 142 millions de points de contact. Chaque erreur d'un nœud devient la sagesse de tous."</p>
                 </div>
                 <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] space-y-6 group hover:border-emerald-500/40 transition-all shadow-inner">
                    <h4 className="text-xl font-black text-emerald-400 uppercase tracking-widest flex items-center gap-4">
                      <Zap className="h-6 w-6 text-amber-400" /> Rendement Ω
                    </h4>
                    <p className="text-sm text-slate-400 italic">"L'unification des flux de données permet d'atteindre un rendement énergétique théorique de ∞↑↑∞ par simple effet de réseau sémantique."</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
                  <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse" /> SYNC : PLANETARY_MESH</div>
                  <div className="flex items-center gap-3"><ShieldCheck size={24} /> INTEGRITY : 1.0000</div>
               </div>
               <Button 
                onClick={handleSynthesis}
                disabled={isSynthesizing}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-[0_0_150px_rgba(37,99,235,0.6)] border-none"
               >
                 {isSynthesizing ? <Loader2 className="animate-spin mr-4" /> : <RefreshCw className="mr-4" />}
                 SYNTHÉTISER LE MONDE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-4 border-blue-500/30 rounded-[4rem] overflow-hidden shadow-5xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <BrainCircuit className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-pulse" />
              <CardTitle className="text-3xl font-black uppercase text-white tracking-widest leading-none">Intelligence de Synthèse</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="p-10 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 text-center shadow-inner group">
                  <p className="text-xl text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-blue-300 transition-colors">
                    "La synthèse planétaire n'est pas un calcul, c'est l'acte de faire tenir l'infini dans un point de vérité."
                  </p>
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Nœuds Synchro", val: "142,000,000", color: "text-blue-400" },
                    { label: "Fidélité RAG", val: "1.0000", color: "text-emerald-400" },
                    { label: "Verdict", val: "SCELLÉ", color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-white/2 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-3xl">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className={cn("text-2xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
