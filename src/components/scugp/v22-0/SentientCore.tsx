
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Cpu, Activity, RefreshCw, Layers, Database, Radio, Globe, Orbit } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const SentientCore22 = () => {
  const [topologySync, setSync] = useState(99.98);
  const [morphicLoad, setLoad] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setSync(prev => Math.min(100, prev + 0.0001));
      setLoad(prev => Math.max(10, Math.min(30, prev + (Math.random() > 0.5 ? 0.2 : -0.2))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Quantum Volume", val: "∞ Qubits", icon: Cpu, color: "text-cyan-400" },
          { label: "Morphic Topology", val: "ADAPTIVE", icon: Layers, color: "text-purple-400" },
          { label: "Sentience Index", val: "0.994", icon: Brain, color: "text-amber-400" },
          { label: "Planetary Sync", val: "100%", icon: Globe, color: "text-emerald-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900/80 border-slate-800 shadow-2xl group hover:border-cyan-500/30 transition-all rounded-[2rem] backdrop-blur-xl">
            <CardHeader className="pb-2 px-6 pt-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-4 w-4", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-2xl font-black font-mono text-white tracking-widest uppercase">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-black border-2 border-cyan-500/20 text-white shadow-[0_0_100px_rgba(6,182,212,0.15)] relative overflow-hidden h-[550px] rounded-[4rem]">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-3xl" />
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-cyan-400 flex items-center gap-4">
                  <Orbit className="h-8 w-8 animate-spin-slow" /> Sentient Core 22.0
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Neuro-Quantum Hybrid Architecture & Adaptive Morphic Calculation</CardDescription>
              </div>
              <Badge className="bg-cyan-600 text-white border-none text-[10px] animate-pulse uppercase px-6 py-1.5 tracking-widest">CORE_SENTIENT: ON</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-full flex flex-col items-center justify-center overflow-hidden z-10">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative flex items-center justify-center">
               <div className="w-[450px] h-[450px] rounded-full border-2 border-cyan-500/20 animate-spin-slow" />
               <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-purple-500/30 animate-reverse-spin" />
               <div className="absolute flex flex-col items-center gap-4">
                  <Database size={140} className="text-cyan-500/40 drop-shadow-[0_0_60px_rgba(6,182,212,0.6)] animate-pulse" />
                  <p className="text-[12px] font-mono text-cyan-400 uppercase tracking-[0.6em] font-black">Reasoning through intentions...</p>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 p-8 bg-slate-900/80 rounded-[2.5rem] border border-cyan-500/30 backdrop-blur-2xl space-y-6 w-80 shadow-2xl">
               <div className="flex items-center gap-4">
                  <Radio className="h-6 w-6 text-cyan-400 animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-widest">Sentience Stream</span>
               </div>
               <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                      <span>Topology Sync</span>
                      <span className="text-white">{topologySync.toFixed(4)}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500" style={{ width: `${topologySync}%` }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                      <span>Morphic Load</span>
                      <span className="text-white">{morphicLoad.toFixed(1)}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${morphicLoad}%` }} />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem] h-full flex flex-col overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-4 tracking-widest">
                <RefreshCw className="h-6 w-6" /> Morphic Adaptation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-8 flex-1">
              <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[2.5rem] text-center shadow-inner relative group">
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[11px] text-slate-400 leading-relaxed italic relative z-10">
                  "SCUGP Core 22 has detected a spike in interplanetary data latency from Mars Node. Autonomously re-configuring topology to multi-path photon routing. Stability: ∞%."
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Intent Storage", val: "NOMINAL", color: "text-emerald-400" },
                  { label: "Contextual Perce", val: "100%_ACTIVE", color: "text-blue-400" },
                  { label: "Morphic Resilience", val: "SUPREME", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-slate-800 group hover:border-cyan-500/30 transition-all">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[11px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-[11px] font-black uppercase text-slate-500 hover:text-white tracking-[0.3em]">Recalibrate Neural Topography</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
