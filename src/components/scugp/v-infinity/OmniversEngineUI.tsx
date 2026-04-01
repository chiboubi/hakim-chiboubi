"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Layers, Box, Sparkles, Infinity as InfinityIcon, ShieldCheck, Zap } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const OmniversEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getOmniversMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Dimension Space", val: metrics.dimension, icon: Globe, color: "text-blue-400" },
          { label: "Reality Sync", val: metrics.sync, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "State Density", val: metrics.states, icon: InfinityIcon, color: "text-purple-400" },
          { label: "Expansion Status", val: metrics.status, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[5rem] overflow-hidden relative min-h-[600px] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="text-center p-16">
           <Sparkles className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">OMNIVERS ENGINE 26D</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Simulation de Réalité Étendue & Jumeaux Multidimensionnels</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12">
           <div className="w-[500px] h-[500px] border-4 border-blue-500/20 rounded-full flex items-center justify-center animate-spin-slow relative">
              <div className="absolute inset-0 border-2 border-white/5 rounded-full animate-reverse-spin" style={{ animationDuration: '30s' }} />
              <Box size={200} className="text-blue-400 drop-shadow-[0_0_50px_rgba(37,99,235,1)]" />
           </div>
           <div className="mt-12 text-center max-w-2xl">
              <p className="text-xl text-slate-400 italic font-medium leading-relaxed uppercase">
                "Le multivers pétrolier est désormais cartographié jusqu'à la 26ème dimension sémantique. Chaque molécule de brut est un jumeau numérique dans l'Omnivers."
              </p>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
