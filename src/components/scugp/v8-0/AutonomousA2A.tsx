"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Zap, Cpu, Share2, RefreshCw, Layers, Plus, Settings, Play, Bot, Workflow, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const AutonomousA2A = () => {
  const [isMeshActive, setIsMeshActive] = useState(true);

  const meshLinks = [
    { from: "PLAN_AGENT", to: "RISK_AGENT", msg: "Dependency Resolution", status: "DONE" },
    { from: "HSE_AGENT", to: "ACI_CORE", msg: "Threshold Warning: H2S", status: "URGENT" },
    { from: "DMS_AGENT", to: "LEGAL_MESH", msg: "Contract Anchoring", status: "WAITING" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden h-full flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-emerald-500/5 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                <Network className="h-4 w-4" /> A2A (Agent-to-Agent) Mesh Layer
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Autonomous Multi-Agent Communication & Synchronization (No Human Intervention)</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-emerald-600 text-white border-none text-[8px] uppercase tracking-widest animate-pulse">Mesh: OPERATIONAL</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col items-center justify-center relative bg-black/40 h-[400px]">
             {/* Visual Mesh Representation */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px:30px]" />
             
             <div className="relative z-10 w-full px-12 space-y-6">
                {meshLinks.map((link, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/50 transition-all">
                        <Bot className="h-5 w-5 text-slate-500 group-hover:text-emerald-400" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-slate-400">{link.from}</span>
                    </div>
                    <div className="flex-1 h-px bg-slate-800 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 rounded-full border border-slate-800 text-[8px] font-mono text-emerald-500 uppercase tracking-widest animate-pulse">
                        {link.msg}
                      </div>
                      <div className="absolute top-0 left-0 h-full bg-emerald-500/40 w-0 group-hover:w-full transition-all duration-1000" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase text-slate-400">{link.to}</span>
                      <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/50 transition-all">
                        <Cpu className="h-5 w-5 text-slate-500 group-hover:text-emerald-400" />
                      </div>
                    </div>
                  </div>
                ))}
             </div>

             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 bg-slate-900/80 rounded-2xl border border-emerald-500/30 backdrop-blur-md">
                <p className="text-[9px] font-mono text-emerald-400 uppercase font-black text-center">Neural Agent Handshake Active</p>
                <div className="flex items-center justify-center gap-4 mt-1">
                  <span className="text-[8px] font-bold text-slate-600 uppercase">Protocol: AutoGen-v2</span>
                  <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-tighter flex items-center gap-1">
                    <CheckCircle2 className="h-2.5 w-2.5" /> Zero Human Interv.
                  </span>
                </div>
             </div>
          </CardContent>
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
             <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-3.5 w-3.5 text-blue-400 animate-spin-slow" />
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Mesh Sync: 0.04ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">A2A Instances: 42</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-8 border-slate-700 text-[9px] font-black uppercase">Orchestration Settings</Button>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Zap className="h-4 w-4" /> Autonomous Execution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                <p className="text-[10px] text-slate-400 italic leading-relaxed">
                  "ACI distributed the resource reallocation task. Mesh Agents resolved the dependency conflicts in 0.8s. No manager approval required based on 'Auto-Heal' policy."
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Mesh Health Vectors</p>
                {[
                  { label: "Communication Uptime", val: "100%", color: "text-emerald-500" },
                  { label: "Conflict Resolution", val: "99.2%", color: "text-blue-500" },
                  { label: "Auto-Scale Capacity", val: "NOMINAL", color: "text-cyan-500" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 bg-black/40 rounded-xl border border-slate-800">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{stat.label}</span>
                    <span className={cn("text-[10px] font-black", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-emerald-950/10 border border-emerald-500/30">
            <CardHeader>
              <CardTitle className="text-[10px] font-black uppercase text-emerald-400 flex items-center gap-2">
                <Workflow className="h-4 w-4" /> A2A Workflow Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                "Autonomous Agents are currently learning from the 'Offshore-Drill-V4' flow to optimize tomorrow's logistics handshake."
              </p>
              <Button size="sm" className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-9">
                Launch Mesh Debugger
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
