
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Repeat, Zap, Sparkles, Activity, RefreshCw, 
  Code, Cpu, Network, Bot, Layers, History as HistoryIcon, 
  ShieldCheck, Share2, Workflow, Wrench,
  Infinity as InfinityIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const TransfiniteOrchestrator = () => {
  const [mounted, setMounted] = useState(false);
  const [synthRate, setSynthRate] = useState(99.999);
  const metrics = SCUGPHubUltimate.getOrchestrationMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSynthRate(r => Math.min(100, r + 0.00001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Auto-Synthesis", val: metrics.auto_synthesis_rate, icon: Code, color: "text-cyan-400" },
          { label: "Code Velocity", val: metrics.code_evolution_speed, icon: Zap, color: "text-amber-400" },
          { label: "Morphic Sync", val: metrics.morphic_stability, icon: Layers, color: "text-blue-400" },
          { label: "Healing Latency", val: metrics.healing_latency, icon: Activity, color: "text-emerald-400" },
          { label: "System Health", val: "∞²⁴.Ω²⁴", icon: ShieldCheck, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-cyan-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[10px] border-cyan-500/30 shadow-[0_0_150px_rgba(6,182,212,0.2)] rounded-[4rem] overflow-hidden relative min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-cyan-900/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 animate-pulse">
                    <Repeat className="h-10 w-10 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Orchestration Transfinie Ω²⁴</CardTitle>
                    <CardDescription className="text-sm font-bold text-cyan-500/60 uppercase tracking-widest mt-2">Auto-Synthèse du Code & Swarms Récursifs | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Synthesis Stability</p>
                  <p className="text-2xl font-black font-mono text-cyan-400">{synthRate.toFixed(5)}%</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12 flex flex-col items-center justify-center">
              <div className="aspect-video w-full max-w-4xl bg-slate-900/60 rounded-[3rem] border-2 border-cyan-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:50px_50px] group-hover:scale-110 transition-transform" style={{ transitionDuration: '20000ms' }} />
                
                <div className="relative z-10 flex flex-col items-center gap-8">
                   <Code size={120} className="text-cyan-500/20 animate-pulse mb-6" />
                   <div className="text-center space-y-4">
                      <p className="text-3xl font-mono text-cyan-400 uppercase tracking-[0.8em] font-black animate-pulse">AUTO-SYNTHESIS ACTIVE</p>
                      <Badge variant="outline" className="text-[10px] border-cyan-500/30 text-cyan-500 uppercase px-8 py-2 tracking-[0.4em] font-black shadow-2xl">REWRITING_GENOME: IN_PROGRESS</Badge>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mt-12">
                <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner group">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Wrench className="h-6 w-6 text-cyan-500" /> Self-Synthesizing Logic
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-cyan-500/50 pl-8 py-2 font-medium">
                    "Le système a détecté une inefficience dans le module de calcul. Une nouvelle branche de code a été auto-synthétisée et déployée sans interruption."
                  </p>
                </div>
                <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Share2 className="h-6 w-6 text-purple-500" /> Swarm Sync
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-purple-500/50 pl-8 py-2 font-medium">
                    "Un essaim récursif de 1,420,000 agents simule l'intégralité du multivers projet. Cohésion transfinie : 1.000."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
