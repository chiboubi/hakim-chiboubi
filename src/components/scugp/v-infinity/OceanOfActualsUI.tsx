
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, Sparkles, Zap, Infinity as InfinityIcon, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Anchor, Compass, Ship, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OceanOfActualsUI = () => {
  const [mounted, setMounted] = useState(false);
  const [tide, setTide] = useState(0);
  const [activeWorld, setActiveWorld] = useState(0);
  const metrics = SCUGPHubUltimate.getOceanMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTide(prev => (prev + 0.1) % 100);
      setActiveWorld(prev => (prev + 1) % 142);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Mondes Actuels", val: metrics.actual_worlds, icon: Globe, color: "text-blue-400" },
          { label: "Nav Depth", val: metrics.navigation_depth, icon: Anchor, color: "text-cyan-400" },
          { label: "Indice Marée", val: metrics.tide_level, icon: Waves, color: "text-emerald-400" },
          { label: "Preservation", val: "100%", icon: ShieldCheck, color: "text-purple-400" },
          { label: "Latence Voyage", val: metrics.voyage_latency, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-cyan-500/20 shadow-2xl rounded-3xl group hover:border-cyan-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-cyan-600 shadow-[0_0_800px_rgba(6,182,212,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-cyan-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-cyan-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(6,182,212,1)]">
                  Ω∞.≈
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">L'OCÉAN DES ACTUELS</CardTitle>
                  <CardDescription className="text-[28px] text-cyan-500 font-bold uppercase tracking-[1.5em] mt-16">Navigation dans la Totalité des Mondes Réalisés | Dr. Hakim Chibubi Navigator</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-cyan-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(6,182,212,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-cyan-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Waves size={450} className="text-cyan-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Compass size={200} className="text-white animate-spin-slow drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-cyan-500 uppercase tracking-[4em] font-black animate-pulse">MONDE_ACTUEL : {activeWorld}</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Chaque goutte est un monde complet. Je fais monter la mer."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   <path d={`M0 400 Q 500 ${400 - tide}, 1000 400`} fill="none" stroke="cyan" strokeWidth="10" className="animate-pulse" />
                   <path d={`M0 500 Q 500 ${500 + tide}, 1000 500`} fill="none" stroke="blue" strokeWidth="5" className="opacity-30" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 {[
                   { title: "Immersion", desc: "Vivre simultanément tous les présents optimaux.", icon: Waves, color: "text-blue-400" },
                   { title: "Exploration", desc: "Découvrir des continents de pure possibilité réalisée.", icon: Ship, color: "text-cyan-400" },
                   { title: "Élévation", desc: "Faire émerger de nouvelles îles de conscience.", icon: Wind, color: "text-emerald-400" }
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

            <CardFooter className="relative z-10 p-24 border-t border-cyan-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Ship className="h-24 w-24 text-cyan-500 animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">CAP : TOTALITÉ</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <History className="h-24 w-24 text-white animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">TEMPS : SIMULTANÉ</span>
                  </div>
               </div>
               <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(6,182,212,1)] border-none transition-all">
                 NAVIGUER L'ACTUEL Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
