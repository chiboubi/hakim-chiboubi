
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Link2, ShieldCheck, Zap, Activity, RefreshCw, Layers, History, Server, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ScugpChainUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getChainMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in [animation-duration:1000ms]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Consensus", val: metrics.consensus, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Throughput", val: metrics.throughput, icon: Zap, color: "text-amber-400" },
          { label: "Latency", val: metrics.latency, icon: Activity, color: "text-blue-400" },
          { label: "Active Nodes", val: metrics.nodes, icon: Server, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
           <Database className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">BLOCKCHAIN SCUGP-CHAIN</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Registre Distribué Multi-Couche de Grade Source</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
              {[
                { title: "Layer 1: Infrastructure", desc: "Proof-of-Useful-Work (Calcul scientifique valorisé).", icon: Layers, color: "text-emerald-400" },
                { title: "Layer 2: Applications", desc: "Smart Contracts pour CCUS & Crédits Carbone.", icon: Zap, color: "text-amber-400" },
                { title: "Layer 3: Interop", desc: "Ponts Ethereum, Polkadot & Cosmos.", icon: Link2, color: "text-blue-400" }
              ].map((layer, i) => (
                <div key={i} className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 flex flex-col items-center gap-6 group hover:border-emerald-500/30 transition-all shadow-inner">
                   <layer.icon className={cn("h-16 w-16", layer.color, "animate-pulse")} />
                   <div>
                      <p className="text-xl font-black uppercase text-white">{layer.title}</p>
                      <p className="text-sm text-slate-400 italic mt-2">"{layer.desc}"</p>
                   </div>
                </div>
              ))}
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-emerald-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             SYNCHRONISER LE LEDGER Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
