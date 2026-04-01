
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Globe, Sun, Wind, Waves, Heart, ShieldCheck, 
  Orbit, Star, Atom, Battery, FlaskConical, Droplets, 
  Rocket, RefreshCw, Activity, Layers, Radio, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EnergyUniverseUI = () => {
  const [mounted, setMounted] = useState(false);
  const [flux, setFlux] = useState(0);
  const energy = SCUGPHubUltimate.getEnergyUniverse();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFlux(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const sections = [
    { title: "Pétrolier Avancé", data: energy.petrolier, icon: Droplets, color: "text-blue-400" },
    { title: "Renouvelable", data: energy.renouvelable, icon: Sun, color: "text-emerald-400" },
    { title: "Émergent & Quantique", data: energy.emergent || [], icon: Atom, color: "text-purple-400" },
    { title: "Spatial & Lunaire", data: energy.spatial || [], icon: Orbit, color: "text-amber-400" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-6">
        <Badge className="bg-amber-500 text-black px-12 py-3 uppercase font-black tracking-[0.5em] rounded-full shadow-2xl">
          ENERGY_UNIVERSE_v50.0 Ω
        </Badge>
        <h2 className="text-7xl font-black uppercase text-white tracking-tighter">Nexus Énergétique <span className="text-amber-500">Transfini</span></h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-widest italic">"De la Terre aux Étoiles, l'Intention est notre seule source."</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {sections.map((section, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-amber-500/30 transition-all flex flex-col shadow-2xl">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <section.icon className={cn("h-12 w-12 mb-4 animate-pulse", section.color)} />
              <CardTitle className="text-2xl font-black uppercase text-white tracking-widest leading-none">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex-1 space-y-6">
              {section.data.map((module: any, j: number) => (
                <div key={j} className="p-4 bg-black/40 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all">
                  <p className="text-xs font-black text-white uppercase tracking-tighter mb-1">{module.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">{module.desc || module.capacity || module.type}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-amber-500/30 rounded-[10rem] overflow-hidden relative min-h-[800px] shadow-[0_0_500px_rgba(245,158,11,0.2)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="relative z-10 p-24 text-center border-b border-white/5">
           <div className="text-[20rem] font-black text-white/5 absolute top-0 left-1/2 -translate-x-1/2">🜔</div>
           <CardTitle className="text-[10rem] font-black uppercase tracking-[0.5em] text-white leading-none relative z-10 italic">Nexus Ω</CardTitle>
           <p className="text-3xl text-amber-500 font-bold uppercase tracking-[1em] mt-12">Universal Power Distribution Hub</p>
        </CardHeader>

        <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
           <div className="w-full max-w-7xl h-[500px] bg-white/5 border-4 border-white/10 rounded-[8rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(245,158,11,0.3)_1px,transparent_1px)] bg-[length:50px_50px]" />
              
              <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                 <div className="relative">
                    <RefreshCw size={300} className="text-amber-500/10 animate-spin-slow" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Zap size={150} className="text-amber-400 animate-pulse drop-shadow-[0_0_80px_rgba(245,158,11,1)]" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <p className="text-6xl font-mono text-white uppercase tracking-[1em] font-black animate-pulse">EFFICIENCE : ∞↑↑∞</p>
                    <p className="text-sm text-slate-500 uppercase font-black tracking-[0.5em]">"La source est en vous. L'univers est son carburant."</p>
                 </div>
              </div>

              {/* Orbital Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                 <circle cx="50%" cy="50%" r="350" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 50" className="animate-spin-slow" />
                 <circle cx="50%" cy="50%" r="450" fill="none" stroke="amber" strokeWidth="2" strokeDasharray="5 100" className="animate-reverse-spin" />
              </svg>
           </div>
        </CardContent>

        <CardFooter className="relative z-10 p-24 border-t border-white/5 bg-slate-950/80 justify-between items-center">
           <div className="flex gap-24">
              <div className="flex items-center gap-12">
                <Sun className="h-16 w-16 text-amber-500 animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.5em]">SOURCE : SPATIALE</span>
              </div>
              <div className="flex items-center gap-12">
                <ShieldCheck className="h-16 w-16 text-emerald-500" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.5em]">INTÉGRITÉ : 100%</span>
              </div>
           </div>
           <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-lg shadow-5xl border-none">
             SYNCHRONISER L'UNIVERS Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
