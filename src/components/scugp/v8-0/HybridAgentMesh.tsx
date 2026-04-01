"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Network, Sparkles, UserCheck, Zap, Activity, Brain, Share2, ShieldCheck, Microscope, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

export const HybridAgentMesh = () => {
  const [autonomyLevel, setAutonomy] = useState(true);

  const agents = [
    { role: "Strategic Orchestrator", status: "LEAD", type: "GPT-4.5 Hybrid", load: "14%" },
    { role: "Agile Facilitator", status: "ACTIVE", type: "Claude 3.5 Specialized", load: "42%" },
    { role: "Prescriptive Analyst", status: "MONITOR", type: "LLAMA-3 Fine-tuned", load: "28%" },
    { role: "Risk Guardian", status: "ARMED", type: "SCUGP Custom Core", load: "05%" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-purple-500/20 text-white shadow-2xl relative overflow-hidden group">
          <CardHeader className="bg-purple-500/5 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
                  <Network className="h-4 w-4" /> Hybrid GenAI & Agent Mesh
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Multi-Model Collaboration (GPT-4 / Claude / Llama / Custom)</CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">Supervised Autonomy</span>
                  <Switch checked={autonomyLevel} onCheckedChange={setAutonomy} className="scale-75 data-[state=checked]:bg-purple-600" />
                </div>
                <Badge className="bg-purple-600 text-white border-none text-[8px] animate-pulse uppercase">MESH_SYNULARITY: ON</Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {agents.map((agent, i) => (
                <div key={i} className="p-4 bg-black/40 rounded-3xl border border-slate-800 flex flex-col items-center text-center gap-2 group hover:border-purple-500/40 transition-all cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-10 w-10 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 relative z-10">
                    <Bot className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[9px] font-black text-white uppercase leading-tight">{agent.role}</p>
                    <p className="text-[7px] text-slate-500 font-mono mt-1">{agent.type}</p>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 uppercase z-10">{agent.status}</Badge>
                </div>
              ))}
            </div>

            <div className="p-6 bg-black/60 rounded-[2rem] border border-slate-800 relative overflow-hidden">
               <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_70%)" />
               <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                    <h4 className="text-xs font-black uppercase text-purple-400 tracking-widest">Singularity Prescription v8.5</h4>
                  </div>
                  <span className="text-[8px] font-mono text-slate-600 uppercase">Decision Log: #SCG-8842</span>
               </div>
               <p className="text-xs text-slate-300 leading-relaxed italic mb-6 relative z-10">
                 "Orchestrator Agent synchronized with ACI Core. Agile Coach Agent recommends immediate reallocation of Q4 resources based on Llama-3's predictive drift of 4 days. 
                 Decision finalized through A2A negotiation. Human supervision required for high-risk arbitration only."
               </p>
               <div className="flex gap-2 relative z-10">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-[9px] font-black uppercase h-9 px-6">Approve Agent Decision</Button>
                  <Button size="sm" variant="outline" className="border-slate-700 text-[9px] font-black uppercase h-9 px-6">Edit Logic Branch</Button>
               </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-950 p-4 border-t border-slate-800 justify-between items-center">
             <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Share2 className="h-3 w-3 text-blue-400" />
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">A2A Handshake: VALID</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-3 w-3 text-emerald-400 animate-spin-slow" />
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Models Refreshed: 4m ago</span>
                </div>
             </div>
             <div className="flex gap-2">
                <Badge variant="outline" className="text-[7px] border-slate-800 text-slate-600">TOKEN_USAGE: NOMINAL</Badge>
             </div>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Brain className="h-4 w-4" /> Adaptive Personality AI
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800 text-center relative overflow-hidden group">
                 <p className="text-[9px] text-slate-500 uppercase font-black mb-2">Management Style Alignment</p>
                 <p className="text-xl font-black font-mono text-white tracking-widest">EMPATHIC_AGILE</p>
                 <p className="text-[8px] text-amber-500 font-bold mt-1 uppercase">Adjusted to Dr. Chibubi Profile</p>
              </div>
              <div className="space-y-3">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Long-Term Memory Nodes</p>
                {[
                  { label: "Past Crisis Memory", val: "SYNCED", icon: History },
                  { label: "Team Preference Map", val: "ACTIVE", icon: UserCheck },
                  { label: "Conflict Resolution Log", val: "92.4%", icon: ShieldCheck }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2">
                      <stat.icon className="h-3 w-3 text-slate-500" />
                      <span className="text-[9px] font-bold text-slate-400 uppercase">{stat.label}</span>
                    </div>
                    <span className="text-[9px] font-black text-amber-400 font-mono">{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Microscope className="h-4 w-4" /> Weak Signal Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-3 w-3 text-blue-400 animate-pulse" />
                  <span className="text-[9px] font-black uppercase text-blue-400">Semantic Signal Detected</span>
                </div>
                <p className="text-[10px] text-slate-400 italic leading-relaxed">
                  "Detected minor stress patterns in HSE team logs. Correlation analysis suggests risk of report delay in Phase 3. Corrective coaching suggested."
                </p>
              </div>
              <Button size="sm" variant="outline" className="w-full h-8 text-[8px] font-black uppercase border-slate-700">Open Signal Map</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { History } from "lucide-react";
