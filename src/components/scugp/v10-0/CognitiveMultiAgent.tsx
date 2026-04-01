"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Network, Cpu, Share2, RefreshCw, Zap, Bot, MessageSquare, History, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const CognitiveMultiAgent = () => {
  const [activeChain, setActiveChain] = useState("MASTER_REASONING");

  const agents = [
    { id: "STRAT_AGENT", name: "Strategic Planner", role: "Decision Reasoning", load: "12%", status: "LEAD" },
    { id: "REASON_AGENT", name: "Cognitive Analyst", role: "Long-term Memory", load: "34%", status: "ACTIVE" },
    { id: "AUTO_PM", name: "Autonomous PM", role: "Task Execution", load: "52%", status: "RUNNING" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-purple-500/30 text-white shadow-[0_0_40px_rgba(168,85,247,0.1)] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5"><Brain className="h-40 w-40 text-purple-500" /></div>
          <CardHeader className="bg-purple-500/10 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-purple-400 flex items-center gap-2">
                  <Bot className="h-4 w-4" /> Cognitive Multi-Agent Mesh 10.0
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Self-Evolving AGI-Lite with Explanatory Reasoning</CardDescription>
              </div>
              <Badge className="bg-purple-600 text-white border-none text-[8px] animate-pulse px-4">NEURAL_SYNC: INFINITY</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <div 
                  key={agent.id} 
                  className={cn(
                    "p-5 rounded-[2rem] border-2 transition-all cursor-pointer group flex flex-col items-center text-center gap-3 relative overflow-hidden",
                    activeChain === agent.id ? "bg-purple-500/10 border-purple-500 shadow-xl" : "bg-black/40 border-slate-800 hover:border-purple-500/40"
                  )}
                  onClick={() => setActiveChain(agent.id)}
                >
                  <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 relative z-10 group-hover:scale-110 transition-transform">
                    <Cpu className={cn("h-6 w-6", activeChain === agent.id ? "text-purple-400" : "text-slate-500")} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-200 tracking-tighter">{agent.name}</h4>
                    <p className="text-[8px] text-slate-500 font-mono mt-1 uppercase">{agent.role}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1 w-12 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: agent.load }} />
                    </div>
                    <span className="text-[8px] font-mono text-purple-400">{agent.load}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-8 bg-black/60 rounded-[3rem] border border-slate-800 relative overflow-hidden">
               <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%) pointer-events-none" />
               <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
                  <h4 className="text-sm font-black uppercase text-purple-400 tracking-[0.2em]">Explanatory Reasoning Log</h4>
               </div>
               <div className="space-y-4">
                  <p className="text-sm text-slate-200 leading-relaxed italic border-l-2 border-purple-500/50 pl-6 py-2">
                    "I am recommending a pivot to Scenario Omega. Reasoning: Cross-model analysis indicates a 94% chance of bottleneck in Sector 4 logistics due to historical pattern #ARC-2024. Long-term memory suggests that autonomous reallocation of IT resources now will yield a 12.4% ROI increase by Q4. Multi-agent consensus achieved in 0.4s."
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-[10px] font-black uppercase h-10 px-8 shadow-2xl">Approve Execution</Button>
                    <Button size="sm" variant="outline" className="border-slate-700 text-[10px] font-black uppercase h-10 px-8">Challenge Logic</Button>
                  </div>
               </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center">
             <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-blue-400 animate-spin-slow" />
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Self-Evolution Cycle: 142ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Agent Consensus: 100%</span>
                </div>
             </div>
             <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[8px]">MODEL: SINGULARITY_V10_PRO</Badge>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <History className="h-4 w-4" /> Cognitive Search & Library
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4 flex-1">
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <input 
                  placeholder="Ask the Global Knowledge Mesh..." 
                  className="w-full bg-black/50 border border-slate-800 rounded-xl h-10 pl-10 text-[11px] focus:outline-none focus:border-amber-500/50 text-white"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Recent Contextual Queries</p>
                {[
                  { q: "ISO 14083 Transport GHG", res: "Citing GRI 305-3..." },
                  { q: "Arctic Cryo-Shield Patterns", res: "Matching 142 cases..." },
                  { q: "Zinia Agile Velocity Target", res: "Analyzing drift..." }
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-black/40 rounded-xl border border-slate-800 group hover:border-amber-500/30 transition-all cursor-pointer">
                    <p className="text-[10px] font-bold text-slate-200">{item.q}</p>
                    <p className="text-[8px] text-amber-500/70 font-mono mt-1 uppercase italic">{item.res}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t border-slate-800">
              <Button size="sm" variant="ghost" className="w-full text-[9px] font-black uppercase text-slate-500 hover:text-white">
                Access Universal MOOCs
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
