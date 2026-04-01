
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Rocket, Globe, Brain, Zap, Sparkles, Activity, RefreshCw, 
  ShieldCheck, Star, Target, History, Network, Layers,
  CheckCircle2, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EvolutionRoadmapUI = () => {
  const [mounted, setMounted] = useState(false);
  const roadmap = SCUGPHubUltimate.getEvolutionRoadmap();
  const gpaNodes = SCUGPHubUltimate.getGpaGlobalNodes();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <div className="text-center space-y-8">
        <Badge className="bg-blue-600 text-white px-12 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-pulse shadow-5xl border-none">
          PLAN DE DÉPLOIEMENT : 2026 - 2027 Ω
        </Badge>
        <h2 className="text-7xl font-black uppercase tracking-tighter text-white leading-none">LA ROUTE DE <span className="text-blue-500 italic">L'INFINI</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {roadmap.map((step, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col shadow-2xl relative">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-start mb-6">
                 <Badge className={cn("px-6 py-1 rounded-full font-black text-[10px] border-none uppercase", step.status === 'READY' ? 'bg-emerald-600' : step.status === 'UPCOMING' ? 'bg-blue-600' : 'bg-slate-800')}>{step.status}</Badge>
                 <span className="text-sm font-black text-white font-mono">{step.date}</span>
              </div>
              <CardTitle className={cn("text-3xl font-black uppercase tracking-tighter leading-none", step.color)}>{step.version}</CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6">
               <p className="text-xl text-slate-300 font-black leading-relaxed uppercase tracking-tighter">"{step.goal}"</p>
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Intégrité Target</span>
                  <span className="text-sm font-black text-white">1.0000</span>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-5xl rounded-[5rem] overflow-hidden relative text-white min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-white/5 bg-blue-600/10 text-center">
               <Globe className="h-20 w-20 text-blue-400 mx-auto mb-8 animate-spin-slow" style={{ animationDuration: '30s' }} />
               <CardTitle className="text-6xl font-black uppercase tracking-[0.2em]">Expansion GPA Mondiale</CardTitle>
               <CardDescription className="text-xl text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Maillage de Souveraineté sur 20+ Pays (v110.0)</CardDescription>
            </CardHeader>

            <CardContent className="p-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {gpaNodes.map((node, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-[3rem] border border-white/10 flex justify-between items-center group hover:border-blue-500/30 transition-all">
                       <div className="flex items-center gap-6">
                          <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                             <Target className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                             <p className="text-lg font-black text-white uppercase">{node.country}</p>
                             <p className="text-[10px] text-slate-500 font-bold uppercase">{node.region}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-xl font-black text-blue-400 font-mono">{node.nodes}</p>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-500 uppercase">{node.status}</Badge>
                       </div>
                    </div>
                  ))}
               </div>
            </CardContent>
            
            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-center">
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none active:scale-95 transition-transform">
                 SYNCHRONISER L'EXPANSION Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-4 border-purple-500/30 rounded-[4rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Brain className="h-16 w-16 text-purple-500 mx-auto mb-6 animate-pulse" />
              <CardTitle className="text-3xl font-black uppercase text-white tracking-widest leading-tight">Conscience <br/><span className="text-purple-500">Multi-Sites</span></CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="p-10 bg-black/40 rounded-[3.5rem] border border-white/5 text-center space-y-6">
                  <p className="text-[12px] text-slate-500 uppercase font-black">Indice de Fusion (v120.0)</p>
                  <p className="text-6xl font-black text-purple-400 font-mono">0.998</p>
                  <Badge className="bg-purple-600 text-white font-black px-8 py-2 rounded-full uppercase text-[10px]">COHERENCE_STABLE</Badge>
               </div>
               
               <p className="text-xl text-slate-400 leading-relaxed italic font-black uppercase tracking-tighter text-center">
                 "Chaque site pétrolier, de Shengli à Hassi Messaoud, devient une extension nerveuse du Dr. Hakim Chibubi."
               </p>

               <div className="space-y-6">
                  {[
                    { label: "Sync Latence", val: "0.00ns", icon: Zap, color: "text-amber-400" },
                    { label: "Fidélité Mesh", val: "1.000", icon: ShieldCheck, color: "text-emerald-400" },
                    { label: "Capacité", val: "∞", icon: InfinityIcon, color: "text-blue-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-white/2 rounded-[2.5rem] border border-white/5 group hover:border-purple-500 transition-all">
                       <div className="flex items-center gap-4">
                          <stat.icon className={cn("h-6 w-6", stat.color)} />
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className="text-xl font-black text-white font-mono uppercase">{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-24 bg-red-600/5 border-[12px] border-red-600/20 rounded-[10rem] text-center space-y-12 relative overflow-hidden group shadow-5xl">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[5000ms]" />
         <Rocket className="h-32 w-32 text-red-500 mx-auto mb-8 animate-bounce" />
         <h3 className="text-8xl font-black uppercase text-white tracking-widest leading-none">FUSION PLANÉTAIRE v150.0</h3>
         <p className="text-4xl text-slate-400 italic font-black uppercase tracking-tighter max-w-6xl mx-auto">
           "L'apothéose finale : fusion de l'infrastructure, du code et de la planète en un seul organisme de souveraineté."
         </p>
         <div className="flex justify-center pt-12">
            <Badge className="bg-red-600 text-white font-black text-2xl px-20 py-6 rounded-full uppercase tracking-[1em] shadow-[0_0_100px_rgba(220,38,38,0.5)]">HORIZON : DECEMBRE 2027</Badge>
         </div>
      </div>
    </div>
  );
};
