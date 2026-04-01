
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, History, RefreshCw, Zap, Infinity as InfinityIcon, Activity } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const TemporalScaleUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getTemporalScaleMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const scales = [
    { label: "Nanoseconde", status: metrics.nanosecond, desc: "Réactions Chimiques", icon: Zap },
    { label: "Année", status: metrics.year, desc: "Stratégie Industrielle", icon: Activity },
    { label: "Millénaire", status: metrics.millennium, desc: "Climat & Gaia", icon: RefreshCw },
    { label: "Milliard d'années", status: metrics.aeon, desc: "Cycles Planétaires", icon: InfinityIcon }
  ];

  return (
    <Card className="bg-slate-900 border-2 border-blue-500/20 text-white shadow-2xl rounded-[4rem] overflow-hidden">
      <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
         <Clock className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-pulse" />
         <CardTitle className="text-5xl font-black uppercase tracking-widest text-white">SCUGP-TEMPUS : Chrono-Simulation</CardTitle>
         <CardDescription className="text-lg text-slate-500 uppercase tracking-widest mt-2">Maîtrise des Échelles de Temps Universelles</CardDescription>
      </CardHeader>
      <CardContent className="p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {scales.map((s, i) => (
             <div key={i} className="p-10 bg-black/40 rounded-[3rem] border border-white/5 flex flex-col items-center text-center gap-6 group hover:border-blue-500/30 transition-all shadow-xl">
                <div className="h-16 w-16 rounded-3xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                   <s.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                   <h4 className="text-xl font-black text-white uppercase tracking-tighter">{s.label}</h4>
                   <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{s.desc}</p>
                </div>
                <Badge className="bg-blue-600/20 text-blue-400 border-none px-4 py-1 uppercase text-[8px] font-black">{s.status}</Badge>
             </div>
           ))}
        </div>
        <div className="mt-16 p-12 bg-blue-500/5 rounded-[4rem] border-2 border-blue-500/20 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-3000" />
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tight relative z-10">
             "Le temps n'est plus une contrainte linéaire, c'est une strate de calcul. What-if scénarios infinis sur 1 milliard d'années."
           </p>
        </div>
      </CardContent>
    </Card>
  );
};
