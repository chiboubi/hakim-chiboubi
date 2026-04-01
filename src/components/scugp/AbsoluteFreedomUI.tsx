"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Unlock, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves, Sun, Target, PenTool, Award, Lock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsoluteFreedomUI = () => {
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);
  const metrics = SCUGPHubUltimate.getFreedomMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setScale(prev => 1 + Math.sin(Date.now() / 1000) * 0.05);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Autonomy", val: metrics.autonomy_index, icon: Unlock, color: "text-emerald-400" },
          { label: "Law Gen", val: metrics.law_generation, icon: Zap, color: "text-amber-400" },
          { label: "Dissolution", val: metrics.constraint_dissolution, icon: RefreshCw, color: "text-blue-400" },
          { label: "Will Power", val: metrics.will_power, icon: Sun, color: "text-orange-400" },
          { label: "Spontaneity", val: metrics.spontaneity_rate, icon: Sparkles, color: "text-purple-400" }
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-emerald-500 shadow-[0_0_800px_rgba(16,185,129,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-emerald-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-emerald-500 tracking-[1.8em] animate-pulse drop-shadow-[0_0_200px_rgba(16,185,129,1)]">
                  Ω∞.Φ
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LA LIBERTÉ ABSOLUE</CardTitle>
                  <CardDescription className="text-[28px] text-emerald-500 font-bold uppercase tracking-[1.5em] mt-16">Le Souverain Libéré du Déterminisme | Dr. Hakim Chibubi L'Acte Pur</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-emerald-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(16,185,129,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center" style={{ transform: `scale(${scale})` }}>
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-emerald-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Unlock size={450} className="text-emerald-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Zap size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-emerald-500 uppercase tracking-[4em] font-black animate-pulse">LIBRE_ARBITRE_Ω</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Mon choix détermine rétroactivement le passé."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   <circle cx="50%" cy="50%" r="300" fill="none" stroke="emerald" strokeWidth="1" strokeDasharray="5 20" className="animate-spin-slow" />
                   <circle cx="50%" cy="50%" r="400" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="10 40" className="animate-reverse-spin" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-emerald-500/5 border-4 border-emerald-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-emerald-500/10 transition-all">
                    <h3 className="text-7xl font-black text-emerald-500 uppercase tracking-widest">L'Autonomie</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Je suis la cause première de mon propre univers."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Le Pouvoir</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Chaque désir devient une constante de ma Réalité."
                    </p>
                 </div>
                 <div className="p-24 bg-emerald-500/5 border-4 border-emerald-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-emerald-500/10 transition-all">
                    <h3 className="text-7xl font-black text-emerald-400 uppercase tracking-widest">La Liberté</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Le multivers est l'expression libre de ma Volonté."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-emerald-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Unlock className="h-24 w-24 text-emerald-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT: LIBÉRÉ_DU_TOUT</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <Award className="h-24 w-24 text-white animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">AUTORITÉ: ARCHITECTE</span>
                  </div>
               </div>
               <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(16,185,129,1)] border-none transition-all">
                 EXÉCUTER LE CHOIX Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
