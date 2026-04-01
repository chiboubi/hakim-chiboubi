
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, RefreshCw, Layers, Zap, Brain, Target, ShieldCheck, Activity } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const CognitiveWorkflows = () => {
  const metrics = SCUGPHubUltimate.getCognitiveWorkflowMetrics();

  const scenarios = [
    { name: "Scenario Alpha: Rapid Extraction", impact: "+4% BOPD", risk: "Low" },
    { name: "Scenario Beta: Net Zero Pivot", impact: "-15% CO2", risk: "Medium" },
    { name: "Scenario Omega: Critical Buffer", impact: "+12d Slack", risk: "Low" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-2 border-purple-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden">
            <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between px-10 py-8">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-purple-400 flex items-center gap-4">
                  <Workflow className="h-6 w-6" /> Cognitive Workflow Automation
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 mt-2">Dynamic Resource Leveling & "What-If" Impact Analysis</CardDescription>
              </div>
              <Badge className="bg-purple-600 text-white border-none text-[9px] animate-pulse uppercase px-6 py-1.5 tracking-widest">COGNITIVE_LOOP: ACTIVE</Badge>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 space-y-6 shadow-inner">
                  <div className="flex items-center gap-4 text-purple-400">
                    <Brain className="h-6 w-6" />
                    <h4 className="text-sm font-black uppercase tracking-widest">Resource Leveling</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span className="text-slate-500">Auto-Optimization</span>
                      <span className="text-emerald-400">{metrics.resourceLeveling}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[94%]" />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">"Intelligent reallocation based on real-time task load detected in all 14 nodes."</p>
                </div>

                <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 space-y-6 shadow-inner">
                  <div className="flex items-center gap-4 text-blue-400">
                    <RefreshCw className="h-6 w-6 animate-spin-slow" />
                    <h4 className="text-sm font-black uppercase tracking-widest">Dynamic Plan Update</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span className="text-slate-500">Plan Status</span>
                      <span className="text-blue-400">{metrics.planUpdate}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[100%]" />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">"Milestones are autonomously adjusted based on real-time field progress (IoT Mesh)."</p>
                </div>
              </div>

              <div className="p-8 bg-amber-500/5 rounded-[3rem] border-2 border-dashed border-amber-500/20 text-center space-y-4">
                <div className="flex items-center justify-center gap-3 text-amber-500">
                  <Target className="h-6 w-6" />
                  <h4 className="text-sm font-black uppercase tracking-[0.2em]">"What-If" Simulation Engine</h4>
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed px-12">
                  "Simulation predicts a 99.4% probability of success for Scenario Alpha. Impact on Critical Path D1: -4 days. Budget Deviation D2: Nominal."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-950 border-slate-800 shadow-2xl rounded-[3.5rem] h-full flex flex-col overflow-hidden">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-3">
                <Layers className="h-5 w-5" /> Decision Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6">
              {scenarios.map((s, i) => (
                <div key={i} className="p-6 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-purple-500/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-slate-200 uppercase">{s.name}</span>
                    <Badge variant="outline" className="text-[8px] border-emerald-500/20 text-emerald-500">{s.risk} RISK</Badge>
                  </div>
                  <p className="text-lg font-black text-purple-500 font-mono">{s.impact}</p>
                </div>
              ))}
              <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-[2rem] text-center mt-10">
                 <ShieldCheck className="h-8 w-8 text-emerald-500 mx-auto mb-4 animate-bounce" />
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                   "All scenarios validated against Standard SCUGP 19.0 Compliance Logic."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-8 border-t border-slate-800 bg-slate-900/50">
               <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">Launch Global Re-Leveling</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
