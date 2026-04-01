"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Database, Zap, RefreshCw, Key, History, Globe, Link2, Anchor, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export const SmartContracts2 = () => {
  const contracts = [
    { id: "SC-115-01", type: "DYNAMIC_CLAUSE", status: "ACTIVE", trigger: "HSE_98%", action: "AUTO_PAYROLL" },
    { id: "SC-115-02", type: "SELF_EXECUTING", status: "ARMED", trigger: "DRIFT_>_10%", action: "REPLAN_INIT" },
    { id: "SC-115-03", type: "CROSS_CHAIN_VAL", status: "VALIDATED", trigger: "ETH_HYPER_SYNC", action: "LEDGER_SEAL" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Ledger Standard", val: "SC-2.0-DYNAMIC", icon: Database, color: "text-blue-400" },
          { label: "Auto-Execution", val: "99.8% READY", icon: Zap, color: "text-amber-400" },
          { label: "Multi-Chain Hub", val: "NOMINAL", icon: Link2, color: "text-purple-400" },
          { label: "Trust Index", val: "100%", icon: ShieldCheck, color: "text-emerald-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl rounded-[1.5rem]">
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
        <Card className="lg:col-span-8 bg-black border-2 border-blue-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-blue-500/5 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-black uppercase tracking-[0.2em] text-blue-400 flex items-center gap-3">
                  <Lock className="h-5 w-5" /> Smart Contracts 2.0 (Dynamic Clauses)
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Autonomous Legal & Financial Execution Mesh</CardDescription>
              </div>
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-[8px] animate-pulse px-4 uppercase font-black tracking-widest">LEDGER_V11_STABLE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-6 border-b border-slate-800">Contract ID</th>
                    <th className="p-6 border-b border-slate-800">Type</th>
                    <th className="p-6 border-b border-slate-800">Trigger Event</th>
                    <th className="p-6 border-b border-slate-800">Auto-Action</th>
                    <th className="p-6 border-b border-slate-800 text-right">Integrity</th>
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((c, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-6 font-mono text-blue-500/60 group-hover:text-blue-400 font-bold">{c.id}</td>
                      <td className="p-6 text-slate-400 font-bold uppercase">{c.type}</td>
                      <td className="p-6 font-black text-slate-200 uppercase flex items-center gap-2">
                        <Activity className="h-3 w-3 text-amber-500" /> {c.trigger}
                      </td>
                      <td className="p-6 text-slate-500 italic uppercase font-bold">{c.action}</td>
                      <td className="p-6 text-right">
                        <span className="inline-flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-[9px]">
                          <ShieldCheck className="h-3.5 w-3.5" /> {c.status}
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
                  <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.2em]">Immutability Protocol: V11.5 SEALED</span>
                </div>
                <div className="flex items-center gap-2">
                  <Anchor className="h-4 w-4 text-blue-500" />
                  <span className="text-[9px] text-slate-600 font-black uppercase">Consensus: SCUGP-PoA-Plus</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-10 border-slate-700 text-[10px] font-black uppercase px-10 rounded-2xl shadow-xl">Audit Legal Bridge</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3 tracking-widest">
                <RefreshCw className="h-5 w-5" /> Self-Enforcing Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] text-center space-y-4 shadow-inner">
                 <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">Contract Health Index</p>
                 <p className="text-4xl font-black font-mono text-white">99.9%</p>
                 <Badge variant="outline" className="bg-emerald-600/20 text-emerald-500 border-emerald-500/30 text-[8px] uppercase font-black">ZERO_DEVIATION</Badge>
              </div>
              <p className="text-[9px] text-slate-600 italic leading-relaxed text-center">
                "Contracts are autonomously adjusted based on real-time project health data, ensuring the legal framework always matches the operational reality."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-950/10 border border-blue-500/30 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-blue-500/10 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3">
                <Globe className="h-5 w-5" /> Cross-Chain Liquidity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="space-y-4">
                {[
                  { label: "USDT_PAYROLL", val: "READY", color: "text-emerald-400" },
                  { label: "ETH_GOVERNANCE", val: "SYNCED", color: "text-blue-400" },
                  { label: "SOL_LEDGER", val: "ACTIVE", color: "text-purple-400" }
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
