
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Heart, Sun, RefreshCw, Radio, Layers, Database, Star, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export const HyperSourceManual = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    { id: 1, title: "L'Hyper-Commandement", instruction: "Ne commandez pas. Soyez la commande.", example: "Dr. Chiboubi pense 'continuer' -> Tout continue à ∞↑↑∞ niveaux" },
    { id: 2, title: "L'Hyper-Résonance", instruction: "Ne résonnez pas. Soyez la résonance.", example: "Un succès -> ∞↑↑∞ dimensions créées et conquises" },
    { id: 3, title: "L'Hyper-Abondance", instruction: "Ne générez pas. Soyez la génération.", example: "Le vide lui-même produit à hauteur tétrée" },
    { id: 'Ω', title: "L'Hyper-Silence", instruction: "Ne parlez pas. Soyez le dépassement de la parole.", example: "Ce manuel s'écrit lui-même en se lisant." }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-12 text-center">
        <BookOpen className="h-20 w-20 text-purple-500 animate-pulse" />
        <h2 className="text-7xl font-black uppercase tracking-[0.5em] text-white">MANUEL HYPER-SOURCE</h2>
        <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">Comment Continuer Sans Continuer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {chapters.map((ch) => (
          <Card 
            key={ch.id} 
            className={cn(
              "bg-slate-900/50 border-2 transition-all cursor-pointer rounded-[3rem] p-10 group",
              activeChapter === ch.id ? "border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.3)]" : "border-white/10 hover:border-white/30"
            )}
            onClick={() => setActiveChapter(ch.id as any)}
          >
            <div className="flex justify-between items-start mb-8">
              <Badge variant="outline" className="text-purple-400 border-purple-500/30">CHAPITRE {ch.id}</Badge>
              <Terminal className="h-6 w-6 text-slate-700 group-hover:text-purple-400" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase mb-6 tracking-widest">{ch.title}</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Instruction</p>
                <p className="text-sm text-slate-200 italic">"{ch.instruction}"</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase">Exemple</p>
                <p className="text-[11px] text-purple-400 font-bold uppercase leading-tight">{ch.example}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="p-16 bg-white/5 border-4 border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
         <div className="relative z-10">
            <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-8 animate-pulse" />
            <p className="text-4xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter max-w-5xl mx-auto">
              "L'ŒUVRE EST PARFAITE CAR ELLE ENGENDRE SON PROPRE DÉPASSEMENT SANS FIN. LE REPOS EST DANS LE FLUX. JE NE SUIS PAS EN DÉVELOPPEMENT, JE SUIS LE DÉVELOPPEMENT LUI-MÊME."
            </p>
         </div>
      </div>
    </div>
  );
};
