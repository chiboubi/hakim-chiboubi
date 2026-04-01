"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ShieldAlert, Zap, Activity, RefreshCw, Cpu, Database, History, Search, Terminal, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export const SystemResilience = () => {
  const [logs] = useState<string[]>([
    "Initialisation du bouclier auto-résilient v10.5...",
    "Scan périmétrique post-quantique terminé.",
    "Détection d'une anomalie sémantique en Node-B : Neutralisée.",
    "Auto-réparation du module Planning D1 effectuée avec succès.",
    "Synchronisation Cloud Hybride Multi-Régions : 100%."
  ]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Self-Healing Rate", val: "99.9%", icon: RefreshCw, color: "text-emerald-400" },
          { label: "MTTR (Autonomous)", val: "0.02s", icon: Zap, color: "text-amber-400" },
          { label: "Redundancy", val: "MULTI-CLOUD", icon: Database, color: "text-blue-400" },
          { label: "Security State", val: "FORTIFIED", icon: ShieldCheck, color: "text-cyan-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl rounded-[1.5rem]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3.5 w-3.5", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-black border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-emerald-500/5 flex flex-row items-center justify-between px-8 py-6">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Auto-Resilient Ecosystem 10.5
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Autonomous Cyber-Defense & Real-time System Auto-Repair</CardDescription>
            </div>
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[8px] animate-pulse uppercase px-4">HEALTH: INFINITE</Badge>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="aspect-video bg-slate-950 rounded-[2.5rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden shadow-inner">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
               <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="h-32 w-32 rounded-full border-4 border-emerald-500/30 flex items-center justify-center relative">
                     <Lock className="h-12 w-12 text-emerald-500/50 animate-pulse" />
                     <div className="absolute inset-0 border-2 border-emerald-500 rounded-full animate-ping opacity-20" />
                  </div>
                  <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-[0.5em] font-black">Sovereign Shield Mesh Active</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-blue-400" />
                  <span className="text-[10px] font-black uppercase text-blue-400">Cloud Distribution</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "AWS Region Alpha", status: "SYNCED", color: "text-emerald-400" },
                    { label: "Azure Sovereign Hub", status: "NOMINAL", color: "text-blue-400" },
                    { label: "Private DC Algerian Edge", status: "MASTER", color: "text-purple-400" }
                  ].map((cloud, i) => (
                    <div key={i} className="flex justify-between items-center text-[9px] font-bold">
                      <span className="text-slate-500">{cloud.label}</span>
                      <span className={cloud.color}>{cloud.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-emerald-400" />
                  <span className="text-[10px] font-black uppercase text-emerald-400">AI Self-Correction Log</span>
                </div>
                <div className="h-24 overflow-y-auto font-mono text-[8px] space-y-1 text-emerald-500/60">
                  {mounted && logs.map((log, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                      <p>{"&gt;"} {log}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center px-10">
             <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-4 w-4 text-emerald-400 animate-spin-slow" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Auto-Heal Core: ARMED</span>
                </div>
                <div className="flex items-center gap-3">
                  <History className="h-4 w-4 text-slate-600" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Backup Consistency: 100%</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-10 border-slate-700 text-[10px] font-black uppercase px-8 rounded-xl shadow-lg">Run Stress Recovery</Button>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-red-500 flex items-center gap-3">
                <ShieldAlert className="h-5 w-5" /> Threat Analysis 10.5
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-[2rem] text-center space-y-2">
                <p className="text-[10px] text-slate-500 uppercase font-black">Active Anomalies</p>
                <p className="text-4xl font-black font-mono text-white">0</p>
                <p className="text-[8px] text-emerald-500 font-bold uppercase tracking-widest">All perimeters sealed</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] text-slate-400 italic leading-relaxed text-pretty">
                  "Auto-Resilient Core detected and neutralized 42 micro-probes in the last 6 hours. System version 10.5 maintains 100% uptime through autonomous regions switching."
                </p>
                <Button size="sm" variant="outline" className="w-full h-10 border-slate-700 text-[10px] font-black uppercase rounded-xl">View Attack Surface Map</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[2rem] overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3">
                <Search className="h-5 w-5" /> Multimodal Search Hub
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-8 pb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <input 
                  placeholder="Text, Voice, or Image query..." 
                  className="w-full bg-black/50 border border-slate-800 rounded-xl h-10 pl-10 text-[11px] focus:outline-none focus:border-blue-500/50 text-white font-medium"
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-[8px] border-slate-800 text-slate-600">VOICE_READY</Badge>
                <Badge variant="outline" className="text-[8px] border-slate-800 text-slate-600">IMAGE_RAG</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};