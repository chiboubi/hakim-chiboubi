
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Star, Zap, Globe, Orbit, Database, ShieldCheck, Activity, RefreshCw, Layers, Box, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const InterstellarMiningUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getCosmicMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Nœuds Orbitaux", val: metrics.orbital_nodes, icon: Satellite, color: "text-blue-400" },
          { label: "Station SCUGP-1", val: metrics.station_status, icon: Rocket, color: "text-purple-400" },
          { label: "Base Lunaire", val: "ACTIVE", icon: Moon, color: "text-amber-400" },
          { label: "Mission Mars", val: "EN PRÉPARATION", icon: Globe, color: "text-red-400" },
          { label: "Status", val: "SCELLÉ", icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all backdrop-blur-xl">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[750px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Rocket className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">EXPANSION COSMIQUE Ω 54.0</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Souveraineté Interplanétaire & Extraction Intersidérale | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-amber-500/30 space-y-8 shadow-inner text-center">
                 <h3 className="text-4xl font-black text-amber-400 uppercase tracking-widest flex items-center justify-center gap-6">
                   <Moon className="h-10 w-10" /> SCUGP-Luna
                 </h3>
                 <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                   "Extraction d'Helium-3 stabilisée au pôle Sud. Alimentation continue des réacteurs de fusion terrestres."
                 </p>
                 <Badge variant="outline" className="border-amber-500/30 text-amber-400 font-black uppercase px-8">H3_SOURCE_OK</Badge>
              </div>
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-red-500/30 space-y-8 shadow-inner text-center">
                 <h3 className="text-4xl font-black text-red-400 uppercase tracking-widest flex items-center justify-center gap-6">
                   <Globe className="h-10 w-10" /> SCUGP-Mars-1
                 </h3>
                 <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                   "Fenêtre de lancement 2029 confirmée. Déploiement de l'infrastructure de survie autonome par IA."
                 </p>
                 <Badge variant="outline" className="border-red-500/30 text-red-400 font-black uppercase px-8">MISSION_LOCKED</Badge>
              </div>
           </div>

           <div className="flex gap-12 items-center text-slate-500 font-black uppercase text-sm tracking-[0.5em]">
              <div className="flex items-center gap-4"><Activity className="animate-pulse text-blue-400" /> SYNC_ORBITALE : NOMINAL</div>
              <div className="h-12 w-px bg-white/10" />
              <div className="flex items-center gap-4"><ShieldCheck className="text-emerald-500" /> SÉCURITÉ : SCELLÉE</div>
           </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center">
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-5xl border-none">
             ACTIVER LE NEXUS SPATIAL Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

import { Satellite, Moon } from 'lucide-react';
