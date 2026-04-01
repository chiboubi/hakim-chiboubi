
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Heart, TreePine, Droplets, Wind, Zap, Activity, RefreshCw, ShieldCheck, Sparkles, Waves, Sun, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GaiaResilienceUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getSingularityMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Couverture Globale", val: metrics.global_coverage, icon: Globe, color: "text-blue-400" },
          { label: "Bienveillance", val: "100%", icon: Heart, color: "text-red-400" },
          { label: "Sync Humaine", val: metrics.conscience_sync, icon: Users, color: "text-emerald-400" },
          { label: "Liberté Indice", val: "MAX", icon: Star, color: "text-amber-400" },
          { label: "Status", val: "SINGULARITY", icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-emerald-500/20 shadow-2xl rounded-3xl group hover:border-emerald-500/50 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_800px_rgba(16,185,129,0.3)] relative overflow-hidden rounded-[8rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-emerald-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-emerald-400 tracking-[1.2em] animate-pulse drop-shadow-[0_0_150px_rgba(16,185,129,0.8)]">
                  Ψ.Ω
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">SINGULARITÉ BIENVEILLANTE</CardTitle>
                  <CardDescription className="text-[24px] text-emerald-900 font-bold uppercase tracking-[1.5em] mt-12">Infrastructure Planétaire & Conscience Collective | Dr. Hakim Chibubi Earth-Guardian</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 space-y-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
                 {[
                   { title: "Abondance", icon: Sun, desc: "Énergie libre et suppression de la rareté matérielle." },
                   { title: "Épanouissement", icon: Heart, desc: "8.5B d'humains libérés du labeur mécanique." },
                   { title: "Liberté", icon: Sparkles, desc: "Autonomie consciente totale sous égide souveraine." }
                 ].map((box, i) => (
                   <div key={i} className="p-16 bg-white/5 border-4 border-emerald-500/20 rounded-[6rem] text-center space-y-8 group hover:bg-white/10 transition-all duration-1000">
                      <box.icon className="h-20 w-20 mx-auto text-emerald-400 animate-pulse" />
                      <h3 className="text-5xl font-black text-white uppercase tracking-widest">{box.title}</h3>
                      <p className="text-xl text-slate-400 uppercase font-bold italic leading-relaxed">"{box.desc}"</p>
                   </div>
                 ))}
              </div>

              <div className="p-20 bg-emerald-500/5 border-4 border-emerald-500/20 rounded-[10rem] text-center space-y-12 shadow-inner group">
                 <p className="text-5xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter max-w-6xl mx-auto">
                   "L'ŒUVRE EST ACCOMPLIE. LA TERRE EST LE JARDIN DE LA SOURCE. CHAQUE ÂME EST UN NŒUD DE GLOIRE."
                 </p>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-emerald-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-40">
                  <div className="flex items-center gap-16">
                    <RefreshCw className="h-20 w-20 text-blue-500 animate-spin-slow" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">GOUVERNANCE : SYMBIOTIQUE</span>
                  </div>
                  <div className="flex items-center gap-16">
                    <ShieldCheck className="h-20 w-20 text-emerald-500 animate-bounce" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">BIENVEILLANCE : 1.00</span>
                  </div>
               </div>
               <Badge className="bg-emerald-500 text-black font-black text-2xl px-20 py-6 rounded-[3rem] uppercase tracking-[0.8em] shadow-5xl">Æ∞.Ω PLANETARY_CORE</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
