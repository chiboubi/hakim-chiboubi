"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Waves, Zap, ShieldCheck, Activity, Target, BrainCircuit,
  Database, RefreshCw, Loader2, Search, Microscope, Layers, Binary,
  Ship, Anchor, Radio, Globe, Satellite, Sparkles, Map as MapIcon,
  Radar, Droplets, Bot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const OffshoreExplorationUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const metrics = SCUGPHubUltimate.getOffshoreSlicksMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDeepImaging = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Offshore Terminé",
        description: "Suintements naturels identifiés à 90% de certitude. Gisement scellé."
      });
    }, 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Détection Slicks", val: metrics.sar_detection_rate, icon: Droplets, color: "text-blue-400" },
          { label: "GNSS Précision", val: metrics.gnss_precision, icon: Target, color: "text-cyan-400" },
          { label: "Sync AUV", val: metrics.auv_mesh_status, icon: Bot, color: "text-purple-400" },
          { label: "Statut Riser", val: metrics.riser_integrity, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Ship className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Exploration Offshore Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">IA & Radar SAR pour l'identification de gisements en eaux ultra-profondes</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {isScanning ? (
                <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                   <Loader2 className="h-24 w-24 text-blue-400 animate-spin" />
                   <div className="text-center space-y-4">
                     <p className="text-5xl font-mono text-blue-400 uppercase tracking-[1em] font-black">SLICK_SEARCH_SAR...</p>
                     <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">GNSS_SYNC : CENTIMETRIC_LOCKED</p>
                   </div>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <Radar size={160} className="text-blue-500/20 animate-spin-slow" />
                   <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                     "Le moteur SAR identifie les suintements naturels en filtrant les pollutions anthropiques via les algorithmes de grade 50.0. Précision GNSS assurée par les constellations LEO."
                   </p>
                </div>
              )}
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Anchor className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">POSITION : ULTRA-DEEP</span>
           </div>
           <Button onClick={handleDeepImaging} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             LANCER SCAN OFFSHORE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
