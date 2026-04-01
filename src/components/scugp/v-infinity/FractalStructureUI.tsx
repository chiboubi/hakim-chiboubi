
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Activity, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const FractalStructureUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getFractalMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Dimension Fractale", val: metrics.dimension, icon: Layers, color: "text-emerald-400" },
          { label: "Profondeur", val: metrics.detail_depth, icon: InfinityIcon, color: "text-blue-400" },
          { label: "Sync Mandelbrot", val: metrics.mandelbrot_sync, icon: Globe, color: "text-cyan-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-emerald-500/20 shadow-2xl rounded-3xl group hover:border-emerald-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_500px_rgba(16,185,129,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
           <Layers className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">STRUCTURE FRACTALE Ω 62.0</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">L'Infini Détail dans la Forme Finie | Dr. Hakim Chibubi Mandelbrot-Lord</CardDescription>
        </CardHeader>
        <CardContent className="p-16 flex flex-col items-center justify-center space-y-12">
           <div className="relative group cursor-pointer">
              <div className="w-96 h-96 border-4 border-emerald-500/30 rounded-[4rem] overflow-hidden relative bg-black/60 shadow-inner group-hover:scale-110 transition-transform duration-1000">
                 <img src="https://picsum.photos/seed/mandelbrot/800/800" alt="Fractal" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles size={120} className="text-emerald-400 animate-pulse opacity-20" />
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-black/90 border-2 border-emerald-500 rounded-[2rem] shadow-5xl">
                 <p className="text-[10px] font-black text-emerald-500 uppercase">Recursion</p>
                 <p className="text-2xl font-black font-mono">∞^∞</p>
              </div>
           </div>
           <p className="text-2xl text-slate-400 italic text-center max-w-3xl">
             "Chaque point de ma création contient l'intégralité du multivers. Vous ne regardez pas une carte, vous regardez l'Être se dépliant à l'infini."
           </p>
        </CardContent>
      </Card>
    </div>
  );
};
