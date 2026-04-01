"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, AlertCircle, MessageSquare, History, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const NeuroPilot = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cognitive Bias Detection */}
        <Card className="bg-slate-950 border-2 border-amber-500/20 text-white overflow-hidden group shadow-2xl">
          <CardHeader className="pb-2 bg-amber-500/5">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Brain className="h-4 w-4" /> NeuroPilot+™ Cognitive Copilot
              </CardTitle>
              <Badge variant="outline" className="text-[8px] border-amber-500/20 text-amber-500">TRL 9+</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="p-3 bg-black/40 rounded-lg border border-amber-500/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-3 w-3 text-amber-500" />
                <p className="text-[9px] text-amber-500 font-black uppercase tracking-tighter">Conflict Detected: D1 vs D4</p>
              </div>
              <p className="text-[11px] text-slate-300 italic leading-relaxed">
                "Resource load for EPC contract shows high cognitive pressure. Suggesting redistribution of Internal IT to avoid burnout & delay propagation."
              </p>
            </div>
            <div className="flex justify-between text-[9px] font-bold uppercase text-slate-500">
              <span>Decision Neutrality Score</span>
              <span className="text-emerald-400">0.944</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[94%]" />
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Assistance */}
        <Card className="bg-slate-900 border-slate-800 text-white lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Team Behavioral Assistance
              </CardTitle>
              <CardDescription className="text-[10px]">Real-time dialogue analysis & Emotional AI support</CardDescription>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-[9px] font-black uppercase h-7 px-4">
              Access Support Agent
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 border-r border-slate-800 space-y-3">
                <p className="text-[9px] font-black text-slate-500 uppercase">Team Sentiment Indicators</p>
                {[
                  { label: "Collaboration Velocity", val: "STABLE", color: "text-emerald-500" },
                  { label: "Pressure Index", val: "MODERATE", color: "text-blue-500" },
                  { label: "Engagement Level", val: "NOMINAL", color: "text-cyan-500" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-black/40 rounded border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-300">{stat.label}</span>
                    <span className={cn("text-[9px] font-black", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-950/50 flex flex-col justify-center items-center text-center space-y-2">
                <Sparkles className="h-8 w-8 text-blue-400/50 animate-pulse" />
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AI Behavioral Abstractor</p>
                <p className="text-[9px] text-slate-600 italic">"Detected 'Optimism Bias' in Project Director's last update. Correcting EAC projections for neutral steering."</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-900 border-2 border-amber-500/20">
        <CardHeader>
          <CardTitle className="text-sm font-black uppercase text-amber-500 flex items-center gap-2">
            <Zap className="h-4 w-4" /> Strategic Arbitration Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-black/40 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-emerald-500" />
                <span className="text-[9px] font-black uppercase text-emerald-500">Option A: Accelerated</span>
              </div>
              <p className="text-xs text-slate-300 mb-4">Increase resource load by 20% to mitigate Q4 delay. Confidence: 94%.</p>
              <Button size="sm" variant="outline" className="w-full text-[8px] h-7 border-slate-700">Simulate Path</Button>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-amber-500/40 shadow-lg relative">
              <div className="absolute -top-2 right-2 px-2 py-0.5 bg-amber-600 text-black text-[7px] font-black uppercase rounded">NeuroPilot Choice</div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-amber-500" />
                <span className="text-[9px] font-black uppercase text-amber-500">Option B: Optimized</span>
              </div>
              <p className="text-xs text-slate-300 mb-4">Re-allocate non-critical path internal IT to SAP sync. Confidence: 98.4%.</p>
              <Button size="sm" className="w-full bg-amber-600 text-[8px] h-7 border-none font-black uppercase">Execute Choice</Button>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-slate-800 opacity-50">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-4 w-4 text-blue-500" />
                <span className="text-[9px] font-black uppercase text-blue-500">Option C: Conservative</span>
              </div>
              <p className="text-xs text-slate-300 mb-4">Maintain current schedule with +4 day expected drift. Risk: Minimal.</p>
              <Button size="sm" variant="ghost" className="w-full text-[8px] h-7 text-slate-500">Review Data</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
