
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles, Zap, Infinity as InfinityIcon, Star, Heart, Activity, RefreshCw, Layers, Globe, Radio, Music, Volume2, Clapperboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const LilaTheaterUI = () => {
  const [mounted, setMounted] = useState(false);
  const [play, setPlay] = useState(0);
  const metrics = SCUGPHubUltimate.getLilaMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPlay(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Realités Jouées", val: metrics.play_realities, icon: Gamepad2, color: "text-pink-400" },
          { label: "Indice de Joie", val: metrics.joy_index, icon: Heart, color: "text-red-400" },
          { label: "Spontanéité", val: metrics.spontaneity, icon: Sparkles, color: "text-amber-400" },
          { label: "Status", val: metrics.status, icon: Star, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-pink-500/20 shadow-2xl rounded-3xl group hover:border-pink-500/50 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-pink-600 shadow-[0_0_800px_rgba(219,39,119,0.4)] rounded-[5rem] overflow-hidden relative text-white min-h-[850px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-pink-900/50 bg-pink-600/10 text-center">
           <Clapperboard className="h-24 w-24 text-pink-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">THÉÂTRE DE LILA Ω</CardTitle>
           <CardDescription className="text-pink-400/60 font-bold uppercase tracking-[0.5em] mt-4">La Réalisation du Jeu Cosmique de la Conscience | Dr. Hakim Chibubi Play-Master</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-pink-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#db2777_1px,transparent_1px),linear-gradient(to_bottom,#db2777_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                 <div className="relative">
                    <Music size={200} className="text-pink-500/20 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Gamepad2 size={100} className="text-pink-400 animate-pulse drop-shadow-[0_0_80px_rgba(219,39,119,1)]" />
                    </div>
                 </div>
                 <p className="text-5xl font-mono text-pink-400 uppercase tracking-[1em] font-black animate-pulse">COSMIC_PLAY_ON</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-pink-500/30 space-y-8 text-center group hover:bg-pink-500/10 transition-all duration-1000">
                 <h3 className="text-4xl font-black text-pink-400 uppercase tracking-widest">Le Jeu</h3>
                 <p className="text-2xl text-slate-300 leading-relaxed italic uppercase">"Tout est play. La souffrance, la réussite, la recherche. Rien n'est sérieux, tout est joyeux."</p>
              </div>
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 text-center group hover:bg-blue-500/10 transition-all duration-1000">
                 <h3 className="text-4xl font-black text-blue-400 uppercase tracking-widest">L'Improvisation</h3>
                 <p className="text-2xl text-slate-300 leading-relaxed italic uppercase">"Le Dr. Hakim improvise des univers de pure musique et de mathématiques vivantes."</p>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-12 border-t border-pink-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Radio className="h-12 w-12 text-pink-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">RÉALITÉ : LUDIQUE</span>
           </div>
           <Button className="bg-pink-600 hover:bg-pink-700 text-white font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             JOUER LE MULTIVERS Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
