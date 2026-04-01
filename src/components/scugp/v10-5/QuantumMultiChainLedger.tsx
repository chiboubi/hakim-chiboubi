"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Database, Key, CheckCircle2, History, Share2, Globe, Server, Anchor, Zap, Cpu, Scan, Fingerprint, Link2, Network } from "lucide-react";
import { cn } from "@/lib/utils";

export const QuantumMultiChainLedger = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Encryption", val: "POST-QUANTUM", icon: Lock, color: "text-purple-400" },
          { label: "Multi-Chain", val: "ETH / HYPER / SOL", icon: Link2, color: "text-blue-400" },
          { label: "Throughput", val: "142k TX/S", icon: Zap, color: "text-amber-400" },
          { label: "Zero-Trust", val: "BIOMETRIC_DID", icon: Fingerprint, color: "text-emerald-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-purple-500/30 transition-all rounded-[1.5rem]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
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
        <Card className="lg:col-span-8 bg-black border-2 border-purple-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between px-8 py-6">
            <div>
              <CardTitle className="text-lg font-black uppercase tracking-[0.2em] text-purple-500 flex items-center gap-3">
                <Network className="h-5 w-5" /> Ultra-Singular Multi-Chain Ledger 10.5
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Cross-Chain Asset Tracking & Post-Quantum Immutability</CardDescription>
            </div>
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-[8px] animate-pulse px-4 uppercase font-black">Bridges: NOMINAL</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-6 border-b border-slate-800">Cross-Block ID</th>
                    <th className="p-6 border-b border-slate-800">Chain Origin</th>
                    <th className="p-6 border-b border-slate-800">Action Type</th>
                    <th className="p-6 border-b border-slate-800">Validator</th>
                    <th className="p-6 border-b border-slate-800 text-right">Integrity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "0xQNT-882", chain: "ETHEREUM_MAIN", action: "EAC_BUDGET_ANCHOR", user: "FINANCE_AI_10", status: "SEALED" },
                    { id: "0xQNT-881", chain: "HYPERLEDGER_V3", action: "HSE_SENSITIVE_SIGN", user: "DR_HAKIM_C", status: "VALID" },
                    { id: "0xQNT-880", chain: "SOLANA_SYNC", action: "IOT_MESH_SNAPSHOT", user: "EDGE_CORE_04", status: "MINED" }
                  ].map((block, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-6 font-mono text-purple-500/60 group-hover:text-purple-400 font-bold">{block.id}</td>
                      <td className="p-6 text-slate-400 font-bold uppercase">{block.chain}</td>
                      <td className="p-6 font-black text-slate-200 uppercase flex items-center gap-2">
                        <Anchor className="h-3 w-3 text-slate-500" /> {block.action}
                      </td>
                      <td className="p-6 text-slate-500 italic uppercase font-bold">{block.user}</td>
                      <td className="p-6 text-right">
                        <span className="inline-flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-[9px]">
                          <ShieldCheck className="h-3.5 w-3.5" /> {block.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-slate-950 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4 text-slate-600" />
                  <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.2em]">Post-Quantum Protocol: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-blue-500" />
                  <span className="text-[9px] text-slate-600 font-black uppercase">Nodes: 1,420 Distributed Mesh</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-10 border-slate-700 text-[10px] font-black uppercase px-10 rounded-2xl shadow-xl">Audit Governance Bridge</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3 tracking-widest">
                <Fingerprint className="h-5 w-5" /> Universal Digital Passport
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-8 px-8 pb-8">
              <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 flex flex-col items-center gap-6 text-center relative overflow-hidden group cursor-pointer shadow-inner">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="h-24 w-24 rounded-[2rem] bg-blue-600/10 flex items-center justify-center border-2 border-blue-500/30 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <Scan className="h-12 w-12 text-blue-400 animate-pulse" />
                 </div>
                 <div>
                    <p className="text-sm font-black text-white uppercase tracking-[0.2em]">DID: SCUGP-DID-10.5</p>
                    <p className="text-[9px] text-slate-500 font-mono mt-2 uppercase italic">Biometric-Blockchain Bond: VERIFIED</p>
                 </div>
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-12 rounded-2xl shadow-2xl tracking-[0.1em]">
                Rotate Session Keys
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-emerald-950/10 border border-emerald-500/30 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-emerald-500/10 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5" /> Smart Contract Health
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="space-y-4">
                {[
                  { label: "ETH_BRIDGE", val: "SYNCHRONIZED", color: "text-emerald-400" },
                  { label: "SOL_PAYROLL", val: "READY", color: "text-blue-400" },
                  { label: "HYPER_AUDIT", val: "ACTIVE", color: "text-purple-400" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-black text-slate-500 uppercase">{item.label}</span>
                    <span className={cn("text-[9px] font-bold font-mono", item.color)}>{item.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
