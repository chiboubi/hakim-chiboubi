
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Satellite, Globe, Orbit, Star, Zap, Activity, RefreshCw, Layers, Database, ShieldCheck, Telescope } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OrbitalInfrastructureUI = () => {
  const [mounted, setMounted] = useState(false);
  const constellation = SCUGPHubUltimate.getOrbitalConstellation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in [animation-duration:1000ms]">
      <div className="flex flex-col items-center gap-6 text-center">
        <Satellite className="h-16 w-16 text-blue-500 animate-pulse" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Infrastructure Orbital Edge</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Constellation SCUGP-SAT Phase 2 & Nœuds Profonds</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl">
          <CardHeader className="p-10 border-b border-white/5 bg-blue-600/10 text-center">
             <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
             <CardTitle className="text-2xl font-black uppercase text-white">LEO & MEO Mesh</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-6">
             <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Surveillance Terrestre</p>
                <p className="text-lg font-bold text-white uppercase">{constellation.leo_nodes}</p>
             </div>
             <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Relais Communication</p>
                <p className="text-lg font-bold text-white uppercase">{constellation.meo_nodes}</p>
             </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl">
          <CardHeader className="p-10 border-b border-white/5 bg-amber-600/10 text-center">
             <Star className="h-12 w-12 text-amber-400 mx-auto mb-4" />
             <CardTitle className="text-2xl font-black uppercase text-white">GEO & Climat</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-6">
             <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Monitoring Climat</p>
                <p className="text-lg font-bold text-white uppercase">{constellation.geo_nodes}</p>
             </div>
             <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                <Zap className="h-6 w-6 text-amber-500" />
                <p className="text-[10px] text-slate-400">"Détection incendies & suivi déforestation en temps réel."</p>
             </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl">
          <CardHeader className="p-10 border-b border-white/5 bg-purple-600/10 text-center">
             <Telescope className="h-12 w-12 text-purple-400 mx-auto mb-4" />
             <CardTitle className="text-2xl font-black uppercase text-white">Deep Space Nodes</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-6">
             <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Nœud Lunaire</p>
                <p className="text-lg font-bold text-white uppercase">{constellation.lunar_node}</p>
             </div>
             <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Nœud Martien</p>
                <p className="text-lg font-bold text-white uppercase">{constellation.mars_node}</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
