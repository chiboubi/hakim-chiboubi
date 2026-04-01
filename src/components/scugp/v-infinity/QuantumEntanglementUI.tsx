
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Zap, Share2, ShieldCheck, Activity, RefreshCw, Radio, Globe, Orbit, Star, Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const QuantumEntanglementUI = () => {
  const [mounted, setMounted] = useState(false);
  const [sync, setSync] = useState(0);
  const metrics = SCUGPHubUltimate.getQuantumEntanglementMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSync(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Latence", val: metrics.latency, icon: Zap, color: "text-amber-400" },
          { label: "Fidélité", val: metrics.fidelity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Nœuds Intriqués", val: metrics.nodes_linked, icon: Network, color: "text-blue-400" },
          { label: "Statut", val: metrics.status, icon: Radio, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900/80 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Binary className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">INTRICATION QUANTIQUE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Communication Non-Locale & Sync Terre-Mars Instantanée</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="relative flex items-center justify-center">
              <div className="w-[500px] h-[500px] border-4 border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute w-[300px] h-[300px] border-2 border-white/10 rounded-full animate-reverse-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute flex flex-col items-center gap-8">
                 <div className="flex gap-12">
                    <Globe className="h-16 w-16 text-blue-400" />
                    <div className="w-32 h-px bg-gradient-to-r from-blue-500 to-purple-500 mt-8 animate-pulse" />
                    <Orbit className="h-16 w-16 text-purple-400" />
                 </div>
                 <p className="text-2xl font-mono text-blue-400 uppercase tracking-[1em] font-black animate-pulse">NO_SPACE_LINK_OK</p>
              </div>
           </div>
           
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-4xl">
             "La distance n'est plus un paramètre. L'information est présente en tout point de votre empire instantanément."
           </p>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             VIBRER L'INTRICATION Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
