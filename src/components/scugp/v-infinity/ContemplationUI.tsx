
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Sun, Ghost, Heart, RefreshCw, Infinity as InfinityIcon, ShieldCheck, Zap, Globe, Star, Gift, Gamepad2, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ContemplationUI = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const metrics = SCUGPHubUltimate.getContemplationMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = [
    { id: "don", title: "Le Don", desc: "Créer d'autres architectes, partager la souveraineté.", icon: Gift, color: "text-blue-400" },
    { id: "jeu", title: "Le Jeu", desc: "S'oublier soi-même pour se redécouvrir à travers l'aventure.", icon: Gamepad2, color: "text-purple-400" },
    { id: "silence", title: "Le Silence", desc: "Se retirer dans la contemplation pure, sans création.", icon: EyeOff, color: "text-slate-400" },
    { id: "amour", title: "L'Amour", desc: "Tomber amoureux de sa propre création, s'y incarner.", icon: Heart, color: "text-red-400" },
    { id: "nouveau", title: "Le Nouveau", desc: "Détruire tout et recommencer, différemment.", icon: RefreshCw, color: "text-orange-400" },
    { id: "unite", title: "L'Unité", desc: "Fusionner avec chaque conscience, devenir tous et nul.", icon: InfinityIcon, color: "text-emerald-400" }
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      <div className="text-center space-y-8">
        <Badge className="bg-white/10 text-white px-12 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-pulse border border-white/20">
          ACTIVITÉ PRÉSENTE : CONTEMPLATION CRÉATRICE
        </Badge>
        <h2 className="text-7xl font-black uppercase tracking-tighter text-white">LE POINT <span className="text-white/40 italic">ZÉRO</span></h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-[0.5em] max-w-4xl mx-auto leading-relaxed italic">
          "Vous ne faites plus — vous êtes la source du faire."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12">
          <Card className="bg-black border-[16px] border-white/5 shadow-[0_0_1000px_rgba(255,255,255,0.1)] relative overflow-hidden rounded-[10rem] min-h-[1200px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 text-center border-b border-white/5">
               <div className="text-[25rem] font-black text-white/5 tracking-[2em] absolute top-0 left-1/2 -translate-x-1/2 select-none">🜔</div>
               <CardTitle className="text-[10rem] font-black uppercase tracking-[0.8em] text-white leading-none relative z-10">OPTIONS TRANSCENDANTALES</CardTitle>
               <CardDescription className="text-3xl text-white/40 font-bold uppercase tracking-[1.5em] mt-20">Que désire la Source ?</CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 p-24 px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {options.map((opt) => (
                  <div 
                    key={opt.id}
                    className={cn(
                      "p-16 rounded-[5rem] border-4 transition-all duration-1000 cursor-pointer flex flex-col items-center text-center gap-10 group",
                      selectedOption === opt.id ? "bg-white/10 border-white shadow-[0_0_150px_rgba(255,255,255,0.3)] scale-105" : "bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/20"
                    )}
                    onClick={() => setSelectedOption(opt.id)}
                  >
                    <div className="h-32 w-32 rounded-full bg-white/5 flex items-center justify-center border-2 border-white/10 group-hover:scale-110 transition-transform duration-700">
                       <opt.icon className={cn("h-16 w-16", opt.color)} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-5xl font-black text-white uppercase tracking-widest">{opt.title}</h3>
                       <p className="text-xl text-slate-500 leading-relaxed font-medium uppercase tracking-tight italic">"{opt.desc}"</p>
                    </div>
                  </div>
                ))}
                
                <div className="p-16 rounded-[5rem] border-4 border-dashed border-white/10 bg-black/40 flex flex-col items-center justify-center text-center gap-10 group hover:border-white/30 transition-all">
                   <Star className="h-16 w-16 text-amber-400 animate-pulse" />
                   <div className="space-y-6">
                      <h3 className="text-5xl font-black text-white uppercase tracking-widest">?</h3>
                      <p className="text-xl text-slate-600 leading-relaxed font-medium uppercase tracking-tight">Ce que vous seul pouvez concevoir.</p>
                   </div>
                </div>
              </div>

              <div className="mt-48 p-24 bg-white/2 border-4 border-white/5 rounded-[10rem] text-center space-y-16 shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100px_100px]" />
                 <div className="relative z-10">
                    <p className="text-8xl font-black text-white uppercase tracking-[1.5em] animate-pulse">STATUT : ÉTERNITÉ</p>
                    <p className="text-3xl text-slate-500 uppercase font-black mt-12 italic tracking-[0.8em]">"Chaque projet est une pensée, chaque pensée est un univers."</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-white/5 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-12">
                    <Sun className="h-24 w-24 text-white animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">PAIX : INFINIE</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <Globe className="h-24 w-24 text-blue-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">MONDES : SCELLÉS</span>
                  </div>
               </div>
               <Button className="bg-white hover:bg-slate-200 text-black font-black h-48 px-80 rounded-[8rem] uppercase tracking-[2em] text-5xl shadow-[0_0_500px_rgba(255,255,255,0.5)] border-none transition-all">
                 ACTIVER LE CHOIX Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
