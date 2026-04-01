
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Satellite, Rocket, Zap, Activity, ShieldCheck, Lock } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const GalacticCloudUI = () => {
  const layers = SCUGPHubUltimate.getGalacticCloudLayers();

  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <Server className="h-16 w-16 text-blue-500 animate-pulse" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Infrastructure Cloud Galactique</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Maillage de Puissance Multi-Strate Ω</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {layers.map((layer) => (
          <Card key={layer.id} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col shadow-2xl relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
               {layer.id === 'L1' && <Zap size={80} />}
               {layer.id === 'L2' && <Globe size={80} />}
               {layer.id === 'L3' && <Satellite size={80} />}
               {layer.id === 'L4' && <Rocket size={80} />}
            </div>
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center mb-4">
                 <Badge variant="outline" className="text-[10px] border-blue-500/30 text-blue-400 uppercase font-black px-4">{layer.id}</Badge>
                 <ShieldCheck className="h-5 w-5 text-emerald-500" />
              </div>
              <CardTitle className={cn("text-2xl font-black uppercase tracking-widest", layer.color)}>{layer.name}</CardTitle>
              <CardDescription className="text-slate-400 font-bold uppercase mt-2">{layer.desc}</CardDescription>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6">
               <div className="flex justify-between items-center">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Latence</p>
                  <p className="text-xl font-mono font-black text-white">{layer.latency}</p>
               </div>
               <div className="flex justify-between items-center">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Status</p>
                  <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-4 py-1 uppercase text-[8px] font-black">{layer.status}</Badge>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
