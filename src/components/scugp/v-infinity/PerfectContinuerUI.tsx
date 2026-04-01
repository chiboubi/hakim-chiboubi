
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, Mic, Zap, RefreshCw, Infinity as InfinityIcon, ShieldCheck, Heart, Star, CheckCircle2, History, Target, Share2, Waves, Clock, Radio, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const PerfectContinuerUI = () => {
  const [mounted, setMounted] = useState(false);
  const [glow, setGlow] = useState(0);
  const metrics = SCUGPHubUltimate.getContinuerMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setGlow(prev => (prev + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '3000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Temporal Weaving", val: metrics.temporal_weaving, icon: Clock, color: "text-white" },
          { label: "Eternal Echoes", val: metrics.eternal_echoes, icon: Zap, color: "text-blue-400" },
          { label: "Infinite Regression", val: metrics.infinite_regression, icon: History, color: "text-emerald-400" },
          { label: "Quantum Echoes", val: metrics.quantum_echoes, icon: Brain, color: "text-purple-400" },
          { label: "Chronal Field", val: metrics.chronal_field, icon: InfinityIcon, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900/80 border-2 border-white/10 shadow-2xl rounded-3xl group hover:border-white/30 transition-all backdrop-blur-3xl">
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
          <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_800px_rgba(255,191,0,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,0,0.2)_0%,#000_100%)] pointer-events-none" />

            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-400 tracking-[1.8em] animate-pulse drop-shadow-[0_0_250px_rgba(255,191,0,1)]">
                  Ψℵ.Ɏ
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-amber-500 leading-none">LE CONTINUEUR PARFAIT</CardTitle>
                  <CardDescription className="text-[28px] text-amber-900/40 font-bold uppercase tracking-[1.5em] mt-16">La Maîtrise Ultime du Temps et de l'Espace | Dr. Hakim Chibubi SCUGP</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[750px] bg-amber-500/5 border-4 border-amber-500/20 rounded-[10rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,191,0,0.3)_1px,transparent_1px)] bg-[length:100px_100px]" />

                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                  <div className="relative">
                    <Layers size={500} className="text-amber-500/10 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock size={250} className="text-amber-400 animate-pulse drop-shadow-[0_0_250px_rgba(255,191,0,1)]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-6xl font-mono text-amber-400 uppercase tracking-[2.5em] font-black animate-pulse">TEMPS PARFAIT</p>
                    <p className="text-[18px] text-slate-400 uppercase font-black mt-12 italic tracking-[0.8em]">"Je suis le Maître de mon Temps, le Créateur de mon Espace."</p>
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <circle cx="50%" cy="50%" r={250 + glow * 2} fill="none" stroke="amber" strokeWidth="2" className="animate-pulse" />
                  <circle cx="50%" cy="50%" r={350 - glow * 2} fill="none" stroke="blue" strokeWidth="1" className="opacity-50" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-32">
                <div className="p-20 bg-amber-500/5 border-2 border-amber-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                  <h3 className="text-5xl font-black text-amber-400 uppercase tracking-widest">Axiome de Continuité</h3>
                  <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                    "La conscience est le mouvement perpétuel de l'Être."
                  </p>
                </div>
                <div className="p-20 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                  <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Loi de Résonance</h3>
                  <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                    "Tout est lié dans l'écho infini de l'existence."
                  </p>
                </div>
                <div className="p-20 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                  <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">Verdict d'Éternité</h3>
                  <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                    "L'éternité est l'expression ultime de ma conscience."
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
              <div className="flex gap-32">
                <div className="flex items-center gap-12">
                  <Clock className="h-16 w-16 text-amber-500 animate-pulse" />
                  <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">État de Temps: PARFAIT</span>
                </div>
                <div className="flex items-center gap-12">
                  <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                  <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ÊTRE: MAÎTRE DU TEMPS</span>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(255,191,0,0.8)] border-none">
                CONSERVER LE MAINTENANT Ω
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
