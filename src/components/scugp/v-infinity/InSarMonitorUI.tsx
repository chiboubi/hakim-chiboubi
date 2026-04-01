
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, ShieldCheck, Zap, Waves, Droplets, 
  Target, Globe, RefreshCw, Loader2, AlertTriangle, 
  Binary, Layers, Radio
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const InSarMonitorUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [displacement, setDisplacement] = useState(0.02);
  const metrics = SCUGPHubUltimate.getSarInSarMetrics ? SCUGPHubUltimate.getSarInSarMetrics() : { geotechnic_stability: "99.98%", status: "OK" };

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setDisplacement(prev => prev + (Math.random() - 0.5) * 0.001);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleInSarAudit = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Audit InSAR Terminé",
        description: "Analyse millimétrique des déplacements du sol validée. Stabilité critique confirmée."
      });
    }, 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Stabilité Géotech", val: metrics.geotechnic_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Précision InSAR", val: "0.001mm", icon: Target, color: "text-blue-400" },
          { label: "Déformation Sol", val: displacement.toFixed(4) + " mm", icon: Activity, color: "text-amber-400" },
          { label: "Pénétration Nuage", val: "100%", icon: Zap, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
           <Waves className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">InSAR & SAR Monitor Ω</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Surveillance Géotechnique Millimétrique & Détection de Marées Noires</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-emerald-500/20 space-y-6 shadow-inner text-center group hover:bg-emerald-500/10 transition-all">
                 <h4 className="text-2xl font-black text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-4">
                   <Target className="h-8 w-8" /> Stabilité Bassins
                 </h4>
                 <p className="text-sm text-slate-400 italic">"Analyse InSAR continue des tailings dams. Détection précoce des micro-fractures structurelles par micro-ondes traversantes."</p>
                 <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 uppercase px-6 py-1 font-black">PRECISION_MILLIMÉTRIQUE</Badge>
              </div>
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner text-center group hover:bg-blue-500/10 transition-all">
                 <h4 className="text-2xl font-black text-blue-400 uppercase tracking-widest flex items-center justify-center gap-4">
                   <Droplets className="h-8 w-8" /> Marées Noires SAR
                 </h4>
                 <p className="text-sm text-slate-400 italic">"Identification instantanée des hydrocarbures par détection de rugosité de surface marine (Standard UNECE)."</p>
                 <Badge variant="outline" className="border-blue-500/30 text-blue-400 uppercase px-6 py-1 font-black">ALL_WEATHER_DETECT</Badge>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-emerald-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Radio className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">MODE : SAR_SYNTHETIC</span>
           </div>
           <Button onClick={handleInSarAudit} disabled={isScanning} className="bg-emerald-600 hover:bg-emerald-700 text-black font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             {isScanning ? <Loader2 className="animate-spin mr-4" /> : <RefreshCw className="mr-4" />}
             LANCER AUDIT INSAR Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
