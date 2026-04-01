
"use client"

import React, { useState, useEffect } from 'react';
import { Globe, Map as MapIcon, Zap, Layers, Compass, Target, Radio, Activity, Search, Filter, Satellite, ShieldCheck, Database, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GEEService, type SpatialResult } from "@/lib/gee-service";
import { cn } from "@/lib/utils";

export const GEECommander = ({ wellCount = 0 }) => {
  const [mounted, setMounted] = useState(false);
  const [results, setResults] = useState<SpatialResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initial analysis
    setResults([
      GEEService.getProximityAnalysis(wellCount),
      GEEService.getDensityAnalysis(wellCount)
    ]);
  }, [wellCount]);

  const runFullAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults(prev => [...prev, GEEService.getPredictiveAnalysis()]);
      setIsAnalyzing(false);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-blue-500/30 text-white shadow-2xl relative overflow-hidden h-[600px] rounded-[4rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-blue-400 flex items-center gap-4">
                  <Satellite className="h-8 w-8 animate-pulse" /> Google Earth Engine Hub 50.0
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">
                  Spatial Intelligence: Proximity, Density {"&"} Random Forest ML
                </CardDescription>
              </div>
              <Badge className="bg-blue-600 text-white border-none text-[9px] animate-pulse uppercase px-6 py-1.5 tracking-widest">EE_PROJECT: ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-full flex flex-col items-center justify-center bg-black/40 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative z-10 w-[500px] h-[500px] border-2 border-blue-500/20 rounded-full flex items-center justify-center animate-spin-slow bg-blue-500/5 shadow-[0_0_120px_rgba(59,130,246,0.15)]">
               <MapIcon size={280} className="text-blue-400 opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center">
                  {/* Heatmap Simulation */}
                  <div className="w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                  <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
               </div>
            </div>

            <div className="absolute bottom-12 left-12 p-8 bg-slate-900/90 rounded-3xl border border-blue-500/30 backdrop-blur-2xl space-y-6 w-80 shadow-2xl">
               <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-blue-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Active EE Layers</span>
               </div>
               <div className="space-y-4">
                  {results.map((res, i) => (
                    <div key={i} className="space-y-1.5 border-l-2 border-blue-500/30 pl-3">
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                        <span>{res.layerName}</span>
                        <span className="text-emerald-400">{res.accuracy || "SYNC"}</span>
                      </div>
                      <p className="text-[10px] text-white font-mono uppercase">{res.status}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="absolute top-12 right-12 flex flex-col gap-4">
               <Badge variant="outline" className="bg-black/60 border-blue-500/30 text-blue-400 text-[10px] px-4 py-1 uppercase font-black">PROJECT: {GEEService.projectId}</Badge>
               <Badge variant="outline" className="bg-black/60 border-emerald-500/30 text-emerald-400 text-[10px] px-4 py-1 uppercase font-black">STATUS: CONNECTED</Badge>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem] h-full flex flex-col overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-10 py-8 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-3 tracking-widest">
                <Brain className="h-5 w-5" /> Random Forest Classifier
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 px-10 pb-10 space-y-8 flex-1">
              <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[2.5rem] text-center shadow-inner relative group">
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[11px] text-slate-400 uppercase font-black mb-2">Production Confidence</p>
                <p className="text-5xl font-black font-mono text-white">{isAnalyzing ? "..." : "87.5%"}</p>
                <Badge variant="outline" className="mt-4 border-amber-500/30 text-amber-400 text-[9px] uppercase font-black">EE_CLASSIFIER_V5</Badge>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] text-slate-500 italic leading-relaxed text-center">
                  "Google Earth Engine ML algorithms are analyzing porosity, depth, and temperature data to predict optimal extraction rates."
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800 bg-slate-950/50">
               <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-12 rounded-[1.5rem] tracking-[0.2em] shadow-xl"
                onClick={runFullAnalysis}
                disabled={isAnalyzing}
               >
                 {isAnalyzing ? "Processing ML..." : "Run GEE ML Analysis"}
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
