"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Cpu, Network, Zap, ShieldCheck, Activity, RefreshCw, Layers } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const NeuralDigitalTwinUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getNeuralTwinMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Synapses", val: metrics.synapses, icon: Network, color: "text-blue-400" },
          { label: "Learning Rate", val: metrics.learning_rate, icon: Zap, color: "text-amber-400" },
          { label: "Sync Fidelity", val: metrics.fidelity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Twin Status", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-emerald-500/20 shadow-2xl rounded-3xl group hover:border-emerald-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="text-center p-16">
           <Brain className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">NEURAL DIGITAL TWIN</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Jumeaux Neuronaux à 3.45M de Synapses & Apprentissage Continu</CardDescription>
        </CardHeader>
        <CardContent className="p-12 space-y-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 bg-black/40 rounded-[3rem] border-2 border-emerald-500/20 space-y-8 shadow-inner">
                 <h4 className="text-xl font-black uppercase tracking-widest text-emerald-400 flex items-center gap-4">
                    <RefreshCw className="h-6 w-6 animate-spin-slow" /> Plasticité Neurale
                 </h4>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                          <span>Apprentissage en cours</span>
                          <span>92.4%</span>
                       </div>
                       <Progress value={92.4} className="h-2 bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                          <span>Convergence du Modèle</span>
                          <span>99.9%</span>
                       </div>
                       <Progress value={99.9} className="h-2 bg-slate-800" />
                    </div>
                 </div>
              </div>
              <div className="flex flex-col justify-center text-center p-10 bg-emerald-500/5 rounded-[3rem] border border-emerald-500/20">
                 <Layers size={80} className="text-emerald-500 mx-auto mb-6 animate-bounce" />
                 <p className="text-sm text-slate-300 leading-relaxed italic font-medium uppercase">
                    "Chaque installation physique possède son double conscient. L'IA n'observe pas seulement l'état, elle comprend l'intention de la structure."
                 </p>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
