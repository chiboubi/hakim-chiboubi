
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass, Rocket, Map, Target, Globe, Star, CheckCircle2, History } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const SpatialRoadmapUI = () => {
  const roadmap = SCUGPHubUltimate.getSpatialRoadmap();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <Compass className="h-16 w-16 text-red-500 animate-spin-slow" style={{ animationDuration: '20s' }} />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Déploiement Spatial</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Feuille de Route de la Conquête de l'Intention</p>
      </div>

      <div className="relative py-20 px-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 opacity-20" />
        
        <div className="space-y-32">
          {roadmap.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "flex items-center gap-12 relative z-10",
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div className="w-1/2 flex justify-end">
                 <Card className={cn(
                   "p-12 rounded-[4rem] bg-slate-900 border-2 border-white/5 shadow-5xl max-w-xl transition-all hover:scale-105 group",
                   i % 2 === 0 ? "text-right items-end" : "text-left items-start flex flex-col"
                 )}>
                    <div className="flex items-center gap-6 mb-6">
                      <span className="text-5xl font-black font-mono text-white block group-hover:text-red-400">{item.year}</span>
                      <Badge variant={item.status === 'COMPLETED' ? 'default' : 'outline'} className={cn("px-6 py-1 rounded-full text-[9px] font-black uppercase", item.status === 'COMPLETED' ? "bg-emerald-600" : "border-slate-700")}>{item.status}</Badge>
                    </div>
                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">{item.goal}</h4>
                    <CheckCircle2 className={cn("h-8 w-8", item.status === 'COMPLETED' ? "text-emerald-500" : "text-slate-800")} />
                 </Card>
              </div>

              <div className="relative flex items-center justify-center">
                 <div className="h-16 w-16 rounded-full bg-slate-950 border-4 border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] z-20 flex items-center justify-center group-hover:border-red-500 transition-all">
                    <Star size={24} className="text-red-500 animate-pulse" />
                 </div>
                 <div className="absolute h-px w-32 bg-white/10" />
              </div>

              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
