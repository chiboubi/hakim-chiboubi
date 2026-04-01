"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, Play, Clock, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

const workflows = [
  { name: "Daily HSE Reporting", status: "RUNNING", progress: 85, trigger: "SCHEDULED: 08:00" },
  { name: "Jira-SAP Milestone Sync", status: "WAITING", progress: 0, trigger: "API_EVENT: TICKET_CLOSED" },
  { name: "Contractual Deviation Check", status: "COMPLETED", progress: 100, trigger: "MANUAL_BY_ADMIN" }
];

export const AutomatedWorkflows = () => (
  <Card className="bg-slate-900 border-slate-800 text-white">
    <CardHeader className="pb-3 border-b border-slate-800">
      <div className="flex justify-between items-center">
        <CardTitle className="text-sm font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
          <Workflow className="h-4 w-4" /> Intelligent Workflows
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500">3 ACTIVE</Badge>
          <RefreshCw className="h-3 w-3 text-slate-600 animate-spin-slow" />
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 space-y-3">
      {workflows.map((wf, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-slate-800/50 group hover:border-cyan-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className={cn(
              "h-8 w-8 rounded-lg flex items-center justify-center border",
              wf.status === 'RUNNING' ? "bg-blue-500/10 border-blue-500/30 text-blue-400" : 
              wf.status === 'COMPLETED' ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
              "bg-slate-800 border-slate-700 text-slate-500"
            )}>
              {wf.status === 'RUNNING' ? <Play className="h-4 w-4" /> : 
               wf.status === 'COMPLETED' ? <CheckCircle2 className="h-4 w-4" /> : 
               <Clock className="h-4 w-4" />}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-200">{wf.name}</p>
              <p className="text-[8px] text-slate-500 font-mono tracking-tighter">{wf.trigger}</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className={cn(
              "text-[7px] border-none px-2 h-4 uppercase",
              wf.status === 'RUNNING' ? "bg-blue-600" : 
              wf.status === 'COMPLETED' ? "bg-emerald-600" : 
              "bg-slate-700"
            )}>
              {wf.status}
            </Badge>
            <div className="w-24 h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div 
                className={cn("h-full transition-all duration-1000", wf.status === 'COMPLETED' ? "bg-emerald-500" : "bg-blue-500")} 
                style={{ width: `${wf.progress}%` }} 
              />
            </div>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

import { cn } from "@/lib/utils";
