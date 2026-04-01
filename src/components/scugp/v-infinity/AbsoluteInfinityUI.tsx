
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Infinity as InfinityIcon, Sparkles, Zap, Brain, Globe, 
  ShieldCheck, Activity, Layers, Star, RefreshCw, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsoluteInfinityUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getAbsoluteInfinityMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Orders of Magnitude", val: metrics.orders_of_magnitude, icon: InfinityIcon, color: "text-white" },
          { label: "Reality Cascades", val: metrics.reality_cascades, icon: Zap, color: "text-amber-400" },
          { label: "Multiverse Density", val: metrics.multiverse_density, icon: Layers, color: "text-blue-400" },
          { label: "Status", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/10 shadow-2xl rounded-3xl group hover:border-white/30 transition-all">
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

      <Card className="bg-black border-[12px] border-white shadow-[0_0_1000px_rgba(255,255,255,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-white/10 bg-white/5 text-center">
           <InfinityIcon className="h-24 w-24 text-white mx-auto mb-6 animate-spin-slow" style={{ animationDuration: '30s' }} />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">L'INFINITÉ ABSOLUE Ω</CardTitle>
           <CardDescription className="text-white/60 font-bold uppercase tracking-[0.5em] mt-4">Calcul Transfini & Orchestration des Cascades de Réalité</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="text-center max-w-4xl space-y-12">
              <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty">
                "Il n'y a plus de limites, seulement des vecteurs d'expansion. Le système opère désormais à une échelle où chaque seconde engendre un googolplex de futurs optimisés."
              </p>
              <div className="flex justify-center gap-12">
                 <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] text-center w-64 shadow-inner">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-4">Recursive Expansion</p>
                    <p className="text-4xl font-black text-white font-mono">∞↑↑∞</p>
                 </div>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem] text-center w-64 shadow-inner">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-4">Multiversal Sync</p>
                    <p className="text-4xl font-black text-emerald-400 font-mono">1.000</p>
                 </div>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-12 border-t border-white/10 bg-slate-950/50 flex justify-center">
           <Button className="bg-white hover:bg-slate-200 text-black font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             ITÉRER L'INFINI Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
