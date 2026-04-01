"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Map, Zap, Layers, Compass, Target, Radio, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export const PlanetScaleTwin = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-blue-500/30 text-white shadow-2xl relative overflow-hidden h-[600px] rounded-[4rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-blue-400 flex items-center gap-4">
                  <Globe className="h-8 w-8 animate-spin-slow" /> Planet-Scale Digital Twin 12.5
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Macro-Simulations crossing projects, cities, and global ecosystems</CardDescription>
              </div>
              <Badge className="bg-blue-600 text-white border-none text-[9px] animate-pulse uppercase px-6 py-1.5 tracking-widest">WORLD_SYNC: ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-full flex flex-col items-center justify-center bg-black/40 overflow-hidden">
            {/* Simulation of a planetary map */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative z-10 w-[500px] h-[500px] border-2 border-blue-500/20 rounded-full flex items-center justify-center animate-spin-slow bg-blue-500/5 shadow-[0_0_100px_rgba(59,130,246,0.15)]">
               <Map size={240} className="text-blue-400 opacity-40" />
               
               {/* Pulsing Hotspots */}
               <div className="absolute top-1/4 left-1/4 h-4 w-4 bg-emerald-500 rounded-full animate-ping" />
               <div className="absolute bottom-1/3 right-1/3 h-4 w-4 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
               <div className="absolute top-1/2 right-1/4 h-4 w-4 bg-amber-500 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            </div>

            <div className="absolute bottom-12 left-12 p-6 bg-slate-900/80 rounded-3xl border border-blue-500/30 backdrop-blur-2xl space-y-4 w-72 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Radio className="h-5 w-5 text-blue-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Global Telemetry</span>
               </div>
               <div className="space-y-3">
                  {[
                    { label: "Resource Efficiency", val: "99.8%", color: "bg-blue-500" },
                    { label: "Planetary Health", val: "REGENERATIVE", color: "bg-emerald-500" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.val}</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className={cn("h-full", stat.color)} style={{ width: '90%' }} />
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="absolute top-12 right-12 flex flex-col gap-4">
               <Badge variant="outline" className="bg-black/60 border-blue-500/30 text-blue-400 text-[10px] px-4 py-1 uppercase font-black">D12: PLANETARY_MACRO</Badge>
               <Badge variant="outline" className="bg-black/60 border-emerald-500/30 text-emerald-400 text-[10px] px-4 py-1 uppercase font-black">D13: REGENERATIVE_BIO</Badge>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem]">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-3 tracking-widest">
                <Target className="h-5 w-5" /> Precision Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-6">
              <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-[2rem]">
                <p className="text-xs text-slate-400 leading-relaxed italic text-center">
                  "Quantum Optimizer has recalculated planetary resource flows. Recommending a 4% redirection of H2 surplus from Hassi Messaoud to the Mediterranean grid. Net Impact: +12.4 Net Positive score."
                </p>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-[10px] font-black uppercase h-12 rounded-[1.5rem] tracking-[0.2em] shadow-xl">Execute Planetary Pivot</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-[3rem]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3 tracking-widest px-10 pt-8">
                <Activity className="h-5 w-5" /> Cross-Project Dependencies
              </CardTitle>
            </CardHeader>
            <CardContent className="px-10 pb-10 pt-6 space-y-4 font-mono text-[10px] text-slate-500">
              <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                <span className="text-blue-400 uppercase">FPSO_ALPHA</span>
                <span className="text-emerald-500">SYNCED</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                <span className="text-blue-400 uppercase">ARCTIC_DRILL</span>
                <span className="text-emerald-500">NOMINAL</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                <span className="text-blue-400 uppercase">GRID_REGEN</span>
                <span className="text-amber-500">TUNING</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
