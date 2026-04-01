
"use client"

import React, { useState, useEffect } from 'react';
import { Globe, Wind, Zap, Thermometer, ShieldCheck, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

export const CosmicColonyMonitor = () => {
  const [vitals, setVitals] = useState({
    oxygen: 98.4,
    temp: 22.5,
    pressure: 1.02,
    population: 14200
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(v => ({
        ...v,
        oxygen: Math.min(100, v.oxygen + (Math.random() - 0.5) * 0.1),
        temp: v.temp + (Math.random() - 0.5) * 0.2
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-slate-900/60 border-red-500/30 text-white overflow-hidden group">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-red-400 flex items-center gap-2">
            <Globe className="h-4 w-4" /> Mars Colony Alpha
          </CardTitle>
          <Badge className="bg-red-600/20 text-red-400 border-red-500/30 text-[8px] font-black">TERRAFORMING</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Oxygen Level</p>
            <div className="flex items-center gap-2">
              <Wind className="h-3 w-3 text-cyan-400" />
              <span className="text-sm font-mono font-bold">{vitals.oxygen.toFixed(2)}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Internal Temp</p>
            <div className="flex items-center gap-2">
              <Thermometer className="h-3 w-3 text-amber-500" />
              <span className="text-sm font-mono font-bold">{vitals.temp.toFixed(1)}°C</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-[9px] font-bold text-slate-300 uppercase">Atmospheric Shield: NOMINAL</span>
          </div>
          <Zap className="h-3 w-3 text-red-500 animate-pulse" />
        </div>

        <div className="flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-tighter">
          <span>Population</span>
          <span className="text-white">{vitals.population.toLocaleString()} Beings</span>
        </div>
      </CardContent>
    </Card>
  );
};
