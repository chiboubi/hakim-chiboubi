
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, Zap, Brain, ShieldCheck, Activity, 
  Workflow, Cpu, Network, Sparkles, AlertTriangle, 
  CheckCircle2, Bot, Layers, History as HistoryIcon, Code, Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

interface EvolutionLog {
  id: string;
  type: 'DEVIATION' | 'RECTIFICATION' | 'LEARNING';
  msg: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

export const UnifiedOrchestrator = () => {
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<EvolutionLog[]>([]);
  const [performance, setPerformance] = useState(99.98);
  const metrics = SCUGPHubUltimate.getEvolutionMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const types: EvolutionLog['type'][] = ['DEVIATION', 'RECTIFICATION', 'LEARNING'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      let msg = "";
      let severity: EvolutionLog['severity'] = 'low';

      if (type === 'DEVIATION') {
        msg = "Drift detected in Phase 4 planning logic. Probabilistic mismatch: 0.04%.";
        severity = 'medium';
      } else if (type === 'RECTIFICATION') {
        msg = "Autonomous code-patch applied. Schedule re-anchored on Blockchain Ledger.";
        severity = 'low';
      } else {
        msg = "New pattern 'Optimal_Cryo_Flow' learned from Sector Alpha and deployed globally.";
        severity = 'low';
      }

      const newLog: EvolutionLog = {
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        type,
        msg,
        timestamp: new Date().toLocaleTimeString(),
        severity
      };

      setLogs(prev => [newLog, ...prev].slice(0, 15));
      setPerformance(p => Math.min(100, p + 0.0001));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in" style={{ animationDuration: '1000ms' }}>
      {/* Evolution Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Self-Healing", val: metrics.self_healing_rate, icon: RefreshCw, color: "text-emerald-400" },
          { label: "Neural Plasticity", val: metrics.neural_plasticity, icon: Brain, color: "text-purple-400" },
          { label: "Rectification", val: metrics.rectification_velocity, icon: Zap, color: "text-amber-400" },
          { label: "Learning Depth", val: metrics.learning_depth, icon: Layers, color: "text-blue-400" },
          { label: "Global Sync", val: "100%", icon: Network, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all">
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
        {/* Core Intelligence Panel */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[8px] border-emerald-500/30 shadow-[0_0_100px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-emerald-900/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 animate-pulse">
                    <Cpu className="h-10 w-10 text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Orchestrateur Unifié Ω²²</CardTitle>
                    <CardDescription className="text-sm font-bold text-emerald-500/60 uppercase tracking-widest mt-2">Gestion de Projet Auto-Rectifiée | China University of Petroleum</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-500 uppercase">System Intelligence Status</p>
                  <p className="text-2xl font-black font-mono text-emerald-400">{performance.toFixed(4)}%</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="aspect-video bg-slate-900/60 rounded-[3rem] border-2 border-emerald-500/20 relative flex items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:50px_50px] group-hover:scale-110 transition-transform" style={{ transitionDuration: '20s' }} />
                
                <div className="relative z-10 flex flex-col items-center gap-10">
                  <div className="relative">
                    <Workflow size={120} className="text-emerald-500/30 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain size={60} className="text-emerald-400 animate-pulse drop-shadow-[0_0_30px_rgba(16,185,129,1)]" />
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <p className="text-2xl font-mono text-emerald-400 uppercase tracking-[0.8em] font-black">SYSTÈME AUTO-GÉRÉ</p>
                    <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-500 uppercase px-6 py-1 tracking-widest">NEURAL_MESH_CONNECTED</Badge>
                  </div>
                </div>

                <div className="absolute top-10 left-10 p-6 bg-black/80 border-2 border-emerald-500/50 rounded-[2rem] backdrop-blur-3xl animate-bounce shadow-2xl">
                  <p className="text-[10px] font-black text-emerald-400 uppercase">Self-Healing</p>
                  <p className="text-xl font-mono font-black text-white">ACTIVE</p>
                </div>
                
                <div className="absolute bottom-10 right-10 p-6 bg-black/80 border-2 border-blue-500/50 rounded-[2rem] backdrop-blur-3xl animate-pulse shadow-2xl">
                  <p className="text-[10px] font-black text-blue-400 uppercase">Learning Mode</p>
                  <p className="text-xl font-mono font-black text-white">AUTONOMOUS</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mt-12">
                <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner group">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Wrench className="h-6 w-6 text-emerald-500" /> Auto-Correction Logic
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2 font-medium">
                    "Chaque déviation détectée dans le jalon critique est immédiatement analysée. Le système compare les solutions historiques et injecte un correctif préemptif dans le planning Primavera/P6."
                  </p>
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-[9px] font-black uppercase h-10 px-8 rounded-2xl shadow-xl">Audit Correction History</Button>
                  </div>
                </div>
                <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner group">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Code className="h-6 w-6 text-blue-500" /> Self-Improvement Code
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-8 py-2 font-medium">
                    "Le système améliore ses propres algorithmes de prédiction en fonction des retours d'expérience (REX). La plasticité neuronale Ω²² permet une adaptation structurelle immédiate."
                  </p>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-slate-700 text-[9px] font-black uppercase h-10 px-8 rounded-2xl">View Code Evolution</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Evolution Logs */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xs font-black uppercase text-amber-400 flex items-center gap-4 tracking-widest">
                  <HistoryIcon className="h-6 w-6 animate-pulse" /> Evolution Log
                </CardTitle>
                <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">LIVE_FEED</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-emerald-900">
              {logs.map((log) => (
                <div key={log.id} className={cn(
                  "p-6 rounded-[2rem] border transition-all animate-in slide-in-from-right",
                  log.type === 'DEVIATION' ? "bg-red-500/5 border-red-500/20" :
                  log.type === 'RECTIFICATION' ? "bg-emerald-500/5 border-emerald-500/20" :
                  "bg-blue-500/5 border-blue-500/20"
                )} style={{ animationDuration: '500ms' }}>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={cn(
                      "text-[7px] font-black border-none uppercase",
                      log.type === 'DEVIATION' ? "text-red-400" :
                      log.type === 'RECTIFICATION' ? "text-emerald-400" :
                      "text-blue-400"
                    )}>{log.type}</Badge>
                    <span className="text-[8px] font-mono text-slate-600">{log.timestamp}</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-300 leading-relaxed uppercase tracking-tighter">{log.msg}</p>
                  <p className="text-[8px] font-mono text-slate-600 mt-2">ID: {log.id}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Evolution Data
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
