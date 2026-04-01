
"use client"

import React, { useState, useEffect } from 'react';
import { Star, Zap, Activity, RefreshCw, Share2, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

export const AsteroidMineMonitor = () => {
  const [stats, setStats] = useState({
    yield: 142.8,
    stability: 99.98,
    activeDrones: 42
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(s => ({
        ...s,
        yield: s.yield + Math.random() * 0.5,
        activeDrones: Math.floor(Math.random() * 10) + 40
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-slate-900/60 border-amber-500/30 text-white overflow-hidden group">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <Star className="h-4 w-4 animate-spin-slow" /> Psyche-16 Operation
          </CardTitle>
          <Badge variant="outline" className="text-[8px] border-amber-500/30 text-amber-400">MINING_ACTIVE</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Daily Platinum Yield</p>
            <div className="flex items-center gap-2">
              <Database className="h-3 w-3 text-amber-500" />
              <span className="text-xl font-black font-mono text-white">{stats.yield.toFixed(1)}t</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Drones</p>
            <p className="text-sm font-mono text-cyan-400">{stats.activeDrones}</p>
          </div>
        </div>

        <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded border-dashed space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-slate-300">Wormhole Status</span>
            <Badge className="bg-emerald-600/20 text-emerald-500 border-none text-[7px]">SCELLÉ</Badge>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-full animate-pulse" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[8px] font-mono text-amber-500/60 uppercase">
          <RefreshCw className="h-3 w-3 animate-spin" />
          <span>Automatic transfer to Terra Hub synced via intention field</span>
        </div>
      </CardContent>
    </Card>
  );
};
