"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Database, Key, CheckCircle2, History, Share2, Globe, Server, Anchor, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const QuantumLedger = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Ledger Integrity", val: "IMMUTABLE", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Smart Contracts", val: "14 ACTIVE", icon: Database, color: "text-blue-400" },
          { label: "Validation Time", val: "0.2s", icon: Zap, color: "text-amber-400" },
          { label: "Node Consensus", val: "PoA v8", icon: Globe, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-amber-500/30 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3 w-3", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-black font-mono text-white tracking-widest">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-black border-2 border-amber-500/20 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-amber-500 flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Quantum Blockchain Ledger (Solidity Ready)
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Chain ID: 2026-V8 | Full Milestone Certification & Validation</CardDescription>
              </div>
              <Badge className="bg-amber-600/20 text-amber-500 border-amber-500/30 text-[8px] animate-pulse">LEDGER_ACTIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Block Hash</th>
                    <th className="p-4 border-b border-slate-800">Action/Milestone</th>
                    <th className="p-4 border-b border-slate-800">Signed By</th>
                    <th className="p-4 border-b border-slate-800 text-right">Consensus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hash: "0x8f3...42e1", action: "MILESTONE_VAL_Q4", signer: "MASTER_ACI", status: "SEALED" },
                    { hash: "0x4d1...9c32", action: "HSE_PROTOCOL_SIGN", signer: "DR_ELENA_V", status: "VALIDATED" },
                    { hash: "0xa12...f901", action: "BUDGET_REALLOC_AUT", signer: "FINANCE_AI", status: "MINED" }
                  ].map((block, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-4 font-mono text-amber-500/60 group-hover:text-amber-400">{block.hash}</td>
                      <td className="p-4 font-black text-slate-200 uppercase">{block.action}</td>
                      <td className="p-4 text-slate-500 italic uppercase">{block.signer}</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center gap-1.5 text-emerald-500 font-black uppercase tracking-tighter">
                          <CheckCircle2 className="h-3 w-3" /> {block.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="p-4 bg-slate-950 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <History className="h-3.5 w-3.5 text-slate-600" />
                  <span className="text-[9px] text-slate-600 font-black uppercase">Immutability Protocol: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-3.5 w-3.5 text-blue-500" />
                  <span className="text-[9px] text-slate-600 font-black uppercase">Nodes: 14/14 Distributed</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-8 border-slate-700 text-[9px] font-black uppercase">Open Solidity Interface</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Key className="h-4 w-4" /> Secure Wallet Access
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Connected Identity</p>
                 <p className="text-xs font-mono text-amber-400 font-bold">0xDrHakim...CertV8</p>
                 <Badge variant="outline" className="mt-3 border-emerald-500/30 text-emerald-400 text-[8px] uppercase font-black">MFA_AUTHENTICATED</Badge>
              </div>
              <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-[9px] font-black uppercase h-9 shadow-xl">
                Sign Critical Action
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-amber-950/10 border border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Anchor className="h-4 w-4" /> Smart Contract Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "HSE_Compliance_v8", status: "DEPLOYED" },
                { name: "Budget_Arbitrage_Main", status: "ACTIVE" },
                { name: "A2A_Trust_Handshake", status: "SEALED" }
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{c.name}</span>
                  <span className="text-[8px] font-black text-amber-500 font-mono">{c.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
