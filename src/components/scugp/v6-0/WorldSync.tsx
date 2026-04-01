"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Languages, Share2, ShieldAlert, FileCheck, Search, Filter, MessageSquare, Briefcase } from "lucide-react";

const partners = [
  { name: "TotalEnergies", role: "Operator", sync: "100%", status: "FEDERATED" },
  { name: "EPC Contractors Ltd", role: "Main Contractor", sync: "92%", status: "CONNECTED" },
  { name: "Global Logistics", role: "Supplier", sync: "Synced", status: "GUEST" }
];

export const WorldSync = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden h-full flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                <Globe className="h-4 w-4" /> WorldSync™ Federated Collaboration
              </CardTitle>
              <CardDescription className="text-[10px]">Inter-organizational Space & Multi-Company Trust</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-[8px] uppercase tracking-widest">Smart Contracts Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-black/40 text-slate-500 uppercase font-black">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Organization</th>
                    <th className="p-4 border-b border-slate-800">Project Role</th>
                    <th className="p-4 border-b border-slate-800">Data Integrity</th>
                    <th className="p-4 border-b border-slate-800 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((p, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-all group cursor-default">
                      <td className="p-4 font-bold text-slate-200 flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-slate-800 flex items-center justify-center text-[8px] font-black text-slate-500">{p.name.substring(0,2)}</div>
                        {p.name}
                      </td>
                      <td className="p-4 text-slate-400 uppercase font-bold">{p.role}</td>
                      <td className="p-4 font-mono text-emerald-500/70">{p.sync}</td>
                      <td className="p-4 text-right">
                        <Badge variant="outline" className={cn(
                          "text-[7px] border-slate-700 uppercase",
                          p.status === 'FEDERATED' ? "text-emerald-400 border-emerald-500/20" : "text-slate-500"
                        )}>{p.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <div className="p-4 bg-slate-950 border-t border-slate-800">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2">
                      <Languages className="h-3 w-3 text-blue-400" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Live Translation: ACTIVE</span>
                   </div>
                   <div className="h-4 w-[1px] bg-slate-800" />
                   <div className="flex items-center gap-2">
                      <Share2 className="h-3 w-3 text-purple-400" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Fedarated Auth: OK</span>
                   </div>
                </div>
                <Button size="sm" variant="outline" className="h-7 border-slate-700 text-[8px] font-black uppercase">Manage Access Keys</Button>
             </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Cross-Org Dialogue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-black/40 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-black text-emerald-500 uppercase">EPC Contractors</span>
                  <span className="text-[7px] text-slate-600 font-mono">10:42 AM</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight italic">
                  "Phase 2 schedule realigned. Requesting blockchain certification for DEC-004."
                </p>
              </div>
              <div className="p-3 bg-blue-600/5 rounded-xl border border-blue-500/20 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-black text-blue-400 uppercase">System (AI)</span>
                  <span className="text-[7px] text-slate-600 font-mono">JUST NOW</span>
                </div>
                <p className="text-[10px] text-slate-300 leading-tight">
                  "Auto-translating to English/French/Portuguese... Request logged in Audit Trail #4530."
                </p>
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-[9px] font-black uppercase h-8">Open Secure Chat</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Shared Governance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Joint Venture Agreement", status: "VALIDATED", icon: FileCheck },
                { label: "Safety Liability Protocol", status: "REVIEW_PENDING", icon: ShieldAlert }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 text-[9px] group hover:border-amber-500/30 transition-all">
                  <div className="flex items-center gap-2">
                    <item.icon className={cn("h-3 w-3", item.status === 'VALIDATED' ? "text-emerald-500" : "text-amber-500")} />
                    <span className="text-slate-300 font-bold uppercase">{item.label}</span>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[7px] border-none px-1 h-3",
                    item.status === 'VALIDATED' ? "text-emerald-500" : "text-amber-500"
                  )}>{item.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
