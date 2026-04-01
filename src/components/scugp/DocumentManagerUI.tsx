"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Search, Brain, Zap, History, ShieldCheck, Database, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const mockDocs = [
  { id: "DOC-442", name: "HSE_Protocol_Arctic_V6.pdf", class: "Safety_Critical", sync: "100%", version: "v2.1" },
  { id: "DOC-109", name: "Procurement_Sync_Jira.json", class: "Strategic_Planning", sync: "Synced", version: "v1.0" },
  { id: "DOC-882", name: "Zinia_Phase2_Design.dwg", class: "Engineering", sync: "Cloud", version: "v4.2" }
];

export const DocumentManagerUI = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-blue-400">Semantic Engine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold font-mono">ACTIVE</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">Vector Index: 14,200 nodes</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-amber-400">Auto-Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold font-mono">98.4%</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">Accuracy Rating</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-emerald-400">OCR Extraction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold font-mono">ENABLED</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">ISO-15926 Compliant</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-purple-400">Version Trace</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold font-mono">IMMUTABLE</div>
            <p className="text-[8px] text-slate-500 uppercase mt-1">Blockchain Logged</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="border-b border-slate-800">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-black uppercase flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-500" />
                  Smart Document Vault
                </CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-3 w-3 text-slate-500" />
                  <Input 
                    placeholder="Semantic search..." 
                    className="pl-7 bg-black/50 border-slate-800 h-8 text-[10px] font-mono"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[10px]">
                  <thead className="bg-black/40 text-slate-500 uppercase font-black">
                    <tr>
                      <th className="p-4 border-b border-slate-800">Document Name</th>
                      <th className="p-4 border-b border-slate-800">AI Classification</th>
                      <th className="p-4 border-b border-slate-800">Version</th>
                      <th className="p-4 border-b border-slate-800">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockDocs.map((doc, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 font-bold flex items-center gap-2">
                          <FileText className="h-3 w-3 text-slate-400" /> {doc.name}
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className="text-[8px] border-blue-500/30 text-blue-400">{doc.class}</Badge>
                        </td>
                        <td className="p-4 font-mono text-slate-500">{doc.version}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-emerald-500 uppercase font-black">{doc.sync}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-blue-900/20 border-blue-500/30 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Brain className="h-4 w-4" /> AI Document Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-black/40 rounded border border-slate-800">
                <p className="text-[10px] text-slate-300 italic">"I have classified 12 new uploads. Three documents regarding 'Arctic Insulation' have been flagged for HSE discrepancy check."</p>
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 font-bold text-[10px] uppercase">
                Run Compliance Check
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <History className="h-4 w-4" /> Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { act: "RE-CLASSIFIED", target: "Module_12_PV", time: "2m ago" },
                { act: "SYNCED", target: "Jira_Epic_44", time: "15m ago" },
                { act: "OCR_DONE", target: "Contract_Scan_01", time: "1h ago" }
              ].map((a, i) => (
                <div key={i} className="flex justify-between items-center text-[9px]">
                  <span className="text-slate-400 font-bold">{a.act} <span className="text-white">{a.target}</span></span>
                  <span className="text-slate-600 font-mono">{a.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
