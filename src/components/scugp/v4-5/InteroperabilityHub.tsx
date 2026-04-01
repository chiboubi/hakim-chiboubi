"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Share2, Database, ShieldCheck, Zap, Globe, Layout } from "lucide-react";

const connectors = [
  { name: "SAP S/4HANA", type: "ERP", status: "CONNECTED", latency: "14ms", protocol: "REST/SOAP" },
  { name: "Notion API", type: "DB", status: "SYNCED", latency: "2ms", protocol: "GRAPHQL" },
  { name: "Zapier / Make", type: "AUTO", status: "ACTIVE", latency: "Instant", protocol: "WEBHOOK" },
  { name: "Power BI", type: "VIZ", status: "CONNECTED", latency: "Refresh: 1h", protocol: "ODATA" }
];

export const InteroperabilityHub = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-purple-400">API Handshake</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold font-mono text-purple-300">SECURE</div>
          <p className="text-[8px] text-slate-500 uppercase mt-1">AES-256 Encrypted Tunnel</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-cyan-400">Data Harvesting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold font-mono text-cyan-300">ACTIVE</div>
          <p className="text-[8px] text-slate-500 uppercase mt-1">12.4 GB/Hour ingested</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-emerald-400">Sync Integrity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold font-mono text-emerald-300">100%</div>
          <p className="text-[8px] text-slate-500 uppercase mt-1">Blockchain Logged Tx</p>
        </CardContent>
      </Card>
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-amber-400">Meta-Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold font-mono text-amber-300">142</div>
          <p className="text-[8px] text-slate-500 uppercase mt-1">Project Cross-Effects</p>
        </CardContent>
      </Card>
    </div>

    <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden">
      <CardHeader className="border-b border-slate-800 bg-slate-950/50">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 flex items-center gap-2">
              <Link2 className="h-4 w-4" /> Ecosystem Connectors (API+)
            </CardTitle>
            <CardDescription className="text-[9px] font-bold text-slate-600 uppercase">Unified Interface for External Project Data</CardDescription>
          </div>
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-[8px] uppercase tracking-widest">Live Connect</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <table className="w-full text-[10px]">
          <thead className="bg-black/40 text-slate-500 uppercase font-black">
            <tr>
              <th className="p-4 text-left border-b border-slate-800">Service</th>
              <th className="p-4 text-left border-b border-slate-800">Type</th>
              <th className="p-4 text-left border-b border-slate-800">Latency</th>
              <th className="p-4 text-left border-b border-slate-800">Protocol</th>
              <th className="p-4 text-right border-b border-slate-800">Status</th>
            </tr>
          </thead>
          <tbody>
            {connectors.map((c, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-all group">
                <td className="p-4 font-bold text-slate-200 flex items-center gap-2">
                  <Database className="h-3 w-3 text-slate-500 group-hover:text-purple-400" /> {c.name}
                </td>
                <td className="p-4"><Badge variant="outline" className="text-[7px] border-slate-700">{c.type}</Badge></td>
                <td className="p-4 font-mono text-slate-500">{c.latency}</td>
                <td className="p-4 font-mono text-[8px] text-slate-600">{c.protocol}</td>
                <td className="p-4 text-right">
                  <span className="inline-flex items-center gap-1.5 text-emerald-500 font-black uppercase">
                    <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  </div>
);
