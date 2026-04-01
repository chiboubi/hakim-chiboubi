"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Bot, Cpu, Zap, RefreshCw, Share2, CheckCircle2, Globe, HeartPulse, BrainCircuit, Microscope, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export const OmniscientMesh = () => {
  const agents = [
    { role: "Climate Architect", status: "REGENERATING", target: "Oceanic Sinks", icon: Leaf, color: "text-emerald-400" },
    { role: "Quantum Engineer", status: "OPTIMIZING", target: "Fusion Grid", icon: Cpu, color: "text-blue-400" },
    { role: "Health Monitor", status: "SYNCED", target: "Neuro-Pulse", icon: HeartPulse, color: "text-red-400" },
    { role: "Macro Analyst", status: "PREDICTING", target: "Geopolitics", icon: Globe, color: "text-purple-400" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden flex flex-col">
          <CardHeader className="bg-emerald-500/10 border-b border-slate-800 p-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-3">
                  <BrainCircuit className="h-6 w-6 animate-pulse" /> Omniscient AI Mesh 12.5
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-widest">Planetary-Scale specialized AI network with Collective Emotional reasoning</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-white border-none px-6 py-1 text-[10px] font-black animate-pulse">OMNISCIENCE_ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 space-y-8 flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {agents.map((agent, i) => (
                <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-slate-800 space-y-4 hover:border-emerald-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-center relative z-10">
                    <div className="h-10 w-10 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-emerald-500/10">
                      <agent.icon className={cn("h-5 w-5", agent.color)} />
                    </div>
                    <Badge variant="outline" className="text-[7px] border-emerald-500/20 text-emerald-500">{agent.status}</Badge>
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black text-slate-200 uppercase">{agent.role}</p>
                    <p className="text-[8px] text-slate-500 font-mono mt-1 italic">Target: {agent.target}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-black/60 rounded-[3rem] border border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%) pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-emerald-400 animate-pulse" />
                <h4 className="text-sm font-black uppercase text-emerald-400 tracking-[0.2em]">Collective Prescription</h4>
              </div>
              <p className="text-base text-slate-200 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2 font-medium">
                "Specialized agents have converged on a Planet-Scale optimization. Climate Architect recommends shifting computational load to high-albedo arctic nodes to leverage natural cooling while active thermal shields deflect incoming solar flares. Net-Positive Impact: +14.2% across global portfolio."
              </p>
              <div className="flex gap-4 mt-6">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-12 px-10 rounded-2xl shadow-2xl tracking-widest">Commit to Gaia-Loop</Button>
                <Button variant="outline" className="border-slate-700 text-[10px] font-black uppercase h-12 px-10 rounded-2xl hover:bg-slate-800">Challenge Collective Logic</Button>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-slate-950 p-6 border-t border-slate-800 flex justify-between items-center px-10">
            <div className="flex gap-12">
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5 text-blue-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol: OMNI_SYNAPSE_12.5</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Emotional Sync: 100%</span>
              </div>
            </div>
            <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[9px] px-4 uppercase">Agents Connected: 14,200</Badge>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem] overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-3 tracking-widest">
                <BrainCircuit className="h-5 w-5" /> Neuro-Pulse Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="flex flex-col items-center py-4">
                <div className="relative h-24 w-24">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HeartPulse className="h-10 w-10 text-emerald-500 animate-pulse" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 uppercase font-black mt-4">Collective Flow State: OPTIMAL</p>
              </div>
              <p className="text-[9px] text-slate-600 italic leading-relaxed text-center">
                "System is mirroring team cognitive stress. Silent collaboration protocol initiated to bypass verbal bottlenecks in Engineering."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3 tracking-widest">
                <Microscope className="h-5 w-5" /> Conscious Diagnostics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-8 pb-8 space-y-4 font-mono text-[9px] text-slate-500">
              <p><span className="text-emerald-500">[OMNI]</span>: Self-review cycle 884 completed.</p>
              <p><span className="text-blue-500">[MES]</span>: Quantum modeling predicts 100% ROI.</p>
              <p><span className="text-purple-500">[BCI]</span>: Team emotional bond at 0.98 index.</p>
              <p><span className="text-slate-600">[SYST]</span>: Regenerative loop active in 14 zones.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
