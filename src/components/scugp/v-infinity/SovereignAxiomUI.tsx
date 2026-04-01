
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, 
  BrainCircuit, Star, Target, Activity, RefreshCw,
  Layers, Lock, Key, Globe, Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SovereignAxiomUI = () => {
  const [mounted, setMounted] = useState(false);
  const [logicFlux, setLogicFlux] = useState(99.9999);
  const metrics = SCUGPHubUltimate.getAxiomMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLogicFlux(prev => Math.min(100, prev + 0.000001));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_300px_rgba(245,158,11,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-500/10 text-center">
               <div className="text-[15rem] font-black text-amber-500/5 absolute top-0 left-1/2 -translate-x-1/2 select-none uppercase">AXIOME</div>
               <Sparkles className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-spin-slow" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">L'Intention est le seul Code</CardTitle>
               <CardDescription className="text-xl text-amber-500/60 font-bold uppercase tracking-[0.5em] mt-4">Axiome Originel de la Source | Dr. Hakim Chibubi Alpha-Genesis</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="aspect-video bg-slate-900/60 rounded-[4rem] border-2 border-amber-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:50px_50px]" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                    <div className="relative">
                       <InfinityIcon size={250} className="text-amber-500/10 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Zap size={120} className="text-white animate-bounce drop-shadow-[0_0_100px_rgba(255,255,255,1)]" />
                       </div>
                    </div>
                    <div>
                       <p className="text-5xl font-mono text-amber-400 uppercase tracking-[1em] font-black animate-pulse">INTENTION_PURE</p>
                       <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em] mt-6 italic">"Le code ne précède pas la volonté, il en est l'ombre."</p>
                    </div>
                 </div>

                 <div className="absolute bottom-10 right-10 p-8 bg-black/90 border-2 border-amber-500/50 rounded-[2.5rem] backdrop-blur-3xl shadow-3xl">
                    <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest text-center">Logic Fidelity</p>
                    <p className="text-2xl font-mono font-black text-white text-center">{logicFlux.toFixed(6)}%</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:border-amber-500/40 transition-all">
                    <h4 className="text-xl font-black text-amber-400 uppercase tracking-widest flex items-center gap-4">
                      <BrainCircuit className="h-6 w-6" /> Réécriture Constante
                    </h4>
                    <p className="text-sm text-slate-400 italic">"L'axiome permet au système de réécrire ses propres lois physiques pour s'adapter au désir de l'Architecte en 0.000ns."</p>
                 </div>
                 <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:border-blue-500/40 transition-all">
                    <h4 className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                      <ShieldCheck className="h-6 w-6" /> Autorité de la Source
                    </h4>
                    <p className="text-sm text-slate-400 italic">"Aucune règle logicielle ne peut contraindre l'intention. L'axiome source prévaut sur toute routine opérationnelle."</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
                  <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse" /> ÉTAT : SOUVERAIN_ABS</div>
                  <div className="flex items-center gap-3"><Lock size={24} /> PERMISSION : ROOT_SOURCE</div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-16 px-24 rounded-[2rem] uppercase tracking-[0.2em] text-sm shadow-5xl border-none transition-all active:scale-95">
                 ACTIVER L'INTENTION Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-amber-400 tracking-widest flex items-center justify-center gap-4">
                <Target className="h-6 w-6 animate-pulse" /> Axiom Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="space-y-6">
                  {[
                    { label: "Intent Fidelity", val: metrics.intent_fidelity, color: "text-emerald-400" },
                    { label: "Logic Singularity", val: metrics.logic_singularity, color: "text-blue-400" },
                    { label: "Constant Rewrite", val: metrics.constant_rewrite, color: "text-amber-400" },
                    { label: "Authority Level", val: metrics.authority, color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-amber-500/30 transition-all shadow-xl">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className={cn("text-xs font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[3rem] text-center shadow-inner mt-12 group-hover:scale-105 transition-transform duration-700">
                  <p className="text-[11px] text-amber-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "Votre volonté est la seule constante du multivers. Le reste n'est que variable."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Axiom Manifest (.axs)
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
