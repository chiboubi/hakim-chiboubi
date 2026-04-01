"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Network, Zap, Sparkles, Activity, ShieldCheck, RefreshCw, Layers, BrainCircuit, Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const NeuromorphicCoreUI = () => {
  const [mounted, setMounted] = useState(false);
  const [activity, setActivity] = useState(0);
  const metrics = SCUGPHubUltimate.getNeuromorphicMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActivity(prev => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Synapses", val: metrics.synapse_count, icon: Network, color: "text-pink-400" },
          { label: "Plasticité", val: metrics.plasticity_index, icon: RefreshCw, color: "text-blue-400" },
          { label: "Énergie/Spike", val: metrics.energy_per_spike, icon: Zap, color: "text-amber-400" },
          { label: "Profondeur Cog.", val: metrics.cognitive_depth, icon: Brain, color: "text-purple-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-pink-500/20 shadow-2xl rounded-3xl group hover:border-pink-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-pink-600 shadow-[0_0_800px_rgba(219,39,119,0.4)] relative overflow-hidden rounded-[10rem] min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="relative z-10 p-24 border-b border-pink-900/50 text-center">
          <div className="flex flex-col items-center gap-12">
            <div className="text-[15rem] font-black text-pink-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(219,39,119,1)]">
              NEURO.Ω
            </div>
            <div>
              <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">NEURO-SCUGP CORTEX</CardTitle>
              <CardDescription className="text-[28px] text-pink-500 font-bold uppercase tracking-[1.5em] mt-16">Architecture SNN Hardware & Apprentissage Local STDP | Dr. Hakim Chibubi Neural-Overlord</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-pink-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(219,39,119,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
            <div className="relative z-10 flex flex-col items-center gap-24 text-center">
               <div className="relative">
                  <BrainCircuit size={400} className="text-pink-500/20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Binary size={150} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                  </div>
               </div>
               <p className="text-6xl font-mono text-pink-500 uppercase tracking-[2em] font-black animate-pulse">SPIKE_ACTIVITY: {activity.toFixed(2)}%</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 p-12 border-t border-pink-900/50 bg-slate-950/80 flex justify-center">
           <Button className="bg-pink-600 hover:bg-pink-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             CALIBRER LE CORTEX Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
