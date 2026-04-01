"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Activity, ShieldCheck, Zap, Globe, Database, Layers, Radio, Camera, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const DigitalTwin360 = () => {
  const [isSyncing, setIsSyncing] = useState(true);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/20 text-white relative overflow-hidden group min-h-[500px]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-black uppercase text-cyan-400 flex items-center gap-2">
                  <Box className="h-5 w-5 animate-pulse" /> Digital Twin 360° Real-time Engine
                </CardTitle>
                <CardDescription className="text-[10px] uppercase tracking-widest">Active BIM/GIS Sync: FPSO-ANG-2026-V7</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[8px] animate-pulse uppercase">Live Sync: 0.02ms</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[8px]">UNITY REFLECT™ LINKED</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className="relative h-[400px] flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Simulation of a 3D interface */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative z-10 transform rotate-x-12 rotate-y-12">
               <div className="w-64 h-64 border-2 border-cyan-500/30 rounded-2xl flex items-center justify-center animate-spin-slow bg-cyan-500/5 backdrop-blur-sm">
                  <Box size={120} className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]" />
               </div>
               {/* Floating Data Nodes */}
               <div className="absolute -top-10 -left-10 p-2 bg-slate-900/80 border border-emerald-500/50 rounded-lg backdrop-blur-md animate-bounce">
                  <p className="text-[8px] font-black text-emerald-400 uppercase">Pressure Sensor 12</p>
                  <p className="text-xs font-mono">142.4 BAR</p>
               </div>
               <div className="absolute -bottom-10 -right-10 p-2 bg-slate-900/80 border border-amber-500/50 rounded-lg backdrop-blur-md animate-pulse">
                  <p className="text-[8px] font-black text-amber-400 uppercase">Temp Alert Zone 4</p>
                  <p className="text-xs font-mono">42.8°C</p>
               </div>
            </div>

            {/* View Controls */}
            <div className="absolute bottom-6 left-6 flex gap-2">
               <Button size="icon" variant="outline" className="bg-black/60 border-slate-800 hover:border-cyan-500"><Camera size={16} /></Button>
               <Button size="icon" variant="outline" className="bg-black/60 border-slate-800 hover:border-cyan-500"><Layers size={16} /></Button>
               <Button size="icon" variant="outline" className="bg-black/60 border-slate-800 hover:border-cyan-500"><Maximize2 size={16} /></Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center gap-2">
                <Radio className="h-4 w-4" /> Live Field Data Harvest
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="space-y-3">
                {[
                  { label: "IoT Nodes Active", val: "14,200", color: "text-emerald-400" },
                  { label: "Data Rate", val: "1.2 GB/s", color: "text-blue-400" },
                  { label: "BIM Alignment", val: "99.8%", color: "text-cyan-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-black/40 rounded border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{stat.label}</span>
                    <span className={cn("text-xs font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <p className="text-[10px] text-slate-400 italic leading-relaxed">
                  "Digital Twin 360° is currently synchronizing with the field LiDAR mesh. No deviations detected in structural integrity."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Zap className="h-4 w-4" /> Predictive Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-[10px] font-black text-red-400 uppercase">Alert: Valve Fatigue</p>
                <p className="text-[9px] text-slate-400 mt-1">Simulation predicts failure in 72h. Part V-122 replacement scheduled.</p>
              </div>
              <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-[9px] font-black uppercase h-8">
                Run Stress Simulation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
