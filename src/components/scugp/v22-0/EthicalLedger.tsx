
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Landmark, Vote, ShieldCheck, Database, Key, CheckCircle2, History, Share2, Globe, Server, Anchor, Zap, Link2, Gavel, RefreshCw, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export const EthicalLedger22 = () => {
  const laws = [
    { id: "LAW-22-01", sub: "Planetary Resource Equity", status: "VALIDATED", approval: "100%", impact: "+142 ERI" },
    { id: "LAW-22-02", sub: "Neural Privacy Standard", status: "ENFORCED", approval: "100%", impact: "Zero-Leak" },
    { id: "LAW-22-03", sub: "Lunar Energy Distribution", status: "ACTIVE", approval: "99.8%", impact: "+84.2 Net Pos" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Consensus Model", val: "PROOF_OF_ETHICS", icon: Scale, color: "text-emerald-400" },
          { label: "Goverance Maturity", val: "SINGULARITY", icon: Landmark, color: "text-blue-400" },
          { label: "Smart Laws", val: "SELF_EVOLVING", icon: Gavel, color: "text-amber-400" },
          { label: "Ethical Sync", val: "100%_CERTAIN", icon: Globe, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900/80 border-slate-800 shadow-2xl group hover:border-emerald-500/30 transition-all rounded-[2.5rem] backdrop-blur-xl">
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
        <Card className="lg:col-span-8 bg-black border-2 border-emerald-500/20 text-white shadow-[0_0_100px_rgba(16,185,129,0.15)] overflow-hidden rounded-[4rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between px-12 py-10">
            <div>
              <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-emerald-500 flex items-center gap-6">
                <ShieldCheck className="h-8 w-8" /> Blockchain 11.0 – Ethical Ledger
              </CardTitle>
              <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2 tracking-widest">Proof of Ethics (PoE) & Entanglement-Based Trust Protocols</CardDescription>
            </div>
            <Badge className="bg-emerald-600/20 text-emerald-500 border-emerald-500/30 text-[11px] animate-pulse px-8 py-2 font-black uppercase tracking-[0.2em]">PoE_ACTIVE: Ω</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-10 border-b border-slate-800">Entanglement ID</th>
                    <th className="p-10 border-b border-slate-800">Smart Law Subject</th>
                    <th className="p-10 border-b border-slate-800">Status</th>
                    <th className="p-10 border-b border-slate-800">Ethical Score</th>
                    <th className="p-10 border-b border-slate-800 text-right">Integrity</th>
                  </tr>
                </thead>
                <tbody>
                  {laws.map((law, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-10 font-mono text-emerald-500/60 group-hover:text-emerald-400 font-bold">{law.id}</td>
                      <td className="p-10 font-black text-slate-200 uppercase flex items-center gap-4">
                        <Anchor className="h-5 w-5 text-slate-500" /> {law.sub}
                      </td>
                      <td className="p-10">
                        <Badge variant="outline" className={cn(
                          "text-[9px] border-none px-4 h-6 uppercase font-black",
                          law.status === 'VALIDATED' ? "bg-emerald-600/20 text-emerald-400" : "bg-blue-600/20 text-blue-400"
                        )}>{law.status}</Badge>
                      </td>
                      <td className="p-10 text-emerald-400 font-black font-mono tracking-tighter">{law.impact}</td>
                      <td className="p-10 text-right">
                        <span className="inline-flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-[10px]">
                          <CheckCircle2 className="h-4 w-4" /> SEALED
                        </span>
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
                  <span className="text-[11px] text-slate-600 font-black uppercase tracking-[0.3em]">Quantum Audit: INSTANT</span>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="h-6 w-6 text-emerald-500" />
                  <span className="text-[11px] text-slate-600 font-black uppercase">Nodes: Planetary Conscience Mesh</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-14 border-slate-700 text-[10px] font-black uppercase px-16 rounded-[2rem] shadow-2xl tracking-[0.2em]">Audit Smart Law Bridge</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800 px-12 py-10 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-4 tracking-widest">
                <RefreshCw className="h-6 w-6" /> Law Evolution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 px-12 pb-12 space-y-10 flex-1">
              <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[4rem] text-center space-y-6 shadow-inner relative group">
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-[12px] text-slate-400 uppercase font-black tracking-[0.3em] relative z-10">Ethical Consistency (EQC)</p>
                 <p className="text-6xl font-black font-mono text-white relative z-10">1.00</p>
                 <Badge variant="outline" className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[10px] uppercase font-black px-6 py-1 relative z-10">PURE_ETHICS_LOCKED</Badge>
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed text-center px-6">
                "Blockchain 11.0 uses entanglement-based trust to ensure every strategic recommendation aligns with the 20D Ethical Conscience protocol."
              </p>
              <div className="pt-6">
                <Button variant="outline" className="w-full border-slate-800 text-[10px] font-black uppercase h-14 rounded-[2rem] tracking-[0.2em] hover:bg-emerald-500/10 transition-all">Verify Global Conformity</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
