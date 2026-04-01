"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Circle, ArrowRight, Layers, Target, Cpu, ShieldCheck } from "lucide-react";

const roadmap = [
  { quarter: "T3 2025", title: "Migration V4.5", desc: "Finalize core architecture, add Metaproject View & Decision engine.", status: "IN_PROGRESS", icon: Layers },
  { quarter: "T4 2025", title: "ESG+ CSRD Sync", desc: "Standardized GRI/CSRD automated reporting & 11D multi-filters.", status: "PLANNED", icon: ShieldCheck },
  { quarter: "T1 2026", title: "Integrated AI Agent", desc: "GPT-4.5 based co-pilot, autonomous arbitrator & plan auto-filling.", status: "PLANNED", icon: Cpu },
  { quarter: "T2 2026", title: "Distributed Interop", desc: "Zapier/Notion full bi-directional sync & decentralized validation.", status: "PLANNED", icon: Target }
];

export const RoadmapVisualizer = () => (
  <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl">
    <CardHeader className="bg-slate-950/50 border-b border-slate-800">
      <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <Clock className="h-4 w-4" /> SCUGP 4.5 Deployment Roadmap
      </CardTitle>
    </CardHeader>
    <CardContent className="p-8">
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {roadmap.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 group">
              <div className={cn(
                "h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                step.status === 'IN_PROGRESS' ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" : "bg-slate-950 border-slate-800 group-hover:border-slate-600"
              )}>
                <step.icon className={cn("h-5 w-5", step.status === 'IN_PROGRESS' ? "text-blue-400" : "text-slate-600")} />
              </div>
              <div className="space-y-1">
                <Badge variant={step.status === 'IN_PROGRESS' ? 'default' : 'outline'} className="text-[8px] h-4 mb-1">
                  {step.quarter}
                </Badge>
                <h4 className="text-xs font-black uppercase text-slate-200">{step.title}</h4>
                <p className="text-[9px] text-slate-500 leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>
              </div>
              {step.status === 'IN_PROGRESS' && (
                <span className="text-[7px] font-mono text-blue-400 animate-pulse uppercase font-black">Current Milestone</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

import { cn } from "@/lib/utils";
