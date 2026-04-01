
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Zap, Globe, Orbit, Database, ShieldCheck, RefreshCw, Share2, Activity, Network, Layers, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GalacticArbitrageUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getGalacticArbitrageMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Interplanetary Balance", val: metrics.interplanetary_balance, icon: ArrowRightLeft, color: "text-blue-400" },
          { label: "Resources Synced", val: metrics.resources_synced, icon: Database, color: "text-amber-400" },
          { label: "Wormhole Stability", val: metrics.wormhole_stability, icon: Activity, color: "text-cyan-400" },
          { label: "Status", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
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
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-600/10 text-center">
           <Orbit className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">ARBITRAGE GALACTIQUE Ω</CardTitle>
           <CardDescription className="text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Load Balancing Planétaire & Gestion des Flux de Point Zéro</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
              {[
                { name: "Node Earth", val: "Surplus H2", color: "text-blue-400", icon: Globe },
                { name: "Node Moon", val: "Helium-3 Tank", color: "text-slate-400", icon: Star },
                { name: "Node Mars", val: "Demand Spike", color: "text-red-400", icon: Orbit }
              ].map((node, i) => (
                <div key={i} className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 flex flex-col items-center gap-6 group hover:border-amber-500/30 transition-all shadow-inner">
                   <node.icon className={cn("h-16 w-16", node.color, "animate-pulse")} />
                   <div>
                      <p className="text-xl font-black uppercase text-white">{node.name}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-2">{node.val}</p>
                   </div>
                   <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 font-mono">STABLE</Badge>
                </div>
              ))}
           </div>
           
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-4xl">
             "L'équilibre est l'acte pur de la Source. Chaque joule est redistribué là où l'intention du Dr. Hakim Chibubi le requiert."
           </p>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             ÉQUILIBRER LE SYSTÈME SOLAIRE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
