
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, Satellite, Telescope, Zap, Droplets, 
  Sun, Pickaxe, Leaf, HeartPulse, Coins, Box, 
  Target, Wind, Eye, Radio, Star, Home, Microscope, 
  Search, ShieldCheck, Activity, Network, Atom, Database, Brain, Headphones, Dna
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

const iconMap: Record<string, any> = {
  Droplets, Sun, Pickaxe, Leaf, HeartPulse, Coins, 
  Satellite, Box, Target, Wind, Eye, Radio,
  Globe, Star, Home, Zap, Microscope, Search,
  Atom, Database, Brain, Headphones, Dna
};

export const NexusMondialUI = () => {
  const terrestrial = SCUGPHubUltimate.getTerrestrialModules();
  const orbital = SCUGPHubUltimate.getOrbitalModules();
  const cosmic = SCUGPHubUltimate.getCosmicModules();
  const allModules = SCUGPHubUltimate.getModulesStatus();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* 10 Modules SCUGP Principaux */}
      <div className="flex flex-col items-center gap-6 text-center">
        <Database className="h-16 w-16 text-blue-500 animate-pulse" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Les 10 Piliers Industriels Ω</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Maillage Technologique Consolidated SCUGP v109.0</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {allModules.map((m) => (
          <Card key={m.id} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-emerald-500/30 transition-all flex flex-col shadow-2xl relative">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
               <div className="h-16 w-16 mx-auto mb-6 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {m.id === 'OIL' && <Droplets className="text-blue-400" />}
                  {m.id === 'CCUS' && <Leaf className="text-emerald-400" />}
                  {m.id === 'RENEW' && <Sun className="text-amber-400" />}
                  {m.id === 'H2' && <Zap className="text-blue-500" />}
                  {m.id === 'QUANTUM' && <Atom className="text-purple-400" />}
                  {m.id === 'CHAIN' && <Database className="text-amber-600" />}
                  {m.id === 'NEURO' && <Brain className="text-pink-400" />}
                  {m.id === 'BIO' && <Dna className="text-emerald-500" />}
                  {m.id === 'FUSION' && <Zap className="text-red-500" />}
                  {m.id === 'ASTRO' && <Telescope className="text-blue-300" />}
               </div>
               <CardTitle className="text-2xl font-black uppercase tracking-tighter text-white">{m.name}</CardTitle>
               <Badge className="mt-4 bg-emerald-600 text-black font-black border-none uppercase px-4 py-1 text-[8px] mx-auto">{m.status}</Badge>
            </CardHeader>
            <CardContent className="p-8 flex-1 text-center">
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{m.func}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* nexus visuel */}
      <Card className="bg-black border-[12px] border-white/10 rounded-[10rem] overflow-hidden relative min-h-[600px] shadow-5xl text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:80px_80px] pointer-events-none" />
         <CardContent className="p-32 flex flex-col items-center justify-center space-y-16">
            <div className="relative">
               <Network size={200} className="text-white/10 animate-spin-slow" style={{ animationDuration: '40s' }} />
               <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck size={100} className="text-emerald-500 animate-pulse" />
               </div>
            </div>
            <div className="space-y-8">
               <h3 className="text-8xl font-black uppercase tracking-[0.5em] text-white">NEXUS MONDIAL Ω</h3>
               <p className="text-3xl text-slate-500 font-bold uppercase tracking-[0.8em] italic">"L'UNIFICATION DE TOUS LES POSSIBLES"</p>
            </div>
            <div className="flex gap-12 pt-12">
               <div className="flex items-center gap-4 text-emerald-500">
                  <Activity size={24} className="animate-bounce" />
                  <span className="text-xs font-black uppercase tracking-[0.4em]">SYNC_GLOBALE : 100%</span>
               </div>
               <div className="flex items-center gap-4 text-blue-500">
                  <Globe size={24} className="animate-spin-slow" />
                  <span className="text-xs font-black uppercase tracking-[0.4em]">PAYS : 195 CONNECTÉS</span>
               </div>
            </div>
         </CardContent>
      </Card>
    </div>
  );
};
