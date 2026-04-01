"use client"

import React, { useState, useEffect } from 'react';
import { Brain, Network, Zap, Waves, Share2, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OntologicalEngine, type WellCollectiveIntelligence } from '@/scugp-v-infinity/core/OntologicalEngine';
import { cn } from '@/lib/utils';

export const CollectiveIntelligenceMonitor = () => {
  const [data, setData] = useState<WellCollectiveIntelligence | null>(null);
  const [activeNodes, setActiveNodes] = useState(0);

  useEffect(() => {
    const update = () => {
      setData(OntologicalEngine.getCollectiveWellIntelligence());
      setActiveNodes(Math.floor(Math.random() * 1000) + 14000);
    };
    update();
    const interval = setInterval(update, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <Card className="bg-slate-900/60 border-blue-500/30 text-white overflow-hidden group relative">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs font-black uppercase tracking-widest text-blue-400 flex items-center gap-2">
            <Brain className="h-4 w-4 animate-pulse" /> Collective Well Intelligence
          </CardTitle>
          <Badge variant="outline" className="text-[8px] border-blue-500/30 text-blue-400">
            {data.wellCount} WELLS SYNCED
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Network Status</p>
            <div className="flex items-center gap-2">
              <Network className="h-3 w-3 text-cyan-400" />
              <span className="text-[10px] font-mono text-cyan-200">QUANTUM_NEURAL_MESH</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-slate-500 uppercase font-bold">Active Nodes</p>
            <p className="text-sm font-mono text-emerald-400">{activeNodes.toLocaleString()}</p>
          </div>
        </div>

        <div className="p-3 bg-black/40 rounded border border-slate-800 space-y-2">
          <div className="flex items-center gap-2">
            <Share2 className="h-3 w-3 text-purple-400" />
            <span className="text-[10px] uppercase font-bold text-slate-300">{data.telepathyStatus}</span>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full animate-[pulse_2s_infinite]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-950 p-2 rounded border border-slate-800">
            <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Drill Decision</p>
            <p className="text-[9px] text-slate-300 italic leading-tight">{data.drillDecision}</p>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-slate-800 flex flex-col justify-center">
            <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Efficiency</p>
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-amber-500" />
              <span className="text-xs font-black text-amber-400">{data.efficiencyGain}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[8px] font-mono text-blue-500/60 uppercase">
          <Waves className="h-3 w-3 animate-bounce" />
          <span>Real-time collective learning active across all reservoir layers</span>
        </div>
      </CardContent>
    </Card>
  );
};
