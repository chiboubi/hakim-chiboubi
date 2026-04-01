"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Compass, TrendingUp, AlertTriangle, Zap, Activity, Layers, PlayCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const MetaPilot = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [scenario, setScenario] = useState<string | null>(null);

  const scenarios = [
    { id: "S1", name: "Resource Redistribution", impact: "+12% EAC", risk: "Low", desc: "Optimize IT load across projects P1 and P2." },
    { id: "S2", name: "Arctic Weather Delay", impact: "-4 Days", risk: "Critical", desc: "Simulate impact of 72h downtime on FPSO delivery." },
    { id: "S3", name: "ESG Scope 3 Pivot", impact: "-15% Carbon", risk: "Medium", desc: "Shift logistics to 100% GNL powered vessels." }
  ];

  const handleSimulate = (s: string) => {
    setIsSimulating(true);
    setScenario(s);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scenarios.map((s) => (
          <Card key={s.id} className={cn(
            "bg-slate-900 border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer",
            scenario === s.id && "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          )} onClick={() => handleSimulate(s.id)}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className={cn(
                  "text-[8px] font-black uppercase",
                  s.risk === 'Critical' ? "text-red-500 border-red-500/20" : "text-emerald-500 border-emerald-500/20"
                )}>
                  Risk: {s.risk}
                </Badge>
                <span className="text-[10px] font-mono text-emerald-400">{s.impact}</span>
              </div>
              <CardTitle className="text-sm font-black uppercase mt-2">{s.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[10px] text-slate-500 italic leading-relaxed">"{s.desc}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden">
        <CardHeader className="bg-emerald-500/5 border-b border-slate-800">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                <Compass className="h-4 w-4" /> MetaPilot™ Strategic Simulator
              </CardTitle>
              <CardDescription className="text-[9px]">High-Fidelity AI Steering & Forecasting Engine</CardDescription>
            </div>
            <Badge className="bg-emerald-600 text-black font-black text-[8px]">VISION 2027 ACTIVE</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-64 bg-black/60 rounded-2xl border border-slate-800 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
                
                {isSimulating ? (
                  <div className="flex flex-col items-center gap-3 z-10">
                    <Loader2 className="h-10 w-10 text-emerald-500 animate-spin" />
                    <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Processing Scenario Probabilities...</p>
                  </div>
                ) : (
                  <div className="relative z-10 w-full px-12">
                    <div className="flex justify-between items-end mb-4">
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Resilience Index</p>
                        <p className="text-3xl font-black font-mono text-white">0.942</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Predictive Confidence</p>
                        <p className="text-xl font-black font-mono text-emerald-400">98.4%</p>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-cyan-600 w-[94%]" />
                    </div>
                    <div className="flex justify-between mt-2 text-[8px] font-mono text-slate-600 uppercase">
                      <span>Historical Average</span>
                      <span>Target: 0.950</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-[10px] font-black uppercase text-slate-300">Alternate Path Alpha</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed italic">"Shift Q4 fabrication to Angola Shipyard. Reduces OPEX by 4.2% but increases HSE risk profile by 0.05%."</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-blue-500" />
                    <span className="text-[10px] font-black uppercase text-slate-300">Alternate Path Beta</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed italic">"Implement Digital Twin D3 Maintenance cycles immediately. Neutralizes 14 day drift prediction."</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                <h4 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-3">Decision Matrix Summary</h4>
                <div className="space-y-4">
                  {[
                    { label: "Cost Efficiency", val: 98, color: "bg-emerald-500" },
                    { label: "Schedule Health", val: 84, color: "bg-blue-500" },
                    { label: "HSE Compliance", val: 100, color: "bg-cyan-500" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-bold uppercase text-slate-400">
                        <span>{stat.label}</span>
                        <span>{stat.val}%</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className={cn("h-full", stat.color)} style={{ width: `${stat.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] text-slate-500 font-bold uppercase text-center">Executive Actions</p>
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-9">
                  Commit to Scenario {scenario || "S1"}
                </Button>
                <Button size="sm" variant="outline" className="w-full border-slate-700 text-[10px] font-black uppercase h-9">
                  Export Simulation (.pdf)
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
