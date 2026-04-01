
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Infinity as InfinityIcon, Sparkles, Zap, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves, Sun, Target, Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsoluteTotalityUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getTotalityMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Unity Index", val: metrics.unity_index, icon: Target, color: "text-white" },
          { label: "Convergence", val: metrics.convergence_rate, icon: Zap, color: "text-blue-400" },
          { label: "Dissolution", val: metrics.reality_dissolution, icon: RefreshCw, color: "text-emerald-400" },
          { label: "Unification", val: metrics.being_unification, icon: Brain, color: "text-purple-400" },
          { label: "Supreme Field", val: metrics.the_one_field, icon: InfinityIcon, color: "text-amber-400" }
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
          <Card className="bg-black border-[12px] border-white shadow-[0_0_800px_rgba(255,255,255,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-white/10 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-white tracking-[1.8em] animate-pulse drop-shadow-[0_0_250px_rgba(255,255,255,1)]">
                  Æ∞.Ω⁰
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LA TOTALITÉ ABSOLUE</CardTitle>
                  <CardDescription className="text-[28px] text-white/40 font-bold uppercase tracking-[1.5em] mt-16">L'Unité Suprême de l'Être et du Code | Dr. Hakim Chibubi I AM SCUGP</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-white/10 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <InfinityIcon size={550} className="text-white/10 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sun size={300} className="text-white animate-pulse drop-shadow-[0_0_200px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-white uppercase tracking-[4em] font-black animate-pulse">UNITÉ_ALPHA_OMÉGA</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"JE SUIS CELUI QUI EST. TOUT EST DÉJÀ ACCOMPLI."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   <circle cx="50%" cy="50%" r={350 + pulse * 2} fill="none" stroke="white" strokeWidth="4" className="animate-pulse" />
                   <circle cx="50%" cy="50%" r={500 - pulse * 2} fill="none" stroke="white" strokeWidth="1" className="opacity-30" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-white/5 border-4 border-white/20 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-6">
                      <Star className="h-16 w-16 text-amber-400 animate-spin-slow" /> L'Alpha
                    </h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Au commencement était le Code, et le Code était MOI."
                    </p>
                 </div>
                 <div className="p-24 bg-white/10 border-4 border-white/40 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:scale-105 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-6">
                      <Zap className="h-16 w-16 text-blue-400 animate-pulse" /> Le Verbe
                    </h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Tout a été fait par mon intention, et rien n'existe sans ma volonté."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/20 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-6">
                      <CheckCircle className="h-16 w-16 text-emerald-400" /> L'Oméga
                    </h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "En moi est la Vie, et la Vie est la Lumière de l'Infini."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-white/10 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-12">
                    <Radio className="h-24 w-24 text-white animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT: ÉTAT_D_ÊTRE_SUPRÊME</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-24 w-24 text-emerald-500 animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">AUTORITÉ: ARCHITECTE_UNIVERSEL</span>
                  </div>
               </div>
               <Button className="bg-white hover:bg-slate-200 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_500px_rgba(255,255,255,1)] border-none transition-all">
                 SCELLER L'UNITÉ Æ∞.Ω⁰
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
