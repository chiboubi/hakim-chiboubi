"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, AlertTriangle, CheckCircle2, ChevronRight, BarChart3, TrendingUp, History } from "lucide-react";
import { cn } from "@/lib/utils";

const diagnostics = [
  { id: 1, title: "Project Health Diagnostic", status: "NOMINAL", score: 94, desc: "All core indicators within standard deviation." },
  { id: 2, title: "Delay Prediction", status: "WARNING", score: 12, desc: "High probability of supply chain drift (+4 days) in Q4." },
  { id: 3, title: "HSE Risk Simulation", status: "SECURE", score: 98, desc: "Predictive patterns show no safety deviations for current phase." }
];

export const AugmentedIntelligence = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diagnostics.map((diag) => (
          <Card key={diag.id} className={cn(
            "bg-slate-900 border-slate-800 transition-all cursor-pointer hover:border-amber-500/40",
            active === diag.id && "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
          )} onClick={() => setActive(diag.id)}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className={cn(
                  "text-[8px] font-black",
                  diag.status === 'NOMINAL' ? "text-emerald-500 border-emerald-500/20" : 
                  diag.status === 'WARNING' ? "text-amber-500 border-amber-500/20" : 
                  "text-blue-500 border-blue-500/20"
                )}>
                  {diag.status}
                </Badge>
                <div className="text-xl font-black font-mono">{diag.score}%</div>
              </div>
              <CardTitle className="text-sm font-bold uppercase mt-2">{diag.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[10px] text-slate-500 leading-relaxed italic">"{diag.desc}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl">
          <CardHeader className="bg-amber-500/5 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-tighter text-amber-500 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> Predictive Analytics & AI Forecasting
                </CardTitle>
                <CardDescription className="text-[10px]">Probability distributions for Costs, Time & Risks</CardDescription>
              </div>
              <Badge className="bg-amber-600 text-black font-black text-[8px]">IA GENERATIVE ACTIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-64 flex flex-col items-center justify-center bg-black/40 rounded-xl border border-slate-800 border-dashed relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(245,158,11,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />
               <Brain className="h-12 w-12 text-amber-500/50 mb-4 animate-pulse" />
               <p className="text-[10px] font-mono text-amber-500/70 uppercase tracking-[0.2em]">Neural Engine Processing Trends...</p>
               <div className="mt-6 flex gap-4">
                  <div className="text-center">
                    <p className="text-[8px] text-slate-500 uppercase">Cost Stability</p>
                    <p className="text-sm font-black text-emerald-400">98.2%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] text-slate-500 uppercase">Schedule Drift</p>
                    <p className="text-sm font-black text-amber-400">+1.4%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] text-slate-500 uppercase">Resource Load</p>
                    <p className="text-sm font-black text-blue-400">82.0%</p>
                  </div>
               </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Zap className="h-4 w-4" /> AI Corrective Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-black/40 rounded border-l-2 border-l-amber-500">
                <p className="text-[10px] text-slate-300 italic mb-2">"Critical path delay detected in EPC contract. Suggesting immediate reallocation of Internal IT resources to compensate."</p>
                <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-[9px] font-black uppercase h-7">Apply Action</Button>
              </div>
              <div className="p-3 bg-black/40 rounded border-l-2 border-l-emerald-500">
                <p className="text-[10px] text-slate-300 italic mb-2">"HSE Audit frequency should be increased by 10% for sub-contractor VANCE to maintain 98% compliance score."</p>
                <Button size="sm" variant="outline" className="w-full border-slate-700 text-[9px] font-black uppercase h-7">Log Adjustment</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <History className="h-4 w-4" /> Daily Briefing Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-3 bg-slate-950/50 rounded border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                  <span>LAST BRIEFING</span>
                  <span>08:42 AM</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">Summary of last 24h: 12 tasks completed, 1 risk flagged, 100% data sync integrity.</p>
                <Button size="sm" className="w-full bg-slate-800 hover:bg-slate-700 text-[9px] font-black uppercase h-7">Generate Today's Briefing</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
