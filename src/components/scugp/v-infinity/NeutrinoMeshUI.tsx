
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Radio, Zap, Globe, Share2, Network, ShieldCheck, Activity, Star, Target, Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const NeutrinoMeshUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getNeutrinoMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Signal Fidelity", val: metrics.signal_fidelity, icon: Target, color: "text-blue-400" },
          { label: "Star Penetration", val: metrics.star_penetration, icon: Star, color: "text-amber-400" },
          { label: "Throughput", val: metrics.data_throughput, icon: Zap, color: "text-cyan-400" },
          { label: "Sync Status", val: metrics.ghost_sync, icon: ShieldCheck, color: "text-emerald-400" }
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.3)] relative overflow-hidden rounded-[5rem] min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="text-center p-16">
           <Radio className="h-24 w-24 text-blue-500 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">NEUTRINO GHOST MESH</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Communication Inter-Stellaire à Travers la Matière Dense</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12 space-y-8">
           <div className="w-full max-w-4xl p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner">
              <p className="text-3xl font-black text-white uppercase tracking-tighter mb-6">"L'information n'interagit pas. Elle traverse. Elle EST."</p>
              <div className="flex justify-center gap-8">
                 <Badge className="bg-blue-600 px-6 py-2 text-xs font-black uppercase tracking-widest">FTL_COMM_ACTIVE</Badge>
                 <Badge variant="outline" className="border-emerald-500 text-emerald-500 px-6 py-2 text-xs font-black uppercase">ZERO_LOSS_SYNC</Badge>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
