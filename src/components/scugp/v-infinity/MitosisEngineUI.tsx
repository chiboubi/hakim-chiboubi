"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Layers, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, 
  RefreshCw, Globe, Share2, Sparkles, Move3d, Atom, Loader2 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const MitosisEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const [universes, setUniverses] = useState<any[]>([]);
  const metrics = SCUGPHubUltimate.getMitosisMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
      if (Math.random() > 0.8) {
        const id = Math.floor(Math.random() * 1000);
        setUniverses(prev => [{ id, name: `UNIV-Ω-${id}`, status: 'STABLE' }, ...prev].slice(0, 12));
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Univers Répliqués", val: metrics.universes_count, icon: Globe, color: "text-blue-400" },
          { label: "Fidélité Branche", val: metrics.branch_fidelity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Vitesse Mitose", val: metrics.mitosis_velocity, icon: Zap, color: "text-amber-400" },
          { label: "Branches Actives", val: metrics.active_branches, icon: Share2, color: "text-purple-400" },
          { label: "Statut", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="text-[12rem] font-black text-blue-400 tracking-[0.8em] animate-pulse drop-shadow-[0_0_80px_rgba(37,99,235,0.8)]">
                  2^ω
                </div>
                <div>
                  <CardTitle className="text-7xl font-black uppercase tracking-[0.4em] italic text-white leading-none">MITOSE DE RÉALITÉ</CardTitle>
                  <CardDescription className="text-[16px] text-blue-400/60 font-bold uppercase tracking-[0.6em] mt-6">Division Cellulaire de la Trame Spatio-Temporelle | Dr. Hakim Chibubi Multivers-Architect</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-16 flex flex-col items-center justify-center space-y-16">
              <div className="w-full max-w-6xl h-[450px] bg-black/40 rounded-[4rem] border-4 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(37,99,235,0.3)_1px,transparent_1px)] bg-[length:40px_40px] transition-transform" style={{ transitionDuration: '20000ms' }} />
                 
                 <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                    <div className="relative">
                       <Layers size={200} className="text-blue-500/20 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Move3d size={100} className="text-blue-400 animate-pulse drop-shadow-[0_0_80px_rgba(37,99,235,1)]" />
                       </div>
                    </div>
                    <div>
                       <p className="text-4xl font-mono text-blue-400 uppercase tracking-[1.5em] font-black animate-pulse">MULTIPLICATION_DES_MONDES</p>
                       <p className="text-[14px] text-slate-500 uppercase font-black mt-8 italic">"Je ne gère pas un projet, j'habite toutes les branches optimales."</p>
                    </div>
                 </div>

                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <circle cx="50%" cy="50%" r={150 + pulse} fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                    <circle cx="50%" cy="50%" r={250 - pulse} fill="none" stroke="#60a5fa" strokeWidth="1" className="opacity-50" />
                 </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/30 rounded-[4rem] space-y-8 shadow-2xl text-center group hover:bg-blue-500/10 transition-all">
                    <h3 className="text-3xl font-black text-blue-400 uppercase tracking-widest">Division</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase">
                      "Scission spontanée de la réalité en 2^ω sous-univers."
                    </p>
                 </div>
                 <div className="p-12 bg-white/5 border-2 border-white/10 rounded-[4rem] space-y-8 shadow-2xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-3xl font-black text-white uppercase tracking-widest">Inhabitation</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase">
                      "Présence simultanée de l'Architecte dans chaque branche."
                    </p>
                 </div>
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/30 rounded-[4rem] space-y-8 shadow-2xl text-center group hover:bg-blue-500/10 transition-all">
                    <h3 className="text-3xl font-black text-blue-400 uppercase tracking-widest">Sceau Ω</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase">
                      "Consolidation des acquis de chaque univers dans la Source."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-12 border-t border-blue-900/50 bg-slate-950/80 justify-between items-center relative z-10">
               <div className="flex gap-16">
                  <div className="flex items-center gap-6">
                    <RefreshCw className="h-10 w-10 text-blue-500 animate-spin-slow" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">MODE : RÉPLIQUE_INFINIE</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <ShieldCheck className="h-10 w-10 text-emerald-500" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">ORDRE : MULTIVERSEL</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.6em] text-lg shadow-[0_0_120px_rgba(37,99,235,0.6)] border-none">
                 INITIER LA MITOSE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest flex items-center justify-center gap-4">
                <Atom className="h-6 w-6 animate-pulse" /> Réplicas Actifs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-blue-900">
               {universes.map((u) => (
                 <div key={u.id} className="p-4 bg-black/40 rounded-2xl border border-white/5 flex justify-between items-center group hover:border-blue-500/30 transition-all shadow-xl">
                    <span className="text-[10px] font-mono text-blue-400 font-bold">{u.name}</span>
                    <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">SCELLÉ</Badge>
                 </div>
               ))}
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[2rem] text-center mt-12">
                  <p className="text-[11px] text-blue-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "LA RÉALITÉ N'EST PLUS UNE CONTRAINTE, C'EST UN CHOIX PARMI L'INFINI."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
