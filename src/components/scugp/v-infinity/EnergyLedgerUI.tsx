
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link2, Lock, ShieldCheck, Database, Zap, Activity, RefreshCw, History, Anchor } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const EnergyLedgerUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getEnergyLedgerMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Security Level", val: metrics.security, icon: Lock, color: "text-blue-400" },
          { label: "Smart Contracts", val: metrics.contracts, icon: Link2, color: "text-purple-400" },
          { label: "Data Integrity", val: metrics.integrity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Ledger Status", val: metrics.status, icon: Database, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-slate-800 shadow-2xl rounded-3xl group hover:border-slate-700 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-slate-900 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-3xl" />
        <CardHeader className="p-16 border-b border-slate-800 bg-slate-900/50 text-center relative z-10">
           <Database className="h-24 w-24 text-blue-500 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">BLOCKCHAIN ENERGY LEDGER</CardTitle>
           <CardDescription className="text-slate-500 font-bold uppercase tracking-[0.5em] mt-4">Traçabilité Énergétique par Sceau SHA-4096 & Smart Contracts</CardDescription>
        </CardHeader>
        <CardContent className="p-0 relative z-10">
           <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-8 border-b border-slate-800">Transaction ID</th>
                    <th className="p-8 border-b border-slate-800">Resource Flow</th>
                    <th className="p-8 border-b border-slate-800">Hash Integrity</th>
                    <th className="p-8 border-b border-slate-800 text-right">Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "TX-Ω-882", flow: "Shengli -> Grid Alpha", hash: "SHA-4096:0x8f3...2e41", status: "VALIDATED" },
                    { id: "TX-Ω-881", flow: "H2 Storage -> Cryo Loop", hash: "SHA-4096:0x4d1...9c32", status: "VALIDATED" },
                    { id: "TX-Ω-880", flow: "Solar Node -> Mars Core", hash: "SHA-4096:0xa12...f901", status: "VALIDATED" }
                  ].map((tx, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-white/5 transition-all group">
                      <td className="p-8 font-mono text-blue-400 font-black">{tx.id}</td>
                      <td className="p-8 font-black uppercase text-slate-200">{tx.flow}</td>
                      <td className="p-8 font-mono text-[10px] text-slate-500">{tx.hash}</td>
                      <td className="p-8 text-right">
                        <Badge className="bg-emerald-600/20 text-emerald-500 border-none uppercase text-[8px] px-4 py-1">{tx.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </CardContent>
        <CardFooter className="p-8 bg-slate-950 border-t border-slate-800 justify-between items-center relative z-10">
           <div className="flex gap-12 text-slate-500 font-black uppercase text-[10px] tracking-widest">
              <div className="flex items-center gap-3"><History size={20} /> BLOCK_HEIGHT: 1,420,884</div>
              <div className="flex items-center gap-3"><ShieldCheck size={20} className="text-emerald-500" /> SOURCE_CONSENSUS: 100%</div>
           </div>
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-12 px-12 rounded-[1.5rem] uppercase tracking-widest shadow-2xl">
             Audit Full Chain
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
