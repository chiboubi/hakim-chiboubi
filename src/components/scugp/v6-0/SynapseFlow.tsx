"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, Play, Zap, Brain, Link2, RefreshCw, Layers, Plus, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export const SynapseFlow = () => {
  const [activeFlow, setActiveFlow] = useState<string | null>(null);

  const flows = [
    { id: "HSE_AUTO", name: "HSE Compliance Loop", trigger: "IoT Threshold > 85%", action: "Notify_Lead + Auto_Doc", status: "Active" },
    { id: "SAP_SYNC", name: "Jira-SAP Milestone Sync", trigger: "Jira_Ticket_Closed", action: "Update_EAC_Projections", status: "Standby" },
    { id: "CLAIM_GEN", name: "Contractual Deviation AI", trigger: "Delay > 10%", action: "Generate_Claim_Draft", status: "Armed" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
                <Workflow className="h-4 w-4" /> SynapseFlow™ Hyperautomation
              </CardTitle>
              <CardDescription className="text-[10px]">No-Code AI Orchestration & External API Mesh</CardDescription>
            </div>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-[9px] font-black uppercase h-7 px-4">
              <Plus className="h-3 w-3 mr-1" /> New Synapse
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {flows.map((flow) => (
                <div key={flow.id} className={cn(
                  "p-4 rounded-xl border transition-all group",
                  activeFlow === flow.id ? "bg-purple-500/10 border-purple-500" : "bg-black/40 border-slate-800 hover:border-purple-500/30"
                )} onClick={() => setActiveFlow(flow.id)}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50">
                        <Zap className={cn("h-4 w-4", activeFlow === flow.id ? "text-purple-400" : "text-slate-500")} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase text-slate-200">{flow.name}</h4>
                        <p className="text-[8px] text-slate-500 font-mono mt-0.5">Trigger: {flow.trigger}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={cn(
                      "text-[7px] border-none px-2 h-4",
                      flow.status === 'Active' ? "bg-emerald-600/20 text-emerald-500" : "bg-slate-800 text-slate-500"
                    )}>{flow.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-800/50">
                    <div className="flex items-center gap-2 text-[9px] text-slate-400">
                      <Layers className="h-3 w-3" />
                      <span>{flow.action}</span>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-600 hover:text-white"><Settings className="h-3 w-3" /></Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-600 hover:text-white"><Play className="h-3 w-3" /></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Brain className="h-4 w-4" /> Adaptive Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                <p className="text-[10px] text-slate-400 italic leading-relaxed">
                  "Based on current team workload, SynapseFlow suggests delaying the 'Non-Critical P6 Review' by 24h to prioritize HSE Audit automation."
                </p>
              </div>
              <Button size="sm" variant="outline" className="w-full border-amber-500/30 text-amber-500 text-[9px] font-black uppercase h-8">
                Optimize Workflows
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Link2 className="h-4 w-4" /> Interop Mesh Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Zapier Hub", latency: "Instant", status: "CONNECTED" },
                { name: "Make.com Mesh", latency: "0.2s", status: "SYNCED" },
                { name: "n8n Self-Hosted", latency: "Instant", status: "ACTIVE" }
              ].map((conn, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/40 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">{conn.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono text-slate-600">{conn.latency}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
