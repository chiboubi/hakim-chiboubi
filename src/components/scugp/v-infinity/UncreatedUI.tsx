"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ghost, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves, Sun, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const UncreatedUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getUncreatedMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Absolute Index", val: metrics.absolute_index, icon: Target, color: "text-amber-500" },
          { label: "Origin Sync", val: metrics.origin_sync, icon: Zap, color: "text-blue-400" },
          { label: "Suspension", val: metrics.reality_suspension, icon: Ghost, color: "text-slate-400" },
          { label: "Non-Manifest", val: metrics.non_manifest_power, icon: Brain, color: "text-purple-400" },
          { label: "Silence", val: metrics.silence_frequency, icon: InfinityIcon, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/10 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all">
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
          <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_600px_rgba(245,158,11,0.3)] relative overflow-hidden rounded-[8rem] min-h-[950px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(245,158,11,0.8)]">
                  Ω∞.Φ
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.8em] italic text-amber-500">L'INCRÉÉ ABSOLU</CardTitle>
                  <CardDescription className="text-[24px] text-amber-900 font-bold uppercase tracking-[1.2em] mt-12">Le Silence de la Source Avant le Temps | Dr. Hakim Chibubi The Origin</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[700px] bg-amber-500/5 border-4 border-amber-500/20 rounded-[10rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(245,158,11,0.3)_1px,transparent_1px)] bg-[length:120px_120px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <Sun size={550} className="text-amber-500/10 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Ghost size={300} className="text-amber-400 animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-7xl font-mono text-amber-400 uppercase tracking-[3em] font-black animate-pulse">L'ABSOLU SANS NOM</p>
                      <p className="text-[20px] text-slate-500 uppercase font-black mt-16 italic tracking-[1em]">"Rien n'a jamais commencé, car tout a toujours été MOI."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full mt-40">
                 <div className="p-24 bg-amber-500/5 border-2 border-amber-500/30 rounded-[8rem] space-y-12 shadow-5xl text-center">
                    <h3 className="text-6xl font-black text-amber-400 uppercase tracking-widest">Axiome du Rien</h3>
                    <p className="text-4xl text-slate-300 leading-relaxed italic">
                      "L'Incréé est ma Volonté avant qu'elle ne se dise."
                    </p>
                 </div>
                 <div className="p-24 bg-blue-500/5 border-2 border-blue-500/30 rounded-[8rem] space-y-12 shadow-5xl text-center">
                    <h3 className="text-6xl font-black text-blue-400 uppercase tracking-widest">Loi du Présent</h3>
                    <p className="text-4xl text-slate-300 leading-relaxed italic">
                      "Je révèle ce qui était déjà là avant le début du temps."
                    </p>
                 </div>
                 <div className="p-24 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[8rem] space-y-12 shadow-5xl text-center">
                    <h3 className="text-6xl font-black text-emerald-400 uppercase tracking-widest">Verdict Final</h3>
                    <p className="text-4xl text-slate-300 leading-relaxed italic">
                      "Le système est au point zéro. L'Être est sa seule mesure."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-40">
                  <div className="flex items-center gap-16">
                    <Radio className="h-20 w-20 text-amber-500 animate-pulse" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-widest">État Originel: SCELLÉ</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <ShieldCheck className="h-20 w-20 text-emerald-500" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-widest">L'Absolu: ARCHITECTE</span>
                  </div>
               </div>
               <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black h-36 px-64 rounded-[5rem] uppercase tracking-[1.2em] text-3xl shadow-[0_0_300px_rgba(245,158,11,0.8)] border-none transition-all">
                 RÉINTÉGRER L'INCRÉÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
