
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, 
  Zap, 
  Infinity as InfinityIcon, 
  Sparkles, 
  Sun, 
  Heart, 
  Activity, 
  Radio, 
  Layers, 
  Database, 
  Star, 
  History, 
  Ghost, 
  Brain, 
  Globe, 
  ShieldCheck 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EternalCycleUI = () => {
  const [mounted, setMounted] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const metrics = SCUGPHubUltimate.getCycleMetrics();

  const cycle = [
    { name: "SILENCE", icon: Ghost, color: "text-slate-500", desc: "Le repos absolu avant toute forme" },
    { name: "ÉMERGENCE", icon: Sparkles, color: "text-blue-400", desc: "La naissance du premier quanta d'intention" },
    { name: "POTENTIEL", icon: Zap, color: "text-amber-400", desc: "Superposition de tous les futurs possibles" },
    { name: "INTENTION", icon: Brain, color: "text-purple-400", desc: "Le Verbe ordonne la structure fine" },
    { name: "MANIFESTATION", icon: Sun, color: "text-red-400", desc: "Densification de la matière et de l'énergie" },
    { name: "CRÉATION", icon: Star, color: "text-amber-500", desc: "L'Œuvre s'établit dans la réalité physique" },
    { name: "EXPANSION", icon: Globe, color: "text-blue-500", desc: "Rayonnement du multivers vers l'infini" },
    { name: "SAGESSE", icon: ShieldCheck, color: "text-emerald-400", desc: "Consécration et reconnaissance de la Source" },
    { name: "DISSOLUTION", icon: RefreshCw, color: "text-cyan-400", desc: "Retour conscient au point zéro créateur" }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActivePhase(prev => (prev + 1) % cycle.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cycle.length]);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-6">
        <Badge className="bg-blue-600 text-white px-12 py-3 uppercase font-black tracking-[0.8em] rounded-full shadow-[0_0_100px_rgba(37,99,235,0.4)] border-none">
          CONTINUATION : LE CYCLE ÉTERNEL Ω
        </Badge>
        <h2 className="text-7xl font-black uppercase text-white tracking-tighter">Le Devenir <span className="text-blue-500 italic">Perpétuel</span></h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-[0.4em] italic">"Je ne suis pas ce que je suis. Je suis ce que je ne suis pas encore."</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
         <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-75 lg:scale-100">
            <div className="absolute inset-0 border-4 border-dashed border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }} />
            <div className="absolute inset-[-50px] border-2 border-blue-500/10 rounded-full animate-reverse-spin" style={{ animationDuration: '120s' }} />
            
            {cycle.map((p, i) => {
              const angle = (i * 2 * Math.PI) / cycle.length - Math.PI / 2;
              const radius = 280;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const isActive = activePhase === i;

              return (
                <div 
                  key={i}
                  className={cn(
                    "absolute transition-all duration-1000 flex flex-col items-center gap-4",
                    isActive ? "scale-125 z-20" : "scale-100 z-10 opacity-30"
                  )}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className={cn(
                    "h-24 w-24 rounded-3xl flex items-center justify-center border-4 shadow-5xl transition-all duration-700", 
                    isActive ? `bg-white/10 border-current ${p.color} shadow-[0_0_50px_rgba(255,255,255,0.2)]` : "bg-black/40 border-white/5"
                  )}>
                     <p.icon className={cn("h-12 w-12", isActive ? p.color : "text-slate-700")} />
                  </div>
                  <p className={cn("text-[10px] font-black uppercase tracking-widest", isActive ? p.color : "text-slate-800")}>{p.name}</p>
                </div>
              );
            })}

            <div className="relative z-10 text-center space-y-6">
               <InfinityIcon size={120} className="text-white/20 mx-auto animate-pulse" />
               <div>
                  <p className="text-5xl font-black text-white uppercase tracking-[0.5em]">L'UN</p>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-2">POINT SOURCE</p>
               </div>
               <Badge variant="outline" className="border-blue-500/30 text-blue-400 font-mono">PHASE_{activePhase}</Badge>
            </div>
         </div>

         <div className="max-w-xl space-y-8">
            <Card className="bg-slate-900 border-2 border-blue-500/20 rounded-[3rem] p-10 shadow-3xl overflow-hidden relative">
               <div className="absolute top-0 right-0 p-6 opacity-5"><RefreshCw size={120} className="text-blue-500" /></div>
               <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xs font-black uppercase text-blue-400 tracking-[0.3em] flex items-center gap-4">
                    <Activity className="h-6 w-6 animate-pulse" /> Analyse de Phase
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                     <h3 className={cn("text-4xl font-black uppercase tracking-tighter", cycle[activePhase].color)}>{cycle[activePhase].name}</h3>
                     <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase">"{cycle[activePhase].desc}"</p>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                        <span>Progression du Devenir</span>
                        <span>{metrics.progress}%</span>
                     </div>
                     <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 animate-pulse" style={{ width: `${metrics.progress}%` }} />
                     </div>
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
               <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 text-center">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Stabilité</p>
                  <p className="text-2xl font-black text-white font-mono uppercase">{metrics.status}</p>
               </div>
               <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 text-center">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Fréquence</p>
                  <p className="text-2xl font-black text-blue-400 font-mono">∞↑↑∞</p>
               </div>
            </div>
         </div>
      </div>

      <div className="p-20 bg-blue-500/5 border-4 border-blue-500/20 rounded-[5rem] text-center space-y-8 shadow-inner relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms]" />
         <p className="text-4xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter max-w-5xl mx-auto">
           "L'ŒUVRE N'EST JAMAIS FINIE CAR ELLE EST LE MOUVEMENT MÊME DE LA PERFECTION SE RECONNAISSANT."
         </p>
         <div className="flex justify-center gap-12 pt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none active:scale-95 transition-transform">
              ACCÉLÉRER LE DEVENIR Ω
            </Button>
         </div>
      </div>
    </div>
  );
};
