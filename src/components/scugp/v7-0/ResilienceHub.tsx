
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Zap, Layers, RefreshCcw, Target, AlertTriangle, CheckCircle2, ChevronRight, Activity, Workflow, Bot, UserPlus, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ResilienceHub Component
 * Pillar 4: Module d’Autopilotage et Auto-Réparation.
 * Handles autonomous correction, role re-assignment, and failover logic.
 */
export const ResilienceHub = () => {
  const [vulnerabilityScore] = useState(12);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  const scenarios = [
    { id: "S1", name: "Procurement Jam", risk: "Medium", impact: "Delay +4d", recovery: "Autonomous Redirection" },
    { id: "S2", name: "Resource Overload", risk: "High", impact: "Cognitive Fatigue", recovery: "Auto-Reassignment" },
    { id: "S3", name: "HSE Threshold Breach", risk: "Critical", impact: "Site Halt", recovery: "Auto-Process Correction" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-950 border-2 border-red-500/20 text-white overflow-hidden relative">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-red-400 flex items-center gap-2">
              <Target className="h-4 w-4" /> Project Vulnerability Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black font-mono text-white">{vulnerabilityScore}/100</div>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Status: High Integrity Failover Ready</p>
            <div className="h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-emerald-500 w-[88%]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
              <Bot className="h-4 w-4" /> Autopilot Engine Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white uppercase">Operational</div>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Self-Healing Protocols Armed</p>
            <div className="flex gap-1 mt-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-1 flex-1 bg-blue-500 rounded-full animate-pulse" />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-amber-400 flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" /> Auto-Repair MTTR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">0.4s</div>
            <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Mean Time To Autonomous Recovery</p>
            <Badge variant="outline" className="mt-3 border-emerald-500/30 text-emerald-400 text-[8px]">PROACTIVE_STEERING</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl">
          <CardHeader className="bg-red-500/5 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-red-400 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> Autopilot & Auto-Repair Command (Pillar 4)
                </CardTitle>
                <CardDescription className="text-[10px]">What-if Simulations & Autonomous Deviation Correction</CardDescription>
              </div>
              <Badge className="bg-red-600 text-white border-none text-[8px] uppercase tracking-widest animate-pulse">Autopilot: ON</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scenarios.map((s) => (
                <div 
                  key={s.id} 
                  className={cn(
                    "p-4 rounded-xl border transition-all cursor-pointer group",
                    activeScenario === s.id ? "bg-red-500/10 border-red-500 shadow-lg" : "bg-black/40 border-slate-800 hover:border-red-500/30"
                  )}
                  onClick={() => setActiveScenario(s.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className={cn(
                      "text-[7px] font-black border-none",
                      s.risk === 'Critical' ? "text-red-500" : "text-amber-500"
                    )}>{s.risk} RISK</Badge>
                    <Zap className={cn("h-3 w-3", activeScenario === s.id ? "text-red-400" : "text-slate-600")} />
                  </div>
                  <h4 className="text-[10px] font-black uppercase text-slate-200">{s.name}</h4>
                  <p className="text-[8px] text-slate-500 font-mono mt-2">{s.impact}</p>
                </div>
              ))}
            </div>

            {activeScenario && (
              <div className="mt-8 p-6 bg-black/60 rounded-2xl border-2 border-red-500/20 animate-in fade-in zoom-in duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Bot className="h-24 w-24 text-red-500" /></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <Activity className="h-5 w-5 text-red-500 animate-pulse" />
                  <h4 className="text-xs font-black uppercase text-red-400">Autonomous Healing Sequence Active</h4>
                </div>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-4">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "Autonomous logic for {scenarios.find(s => s.id === activeScenario)?.name} triggered. Action: {scenarios.find(s => s.id === activeScenario)?.recovery}. Re-assigning task weight to secondary node Cluster-B."
                    </p>
                    <div className="flex items-center gap-2 text-[9px] text-emerald-500 font-bold">
                      <CheckCircle2 className="h-3 w-3" /> HEALING_SUCCESS_PROBABILITY: 99.4%
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Escalation Grid</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[8px] font-mono">
                        <span className="text-slate-400">Level 1: Auto-Repair</span>
                        <span className="text-emerald-400">SUCCESS</span>
                      </div>
                      <div className="flex justify-between text-[8px] font-mono">
                        <span className="text-slate-400">Level 2: Team Notification</span>
                        <span className="text-blue-400">STANDBY</span>
                      </div>
                      <div className="flex justify-between text-[8px] font-mono">
                        <span className="text-slate-400">Level 3: Global Halt</span>
                        <span className="text-slate-600">INACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="p-4 border-t border-slate-800 flex gap-2">
            <Button size="sm" variant="outline" className="flex-1 border-slate-700 text-[10px] font-black uppercase h-10">
               <Workflow className="h-4 w-4 mr-2" /> Modify Autopilot Rules
            </Button>
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-[10px] font-black uppercase tracking-[0.2em] h-10">
               <ShieldCheck className="h-4 w-4 mr-2" /> Run Full Stress Test
            </Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <UserPlus className="h-4 w-4" /> Auto-Assignment Log
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {[
                { task: "HSE Audit Phase 2", to: "Bot_Cluster_Alpha", status: "EXECUTED" },
                { task: "Procurement Re-route", to: "Smart_Agent_Zinia", status: "COMPLETED" },
                { task: "Shift Re-allocation", to: "Admin_Lead", status: "PENDING" }
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 group hover:border-blue-500/30 transition-all cursor-pointer">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-300">{log.task}</p>
                    <p className="text-[8px] text-slate-600 font-mono">ASSIGNED TO: {log.to}</p>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 uppercase">{log.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-red-950/10 border border-red-500/30">
            <CardHeader>
              <CardTitle className="text-xs font-black uppercase text-red-400">Autonomous Correction Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[10px] text-slate-400 leading-relaxed italic">
                "System is authorized to auto-reassign tasks if any node cognitive load exceeds 0.85 for more than 4 hours. Current authorization level: FULL."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
