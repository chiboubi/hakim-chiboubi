"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Cpu, Network, Database, Layers, Radio, Activity, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export const QuantumHybridCore = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Quantum Volume", val: "142k Qubits", icon: Cpu, color: "text-blue-400" },
          { label: "Optimization Speed", val: "0.002ms", icon: Zap, color: "text-amber-400" },
          { label: "Resilience Rate", val: "99.9999%", icon: Activity, color: "text-emerald-400" },
          { label: "Power Allocation", val: "DYNAMIC", icon: Database, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-blue-500/30 transition-all rounded-[2rem]">
            <CardHeader className="pb-2 px-6 pt-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-3">
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
        <Card className="lg:col-span-8 bg-black border-2 border-blue-500/30 text-white shadow-2xl relative overflow-hidden h-[500px] rounded-[4rem]">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-3xl" />
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-blue-400 flex items-center gap-4">
                  <RefreshCw className="h-8 w-8 animate-spin-slow" /> Quantum Hybrid Cloud 13.5
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Hybrid classical-quantum network for millisecond optimization</CardDescription>
              </div>
              <Badge className="bg-blue-600 text-white border-none text-[10px] animate-pulse uppercase px-6 py-1.5 tracking-widest">QUANTUM_SECURE</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-full flex flex-col items-center justify-center overflow-hidden z-10">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative flex items-center justify-center">
               <div className="w-[450px] h-[450px] rounded-full border-2 border-blue-500/20 animate-spin-slow" />
               <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-purple-500/30 animate-reverse-spin" />
               <div className="absolute flex flex-col items-center gap-4">
                  <Database size={120} className="text-blue-500/40 drop-shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse" />
                  <p className="text-[12px] font-mono text-blue-400 uppercase tracking-[0.6em] font-black">Distributing Power across nodes</p>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 p-8 bg-slate-900/80 rounded-[2.5rem] border border-blue-500/30 backdrop-blur-2xl space-y-6 w-80 shadow-2xl">
               <div className="flex items-center gap-4">
                  <Radio className="h-6 w-6 text-cyan-400 animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-widest">Network Telemetry</span>
               </div>
               <div className="space-y-4">
                  {[
                    { label: "Q-Throughput", val: "100%", color: "bg-blue-500" },
                    { label: "Classic Latency", val: "0.04ms", color: "bg-cyan-500" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={cn("h-full", stat.color)} style={{ width: '95%' }} />
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem] h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-4 tracking-widest">
                <Layers className="h-6 w-6" /> Dynamic Allocation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-8 flex-1">
              <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[2.5rem] text-center shadow-inner relative group">
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[11px] text-slate-400 leading-relaxed italic relative z-10">
                  "Quantum Hybrid mesh has shifted 42% of processing power to the 'Logistics Optimization' node. This dynamic shift has reduced global project delay probability by 18% in the last 142ms."
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Trading Engine", val: "99.9%", color: "text-emerald-400" },
                  { label: "Complex Engineering", val: "ACTIVE", color: "text-blue-400" },
                  { label: "Supply Chain Mesh", val: "OPTIMIZED", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-slate-800 group hover:border-blue-500/30 transition-all">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[11px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800">
               <Button variant="ghost" className="w-full text-[11px] font-black uppercase text-slate-500 hover:text-white tracking-[0.3em]">Configure Hybrid Tunnels</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
