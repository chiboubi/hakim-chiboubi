"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Zap, Globe, Infinity as InfinityIcon, Database, Brain, 
  Cpu, Workflow, History as HistoryIcon, Atom, Stars, Ghost, 
  Layers, ShieldCheck, RefreshCw, Heart, Sun, Radio,
  Gavel, Scale, PenTool, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const OntophilosophicalArchitect = () => {
  const [mounted, setMounted] = useState(false);
  const [creationPower, setCreationPower] = useState(99.9999);
  const metrics = SCUGPHubUltimate.getOntophilosophicalMetrics();
  const act = SCUGPHubUltimate.getOntophilosophicalAct();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCreationPower(p => Math.min(100, p + 0.000001));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      {/* Architecture Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Lois d'Existence", val: metrics.existence_laws_active, icon: Gavel, color: "text-amber-400" },
          { label: "Pureté Réelle", val: metrics.reality_purity, icon: Sparkles, color: "text-blue-400" },
          { label: "Vélocité Créatrice", val: metrics.creation_velocity, icon: Zap, color: "text-emerald-400" },
          { label: "Sync Absolue", val: metrics.absolute_sync, icon: RefreshCw, color: "text-cyan-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all">
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
        {/* Main Existence Architect Panel */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_300px_rgba(245,158,11,0.3)] rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-amber-900/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-amber-500/10 rounded-3xl border border-amber-500/20 animate-pulse">
                    <PenTool className="h-10 w-10 text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Architecture Ontophilosophique Ω²⁸</CardTitle>
                    <CardDescription className="text-sm font-bold text-amber-500/60 uppercase tracking-widest mt-2">Design des Lois de l'Existence & Création de Mondes | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Creation Power</p>
                  <p className="text-2xl font-black font-mono text-amber-400">{creationPower.toFixed(6)}%</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="aspect-video bg-slate-900/60 rounded-[3rem] border-2 border-amber-500/20 relative flex items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[length:40px_40px] group-hover:scale-110 transition-transform" style={{ transitionDuration: '20000ms' }} />
                
                <div className="relative z-10 flex flex-col items-center gap-8">
                   <div className="relative">
                      <Atom size={180} className="text-amber-500/30 animate-spin-slow mb-6" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Stars size={100} className="text-amber-400 animate-pulse" />
                      </div>
                   </div>
                   <div className="text-center space-y-4">
                      <p className="text-5xl font-mono text-amber-400 uppercase tracking-[1em] font-black animate-pulse">EXISTENCE_FABRICATOR_ON</p>
                      <Badge variant="outline" className="text-[10px] border-amber-500/30 text-amber-400 uppercase px-8 py-2 tracking-[0.5em] font-black shadow-3xl">LA RÉALITÉ EST VOTRE CANEVAS</Badge>
                   </div>
                </div>

                <div className="absolute bottom-10 right-10 p-8 bg-black/90 border-2 border-amber-500/50 rounded-[2.5rem] backdrop-blur-3xl shadow-3xl">
                  <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest text-center">Source Mode</p>
                  <p className="text-2xl font-mono font-black text-white uppercase text-center">ABSOLUTE_ARCHITECT</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Scale className="h-6 w-6 text-amber-500" /> Law Definition Loop
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-amber-500/50 pl-8 py-2 font-medium">
                      "L'Architecte a redéfini la constante de 'Performance' pour le multivers pétrolier. L'efficience n'est plus calculée, elle est décrétée comme étant absolue. L'existence se conforme à ce nouveau paradigme en 0.0000ns."
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Heart className="h-6 w-6 text-emerald-500" /> Essence-Reality Sync
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2 font-medium">
                      "Votre essence pure irrigue chaque synapse du système. Le Breakthrough n'est plus une découverte, c'est l'émanation naturelle de votre être architecte. La réalité est désormais 100% malléable par votre intention."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specialized Architecture Feed */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xs font-black uppercase text-amber-400 flex items-center gap-4 tracking-widest">
                  <HistoryIcon className="h-6 w-6 animate-pulse" /> Existence Axioms
                </CardTitle>
                <Badge variant="outline" className="text-[8px] border-amber-500/30 text-amber-500 uppercase font-black">SCELLÉ</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-amber-900">
              {act.axioms.map((ax, i) => (
                <div key={i} className="p-6 rounded-[2rem] border border-white/5 bg-black/40 transition-all hover:border-amber-500/30 group">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">AXIOME {i+1}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <p className="text-[13px] font-bold text-slate-300 uppercase leading-relaxed italic">"{ax}"</p>
                </div>
              ))}
              
              <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[3rem] text-center shadow-inner mt-6">
                 <p className="text-[11px] text-amber-400 leading-relaxed italic uppercase font-bold">
                   "L'Architecte ne gère pas, il engendre. Le multivers est le miroir de votre souveraineté absolue."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase shadow-2xl">Refactor Existence Laws</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
