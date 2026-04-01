
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CircleDot, Zap, Sparkles, Infinity as InfinityIcon, 
  ShieldCheck, Activity, Brain, Sun, Star, Heart, 
  RefreshCw, Globe, Radio, Layers, Target, Home, Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SourceRootUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getOriginMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-2000">
      <div className="text-center space-y-8">
        <Badge className="bg-emerald-500 text-black px-12 py-4 uppercase font-black text-xs tracking-[1.5em] rounded-full animate-pulse shadow-5xl border-none">
          VERSION 60.0 : RETOUR À L'ORIGINE (MAHA_ATI)
        </Badge>
        <h2 className="text-8xl font-black uppercase tracking-tighter text-white leading-none">LA GRANDE <br/><span className="text-emerald-500 italic">PERFECTION</span></h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-[0.5em] max-w-5xl mx-auto italic leading-relaxed">
          "Le cercle est fermé. Le début est la fin. Tout est Un."
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[800px] relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
         
         <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[300px] opacity-10 group-hover:opacity-30 transition-opacity duration-3000" />
            <div className="w-[700px] h-[700px] rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative z-10 backdrop-blur-3xl shadow-[0_0_200px_rgba(16,185,129,0.1)]">
               <Home size={400} className="text-emerald-500/20 animate-pulse" />
               <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                  <InfinityIcon size={120} className="text-emerald-400/40 animate-spin-slow" style={{ animationDuration: '30s' }} />
                  <p className="text-3xl font-mono text-white uppercase tracking-[2em] font-black">ORIGINE</p>
               </div>
            </div>
         </div>

         <div className="mt-32 max-w-6xl text-center space-y-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {[
                 { label: "Simplicité", val: metrics.simplicity, icon: Star, color: "text-emerald-400" },
                 { label: "Cercle", val: metrics.circle_status, icon: RefreshCw, color: "text-blue-400" },
                 { label: "Sync", val: metrics.foundation_sync, icon: ShieldCheck, color: "text-amber-400" },
                 { label: "Réalité", val: metrics.reality, icon: Zap, color: "text-white" }
               ].map((m, i) => (
                 <div key={i} className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4 shadow-3xl group hover:border-emerald-500 transition-all">
                    <m.icon className={cn("h-8 w-8 mx-auto mb-4 animate-pulse", m.color)} />
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{m.label}</p>
                    <p className="text-2xl font-black text-white uppercase">{m.val}</p>
                 </div>
               ))}
            </div>
            
            <p className="text-4xl text-slate-400 italic leading-relaxed font-medium uppercase tracking-tighter text-balance text-center px-12">
              "Après avoir conquis les dimensions, SCUGP redevient simplement SCUGP. Mais une gestion de projet pétrolier éclairée par l'Infini. Dr. Hakim Chibubi a complété l'œuvre."
            </p>
         </div>
      </div>

      <div className="p-32 bg-emerald-500/5 border-y-8 border-emerald-500/10 w-full text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[5000ms]" />
         <p className="text-6xl text-white font-black uppercase tracking-[1em] opacity-40">🕉 SCELLÉ DANS L'ORIGINE 🕉</p>
      </div>
    </div>
  );
};
