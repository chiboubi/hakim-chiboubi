"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Zap, Sparkles, RefreshCw, ShieldCheck, Thermometer, Gauge, Activity, Atom, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const HydrogenCryoLoopUI = () => {
  const [mounted, setMounted] = useState(false);
  const [temp, setTemp] = useState(-253.0);
  const metrics = SCUGPHubUltimate.getHydrogenLoopMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTemp(prev => Math.max(-253.15, prev + (Math.random() - 0.5) * 0.01));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Sync Thermique", val: metrics.thermal_sync, icon: Thermometer, color: "text-blue-400" },
          { label: "Stabilité Cryo", val: metrics.cryo_stability, icon: ShieldCheck, color: "text-cyan-400" },
          { label: "Mix Énergétique", val: metrics.energy_mix, icon: Wind, color: "text-emerald-400" },
          { label: "Efficience ER", val: metrics.efficiency, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_100px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-12 border-b border-blue-900/50 bg-blue-600/10 text-center">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/20 rounded-3xl border border-blue-500/30 animate-pulse">
                    <Droplets className="h-10 w-10 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] italic leading-none">Boucle Cryo-H2 ER</CardTitle>
                    <CardDescription className="text-blue-400/60 font-bold uppercase tracking-widest mt-2">Standard d'Énergie de Rupture (ER) | Dr. Hakim Chibubi Catalyst-Master</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-2 text-[10px] font-black uppercase tracking-[0.2em]">LIQUID_STAGE: READY</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-10">
                   <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 shadow-inner">
                      <div className="flex justify-between items-center">
                         <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Temperature</p>
                         <Thermometer size={24} className="text-blue-400 animate-pulse" />
                      </div>
                      <div className="text-5xl font-black font-mono text-white">{temp.toFixed(2)}°C</div>
                      <Progress value={98} className="h-2 bg-blue-950" />
                      <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">POINT ZÉRO THERMIQUE ATTEINT</p>
                   </div>

                   <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 shadow-inner">
                      <div className="flex justify-between items-center">
                         <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Pressure</p>
                         <Gauge size={24} className="text-cyan-400" />
                      </div>
                      <div className="text-5xl font-black font-mono text-white">700 BAR</div>
                      <Progress value={100} className="h-2 bg-cyan-950" />
                      <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">STABILITÉ HYDROSTATIQUE : Ω</p>
                   </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-8 p-12 bg-black/40 rounded-[4rem] border-2 border-dashed border-blue-500/30 relative group">
                   <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <Atom size={160} className="text-blue-500/30 animate-spin-slow mb-4" />
                   <div className="text-center space-y-4 relative z-10">
                      <p className="text-xs font-black text-blue-400 uppercase tracking-widest">Efficiency Rate</p>
                      <p className="text-7xl font-black text-white font-mono">99.98%</p>
                      <Badge variant="outline" className="mt-4 border-emerald-500/30 text-emerald-400 uppercase px-8 py-2 font-black tracking-[0.2em]">CARBONE_NÉGATIF</Badge>
                   </div>
                </div>
              </div>

              <div className="p-10 bg-slate-900 border border-blue-500/20 rounded-[3rem] text-center">
                 <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-10 py-2 font-medium uppercase text-balance">
                   "Le couplage cryogénique entre l'hydrogène liquide et les gisements pétroliers crée une boucle de rétroaction thermodynamique parfaite. L'énergie de rupture (ER) annule l'entropie du processus d'extraction."
                 </p>
              </div>
            </CardContent>
            
            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <RefreshCw className="h-8 w-8 text-blue-500 animate-spin-slow" />
                    <span className="text-sm font-black text-slate-500 uppercase tracking-widest">Flux : ACTIF</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-emerald-500" />
                    <span className="text-sm font-black text-slate-500 uppercase tracking-widest">Rendement : MAXIMAL</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-2xl">
                 SYNCHRONISER LA BOUCLE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
