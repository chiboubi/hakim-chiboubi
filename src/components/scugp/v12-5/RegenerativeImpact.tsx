"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, BarChart3, TrendingUp, ShieldAlert, Wind, FileCheck, Gauge, Sparkles, Server, TreePine, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const RegenerativeImpact = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-l-4 border-l-emerald-500 text-white shadow-xl rounded-[2rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <TreePine className="h-3.5 w-3.5 text-emerald-500" /> Active Regeneration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">+14.8%</div>
            <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1">Ecosystem Restoration Score</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-blue-500 text-white shadow-xl rounded-[2rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Droplets className="h-3.5 w-3.5 text-blue-500" /> Net Positive Water
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">1.42x</div>
            <p className="text-[9px] text-blue-500 uppercase font-bold mt-1">Return Ratio to Grid</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-amber-500 text-white shadow-xl rounded-[2rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-amber-500" /> Quantum Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">100%</div>
            <p className="text-[9px] text-amber-500 uppercase font-bold mt-1">ZERO_COMPUTE_WASTE</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-purple-500 text-white shadow-xl rounded-[2rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-purple-500" /> Planetary Goal 12.5
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">ON_TRACK</div>
            <p className="text-[9px] text-purple-500 uppercase font-bold mt-1">Net Positive Horizon 2030</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden rounded-[4rem]">
          <CardHeader className="border-b border-slate-800 bg-emerald-500/5 px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
                  <Wind className="h-6 w-6" /> Regenerative Impact Core 12.5
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Active restoration of ecosystems & planetary resource surplus</CardDescription>
              </div>
              <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[10px] animate-pulse uppercase px-6 py-1 font-black">IMPACT: POSITIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-10 space-y-12">
            <div className="h-80 bg-black/40 rounded-[4rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
               <div className="relative z-10 flex flex-col items-center gap-8">
                  <Globe className="h-32 w-32 text-emerald-500/40 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                  <div className="text-center">
                    <p className="text-[12px] font-mono text-emerald-400 uppercase tracking-[0.6em] font-black">Gaia Restoration Twin v12</p>
                    <div className="flex gap-16 mt-8">
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Net Energy Export</p>
                        <p className="text-3xl font-black text-white font-mono">1.2 <span className="text-[12px] text-slate-600 italic">GWh/day</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Soil Regen Rate</p>
                        <p className="text-3xl font-black text-emerald-400 font-mono">4.2% <span className="text-[12px] text-slate-600 italic">MoM</span></p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-blue-400" /> ESG Planetary Audit
                </h4>
                <div className="p-8 bg-slate-950 rounded-[3rem] border border-slate-800 space-y-6 shadow-inner">
                  <div className="flex justify-between items-center text-[11px] font-black uppercase">
                    <span className="text-slate-400 tracking-tighter">Regeneration Integrity</span>
                    <span className="text-emerald-400">NET_POSITIVE_CERTIFIED</span>
                  </div>
                  <Progress value={100} className="h-2 bg-slate-800" />
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    "Quantum agents have validated the regenerative surplus from Phase 4. Project is now contributing 1.2x more resources back to the global ecosystem than it consumes."
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-amber-500" /> Regenerative Opportunities
                </h4>
                <div className="p-8 bg-slate-950 rounded-[3rem] border border-slate-800 space-y-6 shadow-inner">
                  <div className="flex items-center gap-3 text-[11px] font-black uppercase text-amber-500">
                    <Zap className="h-4 w-4" /> AI Suggestion: Bio-Grid Pivot
                  </div>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    "Integrating the oceanic bio-grid connector now will increase coral restoration impact by 18% while providing secondary thermal cooling for node clusters."
                  </p>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-12 rounded-[1.5rem] tracking-widest shadow-2xl">Execute Bio-Restoration</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3">
                <Gauge className="h-5 w-5" /> Conscious Resource Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-6">
              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] text-center space-y-2">
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Net Positive Score</p>
                <p className="text-4xl font-black font-mono text-white">+42.4</p>
                <p className="text-[9px] text-emerald-500 font-bold mt-2 uppercase tracking-widest">GAIA_COMPLIANT_V12</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Biodiversity Gain", val: "+12.4%", color: "text-emerald-400" },
                  { label: "Waste Re-entry", val: "100%", color: "text-blue-400" },
                  { label: "Social Equity", val: "HIGH", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-black/20 rounded-2xl border border-slate-800 group hover:border-blue-500/30 transition-all">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[10px] font-black font-mono", stat.color)}>{stat.val}</span>
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
