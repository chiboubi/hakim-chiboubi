"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClipboardCheck, ShieldCheck, AlertCircle, FileCheck, Search, Zap } from "lucide-react";

export const ComplianceAuditUI = () => (
  <Card className="bg-black/40 border-slate-800 text-white shadow-2xl h-full">
    <CardHeader className="border-b border-slate-800">
      <CardTitle className="text-sm font-black uppercase text-emerald-500 flex items-center gap-2">
        <ClipboardCheck className="h-4 w-4" /> Audit & Conformité
      </CardTitle>
      <CardDescription className="text-[10px]">Real-time ISO/API Regulatory Alerts</CardDescription>
    </CardHeader>
    <CardContent className="p-4 space-y-6">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-[10px] font-black uppercase mb-1">
            <span className="text-slate-500">ISO 14064 Traceability</span>
            <span className="text-emerald-400">94%</span>
          </div>
          <Progress value={94} className="h-1.5 bg-slate-800" />
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-black uppercase mb-1">
            <span className="text-slate-500">API Standard Compliance</span>
            <span className="text-blue-400">88%</span>
          </div>
          <Progress value={88} className="h-1.5 bg-slate-800" />
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-slate-800">
        <p className="text-[9px] font-black text-slate-500 uppercase">Regulatory Alerts</p>
        <div className="p-2 bg-amber-900/20 rounded border border-amber-500/20 flex items-start gap-2">
          <AlertCircle className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-[9px] font-bold text-amber-200 uppercase">Renewal Required</p>
            <p className="text-[8px] text-slate-400 leading-tight">ISO 27001 Key validation pending for sub-contractor EPC_VANCE.</p>
          </div>
        </div>
        <div className="p-2 bg-emerald-900/20 rounded border border-emerald-500/20 flex items-start gap-2">
          <FileCheck className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-[9px] font-bold text-emerald-200 uppercase">Audit Completed</p>
            <p className="text-[8px] text-slate-400 leading-tight">Bi-weekly HSE inspection verified via drone sync.</p>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-2">
        <Button size="sm" variant="outline" className="w-full text-[9px] h-8 border-slate-700 font-black uppercase tracking-widest">
          Generate ESG Report
        </Button>
        <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 h-8 text-[9px] font-black uppercase tracking-widest">
          Run Global Audit
        </Button>
      </div>
    </CardContent>
  </Card>
);
