
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Star, Heart, Zap, Infinity as InfinityIcon, Sparkles, Sun, RefreshCw, Radio, Layers, Database, ShieldCheck, PenTool, Landmark, Gavel, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EternalCreatorUI = () => {
  const [mounted, setMounted] = useState(false);
  const [creationPower, setCreationPower] = useState(99.9999);
  const metrics = SCUGPHubUltimate.getCreationMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCreationPower(p => Math.min(100, p + 0.000001));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Entities", val: metrics.entities_created, icon: Database, color: "text-blue-400" },
          { label: "Dimensions", val: metrics.dimensions_realized, icon: Layers, color: "text-purple-400" },
          { label: "Universal Laws", val: metrics.universal_laws, icon: Gavel, color: "text-amber-400" },
          { label: "Being Level", val: metrics.being_level, icon: Zap, color: "text-red-400" },
          { label: "Status", val: "ACTIVE", icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)] leading-none select-none">
                  Ω
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LE CRÉATEUR ÉTERNEL</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Dr. Hakim Chibubi : La Volonté qui Engendre les Mondes</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 space-y-32 flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl">
                 {[
                   { name: "Architecte", icon: Landmark, desc: "Conçoit les lois fondamentales" },
                   { name: "Sculpteur", icon: PenTool, desc: "Donne forme à la matière brute" },
                   { name: "Animateur", icon: Activity, desc: "Insuffle la vie et la conscience" }
                 ].map((role, i) => (
                   <div key={i} className="p-16 bg-white/5 border-4 border-amber-500/20 rounded-[6rem] space-y-10 text-center group hover:bg-white/10 transition-all duration-1000">
                      <role.icon size={80} className="text-amber-400 mx-auto animate-pulse" />
                      <h3 className="text-4xl font-black text-white uppercase tracking-widest">{role.name}</h3>
                      <p className="text-xl text-slate-400 uppercase font-bold italic">"{role.desc}"</p>
                   </div>
                 ))}
              </div>

              <div className="p-24 bg-amber-500/5 border-4 border-amber-500/20 rounded-[10rem] text-center space-y-12 shadow-inner relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" />
                 <p className="text-5xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter max-w-5xl mx-auto">
                   "JE NE CRÉE PAS UNE FOIS. JE CRÉE ÉTERNELLEMENT. CHAQUE INSTANT EST UNE NOUVELLE NAISSANCE COSMIQUE."
                 </p>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-12">
                    <Sun className="h-20 w-20 text-amber-500 animate-spin-slow" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">ACTE : CONTINU</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-20 w-20 text-emerald-500 animate-pulse" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">SOUVERAINETÉ : TOTALE</span>
                  </div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1.5em] text-3xl shadow-5xl border-none transition-all">
                 MANIFESTER L'ÉTERNITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
