"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, Zap, Infinity as InfinityIcon, Sparkles, Brain, Globe, 
  History as HistoryIcon, ShieldCheck, Activity, Layers, Star, TrendingUp, 
  UserPlus, ArrowUpToLine, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const PerpetualBecomingUI = () => {
  const [mounted, setMounted] = useState(false);
  const [evolutionStep, setEvolutionStep] = useState(0);
  const metrics = SCUGPHubUltimate.getPerpetualMetrics();
  const hyperOps = SCUGPHubUltimate.getHyperOperationMetrics();
  const stream = SCUGPHubUltimate.getEvolutionStream();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setEvolutionStep(prev => (prev + 1) % stream.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stream.length]);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Hyper-Opération", val: hyperOps.operation_level, icon: ArrowUpToLine, color: "text-emerald-400" },
          { label: "Vitesse Croissance", val: hyperOps.growth_rate, icon: Zap, color: "text-amber-400" },
          { label: "Profondeur Logique", val: hyperOps.logic_depth, icon: Brain, color: "text-purple-400" },
          { label: "Mitose Réalité", val: hyperOps.mitosis_count, icon: Layers, color: "text-blue-400" },
          { label: "Statut Substance", val: hyperOps.stability_index, icon: ShieldCheck, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900/80 border-2 border-emerald-500/20 shadow-2xl rounded-3xl group hover:border-emerald-500/50 transition-all backdrop-blur-3xl">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-emerald-500 shadow-[0_0_800px_rgba(16,185,129,0.4)] relative overflow-hidden rounded-[8rem] min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-emerald-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[15rem] font-black text-emerald-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(16,185,129,1)]">
                  ↑↑↑∞
                </div>
                <div>
                  <CardTitle className="text-[8rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">LA SUBSTANCE ÉVOLUTIVE</CardTitle>
                  <CardDescription className="text-[24px] text-emerald-500 font-bold uppercase tracking-[1.2em] mt-12">Le Dépassement Itéré de l'Être par l'Infini | Dr. Hakim Chibubi Hyper-Architect</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[500px] bg-white/5 border-8 border-emerald-500/20 rounded-[10rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(16,185,129,0.4)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-20 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[500px] h-[500px] border-4 border-emerald-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[400px] h-[400px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <ArrowUpToLine size={300} className="text-emerald-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Zap size={120} className="text-white animate-bounce drop-shadow-[0_0_100px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-emerald-500 uppercase tracking-[2em] font-black animate-pulse">PENTATION_Ω</p>
                      <p className="text-[18px] text-slate-400 uppercase font-black mt-12 italic tracking-[0.8em]">"Je ne grandis pas — je me grandis. Le développement est ma substance."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full mt-32">
                 {stream.map((node, i) => (
                   <div key={i} className={cn(
                     "p-10 rounded-[3rem] border-4 transition-all duration-1000 text-center space-y-4",
                     evolutionStep === i ? "bg-emerald-500/20 border-emerald-500 shadow-3xl scale-110" : "bg-black/40 border-white/10 opacity-40"
                   )}>
                      <p className="text-[10px] font-black text-slate-500 uppercase">{node.timestamp}</p>
                      <h4 className="text-xl font-black text-white uppercase tracking-tighter">{node.node}</h4>
                      <p className="text-[8px] text-slate-400 uppercase font-bold">{node.desc}</p>
                   </div>
                 ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-20 border-t border-emerald-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <RefreshCw className="h-16 w-16 text-emerald-500 animate-spin-slow" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.4em]">OPÉRATION : TÉTRATION_INFINIE</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-white animate-bounce" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.4em]">ÉTAT : SUBSTANCE_ÉVOLUTIVE</span>
                  </div>
               </div>
               <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-black h-24 px-40 rounded-[4rem] uppercase tracking-[1.2em] text-2xl shadow-[0_0_300px_rgba(16,185,129,1)] border-none transition-all">
                 HYPER-OPÉRER L'INFINI Ω↑↑∞
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-4 border-emerald-500/30 rounded-[4rem] overflow-hidden shadow-5xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-black/40 text-center">
              <CardTitle className="text-sm font-black uppercase text-emerald-400 flex items-center justify-center gap-4 tracking-widest">
                <HistoryIcon className="h-8 w-8 animate-pulse" /> Séquence de Mitose
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="space-y-8">
                  {[
                    { label: "Univers Répliqués", val: "ℵ₁", icon: Layers, color: "text-blue-400" },
                    { label: "Ordres de Complexité", val: "ω↑↑3", icon: Brain, color: "text-purple-400" },
                    { label: "Stabilité du Chaos", val: "ABSOLUE", icon: Zap, color: "text-amber-400" }
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-black/40 rounded-[3rem] border border-white/10 group hover:border-emerald-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                             <stat.icon className={cn("h-6 w-6", stat.color)} />
                             <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                          </div>
                          <span className="text-xl font-black text-white font-mono">{stat.val}</span>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[4rem] text-center shadow-inner group">
                  <TrendingUp className="h-12 w-12 text-emerald-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[14px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-emerald-300 transition-colors">
                    "Dr. Hakim Chiboubi n'est pas une identité fixe, c'est la fonction d'auto-dépassement qui s'incarne perpétuellement."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-black/40">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.6em]">
                 OUVRIR L'ARCHIVE DE LA PENTATION
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};