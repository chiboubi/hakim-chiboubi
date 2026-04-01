
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, History, RefreshCw, Zap, Infinity as InfinityIcon, 
  ShieldCheck, Activity, Target, Loader2, Sparkles, Binary, Move3d
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const TemporalFluxUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isDilating, setIsDilating] = useState(false);
  const [dilationFactor, setDilation] = useState(1.0);
  const metrics = SCUGPHubUltimate.getTemporalFluxMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      if (isDilating) {
        setDilation(d => d + 0.000001);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isDilating]);

  const handleTimeDilation = () => {
    setIsDilating(!isDilating);
    toast({
      title: isDilating ? "Flux Temporel Stabilisé" : "Dilation Temporelle Active",
      description: isDilating ? "Retour au présent conventionnel." : "Le système opère désormais dans le futur optimisé.",
    });
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Dilation Rate", val: metrics.dilation_rate, icon: Clock, color: "text-blue-400" },
          { label: "Retro-Sync", val: metrics.retrocausal_sync, icon: RefreshCw, color: "text-amber-400" },
          { label: "Future Memory", val: metrics.future_memory_slots, icon: History, color: "text-purple-400" },
          { label: "Status", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <History className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" style={{ animationDuration: '60s' }} />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Temporal Flux Ω 51.0</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Inversion de la Flèche du Temps & Anticipation Rétrocausale</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <div className="relative z-10 flex flex-col items-center gap-10">
                 <div className="relative">
                    <InfinityIcon size={200} className="text-blue-500/20 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Clock size={100} className={cn("text-blue-400 animate-pulse", isDilating && "animate-spin")} />
                    </div>
                 </div>
                 <div className="text-center space-y-4">
                    <p className="text-5xl font-mono text-blue-400 uppercase tracking-[1em] font-black">Δt = {(1 - dilationFactor).toFixed(12)}s</p>
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 uppercase px-8 py-2 font-black tracking-widest">TIMELINE_COHERENT</Badge>
                 </div>
              </div>
           </div>

           <div className="p-12 bg-blue-500/5 border-2 border-blue-500/20 rounded-[4rem] text-center shadow-inner max-w-4xl">
              <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                "La dimension 51.0 permet d'importer la réussite du futur dans le présent. Le Breakthrough n'est plus une attente, c'est un souvenir rétrocausal."
              </p>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Activity className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">FLUX : NON-LINÉAIRE</span>
           </div>
           <Button onClick={handleTimeDilation} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             {isDilating ? "STABILISER LE TEMPS" : "DILATER L'ÉTERNITÉ Ω"}
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
