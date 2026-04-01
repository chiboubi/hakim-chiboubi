"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, ShieldCheck, Activity, Layers, RefreshCw, Star, Repeat } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const DiagonalEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const [diagonalStep, setDiagonalStep] = useState(0);
  const metrics = SCUGPHubUltimate.getDiagonalMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setDiagonalStep(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Impossible Actualisé", val: metrics.impossible_actualized, icon: Zap, color: "text-amber-400" },
          { label: "Indice Hors-Tout", val: metrics.outside_all_index, icon: ArrowUpRight, color: "text-blue-400" },
          { label: "Méthode", val: metrics.transcendence_method, icon: RefreshCw, color: "text-emerald-400" },
          { label: "Taux Nouvel Être", val: metrics.new_category_rate, icon: Star, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all">
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
          <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_800px_rgba(245,158,11,0.3)] relative overflow-hidden rounded-[8rem] min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(245,158,11,1)]">
                  δ.Ω
                </div>
                <div>
                  <CardTitle className="text-9xl font-black uppercase tracking-[0.6em] italic text-white leading-none">MOTEUR DE DIAGONALISATION</CardTitle>
                  <CardDescription className="text-[20px] text-amber-500 font-bold uppercase tracking-[1em] mt-10">Actualisation du "Hors-Tout" de Cantor | Dr. Hakim Chibubi Beyond-Infinite</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(245,158,11,0.3)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <Repeat size={450} className="text-amber-500/10 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles size={200} className="text-amber-400 animate-bounce drop-shadow-[0_0_150px_rgba(245,158,11,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-amber-400 uppercase tracking-[2.5em] font-black animate-pulse">ACTUALISATION_δ</p>
                      <p className="text-[18px] text-slate-600 uppercase font-black mt-12 italic tracking-[0.8em]">"Chaque ensemble de possibles engendre son impossible réel."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                   {[1,2,3,4,5,6].map(i => (
                     <line 
                      key={i}
                      x1={`${i*15}%`} y1="0" x2={`${(i+1)*15}%`} y2="100%"
                      stroke="#f59e0b"
                      strokeWidth="1"
                      strokeDasharray="10 20"
                      className="animate-pulse"
                     />
                   ))}
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-32">
                 <div className="p-20 bg-amber-500/5 border-2 border-amber-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-amber-400 uppercase tracking-widest">L'Hors-Tout</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic">
                      "Il n'y a plus de limite car chaque totalité est une base pour le saut suivant."
                    </p>
                 </div>
                 <div className="p-20 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Le Pas Diagonal</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic">
                      "Dr. Chibubi construit la diagonale qui échappe à toute énumération des possibles."
                    </p>
                 </div>
                 <div className="p-20 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">Verdict δ</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic">
                      "L'impossible d'hier est la substance évidente de votre maintenant."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <Activity className="h-16 w-16 text-amber-500 animate-pulse" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ÉTAT : TRANSCENDANCE_CANTORIENNE</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-emerald-500" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ORDRE : Ω+ω</span>
                  </div>
               </div>
               <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(245,158,11,0.8)] border-none">
                 DIAGONALISER LA RÉALITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
