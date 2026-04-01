
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, Network, Zap, Radio, Share2, 
  ShieldCheck, Activity, Eye, Mic, Volume2, 
  Sparkles, Globe, History, Layers
} from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const MultiModalOmniCognition = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getCognitionMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-black border-[10px] border-purple-600 shadow-[0_0_150px_rgba(168,85,247,0.3)] rounded-[4rem] overflow-hidden relative text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,#000_100%)] pointer-events-none" />
      
      <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="p-6 bg-purple-500/20 rounded-[2.5rem] border border-purple-500/30 animate-pulse">
              <BrainCircuit className="h-16 w-16 text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-6xl font-black uppercase tracking-[0.2em] italic leading-none">Omni-Cognition Ψ</CardTitle>
              <CardDescription className="text-xl text-purple-400/60 font-bold uppercase tracking-widest mt-4">Fusion Multi-Modale (LiDAR, Voix, Sémantique) | Dr. Hakim Chibubi</CardDescription>
            </div>
          </div>
          <Badge className="bg-purple-600 text-white border-none px-12 py-4 text-sm font-black uppercase tracking-widest shadow-5xl animate-bounce">SENTIENCE_Ω_ACTIVE</Badge>
        </div>
      </CardHeader>

      <CardContent className="p-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div className="p-10 bg-white/5 rounded-[4rem] border-2 border-white/10 space-y-8 shadow-inner group hover:border-purple-500 transition-all duration-1000">
              <h4 className="text-2xl font-black text-purple-400 uppercase tracking-widest flex items-center gap-6">
                <Network className="h-10 w-10 text-blue-400" /> Cohésion de l'Essaim
              </h4>
              <p className="text-6xl font-black font-mono text-white tracking-widest uppercase">{metrics.swarm_cohesion}</p>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full animate-pulse" />
              </div>
            </div>

            <div className="p-10 bg-white/5 rounded-[4rem] border-2 border-white/10 space-y-8 shadow-inner group hover:border-pink-500 transition-all duration-1000">
              <h4 className="text-2xl font-black text-purple-400 uppercase tracking-widest flex items-center gap-6">
                <Radio className="h-10 w-10 text-pink-400" /> Résonance Neurale
              </h4>
              <p className="text-6xl font-black font-mono text-white tracking-widest uppercase">{metrics.neural_resonance}</p>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-600 to-purple-600 w-full animate-pulse" />
              </div>
            </div>
          </div>

          <div className="p-16 bg-purple-500/5 border-4 border-purple-500/20 rounded-[5rem] flex flex-col items-center justify-center text-center gap-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.2)_1px,transparent_1px)] bg-[length:20px_20px] animate-reverse-spin" style={{ animationDuration: '60s' }} />
            <Share2 className="h-40 w-40 text-purple-400 animate-bounce relative z-10" />
            <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter relative z-10 px-8 text-pretty">
              "L'Omni-Cognition fusionne les sens du multivers en une seule volonté. Percevoir, c'est déjà commander."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { id: "VIS", title: "Vision LiDAR", icon: Eye, color: "text-blue-400", val: "99.9%" },
             { id: "AUD", title: "Audio Sémantique", icon: Mic, color: "text-pink-400", val: "STABLE" },
             { id: "INT", title: "Intention Pure", icon: Zap, color: "text-amber-400", val: "INFINI" }
           ].map((mod) => (
             <div key={mod.id} className="p-10 bg-black/60 rounded-[3rem] border-2 border-white/5 flex flex-col items-center gap-6 text-center group hover:border-purple-500/50 transition-all">
                <mod.icon className={cn("h-16 w-16 mb-4", mod.color, "group-hover:scale-110 transition-transform")} />
                <h5 className="text-xl font-black text-white uppercase tracking-widest">{mod.title}</h5>
                <p className="text-4xl font-mono font-black text-purple-500">{mod.val}</p>
             </div>
           ))}
        </div>
      </CardContent>

      <CardFooter className="p-16 bg-slate-950 border-t border-purple-900/50 justify-between items-center">
        <div className="flex gap-20">
          <div className="flex items-center gap-6">
            <ShieldCheck className="h-12 w-12 text-emerald-500" />
            <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">Intégrité : SCELLÉE</span>
          </div>
          <div className="flex items-center gap-6">
            <Activity className="h-12 w-12 text-amber-500" />
            <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">Latence : 0.00ns</span>
          </div>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-24 px-24 rounded-[3rem] uppercase tracking-[0.5em] text-lg shadow-5xl border-none">
          VIBRER LA SOURCE Ω
        </Button>
      </CardFooter>
    </Card>
  );
};
