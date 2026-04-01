"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Zap, Target, TrendingDown, AlertTriangle, Cpu, Radio, Network } from "lucide-react";
import { cn } from "@/lib/utils";

export const InsightScope = () => {
  return (
    <div className="space-y-6">
      {/* Risk Mapping Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-950 border-2 border-amber-500/20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <AlertTriangle className="h-24 w-24 text-amber-500" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
              <Zap className="h-4 w-4" /> Critical Drift Prediction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">+14 Days</div>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Probability: 82% (Source: Supply Chain)</p>
            <div className="h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-amber-500 w-[82%]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
              <TrendingDown className="h-4 w-4" /> Cost Jump Avoidance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">-$1.2M</div>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Projected Savings via AI Re-allocation</p>
            <div className="h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-blue-500 w-[65%]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-2">
              <Target className="h-4 w-4" /> Weak Signal Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono">NOMINAL</div>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">142,000 Field Data Points Ingested</p>
            <div className="h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-emerald-500 w-[98%]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-slate-800 text-white shadow-2xl overflow-hidden h-full flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase text-cyan-500 flex items-center gap-2">
                <Network className="h-4 w-4" /> InsightScope™ 360° Risk Mapping
              </CardTitle>
              <CardDescription className="text-[10px]">Dynamic PERT/Gantt Analysis powered by Neural Forecasting</CardDescription>
            </div>
            <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30 text-[8px] uppercase tracking-widest">Model: LSTM-v6.4</Badge>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col items-center justify-center relative bg-black/40">
             {/* Visual Graph Representation Mockup */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[length:25px:25px]" />
             <div className="relative z-10 w-full h-80 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-12">
                   {[
                     { label: "Engineering", risk: 0.12, status: "STABLE" },
                     { label: "Procurement", risk: 0.84, status: "ALERT" },
                     { label: "Fabrication", risk: 0.25, status: "NOMINAL" }
                   ].map((node, i) => (
                     <div key={i} className="flex flex-col items-center gap-3">
                        <div className={cn(
                          "h-20 w-20 rounded-2xl border-2 flex items-center justify-center shadow-lg transition-all duration-500",
                          node.status === 'ALERT' ? "bg-red-500/10 border-red-500 animate-pulse" : "bg-cyan-500/10 border-cyan-500"
                        )}>
                           <Cpu className={cn("h-8 w-8", node.status === 'ALERT' ? "text-red-400" : "text-cyan-400")} />
                        </div>
                        <div className="text-center">
                           <p className="text-[10px] font-black uppercase text-white">{node.label}</p>
                           <p className="text-[8px] font-mono text-slate-500">Risk Score: {node.risk}</p>
                        </div>
                     </div>
                   ))}
                </div>
                {/* Connecting lines svg placeholder */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                   <line x1="33%" y1="50%" x2="66%" y2="50%" stroke="cyan" strokeWidth="1" strokeDasharray="4" />
                   <line x1="66%" y1="50%" x2="90%" y2="50%" stroke="red" strokeWidth="1" />
                </svg>
             </div>
             
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-3 bg-slate-900/80 rounded-xl border border-slate-800 backdrop-blur-md">
                <p className="text-[9px] font-mono text-amber-400 uppercase font-black text-center mb-1">Ripple Effect Detected</p>
                <div className="flex items-center gap-2 text-[8px] font-bold text-slate-500">
                  <span>Procurement Delay</span>
                  <Zap className="h-2 w-2 text-amber-500" />
                  <span className="text-amber-500">Impacts Fabrication Jalon Q4</span>
                </div>
             </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                <Radio className="h-4 w-4" /> IoT Weak Signals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { signal: "Vibration Peak #122", area: "Cryo-Pipe", level: "Low", icon: Zap },
                { signal: "Supply Chain Latency", area: "Global", level: "High", icon: AlertTriangle }
              ].map((s, i) => (
                <div key={i} className="p-3 bg-black/40 rounded-xl border border-slate-800 group hover:border-cyan-500/30 transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-black text-slate-200 uppercase">{s.signal}</span>
                    <Badge variant="outline" className={cn(
                      "text-[7px] border-none px-1 h-3",
                      s.level === 'High' ? "text-red-500" : "text-emerald-500"
                    )}>{s.level} RISK</Badge>
                  </div>
                  <p className="text-[8px] text-slate-500 font-mono">{s.area} | Tracking: Real-time</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-blue-900/10 border border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Search className="h-3 w-3" /> Predictive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[10px] text-slate-400 leading-relaxed italic">
                "Based on the integration of 14 separate data streams, InsightScope™ predicts a 94% probability of successful TRL reaching for Level 10 Innovation by Q1 2026."
              </p>
              <Button size="sm" variant="outline" className="w-full mt-4 border-blue-500/30 text-blue-400 text-[9px] font-black uppercase h-8">
                Generate Full Risk Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
