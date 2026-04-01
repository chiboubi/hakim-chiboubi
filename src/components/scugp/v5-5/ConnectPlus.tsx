"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Share2, Database, ShieldCheck, Zap, Globe, Layout, Cpu, Network } from "lucide-react";

const connectors = [
  { name: "SIG (ArcGIS/QGIS)", type: "GEO", status: "CONNECTED", sync: "Real-time" },
  { name: "BIM / IFC 3D", type: "TECH", status: "SYNCED", sync: "0.2s Latency" },
  { name: "SCADA / Field IoT", type: "DATA", status: "ACTIVE", sync: "14,200 Nodes" },
  { name: "n8n / Zapier Hub", type: "AUTO", status: "CONNECTED", sync: "42 Workflows" },
  { name: "Petrel / Eclipse", type: "BIZ", status: "WAITING", sync: "On Demand" },
  { name: "SAP / Financials", type: "ERP", status: "SYNCED", sync: "Daily Batch" }
];

export const ConnectPlus = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden">
        <CardHeader className="border-b border-slate-800 bg-slate-950/50">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-cyan-500 flex items-center gap-2">
                <Network className="h-4 w-4" /> SCUGP Connect+ Ecosystem
              </CardTitle>
              <CardDescription className="text-[9px] font-bold text-slate-600 uppercase">Hyper-Interconnectivity Hub for 5.5 Infrastructure</CardDescription>
            </div>
            <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30 text-[8px] uppercase tracking-widest">Global Handshake Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {connectors.map((c, i) => (
              <div key={i} className="p-6 border-b border-r border-slate-800 hover:bg-slate-800/30 transition-all group cursor-default">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-cyan-500/30">
                    <Database className="h-4 w-4 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 uppercase">{c.type}</Badge>
                </div>
                <h4 className="text-xs font-black text-slate-200 mb-1">{c.name}</h4>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1.5">
                    <div className={cn(
                      "h-1.5 w-1.5 rounded-full animate-pulse",
                      c.status === 'CONNECTED' || c.status === 'SYNCED' || c.status === 'ACTIVE' ? "bg-emerald-500" : "bg-amber-500"
                    )} />
                    <span className="text-[8px] font-black uppercase text-slate-400">{c.status}</span>
                  </div>
                  <span className="text-[8px] font-mono text-slate-600">{c.sync}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-4 space-y-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xs font-black uppercase text-cyan-400">API Handshake Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
              <p className="text-[9px] text-slate-500 uppercase font-bold mb-3">Total Data Ingested (24h)</p>
              <p className="text-2xl font-black font-mono text-cyan-400">142.8 GB</p>
              <p className="text-[8px] text-emerald-500 font-bold mt-1 uppercase">↑ 12% vs last period</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
              <p className="text-[9px] text-slate-500 uppercase font-bold mb-3">Active API Tunnels</p>
              <div className="flex gap-1">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="h-4 w-1 bg-cyan-500/40 rounded-full" />
                ))}
                <div className="h-4 w-1 bg-slate-800 rounded-full" />
                <div className="h-4 w-1 bg-slate-800 rounded-full" />
              </div>
              <p className="text-[8px] text-slate-600 mt-2 font-mono uppercase">Status: 8/10 OPTIMIZED</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-cyan-900/10 border border-cyan-500/30">
          <CardHeader>
            <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center gap-2">
              <Link2 className="h-3 w-3" /> Connect+ Integration Hub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[10px] text-slate-400 leading-relaxed italic">
              "Unified data mesh architecture ensures 100% interoperability between SIG, BIM and field telemetry."
            </p>
            <Button size="sm" variant="outline" className="w-full mt-4 border-cyan-500/30 text-cyan-400 text-[9px] font-black uppercase h-8">
              Open Connector Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

import { cn } from "@/lib/utils";
