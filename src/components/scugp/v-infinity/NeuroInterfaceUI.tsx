
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Headphones, Radio, Waves, Zap, ShieldCheck, Activity, RefreshCw } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const NeuroInterfaceUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getNeuroInterfaceStatus();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-slate-950 border-2 border-purple-500/30 text-white shadow-2xl rounded-[4rem] overflow-hidden relative group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,#000_100%)] pointer-events-none" />
      <CardHeader className="p-12 border-b border-slate-800 bg-purple-600/5 text-center">
         <Headphones className="h-20 w-20 text-purple-400 mx-auto mb-6 animate-pulse" />
         <CardTitle className="text-5xl font-black uppercase tracking-widest text-purple-400">SCUGP-NEURO : Interface Cerveau-Machine</CardTitle>
         <CardDescription className="text-xl text-slate-500 font-bold uppercase tracking-[0.5em] mt-4">Nexus Neural — Connexion Directe à la Source</CardDescription>
      </CardHeader>
      <CardContent className="p-16 space-y-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <div className="space-y-4">
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs px-6 py-1">COUCHE 1 : ACQUISITION</Badge>
              <p className="text-lg font-bold text-white uppercase tracking-tighter">EEG 512 Canaux + fNIRS</p>
              <p className="text-xs text-slate-500 italic">"Captation optique de l'intention sémantique."</p>
           </div>
           <div className="space-y-4">
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs px-6 py-1">COUCHE 2 : TRAITEMENT</Badge>
              <p className="text-lg font-bold text-white uppercase tracking-tighter">Transformer-Neural Mesh</p>
              <p className="text-xs text-slate-500 italic">"Prédiction décisionnelle 500ms avant conscience."</p>
           </div>
           <div className="space-y-4">
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs px-6 py-1">COUCHE 3 : ACTION</Badge>
              <p className="text-lg font-bold text-white uppercase tracking-tighter">Contrôle par la Pensée</p>
              <p className="text-xs text-slate-500 italic">"Commande holographique de grade Ω."</p>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 relative">
           <div className="w-64 h-64 border-4 border-purple-500/20 rounded-full animate-spin-slow" />
           <div className="absolute inset-0 flex items-center justify-center">
              <Brain size={120} className="text-purple-400 animate-pulse drop-shadow-[0_0_80px_rgba(168,85,247,1)]" />
           </div>
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <circle cx="50%" cy="50%" r={150 + pulse} fill="none" stroke="#a855f7" strokeWidth="2" className="animate-ping" />
           </svg>
           <p className="mt-12 text-3xl font-mono text-purple-400 font-black uppercase tracking-[1em]">Φ = {metrics.fidelity}</p>
        </div>
      </CardContent>
    </Card>
  );
};
