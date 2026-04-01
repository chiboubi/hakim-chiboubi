
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Database, Zap, RefreshCw, Key, History, Globe, Link2, Anchor, Activity, FileCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const QuantumLedger = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getQuantumLedgerMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Ledger Security", val: metrics.security, icon: Lock, color: "text-purple-400" },
          { label: "Smart Contracts", val: metrics.contracts, icon: FileCheck, color: "text-blue-400" },
          { label: "Block Height", val: metrics.height, icon: Database, color: "text-amber-400" },
          { label: "Consensus", val: "PoA v100", icon: ShieldCheck, color: "text-emerald-400" }
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
        {/* Advanced Blockchain Ledger */}
        <Card className="lg:col-span-8 bg-black border-2 border-purple-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between px-8 py-6">
            <div>
              <CardTitle className="text-lg font-black uppercase tracking-[0.2em] text-purple-500 flex items-center gap-3">
                <Database className="h-5 w-5" /> SCUGP-Chain 100.0 (Sovereign Ledger)
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Traçabilité Immuable & Smart Contracts de Validation Automatique</CardDescription>
            </div>
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-[8px] animate-pulse px-4 uppercase font-black">LEDGER_SCELLÉ_Ω</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-6 border-b border-slate-800">Block ID</th>
                    <th className="p-6 border-b border-slate-800">Action / Contract</th>
                    <th className="p-6 border-b border-slate-800">Validation Node</th>
                    <th className="p-6 border-b border-slate-800">Consensus</th>
                    <th className="p-6 border-b border-slate-800 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#1420884", action: "MILESTONE_AUTO_VAL", user: "SMART_CONTRACT_01", consensus: "PoA Ω", status: "SEALED" },
                    { id: "#1420883", action: "DECISION_ANCHOR", user: "DR_HAKIM_C", consensus: "ROOT_SYNC", status: "VALIDATED" },
                    { id: "#1420882", action: "BIO_MFA_SINK", user: "NEURAL_MESH", consensus: "QUORUM_37", status: "SCELLÉ" }
                  ].map((block, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-6 font-mono text-purple-500/60 group-hover:text-purple-400 font-bold">{block.id}</td>
                      <td className="p-6 font-black text-slate-200 uppercase flex items-center gap-2">
                        <Anchor className="h-3 w-3 text-slate-500" /> {block.action}
                      </td>
                      <td className="p-6 text-slate-500 italic uppercase font-bold">{block.user}</td>
                      <td className="p-6 font-mono text-slate-600">{block.consensus}</td>
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
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4 text-slate-600" />
                  <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.2em]">Immutability Protocol: POST-QUANTUM ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-blue-500" />
                  <span className="text-[9px] text-slate-600 font-black uppercase">Nodes: 37 Pillars Synced</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-10 border-slate-700 text-[10px] font-black uppercase px-8 rounded-xl shadow-lg">Open Solidity Core</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2 tracking-widest">
                <Star className="h-4 w-4" /> Reputation Ledger
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6 px-6 pb-6">
              <div className="p-6 bg-black/40 rounded-[2rem] border border-slate-800 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-[11px] font-black text-white uppercase tracking-[0.2em]">SOUVERAIN_TOKENS</p>
                 <p className="text-4xl font-black font-mono text-amber-500 mt-2">1,420,000</p>
                 <p className="text-[8px] text-slate-500 font-mono mt-1 uppercase">Reputation: SUPREME</p>
              </div>
              <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-[10px] font-black uppercase h-10 rounded-xl shadow-xl">
                Distribute Contributor Tokens
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
