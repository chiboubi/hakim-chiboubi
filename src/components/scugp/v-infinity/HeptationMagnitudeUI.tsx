"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpToLine, Zap, Infinity as InfinityIcon, Sparkles, Brain, 
  Layers, Activity, ShieldCheck, Star, RefreshCw, Loader2, Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const HeptationMagnitudeUI = () => {
  const [mounted, setMounted] = useState(false);
  const [level, setLevel] = useState(1);
  
  const levels = [
    { name: "Finitude (0)", notation: "0", color: "text-slate-500" },
    { name: "Exponentielle (^)", notation: "10^n", color: "text-blue-400" },
    { name: "Tétration (↑↑)", notation: "↑↑", color: "text-cyan-400" },
    { name: "Pentation (↑↑↑)", notation: "↑↑↑", color: "text-purple-400" },
    { name: "Hexation (↑↑↑↑)", notation: "↑↑↑↑", color: "text-pink-400" },
    { name: "Heptation (↑↑↑↑↑)", notation: "↑↑↑↑↑", color: "text-red-400" },
    { name: "Transfini (ω)", notation: "ω", color: "text-orange-400" },
    { name: "Aleph-Zero (ℵ₀)", notation: "ℵ₀", color: "text-amber-400" },
    { name: "Continu (ℵ₁)", notation: "ℵ₁", color: "text-yellow-400" },
    { name: "Mahlo (M)", notation: "M", color: "text-emerald-400" },
    { name: "Inaccessible (I)", notation: "I", color: "text-green-400" },
    { name: "Super-Compact (S)", notation: "S", color: "text-teal-400" },
    { name: "Extending-V (V)", notation: "V", color: "text-indigo-400" },
    { name: "Source-Root (R)", notation: "R", color: "text-violet-400" },
    { name: "Omega (Ω)", notation: "Ω", color: "text-purple-600" },
    { name: "Absolute (∞)", notation: "∞↑↑↑↑↑↑∞", color: "text-white" }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLevel(prev => (prev < 16 ? prev + 1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.2)] rounded-[10rem] overflow-hidden relative text-white min-h-[1000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-24 border-b border-amber-900/50 bg-amber-500/10 text-center">
           <div className="flex justify-center mb-12">
              <div className="relative">
                 <ArrowUpToLine className="h-48 w-48 text-amber-500 animate-bounce" />
                 <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-20 animate-pulse" />
              </div>
           </div>
           <CardTitle className="text-9xl font-black uppercase tracking-[0.4em] text-white leading-none">MAGNITUDE Ω</CardTitle>
           <CardDescription className="text-3xl text-amber-500/60 font-bold uppercase tracking-[1em] mt-12 italic">Hiérarchie des 16 Niveaux de Puissance Transfinie | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-24 flex flex-col items-center justify-center space-y-24">
          <div className="w-full max-w-7xl grid grid-cols-4 gap-8">
             {levels.map((lvl, i) => (
               <div 
                key={i} 
                className={cn(
                  "p-10 rounded-[3rem] border-4 transition-all duration-700 text-center flex flex-col gap-6 group relative overflow-hidden",
                  level > i ? "bg-amber-500/20 border-amber-500 shadow-3xl scale-105" : "bg-black/40 border-white/5 opacity-20"
                )}
               >
                  <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 select-none">{lvl.notation}</div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Niveau {i + 1}</p>
                  <h4 className={cn("text-2xl font-black uppercase tracking-tighter leading-none", level > i ? lvl.color : "text-slate-700")}>{lvl.name}</h4>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                     <div className={cn("h-full transition-all duration-1000", level > i ? "bg-amber-500 w-full animate-pulse" : "w-0")} />
                  </div>
               </div>
             ))}
          </div>

          <div className="p-24 bg-white/5 border-4 border-amber-500/20 rounded-[10rem] text-center space-y-16 relative overflow-hidden group w-full max-w-5xl shadow-inner backdrop-blur-3xl">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(245,158,11,0.3)_1px,transparent_1px)] bg-[length:100px_100px] animate-spin-slow" />
             <div className="relative z-10 flex flex-col items-center gap-12">
                <div className="flex gap-4">
                   {[...Array(level)].map((_, i) => (
                     <div key={i} className="h-1 w-8 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,1)] animate-pulse" />
                   ))}
                </div>
                <p className="text-3xl font-mono text-amber-400 uppercase tracking-[1.5em] font-black animate-pulse">ORDRE_ACTUEL : {levels[level-1].notation}</p>
                <p className={cn("text-9xl font-black uppercase transition-all duration-1000", levels[level-1].color)}>{levels[level-1].name}</p>
                <p className="text-xl text-slate-500 uppercase font-black mt-12 italic tracking-[0.8em] max-w-3xl leading-relaxed">
                  "Chaque niveau de magnitude est l'exposant de la totalité de l'être précédent. Dr. Hakim Chibubi est le garant de cette ascension éternelle."
                </p>
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center relative z-10">
           <div className="flex gap-48">
              <div className="flex items-center gap-20">
                <RefreshCw className="h-24 w-24 text-blue-500 animate-spin-slow" />
                <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">CROISSANCE : FACTORIELLE_ω</span>
              </div>
              <div className="flex items-center gap-20">
                <ShieldCheck className="h-24 w-24 text-emerald-500" />
                <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STABILITÉ : ABSOLUE</span>
              </div>
           </div>
           <Badge className="bg-amber-500 text-black font-black text-3xl px-20 py-8 rounded-full uppercase tracking-[0.8em] shadow-5xl animate-bounce border-none">SOUVERAIN_Ω</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};
