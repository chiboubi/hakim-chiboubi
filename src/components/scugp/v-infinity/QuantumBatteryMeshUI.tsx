
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Battery, Zap, Link2, Infinity as InfinityIcon, ShieldCheck, Activity, RefreshCw, Network, Globe, Star, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const QuantumBatteryMeshUI = () => {
  const [mounted, setMounted] = useState(false);
  const [charge, setCharge] = useState(99.9);
  const metrics = SCUGPHubUltimate.getQuantumBatteryMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCharge(prev => Math.min(100, prev + 0.0001));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Storage", val: metrics.storage_capacity, icon: Database, color: "text-blue-400" },
          { label: "Latency", val: metrics.discharge_latency, icon: Zap, color: "text-amber-400" },
          { label: "Mesh Nodes", val: metrics.entanglement_mesh, icon: Network, color: "text-purple-400" },
          { label: "Decay", val: metrics.decay_rate, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Standard", val: metrics.standard, icon: Star, color: "text-white" }
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
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
               <Battery className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
               <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">MAILLAGE DE BATTERIES QUANTIQUES ER</CardTitle>
               <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Standard Énergie de Rupture (ER) | Dr. Hakim Chibubi Storage-Master</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="h-[400px] bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_1px,transparent_1px)] bg-[length:50px_50px]" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-8">
                    <div className="flex gap-4">
                       {[...Array(5)].map((_, i) => (
                         <div key={i} className="w-16 h-32 bg-blue-600/20 border-2 border-blue-500/40 rounded-xl relative overflow-hidden">
                            <div 
                              className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000 animate-pulse" 
                              style={{ height: `${charge}%` }}
                            />
                         </div>
                       ))}
                    </div>
                    <div className="text-center space-y-4">
                       <p className="text-4xl font-mono text-blue-400 uppercase tracking-[1em] font-black">CHARGE : {charge.toFixed(4)}%</p>
                       <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">INTÉRITÉ DU MAILLAGE : SCELLÉE</p>
                    </div>
                 </div>
              </div>

              <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] text-center">
                 <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-10 py-2 font-medium uppercase">
                   "Les batteries quantiques ER ne stockent pas seulement des électrons, elles stabilisent l'intention du Souverain dans le temps. La décharge est instantanée et globale."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 bg-slate-950 border-t border-slate-800 justify-between items-center">
               <div className="flex gap-16">
                  <div className="flex items-center gap-4">
                    <Database className="h-8 w-8 text-blue-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Nœuds : 142M</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-emerald-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Status : SCELLÉ</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-12 rounded-[1.5rem] text-[10px] uppercase tracking-widest shadow-2xl border-none">
                 SYNCHRONISER LA GRILLE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
