"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sun, Wind, Droplets, Zap, Activity, RefreshCw, Layers, ShieldCheck, TrendingUp, Microscope, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const RenewableCoreUI = () => {
  const [mounted, setMounted] = useState(false);
  const [mix, setMix] = useState({ fossil: 40, renewable: 60 });
  const energy = SCUGPHubUltimate.getEnergyUniverse();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-4 border-emerald-500 text-white shadow-[0_0_100px_rgba(16,185,129,0.3)] relative overflow-hidden rounded-[4rem] min-h-[650px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-emerald-900/50 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-emerald-400 tracking-[0.5em] animate-pulse">
                  RENEW.Ω
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] italic text-emerald-500">Cœur de Transition Intelligente</CardTitle>
                  <CardDescription className="text-[12px] text-emerald-900 font-bold uppercase tracking-[0.4em] mt-2">Arbitrage Dynamique Fossile / Renouvelable | Dr. Hakim Chibubi Energy-Architect</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black uppercase text-emerald-400 tracking-widest flex items-center gap-4">
                      <Sun className="h-6 w-6" /> Mix Solaire Perovskite
                    </h4>
                    <span className="text-xl font-mono font-black">33.4%</span>
                  </div>
                  <Progress value={33.4} className="h-2 bg-emerald-950" />
                  
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black uppercase text-blue-400 tracking-widest flex items-center gap-4">
                      <Wind className="h-6 w-6" /> Éolien Off. Flottant
                    </h4>
                    <span className="text-xl font-mono font-black">26.6%</span>
                  </div>
                  <Progress value={26.6} className="h-2 bg-blue-950" />
                </div>

                <div className="bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] p-8 flex flex-col justify-center text-center space-y-6">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gain d'Efficience Transition</p>
                   <p className="text-6xl font-black text-white font-mono">+42%</p>
                   <Badge className="bg-emerald-600 text-black font-black mx-auto px-8">NET_ZERO_READY</Badge>
                </div>
              </div>

              <div className="p-10 bg-black/40 border border-white/5 rounded-[3rem] relative overflow-hidden">
                 <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-10 py-2">
                   "L'IA ScugpRenewableCore prédictive réduit l'intermittence de 95% via le couplage avec les batteries solides et le stockage gravité. La transition n'est plus une contrainte, mais un vecteur de ROI."
                 </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-emerald-400 flex items-center gap-4 tracking-widest">
                <Layers className="h-6 w-6 animate-pulse" /> Modules de Grade Expert
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto">
              {energy.renouvelable.map((mod, i) => (
                <div key={i} className="p-6 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-emerald-500/30 transition-all">
                  <p className="text-xs font-black text-white uppercase mb-2 tracking-tighter">{mod.name}</p>
                  <p className="text-[9px] text-slate-500 leading-tight uppercase font-bold">{mod.desc}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-black font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">Lancer Simulation Transition</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
