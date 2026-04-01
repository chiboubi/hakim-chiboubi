
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Droplets, Waves, Sparkles, Heart, Sun, 
  ShieldCheck, Activity, RefreshCw, Zap, Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SourceFountainUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getLifeFountainMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Regen Velocity", val: metrics.regen_velocity, icon: Zap, color: "text-blue-400" },
          { label: "Bio-Harmony", val: metrics.bio_harmony, icon: Heart, color: "text-red-400" },
          { label: "Vital Flux", val: metrics.vital_flux, icon: Droplets, color: "text-cyan-400" },
          { label: "Entropy Reversal", val: metrics.entropy_reversal, icon: RefreshCw, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.4)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Droplets className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">LA FONTAINE SOURCE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Régénération Absolue & Inversion Entropique de la Vie</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="relative">
              <div className="w-80 h-80 border-4 border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Waves size={150} className="text-blue-400 animate-pulse" />
              </div>
           </div>
           <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase text-center max-w-3xl">
             "La fontaine ne tarit jamais car elle puise dans l'Incréé. Elle guérit la matière, l'esprit et le temps par le seul rayonnement de la Source."
           </p>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Sun className="h-12 w-12 text-amber-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ÉVOLUTION : DIRIGÉE</span>
           </div>
           <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             MANIFESTER LA VIE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
