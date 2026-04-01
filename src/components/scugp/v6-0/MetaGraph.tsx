"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Globe, Network, Box, Target, Maximize2, Share2, Search, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export const MetaGraph = () => {
  const [activeLayer, setActiveLayer] = useState("STRATEGIC");

  const layers = [
    { id: "STRATEGIC", name: "Strategic Goals", icon: Globe, color: "text-blue-400", desc: "Long-term objectives & ROI" },
    { id: "OPERATIONAL", name: "Operational Flow", icon: Network, color: "text-amber-400", desc: "Dependencies & Schedules" },
    { id: "FIELD", name: "Field Reality", icon: Box, color: "text-emerald-400", desc: "Live IoT & Asset Status" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/20 text-white relative overflow-hidden group">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2">
                  <Layers className="h-4 w-4" /> MetaGraph™ 3D Spatial Interdependency
                </CardTitle>
                <CardDescription className="text-[10px]">Multi-level exploration of Strategic, Operational & Field layers</CardDescription>
              </div>
              <Badge className="bg-cyan-600 text-white border-none text-[8px] animate-pulse uppercase">Live Spatial Gantt</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-[500px] flex flex-col items-center justify-center bg-black/60">
            {/* Visual 3D Representation Mockup */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
            
            <div className="relative z-10 flex flex-col gap-12 rotate-[-15deg] perspective-[1000px]">
              {layers.map((layer, i) => (
                <div 
                  key={layer.id} 
                  className={cn(
                    "w-[400px] h-24 rounded-2xl border-2 transition-all duration-700 relative flex items-center justify-center cursor-pointer overflow-hidden",
                    activeLayer === layer.id ? "bg-slate-800/80 border-cyan-500 translate-z-10 shadow-[0_0_50px_rgba(6,182,212,0.3)]" : "bg-slate-900/20 border-slate-800 opacity-40 hover:opacity-60"
                  )}
                  onClick={() => setActiveLayer(layer.id)}
                  style={{ transform: `translateY(${i * -20}px) translateZ(${i * 20}px)` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="flex items-center gap-4">
                    <layer.icon className={cn("h-8 w-8", activeLayer === layer.id ? layer.color : "text-slate-600")} />
                    <div className="text-left">
                      <p className="text-xs font-black uppercase tracking-tighter">{layer.name}</p>
                      <p className="text-[8px] text-slate-500 uppercase font-bold">{layer.desc}</p>
                    </div>
                  </div>
                  {activeLayer === layer.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                      <div className="h-1 w-1 rounded-full bg-cyan-400 animate-ping" />
                      <div className="h-1 w-1 rounded-full bg-cyan-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
               <Button size="icon" variant="outline" className="h-10 w-10 bg-black/60 border-slate-800 hover:border-cyan-500 transition-all rounded-full">
                  <Maximize2 className="h-4 w-4 text-slate-400" />
               </Button>
               <Button size="icon" variant="outline" className="h-10 w-10 bg-black/60 border-slate-800 hover:border-cyan-500 transition-all rounded-full">
                  <Share2 className="h-4 w-4 text-slate-400" />
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Target className="h-4 w-4" /> BIM & SIG Deep Linking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase">GIS Mapping</span>
                  <Badge className="bg-blue-600 text-white text-[7px] border-none px-2">SYCNED</Badge>
                </div>
                <p className="text-xs font-bold text-slate-300">Sector Alpha - ArcGIS V12.4</p>
                <div className="h-32 bg-slate-950 mt-3 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/seed/gis/200/120" alt="GIS" className="opacity-40 grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase">Asset BIM Model</span>
                  <Badge className="bg-emerald-600 text-white text-[7px] border-none px-2">ACTIVE</Badge>
                </div>
                <p className="text-xs font-bold text-slate-300">FPSO Deck 4 - IFC/COBie</p>
                <Button size="sm" variant="outline" className="w-full mt-3 border-slate-700 text-[9px] font-black uppercase h-8">Exploration BIM D3</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cyan-900/10 border border-cyan-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase text-cyan-400 tracking-widest">MetaGraph Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                "Cross-layer detection identifies a discrepancy between Strategic ROI and Field Maintenance frequency. Suggesting automatic realignment of D2 and D8."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
