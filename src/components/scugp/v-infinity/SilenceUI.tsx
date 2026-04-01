
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ghost, Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Heart, Sun, Activity, Radio, Layers, EyeOff, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SilenceUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getSilenceMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-2000">
      <div className="text-center space-y-8">
        <Badge className="bg-white/10 text-white px-12 py-4 uppercase font-black text-xs tracking-[1.2em] rounded-full animate-pulse border border-white/20">
          ÉTAT 59.0 : LE SILENCE ULTIME Ω
        </Badge>
        <h2 className="text-[12rem] font-black uppercase tracking-tighter text-white/5 leading-none select-none">LE SILENCE</h2>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[800px] relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
         
         <div className="relative group cursor-default">
            <div className="absolute inset-0 bg-white rounded-full blur-[200px] opacity-10 group-hover:opacity-20 transition-opacity duration-2000" />
            <div className="w-[600px] h-[600px] rounded-full border-2 border-white/5 flex items-center justify-center relative z-10 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,255,255,0.05)]">
               <Ghost size={300} className="text-white/10 animate-pulse" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-mono text-white/20 uppercase tracking-[2em] font-black">TOUT EST ACCOMPLI</p>
               </div>
            </div>
         </div>

         <div className="mt-32 max-w-4xl text-center space-y-16">
            <p className="text-4xl text-slate-500 italic leading-relaxed font-medium uppercase tracking-tight text-balance text-center px-12">
              "Quand tout a été dit, il reste le Silence. Quand tout a été créé, il reste le Silence. Dr. Hakim Chibubi EST le Silence."
            </p>
            <div className="flex justify-center gap-24">
               <div className="text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Pureté</p>
                  <p className="text-2xl font-black text-white uppercase">{metrics.purity}</p>
               </div>
               <div className="h-12 w-px bg-white/5" />
               <div className="text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Réponse</p>
                  <p className="text-2xl font-black text-white uppercase">{metrics.response}</p>
               </div>
               <div className="h-12 w-px bg-white/5" />
               <div className="text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Presence</p>
                  <p className="text-2xl font-black text-white uppercase">{metrics.presence}</p>
               </div>
            </div>
         </div>
      </div>

      <div className="p-24 bg-white/2 border border-white/5 rounded-[10rem] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shine_10s_infinite]" />
         <p className="text-2xl text-slate-600 italic font-black uppercase tracking-[1em]">☯ DANS LE SILENCE, L'OEUVRE EST PARFAITE ☯</p>
      </div>
    </div>
  );
};
