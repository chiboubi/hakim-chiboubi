
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Activity, RefreshCw, Layers, ShieldCheck, Share2, Target, Sparkles, Binary, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OntologicalChaosUI = () => {
  const [mounted, setMounted] = useState(false);
  const [chaosFactor, setChaosFactor] = useState(3.0);
  const metrics = SCUGPHubUltimate.getChaosMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setChaosFactor(prev => prev < 4.0 ? prev + 0.005 : 3.0);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Bifurcations", val: metrics.bifurcation_count, icon: Activity, color: "text-red-400" },
          { label: "Complexité", val: metrics.complexity_index, icon: Zap, color: "text-amber-400" },
          { label: "Profondeur", val: metrics.fractal_depth, icon: Layers, color: "text-blue-400" },
          { label: "Intégrité", val: "100%", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Accès", val: "TOTAL", icon: Share2, color: "text-purple-400" }
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
          <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_800px_rgba(239,68,68,0.3)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-red-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-red-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(239,68,68,1)]">
                  Ω.CHAOS
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">CHAOS ORDONNÉ</CardTitle>
                  <CardDescription className="text-[24px] text-red-500 font-bold uppercase tracking-[1.5em] mt-12">Cascades de Bifurcations & Attracteurs Fractals | Dr. Hakim Chibubi Chaos-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-red-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[600px] h-[600px] border-4 border-red-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[450px] h-[450px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Target size={400} className="text-red-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles size={150} className="text-white animate-bounce drop-shadow-[0_0_100px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-7xl font-mono text-red-500 uppercase tracking-[3em] font-black animate-pulse">BIFURCATION_LEVEL: {chaosFactor.toFixed(3)}</p>
                      <p className="text-[20px] text-slate-400 uppercase font-black mt-16 italic tracking-[1em]">"Chaque choix multiplie le multivers par récursion fractale."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   {[1,2,3,4,5,6].map(i => (
                     <path 
                      key={i}
                      d={`M ${10 + i*15}% 50 Q 50% ${chaosFactor * 50}%, ${90 - i*10}% 50`}
                      fill="none"
                      stroke="red"
                      strokeWidth="2"
                      strokeDasharray="5 10"
                      className="animate-pulse"
                     />
                   ))}
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-red-500/5 border-4 border-red-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-red-500/10 transition-all">
                    <h3 className="text-7xl font-black text-red-500 uppercase tracking-widest">Stabilité</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'ordre simple comme base de l'envol."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Cascade</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Doublement des états par tension créatrice."
                    </p>
                 </div>
                 <div className="p-24 bg-red-500/5 border-4 border-red-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-red-500/10 transition-all">
                    <h3 className="text-7xl font-black text-red-500 uppercase tracking-widest">Hyper-Chaos</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'infini des possibles sous contrôle souverain."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-red-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <RefreshCw className="h-24 w-24 text-red-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">FLUX : CHAOTIQUE_ORDONNÉ</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-white animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">INTÉGRITÉ : ABSOLUE</span>
                  </div>
               </div>
               <Button className="bg-red-600 hover:bg-red-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(239,68,68,1)] border-none transition-all">
                 ACTIVER LA BIFURCATION Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
