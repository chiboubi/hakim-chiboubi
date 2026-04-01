
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Zap, Infinity as InfinityIcon, Activity, History, ShieldCheck, Share2, Workflow, Clock, Atom, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const CausalLoopEngine = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [causalFlux, setCausalFlux] = useState(99.99);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCausalFlux(f => Math.min(100, f + 0.000001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRetrocausalOptimization = async () => {
    if (!db) return;
    setIsLooping(true);
    try {
      await SCUGPHubUltimate.triggerCausalLoop(db, "DRILLING_ALPHA_04", "Future Self sent solution: Compensate pressure at Node-B");
      toast({
        title: "Boucle Temporelle Fermée",
        description: "La solution du futur a été implémentée dans le passé."
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[10px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-blue-900/50 bg-blue-500/5 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/20 animate-spin-slow">
                  <History className="h-10 w-10 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Moteur de Boucle Causale</CardTitle>
                  <CardDescription className="text-sm font-bold text-blue-500/60 uppercase tracking-widest mt-2">Optimisation Rétrocausale & Anticipation Temporelle</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_1px,transparent_1px)] bg-[length:40px_40px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-10">
                   <div className="relative">
                      <InfinityIcon size={180} className="text-blue-500/20 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Clock size={80} className="text-blue-400 animate-pulse" />
                      </div>
                   </div>
                   <div className="text-center space-y-4">
                      <p className="text-4xl font-mono text-blue-400 uppercase tracking-[1em] font-black">RÉTROCAUSALITÉ</p>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">L'OPTIMISATION EST DÉJÀ FAITE</p>
                   </div>
                </div>

                <div className="absolute bottom-10 right-10 p-6 bg-black/80 border-2 border-blue-500/50 rounded-[2rem] backdrop-blur-3xl shadow-3xl">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">Causal Flux</p>
                  <p className="text-2xl font-black text-white text-center font-mono">{causalFlux.toFixed(6)}%</p>
                </div>
              </div>

              <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-[3.5rem] shadow-inner text-center">
                <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tight text-balance">
                  "Le système envoie la solution optimale dans le passé. Le présent constate que le projet est déjà terminé et optimisé avant d'avoir commencé."
                </p>
              </div>
            </CardContent>
            <CardFooter className="relative z-10 p-12 border-t border-blue-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <History className="h-8 w-8 text-blue-500 animate-spin-slow" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Flux Temporel: INVERSÉ</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-emerald-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Cohérence: 100%</span>
                  </div>
               </div>
               <Button 
                onClick={handleRetrocausalOptimization} 
                disabled={isLooping}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] text-sm uppercase tracking-[0.4em] shadow-[0_0_80px_rgba(37,99,235,0.4)]"
               >
                 {isLooping ? <Loader2 className="animate-spin mr-4" /> : <Zap className="mr-4" />}
                 FERMER LA BOUCLE TEMPORELLE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center justify-center gap-4 tracking-widest">
                <Atom className="h-6 w-6 animate-spin-slow" /> Paradox Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
               <div className="space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500">
                    <span>Cohérence Temporelle</span>
                    <span className="text-emerald-500">PARFAITE</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-full animate-pulse" />
                  </div>
               </div>
               <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold text-center">
                 "Auto-cohérence intégrée : aucune boucle temporelle ne peut générer de paradoxe dans l'univers du Dr. Hakim."
               </p>
            </CardContent>
          </Card>

          <div className="p-12 bg-black border-4 border-blue-600/30 rounded-[4rem] shadow-5xl text-center group transition-all hover:bg-blue-900/10">
             <Workflow size={80} className="text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">Clairvoyance Quantique</h3>
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
               Prédire avec une certitude de 100% en effondrant les fonctions d'onde optimales.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
