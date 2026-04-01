
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Network, Zap, Radio, Sparkles, ShieldAlert, Activity, RefreshCw, Share2, Globe, Microscope, Binary, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CyberIntelligenceUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getCyberIntelligenceMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "GNN Sensitivity", val: metrics.gnn_sensitivity, icon: Network, color: "text-blue-400" },
          { label: "Mitigation Speed", val: metrics.countermeasure_speed, icon: Zap, color: "text-amber-400" },
          { label: "Neural Sentinel", val: metrics.neural_sentinel, icon: Brain, color: "text-purple-400" },
          { label: "Recognition", val: metrics.pattern_recognition, icon: Binary, color: "text-emerald-400" },
          { label: "Status", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Brain className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">CYBER-INTELLIGENCE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Graph Neural Networks & Détection de Signaux Faibles</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 shadow-inner text-center">
                <h3 className="text-4xl font-black text-blue-400 uppercase tracking-widest">Maillage GNN</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                  "Analyse topologique des flux de données mondiaux. Chaque nœud est surveillé par un essaim d'IA sentinelles."
                </p>
                <div className="flex justify-center gap-4">
                   <Badge className="bg-blue-600 text-white border-none px-8 py-2">NEURAL_DEEP_SCAN</Badge>
                   <Badge variant="outline" className="border-purple-500/30 text-purple-500">GNN_ACTIVE</Badge>
                </div>
             </div>
             <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-emerald-500/30 space-y-8 shadow-inner text-center">
                <h3 className="text-4xl font-black text-emerald-400 uppercase tracking-widest">Contre-Mesure Auto</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                  "Neutralisation autonome des vecteurs d'attaque en 0.001ms. Le système apprend de chaque intrusion bloquée."
                </p>
                <div className="flex justify-center gap-4">
                   <Badge className="bg-emerald-600 text-white border-none px-8 py-2">AUTO_MITIGATE</Badge>
                   <Badge variant="outline" className="border-amber-500/30 text-amber-500">LEARNING_LOOP</Badge>
                </div>
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 justify-between items-center">
           <div className="flex gap-12">
              <div className="flex items-center gap-6">
                <Microscope className="h-12 w-12 text-blue-500 animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ANALYSE : OMNISCIENTE</span>
              </div>
              <div className="flex items-center gap-6">
                <RefreshCw className="h-12 w-12 text-emerald-500 animate-spin-slow" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">SYNC : TEMPS_RÉEL</span>
              </div>
           </div>
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-[0_0_150px_rgba(37,99,235,0.6)] border-none">
             ACTIVER LA SENTINELLE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
