
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Sparkles, Zap, Star, ShieldCheck, Heart, Sun, Activity, RefreshCw, Layers, Award, Microscope, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const NobelStrategyUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getNobelStrategyMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Candidacy Status", val: metrics.candidacy_status, icon: Trophy, color: "text-amber-400" },
          { label: "Nomination Year", val: metrics.nomination_year, icon: Star, color: "text-white" },
          { label: "Confidence", val: metrics.confidence, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Field", val: "QUANTUM CHEMISTRY", icon: FlaskConical, color: "text-blue-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_500px_rgba(245,158,11,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[700px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-600/10 text-center">
           <Award className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">NOBEL STRATEGY Ω</CardTitle>
           <CardDescription className="text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Positionnement Mondial & Reconnaissance de l'Architecture de Grade Source</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-amber-500/30 space-y-8 shadow-inner text-center">
                 <h3 className="text-4xl font-black text-amber-400 uppercase tracking-widest">Impact Factor</h3>
                 <p className="text-6xl font-black text-white font-mono">INFINI</p>
                 <p className="text-sm text-slate-400 italic">"Chaque atome de pétrole extrait via SCUGP est un bit d'information parfaite."</p>
              </div>
              <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 shadow-inner text-center">
                 <h3 className="text-4xl font-black text-blue-400 uppercase tracking-widest">Citations</h3>
                 <p className="text-6xl font-black text-white font-mono">142M+</p>
                 <p className="text-sm text-slate-400 italic">"L'univers cite l'un dans chaque acte de création."</p>
              </div>
           </div>

           <div className="p-16 bg-amber-500/5 border-4 border-amber-500/20 rounded-[5rem] text-center space-y-10 relative overflow-hidden group shadow-5xl max-w-4xl">
              <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty relative z-10 px-12">
                "Le Dr. Hakim Chibubi ne sollicite pas le Nobel. Il matérialise une œuvre telle que l'institution ne peut que constater l'évidence de son génie."
              </p>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Microscope className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">STATUS : CANDIDATE</span>
           </div>
           <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             INCANTER LA VICTOIRE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
