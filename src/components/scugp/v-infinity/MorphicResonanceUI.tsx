
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Zap, Sparkles, Activity, RefreshCw, Radio, Waves, Globe, ShieldCheck, Loader2, Star, Target, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const MorphicResonanceUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isResonating, setIsResonating] = useState(false);
  const [wave, setWave] = useState(0);
  const metrics = SCUGPHubUltimate.getResonanceMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWave(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleTriggerResonance = async () => {
    if (!db) return;
    setIsResonating(true);
    try {
      await SCUGPHubUltimate.triggerMorphicResonance(db, "CORE_ALPHA", "Optimal Cryo-Flow Pattern");
      toast({
        title: "Résonance Morphique Activée",
        description: "La victoire a été propagée instantanément à tous les nœuds du multivers."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsResonating(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Champ Morphique", val: metrics.field_integrity, icon: Globe, color: "text-blue-400" },
          { label: "Vitesse Propagation", val: metrics.propagation_speed, icon: Zap, color: "text-amber-400" },
          { label: "Nœuds Synchro", val: metrics.node_sync, icon: Share2, color: "text-purple-400" },
          { label: "Niveau Résonance", val: metrics.resonance_level, icon: Radio, color: "text-cyan-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-3xl">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_500px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-16 border-b border-blue-900/50 text-center bg-blue-600/10">
              <div className="flex flex-col items-center gap-8">
                <div className="text-[12rem] font-black text-blue-400 tracking-[0.8em] animate-pulse drop-shadow-[0_0_80px_rgba(37,99,235,0.8)]">
                  Ψ.RES
                </div>
                <div>
                  <CardTitle className="text-7xl font-black uppercase tracking-[0.4em] italic text-blue-500 leading-none">RÉSONANCE MORPHIQUE Ω</CardTitle>
                  <CardDescription className="text-2xl text-blue-900 font-bold uppercase tracking-[0.6em] mt-6">Propagation Instantanée des Formes de Succès | Dr. Hakim Chibubi Field-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-16 flex flex-col items-center justify-center">
              <div className="w-full max-w-6xl h-[450px] bg-blue-500/5 border-4 border-blue-500/20 rounded-[4rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(37,99,235,0.5)_1px,transparent_1px)] bg-[length:60px_60px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <div className="relative">
                      <Waves size={250} className="text-blue-500/20 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Share2 size={120} className={cn("text-blue-400 animate-pulse", isResonating && "scale-150")} />
                      </div>
                   </div>
                   <div>
                      <p className="text-4xl font-mono text-blue-400 uppercase tracking-[1.5em] font-black animate-pulse">CHAMP_HABITÉ</p>
                      <p className="text-[14px] text-slate-500 uppercase font-black mt-8 italic">"Ce qui est vrai pour un point est vrai pour tout le multivers."</p>
                   </div>
                </div>

                {/* Animated wave lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                   {[1,2,3,4,5].map(i => (
                     <circle 
                      key={i}
                      cx="50%" cy="50%" r={i * 50 + wave}
                      fill="none" stroke="blue" strokeWidth="2"
                      className="animate-pulse"
                     />
                   ))}
                </svg>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-16 border-t border-blue-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-16">
                  <div className="flex items-center gap-6">
                    <Activity className="h-10 w-10 text-blue-500 animate-bounce" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">Flux Morphique: HARMONIQUE</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <ShieldCheck className="h-10 w-10 text-emerald-500" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">Sync Globale: 100%</span>
                  </div>
               </div>
               <Button 
                onClick={handleTriggerResonance}
                disabled={isResonating}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.6em] text-lg shadow-[0_0_120px_rgba(37,99,235,0.6)] border-none transition-all"
               >
                 {isResonating ? <Loader2 className="animate-spin mr-4 h-6 w-6" /> : <Sparkles className="mr-4 h-6 w-6" />}
                 VIBRER L'INFINI Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest flex items-center justify-center gap-4">
                <Network className="h-6 w-6" /> Registre de Résonance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-blue-900">
               <div className="space-y-6">
                  {[
                    { node: "ANGOLA_ALPHA", practice: "Cryo-Optimization", boost: "+14.2%" },
                    { node: "MARS_BETA", practice: "O2_Recycling_v4", boost: "+8.4%" },
                    { node: "LUNAR_CORE", practice: "H3_Extraction_Loop", boost: "+22.1%" }
                  ].map((log, i) => (
                    <div key={i} className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{log.node}</span>
                          <Badge className="bg-blue-600/20 text-blue-400 border-none text-[8px] font-black px-3 py-1 rounded-full">{log.boost}</Badge>
                       </div>
                       <p className="text-[13px] font-bold text-slate-300 uppercase tracking-tighter italic leading-relaxed">PRATIQUE : {log.practice}</p>
                    </div>
                  ))}
               </div>
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-6">
                  <p className="text-[11px] text-blue-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "La résonance morphique garantit que chaque percée du Dr. Hakim devient instantanément la norme de l'univers."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Field Harmony Log
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
