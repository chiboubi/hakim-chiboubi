"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Landmark, Vote, ShieldCheck, Database, Key, CheckCircle2, History, Share2, Globe, Server, Anchor, Zap, Link2, Gavel } from "lucide-react";
import { cn } from "@/lib/utils";

export const SmartDemocracyDAO = () => {
  const proposals = [
    { id: "DAO-125-01", sub: "Global H2 Distribution Shift", status: "VOTING", approval: "92.4%", impact: "+42 Net Positive" },
    { id: "DAO-125-02", sub: "Neuro-Sync Ethical Protocol", status: "PASSED", approval: "100%", impact: "Bias Free" },
    { id: "DAO-125-03", sub: "Quantum Grid Allocation Q4", status: "EXECUTED", approval: "98.2%", impact: "+18% ROI" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Consensus Model", val: "QUADRATIC_12.5", icon: Gavel, color: "text-amber-400" },
          { label: "DAO Maturity", val: "LEVEL_5_AUTO", icon: Landmark, color: "text-blue-400" },
          { label: "Contract State", val: "SELF_EVOLVING", icon: RefreshCw, color: "text-emerald-400" },
          { label: "Planetary Sync", val: "100%_SECURE", icon: Globe, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-amber-500/30 transition-all rounded-[2rem]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3.5 w-3.5", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-black border-2 border-amber-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between px-10 py-8">
            <div>
              <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-amber-500 flex items-center gap-4">
                <Vote className="h-6 w-6" /> Smart Democracy DAO 12.5
              </CardTitle>
              <CardDescription className="text-[11px] uppercase font-bold text-slate-500">Decentralized Governance & Self-Evolving Project Protocols</CardDescription>
            </div>
            <Badge className="bg-amber-600/20 text-amber-500 border-amber-500/30 text-[9px] animate-pulse px-6 py-1 font-black">CONSENSUS_ACTIVE</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-8 border-b border-slate-800">Proposal ID</th>
                    <th className="p-8 border-b border-slate-800">Subject</th>
                    <th className="p-8 border-b border-slate-800">Status</th>
                    <th className="p-8 border-b border-slate-800">Impact Score</th>
                    <th className="p-8 border-b border-slate-800 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {proposals.map((p, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-8 font-mono text-amber-500/60 group-hover:text-amber-400 font-bold">{p.id}</td>
                      <td className="p-8 font-black text-slate-200 uppercase flex items-center gap-3">
                        <Anchor className="h-4 w-4 text-slate-500" /> {p.sub}
                      </td>
                      <td className="p-8">
                        <Badge variant="outline" className={cn(
                          "text-[8px] border-none px-3 h-5 uppercase font-black",
                          p.status === 'VOTING' ? "bg-blue-600/20 text-blue-400" : "bg-emerald-600/20 text-emerald-400"
                        )}>{p.status}</Badge>
                      </td>
                      <td className="p-8 text-emerald-400 font-black font-mono">{p.impact}</td>
                      <td className="p-8 text-right">
                        <Button size="sm" variant="ghost" className="h-8 text-[9px] font-black uppercase text-slate-500 hover:text-amber-500 tracking-widest">Seal Vote</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="p-8 bg-slate-950 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <History className="h-5 w-5 text-slate-600" />
                  <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">Immutability: POST-QUANTUM V12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-amber-500" />
                  <span className="text-[10px] text-slate-600 font-black uppercase">Nodes: 142,000 Collective Mesh</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-12 border-slate-700 text-[10px] font-black uppercase px-12 rounded-[1.5rem] shadow-xl">Audit Planetary Bridge</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2.5rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-3 tracking-widest">
                <RefreshCw className="h-5 w-5" /> Self-Evolving Clauses
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-8">
              <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[3rem] text-center space-y-4 shadow-inner">
                 <p className="text-[11px] text-slate-400 uppercase font-black tracking-[0.2em]">Contract Evolution Rate</p>
                 <p className="text-5xl font-black font-mono text-white">99.9%</p>
                 <Badge variant="outline" className="bg-emerald-600/20 text-emerald-500 border-emerald-500/30 text-[9px] uppercase font-black">PLANETARY_ADAPT_OK</Badge>
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed text-center">
                "Contracts now autonomously adjust to geopolitical fluctuations, ensuring the legal mesh remains synced with real-world instability."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { RefreshCw } from "lucide-react";
