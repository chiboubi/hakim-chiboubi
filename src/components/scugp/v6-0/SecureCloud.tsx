"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Fingerprint, History, Search, AlertTriangle, EyeOff, Key } from "lucide-react";

export const SecureCloud = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-emerald-950/10 border-emerald-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-emerald-500">Zero Trust Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono text-emerald-400">ENFORCED</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">Identity-based micro-segmentation</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-blue-400">Encryption Layer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono">AES-256-GCM</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">Quantum-resistant ready</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-purple-400">Compliance Factor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono text-purple-400">100%</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">ISO 27001 / RGPD / HDS</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-amber-400">Access Key Rotation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono text-amber-400">4h 12m</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">Next scheduled cycle</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-black border-slate-800 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-blue-500 flex items-center gap-2">
                  <Fingerprint className="h-4 w-4" /> Sensitive Action Ledger
                </CardTitle>
                <CardDescription className="text-[9px]">Immutable blockchain-indexed audit trail</CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-600/10 text-blue-400 border-blue-500/20 text-[8px]">HDS CERTIFIED</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left">
                <thead className="bg-slate-900/80 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Action Type</th>
                    <th className="p-4 border-b border-slate-800">Identity</th>
                    <th className="p-4 border-b border-slate-800">Location</th>
                    <th className="p-4 border-b border-slate-800">Integrity Hash</th>
                    <th className="p-4 border-b border-slate-800 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "KEY_ROTATION_SUCCESS", user: "SYS_ADMIN", loc: "Sovereign_Cloud_FR", hash: "0x8f2...e1", status: "VERIFIED" },
                    { type: "DOC_ACCESS_SENSITIVE", user: "H. Chibubi", loc: "Secure_Tunnel_IP", hash: "0x4a1...c2", status: "LOGGED" },
                    { type: "MFA_TOKEN_GENERATED", user: "E. Vance", loc: "Mobile_Edge_04", hash: "0x9d3...f4", status: "VALID" }
                  ].map((log, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                      <td className="p-4 font-bold text-slate-200">{log.type}</td>
                      <td className="p-4 text-slate-400 font-mono">{log.user}</td>
                      <td className="p-4 text-slate-500">{log.loc}</td>
                      <td className="p-4 font-mono text-blue-500/60">{log.hash}</td>
                      <td className="p-4 text-right">
                        <Badge className="bg-emerald-600/20 text-emerald-500 border-none text-[7px]">{log.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Anomaly Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-[10px] font-black text-red-400 uppercase">Suspicious Access Attempt</p>
                <p className="text-[9px] text-slate-400 leading-tight mt-1">Non-compliant VPN detected from node REG-ASIA. Identity challenge initiated.</p>
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-500 uppercase">
                <span>Threat Score</span>
                <span className="text-emerald-400">LOW (0.02)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Key className="h-4 w-4" /> Conditional Access Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "MFA via Mobile Kit", status: "REQUIRED" },
                { label: "IP Geofencing", status: "ACTIVE" },
                { label: "Role RBAC Level 4", status: "ENFORCED" }
              ].map((p, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400">{p.label}</span>
                  <Badge variant="outline" className="text-[7px] border-blue-500/30 text-blue-400">{p.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
