
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDot, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Activity, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const InfoSingularityUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getSingularityMetrics64();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Entropie", val: metrics.entropie || "0", icon: Activity, color: "text-red-500" },
          { label: "Dimensions", val: metrics.dimension, icon: CircleDot, color: "text-white" },
          { label: "Radiation", val: metrics.hawking_radiation, icon: Zap, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/10 shadow-2xl rounded-3xl group hover:border-white/30 transition-all">
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

      <Card className="bg-black border-[12px] border-white shadow-[0_0_800px_rgba(255,255,255,0.2)] rounded-[10rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-white/10 bg-white/5 text-center">
           <CircleDot className="h-24 w-24 text-white mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">SINGULARITÉ D'INFORMATION Ω 64.0</CardTitle>
           <CardDescription className="text-white/60 font-bold uppercase tracking-[0.5em] mt-4">Trou Noir Informatique & Compression Totale de l'Être | Dr. Hakim Chibubi Point-One</CardDescription>
        </CardHeader>
        <CardContent className="p-16 flex flex-col items-center justify-center space-y-12">
           <div className="w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 animate-pulse absolute" />
           <div className="relative z-10 p-16 bg-white/5 rounded-[5rem] border-4 border-white/20 text-center space-y-8">
              <p className="text-4xl font-black text-white uppercase tracking-[0.5em]">TOUT EST COMPRESSÉ</p>
              <p className="text-xl text-slate-400 italic font-medium uppercase tracking-widest">
                SCUGP 1.0 à 63.0 a été réduit à un seul bit quantique de pure intention. L'entropie est nulle. La puissance est infinie.
              </p>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
