"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, Key, Database, History, Share2, Globe, Server, Scan, Fingerprint, ShieldAlert, Cpu, Zap, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export const QuantumSecurity = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Encryption Standard", val: "POST-QUANTUM", icon: Lock, color: "text-purple-400" },
          { label: "Blockchain Integrity", val: "IMMUTABLE", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Trust Score", val: "99.9/100", icon: Zap, color: "text-amber-400" },
          { label: "Auth Mesh", val: "ZERO TRUST", icon: Scan, color: "text-blue-400" }
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
                <Database className="h-5 w-5" /> Quantum Blockchain Ledger 10.0
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Immutable Smart Contract Anchoring & post-quantum validation</CardDescription>
            </div>
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-[8px] animate-pulse px-4">CHAIN_STABLE</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-950 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-6 border-b border-slate-800">Block ID</th>
                    <th className="p-6 border-b border-slate-800">Action / Validation</th>
                    <th className="p-6 border-b border-slate-800">Digital Identity</th>
                    <th className="p-6 border-b border-slate-800">Consensus</th>
                    <th className="p-6 border-b border-slate-800 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#004532", action: "SCENARIO_OMEGA_ANCHOR", user: "MASTER_ACI", consensus: "PoA v10", status: "SEALED" },
                    { id: "#004531", action: "BIO_MFA_HANDSHAKE", user: "DR_HAKIM_C", consensus: "QUORUM", status: "VALID" },
                    { id: "#004530", action: "MILESTONE_AUTO_VAL", user: "AGI_LITE_01", consensus: "SMART_CON", status: "LOGGED" }
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
                  <span className="text-[9px] text-slate-600 font-black uppercase">Nodes: 142 Global Mesh</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-9 border-slate-700 text-[10px] font-black uppercase px-8 rounded-xl shadow-lg">Open Governance Vault</Button>
          </CardFooter>
        </Card>

        {/* Quantum Protection & Identity */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2 tracking-widest">
                <Fingerprint className="h-4 w-4" /> Multi-Modal Biometric Identity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6 px-6 pb-6">
              <div className="p-6 bg-black/40 rounded-[2rem] border border-slate-800 flex flex-col items-center gap-4 text-center relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="h-20 w-20 rounded-3xl bg-blue-600/10 flex items-center justify-center border-2 border-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Scan className="h-10 w-10 text-blue-400 animate-pulse" />
                 </div>
                 <div>
                    <p className="text-[11px] font-black text-white uppercase tracking-[0.2em]">SCUGP-DID SECURED</p>
                    <p className="text-[8px] text-slate-500 font-mono mt-1 uppercase">Post-Quantum Signature: VERIFIED</p>
                 </div>
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-10 rounded-xl shadow-xl">
                Refresh Secure Token
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-red-950/10 border border-red-500/30 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-red-500/10 px-6 py-4">
              <CardTitle className="text-xs font-black uppercase text-red-500 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> Autonomous Access Audit
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 px-6 pb-6">
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-red-500" />
                  <p className="text-[10px] font-black uppercase text-slate-300 tracking-tighter">AI Security Guardian</p>
                </div>
                <p className="text-[10px] text-slate-500 italic leading-relaxed">
                  "No unauthorized access patterns detected. AI review cycle #142 completed. 100% of sensitive operations anchored on the ledger."
                </p>
              </div>
              <div className="flex justify-between items-center text-[9px] font-black uppercase text-slate-500 tracking-widest">
                <span>Threat Level</span>
                <span className="text-emerald-500">NOMINAL_ZERO</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
