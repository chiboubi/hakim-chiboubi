"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LayoutGrid, Target, Clock, AlertTriangle, GitBranch, Terminal, Users } from "lucide-react";

export const AgileExecutionUI = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Kanban IT Teams */}
      <Card className="bg-slate-900 border-slate-800 lg:col-span-2">
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2">
              <Terminal className="h-4 w-4" /> IT Agile Kanban (Internal & External)
            </CardTitle>
            <CardDescription className="text-[10px]">Active Sprint: IT_INFRA_HYBRID_V2</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-blue-600/20 text-blue-500 border-blue-500/30 text-[8px]">SAP SYNC</Badge>
            <Badge className="bg-emerald-600/20 text-emerald-500 border-emerald-500/30 text-[8px]">JIRA LIVE</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 h-64">
            {['BACKLOG', 'IN DEV', 'UAT / QA'].map((col) => (
              <div key={col} className="bg-black/20 rounded p-2 border border-slate-800 flex flex-col gap-2">
                <p className="text-[8px] font-black uppercase text-slate-500 mb-1">{col}</p>
                {col === 'IN DEV' && (
                  <div className="space-y-2">
                    <div className="p-2 bg-slate-800 rounded border-l-2 border-cyan-500 text-[9px] font-bold shadow-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span>API_SAP_CONN</span>
                        <Badge variant="outline" className="text-[7px] border-slate-700">EXT_TEAM</Badge>
                      </div>
                      <div className="h-1 bg-slate-700 rounded mt-2">
                        <div className="h-full bg-cyan-500 w-[65%]" />
                      </div>
                    </div>
                    <div className="p-2 bg-slate-800 rounded border-l-2 border-blue-500 text-[9px] font-bold shadow-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span>UI_DASHBOARD_V3</span>
                        <Badge variant="outline" className="text-[7px] border-slate-700">INT_DEV</Badge>
                      </div>
                      <div className="h-1 bg-slate-700 rounded mt-2">
                        <div className="h-full bg-blue-500 w-[40%]" />
                      </div>
                    </div>
                  </div>
                )}
                {col === 'UAT / QA' && (
                  <div className="p-2 bg-emerald-900/20 rounded border-l-2 border-emerald-500 text-[9px] font-bold opacity-80">
                    MFA_AUTH_GATEWAY
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk & Blocker Reduction */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-sm font-black uppercase text-amber-500 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" /> Blocker Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
            <p className="text-[10px] font-black text-emerald-500 uppercase">Blocker Reduction</p>
            <p className="text-3xl font-black text-white">-30%</p>
            <p className="text-[8px] text-slate-500 mt-1 uppercase">Since SCUGP Integration</p>
          </div>
          <div className="space-y-3">
            <div className="p-2 bg-red-900/20 rounded border border-red-500/30">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-black text-red-400">SAP_CREDENTIALS</span>
                <Badge className="bg-red-500 text-white text-[7px] h-3 px-1">BLOCKED</Badge>
              </div>
              <Progress value={90} className="h-1 bg-slate-800" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Project Contribution Summary */}
    <Card className="bg-slate-900 border-slate-800 overflow-hidden">
      <CardHeader className="pb-2 border-b border-slate-800">
        <CardTitle className="text-sm font-black uppercase text-slate-400 flex items-center gap-2">
          <Users className="h-4 w-4" /> Stakeholder Contribution Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Internal IT", val: "45%", color: "bg-blue-500" },
            { label: "External Partners", val: "35%", color: "bg-cyan-500" },
            { label: "Business Actors", val: "15%", color: "bg-emerald-500" },
            { label: "Governance", val: "5%", color: "bg-purple-500" }
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[9px] font-bold uppercase">
                <span className="text-slate-500">{item.label}</span>
                <span className="text-white">{item.val}</span>
              </div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className={cn("h-full", item.color)} style={{ width: item.val }} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

import { cn } from "@/lib/utils";
