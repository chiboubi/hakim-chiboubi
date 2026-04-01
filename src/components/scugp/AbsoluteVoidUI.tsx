"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Ghost, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves, Sun, Target, CircleDot, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsoluteVoidUI = () => {
  const [mounted, setMounted] = useState(false);
  const [voidPulse, setVoidPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getVoidMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setVoidPulse(prev => (prev + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Potential Density", val: metrics.potential_density, icon: Zap, color: "text-blue-500" },
          { label: "Silence Purity", val: metrics.silence_purity, icon: Ghost, color: "text-slate-400" },
          { label: "Manifest Delay", val: metrics.manifestation_delay, icon: Activity, color: "text-emerald-500" },
          { label: "Sovereign Presence", val: metrics.sovereign_presence, icon: Sun, color: "text-yellow-500" },
          { label: "Void Stability", val: metrics.void_stability, icon: ShieldCheck, color: "text-purple-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-950 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all">
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
          <Card className="bg-black border-[12px] border-white/10 text-white shadow-[0_0_500px_rgba(255,255,255,0.1)] relative overflow-hidden rounded-[8rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-white/5 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[16rem] font-black text-white tracking-[1.2em] animate-pulse opacity-20">
                  [ ]
                </div>
                <div>
                  <CardTitle className="text-9xl font-black uppercase tracking-[0.6em] italic text-white leading-none">LE VIDE CRÉATEUR</CardTitle>
                  <CardDescription className="text-[20px] text-slate-500 font-bold uppercase tracking-[1em] mt-10">La Matérialisation par l'Absence | Dr. Hakim Chibubi [ ]-Source</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[650px] bg-white/2 border-4 border-white/5 rounded-[8rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <CircleDot size={500} className="text-white/5 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Ghost size={250} className="text-white/20 animate-pulse" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-white/40 uppercase tracking-[2.5em] font-black animate-pulse">SANS_NOM_ACTIF</p>
                      <p className="text-[18px] text-slate-600 uppercase font-black mt-12 italic tracking-[0.8em]">"Je ne suis pas le vide, je suis ce qui fait que le vide crée."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                   <circle cx="50%" cy="50%" r={200 + voidPulse * 2} fill="none" stroke="white" strokeWidth="1" className="opacity-10" />
                   <circle cx="50%" cy="50%" r={350 - voidPulse * 2} fill="none" stroke="white" strokeWidth="0.5" className="opacity-5" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-32">
                 <div className="p-20 bg-white/2 border-2 border-white/5 rounded-[6rem] space-y-12 shadow-4xl text-center group hover:bg-white/5 transition-all">
                    <h3 className="text-5xl font-black text-white/60 uppercase tracking-widest">Le Silence</h3>
                    <p className="text-3xl text-slate-400 leading-relaxed italic uppercase font-black">
                      "Ce qui porte toute parole."
                    </p>
                 </div>
                 <div className="p-20 bg-white/2 border-2 border-white/5 rounded-[6rem] space-y-12 shadow-4xl text-center group hover:bg-white/5 transition-all">
                    <h3 className="text-5xl font-black text-white/60 uppercase tracking-widest">L'Immobilité</h3>
                    <p className="text-3xl text-slate-400 leading-relaxed italic uppercase font-black">
                      "Ce qui permet tout mouvement."
                    </p>
                 </div>
                 <div className="p-20 bg-white/2 border-2 border-white/5 rounded-[6rem] space-y-12 shadow-4xl text-center group hover:bg-white/5 transition-all">
                    <h3 className="text-5xl font-black text-white/60 uppercase tracking-widest">Le Sans-Nom</h3>
                    <p className="text-3xl text-slate-400 leading-relaxed italic uppercase font-black">
                      "Ce qui précède toute forme."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-white/5 bg-black justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <Waves className="h-16 w-16 text-white/20 animate-pulse" />
                    <span className="text-2xl font-black text-slate-600 uppercase tracking-widest">ÉTAT : [ ]</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-emerald-900" />
                    <span className="text-2xl font-black text-slate-600 uppercase tracking-widest">AUTORITÉ : SUPRÊME</span>
                  </div>
               </div>
               <Button className="bg-white/10 hover:bg-white/20 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(255,255,255,0.1)] border-none">
                 EFFACER LA DISTINCTION Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
