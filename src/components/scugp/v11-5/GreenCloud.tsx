"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, BarChart3, TrendingDown, ShieldAlert, Wind, FileCheck, Gauge, Sparkles, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const GreenCloud = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-l-4 border-l-emerald-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Leaf className="h-3.5 w-3.5 text-emerald-500" /> Carbon Loop 11.5
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">-42.8%</div>
            <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1">↑ 24% vs SCUGP 10.5</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-cyan-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Server className="h-3.5 w-3.5 text-cyan-500" /> Green Compute
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">99.8%</div>
            <p className="text-[9px] text-cyan-500 uppercase font-bold mt-1">RENEWABLE_CORE</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-amber-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <BarChart3 className="h-3.5 w-3.5 text-amber-500" /> ESG Reporting 2.0
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">NOMINAL</div>
            <p className="text-[9px] text-amber-500 uppercase font-bold mt-1">REALTIME_GRI_ACTIVE</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-purple-500 text-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-purple-500" /> Eco-Sovereignty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">0.99 / 1.0</div>
            <p className="text-[9px] text-purple-500 uppercase font-bold mt-1">BEYOND_SINGULARITY</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-emerald-500/5 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                  <Wind className="h-4 w-4" /> Green Cloud Optimization Mesh 11.5
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Autonomous Carbon-Aware Computing & Resource Allocation</CardDescription>
              </div>
              <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[8px] animate-pulse uppercase px-4">ECO_COMPUTE: OPTIMIZED</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-10">
            <div className="h-72 bg-black/40 rounded-[3rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
               <div className="relative z-10 flex flex-col items-center gap-6">
                  <Globe className="h-24 w-24 text-emerald-500/40 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                  <div className="text-center">
                    <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-[0.5em] font-black">Sustainable Digital Twin v11.5</p>
                    <div className="flex gap-12 mt-6">
                      <div className="text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Compute Intensity</p>
                        <p className="text-2xl font-black text-white font-mono">0.004 <span className="text-[10px] text-slate-600 italic">kgCO2e/tx</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">PUE Ratio</p>
                        <p className="text-2xl font-black text-emerald-400 font-mono">1.02 <span className="text-[10px] text-slate-600 italic">OPTIMIZED</span></p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-blue-400" /> GRI Real-time Disclosure
                </h4>
                <div className="p-6 bg-slate-950 rounded-[2rem] border border-slate-800 space-y-4 shadow-inner">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase">
                    <span className="text-slate-400 tracking-tighter">Carbon Transparency</span>
                    <span className="text-emerald-400">100% AUDITED</span>
                  </div>
                  <Progress value={100} className="h-1.5 bg-slate-800" />
                  <p className="text-[10px] text-slate-500 leading-relaxed italic">
                    "AI Agents have synchronized carbon scope data from the entire multi-chain ledger. Reports are autonomously published to the Green Cloud Archive."
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-500" /> Energy Optimization Suggestions
                </h4>
                <div className="p-6 bg-slate-950 rounded-[2rem] border border-slate-800 space-y-4 shadow-inner">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-amber-500">
                    <Zap className="h-3.5 w-3.5" /> IA Suggestion: Compute Shift
                  </div>
                  <p className="text-[10px] text-slate-400 italic leading-relaxed">
                    "Shifting non-critical training cycles to the Algerian Solar Edge node will reduce current carbon intensity by 12.4%."
                  </p>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-9 rounded-xl">Execute Energy Shift</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Gauge className="h-4 w-4" /> Eco-Performance Score
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6 pb-6 space-y-4">
              <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl text-center">
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Sustainable Singularité</p>
                <p className="text-3xl font-black font-mono text-white">0.998</p>
                <p className="text-[8px] text-emerald-500 font-bold mt-1 uppercase tracking-widest">SYSTEM_GREEN_STABLE</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Renewable Usage", val: "99.8%", color: "text-emerald-400" },
                  { label: "AI Cycle Efficiency", val: "+32%", color: "text-blue-400" },
                  { label: "Net Zero Path", val: "AHEAD", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[9px] font-black font-mono", stat.color)}>{stat.val}</span>
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
