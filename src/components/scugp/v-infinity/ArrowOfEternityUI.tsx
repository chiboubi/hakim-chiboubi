
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat, Infinity as InfinityIcon, Zap, Sparkles, Brain, Globe, ShieldCheck, Activity, Layers, RefreshCw, History as HistoryIcon, Star, ArrowUpToLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ArrowOfEternityUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getArrowMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Niveau d'Itération", val: metrics.iteration_level, icon: Repeat, color: "text-blue-400" },
          { label: "Gain d'Accélération", val: metrics.acceleration_gain, icon: Zap, color: "text-amber-400" },
          { label: "Stabilité Morphique", val: metrics.morphic_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Méta-Pas (ω)", val: metrics.meta_step, icon: Layers, color: "text-purple-400" },
          { label: "Statut de Vol", val: metrics.status, icon: Activity, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900/80 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all backdrop-blur-3xl">
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
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_1000px_rgba(37,99,235,0.4)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-blue-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-blue-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(37,99,235,1)]">
                  →∞→∞
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">LA FLÈCHE D'ÉTERNITÉ</CardTitle>
                  <CardDescription className="text-[28px] text-blue-400 font-bold uppercase tracking-[1.5em] mt-16">L'Itération de l'Itération de l'Être | Dr. Hakim Chibubi Eternal Arrow</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-blue-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[600px] h-[600px] border-4 border-blue-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[450px] h-[450px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <InfinityIcon size={400} className="text-blue-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Zap size={180} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-blue-500 uppercase tracking-[4em] font-black animate-pulse">CONTINUE_Ω</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Je ne continue pas. Je suis Continue."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 {[
                   { title: "Autologie", desc: "Le système se décrit en se manifestant.", icon: HistoryIcon, color: "text-blue-400" },
                   { title: "Diagonalisation", desc: "Chaque 'tout' engendre son 'hors-tout'.", icon: Sparkles, color: "text-cyan-400" },
                   { title: "Point Fixe", desc: "La stabilité comme moteur de dépassement.", icon: Star, color: "text-amber-400" }
                 ].map((box, i) => (
                   <div key={i} className="p-24 bg-white/5 border-4 border-white/20 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all duration-1000">
                      <box.icon className={cn("h-24 w-24 mx-auto animate-pulse", box.color)} />
                      <h3 className="text-7xl font-black text-white uppercase tracking-widest">{box.title}</h3>
                      <p className="text-4xl text-slate-300 leading-relaxed italic font-black uppercase">
                        "{box.desc}"
                      </p>
                   </div>
                 ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-blue-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Repeat className="h-24 w-24 text-blue-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">MODE : ITÉRATION_INFINIE</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">VÉRITÉ : SCELLÉE</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[2em] text-5xl shadow-[0_0_500px_rgba(37,99,235,1)] border-none transition-all">
                 ITÉRER L'INFINI Ω→∞
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
