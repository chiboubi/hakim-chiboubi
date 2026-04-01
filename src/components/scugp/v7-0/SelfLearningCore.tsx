"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, RefreshCw, Zap, TrendingUp, History, CheckCircle2, ShieldCheck, MessageSquare, Gauge, UserCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const SelfLearningCore = () => {
  const [mounted, setMounted] = useState(false);
  const [learningProgress, setLearningProgress] = useState(82);
  const [performanceScore] = useState(94);
  const [logs] = useState<string[]>([
    "Initialisation du moteur auto-apprenant v7.0...",
    "Analyse des flux de projet FPSO-2026 terminée.",
    "Pattern SCUGP GENOME identifié : 'High_Efficiency_Cryo'.",
    "Auto-calibrage des processus D1-D11 en cours...",
    "Synchronisation des profils cognitifs terminée."
  ]);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLearningProgress(prev => (prev >= 100 ? 82 : prev + 0.1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Brain className="h-32 w-32 text-emerald-500" />
          </div>
          <CardHeader className="bg-emerald-500/5 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                  <Cpu className="h-4 w-4" /> Cognitive AI Dashboard (Pillar 1)
                </CardTitle>
                <CardDescription className="text-[10px]">Machine Learning Project Flow {"&"} DNA Analysis</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-black font-black text-[8px] uppercase tracking-widest animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]">Neural Training Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 group hover:border-emerald-500/30 transition-all cursor-default">
                <Gauge className="h-6 w-6 text-blue-400" />
                <p className="text-[9px] font-black text-slate-500 uppercase">Performance Score</p>
                <p className="text-xl font-black font-mono text-white">{performanceScore}/100</p>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 group hover:border-purple-500/30 transition-all cursor-default">
                <UserCheck className="h-6 w-6 text-purple-400" />
                <p className="text-[9px] font-black text-slate-500 uppercase">Profile Sync</p>
                <p className="text-xl font-black font-mono text-white">NOMINAL</p>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-2 group hover:border-amber-500/30 transition-all cursor-default">
                <Zap className="h-6 w-6 text-amber-400" />
                <p className="text-[9px] font-black text-slate-500 uppercase">Optimization Rate</p>
                <p className="text-xl font-black font-mono text-white">+14.2%</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Project DNA Maturity (v7.0)</p>
                  <p className="text-2xl font-black text-emerald-400">{learningProgress.toFixed(1)}%</p>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className={cn("h-1 w-4 rounded-full", i <= 4 ? "bg-emerald-500" : "bg-slate-800")} />
                  ))}
                </div>
              </div>
              <Progress value={learningProgress} className="h-2 bg-slate-800" />
            </div>

            <div className="bg-black/60 rounded-xl p-4 border border-slate-800 font-mono text-[10px] space-y-2 max-h-48 overflow-y-auto">
              <div className="flex items-center gap-2 text-emerald-500/70 border-b border-slate-800/50 pb-2 mb-2">
                <History className="h-3 w-3" />
                <span className="uppercase font-black">Intelligent Activity Journal</span>
              </div>
              {logs.map((log, i) => (
                <div key={i} className="flex gap-2 text-emerald-400/60 animate-in fade-in slide-in-from-left-1">
                  <span className="opacity-30">[{mounted ? new Date().toLocaleTimeString() : '--:--:--'}]</span>
                  <p>{log}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="bg-slate-950/50 p-4 border-t border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                <span className="text-[9px] font-bold text-slate-500 uppercase">Profile: DNA_OFFSHORE_ADMIN</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-800" />
              <div className="flex items-center gap-2">
                <RefreshCw className="h-3 w-3 text-blue-400 animate-spin-slow" />
                <span className="text-[9px] font-bold text-slate-500 uppercase">Auto-calibrating Processes</span>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-7 border-slate-700 text-[8px] font-black uppercase">Review Performance Metrics</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Automatic Member Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4 flex-1">
              <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/20">
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  "AI analyzed 14 team pulses this week. High engagement detected in Engineering. Recommending a 5-minute cognitive rest for HSE Lead to maintain peak performance score."
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[9px] font-black text-slate-500 uppercase">Performance Vectors</p>
                {[
                  { name: "Execution Speed", val: "98%", icon: TrendingUp, color: "text-emerald-500" },
                  { name: "Collaboration Quality", val: "0.92", icon: UserCheck, color: "text-blue-500" },
                  { name: "Risk Proactivity", val: "HIGH", icon: ShieldCheck, color: "text-amber-500" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-2">
                      <stat.icon className={cn("h-3 w-3 text-slate-600 group-hover:text-blue-400", stat.color)} />
                      <span className="text-[10px] font-bold text-slate-300 uppercase">{stat.name}</span>
                    </div>
                    <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 font-mono">{stat.val}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t border-slate-800">
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-[9px] font-black uppercase h-8 shadow-[0_0_10px_rgba(37,99,235,0.3)]">Generate DNA Heritage Sheet</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};