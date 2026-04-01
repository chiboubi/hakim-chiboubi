"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Brain, Sparkles, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight, Activity, Workflow, Cpu, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export const CognitiveACI = () => {
  const [activeAgent, setActiveAgent] = useState("MASTER_ACI");

  const agents = [
    { id: "MASTER_ACI", name: "Agent Central Intelligent", role: "Orchestrator", load: "14%", status: "LEAD" },
    { id: "PLAN_AGENT", name: "PlanAuto Agent", role: "Planning", load: "42%", status: "ACTIVE" },
    { id: "RISK_AGENT", name: "RiskPredict Agent", role: "Analysis", load: "28%", status: "MONITOR" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-purple-500/20 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5"><Brain className="h-32 w-32 text-purple-500" /></div>
          <CardHeader className="bg-purple-500/5 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
                  <Bot className="h-4 w-4" /> Cognitive ACI™ Control Layer
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Multi-Agent Task Distribution & Proactive Steering</CardDescription>
              </div>
              <Badge className="bg-purple-600 text-white border-none text-[8px] uppercase tracking-[0.2em] animate-pulse">ACI_CORE: ONLINE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <div 
                  key={agent.id} 
                  className={cn(
                    "p-4 rounded-3xl border transition-all cursor-pointer group flex flex-col items-center text-center gap-2",
                    activeAgent === agent.id ? "bg-purple-500/10 border-purple-500 shadow-lg" : "bg-black/40 border-slate-800 hover:border-purple-500/30"
                  )}
                  onClick={() => setActiveAgent(agent.id)}
                >
                  <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50">
                    <Cpu className={cn("h-6 w-6", activeAgent === agent.id ? "text-purple-400" : "text-slate-500")} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-200">{agent.name}</h4>
                    <p className="text-[8px] text-slate-500 font-mono mt-1 tracking-widest">{agent.role} | {agent.load}</p>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[7px] border-none px-2 h-4",
                    agent.status === 'LEAD' ? "bg-purple-600/20 text-purple-400" : "bg-slate-800 text-slate-500"
                  )}>{agent.status}</Badge>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-black/60 rounded-[2rem] border border-slate-800 relative overflow-hidden">
               <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_70%) pointer-events-none" />
               <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
                  <h4 className="text-xs font-black uppercase text-purple-400 tracking-widest">Master ACI Prescription</h4>
               </div>
               <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                 "Based on evolutionary memory of 142 projects, I have distributed the 'Cryo-Shield Validation' to PlanAuto Agent. I predict a 12% probability of schedule drift in Q4 if the technical hand-off is not anchored on the Solidity Ledger by Tuesday."
               </p>
               <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-[10px] font-black uppercase h-9 px-6 shadow-xl">Execute Recovery Plan</Button>
                  <Button size="sm" variant="outline" className="border-slate-700 text-[10px] font-black uppercase h-9 px-6">Simulate What-If</Button>
               </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Proactive Prediction
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Drift Estimation</p>
                <p className="text-3xl font-black font-mono text-white">+2 Days</p>
                <p className="text-[8px] text-amber-500 font-bold mt-1 uppercase tracking-[0.2em]">Confidence: 98.4%</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-bold uppercase text-slate-500">
                  <span>Knowledge Synthesis</span>
                  <span className="text-purple-400">SYNCED</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[94%]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <Workflow className="h-4 w-4" /> Adaptive Task Flow
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { task: "HSE Audit Auto-Gen", agent: "ACI_01", status: "DONE" },
                { task: "SAP Milestone Sync", agent: "PLAN_02", status: "ACTIVE" },
                { task: "Risk Matrix Update", agent: "RISK_04", status: "PENDING" }
              ].map((t, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800 group hover:border-purple-500/30 transition-all">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-200 tracking-tighter">{t.task}</p>
                    <p className="text-[8px] text-slate-600 font-mono mt-0.5">AGENT: {t.agent}</p>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[7px] border-none px-2 h-4",
                    t.status === 'DONE' ? "bg-emerald-600/20 text-emerald-500" : "bg-purple-600/20 text-purple-400"
                  )}>{t.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
