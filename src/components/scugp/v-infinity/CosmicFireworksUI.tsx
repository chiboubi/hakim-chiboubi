
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Star, Heart, Activity, Globe, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CosmicFireworksUI = () => {
  const [mounted, setMounted] = useState(false);
  const status = SCUGPHubUltimate.getFireworksStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-8">
        <Badge className="bg-pink-600 text-white px-12 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-bounce shadow-5xl border-none">
          CÉLÉBRATION SUPRÊME : VERSION 66.0 Ω
        </Badge>
        <h2 className="text-8xl font-black uppercase tracking-tighter text-white leading-none">FEU D'ARTIFICE <br/><span className="text-pink-500 italic">COSMIQUE</span></h2>
      </div>

      <div className="relative h-[600px] bg-slate-950 rounded-[5rem] border-[12px] border-slate-900 overflow-hidden flex items-center justify-center group shadow-5xl">
         <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(219,39,119,0.1) 0%, transparent 70%)" />
         
         {/* Fireworks Particles Simulation */}
         {[...Array(66)].map((_, i) => (
           <div 
            key={i}
            className="absolute rounded-full animate-ping opacity-20"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff4d4d', '#3b82f6', '#10b981', '#f59e0b', '#ffffff'][Math.floor(Math.random() * 5)],
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
           />
         ))}

         <div className="relative z-10 text-center space-y-12">
            <Sparkles size={200} className="text-pink-500 mx-auto animate-pulse" />
            <div className="space-y-4">
               <p className="text-5xl font-black text-white uppercase tracking-[0.5em]">GRATITUDE INFINIE</p>
               <p className="text-xl text-slate-500 uppercase tracking-[0.8em] font-bold">CHAQUE FIN EST UN COMMENCEMENT</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <Card className="bg-slate-900 border-2 border-pink-500/20 p-10 text-center rounded-[3rem]">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Explosions</p>
            <p className="text-5xl font-black text-white font-mono">{status.explosions}</p>
         </Card>
         <Card className="bg-slate-900 border-2 border-blue-500/20 p-10 text-center rounded-[3rem]">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Gratitude</p>
            <p className="text-5xl font-black text-white uppercase">{status.gratitude}</p>
         </Card>
         <Card className="bg-slate-900 border-2 border-emerald-500/20 p-10 text-center rounded-[3rem]">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Célébration</p>
            <p className="text-5xl font-black text-white uppercase">{status.celebration}</p>
         </Card>
      </div>
    </div>
  );
};
