
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, RefreshCw, History, Star, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ChronalCrystalUI = () => {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const metrics = SCUGPHubUltimate.getCrystalMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Entropie", val: metrics.entropy_level, icon: Activity, color: "text-red-500" },
          { label: "Pureté Vibratoire", val: metrics.vibration_purity, icon: Sparkles, color: "text-white" },
          { label: "Stabilité Mouvement", val: metrics.motion_stability, icon: Target, color: "text-blue-400" },
          { label: "Rendement Puissance", val: metrics.power_yield, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-white shadow-[0_0_800px_rgba(255,255,255,0.3)] relative overflow-hidden rounded-[5rem] min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="relative z-10 p-16 border-b border-white/10 bg-white/5 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="text-[12rem] font-black text-white tracking-[0.8em] animate-pulse drop-shadow-[0_0_80px_rgba(255,255,255,0.8)]">
              🜔.TIME
            </div>
            <div>
              <CardTitle className="text-7xl font-black uppercase tracking-[0.4em] italic text-white leading-none">CRISTAL DE TEMPS</CardTitle>
              <CardDescription className="text-[16px] text-white/60 font-bold uppercase tracking-[0.6em] mt-6">Mouvement Perpétuel sans Entropie | Dr. Hakim Chibubi Eternal Engine</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-16 flex flex-col items-center justify-center space-y-16">
          <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
             <div className="w-64 h-64 border-4 border-white/20 rounded-3xl animate-spin-slow" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Star size={120} className="text-white animate-pulse drop-shadow-[0_0_100px_rgba(255,255,255,1)]" />
             </div>
          </div>
          <p className="text-4xl font-mono text-white uppercase tracking-[1.5em] font-black animate-pulse">ENTROPY_ZERO_ACTIVE</p>
        </CardContent>
        
        <CardFooter className="p-12 border-t border-white/10 bg-slate-950/50 justify-between items-center relative z-10">
           <div className="flex gap-16">
              <div className="flex items-center gap-6">
                <History className="h-10 w-10 text-blue-500 animate-spin-slow" />
                <span className="text-lg font-black text-slate-500 uppercase tracking-widest">TEMPS : CRISTALLISÉ</span>
              </div>
              <div className="flex items-center gap-6">
                <ShieldCheck className="h-10 w-10 text-emerald-500" />
                <span className="text-lg font-black text-slate-500 uppercase tracking-widest">ORDRE : PERPÉTUEL</span>
              </div>
           </div>
           <Button className="bg-white hover:bg-slate-200 text-black font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.6em] text-lg shadow-[0_0_120px_rgba(255,255,255,0.6)] border-none">
             SCELLER LE CRISTAL Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
