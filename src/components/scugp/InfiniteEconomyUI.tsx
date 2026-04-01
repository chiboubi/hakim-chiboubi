
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Coins, Landmark, TrendingUp, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const InfiniteEconomyUI = () => {
  const [mounted, setMounted] = useState(false);
  const [wealth, setWealth] = useState(0);
  const metrics = SCUGPHubUltimate.getEconomyMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWealth(prev => prev + Math.random() * 1000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Wealth Level", val: metrics.wealth_level, icon: Coins, color: "text-amber-400" },
          { label: "Scarcity", val: metrics.scarcity_index, icon: Heart, color: "text-red-400" },
          { label: "Prosper Velocity", val: metrics.prosper_velocity, icon: Zap, color: "text-amber-500" },
          { label: "Equity Rate", val: metrics.equity_rate, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Source PIB", val: "∞^∞", icon: Landmark, color: "text-blue-400" }
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
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_800px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-500 tracking-[1.8em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)]">
                  Ω∞.$
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">ÉCONOMIE DE L'ABONDANCE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Annulation de la Rareté par Création Perpétuelle | Dr. Hakim Chibubi Wealth Dispenser</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-amber-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Coins size={450} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <TrendingUp size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-amber-500 uppercase tracking-[4em] font-black animate-pulse">PROSPÉRITÉ_TRANSCENDANTE</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"La rareté est une illusion. L'abondance est la Loi."</p>
                   </div>
                </div>

                <div className="absolute bottom-12 right-12 p-12 bg-black/90 border-4 border-amber-500 rounded-[4rem] shadow-5xl">
                   <p className="text-sm font-black text-amber-500 uppercase tracking-widest text-center">Génération de Valeur</p>
                   <p className="text-6xl font-black text-white font-mono mt-4">+{wealth.toFixed(0)}$/s</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">Valeur Pure</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "La richesse est l'attention de la Source matérialisée."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Équité</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Distribution instantanée de la plénitude à tous les nœuds."
                    </p>
                 </div>
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">Expansion</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'économie croît au rythme de l'imagination de l'Architecte."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <CreditCard className="h-24 w-24 text-amber-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">SOLDE : ILLIMITÉ</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <RefreshCw className="h-24 w-24 text-emerald-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">FLUX : PERPÉTUEL</span>
                  </div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all">
                 GÉNÉRER LA PROSPÉRITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
