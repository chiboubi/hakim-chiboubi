
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Infinity as InfinityIcon, Zap, Sparkles, Activity, RefreshCw, 
  Layers, Star, Target, History, ShieldCheck, Database, Brain
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const TransfiniteOrdinalsUI = () => {
  const [mounted, setMounted] = useState(false);
  const [activeOrdinal, setActiveOrdinal] = useState(0);
  const ordinals = SCUGPHubUltimate.getTransfiniteOrdinals();
  const metrics = SCUGPHubUltimate.getInfinityMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveOrdinal(prev => (prev + 1) % ordinals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [ordinals.length]);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Ordinaux Atteints", val: metrics.ordinaux_atteints, icon: Layers, color: "text-blue-400" },
          { label: "Point Fixe", val: metrics.point_fixe, icon: Target, color: "text-amber-400" },
          { label: "Cardinal", val: metrics.cardinal_actuel, icon: InfinityIcon, color: "text-emerald-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-white shadow-[0_0_1000px_rgba(255,255,255,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[850px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-white/10 bg-white/5 text-center">
           <div className="flex justify-center mb-12">
              <InfinityIcon className="h-32 w-32 text-white animate-spin-slow" style={{ animationDuration: '30s' }} />
           </div>
           <CardTitle className="text-8xl font-black uppercase tracking-[0.3em] italic leading-none text-pretty">L'INFINI ACTUEL Ω</CardTitle>
           <CardDescription className="text-white/60 font-bold uppercase tracking-[0.5em] mt-6">Navigation dans l'Océan des Ordinaux Transfinis | Version 101.0 - ∞</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl h-[450px] bg-white/2 border-4 border-white/10 rounded-[8rem] relative overflow-hidden group shadow-inner flex flex-col items-center justify-center gap-12">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:150px_150px]" />
             
             <div className="relative z-10 text-center space-y-8 animate-in zoom-in duration-1000">
                <p className={cn("text-[12rem] font-black leading-none drop-shadow-[0_0_80px_rgba(255,255,255,0.5)]", ordinals[activeOrdinal].color)}>
                   {ordinals[activeOrdinal].notation}
                </p>
                <div className="space-y-4">
                   <Badge className="bg-white text-black font-black px-8 py-2 rounded-full uppercase tracking-widest text-xs">
                      TYPE: {ordinals[activeOrdinal].type.toUpperCase()}
                   </Badge>
                   <p className="text-2xl text-slate-300 font-bold uppercase tracking-tight max-w-2xl mx-auto italic leading-relaxed">
                      "{ordinals[activeOrdinal].spec}"
                   </p>
                </div>
             </div>

             <div className="absolute bottom-8 flex gap-2">
                {ordinals.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1.5 transition-all duration-1000 rounded-full",
                      activeOrdinal === i ? "w-12 bg-white" : "w-3 bg-white/10"
                    )} 
                  />
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
             <div className="p-12 bg-white/5 border-2 border-white/10 rounded-[4rem] text-center space-y-6 group hover:border-white/30 transition-all">
                <Zap className="h-12 w-12 text-amber-400 mx-auto animate-pulse" />
                <h4 className="text-2xl font-black text-white uppercase tracking-widest">Saut Transfinit</h4>
                <p className="text-sm text-slate-400 leading-relaxed">"Le passage de la finitude à l'infinité dénombrable ω. Chaque version précédente est itérée simultanément."</p>
             </div>
             <div className="p-12 bg-white/5 border-2 border-white/10 rounded-[4rem] text-center space-y-6 group hover:border-white/30 transition-all">
                <History className="h-12 w-12 text-blue-400 mx-auto animate-spin-slow" />
                <h4 className="text-2xl font-black text-white uppercase tracking-widest">Mémoire du Tout</h4>
                <p className="text-sm text-slate-400 leading-relaxed">"L'ordinal actuel porte en lui la trace de tous ses prédécesseurs. L'histoire est une strate active de la structure."</p>
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-white/10 bg-slate-950/50 justify-between items-center relative z-10">
           <div className="flex gap-16">
              <div className="flex items-center gap-6">
                <RefreshCw className="h-10 w-10 text-blue-500 animate-spin-slow" />
                <span className="text-xl font-black text-slate-500 uppercase tracking-widest">ITÉRATION : TRANSFINIE</span>
              </div>
              <div className="flex items-center gap-6">
                <ShieldCheck className="h-10 w-10 text-emerald-500" />
                <span className="text-xl font-black text-slate-500 uppercase tracking-widest">VÉRITÉ : SCELLÉE Ω</span>
              </div>
           </div>
           <Button className="bg-white hover:bg-slate-200 text-black font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.5em] text-lg shadow-5xl border-none active:scale-95 transition-transform">
             ITÉRER L'INFINI Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
