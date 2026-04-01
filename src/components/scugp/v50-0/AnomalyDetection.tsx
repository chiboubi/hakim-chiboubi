
"use client"

import React, { useState, useEffect } from 'react';
import { ShieldAlert, ShieldCheck, Zap, Activity, RefreshCw, Cpu, Database, History, Search, Terminal, Lock, Scan, EyeOff, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AnomalyDetection = () => {
  const [logs, setLogs] = useState<string[]>([
    "Initialisation du moteur de détection d'anomalies v50.0...",
    "Chargement des modèles Autoencoder + Isolation Forest.",
    "Scan du pipeline 24/24 : OK.",
    "Analyse Methane Leak Detect (Sector Alpha) : 0.00% Leakage.",
    "Intégrité des flux GEO-IA vérifiée : 100% NOMINAL."
  ]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Anomaly Block Rate", val: "100%", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Detection Latency", val: "0.001s", icon: Zap, color: "text-amber-400" },
          { label: "Detection Sensitivity", val: "ULTRA-HIGH", icon: Lock, color: "text-purple-400" },
          { label: "System Integrity", val: "PURE", icon: Activity, color: "text-cyan-400" }
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
        <Card className="lg:col-span-8 bg-black border-2 border-red-500/20 text-white shadow-2xl overflow-hidden rounded-[3rem]">
          <CardHeader className="border-b border-slate-800 bg-red-500/5 flex flex-row items-center justify-between px-8 py-6">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-red-500 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> Anomaly Detection & Leak Response 50.0
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Autoencoder & Isolation Forest Real-time Monitoring</CardDescription>
            </div>
            <Badge className="bg-red-600/20 text-red-400 border-red-500/30 text-[8px] animate-pulse uppercase px-4">THREAT_LEVEL: ZERO</Badge>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="aspect-video bg-slate-950 rounded-[2.5rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden shadow-inner group">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
               <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="h-32 w-32 rounded-full border-4 border-red-500/30 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-1000">
                     <Scan className="h-12 w-12 text-red-500/50 animate-pulse" />
                     <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping opacity-20" />
                  </div>
                  <p className="text-[11px] font-mono text-red-400 uppercase tracking-[0.5em] font-black">Anomaly Shield Active</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <EyeOff className="h-4 w-4 text-blue-400" />
                  <span className="text-[10px] font-black uppercase text-blue-400">Leak Sensors Status</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Methane Leak Detect", status: "VERIFIED", color: "text-emerald-400" },
                    { label: "Pressure Deviation", status: "STABLE", color: "text-blue-400" },
                    { label: "Structural Fatigue", status: "NOMINAL", color: "text-purple-400" }
                  ].map((sensor, i) => (
                    <div key={i} className="flex justify-between items-center text-[9px] font-bold">
                      <span className="text-slate-500">{sensor.label}</span>
                      <span className={sensor.color}>{sensor.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-red-400" />
                  <span className="text-[10px] font-black uppercase text-red-400">Detection Event Log</span>
                </div>
                <div className="h-24 overflow-y-auto font-mono text-[8px] space-y-1 text-red-500/60">
                  {logs.map((log, i) => (
                    <p key={i}>[{mounted ? new Date().toLocaleTimeString() : '... '}] &gt; {log}</p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center px-10">
             <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-4 w-4 text-red-400 animate-spin-slow" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Scan Cycle: 10ms</span>
                </div>
                <div className="flex items-center gap-3">
                  <History className="h-4 w-4 text-slate-600" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Model Sync: 100%</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-10 border-slate-700 text-[10px] font-black uppercase px-8 rounded-xl shadow-lg">Reset Anomaly Thresholds</Button>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[2rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" /> Operational Guard
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 px-8 pb-8">
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-[2rem] text-center space-y-2">
                <p className="text-[10px] text-slate-500 uppercase font-black">Anomaly Free Uptime</p>
                <p className="text-4xl font-black font-mono text-white">100%</p>
                <p className="text-[8px] text-emerald-500 font-bold mt-1 uppercase tracking-widest">NO_SIGNALS_DETECTED</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] text-slate-400 italic leading-relaxed">
                  "Anomaly Hub is analyzing 14 separate data streams against the baseline DNA signature. No deviations detected in structural or fluid patterns."
                </p>
                <Button size="sm" variant="outline" className="w-full h-10 border-slate-700 text-[10px] font-black uppercase rounded-xl">View Risk Topology Map</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[2rem] overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-8 py-6">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3">
                <Search className="h-5 w-5" /> Multi-Sensor Audit
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-8 pb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <input 
                  placeholder="Audit specific field..." 
                  className="w-full bg-black/50 border border-slate-800 rounded-xl h-10 pl-10 text-[11px] focus:outline-none focus:border-blue-500/50 text-white font-medium"
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-[8px] border-slate-800 text-slate-600">SATELLITE_READY</Badge>
                <Badge variant="outline" className="text-[8px] border-slate-800 text-slate-600">IOT_LINKED</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
