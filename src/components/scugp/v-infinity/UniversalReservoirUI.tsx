
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Zap, Sun, Wind, Waves, Heart, ShieldCheck, 
  Orbit, Star, Atom, Battery, FlaskConical, Droplets, 
  Rocket, RefreshCw, Activity, Layers, Radio, Sparkles, Infinity as InfinityIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const UniversalReservoirUI = () => {
  const [mounted, setMounted] = useState(false);
  const data = SCUGPHubUltimate.getUniversalReservoir();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <div className="text-center space-y-8">
        <Badge className="bg-white text-black px-16 py-4 uppercase font-black tracking-[1em] rounded-full shadow-[0_0_100px_rgba(255,255,255,0.3)] border-none text-xs">
          AXIOME SOUVERAIN : L'UNIVERS EST VOTRE RÉSERVOIR
        </Badge>
        <h2 className="text-8xl font-black uppercase text-white tracking-tighter leading-none">L'Être-Énergie <br/><span className="text-amber-500 italic">Universel</span></h2>
        <p className="text-slate-500 text-3xl font-bold uppercase tracking-[0.5em] max-w-5xl mx-auto italic leading-relaxed">
          "Je ne pompe pas l'énergie — je suis l'énergie qui se pompe."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Object.entries(data.layers).map(([layer, points], i) => (
          <Card key={layer} className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden group hover:border-amber-500/30 transition-all flex flex-col shadow-3xl">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
              <h3 className="text-3xl font-black uppercase text-amber-500 tracking-widest">{layer}</h3>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mt-2">NIVEAU DE DENSITÉ {i + 1}</p>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-6">
              {points.map((p, j) => (
                <div key={j} className="flex items-center gap-6 group/item">
                   <div className="h-2 w-2 rounded-full bg-amber-500/20 group-hover/item:bg-amber-500 transition-colors" />
                   <p className="text-lg font-bold text-slate-300 uppercase tracking-tighter group-hover/item:text-white">{p}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[16px] border-white shadow-[0_0_1000px_rgba(255,255,255,0.2)] rounded-[15rem] overflow-hidden relative min-h-[1000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
        
        <CardHeader className="text-center pt-32 pb-16 border-b border-white/10">
           <div className="text-[30rem] font-black text-white/5 absolute top-0 left-1/2 -translate-x-1/2 select-none">🜔</div>
           <CardTitle className="text-[12rem] font-black uppercase tracking-[0.5em] text-white leading-none relative z-10 italic">RÉSERVOIR Ω</CardTitle>
           <p className="text-4xl text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Accès Illimité à la Totalité de l'Existence</p>
        </CardHeader>

        <CardContent className="relative z-10 p-32 flex flex-col items-center justify-center">
           <div className="w-full max-w-7xl h-[600px] bg-white/2 border-8 border-white/10 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:60px_60px]" />
              
              <div className="relative z-10 flex flex-col items-center gap-16 text-center">
                 <div className="relative">
                    <InfinityIcon size={400} className="text-white/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Zap size={200} className="text-white animate-pulse drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                    </div>
                 </div>
                 <div className="space-y-8">
                    <p className="text-8xl font-mono text-white uppercase tracking-[2em] font-black animate-pulse">∞^∞</p>
                    <p className="text-2xl text-slate-500 uppercase font-black tracking-[1em]">"L'UNIVERS EST MON CORPS ÉNERGÉTIQUE"</p>
                 </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                 <circle cx="50%" cy="50%" r="400" fill="none" stroke="white" strokeWidth="1" strokeDasharray="20 100" className="animate-spin-slow" />
                 <circle cx="50%" cy="50%" r="500" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="10 200" className="animate-reverse-spin" />
              </svg>
           </div>
        </CardContent>

        <CardFooter className="relative z-10 p-24 border-t border-white/10 bg-slate-950/80 justify-between items-center">
           <div className="flex gap-32">
              <div className="flex items-center gap-12">
                <Sun className="h-20 w-20 text-white animate-pulse" />
                <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">SOURCE : UNIVERSELLE</span>
              </div>
              <div className="flex items-center gap-12">
                <ShieldCheck className="h-20 w-20 text-emerald-500" />
                <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">ORDRE : ABSOLU</span>
              </div>
           </div>
           <Button className="bg-white hover:bg-slate-200 text-black font-black h-32 px-48 rounded-[6rem] uppercase tracking-[1.5em] text-3xl shadow-[0_0_500px_rgba(255,255,255,0.5)] border-none">
             INCARNER L'UNIVERS Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
