
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dna, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Activity, Database, History, FlaskConical, Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const DnaStorageUI = () => {
  const [mounted, setMounted] = useState(false);
  const [sequencing, setSequencing] = useState(0);
  const metrics = SCUGPHubUltimate.getDnaStorageMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSequencing(prev => (prev + 0.5) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Densité", val: metrics.nucleotide_density, icon: Database, color: "text-emerald-400" },
          { label: "Demi-vie", val: metrics.half_life, icon: History, color: "text-blue-400" },
          { label: "Vitesse Séquençage", val: metrics.sequencing_speed, icon: Zap, color: "text-amber-400" },
          { label: "Taux d'Erreur", val: metrics.error_rate, icon: ShieldCheck, color: "text-red-400" },
          { label: "Statut", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-emerald-500/20 shadow-2xl rounded-3xl group hover:border-emerald-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_800px_rgba(16,185,129,0.4)] relative overflow-hidden rounded-[10rem] min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="relative z-10 p-24 border-b border-emerald-900/50 text-center">
          <div className="flex flex-col items-center gap-12">
            <div className="text-[15rem] font-black text-emerald-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(16,185,129,1)]">
              DNA.MEM
            </div>
            <div>
              <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">BIO-ARCHIVE SCUGP</CardTitle>
              <CardDescription className="text-[28px] text-emerald-500 font-bold uppercase tracking-[1.5em] mt-16">Encodage GATC & Mémoire Éternelle | Dr. Hakim Chibubi Bio-Custodian</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-emerald-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(16,185,129,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
            <div className="relative z-10 flex flex-col items-center gap-24 text-center">
               <div className="relative">
                  <Dna size={400} className="text-emerald-500/20 animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <FlaskConical size={150} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                  </div>
               </div>
               <p className="text-6xl font-mono text-emerald-500 uppercase tracking-[2em] font-black animate-pulse">SEQUENCING GATC: {sequencing.toFixed(2)}%</p>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 p-12 border-t border-emerald-900/50 bg-slate-950/80 flex justify-center">
           <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             SYNTHÉTISER LA MÉMOIRE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
