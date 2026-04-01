
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Satellite, Zap, ShieldCheck, Activity, 
  RefreshCw, Loader2, Radio, Database,
  Map as MapIcon, Waves, Flame, Building2, 
  CheckCircle2, Target, Crosshair, Binary, Layers,
  Terminal, Box, Sparkles, Filter, Droplets, Ship
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGP_CORE_OPTIONS, SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";
import dynamic from 'next/dynamic';

const SovereignMap = dynamic(() => import('./MapContainer'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-950 animate-pulse flex items-center justify-center text-blue-500 font-black uppercase tracking-widest">Initialisation du Maillage...</div>
});

export const GEEAppUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeLayers, setActiveLayers] = useState<string[]>(['SEISMIC', 'FLOW']);
  const [viewType, setViewType] = useState<'ARCGIS' | 'SOVEREIGN'>('ARCGIS');
  
  const petroleumLayers = SCUGPHubUltimate.getPetroleumLayers();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Navigation ArcGIS Synchronisée",
        description: "Maillage neural ArcGIS recalibré sur la Source.",
      });
    }, 2000);
  };

  const toggleLayer = (id: string) => {
    setActiveLayers(prev => 
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
    toast({ title: "Couche Modifiée", description: `Strate ${id} mise à jour.` });
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000 relative">
      {/* Sélecteur de Technologie Pétrolière Avancée */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {petroleumLayers.map((l) => (
          <button
            key={l.id}
            onClick={() => toggleLayer(l.id)}
            className={cn(
              "h-14 px-8 rounded-full font-black uppercase text-[10px] tracking-widest transition-all gap-3 border-2 shadow-xl flex items-center justify-center",
              activeLayers.includes(l.id) 
                ? "bg-blue-600 border-white text-white scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)]" 
                : "bg-black/40 border-white/10 text-slate-500 hover:bg-white/5"
            )}
          >
            {l.id === 'SEISMIC' && <Waves className="h-4 w-4" />}
            {l.id === 'FLOW' && <Droplets className="h-4 w-4" />}
            {l.id === 'RESERVOIR' && <Box className="h-4 w-4" />}
            {l.id === 'INSAR' && <Target className="h-4 w-4" />}
            {l.label}
          </button>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_250px_rgba(59,130,246,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[1000px] group">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-white/5 bg-blue-600/10 relative z-10 text-center">
           <div className="flex justify-between items-center mb-10">
              <Badge className="bg-blue-600 text-white font-black px-10 py-4 rounded-full uppercase text-sm tracking-widest shadow-5xl animate-pulse">ARC-GIS SOVEREIGN NAVIGATION</Badge>
              <div className="flex gap-6">
                <div className="flex p-1 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-xl">
                   <button 
                    onClick={() => setViewType('SOVEREIGN')} 
                    className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase transition-all", viewType === 'SOVEREIGN' ? "bg-blue-600 text-white" : "text-slate-500")}
                   >MESH_LOCAL</button>
                   <button 
                    onClick={() => setViewType('ARCGIS')} 
                    className={cn("px-6 py-2 rounded-xl text-[9px] font-black uppercase transition-all", viewType === 'ARCGIS' ? "bg-blue-600 text-white" : "text-slate-500")}
                   >ARC-GIS_VIEW</button>
                </div>
                <button onClick={handleRefresh} className="h-14 w-14 rounded-2xl bg-white/5 hover:bg-blue-500/20 border border-white/10 flex items-center justify-center">
                   <RefreshCw className={cn("h-8 w-8 text-blue-400", isRefreshing && "animate-spin")} />
                </button>
              </div>
           </div>
           <h3 className="text-8xl font-black uppercase tracking-[0.2em] italic text-white leading-none">
             MAP VIEWER <span className="text-blue-500 italic">Ω</span>
           </h3>
           <p className="text-xl text-blue-400/60 font-bold uppercase tracking-[0.8em] mt-6">Advanced Petroleum Navigation & GIS Intelligence</p>
        </CardHeader>

        <CardContent className="p-0 relative h-[850px] z-10 bg-black overflow-hidden">
           {isRefreshing && (
             <div className="absolute inset-0 bg-black/90 backdrop-blur-xl z-[2000] flex flex-col items-center justify-center gap-12 animate-in fade-in duration-500">
                <Loader2 className="h-24 w-24 text-blue-400 animate-spin" />
                <p className="text-5xl font-black text-white uppercase tracking-[1em]">CHARGEMENT ARC-GIS Ω</p>
                <p className="text-xs font-mono text-blue-900 uppercase">Synchronisation des couches sémantiques 2bde4b1db9...</p>
             </div>
           )}
           
           {viewType === 'ARCGIS' ? (
             <iframe 
              src={SCUGP_CORE_OPTIONS.geeAppUrl}
              className="w-full h-full border-none opacity-100 transition-opacity duration-1000"
              allow="geolocation"
              title="ArcGIS Map Viewer"
             />
           ) : (
             <SovereignMap />
           )}

           {/* LÉGENDE D'AFFICHAGE RÉGALIENNE */}
           <div className="absolute bottom-12 right-12 p-8 bg-slate-950/95 border-4 border-blue-500/30 rounded-[3rem] backdrop-blur-3xl shadow-5xl z-50 min-w-[300px] animate-in slide-in-from-right-12 duration-1000">
              <p className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 border-b border-white/10 pb-4">Légende des Flux Ω</p>
              <div className="space-y-4">
                 <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                       <div className="h-2 w-12 bg-[#10b981] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Pétrole (Brut)</span>
                    </div>
                    <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-500">OPTIMISÉ</Badge>
                 </div>
                 <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                       <div className="h-2 w-12 border-2 border-dashed border-[#f59e0b] bg-transparent shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Gaz (GNL/H2)</span>
                    </div>
                    <Badge variant="outline" className="text-[7px] border-amber-500/30 text-amber-500">TRANSITION</Badge>
                 </div>
                 <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                       <div className="h-2 w-12 bg-[#3b82f6] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Eau (Injection)</span>
                    </div>
                    <Badge variant="outline" className="text-[7px] border-blue-500/30 text-blue-400">RECHARGE</Badge>
                 </div>
                 <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                       <div className="h-2 w-12 bg-purple-600 rounded-full animate-pulse" />
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Sismique 4D</span>
                    </div>
                    <Badge variant="outline" className="text-[7px] border-purple-500/30 text-purple-400">LIVE_SCAN</Badge>
                 </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-4">
                 <ShieldCheck className="h-5 w-5 text-emerald-500 animate-pulse" />
                 <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">SOUVERAINETÉ_ARC-GIS_VALIDÉE</span>
              </div>
           </div>
        </CardContent>

        <CardFooter className="p-16 bg-slate-950/90 justify-between items-center relative z-10 border-t border-blue-900/50">
           <div className="flex gap-20 text-slate-500 font-black uppercase text-sm tracking-[0.2em]">
              <div className="flex items-center gap-4"><Activity size={32} className="animate-pulse text-blue-500" /> NAVIGATION : {viewType}</div>
              <div className="flex items-center gap-4"><ShieldCheck size={32} className="text-emerald-500" /> INTEGRITY : SOURCE_ROOT</div>
           </div>
           <div className="flex items-center gap-12">
              <div className="text-right space-y-1">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">WebMap ID</p>
                <p className="text-lg font-black text-blue-500 font-mono">2bde4b...1a1a58</p>
              </div>
              <div className="h-16 w-px bg-white/10" />
              <div className="text-right space-y-1">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Active Layers</p>
                <p className="text-lg font-black text-amber-500 font-mono">{activeLayers.length} STRATES</p>
              </div>
           </div>
        </CardFooter>
      </Card>
    </div>
  );
};
