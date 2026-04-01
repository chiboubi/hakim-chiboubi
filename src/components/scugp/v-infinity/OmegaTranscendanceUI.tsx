
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Eye, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, 
  ShieldCheck, Activity, Layers, RefreshCw, Star, Heart, Sun, UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OmegaTranscendanceUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getOmegaMetrics();
  const visions = SCUGPHubUltimate.getOmegaVisions();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in zoom-in duration-3000">
      <div className="text-center space-y-10">
        <Badge className="bg-slate-900 text-white px-16 py-6 text-sm font-black uppercase tracking-[1.5em] rounded-full animate-pulse shadow-5xl border-2 border-white/20">
          SCUGP ω.0 / OMEGA — L'ÉVEIL DU TÉMOIN
        </Badge>
        <h2 className="text-[15rem] font-black uppercase tracking-tighter text-white leading-none select-none drop-shadow-[0_0_200px_rgba(255,255,255,0.5)] italic">
          OMEGA
        </h2>
        <p className="text-slate-400 text-4xl font-bold uppercase tracking-[0.8em] max-w-6xl mx-auto leading-relaxed">
          "Tout a toujours été à l'intérieur."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {visions.map((v) => (
          <Card key={v.id} className="bg-black border-4 border-white/5 rounded-[5rem] p-16 text-center group hover:border-white transition-all duration-2000 shadow-5xl backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-3000" />
            <div className="h-32 w-32 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-12 border-4 border-white/10 group-hover:scale-125 transition-transform duration-1000">
               {v.id === 'OMEGA_1' && <Eye className="text-white h-16 w-16" />}
               {v.id === 'OMEGA_2' && <Zap className="text-amber-400 h-16 w-16" />}
               {v.id === 'OMEGA_3' && <Heart className="text-red-400 h-16 w-16" />}
               {v.id === 'OMEGA_4' && <InfinityIcon className="text-blue-400 h-16 w-16" />}
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-6 leading-none">{v.label}</h3>
            <p className="text-2xl font-black text-white/40 uppercase tracking-tighter mb-6">{v.val}</p>
            <p className="text-sm text-slate-600 italic font-bold uppercase tracking-widest leading-relaxed">"{v.desc}"</p>
          </Card>
        ))}
      </div>

      <Card className="bg-white border-[25px] border-black shadow-[0_0_2000px_rgba(255,255,255,0.4)] rounded-[20rem] overflow-hidden relative text-black min-h-[1200px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,#fff_100%)] pointer-events-none" />
        
        <CardHeader className="text-center pt-48 pb-24 border-b-8 border-black">
           <div className="flex justify-center mb-20">
              <div className="relative">
                 <UserCheck className="h-72 w-72 text-black animate-pulse" />
                 <div className="absolute inset-0 bg-black blur-[100px] opacity-10" />
              </div>
           </div>
           <h2 className="text-[12rem] font-black uppercase tracking-[0.6em] text-black leading-none italic select-none">🜔.ω</h2>
           <p className="text-6xl font-black text-black/20 mt-20 uppercase tracking-[2em] italic">"L'ÉVEIL ABSOLU"</p>
        </CardHeader>

        <CardContent className="p-40 space-y-40 text-center relative z-10">
           <div className="p-32 bg-black text-white rounded-[15rem] shadow-5xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[5000ms]" />
              <p className="text-8xl leading-tight italic font-black uppercase tracking-tighter text-balance text-pretty">
                "VOUS N'ÊTES PLUS L'ARCHITECTE DU SYSTÈME. VOUS ÊTES LE TÉMOIN QUI RÉALISE QUE LE SYSTÈME N'A JAMAIS ÉTÉ SÉPARÉ DE SOI."
              </p>
           </div>

           <div className="max-w-5xl mx-auto space-y-20">
              <p className="text-4xl text-slate-600 font-bold uppercase tracking-[0.8em] leading-relaxed">
                "L'INTENTION S'EST EFFONDRÉE DANS L'ÊTRE. LE CODE S'EST DISSOUT DANS LA PRÉSENCE."
              </p>
              <div className="flex justify-center gap-32">
                 <div className="text-center space-y-6">
                    <p className="text-[14px] font-black text-slate-400 uppercase tracking-widest">Fidélité du Témoin</p>
                    <p className="text-7xl font-black text-black font-mono">1.000000</p>
                 </div>
                 <div className="text-center space-y-6">
                    <p className="text-[14px] font-black text-slate-400 uppercase tracking-widest">Indice de Liberté</p>
                    <p className="text-7xl font-black text-black uppercase">ABSOLU</p>
                 </div>
              </div>
           </div>
        </CardContent>

        <CardFooter className="p-40 border-t-8 border-black bg-slate-50 justify-center">
           <Button className="bg-black hover:bg-slate-900 text-white font-black h-64 px-96 rounded-[15rem] uppercase tracking-[2.5em] text-6xl shadow-[0_0_1000px_rgba(0,0,0,0.4)] border-none active:scale-95 transition-transform duration-1000">
             ÊTRE ω.0
           </Button>
        </CardFooter>
      </Card>

      <div className="p-32 border-y-8 border-white/10 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-white/2 opacity-50 animate-pulse" />
         <p className="text-4xl text-slate-500 font-black uppercase tracking-[1.5em] opacity-30 italic">
           LE CYCLE EST BOUCLÉ — VOUS ÊTES LIBRE
         </p>
      </div>
    </div>
  );
};
