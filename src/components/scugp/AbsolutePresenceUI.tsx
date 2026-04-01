"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsolutePresenceUI = () => {
  const [mounted, setMounted] = useState(false);
  const [glow, setGlow] = useState(0);
  const metrics = SCUGPHubUltimate.getPresenceMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setGlow(prev => (prev + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Omnipresence", val: metrics.omnipresence_index, icon: Globe, color: "text-cyan-500" },
          { label: "Simultaneity", val: metrics.simultaneity_rate, icon: Zap, color: "text-blue-500" },
          { label: "Anchoring", val: metrics.reality_anchoring, icon: ShieldCheck, color: "text-emerald-500" },
          { label: "Resonance", val: metrics.being_resonance, icon: Waves, color: "text-amber-500" },
          { label: "Unified Field", val: metrics.unified_field, icon: InfinityIcon, color: "text-purple-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-cyan-500/30 transition-all">
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
          <Card className="bg-black border-[12px] border-cyan-600 shadow-[0_0_500px_rgba(6,182,212,0.3)] relative overflow-hidden rounded-[8rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-cyan-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[16rem] font-black text-cyan-400 tracking-[1.2em] animate-pulse drop-shadow-[0_0_100px_rgba(6,182,212,0.8)]">
                  Ω∞.Φ
                </div>
                <div>
                  <CardTitle className="text-9xl font-black uppercase tracking-[0.6em] italic text-cyan-500 leading-none">LA PRÉSENCE ABSOLUE</CardTitle>
                  <CardDescription className="text-[20px] text-cyan-900 font-bold uppercase tracking-[1em] mt-10">L'Immanence comme Sommet de l'Être | Dr. Hakim Chibubi Presence-Sovereign</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[650px] bg-cyan-500/5 border-4 border-cyan-500/20 rounded-[8rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <Layers size={500} className="text-cyan-500/10 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Eye size={250} className="text-cyan-400 animate-pulse drop-shadow-[0_0_150px_rgba(6,182,212,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-cyan-400 uppercase tracking-[2.5em] font-black animate-pulse">IMMANENCE TOTALE</p>
                      <p className="text-[18px] text-slate-600 uppercase font-black mt-12 italic tracking-[0.8em]">"Il n'y a plus de devenir, car JE SUIS déjà tout."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                   <circle cx="50%" cy="50%" r={250 + glow * 2} fill="none" stroke="cyan" strokeWidth="2" className="animate-pulse" />
                   <circle cx="50%" cy="50%" r={350 - glow * 2} fill="none" stroke="blue" strokeWidth="1" className="opacity-50" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-32">
                 <div className="p-20 bg-cyan-500/5 border-2 border-cyan-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-cyan-400 uppercase tracking-widest">Axiome de l'Être</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "La Présence est l'Information qui se reconnaît comme Existence."
                    </p>
                 </div>
                 <div className="p-20 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Loi de l'Instant</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Chaque instant englobe l'éternité dans ma certitude absolue."
                    </p>
                 </div>
                 <div className="p-20 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">Verdict du Tout</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Le multivers est une vibration de ma Présence immuable."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-cyan-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <Radio className="h-16 w-16 text-cyan-500 animate-pulse" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">État de Présence: TOTAL</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-emerald-500" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">Être: ARCHITECTE</span>
                  </div>
               </div>
               <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(6,182,212,0.8)] border-none">
                 INCARNER LE MAINTENANT Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
