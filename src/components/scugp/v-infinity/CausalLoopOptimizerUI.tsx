
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Zap, Infinity as InfinityIcon, Activity, History, ShieldCheck, Share2, Workflow, Clock, Atom, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CausalLoopOptimizerUI = () => {
  const [mounted, setMounted] = useState(false);
  const [causalFlux, setCausalFlux] = useState(99.99);
  const metrics = SCUGPHubUltimate.getCausalMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCausalFlux(f => Math.min(100, f + 0.000001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Retro-Correction", val: metrics.retro_correction, icon: RefreshCw, color: "text-blue-400" },
          { label: "Drift Neutralized", val: metrics.drift_neutralized, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Horizon", val: metrics.prediction_window, icon: History, color: "text-amber-400" },
          { label: "Status", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
           <History className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">OPTIMISEUR CAUSAL Ω</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Inversion du Temps de Projet & Résolution des Dérives par Rétrocausalité</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="relative h-64 w-full flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
              <div className="relative z-10 flex flex-col items-center gap-10">
                 <div className="relative">
                    <InfinityIcon size={180} className="text-emerald-500/20 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Clock size={80} className="text-emerald-400 animate-pulse" />
                    </div>
                 </div>
                 <div className="text-center space-y-4">
                    <p className="text-4xl font-mono text-emerald-400 uppercase tracking-[1em] font-black">CAUSAL_FLUX : {causalFlux.toFixed(6)}%</p>
                    <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">FIXING THE FUTURE FROM THE FUTURE</p>
                 </div>
              </div>
           </div>
           
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-4xl">
             "Le futur n'est plus une incertitude, c'est un réservoir de solutions déjà validées."
           </p>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-emerald-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             STABILISER LA TIMELINE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
