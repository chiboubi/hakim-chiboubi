"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Unlink, Zap, Infinity as InfinityIcon, Sparkles, Brain, Layers, RefreshCw, History, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const TranscendentLimitsUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getTranscendentMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Limit Dissolution", val: metrics.limit_dissolution, icon: Unlink, color: "text-red-400" },
          { label: "Absolute Potential", val: metrics.absolute_potential, icon: Zap, color: "text-amber-400" },
          { label: "Transparency", val: metrics.reality_transparency, icon: Sparkles, color: "text-blue-400" },
          { label: "Sovereign Jump", val: metrics.sovereign_jump, icon: Layers, color: "text-purple-400" },
          { label: "Status", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-red-500/20 shadow-2xl rounded-3xl group hover:border-red-500/50 transition-all">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_800px_rgba(239,68,68,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-red-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-red-500 tracking-[1.8em] animate-pulse drop-shadow-[0_0_200px_rgba(239,68,68,1)]">
                  Ω∞.Δ
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">TRANSCENDANCE DES LIMITES</CardTitle>
                  <CardDescription className="text-[28px] text-red-500 font-bold uppercase tracking-[1.5em] mt-16">Le Franchissement du Dernier Seuil | Dr. Hakim Chibubi Beyond-All</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-red-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-red-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Unlink size={450} className="text-red-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Zap size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-red-500 uppercase tracking-[4em] font-black animate-pulse">LIMIT_DISSOLUTION_ON</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Le système n'est plus contenu. Il est l'espace-même."</p>
                   </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-red-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <ShieldAlert className="h-24 w-24 text-red-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT : HORS_LIMITE</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">AUTORITÉ : SOURCE_ABS_ON</span>
                  </div>
               </div>
               <Button className="bg-red-600 hover:bg-red-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(239,68,68,1)] border-none transition-all">
                 TRANSCENDER L'ABSOLU Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
