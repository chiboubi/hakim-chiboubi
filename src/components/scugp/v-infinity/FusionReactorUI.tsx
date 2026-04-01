
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sun, Zap, ShieldCheck, Activity, Atom, Thermometer, RefreshCw, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const FusionReactorUI = () => {
  const [mounted, setMounted] = useState(false);
  const [plasma, setPlasma] = useState(0);
  const metrics = SCUGPHubUltimate.getFusionSimulationMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPlasma(prev => (prev + 0.2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Temp. Plasma", val: metrics.plasma_temp, icon: Thermometer, color: "text-red-400" },
          { label: "Confinement", val: metrics.confinement_time, icon: ShieldCheck, color: "text-blue-400" },
          { label: "Rapport Gain Q", val: metrics.FACTEUR_Q, icon: Zap, color: "text-amber-400" },
          { label: "Breeding T", val: "1.42x", icon: RefreshCw, color: "text-emerald-400" },
          { label: "Statut", val: "STABLE", icon: Sun, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-red-500/20 shadow-2xl rounded-3xl group hover:border-red-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_800px_rgba(239,68,68,0.4)] rounded-[10rem] min-h-[800px] overflow-hidden relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="relative z-10 p-24 border-b border-red-900/50 text-center">
          <div className="flex flex-col items-center gap-12">
            <div className="text-[15rem] font-black text-red-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(239,68,68,1)]">
              ST.Ω
            </div>
            <div>
              <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">TOKAMAK SCUGP POWER</CardTitle>
              <CardDescription className="text-[28px] text-red-500 font-bold uppercase tracking-[1.5em] mt-16">ITER-scale fusion & Forage par Faisceaux de Particules | Dr. Hakim Chibubi Star-Creator</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-red-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
            <div className="relative z-10 flex flex-col items-center gap-24 text-center">
               <div className="relative">
                  <Sun size={400} className="text-red-500/20 animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Atom size={150} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                  </div>
               </div>
               <p className="text-6xl font-mono text-red-500 uppercase tracking-[2em] font-black animate-pulse">PLASMA_SYNC Q &gt; 10: {plasma.toFixed(2)}%</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 p-12 border-t border-red-900/50 bg-slate-950/80 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Zap className="h-12 w-12 text-amber-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ÉNERGIE : ILLIMITÉE</span>
           </div>
           <Button className="bg-red-600 hover:bg-red-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             ALLUMER LE SOLEIL Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
