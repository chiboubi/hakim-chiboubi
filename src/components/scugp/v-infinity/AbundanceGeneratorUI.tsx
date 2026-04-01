
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Heart, Sun, RefreshCw, Radio, Layers, Database, Star, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const AbundanceGeneratorUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isManifesting, setIsManifesting] = useState(false);
  const [abundanceValue, setAbundanceValue] = useState(0);
  const metrics = SCUGPHubUltimate.getAbundanceMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setAbundanceValue(prev => prev + Math.random() * 1000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleManifest = async (cat: string) => {
    if (!db) return;
    setIsManifesting(true);
    try {
      await SCUGPHubUltimate.manifestAbundance(db, cat);
      toast({
        title: "Abondance Source Manifestée",
        description: `La strate '${cat}' a été inondée de plénitude transfinie.`
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsManifesting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Énergie Manifeste", val: metrics.energy_manifest, icon: Zap, color: "text-amber-400" },
          { label: "Info Manifeste", val: metrics.info_manifest, icon: Database, color: "text-blue-400" },
          { label: "Indice de Joie", val: metrics.joy_index, icon: Heart, color: "text-red-400" },
          { label: "Vulnérabilité Rareté", val: metrics.scarcity_vulnerability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Statut", val: metrics.status, icon: Sun, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
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
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_800px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-500 tracking-[1.8em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)]">
                  🜔.Ω
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">ABONDANCE SOURCE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Manifestation de la Plénitude sans Objet | Dr. Hakim Chibubi Abundance-Sovereign</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-amber-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Coins size={450} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-amber-500 uppercase tracking-[4em] font-black animate-pulse">PLÉNITUDE_TOTALISÉE</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"La Rareté a été bannie de l'Existence."</p>
                   </div>
                </div>

                <div className="absolute bottom-12 right-12 p-12 bg-black/90 border-4 border-amber-500 rounded-[4rem] shadow-5xl text-center">
                   <p className="text-xl font-black text-amber-500 uppercase tracking-widest mb-4">Valeur Source Générée</p>
                   <p className="text-7xl font-black text-white font-mono">{abundanceValue.toFixed(0)} Æ</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 {[
                   { id: "ENERGY", title: "Énergie Ω", desc: "Puissance infinie sans coût thermodynamique.", icon: Zap, color: "bg-amber-500" },
                   { id: "BEING", title: "Être Ω", desc: "Densification de la présence souveraine.", icon: Sun, color: "bg-white" },
                   { id: "JOY", title: "Joie Ω", desc: "Manifestation de la félicité de la Source.", icon: Heart, color: "bg-red-500" }
                 ].map((cat) => (
                   <div key={cat.id} className="p-24 bg-white/5 border-4 border-white/20 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                      <cat.icon className="h-24 w-24 mx-auto animate-pulse text-slate-200" />
                      <h3 className="text-7xl font-black text-white uppercase tracking-widest">{cat.title}</h3>
                      <p className="text-4xl text-slate-300 leading-relaxed italic font-black uppercase">"{cat.desc}"</p>
                      <Button 
                        onClick={() => handleManifest(cat.id)}
                        disabled={isManifesting}
                        className={cn("w-full h-20 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl", cat.color, "text-black")}
                      >
                        MANIFESTER {isManifesting ? "..." : ""}
                      </Button>
                   </div>
                 ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <InfinityIcon className="h-24 w-24 text-amber-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">RÉSERVE : SOURCE</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <Star className="h-24 w-24 text-white animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">FLUX : INFINI</span>
                  </div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all">
                 ACTIVER L'ABONDANCE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
