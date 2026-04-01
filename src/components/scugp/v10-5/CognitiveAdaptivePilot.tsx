"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Sparkles, HeartPulse, Activity, UserCheck, RefreshCw, Bot, MessageSquare, ShieldCheck, Microscope } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const CognitiveAdaptivePilot = () => {
  const [teamStress, setStress] = useState(14);
  const [syncLevel, setSync] = useState(98.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setStress(prev => Math.max(10, Math.min(40, prev + (Math.random() > 0.5 ? 1 : -1))));
      setSync(prev => Math.min(100, prev + 0.01));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-slate-900 border-2 border-purple-500/30 text-white shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden rounded-[3rem]">
      <CardHeader className="bg-purple-500/10 border-b border-slate-800 p-8">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-purple-400 flex items-center gap-3">
              <Brain className="h-6 w-6 animate-pulse" /> Cognitive Adaptive Pilot 10.5
            </CardTitle>
            <CardDescription className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-widest">Psychology-Aware AI Steering & Self-Correcting Task Mesh</CardDescription>
          </div>
          <Badge className="bg-purple-600 text-white border-none px-6 py-1 text-[10px] font-black shadow-[0_0_20px_rgba(168,85,247,0.4)]">SINGULARITY_ACTIVE</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-black/40 rounded-[2rem] border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black text-slate-500 uppercase">Team Stress Index</p>
              <HeartPulse className={cn("h-4 w-4", teamStress > 30 ? "text-red-500" : "text-emerald-500")} />
            </div>
            <div className="text-3xl font-black font-mono">{teamStress}%</div>
            <Progress value={teamStress} className="h-1 bg-slate-800" />
            <p className="text-[8px] text-slate-600 italic">"AI adjusted sprint velocity to protect mental load."</p>
          </div>

          <div className="p-6 bg-black/40 rounded-[2rem] border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black text-slate-500 uppercase">A2A Negotiation</p>
              <RefreshCw className="h-4 w-4 text-blue-400 animate-spin-slow" />
            </div>
            <div className="text-3xl font-black font-mono text-blue-400">ACTIVE</div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-1 bg-blue-500 rounded-full" />)}
            </div>
            <p className="text-[8px] text-slate-600 italic">"Autonomous resource arbitrage in progress..."</p>
          </div>

          <div className="p-6 bg-black/40 rounded-[2rem] border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black text-slate-500 uppercase">Neural Convergence</p>
              <Zap className="h-4 w-4 text-amber-400" />
            </div>
            <div className="text-3xl font-black font-mono text-emerald-400">{syncLevel.toFixed(2)}%</div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${syncLevel}%` }} />
            </div>
            <p className="text-[8px] text-slate-600 italic">"Global SCUGP Knowledge Mesh synchronized."</p>
          </div>
        </div>

        <div className="p-8 bg-black/60 rounded-[3rem] border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%) pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
            <h4 className="text-sm font-black uppercase text-purple-400 tracking-[0.2em]">Ultra-Singular Prescription</h4>
          </div>
          <div className="space-y-6">
            <p className="text-base text-slate-200 leading-relaxed italic border-l-4 border-purple-500/50 pl-8 py-2 font-medium">
              "System has detected a decline in 'Creative Engagement' within the IT Mesh. I have autonomously initiated a 4-hour 'Deep Focus' block for Node-A and re-assigned routine Jira-sync tasks to Bot-Cluster-7. This arbitrage maintains 100% milestone integrity while reducing burnout risk by 18%."
            </p>
            <div className="flex gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-[10px] font-black uppercase h-12 px-10 rounded-2xl shadow-2xl tracking-widest">Seal Decision</Button>
              <Button variant="outline" className="border-slate-700 text-[10px] font-black uppercase h-12 px-10 rounded-2xl hover:bg-slate-800">Review A2A Logic</Button>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-slate-950 p-6 border-t border-slate-800 flex justify-between items-center px-10">
        <div className="flex gap-12">
          <div className="flex items-center gap-3">
            <Microscope className="h-5 w-5 text-blue-400" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cognitive Model: V10.5-ADAPT</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ethical Compliance: 100%</span>
          </div>
        </div>
        <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[9px] px-4">MEMORY_HORIZON: INFINITE</Badge>
      </CardFooter>
    </Card>
  );
};
