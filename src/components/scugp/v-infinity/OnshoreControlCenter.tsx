"use client"

import React from 'react';
import { MapPin, Globe, ShieldAlert, Cpu, Layers, Orbit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OntologicalEngine } from '@/scugp-v-infinity/core/OntologicalEngine';

export const OnshoreControlCenter = () => {
  const data = OntologicalEngine.getOnshoreControlStatus();

  return (
    <Card className="bg-slate-900/40 border-purple-500/30 text-white shadow-xl">
      <CardHeader className="pb-2 border-b border-slate-800">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xs font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
              <Globe className="h-4 w-4" /> Onshore Control Integration
            </CardTitle>
            <CardDescription className="text-[9px] uppercase font-bold text-slate-500">SCUGP_Quantum_Dashboard_v∞⁶</CardDescription>
          </div>
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-[8px]">
            {data.access}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          {data.centers.map(center => (
            <div key={center.id} className="flex items-center justify-between p-2 bg-black/40 rounded border border-slate-800 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <MapPin className={center.status === 'MASTER' ? "text-purple-500 h-4 w-4" : "text-slate-500 h-4 w-4"} />
                <div>
                  <p className="text-[10px] font-bold text-slate-200">{center.name}</p>
                  <p className="text-[8px] text-slate-600 font-mono">ID: {center.id}</p>
                </div>
              </div>
              <Badge variant="outline" className={center.status === 'MASTER' ? "border-purple-500 text-purple-400 text-[7px]" : "text-[7px]"}>
                {center.status}
              </Badge>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-slate-950 rounded border border-slate-800">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="h-3 w-3 text-cyan-500" />
              <span className="text-[8px] font-black text-slate-500 uppercase">Redundancy</span>
            </div>
            <p className="text-xs font-mono text-emerald-400">{data.redundancy}</p>
          </div>
          <div className="p-2 bg-slate-950 rounded border border-slate-800">
            <div className="flex items-center gap-2 mb-1">
              <Orbit className="h-3 w-3 text-amber-500" />
              <span className="text-[8px] font-black text-slate-500 uppercase">Latency</span>
            </div>
            <p className="text-xs font-mono text-amber-400">{data.responseTime}</p>
          </div>
        </div>

        <div className="relative h-24 bg-black/80 rounded-lg border border-slate-800 overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(168,85,247,0.3)_1px,transparent_1px)] bg-[length:15px_15px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Cpu className="h-6 w-6 text-purple-500/50 mb-1" />
            <p className="text-[9px] font-mono text-purple-400 uppercase tracking-widest text-center px-4">
              3D Holographic Field Overlay Active
            </p>
          </div>
          <div className="absolute bottom-1 right-2">
            <ShieldAlert className="h-3 w-3 text-red-500 animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
