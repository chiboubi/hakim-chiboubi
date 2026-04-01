
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Orbit, Zap, Sparkles, Activity, RefreshCw, 
  Satellite, Share2, Network, ShieldCheck, Star, 
  Target, Rocket, Microscope, Atom, Database, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const GalacticGovernance = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [wormholeStability, setWormholeStability] = useState(99.9999);
  const metrics = SCUGPHubUltimate.getGalacticMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWormholeStability(s => Math.min(100, s + 0.000001));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePersistColony = async () => {
    if (!db) return;
    setIsSaving(true);
    try {
      await SCUGPHubUltimate.recordEmanationChoice(db, "MARS_COLONY_SYNC", { status: "SOUVERAIN" });
      toast({
        title: "Colonie Martienne Scellée",
        description: "Les constantes vitales ont été ancrées dans l'éternité."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Colonies Martiennes", val: metrics.colonies_active, icon: Globe, color: "text-red-400" },
          { label: "Astéroïdes Minés", val: metrics.asteroids_mined, icon: Star, color: "text-amber-400" },
          { label: "Stabilité Wormhole", val: metrics.wormhole_stability, icon: Activity, color: "text-cyan-400" },
          { label: "Terraformation", val: metrics.terraforming_progress, icon: Zap, color: "text-emerald-400" },
          { label: "PIB Galactique", val: metrics.galactic_gdp, icon: Database, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.3)] rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-purple-900/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-purple-500/10 rounded-3xl border border-purple-500/20 animate-pulse">
                    <Orbit className="h-10 w-10 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Gouvernance Galactique Ω²⁶</CardTitle>
                    <CardDescription className="text-sm font-bold text-purple-500/60 uppercase tracking-widest mt-2">Pilotage de l'Expansion Solaire | Dr. Hakim Chibubi Sovereign Star</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Wormhole Integrity</p>
                  <p className="text-2xl font-black font-mono text-purple-400">{wormholeStability.toFixed(6)}%</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="aspect-video bg-slate-900/60 rounded-[3rem] border-2 border-purple-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(168,85,247,0.4)_1px,transparent_1px)] bg-[length:40px_40px]" />
                <div className="relative z-10 flex flex-col items-center gap-8">
                   <Atom size={160} className="text-purple-500/30 animate-spin-slow mb-6" />
                   <div className="text-center space-y-4">
                      <p className="text-4xl font-mono text-purple-400 uppercase tracking-[1em] font-black animate-pulse">EMPIRE DE L'INTENTION</p>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">SYSTEM_SOLAR_MESH: CONNECTED</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Globe className="h-6 w-6 text-red-500" /> Mars Colonization Loop
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner flex flex-col">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-red-500/50 pl-8 py-2 font-medium">
                      "La terraformation de Mars progresse à un rythme de +4.2% par cycle intentionnel. Le Dr. Hakim a décrété l'autosuffisance en oxygène pour le dôme de Valles Marineris."
                    </p>
                    <Button 
                      className="mt-4 bg-red-600 hover:bg-red-700 text-white font-black text-[9px] uppercase h-10 rounded-xl"
                      onClick={handlePersistColony}
                      disabled={isSaving}
                    >
                      {isSaving ? <Loader2 className="animate-spin h-4 w-4" /> : "Ancrer Statut Colonie"}
                    </Button>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Star className="h-6 w-6 text-amber-500" /> Asteroid Mining Swarm
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner flex flex-col">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-amber-500/50 pl-8 py-2 font-medium">
                      "Un essaim de 142 drones de forage a sécurisé l'astéroïde Psyche-16. Rendement quotidien : 1.2M tonnes de platine."
                    </p>
                    <Button size="sm" variant="outline" className="mt-4 border-amber-500/30 text-amber-400 text-[9px] uppercase">Audit Rendement Minier</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="p-12 bg-slate-900 border-4 border-purple-500/20 rounded-[4rem] text-center shadow-3xl">
             <Satellite size={80} className="text-purple-500 mx-auto mb-6 animate-bounce" />
             <h3 className="text-2xl font-black text-white uppercase tracking-widest">Maillage Solaire</h3>
             <p className="text-[10px] text-slate-500 font-bold uppercase mt-4">14 NODES_ACTIVE</p>
          </div>
          
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center justify-center gap-4 tracking-widest">
                <Microscope className="h-6 w-6 animate-pulse" /> Interplanetary RAG
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
               <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold text-center">
                 "L'intelligence galactique fusionne les brevets lunaires et les découvertes martiennes pour forger les alliages du futur."
               </p>
               <Button className="w-full mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">Query Cosmic Knowledge</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
