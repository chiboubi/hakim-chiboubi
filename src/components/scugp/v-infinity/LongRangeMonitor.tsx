"use client"

import React, { useState, useEffect } from 'react';
import { Radar, Ship, ShieldAlert, Activity, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OntologicalEngine, type LongRangeStatus } from '@/scugp-v-infinity/core/OntologicalEngine';
import { cn } from '@/lib/utils';

export const LongRangeMonitor = () => {
  const [data, setData] = useState<LongRangeStatus | null>(null);

  useEffect(() => {
    const update = () => setData(OntologicalEngine.get30nmSurveillance('OCC-ALPHA'));
    update();
    const interval = setInterval(update, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <Card className="bg-slate-900/60 border-amber-500/30 text-white overflow-hidden">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <Radar className="h-4 w-4 animate-spin-slow" /> 30nm Long-Range Radar
          </CardTitle>
          <Badge variant="outline" className="text-[8px] border-amber-500/30 text-amber-500">
            QUANTUM_DETECTION
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Vessels in Radius</p>
            <div className="flex items-center gap-2">
              <Ship className="h-3 w-3 text-cyan-400" />
              <span className="text-xs font-mono">{data.vesselsTracked}</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Prediction Accuracy</p>
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-emerald-500" />
              <span className="text-xs font-mono">{data.accuracy}</span>
            </div>
          </div>
        </div>

        {data.collisionAlerts > 0 && (
          <div className="p-3 bg-red-500/10 rounded border border-red-500/30 flex items-center gap-2 animate-pulse">
            <ShieldAlert className="h-4 w-4 text-red-500" />
            <span className="text-[10px] uppercase font-bold text-red-400">Collision Alert: Course Correction Sent</span>
          </div>
        )}

        <div className="p-2 bg-black/40 rounded border border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="h-3 w-3 text-slate-500" />
            <span className="text-[8px] font-mono text-slate-400 uppercase">Early Warning: {data.predictionWindow} window</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
