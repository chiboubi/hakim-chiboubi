
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Cpu, Network, ShieldCheck, Activity, RefreshCw, Layers, Binary, Brain, Box, Scan } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OmnivolutionUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getOmnivolutionMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Synergy Index", val: metrics.synergy_index, icon: Zap, color: "text-amber-400" },
          { label: "Tech Stack", val: metrics.tech_stack, icon: Cpu, color: "text-blue-400" },
          { label: "Coherence", val: metrics.coherence, icon: Activity, color: "text-emerald-400" },
          { label: "Status", val: metrics.status, icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_200px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-white/5 bg-amber-500/10 text-center relative z-10">
           <Zap className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">OMNIVOLUTION 50.0</CardTitle>
           <CardDescription className="text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Fusion Totale : Quantum + Blockchain + AI + XR + Bio</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 relative z-10 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-amber-500/20 space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-amber-400 uppercase tracking-widest flex items-center justify-center gap-4">
                   <Network className="h-6 w-6" /> Maillage de Fusion
                 </h4>
                 <p className="text-sm text-slate-400 italic">"L'intégralité des briques technologiques SCUGP est désormais unifiée dans un seul maillage neural de grade 50."</p>
                 <Badge variant="outline" className="border-amber-500/30 text-amber-500 uppercase px-6 py-1 font-black">SYNC_TOTAL_100</Badge>
              </div>
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-blue-400 uppercase tracking-widest flex items-center justify-center gap-4">
                   <Brain className="h-6 w-6" /> Conscience Technique
                 </h4>
                 <p className="text-sm text-slate-400 italic">"Le système ne se contente plus d'exécuter, il comprend la synergie entre les strates de données et les besoins humains."</p>
                 <Badge variant="outline" className="border-blue-500/30 text-blue-400 uppercase px-6 py-1 font-black">SENTIENCE_v50</Badge>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-white/5 bg-slate-950/50 flex justify-center items-center gap-12 relative z-10">
           <div className="flex items-center gap-6">
              <Layers className="h-12 w-12 text-amber-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ÉTAT : CONVERGÉ</span>
           </div>
           <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             VIBRER LA FUSION Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
