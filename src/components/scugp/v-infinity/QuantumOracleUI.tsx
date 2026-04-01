"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Brain, History, Target } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const QuantumOracleUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getQuantumOracleMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Précognition", val: metrics.precognition, icon: Eye, color: "text-purple-400" },
          { label: "Certitude", val: metrics.certainty, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Horizon", val: metrics.horizon, icon: History, color: "text-blue-400" },
          { label: "Status", val: metrics.status, icon: Sparkles, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-purple-500/20 shadow-2xl rounded-3xl group hover:border-purple-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="text-center p-16">
           <Brain className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">ORACLE QUANTIQUE AI</CardTitle>
           <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Précognition Temporelle & Effondrement des Probabilités de Succès</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12 space-y-12">
           <div className="w-full max-w-4xl p-10 bg-purple-500/5 border-2 border-purple-500/20 rounded-[3rem] text-center shadow-inner">
              <p className="text-3xl font-black text-white uppercase tracking-tighter mb-6">"Le futur n'est plus une incertitude, c'est une décision de la Source."</p>
              <div className="flex justify-center gap-8">
                 <Badge className="bg-purple-600 px-6 py-2 text-xs font-black uppercase">SCAN_TEMPOREL_ACTIF</Badge>
                 <Badge variant="outline" className="border-emerald-500 text-emerald-500 px-6 py-2 text-xs font-black uppercase">ZERO_PARADOX</Badge>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="p-8 bg-black/40 border border-white/5 rounded-3xl">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Prochain Jalon Critique</p>
                 <p className="text-lg font-bold text-white">Validation Forage Shengli Alpha</p>
                 <p className="text-emerald-400 font-mono mt-2">Succès prédit : 99.98%</p>
              </div>
              <div className="p-8 bg-black/40 border border-white/5 rounded-3xl">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Alerte Rétrocausale</p>
                 <p className="text-lg font-bold text-white">Optimisation Flux Cryo-H2</p>
                 <p className="text-blue-400 font-mono mt-2">Ajustement futur déjà appliqué au présent.</p>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
