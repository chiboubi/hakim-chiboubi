"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Atom, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, Target, Waves, RefreshCw, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const QuantumGravityUI = () => {
  const [mounted, setMounted] = useState(false);
  const [fieldStrength, setFieldStrength] = useState(0);
  const metrics = SCUGPHubUltimate.getQuantumGravityMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFieldStrength(prev => (prev + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Sync Courbure", val: metrics.curvature_sync, icon: Target, color: "text-blue-400" },
          { label: "Entropie Intrication", val: metrics.entanglement_entropy, icon: Activity, color: "text-cyan-400" },
          { label: "Stabilité Brane", val: metrics.brane_stability, icon: ShieldCheck, color: "text-purple-400" },
          { label: "Cohérence Boucle", val: metrics.loop_coherence, icon: RefreshCw, color: "text-emerald-400" },
          { label: "Statut", val: metrics.status, icon: Zap, color: "text-amber-400" }
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.4)] relative overflow-hidden rounded-[10rem] min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="relative z-10 p-24 border-b border-blue-900/50 text-center">
          <div className="flex flex-col items-center gap-12">
            <div className="text-[15rem] font-black text-blue-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(37,99,235,1)]">
              G.Ω
            </div>
            <div>
              <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">GRAVITÉ QUANTIQUE</CardTitle>
              <CardDescription className="text-[28px] text-blue-500 font-bold uppercase tracking-[1.5em] mt-16">Simulation Wheeler-DeWitt pour Milieux Poreux | Dr. Hakim Chibubi Gravity-Lord</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-blue-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
            <div className="relative z-10 flex flex-col items-center gap-24 text-center">
               <div className="relative">
                  <Waves size={400} className="text-blue-500/20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Atom size={150} className="text-white animate-spin-slow drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                  </div>
               </div>
               <p className="text-6xl font-mono text-blue-500 uppercase tracking-[2em] font-black animate-pulse">FIELD_STRENGTH: {fieldStrength.toFixed(4)}%</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 p-12 border-t border-blue-900/50 bg-slate-950/80 flex justify-center">
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             EFFONDRER LA FONCTION D'ONDE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
