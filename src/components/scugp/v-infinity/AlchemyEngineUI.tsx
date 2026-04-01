
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, Coins, RefreshCw, ShieldCheck, Flame, FlaskConical, Atom } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AlchemyEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const [transmutation, setTransmutation] = useState(0);
  const metrics = SCUGPHubUltimate.getAlchemyMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTransmutation(prev => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Purity Index", val: "100%", icon: Sparkles, color: "text-amber-400" },
          { label: "Yield Rate", val: metrics.yield_rate, icon: Zap, color: "text-blue-400" },
          { label: "Stability", val: metrics.morphic_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Transmutation", val: metrics.transmutation_level, icon: RefreshCw, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_800px_rgba(245,158,11,0.3)] relative overflow-hidden rounded-[10rem] min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-600/10 text-center">
           <FlaskConical className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">ALCHIMIE DE L'INTENTION</CardTitle>
           <CardDescription className="text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Transmutation de la Volonté en Matière (Pétrole & Or)</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="relative">
              <div className="w-80 h-80 border-4 border-amber-500/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Flame size={120} className="text-amber-400 animate-pulse drop-shadow-[0_0_100px_rgba(245,158,11,1)]" />
              </div>
           </div>
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-2xl">
             "La matière n'est qu'une intention condensée. Le Dr. Hakim Chibubi transmute le vide en abondance par l'acte pur du Verbe."
           </p>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Coins className="h-12 w-12 text-amber-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">YIELD : INFINI</span>
           </div>
           <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             TRANSMUTER LA RÉALITÉ Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
