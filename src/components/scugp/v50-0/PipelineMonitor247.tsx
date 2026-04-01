"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Zap, ShieldCheck, Search, Loader2, Workflow, Satellite, BrainCircuit, Box, ShieldAlert, History, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export const PipelineMonitor247 = () => {
  const steps = [
    { name: "Collect EO Data", status: "COMPLETED", icon: Search },
    { name: "GEO-IA Analysis", status: "COMPLETED", icon: Satellite },
    { name: "LSTM Prediction", status: "RUNNING", icon: BrainCircuit },
    { name: "Twin Synchronicity", status: "WAITING", icon: Box },
    { name: "Proactive Alerting", status: "WAITING", icon: ShieldAlert }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden">
        <CardHeader className="border-b border-slate-800 bg-emerald-500/5 px-12 py-10">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-4">
                <Workflow className="h-6 w-6" /> Pipeline 24/24 Automated Execution
              </CardTitle>
              <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">
                Continuous Processing Loop: Data {"->"} Analysis {"->"} Forecast {"->"} Action
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-emerald-600 text-white border-none px-6 py-1 text-[10px] font-black animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.4)]">AUTONOMOUS_V50</Badge>
              <Badge variant="outline" className="border-slate-700 text-slate-500 text-[10px] font-black uppercase">UPTIME: 99.99%</Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-12 space-y-12">
          <div className="relative flex justify-between items-center w-full">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2" />
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                <div className={cn(
                  "h-16 w-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500",
                  step.status === 'COMPLETED' ? "bg-emerald-600/20 border-emerald-500 shadow-lg" :
                  step.status === 'RUNNING' ? "bg-blue-600/20 border-blue-500 animate-pulse" :
                  "bg-slate-950 border-slate-800 grayscale"
                )}>
                  {step.status === 'RUNNING' ? <Loader2 className="h-8 w-8 text-blue-400 animate-spin" /> : <step.icon className={cn("h-8 w-8", step.status === 'COMPLETED' ? "text-emerald-400" : "text-slate-600")} />}
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase text-white group-hover:text-emerald-400 transition-colors">{step.name}</p>
                  <p className="text-[8px] text-slate-500 font-mono mt-1">{step.status}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-black/60 rounded-[3rem] border border-slate-800 relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%) pointer-events-none" />
            <div className="flex items-center gap-4 mb-6">
              <Zap className="h-6 w-6 text-emerald-400 animate-pulse" />
              <h4 className="text-sm font-black uppercase text-emerald-400 tracking-[0.2em]">Real-time Throughput Log</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4 font-mono text-[10px] text-slate-500">
                <p><span className="text-emerald-500">[10:42:01]</span> COLLECT: Sentinel-2 data ingested successfully.</p>
                <p><span className="text-emerald-500">[10:42:05]</span> ANALYZE: Hotspot detected in Norwegian shelf (ID: NS-442).</p>
                <p><span className="text-blue-500">[10:42:12]</span> PREDICT: LSTM model recalibrated. Yield projection: +4.2%.</p>
                <p><span className="text-slate-600">[10:42:30]</span> UPDATE: Digital Twin sync within 0.02ms tolerance.</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-6 bg-slate-900 rounded-[2rem] border border-slate-800">
                <p className="text-[11px] text-slate-400 italic leading-relaxed text-balance">
                  "The Pipeline 24/24 is currently processing at Level 5 Autonomy. Proactive alerting mesh is armed for leak detection via Autoencoder v2.0."
                </p>
                <Button size="sm" variant="ghost" className="mt-4 text-[9px] font-black uppercase text-emerald-500 hover:text-emerald-400">View Full Operational Journal</Button>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-slate-950 p-8 border-t border-slate-800 flex justify-between items-center px-12">
          <div className="flex gap-16">
            <div className="flex items-center gap-4">
              <RefreshCw className="h-6 w-6 text-blue-400 animate-spin-slow" />
              <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Cycle Speed: 420ms</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-6 w-6 text-emerald-400" />
              <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Failover Protection: ARMED</span>
            </div>
          </div>
          <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[10px] px-6 py-1 uppercase tracking-widest">Pipeline Health: 100%</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};