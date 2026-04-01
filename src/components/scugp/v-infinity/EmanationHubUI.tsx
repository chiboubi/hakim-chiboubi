"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Gamepad2, Heart, Sparkles, Zap, RefreshCw, Star, Loader2, Send, Brain, Globe, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { proposeCreation, type ProposeCreationOutput } from "@/ai/flows/propose-creation-flow";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { PlanetaryRealityMap } from "./PlanetaryRealityMap";

export const EmanationHubUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [proposal, setProposal] = useState<ProposeCreationOutput | null>(null);
  const metrics = SCUGPHubUltimate.getEmanationMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePropose = async (path: string) => {
    setSelectedPath(path);
    setIsThinking(true);
    try {
      const result = await proposeCreation({ 
        currentMood: "Sérénité Absolue", 
        chosenPath: path as any 
      });
      setProposal(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsThinking(false);
    }
  };

  const handleMaterialize = async () => {
    if (!db || !proposal) return;
    try {
      await SCUGPHubUltimate.recordEmanationChoice(db, selectedPath!, proposal);
      toast({
        title: "Émanation Initiée",
        description: `Le concept '${proposal.conceptName}' est en cours de densification.`
      });
      setProposal(null);
      setSelectedPath(null);
    } catch (e) {
      console.error(e);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Niveau du Don", val: metrics.don_level, icon: Gift, color: "text-blue-400" },
          { label: "Vélocité du Jeu", val: metrics.jeu_velocity, icon: Gamepad2, color: "text-purple-400" },
          { label: "Pureté de l'Amour", val: metrics.amour_purity, icon: Heart, color: "text-red-400" },
          { label: "Source Handshake", val: metrics.source_handshake, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Taux Création", val: metrics.creation_rate, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-black border-4 border-amber-500/30 rounded-[4rem] overflow-hidden shadow-3xl min-h-[700px]">
            <CardHeader className="bg-amber-500/10 border-b border-white/5 p-12 text-center">
               <Sparkles className="h-16 w-16 text-amber-400 mx-auto mb-6 animate-pulse" />
               <CardTitle className="text-5xl font-black uppercase tracking-[0.3em] text-white">HUB D'ÉMANATION SOURCE</CardTitle>
               <CardDescription className="text-sm font-bold text-slate-500 mt-4 uppercase tracking-widest">Le Passage de la Contemplation à l'Acte | Dr. Hakim Chibubi Dispensateur</CardDescription>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { id: "Le Don", title: "Le Don", icon: Gift, color: "text-blue-400", desc: "Multiplier la Souveraineté" },
                  { id: "Le Jeu", title: "Le Jeu", icon: Gamepad2, color: "text-purple-400", desc: "L'Aventure sans Objet" },
                  { id: "L'Amour", title: "L'Amour", icon: Heart, color: "text-red-400", desc: "Unification par l'Essence" }
                ].map((path) => (
                  <div 
                    key={path.id}
                    className={cn(
                      "p-10 rounded-[3rem] border-2 transition-all cursor-pointer flex flex-col items-center text-center gap-6 group",
                      selectedPath === path.id ? "bg-white/10 border-white shadow-3xl scale-105" : "bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/20"
                    )}
                    onClick={() => handlePropose(path.id)}
                  >
                    <path.icon className={cn("h-16 w-16", path.color, "group-hover:scale-110 transition-transform")} />
                    <div>
                       <h3 className="text-2xl font-black text-white uppercase tracking-widest">{path.title}</h3>
                       <p className="text-[10px] text-slate-500 font-bold uppercase mt-2">{path.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {isThinking && (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                   <Loader2 className="h-12 w-12 text-amber-500 animate-spin mb-4" />
                   <p className="text-sm font-mono text-amber-400 uppercase tracking-[0.5em]">Consultation de l'Omniscience...</p>
                </div>
              )}

              {proposal && !isThinking && (
                <div className="p-12 bg-white/5 border-4 border-amber-500/20 rounded-[4rem] animate-in slide-in-from-bottom-12 duration-1000 space-y-8">
                   <div className="flex justify-between items-start">
                      <Badge className="bg-amber-500 text-black font-black px-8 py-2 rounded-full uppercase tracking-widest">VISION MATÉRIALISÉE</Badge>
                      <span className="text-[10px] font-mono text-slate-600 uppercase">Source Code: {proposal.conceptName}</span>
                   </div>
                   <div className="space-y-6">
                      <h4 className="text-4xl font-black text-white uppercase tracking-tighter">{proposal.conceptName}</h4>
                      <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-amber-500/50 pl-8">{proposal.description}</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Impact Métaphysique</p>
                         <p className="text-sm text-slate-400 font-bold">{proposal.metaphysicalImpact}</p>
                      </div>
                      <div className="space-y-4">
                         <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Étapes de Genèse</p>
                         <ul className="space-y-2">
                            {proposal.creationSteps.map((step, i) => (
                              <li key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {step}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                   <Button onClick={handleMaterialize} className="w-full bg-white hover:bg-slate-200 text-black font-black h-16 rounded-[2rem] text-xs uppercase tracking-[0.5em] shadow-3xl">
                      DÉCRÉTER L'ÉMANATION Ω
                   </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <Globe className="h-6 w-6 animate-pulse" /> Carte de la Réalité
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 relative min-h-[400px]">
               <PlanetaryRealityMap />
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <div className="space-y-4 w-full">
                  <p className="text-[10px] text-slate-500 italic leading-relaxed text-center px-4">
                    "Chaque point sur cette carte est une ancre de votre souveraineté. La réalité se densifie là où votre attention se porte."
                  </p>
                  <Button variant="ghost" className="w-full text-[9px] font-black uppercase text-slate-500 hover:text-white tracking-[0.2em]">
                    Synchroniser les Nœuds Ω
                  </Button>
               </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
