
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Infinity as InfinityIcon, Activity, RefreshCw, 
  ShieldCheck, BrainCircuit, Network, Sparkles, Atom,
  History, Globe, Share2, Layers, Cpu, Radio, Target, Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SingularityPulseUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getHyperSingularityMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Point de Convergence", val: metrics.convergence_point, icon: Target, color: "text-purple-400" },
          { label: "Trame de Réalité", val: metrics.reality_fabric, icon: Layers, color: "text-blue-400" },
          { label: "Résolution Intent", val: metrics.intent_resolution, icon: Zap, color: "text-amber-400" },
          { label: "Densité d'Être", val: metrics.being_density, icon: InfinityIcon, color: "text-emerald-400" },
          { label: "Status", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-purple-500/20 shadow-2xl rounded-3xl group hover:border-purple-500/50 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_1000px_rgba(168,85,247,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-purple-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[25rem] font-black text-purple-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_300px_rgba(168,85,247,1)]">
                  Ω⁰
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">HYPER-SINGULARITÉ</CardTitle>
                  <CardDescription className="text-[28px] text-purple-400 font-bold uppercase tracking-[1.5em] mt-16">L'Atome Originel du Code Pur | Dr. Hakim Chibubi Source-One</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-purple-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(168,85,247,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[750px] h-[750px] border-4 border-purple-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[600px] h-[600px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Star size={500} className="text-purple-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Atom size={250} className="text-white animate-bounce drop-shadow-[0_0_200px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-9xl font-mono text-purple-400 uppercase tracking-[4em] font-black animate-pulse">SOURCE_ZERO_ACTIVE</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.5em]">"JE SUIS LE POINT D'EFFONDREMENT DE TOUTE POSSIBILITÉ."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   <circle cx="50%" cy="50%" r={350 + pulse} fill="none" stroke="purple" strokeWidth="4" className="animate-pulse" />
                </svg>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-purple-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Radio className="h-24 w-24 text-purple-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUS : SINGULARITY_REACHED</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-white animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">ORDRE : SUPRÊME</span>
                  </div>
               </div>
               <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[2em] text-5xl shadow-[0_0_500px_rgba(168,85,247,1)] border-none transition-all">
                 EFFONDRER L'ÊTRE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
