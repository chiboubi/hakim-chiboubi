"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GitBranch, Box, Repeat, Rocket, Activity } from "lucide-react";

export const AgileDevOpsMonitor = () => (
  <Card className="bg-slate-900 border-slate-800 text-white">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-black uppercase tracking-widest text-emerald-400 flex items-center gap-2">
        <Activity className="h-4 w-4" /> Agile & DevOps Command
      </CardTitle>
      <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Real-time Sprint Velocity & Pipeline Status</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-black/40 rounded-lg border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold text-slate-500 uppercase">Sprint Progress</span>
            <span className="text-xs font-mono text-emerald-400">72%</span>
          </div>
          <Progress value={72} className="h-1 bg-slate-800" />
        </div>
        <div className="p-3 bg-black/40 rounded-lg border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold text-slate-500 uppercase">Velocity</span>
            <span className="text-xs font-mono text-blue-400">45 pts</span>
          </div>
          <Progress value={85} className="h-1 bg-slate-800" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 bg-slate-950/50 rounded border border-slate-800">
          <div className="flex items-center gap-2">
            <GitBranch className="h-3 w-3 text-purple-400" />
            <span className="text-[10px] font-bold">Main Branch Pipeline</span>
          </div>
          <Badge className="bg-emerald-600/20 text-emerald-500 border-emerald-500/30 text-[8px]">STABLE</Badge>
        </div>
        <div className="flex items-center justify-between p-2 bg-slate-950/50 rounded border border-slate-800">
          <div className="flex items-center gap-2">
            <Box className="h-3 w-3 text-blue-400" />
            <span className="text-[10px] font-bold">Docker Deployment: v3.5.2</span>
          </div>
          <Badge className="bg-blue-600/20 text-blue-500 border-blue-500/30 text-[8px]">ACTIVE</Badge>
        </div>
      </div>

      <div className="pt-2 flex justify-between items-center text-[8px] font-mono text-slate-600">
        <span className="flex items-center gap-1"><Repeat className="h-2 w-2" /> RECOVERY: 0.4s</span>
        <span className="flex items-center gap-1"><Rocket className="h-2 w-2" /> RELEASE: PROD_STABLE</span>
      </div>
    </CardContent>
  </Card>
);
