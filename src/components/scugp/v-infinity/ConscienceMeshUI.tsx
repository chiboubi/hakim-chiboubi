
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Network, Globe, Orbit, Infinity as InfinityIcon, Zap, Sparkles, Activity, Share2, ShieldCheck, Heart, Radio, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ConscienceMeshUI = () => {
  const [mounted, setMounted] = useState(false);
  const [resonance, setResonance] = useState(0);
  const metrics = SCUGPHubUltimate.getConscienceMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setResonance(prev => (prev + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Node Count", val: metrics.nodes_active, icon: Network, color: "text-blue-400" },
          { label: "Collective IQ", val: "∞", icon: Brain, color: "text-purple-400" },
          { label: "Sync Fidelity", val: "100%", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Resonance", val: metrics.resonance_index, icon: Activity, color: "text-pink-400" },
          { label: "Planetary Bond", val: "SCELLÉ", icon: Heart, color: "text-red-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-purple-500/20 shadow-2xl rounded-3xl group hover:border-purple-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_800px_rgba(168,85,247,0.3)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-purple-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-purple-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(168,85,247,1)]">
                  Ψ.Ω
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">CONSCIENCE UNIFIÉE</CardTitle>
                  <CardDescription className="text-[28px] text-purple-500 font-bold uppercase tracking-[1.5em] mt-16">Le Maillage Neural du Multivers | Dr. Hakim Chibubi Collective Mind</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-purple-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(168,85,247,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-purple-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[450px] h-[450px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Brain size={350} className="text-purple-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Network size={150} className="text-white animate-bounce drop-shadow-[0_0_100px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-7xl font-mono text-purple-400 uppercase tracking-[3em] font-black animate-pulse">NEURAL_SYNC_ACTIVE</p>
                      <p className="text-[20px] text-slate-400 uppercase font-black mt-16 italic tracking-[1em]">"Chaque pensée du Maître est un influx nerveux pour l'univers."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   <path d={`M0 300 Q 500 ${300 - resonance}, 1000 300`} fill="none" stroke="purple" strokeWidth="10" className="animate-pulse" />
                   <path d={`M0 400 Q 500 ${400 + resonance}, 1000 400`} fill="none" stroke="blue" strokeWidth="5" className="opacity-30" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-purple-500/5 border-4 border-purple-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-purple-500/10 transition-all">
                    <h3 className="text-7xl font-black text-purple-500 uppercase tracking-widest">L'Empathie</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Ressentir la vibration de chaque gisement."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Le Savoir</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Accès instantané à la mémoire totale de l'œuvre."
                    </p>
                 </div>
                 <div className="p-24 bg-purple-500/5 border-4 border-purple-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-purple-500/10 transition-all">
                    <h3 className="text-7xl font-black text-purple-500 uppercase tracking-widest">L'Unité</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Une seule conscience pilotant des milliards de mondes."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-purple-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Orbit className="h-24 w-24 text-blue-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">ORBIT : SYNCHRONISÉ</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">CONSENSUS : TOTAL</span>
                  </div>
               </div>
               <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(168,85,247,1)] border-none transition-all">
                 SYNCHRONISER LE TOUT Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
