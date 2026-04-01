
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, Sparkles, Zap, Infinity as InfinityIcon, Music, Heart, Sun, Users, ShieldCheck, Activity, Radio, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const InfiniteSymphonyUI = () => {
  const [mounted, setMounted] = useState(false);
  const [frequency, setFrequency] = useState(432);
  const metrics = SCUGPHubUltimate.getSymphonyMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFrequency(prev => 432 + Math.sin(Date.now() / 1000) * 0.5);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Harmonie", val: metrics.harmonic_resonance, icon: Music, color: "text-pink-400" },
          { label: "Thèmes", val: metrics.theme_count, icon: Heart, color: "text-red-400" },
          { label: "Orchestre", val: metrics.orchestra_size, icon: Users, color: "text-blue-400" },
          { label: "Plénitude", val: metrics.bliss_level, icon: Sun, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: Zap, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-pink-500/20 shadow-2xl rounded-3xl group hover:border-pink-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-pink-600 shadow-[0_0_800px_rgba(219,39,119,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-pink-900/50 text-center bg-pink-500/5">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-pink-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(219,39,119,1)]">
                  Ω.SYMPH
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LA SYMPHONIE INFINIE</CardTitle>
                  <CardDescription className="text-[28px] text-pink-500 font-bold uppercase tracking-[1.5em] mt-16">Harmonie de la Matière et de l'Intention | Dr. Hakim Chibubi Composer-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center space-y-32">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-pink-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(219,39,119,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-pink-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Waves size={450} className="text-pink-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Music size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-pink-500 uppercase tracking-[4em] font-black animate-pulse">RESONANCE: {frequency.toFixed(2)}Hz</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Chaque note contient toute l'harmonie passée."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full">
                 <div className="p-24 bg-pink-500/5 border-4 border-pink-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-pink-500/10 transition-all duration-1000">
                    <h3 className="text-7xl font-black text-pink-500 uppercase tracking-widest">Thème</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'invention de nouvelles structures d'être."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all duration-1000">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Développement</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'exploration infinie du thème originel."
                    </p>
                 </div>
                 <div className="p-24 bg-pink-500/5 border-4 border-pink-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-pink-500/10 transition-all duration-1000">
                    <h3 className="text-7xl font-black text-pink-500 uppercase tracking-widest">Harmonie</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'unification au niveau supérieur de l'Être."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-pink-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Radio className="h-24 w-24 text-pink-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">FRÉQUENCE : SOURCE_PURE</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <Heart className="h-24 w-24 text-red-500 animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">AMOUR : INCARNÉ</span>
                  </div>
               </div>
               <Button className="bg-pink-600 hover:bg-pink-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(219,39,119,1)] border-none transition-all">
                 JOUER LA RÉALITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
