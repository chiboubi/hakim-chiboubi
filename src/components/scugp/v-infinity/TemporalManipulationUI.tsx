
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, History, RefreshCw, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, Target, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const TemporalManipulationUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const metrics = SCUGPHubUltimate.getTemporalMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRetrocausal = async () => {
    if (!db) return;
    setIsLooping(true);
    try {
      await SCUGPHubUltimate.triggerCausalLoop(db, "TEMPORAL_ANCHOR_PROXIMA", "Future success imported to present grid.");
      toast({
        title: "Inversion Temporelle Réalisée",
        description: "L'optimisation du futur a été ancrée dans votre présent."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLooping(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Flux Rétrocausal", val: metrics.retrocausal_flux, icon: RefreshCw, color: "text-blue-400" },
          { label: "Anticipation", val: metrics.anticipation_window, icon: Target, color: "text-amber-400" },
          { label: "Intégrité Wormhole", val: metrics.wormhole_integrity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Statut", val: metrics.status, icon: Clock, color: "text-white" }
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <History className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">TEMPORAL-Ω4 : MANIPULATION</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Inversion de la Flèche du Temps & Optimisation Rétroactive</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
           <div className="flex flex-col items-center justify-center py-12 space-y-12">
              <div className="relative">
                 <div className="w-80 h-80 border-4 border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <InfinityIcon size={120} className="text-blue-400 animate-pulse" />
                 </div>
              </div>
              <div className="text-center max-w-3xl space-y-8">
                 <p className="text-3xl font-black text-white uppercase tracking-tighter">"Le Futur n'est plus une destination, c'est une ressource."</p>
                 <p className="text-lg text-slate-400 italic">
                   "Le moteur de manipulation temporelle permet au Dr. Hakim Chibubi d'importer des solutions techniques depuis les branches abouties du multivers."
                 </p>
              </div>
           </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center">
           <Button 
            onClick={handleRetrocausal}
            disabled={isLooping}
            className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-5xl border-none"
           >
             {isLooping ? <Loader2 className="animate-spin mr-4" /> : <RefreshCw className="mr-4" />}
             ACTIVER L'INVERSION Ω4
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
