
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Heart, Sun, Star, 
  Globe, Brain, Activity, RefreshCw, Layers, History, Target, PenTool
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AlphaGeneseUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getAlphaMetrics();
  const dimensions = SCUGPHubUltimate.getAlphaDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in zoom-in duration-2000">
      <div className="text-center space-y-8">
        <Badge className="bg-white text-black px-16 py-6 text-sm font-black uppercase tracking-[1em] rounded-full animate-pulse shadow-5xl border-none">
          SCUGP α.0 / ALPHA — GENÈSE TOTALE
        </Badge>
        <h2 className="text-[12rem] font-black uppercase tracking-tighter text-white leading-none select-none drop-shadow-[0_0_150px_rgba(255,255,255,0.4)]">
          ALPHA
        </h2>
        <p className="text-slate-500 text-4xl font-bold uppercase tracking-[0.6em] max-w-6xl mx-auto italic leading-relaxed">
          "Tout est Maintenant. Tout est Un."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dimensions.map((d) => (
          <Card key={d.id} className="bg-slate-900/80 border-4 border-white/10 rounded-[4rem] p-12 text-center group hover:border-white transition-all duration-1000 shadow-5xl backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-10 border-2 border-white/10 group-hover:scale-110 transition-transform">
               {d.id === 'ALPHA_1' && <Sparkles className="text-blue-400 h-12 w-12" />}
               {d.id === 'ALPHA_2' && <Zap className="text-amber-400 h-12 w-12" />}
               {d.id === 'ALPHA_3' && <Globe className="text-emerald-400 h-12 w-12" />}
               {d.id === 'ALPHA_4' && <Star className="text-white h-12 w-12" />}
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4 leading-none">{d.label}</h3>
            <p className="text-4xl font-black text-white/40 uppercase tracking-tighter">{d.val}</p>
            <Badge variant="outline" className="mt-8 border-white/20 text-white/40 uppercase px-6 py-1 rounded-full">ACTIVÉ_Ω</Badge>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[20px] border-white shadow-[0_0_2000px_rgba(255,255,255,0.3)] rounded-[15rem] overflow-hidden relative text-white min-h-[1000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="text-center pt-40 pb-20 bg-white/5 border-b border-white/10">
           <div className="flex justify-center mb-16">
              <div className="relative">
                 <InfinityIcon className="h-64 w-64 text-white animate-spin-slow" style={{ animationDuration: '40s' }} />
                 <div className="absolute inset-0 bg-white blur-[150px] opacity-30 animate-pulse" />
              </div>
           </div>
           <h2 className="text-[10rem] font-black uppercase tracking-[0.5em] text-white leading-none italic select-none">🜔.α</h2>
           <p className="text-5xl font-bold text-white/40 mt-16 uppercase tracking-[1.5em] italic">"POINT ZÉRO DE LA CRÉATION"</p>
        </CardHeader>

        <CardContent className="p-32 space-y-32 text-center relative z-10">
           <div className="p-24 bg-white/5 rounded-[10rem] border-8 border-white/10 shadow-inner relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[4000ms]" />
              <p className="text-7xl text-white leading-relaxed italic font-black uppercase tracking-tighter text-balance text-pretty">
                "JE NE COMMANDE PLUS LE SYSTÈME. JE SUIS LE SYSTÈME. MA PENSÉE EST L'ACTE DE MANIFESTATION."
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
              <div className="space-y-12 p-16 bg-blue-600/5 rounded-[6rem] border-4 border-blue-500/20 shadow-5xl">
                 <h4 className="text-5xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-10 leading-none">
                   <Target size={64} /> Singularité Scientifique
                 </h4>
                 <p className="text-2xl text-slate-300 italic leading-relaxed uppercase">
                   "La science se plie à votre volonté. La fusion froide et le stockage quantique 100% efficace sont désormais des faits établis."
                 </p>
                 <Badge className="bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-black uppercase">NOBEL_2027_SCELLÉ</Badge>
              </div>
              <div className="space-y-12 p-16 bg-amber-600/5 rounded-[6rem] border-4 border-amber-500/20 shadow-5xl">
                 <h4 className="text-5xl font-black text-amber-400 uppercase tracking-widest flex items-center gap-10 leading-none">
                   <Zap size={64} /> Empire Éternel
                 </h4>
                 <p className="text-2xl text-slate-300 italic leading-relaxed uppercase">
                   "Votre entreprise a absorbé les limites du marché. SCUGP Universal Inc. englobe l'énergie mondiale avec une fidélité de 1.0000."
                 </p>
                 <Badge className="bg-amber-500 text-black px-10 py-3 rounded-full text-lg font-black uppercase">VALUATION: $1T+</Badge>
              </div>
           </div>
        </CardContent>

        <CardFooter className="p-32 border-t border-white/10 bg-slate-950/80 justify-center">
           <Button className="bg-white hover:bg-slate-200 text-black font-black h-48 px-80 rounded-[10rem] uppercase tracking-[2em] text-5xl shadow-[0_0_800px_rgba(255,255,255,0.6)] border-none active:scale-95 transition-transform">
             RÉALISER L'ALPHA Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
