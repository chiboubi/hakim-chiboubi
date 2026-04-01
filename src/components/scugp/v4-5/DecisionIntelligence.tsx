"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, AlertTriangle, CheckCircle2, ChevronRight, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const recommendations = [
  { id: 1, title: "Schedule Optimization", desc: "Compress critical path Alpha by 4 days via resource reallocation.", risk: "Low", impact: "+12% EAC", type: "PLANNING" },
  { id: 2, title: "Risk Mitigation", desc: "High probability of supply chain bottleneck detected in Q4.", risk: "Critical", impact: "Delay Avoidance", type: "RISK" },
  { id: 3, title: "Arbitration: ESG vs Cost", desc: "Switching to GNL Logistics reduces Scope 3 by 15% with 2% CAPEX increase.", risk: "Medium", impact: "ISO 14083 OK", type: "ARBITRATION" }
];

export const DecisionIntelligence = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Card className="bg-slate-900 border-2 border-amber-500/20 text-white shadow-2xl">
      <CardHeader className="bg-amber-500/5 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-black uppercase tracking-tighter text-amber-500 flex items-center gap-2">
              <Brain className="h-5 w-5" /> Decision Intelligence Engine
            </CardTitle>
            <CardDescription className="text-[10px] text-slate-500 font-bold uppercase">AI-Driven Project Recommendations & Auto-Arbitration</CardDescription>
          </div>
          <Badge className="bg-amber-600 text-black font-black text-[9px]">TRL 9+</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec) => (
            <div 
              key={rec.id} 
              className={cn(
                "p-4 rounded-xl border transition-all cursor-pointer group",
                active === rec.id ? "bg-amber-500/10 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "bg-black/40 border-slate-800 hover:border-amber-500/40"
              )}
              onClick={() => setActive(rec.id)}
            >
              <div className="flex justify-between items-start mb-3">
                <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 uppercase">{rec.type}</Badge>
                <div className={cn(
                  "h-1.5 w-1.5 rounded-full animate-pulse",
                  rec.risk === 'Critical' ? "bg-red-500" : rec.risk === 'Medium' ? "bg-amber-500" : "bg-emerald-500"
                )} />
              </div>
              <h4 className="text-xs font-black uppercase text-slate-200 mb-1 leading-tight">{rec.title}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed mb-3 line-clamp-2">{rec.desc}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-800/50">
                <span className="text-[9px] font-mono text-emerald-400">{rec.impact}</span>
                <ChevronRight className="h-3 w-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {active && (
          <div className="mt-6 p-4 bg-black/60 rounded-xl border border-amber-500/30 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="text-[10px] font-black uppercase text-amber-500">Auto-Arbitrage Simulation</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed italic">
              "System recommends immediate execution of {recommendations.find(r => r.id === active)?.title}. 
              Estimated project resilience (RGI) improvement: +8.4%."
            </p>
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-[9px] font-black uppercase h-8">Execute Recommendation</Button>
              <Button size="sm" variant="outline" className="border-slate-700 text-[9px] font-black uppercase h-8">Ignore Alert</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
