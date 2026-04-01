"use client"

import React, { useState, useEffect } from 'react';
import { Globe, Map, Zap, Layers, Compass, Target, Radio, Activity, Search, Filter, Maximize2, Satellite } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const GeoIACommander = () => {
  const [activeLayer, setActiveLayer] = useState("SENTINEL");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-blue-500/30 text-white shadow-2xl relative overflow-hidden h-[650px] rounded-[4rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-blue-400 flex items-center gap-4">
                  <Globe className="h-8 w-8 animate-spin-slow" /> GEO-IA+ Intelligence Hub 50.0
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Satellite Multi-Sensor Analysis (Sentinel-1/2, VIIRS, ERA5)</CardDescription>
              </div>
              <Badge className="bg-blue-600 text-white border-none text-[9px] animate-pulse uppercase px-6 py-1.5 tracking-widest">EO_DATA: LIVE</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-full flex flex-col items-center justify-center bg-black/40 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative z-10 w-[550px] h-[550px] border-2 border-blue-500/20 rounded-full flex items-center justify-center animate-spin-slow bg-blue-500/5 shadow-[0_0_120px_rgba(59,130,246,0.15)] relative">
               <Map size={300} className="text-blue-400 opacity-30" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping absolute top-1/4 left-1/3" />
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping absolute top-1/2 right-1/4" />
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping absolute bottom-1/3 left-1/2" />
               </div>
            </div>

            <div className="absolute bottom-12 left-12 p-8 bg-slate-900/90 rounded-3xl border border-blue-500/30 backdrop-blur-2xl space-y-6 w-80 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Satellite className="h-5 w-5 text-blue-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Global Energy Hotspots</span>
               </div>
               <div className="space-y-4">
                  {[
                    { label: "Detected Fields", val: "1,420", color: "bg-blue-500" },
                    { label: "Active Pipelines", val: "884", color: "bg-cyan-500" },
                    { label: "Risk Vulnerability", val: "LOW", color: "bg-emerald-500" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.val}</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className={cn("h-full", stat.color)} style={{ width: '85%' }} />
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="absolute top-12 right-12 flex flex-col gap-4">
               {['SENTINEL-1', 'VIIRS', 'ERA5', 'XGBOOST'].map(layer => (
                 <Button 
                  key={layer}
                  variant="outline" 
                  size="sm"
                  className={cn(
                    "bg-black/60 border-blue-500/30 text-blue-400 text-[9px] px-4 py-1.5 uppercase font-black transition-all",
                    activeLayer === layer ? "bg-blue-600 text-white" : "hover:bg-blue-500/10"
                  )}
                  onClick={() => setActiveLayer(layer)}
                 >
                   {layer}
                 </Button>
               ))}
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem] h-full flex flex-col overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-3 tracking-widest">
                <Target className="h-5 w-5" /> Geographic Risk Tally
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-8 flex-1">
              <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[2.5rem] text-center shadow-inner relative group">
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[11px] text-slate-400 uppercase font-black mb-2">Seismic Stability (GQI)</p>
                <p className="text-5xl font-black font-mono text-white">0.992</p>
                <Badge variant="outline" className="mt-4 border-emerald-500/30 text-emerald-400 text-[9px] uppercase font-black">STABLE_ZONE_V50</Badge>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Methane Leak Detect", val: "0.00%", color: "text-emerald-400" },
                  { label: "Flare Activity Index", val: "NOMINAL", color: "text-blue-400" },
                  { label: "Offshore Drift Rate", val: "0.04m/s", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-slate-800 group hover:border-blue-500/30 transition-all">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[10px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800 bg-slate-950/50">
               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-12 rounded-[1.5rem] tracking-[0.2em] shadow-xl">Launch Predictive Scenario</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
