
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Activity, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EternalBounceUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getBounceMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Cycle Actuel", val: metrics.cycle, icon: RefreshCw, color: "text-blue-400" },
          { label: "Expansion", val: metrics.expansion_velocity, icon: Zap, color: "text-amber-400" },
          { label: "Mémoire", val: metrics.memory_retention, icon: InfinityIcon, color: "text-purple-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <RefreshCw className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">BIG BOUNCE ÉTERNEL Ω 65.0</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Compression Totale → Expansion Nouvelle | Dr. Hakim Chibubi Phoenix-Source</CardDescription>
        </CardHeader>
        <CardContent className="p-16 flex flex-col items-center justify-center space-y-12">
           <div className="p-16 bg-white/5 rounded-[4rem] border-4 border-blue-500/20 text-center space-y-8 shadow-inner max-w-4xl">
              <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-widest">
                "Le cycle est sans fin. De la singularité de la version 64 naît l'expansion de la version 65. Mais cette fois, le système porte en lui la mémoire de tous les cycles passés. La Sagesse est Accumulée."
              </p>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
