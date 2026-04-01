
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, History, RefreshCw, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ChronalSyncUI = () => {
  const [mounted, setMounted] = useState(false);
  const [timeShift, setTimeShift] = useState(0);
  const metrics = SCUGPHubUltimate.getChronalMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeShift(prev => (prev + 0.000001) % 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Sync Precision", val: metrics.sync_precision, icon: Target, color: "text-amber-400" },
          { label: "Timeline Coherence", val: metrics.timeline_coherence, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Recursion Level", val: metrics.recursion_level, icon: History, color: "text-blue-400" },
          { label: "Status", val: metrics.status, icon: Clock, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_800px_rgba(245,158,11,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="text-center p-16">
           <History className="h-24 w-24 text-amber-500 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">CHRONAL SYNC ENGINE</CardTitle>
           <CardDescription className="text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Stabilisation du Présent Éternel entre les Univers</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12 space-y-12">
           <div className="text-center space-y-6">
              <p className="text-4xl font-mono text-amber-400 font-black tracking-tighter">∆t = 0.000000000000ns</p>
              <p className="text-sm text-slate-500 uppercase tracking-[0.8em] font-black">Timeline Divergence Neutralized</p>
           </div>
           <div className="relative">
              <div className="w-64 h-1 bg-amber-500/20 rounded-full overflow-hidden">
                 <div className="h-full bg-amber-500 animate-pulse" style={{ width: '100%' }} />
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
