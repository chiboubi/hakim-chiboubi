"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Landmark, Lock, ShieldCheck, Database, Key, CheckCircle2, History, Share2, Globe, Server, UserCheck, QrCode, CreditCard, Vote, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const DAOGovernance = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "DAO Governance", val: "DISTRIBUTED", icon: Landmark, color: "text-amber-400" },
          { label: "Project Passport", val: "V8.5_SIGNED", icon: QrCode, color: "text-blue-400" },
          { label: "Automatic Payroll", val: "ACTIVE", icon: CreditCard, color: "text-emerald-400" },
          { label: "Consensus Model", val: "SCUGP-DAO v1", icon: Vote, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-amber-500/30 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3 w-3", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* DAO Decision Tally */}
        <Card className="lg:col-span-8 bg-black border-2 border-amber-500/20 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-amber-500 flex items-center gap-2">
                <Vote className="h-4 w-4" /> DAO (Decentralized Autonomous Org) Voting
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Milestone Validations & Strategic Proposals</CardDescription>
            </div>
            <Badge className="bg-amber-600/20 text-amber-500 border-amber-500/30 text-[8px] animate-pulse">VOTING_OPEN</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Proposal ID</th>
                    <th className="p-4 border-b border-slate-800">Subject</th>
                    <th className="p-4 border-b border-slate-800">Status</th>
                    <th className="p-4 border-b border-slate-800">Approval Rate</th>
                    <th className="p-4 border-b border-slate-800 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "PROP-102", sub: "Shift to 100% GNL Logistics", status: "ACTIVE", approval: "84%", icon: Zap },
                    { id: "PROP-101", sub: "Release Milestone Q4 Budget", status: "PASSED", approval: "98%", icon: Database },
                    { id: "PROP-100", sub: "New Partner Onboarding: EPC_VANCE", status: "PASSED", approval: "100%", icon: UserCheck }
                  ].map((p, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-4 font-mono text-amber-500/60 group-hover:text-amber-400 font-bold">{p.id}</td>
                      <td className="p-4 font-black text-slate-200 uppercase flex items-center gap-2">
                        <p.icon className="h-3 w-3 text-slate-500" /> {p.sub}
                      </td>
                      <td className="p-4"><Badge variant="outline" className={cn("text-[7px] border-none px-2 h-4", p.status === 'ACTIVE' ? 'bg-blue-600/20 text-blue-400' : 'bg-emerald-600/20 text-emerald-400')}>{p.status}</Badge></td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden max-w-[60px]">
                            <div className="h-full bg-amber-500" style={{ width: p.approval }} />
                          </div>
                          <span className="font-mono text-amber-500">{p.approval}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <Button size="sm" variant="ghost" className="h-6 text-[8px] font-black uppercase text-slate-500 hover:text-amber-500">Cast Vote</Button>
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
                  <span className="text-[9px] text-slate-600 font-black uppercase">Consensus Method: Quadratic Voting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-[9px] text-slate-600 font-black uppercase">Active Nodes: 142 Global</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-8 border-slate-700 text-[9px] font-black uppercase">Open Governance Portal</Button>
          </CardFooter>
        </Card>

        {/* Digital Identity & Payments */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <QrCode className="h-4 w-4" /> Project Passport™
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800 flex flex-col items-center gap-3 text-center">
                 <div className="h-24 w-24 bg-white p-2 rounded-xl">
                    <QrCode className="h-full w-full text-black" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">DID: SCUGP-SING-2026-V85</p>
                    <p className="text-[8px] text-slate-500 font-mono mt-1 uppercase">Immutable Digital Identity Sealed</p>
                 </div>
              </div>
              <p className="text-[9px] text-slate-500 italic leading-relaxed text-center">
                "The project passport tracks every strategic decision and best practice inheritance automatically across the A2A mesh."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-2">
                <CreditCard className="h-4 w-4" /> Smart Payment Ledger
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: "EPC Milestone Q3", status: "PAID", val: "1.4M USDT", icon: CheckCircle2 },
                { label: "Freelance AI Expert", status: "PENDING", val: "12K USDT", icon: History },
                { label: "Audit Fees: ISO", status: "VAL_REQD", val: "45K USDT", icon: ShieldCheck }
              ].map((pay, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800 group hover:border-emerald-500/30 transition-all">
                  <div>
                    <p className="text-[10px] font-black text-slate-200 uppercase">{pay.label}</p>
                    <p className="text-[8px] text-emerald-500/70 font-mono mt-0.5">{pay.val}</p>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[7px] border-none px-2 h-4",
                    pay.status === 'PAID' ? "bg-emerald-600/20 text-emerald-500" : "bg-amber-600/20 text-amber-500"
                  )}>{pay.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
