
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Bot, Cpu, Zap, RefreshCw, Share2, CheckCircle2, Globe, HeartPulse, BrainCircuit, Microscope, Leaf, Waves, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const PolymorphicAI22 = () => {
  const agents = [
    { role: "HSE Mode", status: "POLYMUTED", target: "Planetary Health", icon: HeartPulse, color: "text-red-400" },
    { role: "Finance Mode", status: "SYNCED", target: "Smart Laws", icon: Zap, color: "text-amber-400" },
    { role: "Geo Mode", status: "SENSING", target: "Lithosphere", icon: Globe, color: "text-blue-400" },
    { role: "Regen Mode", status: "ACTIVE", target: "Gaia Loop", icon: Leaf, color: "text-emerald-400" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-emerald-500/30 text-white shadow-[0_0_80px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden flex flex-col relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />
          <CardHeader className="bg-emerald-500/10 border-b border-slate-800 p-10 relative z-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-black uppercase tracking-[0.4em] text-emerald-400 flex items-center gap-6">
                  <BrainCircuit className="h-10 w-10 animate-pulse" /> Polymorphic AI 22.0
                </CardTitle>
                <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2 tracking-[0.2em]">Contextual Conscience & Human-AI Neural Co-Evolution</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-white border-none px-8 py-2 text-[11px] font-black animate-pulse shadow-[0_0_40px_rgba(16,185,129,0.5)]">CO_EVOLUTION_ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-12 space-y-12 flex-1 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {agents.map((agent, i) => (
                <div key={i} className="p-8 bg-black/60 rounded-[3rem] border border-slate-800 space-y-6 hover:border-emerald-500/40 transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-center relative z-10">
                    <div className="h-14 w-14 rounded-3xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                      <agent.icon className={cn("h-8 w-8", agent.color)} />
                    </div>
                    <Badge variant="outline" className="text-[9px] border-emerald-500/30 text-emerald-400 uppercase">{agent.status}</Badge>
                  </div>
                  <div className="relative z-10">
                    <p className="text-[12px] font-black text-slate-200 uppercase tracking-tighter">{agent.role}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-2 italic">Focus: {agent.target}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-12 bg-black/80 rounded-[5rem] border-2 border-emerald-500/20 relative overflow-hidden shadow-2xl group/log">
              <div className="absolute inset-0 bg-radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_80%) pointer-events-none" />
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <Waves className="h-10 w-10 text-emerald-400 animate-bounce" />
                <h4 className="text-xl font-black uppercase text-emerald-400 tracking-[0.4em]">Neural Symbiosis Log</h4>
              </div>
              <p className="text-xl text-slate-200 leading-relaxed italic border-l-4 border-emerald-500/50 pl-12 py-6 font-medium relative z-10">
                "Director, the system has adopted the 'HSE Conscience' mode. Analysis of intentions across the Mars Node indicates a potential ethical bias in the Lunar energy grid. Autonomously recalibrating resource distribution via Proof of Ethics protocol. Neural Symbiosis Index (NSI) stable at 0.994."
              </p>
              <div className="flex gap-8 mt-12 relative z-10">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-[11px] font-black uppercase h-16 px-16 rounded-[2.5rem] shadow-[0_0_60px_rgba(16,185,129,0.4)] tracking-[0.3em]">Confirm Intent</Button>
                <Button variant="outline" className="border-slate-700 text-[11px] font-black uppercase h-16 px-16 rounded-[2.5rem] hover:bg-slate-900 tracking-[0.3em]">Adjust Conscience</Button>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-slate-950 p-10 border-t border-slate-800 flex justify-between items-center px-16 relative z-10">
            <div className="flex gap-20">
              <div className="flex items-center gap-6">
                <Network className="h-8 w-8 text-blue-400" />
                <span className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Protocol: SCUGP_LINGUA_22</span>
              </div>
              <div className="flex items-center gap-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                <span className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Cognitive Alignment: 100%</span>
              </div>
            </div>
            <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[11px] px-8 py-2 uppercase tracking-widest">Polymorph Nodes: 142,000,000</Badge>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] overflow-hidden shadow-2xl group">
            <CardHeader className="pb-2 border-b border-slate-800 px-12 py-10">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-4 tracking-widest">
                <Star className="h-8 w-8 text-amber-500 animate-pulse" /> Cognitive Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 space-y-10 px-12 pb-12">
              <div className="flex flex-col items-center py-8">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-800 shadow-inner" />
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin-slow shadow-[0_0_30px_rgba(16,185,129,0.3)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-1">NSI Index</p>
                    <p className="text-3xl font-black text-white">0.994</p>
                  </div>
                </div>
                <p className="text-[12px] text-slate-400 uppercase font-black mt-8 tracking-[0.3em]">Symbiosis State: HARMONIC</p>
              </div>
              <div className="space-y-6">
                {[
                  { label: "CQI Index", val: "0.98", color: "text-emerald-400" },
                  { label: "EQC Consensus", val: "100%", color: "text-blue-400" },
                  { label: "HBI Stability", val: "SUPREME", color: "text-purple-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-[1.5rem] border border-slate-800 group hover:border-emerald-500/30 transition-all">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[11px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
