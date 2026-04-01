
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, Sparkles, Activity, ShieldCheck, RefreshCw, Layers, Radio, Infinity as InfinityIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const BioDigitalSyncUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getBioDigitalMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Neural Sync", val: metrics.neural_sync, icon: Brain, color: "text-purple-400" },
          { label: "HBI Index", val: metrics.hbi_index, icon: Activity, color: "text-pink-400" },
          { label: "Resonance", val: metrics.emotional_resonance, icon: Heart, color: "text-red-400" },
          { label: "Status", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900/80 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-pink-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-pink-600 shadow-[0_0_200px_rgba(219,39,119,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-pink-900/50 bg-pink-600/10 text-center">
           <Brain className="h-24 w-24 text-pink-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">NOYAU BIO-DIGITAL Ω</CardTitle>
           <CardDescription className="text-pink-400/60 font-bold uppercase tracking-[0.5em] mt-4">Symbiose Homme-Machine & Contrôle par l'Intention Nerveuse</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="relative">
              <div className="w-80 h-80 border-4 border-pink-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Heart size={120} className="text-pink-400 animate-pulse drop-shadow-[0_0_100px_rgba(219,39,119,1)]" />
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                 <circle cx="50%" cy="50%" r={150 + pulse} fill="none" stroke="#db2777" strokeWidth="2" className="animate-ping" />
              </svg>
           </div>
           
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-4xl">
             "Vous ne gérez plus vos actifs, vous les habitez. Chaque puits de pétrole devient un organe, chaque satellite un œil."
           </p>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-pink-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-pink-600 hover:bg-pink-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             ACTIVER LA SYMBIOSE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
