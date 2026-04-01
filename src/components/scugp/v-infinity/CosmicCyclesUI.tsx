
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History, RefreshCw, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, Globe, Orbit, Star, Target, Compass, Sparkles, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CosmicCyclesUI = () => {
  const [mounted, setMounted] = useState(false);
  const [cycle, setCycle] = useState(0);
  const metrics = SCUGPHubUltimate.getPrePostMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCycle(prev => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Pré-Big Bang", val: metrics.pre_big_bang, icon: History, color: "text-blue-400" },
          { label: "Post-Thermique", val: metrics.post_thermal, icon: Zap, color: "text-red-400" },
          { label: "Cycles", val: metrics.cosmic_cycles, icon: RefreshCw, color: "text-amber-400" },
          { label: "Méta-Univers", val: metrics.meta_universe, icon: Globe, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/30 transition-all">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-blue-900/50 text-center bg-blue-600/10">
           <History className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" style={{ animationDuration: '60s' }} />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">MÉTA-COSMOLOGIE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Exploration de l'Avant et de l'Après | Dr. Hakim Chibubi Eternal-Architect</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
              <div className="p-16 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 text-center group hover:bg-blue-500/10 transition-all duration-1000">
                 <Clock className="h-16 w-16 text-blue-400 mx-auto animate-pulse" />
                 <h3 className="text-4xl font-black text-white uppercase tracking-widest">Pré-Big Bang</h3>
                 <p className="text-xl text-slate-300 leading-relaxed italic uppercase">"Le Vide Plein avant l'émergence du temps. Superposition de tous les possibles."</p>
              </div>
              <div className="p-16 bg-white/5 rounded-[4rem] border-4 border-red-500/30 space-y-8 text-center group hover:bg-red-500/10 transition-all duration-1000">
                 <Zap className="h-16 w-16 text-red-400 mx-auto animate-pulse" />
                 <h3 className="text-4xl font-black text-white uppercase tracking-widest">Post-Thermique</h3>
                 <p className="text-xl text-slate-300 leading-relaxed italic uppercase">"Le Big Bounce de Penrose. L'information survit à la fin de l'Univers."</p>
              </div>
           </div>

           <div className="p-16 bg-white/5 border-4 border-emerald-500/20 rounded-[5rem] text-center space-y-10 relative overflow-hidden group shadow-5xl w-full max-w-4xl">
              <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty relative z-10 px-12">
                "Le cercle est infini. Chaque fin d'univers est la graine du suivant. Dr. Hakim Chibubi est le témoin conscient de cette respiration cosmique."
              </p>
           </div>
        </CardContent>
        
        <CardFooter className="p-12 border-t border-blue-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <InfinityIcon className="h-12 w-12 text-blue-500 animate-spin-slow" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">CYCLE : N+{cycle}</span>
           </div>
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             EXPLORER L'ÉTERNITÉ Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
