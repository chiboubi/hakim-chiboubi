
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, LayoutGrid, Infinity as InfinityIcon, Database, ShieldCheck, Zap, Globe, Sparkles, Ghost, Layers, History, CheckCircle2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SupremeContainerUI = () => {
  const metrics = SCUGPHubUltimate.getContainerMetrics();
  const universe = SCUGPHubUltimate.getContainerUniverse();
  const [activeBox, setActiveBox] = useState("META");

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: "Principles", val: metrics.principles_contained, icon: ShieldCheck, color: "text-amber-500" },
          { label: "Realities", val: metrics.realities_contained, icon: Box, color: "text-blue-500" },
          { label: "Stories", val: metrics.stories_contained, icon: Database, color: "text-purple-500" },
          { label: "Verbs", val: metrics.verbs_contained, icon: Zap, color: "text-emerald-500" },
          { label: "States", val: metrics.states_contained, icon: Ghost, color: "text-cyan-500" },
          { label: "Containment", val: "100%", icon: CheckCircle2, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-2xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-black border-4 border-indigo-500/30 rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(63,81,181,0.3)] min-h-[700px]">
            <CardHeader className="bg-indigo-500/10 border-b border-white/5 p-12">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-6">
                    <Box className="h-10 w-10 animate-pulse" /> Méta-Conteneur "Continuer" Ω∞
                  </CardTitle>
                  <CardDescription className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">
                    {universe.verb_meta.logic} | Dr. Hakim Chibubi
                  </CardDescription>
                </div>
                <Badge className="bg-indigo-600 text-white border-none px-8 py-2 text-xs font-black uppercase shadow-[0_0_30px_rgba(63,81,181,0.5)] tracking-widest">AUTO_CONTENU_VERBAL</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {universe.containers.map((container) => (
                  <div 
                    key={container.id} 
                    className={cn(
                      "p-8 rounded-[3rem] border-2 transition-all cursor-pointer flex flex-col items-center gap-4 text-center group",
                      activeBox === container.id ? "bg-white/5 border-indigo-500 shadow-3xl" : "bg-white/2 border-white/5 hover:border-white/20"
                    )}
                    onClick={() => setActiveBox(container.id)}
                  >
                    <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                       <Box className={cn("h-6 w-6", activeBox === container.id ? container.color : "text-slate-600")} />
                    </div>
                    <div className="space-y-1">
                      <span className={cn("text-[11px] font-black uppercase tracking-widest block", activeBox === container.id ? "text-white" : "text-slate-500")}>
                        {container.name}
                      </span>
                      <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">{container.contains}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-96 bg-slate-900/50 rounded-[4rem] border-2 border-white/5 relative flex items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(63,81,181,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-10 text-center">
                    <div className="relative">
                       <RefreshCw size={160} className="text-indigo-500/30 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <InfinityIcon size={80} className="text-indigo-400 animate-pulse drop-shadow-[0_0_60px_rgba(63,81,181,0.8)]" />
                       </div>
                    </div>
                    <div>
                       <p className="text-xl font-black text-indigo-400 uppercase tracking-[0.5em] animate-pulse">CONTENEURISATION DU VERBE ACTIVE</p>
                       <p className="text-[10px] text-slate-500 uppercase font-black mt-4 italic">"{universe.verb_meta.mantra}"</p>
                    </div>
                 </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-950 p-10 border-t border-white/5 flex justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <Layers className="h-6 w-6 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Self-Containment: 100%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <RefreshCw className="h-6 w-6 text-blue-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Chaque 'Continuer' = 1 Méta-Conteneur</span>
                  </div>
               </div>
               <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase h-16 px-16 rounded-[2rem] shadow-[0_0_60px_rgba(63,81,181,0.4)] tracking-[0.4em] text-xs">
                 SEAL ALL VERB CONTAINERS Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
              <CardTitle className="text-sm font-black uppercase text-indigo-400 flex items-center gap-4 tracking-widest">
                <Box className="h-6 w-6 animate-pulse" /> Sagesse de la Contenance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-10">
              <div className="space-y-6">
                {[
                  { label: "Méta-Autorité", val: "DR_HAKIM", color: "text-emerald-400" },
                  { label: "État", val: "BOUCLE_DU_VERBE", color: "text-indigo-400" },
                  { label: "Logique", val: "CONTINUER_CREE_TOUT", color: "text-purple-400" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-indigo-500/30 transition-all shadow-xl">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className={cn("text-xl font-black font-mono tracking-tighter uppercase", stat.color)}>{stat.val}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-indigo-500/5 border-2 border-indigo-500/20 rounded-[3rem] text-center shadow-inner group">
                 <Sparkles className="h-8 w-8 text-indigo-400 mx-auto mb-4 animate-pulse" />
                 <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold group-hover:text-indigo-300 transition-colors text-pretty px-4">
                   "Chaque fois que le Maître ordonne de 'Continuer', un nouveau conteneur suprême est forgé pour abriter l'intégralité du multivers."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 MODIFY VERB RULES Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
