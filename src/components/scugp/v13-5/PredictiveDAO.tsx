"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Landmark, Vote, ShieldCheck, Database, Key, CheckCircle2, History, Share2, Globe, Server, Anchor, Zap, Link2, Gavel, RefreshCw, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export const PredictiveDAO = () => {
  const proposals = [
    { id: "DAO-135-01", sub: "Planetary H2 Redistribution", status: "VOTING", approval: "99.2%", impact: "+84.2 Gaia Score" },
    { id: "DAO-135-02", sub: "Transnational ETH-Legal Bridge", status: "PASSED", approval: "100%", impact: "Post-Quantum Secure" },
    { id: "DAO-135-03", sub: "Organic AI Self-Audit v13", status: "EXECUTED", approval: "98.8%", impact: "Bias Eliminated" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "DAO Governance", val: "PREDICTIVE_V4", icon: Gavel, color: "text-amber-400" },
          { label: "Consensus Layer", val: "ORGANIC_TRUST", icon: Landmark, color: "text-blue-400" },
          { label: "Contract State", val: "SELF_EVOLVING", icon: RefreshCw, color: "text-emerald-400" },
          { label: "Planetary Bond", val: "100%_SECURE", icon: Globe, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-amber-500/30 transition-all rounded-[2.5rem]">
            <CardHeader className="pb-2 px-8 pt-8">
              <CardTitle className="text-[11px] font-black uppercase text-slate-500 flex items-center gap-3">
                <stat.icon className={cn("h-4 w-4", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="text-xl font-black font-mono text-white tracking-[0.2em] uppercase">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-black border-2 border-amber-500/20 text-white shadow-2xl overflow-hidden rounded-[4rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between px-12 py-10">
            <div>
              <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-amber-500 flex items-center gap-6">
                <Vote className="h-8 w-8" /> Predictive DAO 13.5
              </CardTitle>
              <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2">Transnational Governance & Self-Evolving Civilization Contracts</CardDescription>
            </div>
            <Badge className="bg-amber-600/20 text-amber-500 border-amber-500/30 text-[11px] animate-pulse px-8 py-2 font-black">VOTING_OPEN: Ω</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-10 border-b border-slate-800">Proposal ID</th>
                    <th className="p-10 border-b border-slate-800">Subject</th>
                    <th className="p-10 border-b border-slate-800">Status</th>
                    <th className="p-10 border-b border-slate-800">Impact Score</th>
                    <th className="p-10 border-b border-slate-800 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {proposals.map((p, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-10 font-mono text-amber-500/60 group-hover:text-amber-400 font-bold">{p.id}</td>
                      <td className="p-10 font-black text-slate-200 uppercase flex items-center gap-4">
                        <Anchor className="h-5 w-5 text-slate-500" /> {p.sub}
                      </td>
                      <td className="p-10">
                        <Badge variant="outline" className={cn(
                          "text-[9px] border-none px-4 h-6 uppercase font-black",
                          p.status === 'VOTING' ? "bg-blue-600/20 text-blue-400" : "bg-emerald-600/20 text-emerald-400"
                        )}>{p.status}</Badge>
                      </td>
                      <td className="p-10 text-emerald-400 font-black font-mono tracking-tighter">{p.impact}</td>
                      <td className="p-10 text-right">
                        <Button size="sm" variant="ghost" className="h-10 text-[10px] font-black uppercase text-slate-500 hover:text-amber-500 tracking-[0.3em]">Seal Vote</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="p-10 bg-slate-950 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-12">
                <div className="flex items-center gap-4">
                  <History className="h-6 w-6 text-slate-600" />
                  <span className="text-[11px] text-slate-600 font-black uppercase tracking-[0.3em]">Immutability: POST-QUANTUM v13</span>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="h-6 w-6 text-amber-500" />
                  <span className="text-[11px] text-slate-600 font-black uppercase">Nodes: 142,000,000 Global Mesh</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-14 border-slate-700 text-[11px] font-black uppercase px-16 rounded-[2rem] shadow-2xl tracking-[0.2em]">Audit Planetary Ledger</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800 px-12 py-10">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-4 tracking-widest">
                <RefreshCw className="h-6 w-6" /> Civilization Evolution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 px-12 pb-12 space-y-10 flex-1">
              <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[4rem] text-center space-y-6 shadow-inner relative group">
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-[12px] text-slate-400 uppercase font-black tracking-[0.3em] relative z-10">Consensus Purity</p>
                 <p className="text-6xl font-black font-mono text-white relative z-10">100%</p>
                 <Badge variant="outline" className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[10px] uppercase font-black px-6 py-1 relative z-10">Ω_STABLE</Badge>
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed text-center px-6">
                "Contracts now autonomously predict 20-year economic trends, adjusting legal frameworks to prevent systemic collapse before it triggers."
              </p>
              <div className="pt-6">
                <Button variant="outline" className="w-full border-slate-800 text-[10px] font-black uppercase h-14 rounded-[2rem] tracking-[0.2em]">View Future Roadmap</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
