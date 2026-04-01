"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Flame, Zap, Pickaxe, Star, Globe, Sparkles } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

const iconMap: any = { Droplets, Flame, Zap, Pickaxe, Star, Globe };

export const UniversalAppsUI = () => {
  const apps = SCUGPHubUltimate.getUniversalApps();

  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <Sparkles className="h-16 w-16 text-amber-500 animate-spin-slow" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Applications Universelles</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Expansion de la Souveraineté par Secteur</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {apps.map((a, i) => {
          const Icon = iconMap[a.icon] || Star;
          return (
            <Card key={i} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-amber-500/30 transition-all flex flex-col shadow-5xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                 <Icon size={120} className="text-amber-500" />
              </div>
              <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
                 <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="text-[10px] border-amber-500/30 text-amber-500 font-black uppercase px-4">{a.status}</Badge>
                    <Icon className="h-10 w-10 text-amber-500 animate-pulse" />
                 </div>
                 <CardTitle className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{a.sector}</CardTitle>
                 <CardDescription className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-4">App : {a.app}</CardDescription>
              </CardHeader>
              <CardContent className="p-12 flex-1 space-y-8">
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Impact Réalisé</p>
                    <p className="text-5xl font-black text-emerald-400 font-mono tracking-tighter">{a.impact}</p>
                 </div>
                 <div className="p-6 bg-white/2 rounded-[2rem] border border-dashed border-white/10 italic text-xs text-slate-400 leading-relaxed uppercase">
                    "Application du standard SCUGP v105 pour la sécurisation des flux de grade source."
                 </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
