"use client"

import React, { useState, useEffect } from 'react';
import { Anchor, Video, ShieldAlert, Lock, Fingerprint } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OntologicalEngine, type SafetyZoneStatus } from '@/scugp-v-infinity/core/OntologicalEngine';
import { cn } from '@/lib/utils';

export const SafetyZoneMonitor = () => {
  const [data, setData] = useState<SafetyZoneStatus | null>(null);

  useEffect(() => {
    const update = () => setData(OntologicalEngine.get500mSafetyZone('FPSO-ANG-04'));
    update();
    const interval = setInterval(update, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <Card className="bg-slate-900/60 border-cyan-500/30 text-white overflow-hidden group">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <Anchor className="h-4 w-4" /> 500m Safety Zone
          </CardTitle>
          <Badge variant="outline" className="text-[8px] border-cyan-500/30 text-cyan-400">
            {data.threatLevel} THREAT
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Authorized Vessels</p>
            <p className="text-xl font-black font-mono text-cyan-400">{data.authorizedVessels}</p>
          </div>
          <div className="h-10 w-10 bg-cyan-500/10 rounded flex items-center justify-center border border-cyan-500/20">
            <Fingerprint className="h-6 w-6 text-cyan-500" />
          </div>
        </div>

        {data.unauthorizedAttempts > 0 && (
          <div className="p-3 bg-red-600/20 border border-red-500/50 rounded flex items-center gap-3 animate-bounce">
            <ShieldAlert className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-[9px] font-black uppercase text-red-400">Breach Detected</p>
              <p className="text-[8px] text-slate-400 font-mono">Instant quantum lockdown initiated</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-black/60 p-2 rounded border border-slate-800 flex flex-col items-center">
            <Video className="h-3 w-3 text-slate-500 mb-1" />
            <span className="text-[8px] font-bold text-slate-600 uppercase">4K Holographic Stream</span>
          </div>
          <div className="bg-black/60 p-2 rounded border border-slate-800 flex flex-col items-center">
            <Lock className="h-3 w-3 text-emerald-500 mb-1" />
            <span className="text-[8px] font-bold text-emerald-600 uppercase">Blockchain Auth: OK</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
