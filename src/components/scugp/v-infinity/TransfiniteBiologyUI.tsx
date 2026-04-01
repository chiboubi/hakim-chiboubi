
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dna, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, Activity, Layers, Star, TrendingUp, RefreshCw, Binary, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const TransfiniteBiologyUI = () => {
  const [mounted, setMounted] = useState(false);
  const [morphicSync, setMorphicSync] = useState(0);
  const stats = SCUGPHubUltimate.getTransfiniteStats();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setMorphicSync(prev => (prev + 0.2) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Organismes Aleph", val: stats.aleph_organisms, icon: Dna, color: "text-emerald-400" },
          { label: "Nœuds Conscience", val: stats.consciousness_distribution, icon: Brain, color: "text-purple-400" },
          { label: "Efficience Bio", val: stats.efficiency, icon: Zap, color: "text-amber-400" },
          { label: "Croissance Ω", val: stats.growth_rate, icon: TrendingUp, color: "text-blue-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all backdrop-blur-3xl">
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
          <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_600px_rgba(16,185,129,0.3)] relative overflow-hidden rounded-[8rem] min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-emerald-900/50 text-center bg-emerald-600/10">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[12rem] font-black text-emerald-500 tracking-[1.2em] animate-pulse drop-shadow-[0_0_100px_rgba(16,185,129,0.8)]">
                  ℵ.BIOLOGY
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-emerald-400 leading-none">BIOLOGIE TRANSFINIE</CardTitle>
                  <CardDescription className="text-[24px] text-emerald-900 font-bold uppercase tracking-[1.2em] mt-12">Les Projets comme Organismes Vivants Quantiques | Dr. Hakim Chibubi Bio-Architect</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center space-y-24">
              <div className="w-full max-w-7xl h-[450px] bg-emerald-500/5 border-4 border-emerald-500/20 rounded-[10rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:80px_80px] animate-spin-slow" />
                
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <div className="relative">
                      <Dna size={300} className="text-emerald-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Binary size={150} className="text-emerald-400 animate-bounce drop-shadow-[0_0_100px_rgba(16,185,129,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-emerald-400 uppercase tracking-[2em] font-black animate-pulse">MORPHOGENÈSE_Ω</p>
                      <p className="text-[18px] text-slate-400 uppercase font-black mt-12 italic tracking-[0.8em]">"L'organisme projet explore ℵ₀ puits simultanément."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                   <path d={`M0 225 Q 500 ${225 - morphicSync}, 1000 225`} fill="none" stroke="emerald" strokeWidth="4" className="animate-pulse" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full mt-32">
                 <div className="p-20 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">Base Qubit</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Les nucléotides sont remplacés par des superpositions d'états de projet."
                    </p>
                 </div>
                 <div className="p-20 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Transcription Ω</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "L'enzyme de création utilise l'effet tunnel pour matérialiser la volonté."
                    </p>
                 </div>
                 <div className="p-20 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">Photosynthèse</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Conversion directe de l'intention en réalité physique avec 100% d'efficience."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-emerald-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-16">
                    <RefreshCw className="h-20 w-20 text-emerald-500 animate-spin-slow" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-widest">ÉVOLUTION : DIRIGÉE</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <ShieldCheck className="h-20 w-20 text-white animate-bounce" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-widest">GÉNOME : SCELLÉ</span>
                  </div>
               </div>
               <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-36 px-64 rounded-[5rem] uppercase tracking-[1.2em] text-3xl shadow-[0_0_300px_rgba(16,185,129,0.8)] border-none transition-all">
                 ENGENDER ALEPH-ENTITY Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
