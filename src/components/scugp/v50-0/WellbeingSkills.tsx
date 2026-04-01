
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeartPulse, BrainCircuit, Users, Star, Sparkles, MessageSquare, ShieldCheck, Activity, GraduationCap } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const WellbeingSkills = () => {
  const metrics = SCUGPHubUltimate.getWellbeingMetrics();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-2 border-red-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden">
            <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between px-10 py-8">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-red-400 flex items-center gap-4">
                  <HeartPulse className="h-6 w-6 animate-pulse" /> Wellbeing & Cognitive Resilience
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500 mt-2">Team Burnout Protection & Emotional AGI Feedback</CardDescription>
              </div>
              <Badge className="bg-red-600/20 text-red-400 border-red-500/30 text-[9px] animate-pulse uppercase px-6 py-1.5 tracking-widest">MENTAL_LOAD: {metrics.cognitiveLoad}</Badge>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 space-y-6 shadow-inner">
                  <div className="flex justify-between items-center text-red-400">
                    <h4 className="text-sm font-black uppercase tracking-widest">Cognitive Load Dashboard</h4>
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-black uppercase">
                        <span className="text-slate-500">Engineering Load</span>
                        <span className="text-white">12%</span>
                      </div>
                      <Progress value={12} className="h-1 bg-slate-800" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-black uppercase">
                        <span className="text-slate-500">Logistics Load</span>
                        <span className="text-amber-400">42%</span>
                      </div>
                      <Progress value={42} className="h-1 bg-slate-800" />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">"Autonomous detection of node cognitive peaks before burnout thresholds."</p>
                </div>

                <div className="p-8 bg-black/40 rounded-[2.5rem] border border-slate-800 space-y-6 shadow-inner flex flex-col justify-center text-center">
                  <BrainCircuit size={48} className="text-blue-400 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-lg font-black uppercase text-blue-400 tracking-[0.2em]">IA Mentoring Core</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed italic">
                    "AI Coach has initiated 42 personalized learning loops this week. Helping team members adapt to Digital Twin 2.0 interface shifts."
                  </p>
                  <Button size="sm" variant="outline" className="mt-4 border-blue-500/30 text-blue-400 text-[10px] font-black uppercase rounded-xl h-10">Access Coach Dialogue</Button>
                </div>
              </div>

              <div className="p-10 bg-red-500/5 rounded-[3rem] border border-red-500/20 text-center space-y-6">
                <div className="flex items-center justify-center gap-4 text-emerald-500">
                  <ShieldCheck className="h-6 w-6" />
                  <h4 className="text-sm font-black uppercase tracking-[0.3em]">Committees of Practice (CoP)</h4>
                </div>
                <div className="grid grid-cols-3 gap-6">
                   {['HSE Excellence', 'BIM Innovation', 'Energy Pivot'].map(cop => (
                     <div key={cop} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all">
                        <p className="text-[10px] font-black text-slate-200 uppercase">{cop}</p>
                        <p className="text-[8px] text-slate-600 mt-1 uppercase font-bold">Active Experts: 14</p>
                     </div>
                   ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-950 border-slate-800 shadow-2xl h-full flex flex-col rounded-[4rem]">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800 px-10 py-10">
              <CardTitle className="text-xs font-black uppercase text-red-400 flex items-center gap-4 tracking-widest">
                <Sparkles className="h-6 w-6" /> Personal Growth Log
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex-1 space-y-10">
              <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 text-center space-y-6">
                 <GraduationCap className="h-12 w-12 text-blue-400 mx-auto animate-pulse" />
                 <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black">Platform Mastery</p>
                    <p className="text-4xl font-black font-mono text-white">84%</p>
                 </div>
                 <Badge variant="outline" className="border-blue-500/20 text-blue-400 text-[8px] uppercase">EXPERT_LEVEL_ACHIEVED</Badge>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Adaptive Learning", val: "Level 4", color: "text-emerald-400" },
                  { label: "Peer Collaboration", val: "Top 5%", color: "text-blue-400" },
                  { label: "Conflict Resilience", val: "MAX", color: "text-purple-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/20 rounded-2xl border border-slate-800 group hover:border-red-500/30 transition-all">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[11px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-8 border-t border-slate-800">
               <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-slate-600 hover:text-white tracking-[0.4em]">Explore Communities</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
