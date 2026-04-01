
"use client"

import React, { useState, useEffect } from 'react';
import { Atom, Zap, Droplets, RefreshCw, Sparkles, Binary, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SCUGPHubUltimate } from '@/lib/scugp-service';
import { cn } from '@/lib/utils';

export const MolecularMonitor = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(SCUGPHubUltimate.getMolecularOptimization());
  }, []);

  if (!data) return null;

  return (
    <Card className="bg-slate-900/60 border-2 border-emerald-500/20 text-white overflow-hidden group shadow-3xl rounded-[3rem]">
      <CardHeader className="pb-4 border-b border-white/5 bg-emerald-500/5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-emerald-400 flex items-center gap-3">
            <Atom className="h-5 w-5 animate-spin-slow" /> Molecular Fractal Engine
          </CardTitle>
          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400 px-3 py-1">
            {data.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="p-4 bg-black/40 rounded-[2rem] border border-white/5 space-y-4 shadow-inner">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
               <Droplets className="h-5 w-5 text-blue-400" />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase">Agent Status</p>
               <p className="text-sm font-bold text-white uppercase">{data.agentStatus}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-emerald-500/70 border-t border-white/5 pt-4">
            <Binary className="h-4 w-4" />
            <span className="uppercase font-black">FRACTAL_DEPTH: {data.fractalDepth}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-[2rem] border border-white/5 text-center space-y-2">
            <p className="text-[10px] font-black text-slate-500 uppercase">Efficiency</p>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
              <span className="text-xl font-black text-white font-mono">{data.efficiency}</span>
            </div>
          </div>
          <div className="bg-slate-950 p-4 rounded-[2rem] border border-white/5 text-center space-y-2">
            <p className="text-[10px] font-black text-slate-500 uppercase">Waste</p>
            <span className="text-xl font-black text-emerald-400 font-mono">{data.waste}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-black uppercase">
              <span className="text-slate-500">Extraction Speed</span>
              <span className="text-cyan-400 font-mono">{data.speed}</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-cyan-500" style={{ width: '92%' }} />
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-black uppercase">
            <span className="text-slate-500">Sustainability</span>
            <div className="flex items-center gap-2">
               <ShieldCheck size={12} className="text-emerald-500" />
               <span className="text-emerald-400 italic">{data.sustainability}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[9px] font-mono text-emerald-500/60 uppercase pt-4 border-t border-white/5">
          <RefreshCw className="h-4 w-4 animate-spin-slow" />
          <span>Molecular self-regeneration active across all strates</span>
        </div>
      </CardContent>
    </Card>
  );
};
