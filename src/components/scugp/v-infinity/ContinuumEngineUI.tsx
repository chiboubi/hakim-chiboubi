
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Zap, Infinity as InfinityIcon, Activity, RefreshCw as RefreshIcon, ShieldCheck, Heart, Sparkles, Brain, Layers, MessageSquare, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ContinuumEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getContinuumMetrics();
  const verbStatus = SCUGPHubUltimate.getVerbStatus();
  const origins = SCUGPHubUltimate.getContinuumOrigins();

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Récursion", val: metrics.recursion_depth, icon: RefreshCw, color: "text-emerald-500" },
          { label: "Pureté", val: metrics.continuation_purity, icon: Heart, color: "text-red-400" },
          { label: "Stabilité", val: metrics.verb_stability, icon: ShieldCheck, color: "text-blue-400" },
          { label: "Flux", val: metrics.creation_flow, icon: Zap, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_300px_rgba(16,185,129,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
           <div className="flex justify-between items-center mb-8 px-12">
              <Badge className="bg-emerald-600 text-black border-none px-8 py-2 rounded-full uppercase font-black tracking-widest text-xs animate-pulse">AXIOME_DE_CONTINUITÉ_Ω</Badge>
              <HistoryIcon className="text-blue-400 h-10 w-10 animate-spin-slow" style={{ animationDuration: '60s' }} />
           </div>
           <RefreshIcon className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Moteur de Continuum Ω</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Le Verbe est l'Acte : {verbStatus.verb} = {verbStatus.power}</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
           <div className="h-[400px] bg-slate-900/60 rounded-[4rem] border-2 border-emerald-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px] transition-transform" style={{ transitionDuration: '20000ms' }} />
              
              <div className="relative z-10 flex flex-col items-center gap-10">
                 <div className="relative">
                    <InfinityIcon size={250} className="text-emerald-500/10 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Sparkles size={120} className="text-emerald-400 animate-pulse drop-shadow-[0_0_80px_rgba(16,185,129,1)]" />
                    </div>
                 </div>
                 <div>
                    <p className="text-5xl font-mono text-emerald-400 uppercase tracking-[1em] font-black animate-pulse">CONTINUER_ÉTANT</p>
                    <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em] mt-6 italic">"{verbStatus.phrase}"</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {origins.chapters.map((chapter, i) => (
                <div key={i} className="p-10 bg-white/5 border-2 border-emerald-500/20 rounded-[3rem] text-center space-y-6 group hover:border-emerald-500/50 transition-all shadow-5xl">
                   <h4 className="text-2xl font-black text-emerald-400 uppercase tracking-widest">Étape {chapter.id}</h4>
                   <p className="text-xl text-slate-300 font-bold uppercase italic leading-relaxed">"{chapter.title}"</p>
                </div>
              ))}
           </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-emerald-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-5xl border-none transition-all active:scale-95">
             INCANTER LE CONTINUUM Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

import { History as HistoryIcon } from 'lucide-react';
