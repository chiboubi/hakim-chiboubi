"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, BarChart3, TrendingDown, ShieldAlert, Wind, FileCheck, Gauge, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const SustainabilityImpact10 = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-l-4 border-l-emerald-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Leaf className="h-3.5 w-3.5 text-emerald-500" /> Carbon Loop 10.0
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">-32.4%</div>
            <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1">↑ 18% vs SCUGP Goal</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-cyan-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-cyan-500" /> Energy Singularité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">99.2%</div>
            <p className="text-[9px] text-cyan-500 uppercase font-bold mt-1">AI-OPTIMIZED MIX</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-amber-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <BarChart3 className="h-3.5 w-3.5 text-amber-500" /> ESG Reporting GRI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">NOMINAL</div>
            <p className="text-[9px] text-amber-500 uppercase font-bold mt-1">CSRD COMPLIANT</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-purple-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-purple-500" /> Social Ethics Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">0.98 / 1.0</div>
            <p className="text-[9px] text-purple-500 uppercase font-bold mt-1">HIGH IMPACT ZONE</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                  <Wind className="h-4 w-4" /> Autonomous ESG & Carbon Mesh 10.0
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">ISO 14083 / CSRD Real-time Regulatory Synthesis</CardDescription>
              </div>
              <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[8px] animate-pulse uppercase px-4">REALTIME_ESG_AUDIT: ON</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-10">
            <div className="h-72 bg-black/40 rounded-[3rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
               <div className="relative z-10 flex flex-col items-center gap-6">
                  <Globe className="h-24 w-24 text-emerald-500/40 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                  <div className="text-center">
                    <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-[0.5em] font-black">Carbon Neutral Twin v10</p>
                    <div className="flex gap-12 mt-6">
                      <div className="text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">GHG Intensity</p>
                        <p className="text-2xl font-black text-white font-mono">0.012 <span className="text-[10px] text-slate-600 italic">kgCO2e</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Offset Velocity</p>
                        <p className="text-2xl font-black text-emerald-400 font-mono">100% <span className="text-[10px] text-slate-600 italic">Auto-Anchor</span></p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="absolute bottom-6 flex gap-2">
                  <Badge variant="outline" className="bg-black/60 border-emerald-500/20 text-emerald-500 text-[8px]">SCOPE 1: OK</Badge>
                  <Badge variant="outline" className="bg-black/60 border-emerald-500/20 text-emerald-500 text-[8px]">SCOPE 2: OK</Badge>
                  <Badge variant="outline" className="bg-black/60 border-emerald-500/20 text-emerald-500 text-[8px]">SCOPE 3: TRACKING</Badge>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-blue-400" /> Automated GRI Disclosure
                </h4>
                <div className="p-6 bg-slate-950 rounded-[2rem] border border-slate-800 space-y-4 shadow-inner">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase">
                    <span className="text-slate-400 tracking-tighter">Emission Data Traceability</span>
                    <span className="text-emerald-400">CERTIFIED</span>
                  </div>
                  <Progress value={100} className="h-1.5 bg-slate-800" />
                  <p className="text-[10px] text-slate-500 leading-relaxed italic">
                    "AI RPA bots have harvested Scope 3 data from all 14 partners. All emissions records are anchored on the Quantum Ledger for auditor verification."
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-500" /> Sustainability Alternatives
                </h4>
                <div className="p-6 bg-slate-950 rounded-[2rem] border border-slate-800 space-y-4 shadow-inner">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-amber-500">
                    <Zap className="h-3.5 w-3.5" /> IA Suggestion: Logistics Pivot
                  </div>
                  <p className="text-[10px] text-slate-400 italic leading-relaxed">
                    "Switching to GNL logistics for Phase 4 will reduce Scope 3 by an additional 14%. Estimated cost increase (+2%) is compensated by ROI gains in D8."
                  </p>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-9 rounded-xl">Execute Sustainable Pivot</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Gauge className="h-4 w-4" /> Resource Singularité Hub
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6 pb-6 space-y-4">
              <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl text-center">
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Energy Balance Score</p>
                <p className="text-3xl font-black font-mono text-white">0.992</p>
                <p className="text-[8px] text-emerald-500 font-bold mt-1 uppercase tracking-widest">SYSTEM_STABLE_V10</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Water Recovery", val: "98.4%", color: "text-blue-400" },
                  { label: "Heat Exchanger ROI", val: "1.2 CPI", color: "text-amber-400" },
                  { label: "Waste Reduction", val: "CLEAN", color: "text-emerald-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800 group hover:border-blue-500/30 transition-all">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[9px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-slate-500 tracking-widest">UN SDG Target Matrix</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6 pb-6 space-y-3">
              {[
                { goal: "Goal 7: Clean Energy", status: "EXCEEDED", color: "text-emerald-500" },
                { goal: "Goal 9: Industry 10.0", status: "TRL 10+", color: "text-blue-500" },
                { goal: "Goal 13: Climate Action", status: "NOMINAL", color: "text-cyan-500" }
              ].map((g, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded-xl border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{g.goal}</span>
                  <span className={cn("text-[9px] font-black uppercase", g.color)}>{g.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
