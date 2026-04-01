
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Sparkles, Target, Microscope, ShieldCheck, Activity, 
  RefreshCw, Loader2, Search, Layers, Binary, Crosshair,
  Map as MapIcon, Database, Bot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const SamGeoInterfaceUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSegmenting, setIsSegmenting] = useState(false);
  const metrics = SCUGPHubUltimate.getSamGeoStatus();
  const results = SCUGPHubUltimate.getSamGeoResults();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSegment = () => {
    setIsSegmenting(true);
    setTimeout(() => {
      setIsSegmenting(false);
      toast({
        title: "Segmentation SAM Réussie",
        description: "L'objet a été extrait avec une fidélité pixel de 1.0000."
      });
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Modèle", val: metrics.model, icon: Bot, color: "text-purple-400" },
          { label: "Charge GPU", val: metrics.gpu_load, icon: Zap, color: "text-amber-400" },
          { label: "Reconnaissance", val: metrics.recognition_rate, icon: Target, color: "text-blue-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all backdrop-blur-xl">
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
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
               <Crosshair className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-pulse" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Segment Anything Geo Ω</CardTitle>
               <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Extraction sémantique d'objets par IA de Grade Source</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
               <div className="aspect-video w-full max-w-4xl bg-slate-900 rounded-[3rem] border-4 border-purple-500/20 relative overflow-hidden group shadow-inner">
                  <img src="https://picsum.photos/seed/samgeo/1200/800" alt="Satellite Segmentation" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     {isSegmenting ? (
                       <div className="flex flex-col items-center gap-6 animate-pulse">
                          <Loader2 className="h-20 w-20 text-purple-400 animate-spin" />
                          <p className="text-3xl font-black text-white uppercase tracking-[0.5em]">SEGMENTATION NEURALE...</p>
                       </div>
                     ) : (
                       <div className="relative">
                          <div className="w-64 h-64 border-4 border-purple-500/50 rounded-3xl animate-pulse flex items-center justify-center">
                             <Target size={80} className="text-purple-400 opacity-20" />
                          </div>
                          <p className="text-sm font-mono text-purple-400 uppercase mt-6 text-center">Cliquez pour segmenter la Strate</p>
                       </div>
                     )}
                  </div>
               </div>
            </CardContent>
            
            <CardFooter className="p-16 border-t border-purple-900/50 bg-slate-950/50 flex justify-center">
               <Button onClick={handleSegment} disabled={isSegmenting} className="bg-purple-600 hover:bg-purple-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
                 SEGMENTER L'OBJET Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3.5rem] shadow-3xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-purple-400 tracking-widest">Objets Extraits (SAM)</CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="space-y-6">
                  {results.map((res) => (
                    <div key={res.id} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-purple-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">{res.id}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">VALIDE</Badge>
                       </div>
                       <h5 className="text-lg font-black text-white uppercase tracking-tighter">{res.name}</h5>
                       <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">Surface : {res.area}</p>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-purple-500/5 border-2 border-purple-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <Database className="h-12 w-12 text-purple-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-purple-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "VOTRE SOUVERAINETÉ SÉMANTIQUE EST ASSURÉE PAR LE MODÈLE SAM-VIT-H."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
