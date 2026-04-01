"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, BarChart3, Activity, LayoutGrid, Users, Briefcase, ChevronRight, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export const MissionControl = () => {
  return (
    <div className="space-y-6">
      {/* Executive KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Overall Progress", val: "84.2%", trend: "+2.4%", icon: Activity, color: "text-blue-400" },
          { label: "Budget Efficiency", val: "0.96 CPI", trend: "Stable", icon: Briefcase, color: "text-emerald-400" },
          { label: "Predictive Risk", val: "LOW (0.12)", trend: "-5%", icon: Target, color: "text-amber-400" },
          { label: "RGI Index", val: "94/100", trend: "+12", icon: BarChart3, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-slate-700 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3 w-3", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end">
                <div className="text-2xl font-black font-mono text-white">{stat.val}</div>
                <span className={cn("text-[10px] font-bold mb-1", stat.trend.includes('+') ? "text-emerald-500" : "text-slate-500")}>
                  {stat.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Strategic Dashboard: Forecast vs Real */}
        <Card className="lg:col-span-2 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-blue-500 flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4" /> MissionControl™ Strategic Cockpit
                </CardTitle>
                <CardDescription className="text-[10px]">Adaptive KPIs & Multi-role Project Steering</CardDescription>
              </div>
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-[8px] uppercase font-black">Forecast vs Real: ON</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp className="h-3 w-3" /> Execution Velocity
                </h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-bold mb-2">
                      <span className="text-slate-400 uppercase">Phase 1: Planning</span>
                      <span className="text-emerald-400">100% (TARGET MET)</span>
                    </div>
                    <Progress value={100} className="h-1.5 bg-slate-800" />
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold mb-2">
                      <span className="text-slate-400 uppercase">Phase 2: Construction</span>
                      <span className="text-blue-400">72% (EXPECTED: 68%)</span>
                    </div>
                    <Progress value={72} className="h-1.5 bg-slate-800" />
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold mb-2">
                      <span className="text-slate-400 uppercase">Phase 3: Commissioning</span>
                      <span className="text-amber-400">14% (DELAY RISK)</span>
                    </div>
                    <Progress value={14} className="h-1.5 bg-slate-800" />
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <p className="text-[10px] font-black uppercase text-amber-500 tracking-tighter">Strategic Gap Analysis</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "AI detects a divergence between D2 (Cost) and D8 (Ops) in the Norwegian sector. Suggesting 4.2% budget reallocation to optimize cryo-uptime."
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800">
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-9">
                    Approve Realignment
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Multi-Role Access & Team Insights */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2 border-b border-slate-800">
            <CardTitle className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
              <Users className="h-4 w-4" /> Role-Based Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            {[
              { role: "Project Director", task: "Review Strategic Roadmap", color: "border-blue-500" },
              { role: "Financial Manager", task: "Validate EAC Projections", color: "border-emerald-500" },
              { role: "HSE Engineer", task: "Audit Drone Scan Logs", color: "border-amber-500" },
              { role: "IT Architect", task: "Sync API Connectors", color: "border-purple-500" }
            ].map((user, i) => (
              <div key={i} className={cn("p-3 bg-black/40 rounded-xl border-l-2 hover:bg-black/60 transition-all group cursor-pointer", user.color)}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black text-slate-200 uppercase">{user.role}</p>
                    <p className="text-[9px] text-slate-500 italic mt-0.5">{user.task}</p>
                  </div>
                  <ChevronRight className="h-3 w-3 text-slate-700 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-slate-800">
               <p className="text-[8px] text-slate-600 font-bold uppercase text-center tracking-[0.2em]">All roles synchronized via BrainSync™</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
