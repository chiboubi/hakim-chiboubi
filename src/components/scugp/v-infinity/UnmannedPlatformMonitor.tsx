"use client"

import React, { useState, useEffect } from 'react';
import { Cpu, Gauge, Thermometer, Waves, ShieldCheck, Box, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OntologicalEngine, type UnmannedStatus } from '@/scugp-v-infinity/core/OntologicalEngine';
import { cn } from '@/lib/utils';

export const UnmannedPlatformMonitor = () => {
  const [status, setStatus] = useState<UnmannedStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(OntologicalEngine.getUnmannedMonitoring('U-PLT-42'));
    update();
    const interval = setInterval(update, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <Card className="bg-slate-900/60 border-emerald-500/30 text-white overflow-hidden">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-emerald-400 flex items-center gap-2">
            <Box className="h-4 w-4" /> Unmanned Remote Control
          </CardTitle>
          <Badge className={cn("text-[8px] h-4", status.leakStatus === 'SECURE' ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400")}>
            {status.leakStatus}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-black/40 p-2 rounded border border-slate-800">
            <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Pressure</p>
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-cyan-400" />
              <span className="text-[10px] font-mono">{status.pressure}</span>
            </div>
          </div>
          <div className="bg-black/40 p-2 rounded border border-slate-800">
            <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Temp</p>
            <div className="flex items-center gap-1">
              <Thermometer className="h-3 w-3 text-amber-500" />
              <span className="text-[10px] font-mono">{status.temperature}</span>
            </div>
          </div>
          <div className="bg-black/40 p-2 rounded border border-slate-800">
            <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Vibe</p>
            <div className="flex items-center gap-1">
              <Waves className="h-3 w-3 text-purple-400" />
              <span className="text-[10px] font-mono">{status.vibration}</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-[9px] font-bold text-slate-300 uppercase">{status.aiPrediction}</span>
          </div>
          <Cpu className="h-3 w-3 text-emerald-500 animate-pulse" />
        </div>

        <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded flex items-center gap-2">
          <History className="h-3 w-3 text-blue-400 animate-spin-slow" />
          <p className="text-[8px] font-mono text-blue-300 uppercase leading-tight">
            {status.temporalStatus}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
