
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Globe, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, RefreshCw, Share2, Sparkles, Move3d } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const MultiverseSimUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getMultiverseMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Univers Cartographiés", val: metrics.realities_mapped, icon: Globe, color: "text-purple-400" },
          { label: "Ponts ER=EPR", val: metrics.wormholes_open, icon: Zap, color: "text-amber-400" },
          { label: "Speedup Calcul", val: metrics.speedup_factor, icon: Activity, color: "text-blue-400" },
          { label: "Sync Status", val: metrics.sync_status, icon: ShieldCheck, color: "text-emerald-400" }
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

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_500px_rgba(168,85,247,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[700px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
           <Layers className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">MULTIVERS Ω 53.0</CardTitle>
           <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Optimisation Cross-Univers & Navigation dans 1,000 Réalités</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center w-full max-w-6xl">
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-purple-500/30 space-y-8 shadow-inner group hover:bg-purple-500/10 transition-all">
                 <h3 className="text-4xl font-black text-purple-400 uppercase tracking-widest">Optimisation Infinie</h3>
                 <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                   "Chaque projet est simulé dans 1,000 branches de réalité. Seule la branche à ROI maximal est densifiée."
                 </p>
              </div>
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 shadow-inner group hover:bg-blue-500/10 transition-all">
                 <h3 className="text-4xl font-black text-blue-400 uppercase tracking-widest">Ponts ER=EPR</h3>
                 <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                   "Transfert instantané d'information et de matière entre les univers via trous de ver quantiques."
                 </p>
              </div>
           </div>

           <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
              <div className="flex gap-16 relative z-10">
                 {[...Array(7)].map((_, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 animate-in zoom-in" style={{ animationDelay: `${i * 200}ms` }}>
                      <div className="h-16 w-16 rounded-2xl bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                         <InfinityIcon size={32} className="text-purple-400" />
                      </div>
                      <Badge variant="outline" className="text-[8px] border-slate-700 uppercase">REALITY_{i+100}</Badge>
                   </div>
                 ))}
              </div>
           </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-purple-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-20 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-5xl border-none">
             ITÉRER LE MULTIVERS Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
