"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Fingerprint, History, Search } from "lucide-react";

const auditLogs = [
  { user: "H. Chibubi", action: "MFA_AUTH_SUCCESS", target: "CORE_ENG_V60", time: "10:42:01", status: "VALID" },
  { user: "P. Ponselle", action: "DOC_COEDIT_JOIN", target: "S12_DRILLING_PV", time: "10:38:45", status: "SYNC" },
  { user: "System_AI", action: "SEMANTIC_CLASS_DONE", target: "HSE_REPORT_004", time: "10:35:12", status: "AUTO" },
  { user: "E. Vance", action: "RACI_ROLE_UPDATE", target: "PIPING_MODULE", time: "10:30:00", status: "LOGGED" },
];

export const SecurityAuditLog = () => (
  <Card className="bg-black border-slate-800 text-white shadow-2xl">
    <CardHeader className="border-b border-slate-800 pb-3">
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> Security & Access Trace
          </CardTitle>
          <CardDescription className="text-[9px] font-bold text-slate-600 uppercase">MFA Authenticated & Blockchain Logged Sessions</CardDescription>
        </div>
        <Lock className="h-4 w-4 text-emerald-500 animate-pulse" />
      </div>
    </CardHeader>
    <CardContent className="p-4 space-y-3">
      <div className="space-y-2">
        {auditLogs.map((log, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-slate-900/50 rounded border border-slate-800/50 group hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-3">
              <Fingerprint className="h-3 w-3 text-slate-500 group-hover:text-blue-400" />
              <div>
                <p className="text-[10px] font-bold text-slate-200">{log.action}</p>
                <p className="text-[8px] text-slate-500 font-mono">{log.user} @ {log.target}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[8px] text-slate-600 font-mono mb-1">{log.time}</p>
              <Badge variant="outline" className="text-[7px] border-slate-700 h-4">{log.status}</Badge>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
        <span className="text-[8px] font-mono text-slate-600 uppercase flex items-center gap-1">
          <History className="h-2 w-2" /> Retention: 10 Years Immutable
        </span>
        <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20 text-[7px] uppercase font-black">
          ISO 27001 Compliant
        </Badge>
      </div>
    </CardContent>
  </Card>
);
