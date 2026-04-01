"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Camera, Layers, MonitorCheck, Activity, Database, Radio, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const DynamicTwin50 = () => {
  const [isImmersive, setIsImmersive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/30 text-white shadow-[0_0_120px_rgba(6,182,212,0.2)] relative overflow-hidden group min-h-[600px] rounded-[5rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-12 py-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-black uppercase tracking-[0.5em] text-cyan-400 flex items-center gap-6">
                  <MonitorCheck className="h-10 w-10 animate-pulse" /> Dynamic Twin 50.0
                </CardTitle>
                <CardDescription className="text-[12px] uppercase tracking-widest font-bold text-slate-500 mt-2">Real-time 4D Spatial Modeling & Predictive Scenario Simulation</CardDescription>
              </div>
              <div className="flex gap-6">
                <Badge className="bg-cyan-600 text-white border-none text-[10px] animate-pulse uppercase px-6 py-1.5 tracking-[0.3em]">TWIN_SYNC: ACTIVE</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[10px] uppercase font-black">D50 STANDARD</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[500px] flex flex-col items-center justify-center bg-black overflow-hidden group/view",
            isImmersive ? "scale-105 shadow-[0_0_300px_rgba(6,182,212,0.5)]" : ""
          )} style={{ transition: 'all 1000ms' }}>
            <div 
              className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:50px_50px] group-hover/view:scale-110 transition-transform ease-linear" 
              style={{ transitionDuration: '20000ms' }}
            />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(6,182,212,0.3)_0%,transparent_85%) pointer-events-none" />
            
            <div className="relative z-10 transform perspective-[2000px] rotate-x-12 rotate-y-12 transition-transform duration-1000 group-hover/view:rotate-x-6 group-hover/view:rotate-y-6 flex flex-col items-center gap-12">
               <div className="w-[450px] h-[450px] border-4 border-cyan-500/20 rounded-[5rem] flex items-center justify-center animate-spin-slow bg-cyan-500/5 backdrop-blur-3xl shadow-[0_0_200px_rgba(6,182,212,0.4)] relative">
                  <Box size={280} className="text-cyan-400 drop-shadow-[0_0_80px_rgba(6,182,212,1)] animate-pulse" />
                  <div className="absolute inset-0 border-2 border-cyan-500 rounded-[5rem] animate-ping opacity-10" />
                  
                  {/* Dynamic Indicators */}
                  <div className="absolute -top-16 -right-16 p-8 bg-slate-900/95 border-2 border-emerald-500/50 rounded-[2.5rem] backdrop-blur-3xl animate-bounce shadow-3xl text-center min-w-[200px]">
                    <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em]">Flux Integrity</p>
                    <p className="text-3xl font-mono font-black text-white">NOMINAL</p>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 flex gap-6">
               <Button size="icon" variant="outline" className="h-16 w-16 bg-black/60 border-slate-800 hover:border-cyan-500 rounded-[1.5rem] shadow-2xl transition-all hover:scale-110"><Camera size={28} /></Button>
               <Button size="icon" variant="outline" className="h-16 w-16 bg-black/60 border-slate-800 hover:border-cyan-500 rounded-[1.5rem] shadow-2xl transition-all hover:scale-110"><Layers size={28} /></Button>
               <Button 
                size="sm" 
                className={cn("transition-all px-16 font-black uppercase text-xs h-16 rounded-[1.5rem] shadow-[0_0_60px_rgba(6,182,212,0.6)] tracking-[0.4em]", isImmersive ? "bg-cyan-600 text-white" : "bg-slate-800 text-cyan-400 border border-cyan-500/30")}
                onClick={() => setIsImmersive(!isImmersive)}
               >
                  {isImmersive ? "EXIT 4D_RENDER" : "ENTER SPATIAL SIMULATION"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl h-full flex flex-col rounded-[4rem]">
            <CardHeader className="pb-2 border-b border-slate-800 bg-slate-950/50 px-10 py-10">
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <Database className="h-6 w-6" /> Real-time Telemetry
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 space-y-8 flex-1 px-10">
              <div className="space-y-6">
                {[
                  { label: "Pressure Flow", val: "142.4 BAR", status: "STABLE", icon: Activity, color: "text-emerald-400" },
                  { label: "Thermal Mix", val: "42.8 &deg;C", status: "OPTIMIZED", icon: Zap, color: "text-amber-400" },
                  { label: "Vibration Mesh", val: "0.02 mm/s", status: "SECURE", icon: Radio, color: "text-cyan-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-[1.5rem] border border-slate-800 group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <stat.icon className={cn("h-5 w-5", stat.color)} />
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</p>
                        <p className="text-sm font-black font-mono text-white">{stat.val}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500">{stat.status}</Badge>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] shadow-inner text-center">
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  &quot;The Dynamic Twin uses real-time IoT ingestion from 14,200 nodes to maintain structural certitude for FPSO-ANG-2026.&quot;
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800">
              <Button size="sm" variant="ghost" className="w-full text-[11px] font-black uppercase text-slate-500 hover:text-white tracking-[0.4em]">
                Recalibrate IoT Mesh
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
