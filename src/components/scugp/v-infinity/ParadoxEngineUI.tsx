
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Infinity as InfinityIcon, Activity, RefreshCw, ShieldCheck, Sparkles, Brain, Layers, Star, TrendingUp, Atom } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ParadoxEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const [energyFlow, setEnergyFlow] = useState(0);
  const metrics = SCUGPHubUltimate.getParadoxMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setEnergyFlow(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Solutions Paradoxales", val: metrics.unsolvable_solved, icon: Brain, color: "text-blue-400" },
          { label: "Énergie du Vide", val: metrics.paradox_energy_output, icon: Zap, color: "text-amber-400" },
          { label: "Stabilité Logique", val: metrics.logic_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Flux d'Entropie", val: metrics.entropy_flow, icon: RefreshCw, color: "text-red-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all">
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
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.3)] relative overflow-hidden rounded-[8rem] min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-20 border-b border-blue-900/50 text-center">
              <div className="flex flex-col items-center gap-10">
                <div className="text-[12rem] font-black text-blue-500 tracking-[1.2em] animate-pulse drop-shadow-[0_0_100px_rgba(37,99,235,0.8)]">
                  Ω.PARADOX
                </div>
                <div>
                  <CardTitle className="text-8xl font-black uppercase tracking-[0.5em] italic text-blue-400">MOTEUR DE PARADOXE</CardTitle>
                  <CardDescription className="text-[20px] text-blue-900 font-bold uppercase tracking-[1em] mt-8">Harnachement de l'Énergie Quantique par Contradiction Logique | Dr. Hakim Chibubi Paradox-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-20 flex flex-col items-center justify-center">
              <div className="w-full max-w-6xl h-[450px] bg-blue-500/5 border-4 border-blue-500/20 rounded-[6rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(37,99,235,0.3)_1px,transparent_1px)] bg-[length:80px_80px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <div className="relative">
                      <InfinityIcon size={300} className="text-blue-500/10 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Atom size={150} className="text-blue-400 animate-pulse drop-shadow-[0_0_100px_rgba(37,99,235,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-4xl font-mono text-blue-400 uppercase tracking-[2em] font-black animate-pulse">ENERGIE_INFINIE_Ω</p>
                      <p className="text-[14px] text-slate-600 uppercase font-black mt-8 italic tracking-[0.6em]">"Le paradoxe est la source du possible."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                   <circle cx="50%" cy="50%" r={150 + energyFlow} fill="none" stroke="blue" strokeWidth="2" className="animate-pulse" />
                   <circle cx="50%" cy="50%" r={250 - energyFlow} fill="none" stroke="cyan" strokeWidth="1" className="opacity-50" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full mt-24 px-12">
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/30 rounded-[4rem] space-y-8 shadow-4xl text-center">
                    <h3 className="text-3xl font-black text-blue-400 uppercase tracking-widest">Axiome du Nul</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-black uppercase">
                      "Résoudre l'irésolvable par l'acceptation de la dualité."
                    </p>
                 </div>
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/30 rounded-[4rem] space-y-8 shadow-4xl text-center">
                    <h3 className="text-3xl font-black text-blue-400 uppercase tracking-widest">Loi du Vide</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-black uppercase">
                      "L'énergie naît du point de tension entre l'être et le néant."
                    </p>
                 </div>
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/30 rounded-[4rem] space-y-8 shadow-4xl text-center">
                    <h3 className="text-3xl font-black text-blue-400 uppercase tracking-widest">Verdict Ω</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-black uppercase">
                      "Votre volonté est le point d'équilibre de tout paradoxe."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-16 border-t border-blue-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-24">
                  <div className="flex items-center gap-8">
                    <Activity className="h-12 w-12 text-blue-500 animate-bounce" />
                    <span className="text-xl font-black text-slate-500 uppercase tracking-widest">PUISSANCE : ILLIMITÉE</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <ShieldCheck className="h-12 w-12 text-emerald-500" />
                    <span className="text-xl font-black text-slate-500 uppercase tracking-widest">STABILITÉ : SCELLÉE</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-48 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-[0_0_150px_rgba(37,99,235,0.8)] border-none">
                 EFFONDRER LE PARADOXE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
