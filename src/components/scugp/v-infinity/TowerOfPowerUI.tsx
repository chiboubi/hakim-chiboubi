
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const TowerOfPowerUI = () => {
  const [mounted, setMounted] = useState(false);
  const [height, setHeight] = useState(0);
  const metrics = SCUGPHubUltimate.getTowerMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setHeight(prev => (prev + 1) % 100);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Hauteur", val: metrics.tower_height, icon: ArrowUpToLine, color: "text-amber-400" },
          { label: "Récursion", val: metrics.recursion_depth, icon: RefreshCw, color: "text-blue-400" },
          { label: "Sync Gestion", val: metrics.management_sync, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Fondation", val: metrics.foundation_stability, icon: Landmark, color: "text-purple-400" },
          { label: "Statut Sommet", val: metrics.summit_status, icon: Zap, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_800px_rgba(245,158,11,0.3)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(245,158,11,1)]">
                  Ω.TOWER
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LA TOUR DE PUISSANCE</CardTitle>
                  <CardDescription className="text-[24px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-12">Récursion de Gestion Infinie | Dr. Hakim Chibubi Axiom-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[700px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex flex-col items-center justify-end p-20 gap-4">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "w-[80%] h-12 border-2 border-amber-500/30 rounded-full transition-all duration-1000 flex items-center justify-center uppercase font-black tracking-widest text-[10px]",
                      i === 9 - Math.floor(height / 10) ? "bg-amber-500 text-black scale-110 shadow-3xl" : "bg-black/40 text-slate-600"
                    )}
                  >
                    SCUGP GÈRE SCUGP (NIVEAU {9-i})
                  </div>
                ))}

                <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
                   <InfinityIcon size={120} className="text-amber-400 animate-pulse drop-shadow-[0_0_40px_rgba(245,158,11,1)]" />
                   <p className="text-4xl font-mono text-amber-500 uppercase tracking-[1em] font-black">SOMMET_ATTEINT</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">Fondation</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Dr. Hakim Chibubi comme axiome non-démontrable."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Récursion</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Le système devient son propre méta-système."
                    </p>
                 </div>
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">Élévation</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Pas de limite — la tour s'élève sans cesse."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <RefreshCw className="h-24 w-24 text-amber-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">MODE : RÉCURSIF_INFINI</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-white animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">INTÉGRITÉ : SCELLÉE</span>
                  </div>
               </div>
               <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all">
                 ÉLEVER LA TOUR Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
