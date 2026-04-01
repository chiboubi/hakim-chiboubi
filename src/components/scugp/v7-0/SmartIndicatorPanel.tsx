
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Activity, UserCheck, AlertTriangle, Zap, CheckCircle2, ChevronRight, Share2, Sparkles, LayoutGrid, FileText, Microscope, Globe, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SmartIndicatorPanel Component
 * Pillar 6: Vision Augmentée et Hyperanalyse.
 * Features automated insights, weekly bulletin, and prescriptive steering.
 */
export const SmartIndicatorPanel = () => {
  return (
    <div className="space-y-6">
      {/* Smart KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "OKR Progress", val: "92.4%", trend: "+4%", icon: LayoutGrid, color: "text-blue-400" },
          { label: "Project Stress", val: "LOW (0.14)", trend: "Stable", icon: Activity, color: "text-amber-400" },
          { label: "Prescriptive Conf.", val: "0.98", trend: "+0.02", icon: Gauge, color: "text-emerald-400" },
          { label: "Auto-Calibration", val: "ACTIVE", trend: "100%", icon: Zap, color: "text-cyan-400" }
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
        {/* Weekly AI Summary Report */}
        <Card className="lg:col-span-2 bg-slate-950 border-2 border-blue-500/20 text-white shadow-2xl overflow-hidden h-full flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-blue-500/5 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Weekly Intelligence Bulletin (WIB)
              </CardTitle>
              <CardDescription className="text-[10px]">Auto-generated Hyperanalysis & Prescriptive Insights</CardDescription>
            </div>
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-[8px] uppercase tracking-widest">W14 REPORT: READY</Badge>
          </CardHeader>
          <CardContent className="p-6 space-y-6 flex-1">
            <div className="space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5"><Microscope className="h-12 w-12 text-blue-400" /></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[9px] font-black text-blue-400 uppercase">Executive Synthesis</span>
                  <span className="text-[8px] text-slate-600 font-mono">10:42 AM</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed relative z-10">
                  "Hyperanalysis confirms a 94% correlation between Logistics Uptime and Engineering through-put. Prescriptive Engine suggests immediate execution of Scenario B: 'Arctic Path Alpha' to bypass predicted supply chain friction. OKR 'Target Net Zero' is now 94.2% on track."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20 group hover:bg-emerald-500/10 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    <p className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Prescriptive Win</p>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">"Autonomous correction of Valve fatigue predicted 72h ago successfully averted downtime."</p>
                </div>
                <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/20 group hover:bg-amber-500/10 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-3 w-3 text-amber-500" />
                    <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest">Weak Signal Alert</p>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">"Micro-vibration peak detected in Sector Alpha. Possible sub-contractor misalignment in Module 12."</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t border-slate-800 bg-slate-900/30 flex justify-between">
             <Button variant="ghost" size="sm" className="text-[9px] font-black uppercase text-slate-500 hover:text-white">
                <Share2 className="h-3 w-3 mr-2" /> Broadcast Bulletin
             </Button>
             <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-700 text-[9px] font-black uppercase h-8 px-4">
                   <Globe className="h-3 w-3 mr-2" /> Correlation Map
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-[9px] font-black uppercase h-8 px-6">
                   <FileText className="h-3 w-3 mr-2" /> Full Prescriptive Report
                </Button>
             </div>
          </CardFooter>
        </Card>

        {/* Project Stress & Morale Monitoring */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2 border-b border-slate-800">
            <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
              <Activity className="h-4 w-4" /> Sentiment & Stress Mesh
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-6">
            <div className="flex flex-col items-center py-4">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 rounded-full border-8 border-slate-800" />
                <div className="absolute inset-0 rounded-full border-8 border-emerald-500 border-t-transparent animate-spin-slow opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Team Alignment</p>
                  <p className="text-2xl font-black font-mono text-white">0.94</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-2 uppercase">
                  <span className="text-slate-400">Cognitive Load (Team)</span>
                  <span className="text-emerald-400">LOW</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[24%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-2 uppercase">
                  <span className="text-slate-400">Collaborative Morale</span>
                  <span className="text-blue-400">POSITIVE</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[88%]" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-center">
              <p className="text-[9px] text-slate-500 font-bold uppercase mb-1">AI Recommendation:</p>
              <p className="text-[10px] text-slate-400 italic">"Team sentiment is stable. Recommend maintaining current sprint velocity."</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
