"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Bot, Cpu, Zap, RefreshCw, Share2, CheckCircle2, Workflow, Layers, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export const CooperativeMesh = () => {
  const agents = [
    { role: "Financial Agent", status: "NEGOTIATING", target: "Logistics", gain: "+4.2%" },
    { role: "Technical Agent", status: "SYNCED", target: "HSE", gain: "Safety Optimized" },
    { role: "Strategy Agent", status: "RECONFIGURING", target: "Planning", gain: "+12.4% ROI" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden flex flex-col">
          <CardHeader className="bg-emerald-500/10 border-b border-slate-800 p-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-3">
                  <Network className="h-6 w-6 animate-pulse" /> Cooperative A2A+ Mesh 11.5
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-widest">
                  Multi-Agent Autonomous Resource Arbitrage {"&"} Decision Mesh
                </CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-white border-none px-6 py-1 text-[10px] font-black animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.4)]">COOPERATIVE_ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 space-y-8 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agents.map((agent, i) => (
                <div key={i} className="p-6 bg-black/40 rounded-[2rem] border border-slate-800 space-y-4 hover:border-emerald-500/30 transition-all group">
                  <div className="flex justify-between items-center">
                    <div className="h-10 w-10 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-emerald-500/10 transition-colors">
                      <Bot className="h-5 w-5 text-emerald-400" />
                    </div>
                    <Badge variant="outline" className="text-[7px] border-emerald-500/20 text-emerald-500">{agent.status}</Badge>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-200 uppercase">{agent.role}</p>
                    <p className="text-[8px] text-slate-500 font-mono mt-1 italic">Targeting: {agent.target}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-[9px] font-black text-emerald-400">{agent.gain}</span>
                    <Share2 className="h-3 w-3 text-slate-600" />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-black/60 rounded-[3rem] border border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%) pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-emerald-400 animate-pulse" />
                <h4 className="text-sm font-black uppercase text-emerald-400 tracking-[0.2em]">Autonomous Arbitrage Result</h4>
              </div>
              <p className="text-base text-slate-200 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2 font-medium">
                "Financial Agent has successfully negotiated a 4.2% budget shift with the Logistics Agent. This autonomous arbitrage resolves the predicted bottleneck in Phase 4 without human oversight. Efficiency gain of +18.4% ROI indexed."
              </p>
              <div className="flex gap-4 mt-6">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-[10px] font-black uppercase h-12 px-10 rounded-2xl shadow-2xl tracking-widest">Verify Ledger Log</Button>
                <Button variant="outline" className="border-slate-700 text-[10px] font-black uppercase h-12 px-10 rounded-2xl hover:bg-slate-800">Review A2A Logic</Button>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-slate-950 p-6 border-t border-slate-800 flex justify-between items-center px-10">
            <div className="flex gap-12">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-blue-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mesh Protocol: AUTOGEN_V11</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Negotiation Success: 99.9%</span>
              </div>
            </div>
            <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[9px] px-4 uppercase">Agents Online: 142</Badge>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem] overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-3 tracking-widest">
                <Workflow className="h-5 w-5" /> Cross-Project Coordination
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="space-y-4">
                {[
                  { project: "FPSO Angola", status: "SYNCED", gain: "+12%" },
                  { project: "Arctic Deep", status: "ARBITRATING", gain: "Calculating" },
                  { project: "H2 Storage", status: "READY", gain: "Optimized" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                    <div>
                      <p className="text-[10px] font-black text-slate-200 uppercase">{item.project}</p>
                      <p className="text-[8px] text-slate-500 font-mono">{item.status}</p>
                    </div>
                    <span className="text-[10px] font-black text-emerald-400">{item.gain}</span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-600 italic leading-relaxed">
                "Agents are autonomously coordinating shared resources across the entire metaproject ecosystem."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3 tracking-widest">
                <MessageSquare className="h-5 w-5" /> Agent Dialogue Stream
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-8 pb-8 font-mono text-[9px] text-slate-500 space-y-2 max-h-[200px] overflow-y-auto">
              <p><span className="text-emerald-500">[FIN_AGT]</span>: Requesting resource shift Node-B.</p>
              <p><span className="text-blue-500">[LOG_AGT]</span>: Analyzing capacity... Approved.</p>
              <p><span className="text-purple-500">[STR_AGT]</span>: Re-calculating ROI... Gain confirmed.</p>
              <p><span className="text-slate-600">[MESH]</span>: Decision anchored on ledger #0xQNT-115.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
