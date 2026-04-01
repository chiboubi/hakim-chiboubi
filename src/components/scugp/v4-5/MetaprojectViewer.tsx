"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, GitBranch, ArrowUpRight, AlertCircle, Share2, Layers } from "lucide-react";

const projects = [
  { id: "P1", name: "FPSO Angola 2026", status: "NOMINAL", sync: "100%", links: 4 },
  { id: "P2", name: "Arctic S12 Drilling", status: "RISK_ALERT", sync: "92%", links: 7 },
  { id: "P3", name: "MZ-41 H2 Conversion", status: "INITIALIZED", sync: "100%", links: 2 }
];

export const MetaprojectViewer = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <div className="lg:col-span-8">
      <Card className="bg-slate-950 border-2 border-cyan-500/20 text-white h-[500px] relative overflow-hidden group">
        <CardHeader className="bg-black/40 border-b border-slate-800 z-10 relative">
          <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2">
            <Network className="h-4 w-4" /> Metaproject Ecosystem Visualization
          </CardTitle>
          <CardDescription className="text-[10px]">Interconnected Systems & Cross-Project Dependencies</CardDescription>
        </CardHeader>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[400px] h-[400px] rounded-full border border-cyan-500/30 animate-spin-slow" />
          <div className="absolute w-[250px] h-[250px] rounded-full border border-purple-500/30 animate-reverse-spin" />
        </div>

        <div className="relative p-8 h-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <div key={i} className="flex flex-col items-center space-y-3 group/node">
                <div className={cn(
                  "h-16 w-16 rounded-2xl flex items-center justify-center border-2 shadow-lg transition-all duration-500 group-hover/node:scale-110",
                  p.status === 'RISK_ALERT' ? "bg-red-500/10 border-red-500 shadow-red-500/20" : "bg-cyan-500/10 border-cyan-500 shadow-cyan-500/20"
                )}>
                  <Layers className={cn("h-6 w-6", p.status === 'RISK_ALERT' ? "text-red-400" : "text-cyan-400")} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase">{p.name}</p>
                  <p className="text-[8px] text-slate-500 font-mono">Links: {p.links} | Sync: {p.sync}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 p-4 bg-black/60 rounded-xl border border-slate-800 backdrop-blur-md">
            <p className="text-[9px] font-mono text-cyan-500 uppercase font-black text-center mb-2">Cross-Effect Detected</p>
            <div className="flex items-center gap-3 text-[8px] font-bold text-slate-400">
              <span>Project P1</span>
              <ArrowUpRight className="h-2 w-2 text-amber-500" />
              <span className="text-amber-500">Delay Propagation (D1)</span>
              <ArrowUpRight className="h-2 w-2 text-amber-500" />
              <span>Project P2</span>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <div className="lg:col-span-4 space-y-6">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" /> Systemic Risk Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            <p className="text-[10px] font-bold text-red-200 uppercase mb-1">Ripple Effect: Resource Lack</p>
            <p className="text-[9px] text-slate-400 leading-tight">Shortage of EPC specialists in Angola impacts HSE Audit schedules in Arctic S12.</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] font-bold uppercase">
              <span className="text-slate-500">Global Resilience Score</span>
              <span className="text-emerald-400">84%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[84%]" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
            <Share2 className="h-4 w-4" /> Federated Approvals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { label: "Cross-Entity Budget", status: "PENDING", role: "ADMIN_LEVEL_3" },
            { label: "Metaproject Security Scan", status: "VALIDATED", role: "AI_SYSTEM" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-200">{item.label}</span>
                <span className="text-[7px] text-slate-600 font-mono">{item.role}</span>
              </div>
              <Badge variant="outline" className="text-[7px] h-4 border-slate-700">{item.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

import { cn } from "@/lib/utils";
