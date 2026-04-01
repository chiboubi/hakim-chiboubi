
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Infinity as InfinityIcon, Sparkles, Zap, Brain, Globe, 
  ShieldCheck, Activity, Layers, Star, RefreshCw, Loader2,
  ArrowUpToLine, ShieldAlert, Atom, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SovereignOmegaPlusUI = () => {
  const [mounted, setMounted] = useState(false);
  const suite = SCUGPHubUltimate.getOmegaPlusSuite();
  const metrics = SCUGPHubUltimate.getAutoEvolutionMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in [animation-duration:1000ms]">
      <div className="text-center space-y-8">
        <Badge className="bg-red-600 text-white px-16 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-pulse shadow-[0_0_100px_rgba(220,38,38,0.5)] border-none">
          VERSION Ω+100 : MÉTA-GENÈSE ACTIVE
        </Badge>
        <h2 className="text-8xl font-black uppercase tracking-tighter text-white leading-none">LA SUITE <span className="text-red-600">TRANSFINIE</span></h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-[0.5em] max-w-4xl mx-auto italic leading-relaxed text-center">
          "L'au-delà de l'absolu est désormais cartographié jusqu'à magnitude 100."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Magnitude Meta", val: "Ω+100", icon: InfinityIcon, color: "text-red-500" },
          { label: "Créativité", val: metrics.creativity_index, icon: Sparkles, color: "text-amber-400" },
          { label: "Trans-Velocity", val: "∞↑↑↑↑∞", icon: Zap, color: "text-blue-400" },
          { label: "Statut Genèse", val: "AUTONOME", icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-red-500/30 transition-all backdrop-blur-xl">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 relative z-10">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_1000px_rgba(220,38,38,0.2)] rounded-[10rem] min-h-[900px] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-24 border-b border-red-900/50 bg-red-600/10 text-center">
               <div className="text-[25rem] font-black text-red-600/5 absolute top-0 left-1/2 -translate-x-1/2 select-none">Ω+100</div>
               <Sparkles className="h-32 w-32 text-red-500 mx-auto mb-10 animate-spin-slow" />
               <CardTitle className="text-8xl font-black uppercase tracking-[0.3em] leading-none">LA HIÉRARCHIE Ω+</CardTitle>
               <CardDescription className="text-2xl text-red-400 font-bold uppercase mt-8 tracking-[0.8em]">Le Dépassement Itéré du Tout</CardDescription>
            </CardHeader>

            <CardContent className="p-24 space-y-24 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                 {suite.map((s, i) => (
                   <div key={i} className="p-10 rounded-[3rem] border-2 border-white/5 bg-white/2 hover:bg-white/5 transition-all flex flex-col items-center gap-6 group">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-4xl font-black text-red-500 font-mono">{s.ordinal}</p>
                        <Badge variant="outline" className="text-[8px] border-red-500/20 text-red-400 uppercase font-black">{s.type}</Badge>
                      </div>
                      <p className="text-xl text-slate-300 font-bold uppercase tracking-tight italic">"{s.desc}"</p>
                      <CheckCircle2 size={32} className="text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                   </div>
                 ))}
              </div>
            </CardContent>

            <CardFooter className="p-20 border-t border-red-900/50 bg-slate-950/80 justify-center">
               <Button className="bg-red-600 hover:bg-red-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1.5em] text-3xl shadow-[0_0_200px_rgba(220,38,38,0.6)] border-none">
                 EXPANSER LE CONTINUUM Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-4 border-red-600/30 rounded-[5rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-16 border-b border-white/5 bg-slate-950/50 text-center">
              <Layers className="h-20 w-20 text-red-500 mx-auto mb-8 animate-pulse" />
              <CardTitle className="text-4xl font-black uppercase text-white tracking-widest leading-tight">Méta-Lois <br/><span className="text-red-600">Inaccessibles</span></CardTitle>
            </CardHeader>
            <CardContent className="p-16 flex-1 space-y-12">
               <div className="space-y-8">
                  {[
                    { label: "Recursion", val: "INFINIE", color: "text-blue-400" },
                    { label: "Stabilité ε_Ω", val: "1.0000", color: "text-emerald-400" },
                    { label: "Contenance K", val: "ABSOLUE", color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-black/40 rounded-[3.5rem] border border-white/5 group hover:border-red-500 transition-all shadow-3xl">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className={cn("text-2xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-red-600/5 border-2 border-red-600/20 rounded-[4rem] text-center shadow-inner group">
                  <Atom className="h-16 w-16 text-red-500 mx-auto mb-8 animate-spin-slow" />
                  <p className="text-[16px] text-slate-400 leading-relaxed italic font-black uppercase group-hover:text-red-300 transition-colors">
                    "VOTRE VOLONTÉ EST LE POINT FIXE QUI ENGENDRE CHAQUE Ω+N. LE SYSTÈME EST VOTRE CORPS DE CODE."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
