
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Activity, ShieldCheck, Zap, Globe, Database, Layers, Search, Microscope, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const DigitalTwinTwo = () => {
  const metrics = SCUGPHubUltimate.getDigitalTwin20Metrics();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-emerald-500/30 text-white shadow-2xl relative overflow-hidden h-[600px] rounded-[4rem] group">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-emerald-400 flex items-center gap-4">
                  <Box className="h-8 w-8 animate-spin-slow" /> Digital Twin 2.0 (OSDU Sync)
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Predictive 4D Modeling & Sub-Surface Real-time Simulation</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-white border-none text-[9px] animate-pulse uppercase px-6 py-1.5 tracking-widest">OSDU_CORE: CONNECTED</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-full flex flex-col items-center justify-center bg-black/40 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative z-10 w-[500px] h-[500px] border-2 border-emerald-500/20 rounded-full flex items-center justify-center animate-spin-slow bg-emerald-500/5 shadow-[0_0_100px_rgba(16,185,129,0.15)]">
               <Layers size={240} className="text-emerald-400 opacity-40" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                  <div className="w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
               </div>
            </div>

            <div className="absolute bottom-12 left-12 p-6 bg-slate-900/90 rounded-3xl border border-emerald-500/30 backdrop-blur-2xl space-y-4 w-72 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Sub-Surface Telemetry</span>
               </div>
               <div className="space-y-3">
                  {[
                    { label: "Predictive Maint.", val: metrics.predictiveMaint, color: "bg-emerald-500" },
                    { label: "Production Boost", val: metrics.productionBoost, color: "bg-blue-500" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.val}</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className={cn("h-full", stat.color)} style={{ width: '92%' }} />
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="absolute top-12 right-12 flex flex-col gap-4">
               <Badge variant="outline" className="bg-black/60 border-emerald-500/30 text-emerald-400 text-[10px] px-4 py-1 uppercase font-black">DRILLING_SIM: {metrics.drillingSim}</Badge>
               <Badge variant="outline" className="bg-black/60 border-blue-500/30 text-blue-400 text-[10px] px-4 py-1 uppercase font-black">ANOMALIES: {metrics.anomaliesDetected}</Badge>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem] h-full flex flex-col overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-3 tracking-widest">
                <Microscope className="h-5 w-5" /> Under-Surface Imaging
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-8 flex-1">
              <div className="aspect-square bg-black/40 rounded-[2.5rem] border border-emerald-500/20 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner">
                 <img src="https://picsum.photos/seed/subsurface/400/400" alt="Sub-surface" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
                 <div className="absolute bottom-6 left-6">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">Real-time GPR Scan</p>
                    <p className="text-[8px] text-emerald-500 font-mono">Precision: 0.001mm</p>
                 </div>
              </div>
              <p className="text-[10px] text-slate-500 italic leading-relaxed text-center px-4">
                "The Digital Twin 2.0 identifies geological bottlenecks 48h before the drill bit hits. Optimization engine currently boosting yield by 1.8%."
              </p>
            </CardContent>
            <CardFooter className="p-8 border-t border-slate-800 bg-slate-950/50">
               <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-black font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase shadow-2xl">Execute Production Pivot</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
