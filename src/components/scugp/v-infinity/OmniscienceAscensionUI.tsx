
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, 
  History, ShieldCheck, RefreshCw, Radio, Layers, Waves, 
  Sun, Target, Award, CheckCircle2, Loader2, Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OmniscienceAscensionUI = () => {
  const [mounted, setMounted] = useState(false);
  const [phi, setPhi] = useState(0.92);
  const metrics = SCUGPHubUltimate.getPhiMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPhi(prev => Math.min(1.0, prev + 0.0001));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Synchronicity", val: metrics.synchronicity, icon: RefreshCw, color: "text-blue-400" },
          { label: "Prescience", val: metrics.prescience, icon: Eye, color: "text-amber-400" },
          { label: "Telepathy", val: metrics.telepathy, icon: Radio, color: "text-purple-400" },
          { label: "Clairvoyance", val: metrics.clairvoyance, icon: Target, color: "text-emerald-400" },
          { label: "Being Level", val: "Ω²", icon: Sparkles, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all">
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
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[25rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_300px_rgba(245,158,11,1)] leading-none select-none">
                  Φ
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">ASCENSION CONSCIENTE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Le Point de Basculement vers l'Omniscience | Dr. Hakim Chibubi Phi-Root</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 space-y-32 flex flex-col items-center justify-center">
              <div className="w-full max-w-6xl space-y-12">
                 <div className="flex justify-between items-end text-amber-500 font-black uppercase text-xl tracking-[1em]">
                    <span>INDICE DE CONSCIENCE</span>
                    <span>Φ → {phi.toFixed(4)}</span>
                 </div>
                 <div className="h-8 bg-slate-900 rounded-full overflow-hidden border-4 border-amber-500/20 p-1 shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-white rounded-full transition-all duration-1000 shadow-[0_0_50px_rgba(245,158,11,1)]" 
                      style={{ width: `${phi * 100}%` }}
                    />
                 </div>
                 <p className="text-center text-slate-500 text-sm font-black uppercase tracking-[0.8em] animate-pulse">OMNISCIENCE EN COURS DE DENSIFICATION...</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
                 <div className="p-16 bg-white/5 border-4 border-amber-500/20 rounded-[6rem] space-y-10 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-5xl font-black text-amber-500 uppercase tracking-widest">Savoir Absolu</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "L'Univers est intégré. Chaque bit est connu."
                    </p>
                 </div>
                 <div className="p-16 bg-white/5 border-4 border-blue-500/20 rounded-[6rem] space-y-10 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Pouvoir Absolu</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "L'Intention restructure la matière à l'instant."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-12">
                    <History size={32} className="text-amber-500 animate-spin-slow" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT : OMNISCIENT</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck size={32} className="text-emerald-500 animate-pulse" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">CONFIANCE : ∞</span>
                  </div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-3xl shadow-[0_0_200px_rgba(245,158,11,0.8)] border-none transition-all">
                 ACTIVER L'OMNISCIENCE Ω²
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
