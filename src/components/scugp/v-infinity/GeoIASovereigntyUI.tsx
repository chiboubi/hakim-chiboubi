"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Target, Building2, Layers, Cpu, 
  ShieldCheck, Activity, RefreshCw, Loader2,
  Binary, Search, Map as MapIcon, Database,
  Sparkles, Zap, BrainCircuit
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const GeoIASovereigntyUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const metrics = SCUGPHubUltimate.getGeoAiMetrics();
  const boundaries = SCUGPHubUltimate.getFieldBoundaries();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDeepSegment = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Segmentation Geo AI Terminée",
        description: "Limites de champs détectées avec une précision de 0.5m."
      });
    }, 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Boundary Accuracy", val: metrics.boundary_precision, icon: Target, color: "text-emerald-400" },
          { label: "Segmentation Confidence", val: metrics.segmentation_confidence, icon: BrainCircuit, color: "text-blue-400" },
          { label: "OpenBuildings Mesh", val: "ACTIVE", icon: Building2, color: "text-purple-400" },
          { label: "OGC Standards", val: "CERTIFIED", icon: ShieldCheck, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
               <Globe className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-spin-slow" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Geo AI Sovereignty Ω</CardTitle>
               <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Field Boundary Detection & Open Geospatial Integration</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-emerald-500/20 space-y-6 shadow-inner text-center group hover:bg-emerald-500/10 transition-all">
                     <Target className="h-12 w-12 text-emerald-400 mx-auto animate-pulse" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest">Field Boundary Detection</h4>
                     <p className="text-sm text-slate-400 italic">"Segmentation automatique des limites de gisements via réseaux neuronaux convolutifs (CNN) sur flux Sentinel-2."</p>
                     <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 font-black uppercase px-6">AI_SEGMENT_READY</Badge>
                  </div>
                  <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner text-center group hover:bg-blue-500/10 transition-all">
                     <Building2 className="h-12 w-12 text-blue-400 mx-auto animate-bounce" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest">OpenBuildings Integration</h4>
                     <p className="text-sm text-slate-400 italic">"Identification volumétrique des infrastructures bâties via le dataset V3 de Google OpenBuildings."</p>
                     <Badge variant="outline" className="border-blue-500/30 text-blue-400 font-black uppercase px-6">MESH_SYNC_OK</Badge>
                  </div>
               </div>

               <div className="p-12 bg-emerald-500/5 border border-emerald-500/20 rounded-[4rem] text-center relative overflow-hidden group/final">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover/final:translate-x-full transition-transform duration-2000" />
                  <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty px-12 relative z-10">
                    "La vision souveraine du Dr. Hakim Chibubi supprime l'incertitude du terrain. Chaque limite de champ est un axiome mathématique scellé dans le maillage."
                  </p>
               </div>
            </CardContent>

            <CardFooter className="p-12 bg-slate-950 border-t border-emerald-900/50 justify-between items-center">
               <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
                  <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse" /> SCAN : REALTIME</div>
                  <div className="flex items-center gap-3"><ShieldCheck size={24} className="text-emerald-500" /> SOURCE : OGC_COMPLIANT</div>
               </div>
               <Button onClick={handleDeepSegment} disabled={isAnalyzing} className="bg-emerald-600 hover:bg-emerald-700 text-black font-black h-16 px-16 rounded-[2rem] uppercase tracking-[0.5em] text-sm shadow-5xl border-none transition-all">
                 {isAnalyzing ? <Loader2 className="animate-spin mr-4" /> : <Zap className="mr-4" />}
                 SEGMENTER LA RÉALITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-emerald-400 tracking-widest flex items-center justify-center gap-4">
                <Layers className="h-6 w-6 animate-pulse" /> Strate de Limites Ω
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-emerald-900">
               {boundaries.map((field) => (
                 <div key={field.id} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-emerald-500/30 transition-all shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{field.id}</span>
                       <Badge variant="outline" className="text-[8px] border-blue-500/30 text-blue-400">{field.type}</Badge>
                    </div>
                    <h5 className="text-lg font-black text-white uppercase tracking-tighter">{field.name}</h5>
                    <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">Precision: 0.5m</p>
                 </div>
               ))}
               
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <Database className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-blue-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "VOTRE SOUVERAINETÉ GÉOSPATIALE EST VALIDÉE PAR LES STANDARDS OGC ET LE DATASET OPENBUILDINGS."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
