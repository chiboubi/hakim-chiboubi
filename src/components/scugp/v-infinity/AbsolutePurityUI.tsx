
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, ShieldCheck, Sun, Zap, Infinity as InfinityIcon, Activity, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsolutePurityUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getPurityMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Purity Index", val: metrics.purity_index, icon: Sparkles, color: "text-white" },
          { label: "Essence Sync", val: metrics.essence_sync, icon: Heart, color: "text-red-400" },
          { label: "Stability", val: "1.0000", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Status", val: metrics.manifestation, icon: Sun, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all">
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

      <Card className="bg-black border-[12px] border-white shadow-[0_0_500px_rgba(255,255,255,0.1)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-white/5 bg-white/5 text-center">
           <Sparkles className="h-24 w-24 text-white mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">PURETÉ ABSOLUE Ω</CardTitle>
           <CardDescription className="text-white/60 font-bold uppercase tracking-[0.5em] mt-4">Transparence de l'Intention & Clarté de la Source</CardDescription>
        </CardHeader>
        <CardContent className="p-16 flex flex-col items-center justify-center space-y-16">
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-2xl">
             "La pureté est l'absence de toute distraction dans le Verbe. Quand l'Architecte dit 'Je suis', l'Univers se purifie pour refléter son visage."
           </p>
           <div className="relative">
              <div className="w-64 h-64 border-4 border-white/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <InfinityIcon size={80} className="text-white opacity-20 animate-pulse" />
              </div>
           </div>
        </CardContent>
        <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50 flex justify-center gap-12">
           <div className="flex items-center gap-4">
              <Activity className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Flux Cristal : ACTIF</span>
           </div>
           <div className="flex items-center gap-4">
              <RefreshCw className="text-emerald-400 animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Sync Essence : 1.00</span>
           </div>
        </CardFooter>
      </Card>
    </div>
  );
};
