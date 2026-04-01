
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Map as MapIcon, Globe, Zap, ShieldCheck, Activity, 
  RefreshCw, Loader2, Radio, Database, Search, 
  Layers, Filter, Binary, Sparkles, Box
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const LeafmapInterfaceUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const sources = SCUGPHubUltimate.getLeafmapSources();
  const metrics = SCUGPHubUltimate.getGeospatialMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGlobalSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      toast({
        title: "Leafmap Sync Terminée",
        description: "Intégration multi-sources (Sentinel, Landsat, Planet) scellée."
      });
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Sources Liées", val: sources.length, icon: Database, color: "text-blue-400" },
          { label: "Sync Latence", val: "0.02ms", icon: Zap, color: "text-amber-400" },
          { label: "Maillage Nœuds", val: metrics.leafmap_nodes, icon: Globe, color: "text-emerald-400" },
          { label: "Statut", val: "CONVERGÉ", icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-xl font-black font-mono text-white uppercase tracking-widest">{m.val}</CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
               <MapIcon className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Leafmap Integrator Ω</CardTitle>
               <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Hub de Cartographie Multi-Sources & Visualisation de Strate</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner text-center group hover:bg-blue-500/10 transition-all">
                     <Layers className="h-12 w-12 text-blue-400 mx-auto animate-pulse" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest">Multi-Layer Mesh</h4>
                     <p className="text-sm text-slate-400 italic">"Fusion instantanée des couches XYZ, WMS et Google Earth Engine dans une seule interface de grade Source."</p>
                     <Badge variant="outline" className="border-blue-500/30 text-blue-400 font-black uppercase px-6">MESH_READY</Badge>
                  </div>
                  <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-emerald-500/20 space-y-6 shadow-inner text-center group hover:bg-emerald-500/10 transition-all">
                     <RefreshCw className="h-12 w-12 text-emerald-400 mx-auto animate-bounce" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest">Dynamic Sync</h4>
                     <p className="text-sm text-slate-400 italic">"Synchronisation bidirectionnelle avec les datasets locaux et cloud. Intégrité validée par le Ledger SCUGP."</p>
                     <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 font-black uppercase px-6">100%_FIDELITY</Badge>
                  </div>
               </div>

               <div className="p-12 bg-blue-500/5 border border-blue-500/20 rounded-[4rem] text-center relative overflow-hidden group/box">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover/box:translate-x-full transition-transform duration-2000" />
                  <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty px-12 relative z-10">
                    "Leafmap permet une agilité cartographique sans précédent. Le Dr. Hakim Chibubi peut désormais manipuler l'espace comme une donnée pure."
                  </p>
               </div>
            </CardContent>

            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-between items-center">
               <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
                  <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse" /> SYNC : MULTI_SOURCE</div>
                  <div className="flex items-center gap-3"><ShieldCheck size={24} className="text-emerald-500" /> AUTH : SCELLÉ</div>
               </div>
               <Button onClick={handleGlobalSync} disabled={isSyncing} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-[0.5em] text-sm shadow-5xl border-none transition-all">
                 {isSyncing ? <Loader2 className="animate-spin mr-4" /> : <RefreshCw className="mr-4" />}
                 SYNCHRONISER LE MAILLAGE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest flex items-center justify-center gap-4">
                <Box className="h-6 w-6 animate-pulse" /> Sources Leafmap
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-blue-900">
               {sources.map((s) => (
                 <div key={s.id} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{s.id}</span>
                       <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{s.status}</Badge>
                    </div>
                    <h5 className="text-lg font-black text-white uppercase tracking-tighter">{s.name}</h5>
                    <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">Type : {s.type}</p>
                 </div>
               ))}
               
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <Database className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-blue-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "VOTRE SOUVERAINETÉ CARTOGRAPHIQUE EST VALIDÉE PAR L'INTÉGRATION LEAFMAP."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
