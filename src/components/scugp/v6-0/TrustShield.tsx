
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Fingerprint, Lock, Database, CheckCircle2, AlertCircle, History, Key, UserCheck, ShieldAlert, Scan, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * TrustShield Component (Zero Trust Security)
 * Pillar 3: Handles biometric auth, Lightweight Blockchain traceability, and automated access reviews.
 */
export const TrustShield = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Biometric & Digital Identity */}
        <Card className="bg-slate-950 border-2 border-blue-500/20 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Fingerprint className="h-24 w-24 text-blue-500" />
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-2">
              <Scan className="h-4 w-4" /> Biometric Identity Mesh
            </CardTitle>
            <CardDescription className="text-[10px]">Zero Trust Multi-Modal Auth (Pillar 3)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20 flex flex-col items-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
               <div className="h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-3 relative z-10 border border-blue-500/30">
                  <Fingerprint className="h-6 w-6 text-blue-400" />
               </div>
               <p className="text-[10px] font-black text-white uppercase tracking-widest relative z-10">Biometric Handshake: OK</p>
               <p className="text-[8px] text-slate-500 mt-1 relative z-10 font-mono uppercase">Status: Voice & Face Verified</p>
            </div>
            <div className="space-y-2">
               <div className="flex justify-between items-center p-2 bg-black/40 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Role Partition</span>
                  <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-400 uppercase">DNA_ADMIN_V7</Badge>
               </div>
               <div className="flex justify-between items-center p-2 bg-black/40 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Session Key</span>
                  <span className="text-[9px] font-mono text-blue-400">0x8F...42E1</span>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Lightweight Blockchain Decision Ledger */}
        <Card className="bg-slate-900 border-slate-800 md:col-span-2 shadow-xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 flex flex-row items-center justify-between bg-slate-950/50">
            <div>
              <CardTitle className="text-sm font-black uppercase text-purple-500 flex items-center gap-2">
                <Database className="h-4 w-4" /> Lightweight Decision Ledger
              </CardTitle>
              <CardDescription className="text-[10px]">Immutable Blockchain Audit Trail for Distributed Trust</CardDescription>
            </div>
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-[8px] uppercase tracking-widest">Nodes: 14/14 Active</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-black/40 text-slate-500 uppercase font-black">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Block ID</th>
                    <th className="p-4 border-b border-slate-800">Action Type</th>
                    <th className="p-4 border-b border-slate-800">Validation Identity</th>
                    <th className="p-4 border-b border-slate-800">Integrity Hash</th>
                    <th className="p-4 border-b border-slate-800 text-right">Consensus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#4532", action: "DNA_INHERIT_EXEC", user: "SYS_AI", hash: "0x8f3...2e", status: "SEALED" },
                    { id: "#4531", action: "MFA_BIO_HANDSHAKE", user: "H. Chibubi", hash: "0x4d1...9c", status: "VALID" },
                    { id: "#4530", action: "MILESTONE_AUTO_VAL", user: "AGI_LITE", hash: "0xa12...f9", status: "LOGGED" }
                  ].map((block, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 font-mono text-blue-400 font-bold">{block.id}</td>
                      <td className="p-4 font-black text-slate-200 uppercase">{block.action}</td>
                      <td className="p-4 text-slate-500 italic uppercase">{block.user}</td>
                      <td className="p-4 font-mono text-slate-600 truncate max-w-[100px]">{block.hash}</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center gap-1.5 text-emerald-500 font-black uppercase">
                          <CheckCircle2 className="h-3 w-3" /> {block.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="bg-black/20 p-3 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-2">
                <History className="h-3 w-3 text-slate-600" />
                <span className="text-[8px] text-slate-600 font-bold uppercase tracking-widest">Consensus Algorithm: SCUGP-PoA v2.0 (Lightweight)</span>
             </div>
             <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 font-black uppercase">ISO 27001 SECURED</Badge>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2 border-b border-slate-800">
            <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4" /> AI-Automated Access Review
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
              <p className="text-[10px] text-slate-400 leading-relaxed italic">
                "No unauthorized access patterns detected. AI review confirmed 12 session role escalations automatically via Smart Contracts in the last 24h cycle."
              </p>
            </div>
            <div className="flex justify-between items-center text-[9px] font-bold uppercase text-slate-500">
              <span>Security Integrity Score</span>
              <span className="text-emerald-400 font-black">100% NOMINAL</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800 shadow-xl overflow-hidden h-full flex flex-col">
          <CardHeader className="bg-slate-950/50 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <UserCheck className="h-4 w-4" /> Role-Based Conditional Access
              </CardTitle>
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-[7px]">COMPLIANCE_OK</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-1 space-y-3">
            {[
              { label: "Biometric MFA for DNA Updates", status: "ENFORCED", icon: Fingerprint },
              { label: "IP Geofencing: Global Nodes", status: "ACTIVE", icon: Globe },
              { label: "Blockchain Ledger Persistence", status: "ARMED", icon: Shield }
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 group hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2">
                  <p.icon className="h-3 w-3 text-slate-500 group-hover:text-blue-400" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{p.label}</span>
                </div>
                <Badge variant="outline" className="text-[7px] border-blue-500/30 text-blue-400 font-mono">{p.status}</Badge>
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-3 bg-black/20 border-t border-slate-800">
             <Button size="sm" variant="ghost" className="w-full text-[8px] font-black uppercase text-slate-500 hover:text-white">
                Generate Monthly Compliance Report
             </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
