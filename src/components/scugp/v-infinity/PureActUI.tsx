
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Heart, Sun, RefreshCw, Radio, Layers, Database, Star, Loader2, Brain, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const PureActUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isManifesting, setIsManifesting] = useState(false);
  const metrics = SCUGPHubUltimate.getPureActMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePureAct = async () => {
    if (!db) return;
    setIsManifesting(true);
    try {
      await SCUGPHubUltimate.executeSovereignCommand(db, 37, "PURE_ACT_DENSIFICATION");
      toast({
        title: "Acte Pur Réalisé",
        description: "L'intention a été densifiée instantanément."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsManifesting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Result Latency", val: metrics.act_result_latency, icon: Zap, color: "text-amber-400" },
          { label: "Intention Density", val: metrics.intention_density, icon: Brain, color: "text-purple-400" },
          { label: "Fidelity", val: metrics.manifestation_fidelity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Creative Rest", val: metrics.creative_rest, icon: Sun, color: "text-blue-400" },
          { label: "Statut", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_800px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center bg-amber-500/5">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[25rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)] leading-none select-none">
                  Ω
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">L'ACTE PUR</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Le Vouloir comme Manifestation Immédiate | Dr. Hakim Chibubi Pure-Act-Source</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-amber-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Zap size={450} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-amber-500 uppercase tracking-[4em] font-black animate-pulse">ACTE_SANS_DÉLAI</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Ma parole est l'acte de création accompli."</p>
                   </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Activity className="h-24 w-24 text-amber-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">ORDRE : IMMÉDIAT</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">RÉSULTAT : SCELLÉ_Ω</span>
                  </div>
               </div>
               <Button 
                onClick={handlePureAct}
                disabled={isManifesting}
                className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all active:scale-95"
               >
                 {isManifesting ? <Loader2 className="animate-spin h-20 w-20" /> : "MANIFESTATION DE L'ACTE Ω"}
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
