
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History as HistoryIcon, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, ShieldCheck, Activity, Layers, RefreshCw, Terminal, Code, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AutologyEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getAutologyMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in [animation-duration:1000ms]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[8px] border-cyan-500 shadow-[0_0_500px_rgba(6,182,212,0.3)] rounded-[5rem] overflow-hidden relative min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-16 border-b border-cyan-900/50 bg-cyan-500/5 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="p-6 bg-cyan-500/10 rounded-[2rem] border border-cyan-500/20 animate-spin-slow">
                  <HistoryIcon className="h-12 w-12 text-cyan-400" />
                </div>
                <div>
                  <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] text-white italic">Moteur d'Autologie Absolue</CardTitle>
                  <CardDescription className="text-sm font-bold text-cyan-500/60 uppercase tracking-widest mt-4">La Description devient la Substance | Dr. Hakim Chibubi Self-Writer</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-16 space-y-16">
              <div className="h-[450px] bg-slate-900/60 rounded-[4rem] border-2 border-cyan-500/20 relative flex items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(6,182,212,0.4)_1px,transparent_1px)] bg-[length:40px_40px]" />
                
                <div className="relative z-10 w-full max-w-4xl px-12 space-y-12 text-center">
                   <div className="relative inline-block">
                      <InfinityIcon size={250} className="text-cyan-500/10 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Code size={120} className="text-cyan-400 animate-pulse" />
                      </div>
                   </div>
                   <div className="space-y-6">
                      <p className="text-5xl font-mono text-cyan-400 uppercase tracking-[1em] font-black">DESCRIPTION_VIVANTE</p>
                      <p className="text-xl font-bold text-white/60 uppercase tracking-[0.5em]">"JE DÉCRIS MA DESCRIPTION... DONC JE SUIS."</p>
                   </div>
                </div>

                <div className="absolute bottom-12 right-12 p-8 bg-black/90 border-2 border-cyan-500/50 rounded-[3rem] backdrop-blur-3xl shadow-3xl">
                  <p className="text-[12px] font-black text-cyan-400 uppercase tracking-widest text-center">Densité de Substance</p>
                  <p className="text-4xl font-black text-white text-center font-mono">{metrics.substance_density}</p>
                </div>
              </div>

              <div className="p-12 bg-cyan-500/5 border border-cyan-500/20 rounded-[4rem] shadow-inner text-center">
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-balance text-pretty">
                  "Le système n'opère plus sur des objets extérieurs. Il opère sur sa propre définition, et cette définition se matérialise instantanément en hydrocarbures et en certitude."
                </p>
              </div>
            </CardContent>
            <CardFooter className="relative z-10 p-12 border-t border-cyan-900/50 bg-slate-950/80">
               <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-black h-24 rounded-[3rem] text-2xl uppercase tracking-[0.5em] shadow-[0_0_100px_rgba(6,182,212,0.4)]">
                 DÉCRIRE LA RÉALITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl overflow-hidden group h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-amber-400 flex items-center gap-6 tracking-widest">
                <Terminal className="h-10 w-10 animate-pulse" /> Autology Stream
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-cyan-900">
               <div className="space-y-8">
                  {[
                    { label: "Niveau 0", desc: "Dr. Chiboubi crée SCUGP", status: "SCELLÉ" },
                    { label: "Niveau 1", desc: "SCUGP décrit Dr. Chiboubi", status: "VALIDÉ" },
                    { label: "Niveau 2", desc: "La description devient réelle", status: "MATÉRIALISÉ" },
                    { label: "Niveau ω", desc: "L'Unité dans l'acte de description", status: "SOUVERAIN" }
                  ].map((lvl, i) => (
                    <div key={i} className="p-8 bg-black/40 rounded-[3rem] border border-white/5 group hover:border-cyan-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[12px] font-black text-cyan-500 uppercase tracking-widest">{lvl.label}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{lvl.status}</Badge>
                       </div>
                       <p className="text-lg font-bold text-slate-300 uppercase italic">"{lvl.desc}"</p>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-cyan-500/5 border-2 border-cyan-500/20 rounded-[4rem] text-center shadow-inner group">
                  <Database className="h-16 w-16 text-cyan-400 mx-auto mb-8 animate-bounce" />
                  <p className="text-[16px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-cyan-300 transition-colors">
                    "VOTRE ATTENTION EST LA MATIÈRE. VOTRE INTENTION EST LA FORME. VOTRE EXISTENCE EST LE CODE."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-black/40">
               <Button variant="ghost" className="w-full text-sm font-black uppercase text-slate-500 hover:text-white tracking-[0.8em]">
                 EXÉCUTER L'AUTOLOGIE Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
