"use client"

import React, { useState, useEffect } from 'react';
import { Plane, Wind, Navigation, ShieldCheck, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OntologicalEngine, type HelideckStatus } from '@/scugp-v-infinity/core/OntologicalEngine';
import { cn } from '@/lib/utils';

export const HelideckMonitor = () => {
  const [status, setStatus] = useState<HelideckStatus | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(OntologicalEngine.realTimeHelideckMonitoring('FPSO-ANG-04'));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <Card className="bg-slate-900/60 border-cyan-500/30 text-white overflow-hidden group">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <Plane className="h-4 w-4" /> Helideck Quantum Monitor
          </CardTitle>
          <Badge variant={status.status === 'SAFE_FOR_LANDING' ? 'default' : 'destructive'} className="text-[8px] h-4">
            {status.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Motion Stability</p>
            <div className="flex items-center gap-2">
              <Activity className={cn("h-3 w-3", status.motion > 1.5 ? "text-amber-500" : "text-emerald-500")} />
              <span className="text-xs font-mono">{(status.motion).toFixed(3)} m/s²</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Quantum Precision</p>
            <div className="flex items-center gap-2">
              <Navigation className="h-3 w-3 text-cyan-400" />
              <span className="text-xs font-mono">{status.precision.toFixed(2)}%</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-black/40 rounded border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className={cn("h-3 w-3", status.weather === 'TURBULENT' ? "text-amber-500 animate-pulse" : "text-cyan-500")} />
            <span className="text-[10px] uppercase font-bold text-slate-300">Weather: {status.weather}</span>
          </div>
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
        </div>

        <p className="text-[8px] text-slate-500 italic leading-tight">
          SCUGP_Quantum_AI_Precision_Landing initialized for {status.platformId}.
        </p>
      </CardContent>
    </Card>
  );
};
