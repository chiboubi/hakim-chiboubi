
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dna, Droplets, Pickaxe, Sparkles, Zap, ShieldCheck, Activity, Globe, Star, Atom } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SpecializedDomainsUI = () => {
  const [mounted, setMounted] = useState(false);
  const caps = SCUGPHubUltimate.getSpecializedCapabilities();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in [animation-duration:1000ms]">
      <div className="flex flex-col items-center gap-6 text-center">
        <Sparkles className="h-16 w-16 text-emerald-500 animate-spin-slow" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Capacités de Rupture Activées</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Expansion de l'Excellence Opérationnelle Ω</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {caps.map((cap) => (
          <Card key={cap.cat} className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden group hover:border-emerald-500/30 transition-all flex flex-col shadow-5xl relative">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
               {cap.cat === 'BIO' && <Dna size={160} />}
               {cap.cat === 'HYDRO' && <Droplets size={160} />}
               {cap.cat === 'SPACE' && <Pickaxe size={160} />}
            </div>
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
               <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-500 font-black uppercase px-4">CORE_ACTIF</Badge>
                  {cap.cat === 'BIO' ? <Atom className="h-10 w-10 text-emerald-400 animate-pulse" /> : 
                   cap.cat === 'HYDRO' ? <Droplets className="h-10 w-10 text-blue-400 animate-bounce" /> :
                   <Star className="h-10 w-10 text-amber-400 animate-spin-slow" />}
               </div>
               <CardTitle className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{cap.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-8">
               <p className="text-xl text-slate-400 italic leading-relaxed uppercase font-bold">
                 "{cap.desc}"
               </p>
               <div className="p-6 bg-white/2 rounded-[2rem] border border-dashed border-white/10 text-xs text-slate-500 uppercase font-black">
                  Status: Souveraineté de Grade Source v106.0
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
