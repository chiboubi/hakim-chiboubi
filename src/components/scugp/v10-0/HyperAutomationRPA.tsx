"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, Play, Zap, Bot, RefreshCw, Layers, Plus, Settings, CheckCircle2, Cpu, Activity, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export const HyperAutomationRPA = () => {
  const [activeBot, setActiveBot] = useState<string | null>(null);

  const automations = [
    { id: "RPA_HSE", name: "HSE Report RPA Bot", trigger: "Daily 08:00", action: "Data_Fetch + AI_Synthesis + PDF_Gen", status: "Active" },
    { id: "MILE_SYNC", name: "Milestone Auto-Anchor", trigger: "Task_100%_Comp", action: "Blockchain_Signature + Notify", status: "Standby" },
    { id: "DRIFT_COR", name: "Autonomous Drift Corrector", trigger: "Risk_Score > 0.8", action: "Reschedule + Reallocate", status: "Armed" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Bots", val: "42", icon: Bot, color: "text-blue-400" },
          { label: "Automation ROI", val: "+24%", icon: Zap, color: "text-amber-400" },
          { label: "Zero-Touch Tasks", val: "1,240", icon: LayoutGrid, color: "text-emerald-400" },
          { label: "Process Health", val: "99.8%", icon: Activity, color: "text-cyan-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-blue-500/30 transition-all rounded-[1.5rem]">
            <CardHeader className="pb-2 px-6 pt-4">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3.5 w-3.5", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-4">
              <div className="text-xl font-black font-mono text-white tracking-widest">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-blue-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between px-8 py-6">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-blue-400 flex items-center gap-2">
                <Workflow className="h-4 w-4" /> Hyper-Automation RPA Console 10.0
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Autonomous Project Orchestration & Low-Code Workflow Builder</CardDescription>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-9 px-8 rounded-xl shadow-lg">
              <Plus className="h-4 w-4 mr-2" /> New Automation
            </Button>
          </CardHeader>
          <CardContent className="p-8 space-y-6 flex-1">
            <div className="space-y-4">
              {automations.map((bot) => (
                <div 
                  key={bot.id} 
                  className={cn(
                    "p-6 rounded-[2rem] border-2 transition-all group cursor-pointer",
                    activeBot === bot.id ? "bg-blue-500/10 border-blue-500 shadow-2xl" : "bg-black/40 border-slate-800 hover:border-blue-500/30"
                  )} 
                  onClick={() => setActiveBot(bot.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                        <Zap className={cn("h-6 w-6", activeBot === bot.id ? "text-blue-400" : "text-slate-500")} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase text-slate-200 tracking-widest">{bot.name}</h4>
                        <p className="text-[9px] text-slate-500 font-mono mt-1 uppercase">Trigger: {bot.trigger}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={cn(
                      "text-[8px] border-none px-3 h-5 uppercase font-black",
                      bot.status === 'Active' ? "bg-emerald-600/20 text-emerald-500" : "bg-slate-800 text-slate-500"
                    )}>{bot.status}</Badge>
                  </div>
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-800/50">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <Layers className="h-4 w-4" />
                      <span className="font-bold tracking-tighter uppercase">{bot.action}</span>
                    </div>
                    <div className="ml-auto flex gap-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600 hover:text-white rounded-full"><Settings className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600 hover:text-white rounded-full"><Play className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
             <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-blue-400 animate-spin-slow" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Self-Correction Loop: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-emerald-400" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">RPA Agent Uptime: 100%</span>
                </div>
             </div>
             <p className="text-[9px] font-mono text-slate-600 uppercase tracking-tighter">SCUGP_RPA_v10.4</p>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Activity className="h-4 w-4" /> Smart-Agent Reallocation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 px-6 pb-6">
              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-[2rem] relative overflow-hidden">
                <p className="text-[11px] text-slate-400 leading-relaxed italic relative z-10">
                  "Hyper-Automation engine detected a 14.2% resource overload in Engineering. Automatically generating 3 correction scenarios and re-assigning 12 back-office tasks to bot cluster Alpha."
                </p>
              </div>
              <Button size="sm" variant="outline" className="w-full h-10 border-amber-500/30 text-amber-500 text-[10px] font-black uppercase rounded-xl hover:bg-amber-500/10">
                View Load Optimization Map
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[2rem] overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Zero-Touch KPI
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-6 pb-6 space-y-6">
              <div className="flex flex-col items-center">
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Automated Execution Rate</p>
                <p className="text-4xl font-black font-mono text-emerald-400">84.2%</p>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '84.2%' }} />
              </div>
              <p className="text-[9px] text-slate-600 text-center uppercase font-bold tracking-widest">Target: 95% by 2027</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
