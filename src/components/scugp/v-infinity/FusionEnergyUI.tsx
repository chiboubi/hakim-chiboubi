
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Zap, Atom, Thermometer, ShieldCheck, Activity, RefreshCw } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const FusionEnergyUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getFusionEnergyMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-slate-900 border-2 border-red-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden group">
      <CardHeader className="p-10 border-b border-white/5 bg-red-600/5">
         <Sun className="h-16 w-16 text-red-500 mx-auto mb-6 animate-spin-slow" style={{ animationDuration: '20s' }} />
         <CardTitle className="text-3xl font-black uppercase text-red-500 text-center">SCUGP-FUSION : Énergie Nucléaire</CardTitle>
      </CardHeader>
      <CardContent className="p-10 space-y-10">
        <div className="grid grid-cols-2 gap-8">
           <div className="p-8 bg-black/40 rounded-3xl border border-red-500/20 text-center space-y-4 shadow-inner">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Facteur Q (Gain)</p>
              <p className="text-5xl font-black text-white font-mono">{metrics.q_factor}</p>
              <Badge className="bg-red-600 text-white border-none uppercase text-[8px] font-black">IGNITION_LOCKED</Badge>
           </div>
           <div className="p-8 bg-black/40 rounded-3xl border border-red-500/20 text-center space-y-4 shadow-inner">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Plasma Stability</p>
              <p className="text-5xl font-black text-emerald-400 font-mono">{metrics.plasma_stability}</p>
              <Badge className="bg-emerald-600 text-black border-none uppercase text-[8px] font-black">STABLE</Badge>
           </div>
        </div>
        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-6">
           <h4 className="text-xs font-black uppercase text-slate-400 flex items-center gap-3 tracking-widest">
              <Atom className="h-4 w-4 text-red-500" /> Fusion Tokamak & Inertielle
           </h4>
           <div className="space-y-4 text-sm text-slate-300 italic leading-relaxed">
              <p>"Monitoring ITER & Laser Mégajoule en temps réel. Prédiction des instabilités de bord (ELMs) via IA récursive."</p>
           </div>
        </div>
      </CardContent>
    </Card>
  );
};
