"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Bot, Cpu, Zap, RefreshCw, Share2, CheckCircle2, Globe, HeartPulse, BrainCircuit, Microscope, Leaf, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

export const OrganicA2AMesh = () => {
  const agents = [
    { role: "Bio-Architect", status: "EVOLVING", target: "Neural Design", icon: Leaf, color: "text-emerald-400" },
    { role: "Quantum Arbiter", status: "SYNCED", target: "Truth Ledger", icon: Cpu, color: "text-blue-400" },
    { role: "Empathy Agent", status: "SENSING", target: "Team Pulse", icon: HeartPulse, color: "text-red-400" },
    { role: "Planetary Seer", status: "FORECASTING", target: "Gaia Core", icon: Globe, color: "text-purple-400" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-emerald-500/30 text-white shadow-[0_0_60px_rgba(16,185,129,0.2)] rounded-[3rem] overflow-hidden flex flex-col relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />
          <CardHeader className="bg-emerald-500/10 border-b border-slate-800 p-8 relative z-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-emerald-400 flex items-center gap-4">
                  <BrainCircuit className="h-8 w-8 animate-pulse" /> Organic A2A Mesh 13.5
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2 tracking-widest">Self-Evolving Living Neural Ecosystem & Micro-Expression Sensing</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-white border-none px-6 py-1.5 text-[10px] font-black animate-pulse shadow-[0_0_30px_rgba(16,185,129,0.5)]">ORGANIC_INTELLIGENCE_ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-10 space-y-10 flex-1 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {agents.map((agent, i) => (
                <div key={i} className="p-6 bg-black/60 rounded-[2.5rem] border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-center relative z-10">
                    <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                      <agent.icon className={cn("h-6 w-6", agent.color)} />
                    </div>
                    <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400 uppercase">{agent.status}</Badge>
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-black text-slate-200 uppercase tracking-tighter">{agent.role}</p>
                    <p className="text-[9px] text-slate-500 font-mono mt-1 italic">Focus: {agent.target}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-black/80 rounded-[4rem] border-2 border-emerald-500/20 relative overflow-hidden shadow-inner group/log">
              <div className="absolute inset-0 bg-radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_80%) pointer-events-none" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <Waves className="h-8 w-8 text-emerald-400 animate-bounce" />
                <h4 className="text-lg font-black uppercase text-emerald-400 tracking-[0.3em]">Neural Collective Prescription</h4>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed italic border-l-4 border-emerald-500/50 pl-10 py-4 font-medium relative z-10">
                "The Organic Mesh has detected a subconscious drift in the engineering silo. Micro-expression analysis suggests a 14.2% rise in cognitive friction. I have autonomously co-created a new task-sharing method with the Bio-Architect. Net-Positive Outcome: 100% emotional alignment restored in 0.2ms."
              </p>
              <div className="flex gap-6 mt-10 relative z-10">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-[11px] font-black uppercase h-14 px-12 rounded-[2rem] shadow-[0_0_40px_rgba(16,185,129,0.4)] tracking-[0.2em]">Seize Synthesis</Button>
                <Button variant="outline" className="border-slate-700 text-[11px] font-black uppercase h-14 px-12 rounded-[2rem] hover:bg-slate-900 tracking-[0.2em]">Challenge DNA</Button>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-slate-950 p-8 border-t border-slate-800 flex justify-between items-center px-12 relative z-10">
            <div className="flex gap-16">
              <div className="flex items-center gap-4">
                <Network className="h-6 w-6 text-blue-400" />
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Mesh: LIVING_NEURAL_v13.5</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Gaia Sync: 100%</span>
              </div>
            </div>
            <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[10px] px-6 py-1 uppercase tracking-widest">Living Nodes: 142,000,000</Badge>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl group">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-4 tracking-widest">
                <Waves className="h-6 w-6" /> Bio-Digital Team Pulse
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 space-y-8 px-10 pb-10">
              <div className="flex flex-col items-center py-6">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HeartPulse className="h-14 w-14 text-emerald-500 animate-pulse" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 uppercase font-black mt-6 tracking-[0.2em]">Team Flow State: SUPREME</p>
              </div>
              <p className="text-[10px] text-slate-600 italic leading-relaxed text-center px-4">
                "Real-time micro-expression sensing across Web4.0 nodes indicates high-frequency creativity. Cognitive rest protocol deferred."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-2xl">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <Microscope className="h-6 w-6" /> Genetic Governance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-10 pb-10 space-y-5 font-mono text-[10px] text-slate-500">
              <p className="flex justify-between"><span>[BIO]</span> <span className="text-emerald-500">NOMINAL</span></p>
              <p className="flex justify-between"><span>[QUANT]</span> <span className="text-blue-500">HYPER_SYNC</span></p>
              <p className="flex justify-between"><span>[NEURO]</span> <span className="text-purple-500">99.9% CERTAINTY</span></p>
              <div className="h-px bg-slate-800 my-4" />
              <p className="text-[9px] text-slate-600 uppercase text-center font-bold tracking-widest">Standard SCUGP 13.5 Organic</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
