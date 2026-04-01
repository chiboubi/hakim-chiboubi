"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck, MessageSquare, FileCheck, Search, Filter, Lock, ExternalLink } from "lucide-react";

const stakeholders = [
  { name: "Global Partners Ltd", role: "PARTNER", access: "FULL", status: "ACTIVE" },
  { name: "EcoLogistics Supply", role: "SUPPLIER", access: "FILTERED", status: "ACTIVE" },
  { name: "Alpha Venture Capital", role: "INVESTOR", access: "DASHBOARD", status: "ONLINE" },
  { name: "Port Authority", role: "AUTHORITY", access: "AUDIT_ONLY", status: "ACTIVE" }
];

export const StakeholderHub = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden h-full">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-purple-500 flex items-center gap-2">
                <Users className="h-4 w-4" /> Stakeholder Central Hub
              </CardTitle>
              <CardDescription className="text-[10px]">Managed access & collaboration portal for 5.5 projects</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="h-7 border-slate-800 text-[8px] font-black uppercase">
                <Filter className="h-3 w-3 mr-1" /> Filter Roles
              </Button>
              <Button size="sm" className="h-7 bg-purple-600 hover:bg-purple-700 text-[8px] font-black uppercase">
                Add Stakeholder
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-left text-[10px]">
              <thead className="bg-black/40 text-slate-500 uppercase font-black">
                <tr>
                  <th className="p-4 border-b border-slate-800">Entity Name</th>
                  <th className="p-4 border-b border-slate-800">Project Role</th>
                  <th className="p-4 border-b border-slate-800">Permissions</th>
                  <th className="p-4 border-b border-slate-800">Sync Status</th>
                  <th className="p-4 border-b border-slate-800">Action</th>
                </tr>
              </thead>
              <tbody>
                {stakeholders.map((s, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-all group">
                    <td className="p-4 font-bold text-slate-200">{s.name}</td>
                    <td className="p-4"><Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500">{s.role}</Badge></td>
                    <td className="p-4 font-mono text-slate-500 flex items-center gap-1">
                      <Lock className="h-2 w-2" /> {s.access}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="text-emerald-500 font-black uppercase">{s.status}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Button size="icon" variant="ghost" className="h-6 w-6 text-slate-600 hover:text-white">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <Card className="bg-purple-900/10 border border-purple-500/30 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Stakeholder Feedback Feed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { author: "Port Authority", text: "HSE Report for Q3 validated. Excellent compliance score.", time: "1h ago" },
              { author: "EcoLogistics", text: "Material delivery window for Sector Alpha confirmed for T-minus 2 days.", time: "4h ago" }
            ].map((f, i) => (
              <div key={i} className="p-3 bg-black/40 rounded border border-slate-800 space-y-1">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[9px] font-black text-purple-400 uppercase">{f.author}</p>
                  <span className="text-[8px] text-slate-600 font-mono">{f.time}</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight italic">"{f.text}"</p>
              </div>
            ))}
            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 font-bold text-[9px] uppercase h-8">
              Open Feedback Portal
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
              <FileCheck className="h-4 w-4" /> Document Validation Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { doc: "HSE_Protocol_Update.pdf", waiting: "Global Partners" },
              { doc: "Financial_Report_Q3.xlsx", waiting: "Investors" }
            ].map((d, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 text-[9px]">
                <div className="flex flex-col">
                  <span className="text-slate-300 font-bold">{d.doc}</span>
                  <span className="text-slate-600 italic">Waiting: {d.waiting}</span>
                </div>
                <Badge variant="outline" className="text-[7px] border-amber-500/20 text-amber-500">PENDING</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
