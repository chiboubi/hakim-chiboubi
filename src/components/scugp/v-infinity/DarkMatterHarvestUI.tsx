
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Activity, Atom, Sun, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const DarkMatterHarvestUI = () => {
  const [mounted, setMounted] = useState(false);
  const [harvestLevel, setHarvestLevel] = useState(0);
  const metrics = SCUGPHubUltimate.getDarkMatterMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setHarvestLevel(prev => (prev + 0.1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Harvest Yield", val: metrics.harvest_yield, icon: Zap, color: "text-purple-400" },
          { label: "Vacuum Stability", val: metrics.vacuum_stability, icon: ShieldCheck, color: "text-blue-400" },
          { label: "Non-Baryonic Sync", val: metrics.non_baryonic_sync, icon: Atom, color: "text-emerald-400" },
          { label: "Dark Flow", val: metrics.dark_flow, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-purple-500/20 shadow-2xl rounded-3xl group hover:border-purple-500/50 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_800px_rgba(168,85,247,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[700px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="text-center p-16 bg-purple-900/20 border-b border-purple-500/30">
           <Atom className="h-24 w-24 text-purple-500 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">DARK MATTER HARVESTER Ω</CardTitle>
           <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Extraction d'Énergie de Point Zéro non-baryonique | Dr. Hakim Chibubi Void-Master</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12 space-y-16">
           <div className="relative">
              <div className="w-80 h-80 border-4 border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <InfinityIcon size={120} className="text-purple-400 animate-pulse drop-shadow-[0_0_100px_rgba(168,85,247,1)]" />
              </div>
           </div>
           <div className="text-center max-w-3xl space-y-8">
              <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-balance">
                "Le multivers est alimenté par l'invisible. Nous récoltons 27% de l'existence ignorée par la science classique pour une autonomie énergétique galactique."
              </p>
              <div className="flex justify-center gap-12">
                 <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Vacuum Flow</p>
                    <p className="text-3xl font-black text-purple-500 font-mono">1.42 PW/s</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Storage Efficiency</p>
                    <p className="text-3xl font-black text-emerald-400 font-mono">100%</p>
                 </div>
              </div>
           </div>
        </CardContent>
        <CardFooter className="p-12 border-t border-purple-500/30 bg-slate-950/50 flex justify-center">
           <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             MOISSONNER LE VIDE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
