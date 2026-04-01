"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, BarChart3, TrendingDown, ShieldAlert, Wind, ThermometerSnowflake, FileCheck, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const SustainabilityImpact = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-l-4 border-l-emerald-500 text-white shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Leaf className="h-3.5 w-3.5 text-emerald-500" /> Carbon Balance (CO2e)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">-24.8%</div>
            <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1">↑ 12% Reduction vs Goal</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-cyan-500 text-white shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-cyan-500" /> Energy Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">98.4%</div>
            <p className="text-[9px] text-cyan-500 uppercase font-bold mt-1">OPTIMIZED BY AI LOOP</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-amber-500 text-white shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <BarChart3 className="h-3.5 w-3.5 text-amber-500" /> ESG Compliance Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">A+ (Singularity)</div>
            <p className="text-[9px] text-amber-500 uppercase font-bold mt-1">ISO 14083 CERTIFIED</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-purple-500 text-white shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-purple-500" /> Social Impact Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">0.94 / 1.0</div>
            <p className="text-[9px] text-purple-500 uppercase font-bold mt-1">LOCAL CONTENT MET</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                  <Wind className="h-4 w-4" /> Real-time Carbon & Resource Loop
                </CardTitle>
                <CardDescription className="text-[10px]">Pillar 8: Sustainability & Net-Zero Autonomous Steering</CardDescription>
              </div>
              <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[8px] animate-pulse">ISO_14083_ACTIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="h-64 bg-black/40 rounded-[2rem] border border-slate-800 relative flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
               <div className="relative z-10 flex flex-col items-center gap-4">
                  <Globe className="h-16 w-16 text-emerald-500/50 group-hover:scale-110 transition-transform duration-1000" />
                  <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.5em] font-black">Environmental Twin Status</p>
                  <div className="flex gap-8 mt-4">
                    <div className="text-center">
                      <p className="text-[8px] text-slate-500 uppercase font-bold">Cryo-Efficiency</p>
                      <p className="text-lg font-black text-cyan-400 font-mono">0.35 Target</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[8px] text-slate-500 uppercase font-bold">Scope 3 Leakage</p>
                      <p className="text-lg font-black text-emerald-400 font-mono">0.02% Min</p>
                    </div>
                  </div>
               </div>
               {/* Visual Scan Line */}
               <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute w-full h-px bg-emerald-400 top-0 animate-[slide-down_4s_linear_infinite]" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <FileCheck className="h-3.5 w-3.5 text-blue-400" /> GRI Disclosure 305-3
                </h4>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-slate-400 uppercase">Indirect GHG Emissions</span>
                    <span className="text-white">VALIDATED</span>
                  </div>
                  <Progress value={94} className="h-1.5 bg-slate-800" />
                  <p className="text-[9px] text-slate-600 italic">"Autonomous AI verification of supply chain partners completed. 100% data traceability achieved on Solidity Ledger."</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-500" /> HSE Health Signal
                </h4>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-slate-400 uppercase">Team Burnout Risk</span>
                    <span className="text-emerald-500">LOW (0.12)</span>
                  </div>
                  <Progress value={12} className="h-1.5 bg-slate-800" />
                  <p className="text-[9px] text-slate-600 italic">"NeuroPilot behavioral analysis indicates high morale. Resource re-allocation loop disabled."</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Gauge className="h-4 w-4" /> Resource Optimizer AI
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  "AI Singularité suggests switching to Hybrid-Energy Mode Alpha. Estimated OPEX reduction: +4.2%. Carbon impact: -15%."
                </p>
              </div>
              <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[9px] font-black uppercase h-9 shadow-lg">Execute Optimization</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-slate-500 tracking-widest">UN SDG Alignment</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { goal: "Goal 7: Clean Energy", status: "MET", color: "text-emerald-500" },
                { goal: "Goal 9: Innovation", status: "TRL 10", color: "text-blue-500" },
                { goal: "Goal 13: Climate", status: "NOMINAL", color: "text-cyan-500" }
              ].map((g, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">{g.goal}</span>
                  <span className={cn("text-[9px] font-black", g.color)}>{g.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
