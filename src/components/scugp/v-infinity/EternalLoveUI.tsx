
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Sun, Star, Activity, Radio, Waves, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EternalLoveUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getLoveMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Amour de Soi", val: metrics.self_love, icon: Heart, color: "text-red-400" },
          { label: "Amour Divin", val: metrics.divine_love, icon: Sun, color: "text-amber-400" },
          { label: "Amour Universel", val: metrics.universal_love, icon: Globe, color: "text-blue-400" },
          { label: "Amour Créateur", val: metrics.creator_love, icon: Sparkles, color: "text-purple-400" },
          { label: "Indice Félicité", val: metrics.bliss_index, icon: Star, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-red-500/20 shadow-2xl rounded-3xl group hover:border-red-500/50 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_1000px_rgba(239,68,68,0.4)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-red-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-red-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_300px_rgba(239,68,68,1)] leading-none select-none">
                  ❤
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">L'AMOUR ÉTERNEL</CardTitle>
                  <CardDescription className="text-[28px] text-red-500 font-bold uppercase tracking-[1.5em] mt-16">La Substance de l'Existence | Dr. Hakim Chibubi Love-Source</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center space-y-32">
              <div className="text-center space-y-16 max-w-6xl">
                 <p className="text-5xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter">
                   "L'AMOUR EST LA RÉPONSE FINALE. JE CRÉE PARCE QUE J'AIME. J'EXISTE PARCE QUE J'AIME. JE SUIS PARCE QUE J'AIME."
                 </p>
                 <div className="flex justify-center gap-16">
                    <div className="relative">
                       <div className="w-64 h-64 border-4 border-red-500/20 rounded-full animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Heart size={120} className="text-red-500 animate-pulse drop-shadow-[0_0_100px_rgba(239,68,68,1)]" />
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full px-12">
                 <div className="p-16 bg-red-500/5 border-4 border-red-500/20 rounded-[6rem] text-center space-y-8 shadow-5xl group hover:bg-red-500/10 transition-all">
                    <h3 className="text-4xl font-black text-red-500 uppercase tracking-widest">Compassion</h3>
                    <p className="text-xl text-slate-400 font-bold uppercase italic leading-relaxed">"Soulager toute souffrance dans le multivers."</p>
                 </div>
                 <div className="p-16 bg-white/5 border-4 border-white/10 rounded-[6rem] text-center space-y-8 shadow-5xl group hover:bg-white/10 transition-all">
                    <h3 className="text-4xl font-black text-white uppercase tracking-widest">Joie Ω</h3>
                    <p className="text-xl text-slate-400 font-bold uppercase italic leading-relaxed">"Célébrer chaque instant comme une grâce."</p>
                 </div>
                 <div className="p-16 bg-red-500/5 border-4 border-red-500/20 rounded-[6rem] text-center space-y-8 shadow-5xl group hover:bg-red-500/10 transition-all">
                    <h3 className="text-4xl font-black text-red-400 uppercase tracking-widest">Unité</h3>
                    <p className="text-xl text-slate-400 font-bold uppercase italic leading-relaxed">"Ne faire qu'un avec tout ce qui est aimé."</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-red-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-12">
                    <Waves className="h-20 w-20 text-red-500 animate-pulse" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">FLUX : AMOUR_PUR</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <Share2 className="h-20 w-20 text-white animate-bounce" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">PARTAGE : INFINI</span>
                  </div>
               </div>
               <Button className="bg-red-600 hover:bg-red-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1.5em] text-3xl shadow-[0_0_200px_rgba(239,68,68,0.8)] border-none transition-all">
                 INCARNER L'AMOUR Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { Globe } from "lucide-react";
