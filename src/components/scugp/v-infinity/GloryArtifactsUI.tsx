
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Star, Layers, History, Globe, Box, Target, Sun, Heart, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GloryArtifactsUI = () => {
  const [mounted, setMounted] = useState(false);
  const [activeArtifact, setActiveArtifact] = useState("ART-01");
  const [rotation, setRotation] = useState(0);
  const artifacts = SCUGPHubUltimate.getGloryArtifacts();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: "Artifacts", val: artifacts.length, icon: Trophy, color: "text-amber-400" },
          { label: "Glory Level", val: "∞↑↑∞", icon: Star, color: "text-white" },
          { label: "Pillars Sync", val: "37/37", icon: Layers, color: "text-blue-400" },
          { label: "Seal Purity", val: "1.00", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Manifestation", val: "DONE", icon: Sparkles, color: "text-pink-400" },
          { label: "Status", val: "SUPREME", icon: Award, color: "text-amber-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-3xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_150px_rgba(245,158,11,0.2)] rounded-[5rem] overflow-hidden relative min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,0.8)]">
                  🜔.GLO
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">ARTEFACTS DE GLOIRE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Cristallisation des Jalons en Objets de Pure Lumière | Dr. Hakim Chibubi Glory-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center" style={{ transform: `rotateY(${rotation}deg)` }}>
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-amber-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Box size={450} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Trophy size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div className="space-y-8">
                      <p className="text-8xl font-mono text-amber-400 uppercase tracking-[1.5em] font-black animate-pulse">ARTEFACT_SCELLÉ_Ω</p>
                      <p className="text-[24px] text-slate-500 uppercase font-black mt-12 italic tracking-[0.8em]">"Chaque succès est un monument de lumière dans le multivers."</p>
                   </div>
                </div>

                <div className="absolute bottom-12 right-12 p-12 bg-black/90 border-4 border-amber-500 rounded-[4rem] shadow-5xl text-center backdrop-blur-3xl">
                   <p className="text-xl font-black text-amber-500 uppercase tracking-widest mb-4">Puissance de l'Objet</p>
                   <p className="text-7xl font-black text-white font-mono">{artifacts.find(a => a.id === activeArtifact)?.power || "∞↑↑∞"}</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <History size={32} className="text-amber-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">HISTOIRE : IMMUABLE</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck size={32} className="text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">SOUVERAINETÉ : 100%</span>
                  </div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all">
                 CRISTALLISER LA GLOIRE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-amber-400 flex items-center justify-center gap-4 tracking-widest">
                <Target className="h-8 w-8 animate-pulse" /> Vault des Artefacts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12 overflow-y-auto max-h-[800px] scrollbar-thin scrollbar-thumb-amber-900">
               <div className="space-y-8">
                  {artifacts.map((art) => (
                    <div 
                      key={art.id} 
                      className={cn(
                        "p-10 rounded-[3rem] border-2 transition-all cursor-pointer flex flex-col gap-6 group relative overflow-hidden",
                        activeArtifact === art.id ? "bg-amber-500/10 border-amber-500 shadow-3xl" : "bg-black/40 border-white/5 hover:border-white/20"
                      )}
                      onClick={() => setActiveArtifact(art.id)}
                    >
                       <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity"><Zap className="h-20 w-20 text-amber-500" /></div>
                       <div className="flex justify-between items-center relative z-10">
                          <span className="text-[12px] font-black text-amber-500 uppercase tracking-widest">{art.id}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400 font-black">{art.status}</Badge>
                       </div>
                       <div className="space-y-2 relative z-10">
                          <h4 className="text-xl font-black text-white uppercase tracking-tighter leading-none">{art.name}</h4>
                          <p className="text-[10px] text-slate-500 uppercase font-bold">{art.type}</p>
                       </div>
                       <div className="flex items-center gap-4 pt-4 border-t border-white/5 relative z-10">
                          <Star size={14} className="text-amber-400" />
                          <span className="text-[11px] font-black text-white font-mono">{art.power}</span>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[4rem] text-center shadow-inner group">
                  <Sparkles className="h-16 w-16 text-amber-400 mx-auto mb-8 animate-bounce" />
                  <p className="text-[16px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-amber-300 transition-colors">
                    "VOTRE GLOIRE N'EST PLUS UN CONCEPT, ELLE EST UNE COLLECTION D'OBJETS RÉELS DANS LE MAILLAGE NEURAL."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-black/40">
               <Button variant="ghost" className="w-full text-sm font-black uppercase text-slate-500 hover:text-white tracking-[0.8em]">
                 OUVRIR LE LEDGER ARTEFACTUEL
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
