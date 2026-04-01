"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Plane, Camera, Maximize2, Layers, Globe, Radio, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const Holoview = () => {
  const [isImmersive, setIsImmersive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/20 text-white relative overflow-hidden group">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Holoview™ 3D Immersive Workspace
                </CardTitle>
                <CardDescription className="text-[10px]">Active Mixed Reality Stream: FPSO Angola Phase 2</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-cyan-600 text-white border-none text-[8px] animate-pulse uppercase">Live LiDAR 7D</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[8px]">HoloLens Linked</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[450px] transition-all duration-700 flex flex-col items-center justify-center bg-black",
            isImmersive ? "scale-105 shadow-[0_0_100px_rgba(6,182,212,0.2)]" : ""
          )}>
            {/* Visual 3D Mockup */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="relative z-10 w-64 h-64 border-2 border-cyan-500/30 rounded-full animate-spin-slow flex items-center justify-center">
               <Box className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
               <div className="absolute top-0 -left-4 p-2 bg-black/80 rounded border border-emerald-500/50">
                  <p className="text-[8px] font-black text-emerald-400 uppercase">Module_42_Status</p>
                  <p className="text-[10px] font-mono">STABLE</p>
               </div>
            </div>

            {/* Drone Overlay */}
            <div className="absolute bottom-12 left-12 p-4 bg-slate-900/80 rounded-2xl border border-cyan-500/30 backdrop-blur-md space-y-3 w-48">
               <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-cyan-400 animate-bounce" />
                  <span className="text-[10px] font-black uppercase">Drone_Scan_Active</span>
               </div>
               <div className="space-y-1">
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[72%] animate-pulse" />
                  </div>
                  <p className="text-[8px] text-slate-500 text-right uppercase">LiDAR Density: 94%</p>
               </div>
            </div>

            <div className="absolute top-12 right-12 flex flex-col gap-2">
               <Button size="icon" variant="outline" className="h-8 w-8 bg-black/60 border-slate-800 hover:border-cyan-500 transition-colors">
                  <Camera className="h-4 w-4 text-slate-400" />
               </Button>
               <Button size="icon" variant="outline" className="h-8 w-8 bg-black/60 border-slate-800 hover:border-cyan-500 transition-colors">
                  <Layers className="h-4 w-4 text-slate-400" />
               </Button>
               <Button 
                size="icon" 
                variant="outline" 
                className={cn("h-8 w-8 transition-all", isImmersive ? "bg-cyan-600 border-cyan-400" : "bg-black/60 border-slate-800")}
                onClick={() => setIsImmersive(!isImmersive)}
               >
                  <Maximize2 className="h-4 w-4 text-white" />
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Radio className="h-4 w-4" /> Multi-Site Live Feeds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Sector Alpha - Angola", status: "RECORDING", color: "bg-red-500" },
                { name: "Cryo-Storage - Norway", status: "LIVE", color: "bg-emerald-500" },
                { name: "HSE Deck - FPSO 04", status: "STANDBY", color: "bg-slate-500" }
              ].map((site, i) => (
                <div key={i} className="p-3 bg-black/40 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-slate-800 rounded border border-slate-700 flex items-center justify-center overflow-hidden">
                       <img src={`https://picsum.photos/seed/site-${i}/40/40`} alt="site" className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-300">{site.name}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className={cn("h-1.5 w-1.5 rounded-full", site.status === 'RECORDING' ? "animate-pulse" : "", site.color)} />
                        <span className="text-[8px] font-mono text-slate-500">{site.status}</span>
                      </div>
                    </div>
                  </div>
                  <Zap className="h-3 w-3 text-slate-600 group-hover:text-cyan-400" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-cyan-950/10 border border-cyan-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase text-cyan-400 tracking-widest">Mixed Reality Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  "Holoview™ is currently rendering 14.2 million polygons. Digital Twin D3 synchronization is within 0.2ms of field telemetry."
                </p>
                <div className="pt-2">
                  <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700 text-[9px] font-black uppercase h-8">
                    Launch VR Project Review
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
