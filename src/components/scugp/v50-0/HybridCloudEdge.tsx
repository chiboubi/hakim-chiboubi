
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Server, Cpu, Network, Radio, Zap, ShieldCheck, Activity, Satellite, Box, Smartphone } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const HybridCloudEdge = () => {
  const metrics = SCUGPHubUltimate.getHybridCloudMetrics();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-2 border-blue-500/20 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3">
              <Cpu className="h-5 w-5" /> Edge Computing Real-Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="text-center">
              <p className="text-4xl font-black font-mono text-white">{metrics.edgeLatency}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">ZERO_LATENCY_FIELD_DECISION</p>
            </div>
            <div className="p-4 bg-black/40 rounded-2xl border border-blue-500/20 flex items-center gap-4">
               <Radio className="h-6 w-6 text-blue-400 animate-pulse" />
               <p className="text-[9px] text-slate-400 italic">"Field nodes (Arduino/Edge) are processing safety triggers locally to bypass cloud round-trips."</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-2 border-emerald-500/20 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-emerald-400 flex items-center gap-3">
              <Network className="h-5 w-5" /> IT/OT Unified Federation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="text-center">
              <p className="text-2xl font-black font-mono text-emerald-400 uppercase">{metrics.itOtFederation}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">UNIFIED_DATA_MESH_v50</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
               <Badge variant="outline" className="border-blue-500/30 text-blue-400 justify-center">IT: SAP/P6</Badge>
               <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 justify-center">OT: SCADA/PLCS</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-2 border-purple-500/20 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-3">
              <Box className="h-5 w-5" /> Robotic-Enabled Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="text-center">
              <p className="text-4xl font-black font-mono text-white">{metrics.roboticDrones}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold mt-1 tracking-widest">AUTONOMOUS_INSPECTION_FLEET</p>
            </div>
            <div className="flex justify-center gap-4">
               <Satellite className="h-6 w-6 text-purple-400 animate-bounce" />
               <Smartphone className="h-6 w-6 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black border-[12px] border-slate-900 shadow-3xl rounded-[5rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none" />
        <CardHeader className="p-16 border-b border-white/5 text-center">
           <Globe className="h-20 w-20 text-blue-500 mx-auto mb-8 animate-spin-slow" />
           <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] text-white italic">Global Edge Mesh 50.0</CardTitle>
           <CardDescription className="text-xl text-slate-500 font-bold uppercase mt-4 tracking-[0.5em]">Consolidated Sovereign Cloud Architecture | China University of Petroleum</CardDescription>
        </CardHeader>
        <CardContent className="p-16">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Latency", val: "0.002ms", icon: Activity, color: "text-blue-400" },
                { label: "It/Ot Federation", val: "100%", icon: ShieldCheck, color: "text-emerald-400" },
                { label: "Sovereignty", val: "TOTAL", icon: Server, color: "text-purple-400" },
                { label: "Automation", val: "LEVEL 5", icon: Zap, color: "text-amber-400" }
              ].map((stat, i) => (
                <div key={i} className="p-10 bg-slate-900/60 rounded-[3rem] border border-white/5 relative group hover:border-blue-500/30 transition-all flex flex-col gap-6">
                   <stat.icon className={cn("h-12 w-12 mx-auto mb-4 animate-pulse", stat.color)} />
                   <div className="space-y-2">
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{stat.val}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </CardContent>
        <CardFooter className="p-12 border-t border-white/5 bg-slate-900/50 flex justify-center">
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             CALIBRATE EDGE MESH Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
