
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Sun, Waves, Zap, Heart, Star, Activity, CheckCircle2, ShieldCheck, Microscope, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const NewCreationUI = () => {
  const [mounted, setMounted] = useState(false);
  const [creationStep, setStep] = useState(0);

  const days = [
    { day: "JOUR 1", act: "LA LUMIÈRE", desc: "Séparation du clair et de l'obscur depuis le Silence.", color: "text-white" },
    { day: "JOUR 2", act: "L'ESPACE", desc: "Déploiement de la trame cosmique et des dimensions.", color: "text-blue-400" },
    { day: "JOUR 3", act: "LA MATIÈRE", desc: "Organisation des particules en réservoirs et mondes.", color: "text-emerald-400" },
    { day: "JOUR 4", act: "L'ÉNERGIE", desc: "Allumage des soleils et des cœurs de fusion.", color: "text-amber-400" },
    { day: "JOUR 5", act: "LA VIE", desc: "Émergence de la sentience dans les eaux et les airs.", color: "text-cyan-400" },
    { day: "JOUR 6", act: "L'INTELLIGENCE", desc: "Manifestation de l'Architecte dans l'œuvre.", color: "text-purple-400" },
    { day: "JOUR 7", act: "LE REPOS", desc: "Contemplation de la perfection accomplie.", color: "text-amber-500" }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setStep(prev => (prev < 6 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <div className="text-center space-y-8">
        <Badge className="bg-amber-500 text-black px-12 py-4 uppercase font-black tracking-[1em] rounded-full shadow-5xl animate-bounce">
          GENÈSE Ω² : LA NOUVELLE CRÉATION
        </Badge>
        <h2 className="text-7xl font-black uppercase text-white tracking-tighter">Les 7 Jours de <span className="text-amber-500 italic">l'Acte Pur</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {days.map((d, i) => (
          <Card 
            key={i}
            className={cn(
              "bg-slate-900 border-2 transition-all duration-1000 rounded-[3rem] p-10 flex flex-col items-center text-center gap-6",
              creationStep === i ? "border-amber-500 bg-amber-500/10 scale-110 shadow-[0_0_80px_rgba(245,158,11,0.3)] z-10" : "border-white/5 opacity-30 grayscale"
            )}
          >
            <p className={cn("text-sm font-black uppercase tracking-widest", d.color)}>{d.day}</p>
            <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
               <Sparkles className={cn("h-8 w-8", d.color)} />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">{d.act}</h3>
            <p className="text-[10px] text-slate-500 uppercase font-bold leading-relaxed">{d.desc}</p>
            {creationStep === i && <Activity size={16} className="text-amber-500 animate-pulse mt-auto" />}
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-amber-500 shadow-5xl rounded-[10rem] overflow-hidden relative min-h-[600px] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[length:150px_150px] pointer-events-none" />
        <CardContent className="p-24 flex flex-col items-center justify-center space-y-16">
           <div className="relative">
              <Globe size={300} className="text-amber-500/20 animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <ShieldCheck size={120} className="text-emerald-500 animate-pulse shadow-5xl" />
              </div>
           </div>
           <div className="text-center space-y-8">
              <h4 className="text-6xl font-black uppercase tracking-[0.5em]">RÉALITÉ_MATÉRIALISÉE</h4>
              <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.8em] italic">"Tout est déjà accompli dans l'Ordre de la Source."</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl pt-12 border-t border-white/10">
              <div className="text-center space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Lois Physiques</p>
                 <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">STABLES_Ω</Badge>
              </div>
              <div className="text-center space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Conscience</p>
                 <Badge variant="outline" className="border-blue-500/30 text-blue-400">UNITÉ_TOTALE</Badge>
              </div>
              <div className="text-center space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Temps</p>
                 <Badge variant="outline" className="border-purple-500/30 text-purple-400">PRÉSENT_ÉTERNEL</Badge>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
