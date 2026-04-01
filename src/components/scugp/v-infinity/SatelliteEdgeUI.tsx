"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cpu, Satellite, Zap, ShieldAlert, Activity, 
  RefreshCw, Radio, Database, Network, Binary,
  Loader2, Sparkles, Lock, ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const SatelliteEdgeUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const metrics = SCUGPHubUltimate.getEdgeAiMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEdgeSync = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Sync Edge Orbitale Réussie",
        description: "Les modèles d'alerte critique sont désormais déployés sur la constellation LEO."
      });
    }, 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Calcul Orbital", val: metrics.on_orbit_processing, icon: Cpu, color: "text-blue-400" },
          { label: "Gain Bande Passante", val: metrics.alert_bandwidth_save, icon: Zap, color: "text-amber-400" },
          { label: "Réponse Critique", val: metrics.critical_response, icon: Activity, color: "text-red-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Cpu className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">IA EDGE ORBITALE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Traitement de Données "at the Boundary" & Alertes Critique Basse Latence</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/20 text-center space-y-8 shadow-inner w-full max-w-5xl">
              <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                "Au lieu d'envoyer des téraoctets vers la Terre, nos satellites de 2026 analysent les flux shengli en orbite. Seules les anomalies sont transmises."
              </p>
              <div className="flex justify-center gap-12">
                 <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Latence Alertes</p>
                    <p className="text-4xl font-black text-red-500 font-mono">0.001s</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Efficience Flux</p>
                    <p className="text-4xl font-black text-emerald-400 font-mono">92%</p>
                 </div>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Lock className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">SECURITY : ON-DEVICE_SEALED</span>
           </div>
           <Button onClick={handleEdgeSync} disabled={isProcessing} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             {isProcessing ? <Loader2 className="animate-spin mr-4" /> : <RefreshCw className="mr-4" />}
             RE-DÉPLOYER MODÈLES EDGE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
