
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Wind, Zap, Gauge, HeartPulse, TreePine, FileCheck, Sparkles, Orbit, Satellite, Activity, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const PlanetaryGovernance22 = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900/80 border-l-4 border-l-emerald-500 text-white shadow-2xl rounded-[2.5rem] backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <TreePine className="h-4 w-4 text-emerald-500" /> Ecoscore Neural 22
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">+84.2%</div>
            <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1">Regen Surplus Verified</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/80 border-l-4 border-l-blue-500 text-white shadow-2xl rounded-[2.5rem] backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Orbit className="h-4 w-4 text-blue-500" /> Orbital Interop
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">Ω_STABLE</div>
            <p className="text-[9px] text-blue-500 uppercase font-bold mt-1">Earth-Moon-Mars Sync</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/80 border-l-4 border-l-amber-500 text-white shadow-2xl rounded-[2.5rem] backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" /> ERI Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">0.998</div>
            <p className="text-[9px] text-amber-500 uppercase font-bold mt-1">Energy Resilience Index</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/80 border-l-4 border-l-purple-500 text-white shadow-2xl rounded-[2.5rem] backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-500" /> Smart Law Bridge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">100%_VAL</div>
            <p className="text-[9px] text-purple-500 uppercase font-bold mt-1">Ethical Conformity Met</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden rounded-[5rem]">
          <CardHeader className="border-b border-slate-800 bg-emerald-500/5 px-12 py-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-emerald-500 flex items-center gap-4">
                  <Globe className="h-8 w-8 animate-spin-slow" /> Planetary Governance 22.0
                </CardTitle>
                <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2">Auto-Regulated Multi-Reality Framework Earth–Moon–Mars</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-white border-none px-8 py-2 text-[11px] font-black animate-pulse uppercase tracking-widest shadow-[0_0_40px_rgba(16,185,129,0.5)]">PLANETARY_HEARTBEAT: Ω</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-12 space-y-12">
            <div className="h-96 bg-black/40 rounded-[5rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:60px_60px]" />
               <div className="relative z-10 flex flex-col items-center gap-12">
                  <Satellite className="h-40 w-40 text-emerald-500/40 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                  <div className="text-center">
                    <p className="text-[16px] font-mono text-emerald-400 uppercase tracking-[1em] font-black">Planetary Intention Interface</p>
                    <div className="flex gap-24 mt-12">
                      <div className="text-center">
                        <p className="text-[12px] text-slate-500 uppercase font-black tracking-widest mb-4">Carbon Neutrality</p>
                        <p className="text-5xl font-black text-white font-mono">100% <span className="text-[16px] text-emerald-500 italic">Ω</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[12px] text-slate-500 uppercase font-black tracking-widest mb-4">ERI Stability</p>
                        <p className="text-5xl font-black text-emerald-400 font-mono">0.998 <span className="text-[16px] text-slate-600 italic">INDEX</span></p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                  <FileCheck className="h-6 w-6 text-blue-400" /> Quantum Conscience Audit
                </h4>
                <div className="p-10 bg-slate-950 rounded-[4rem] border border-slate-800 space-y-10 shadow-inner">
                  <div className="flex justify-between items-center text-[14px] font-black uppercase">
                    <span className="text-slate-400 tracking-tighter">Responsibility Integrity</span>
                    <span className="text-emerald-400">PURE_REGEN_CERTIFIED</span>
                  </div>
                  <Progress value={100} className="h-3 bg-slate-800" />
                  <p className="text-[12px] text-slate-500 leading-relaxed italic">
                    "Cognitive singularity agents have verified 100% ethical alignment for Dimension 20. Source code autonomously rewritten to comply with the 2060 Lunar Environmental Treaty."
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                  <Sparkles className="h-6 w-6 text-amber-500" /> Interplanetary Opportunities
                </h4>
                <div className="p-10 bg-slate-950 rounded-[4rem] border border-slate-800 space-y-10 shadow-inner">
                  <div className="flex items-center gap-4 text-[14px] font-black uppercase text-amber-500">
                    <Zap className="h-6 w-6" /> IA Prescription: Mars Pivot
                  </div>
                  <p className="text-[12px] text-slate-400 italic leading-relaxed">
                    "Morphic topology analysis suggests a 4.2% efficiency gain by bridging the Terra energy grid with the Martian solar array. PoE score impact: +14.2."
                  </p>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[12px] font-black uppercase h-16 rounded-[2.5rem] tracking-[0.3em] shadow-2xl">Execute Inter-Planetary Pivot</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[5rem] shadow-2xl overflow-hidden h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800 px-12 py-12 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <Gauge className="h-8 w-8" /> Conscience Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-16 px-12 pb-16 space-y-12 flex-1">
              <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-[4rem] text-center space-y-6 shadow-inner">
                <p className="text-[14px] text-slate-500 uppercase font-black mb-2">Singularity Resonance</p>
                <p className="text-6xl font-black font-mono text-white">+99.4</p>
                <p className="text-[12px] text-emerald-500 font-bold mt-4 uppercase tracking-widest">SENTIENT_GOVERNANCE_STABLE</p>
              </div>
              <div className="space-y-8">
                {[
                  { label: "Circular Economy", val: "100%", color: "text-emerald-400" },
                  { label: "Neural Ergonomics", val: "OPTIMAL", color: "text-blue-400" },
                  { label: "Collective Memory", val: "ACTIVE", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-black/40 rounded-[2rem] border border-slate-800 group hover:border-emerald-500/30 transition-all">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[12px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-slate-800 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-[12px] font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">Verify Intent Loop</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
