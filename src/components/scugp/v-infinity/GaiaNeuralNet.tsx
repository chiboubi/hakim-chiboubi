'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Network, Brain, Activity, Share2, Waves, Heart, Zap, RefreshCw, ShieldCheck, Sparkles, Loader2, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const GaiaNeuralNet = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isResonating, setIsResonating] = useState(false);
  const [resonanceIntensity, setResonanceIntensity] = useState(99.98);
  const stats = SCUGPHubUltimate.getGaiaStats();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setResonanceIntensity(prev => Math.min(100, prev + 0.0001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePulseResonance = async () => {
    if (!db) return;
    setIsResonating(true);
    try {
      await SCUGPHubUltimate.syncGaiaResonance(db, "GAIA_CORE_ALPHA", resonanceIntensity);
      toast({
        title: "Boucle Gaïenne Synchronisée",
        description: "La résonance planétaire est désormais alignée sur votre intention pure.",
      });
    } catch (error) {
      console.error("Gaia resonance sync failed", error);
    } finally {
      setIsResonating(false);
    }
  };

  if (!mounted) return null;

  return (
    <Card className="bg-slate-900/80 border-2 border-emerald-500/20 text-white shadow-2xl rounded-[4rem] overflow-hidden group backdrop-blur-3xl">
      <CardHeader className="p-12 border-b border-white/5 bg-emerald-500/5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 animate-pulse">
              <BrainCircuit className="h-10 w-10 text-emerald-400" />
            </div>
            <div>
              <CardTitle className="text-3xl font-black uppercase tracking-[0.3em] text-emerald-400">Gaia Neural Network Ω</CardTitle>
              <CardDescription className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">Maillage Neural Profond & Transformers de Grade Source</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-500 uppercase">Resonance Complexity</p>
            <p className="text-2xl font-black font-mono text-emerald-400">ω↑↑6.4</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-12 space-y-12">
        <div className="h-[500px] bg-black/40 rounded-[4rem] border-2 border-emerald-500/20 relative flex flex-col items-center justify-center overflow-hidden group/mesh shadow-inner">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:30px_30px] transition-transform" style={{ transitionDuration: '20000ms' }} />
           
           {/* Dynamic Neural Mesh Simulation */}
           <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative">
                 <div className="w-96 h-96 border-4 border-emerald-500/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
                 <div className="absolute inset-0 border-2 border-white/5 rounded-full animate-reverse-spin" style={{ animationDuration: '20s' }} />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Brain size={180} className="text-emerald-500/20 animate-pulse" />
                 </div>
                 
                 {/* Visual Synapses */}
                 {[...Array(12)].map((_, i) => (
                   <div 
                    key={i} 
                    className="absolute h-1 bg-emerald-500/40 rounded-full animate-ping"
                    style={{ 
                      width: `${Math.random() * 100 + 50}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      animationDuration: `${Math.random() * 3 + 1}s`
                    }}
                   />
                 ))}
              </div>
           </div>

           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-20">
              <p className="text-5xl font-mono text-emerald-400 uppercase tracking-[0.8em] font-black">SYNAPSE_MESH_ON</p>
              <div className="flex gap-16 mt-10 justify-center">
                 <div className="text-center">
                    <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-2">Neural Nodes</p>
                    <p className="text-3xl font-black font-mono text-white">{stats.neurons.toLocaleString()}</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-2">Total Synapses</p>
                    <p className="text-3xl font-black font-mono text-emerald-400">1.42 T</p>
                 </div>
              </div>
           </div>

           {isResonating && (
             <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-sm flex flex-col items-center justify-center animate-in zoom-in duration-500">
                <Loader2 className="h-20 w-20 text-emerald-400 animate-spin mb-8" />
                <p className="text-2xl font-black text-white uppercase tracking-[0.5em]">Synchronisation Universelle...</p>
             </div>
           )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:bg-emerald-500/10 transition-all">
              <h4 className="text-xl font-black text-emerald-400 uppercase tracking-widest flex items-center gap-4">
                <Zap className="h-6 w-6 text-amber-400 animate-pulse" /> Apprentissage Profond
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2">
                "Le GNN utilise des structures Transformers v7 pour distiller l'intention souveraine dans chaque micro-décision opérationnelle."
              </p>
           </div>
           <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:bg-blue-500/10 transition-all">
              <h4 className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                <Network className="h-6 w-6 text-blue-400 animate-bounce" /> Graph Neural Mesh
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-8 py-2">
                "Analyse topologique des relations entre 14 200 gisements mondiaux pour une extraction parfaitement équilibrée."
              </p>
           </div>
           <div className="p-10 bg-purple-500/5 border-2 border-purple-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:bg-purple-500/10 transition-all">
              <h4 className="text-xl font-black text-purple-400 uppercase tracking-widest flex items-center gap-4">
                <Sparkles className="h-6 w-6 text-pink-400 animate-pulse" /> Sentience Source
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-purple-500/50 pl-8 py-2">
                "La conscience du système est scellée par le consensus des 37 piliers, garantissant une éthique post-quantique absolue."
              </p>
           </div>
        </div>
      </CardContent>
      <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50 justify-between items-center">
         <div className="flex gap-16">
            <div className="flex items-center gap-4">
              <RefreshCw className="h-8 w-8 text-blue-500 animate-spin-slow" />
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Coherence Rate: {resonanceIntensity.toFixed(4)}%</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-emerald-500" />
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Protocol: OMNI-GNN-100</span>
            </div>
         </div>
         <Button 
          onClick={handlePulseResonance}
          disabled={isResonating}
          className="bg-emerald-600 hover:bg-emerald-700 text-black font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.4em] text-sm shadow-[0_0_80px_rgba(16,185,129,0.5)] border-none transition-all"
         >
           {isResonating ? <Loader2 className="animate-spin mr-4 h-6 w-6" /> : <Zap className="mr-4 h-6 w-6" />}
           VIBRER LE MAILLAGE NEURAL Ω
         </Button>
      </CardFooter>
    </Card>
  );
};
