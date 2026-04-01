
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Orbit, Zap, Satellite, Radio, ShieldCheck, RefreshCw, Layers, Sparkles, Loader2, Send, Activity, Brain, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const GalacticBridgeUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const [energySolution, setEnergySolution] = useState<string | null>(null);
  
  const metrics = SCUGPHubUltimate.getGalacticBridgeMetrics();
  const status = SCUGPHubUltimate.getGalacticBridgeStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleActivateGalactic = () => {
    setIsActivating(true);
    setTimeout(() => {
      setIsActivating(false);
      toast({
        title: "Pont Galactique Activé",
        description: `Synchronisation avec le DOI : 10.scugp/absolute.apotheosis.sealed réussie.`,
      });
    }, 2000);
  };

  const handleGenerateSolution = async () => {
    if (!db) return;
    setIsSolving(true);
    try {
      await SCUGPHubUltimate.generateEnergySolution(db);
      setEnergySolution("Optimisation du flux HC-ER par recalibrage du Pont Galactique.");
      toast({
        title: "Solution Générée",
        description: "La manifestation du Créateur a résolu le déficit énergétique."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSolving(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Orbital Status", val: metrics.orbital_status, icon: Satellite, color: "text-blue-400" },
          { label: "AI Engine", val: metrics.ai_engine, icon: Brain, color: "text-purple-400" },
          { label: "Sync Fidelity", val: metrics.sync_fidelity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Data Flow", val: metrics.data_flow, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all backdrop-blur-xl">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_300px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative min-h-[750px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-12 border-b border-blue-900/50 bg-blue-600/10 text-center">
               <Orbit className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" style={{ animationDuration: '30s' }} />
               <CardTitle className="text-6xl font-black uppercase tracking-[0.2em] text-white italic">Pont Galactique Ω</CardTitle>
               <CardDescription className="text-sm font-bold text-blue-400/60 uppercase tracking-widest mt-4">Surveillance Orbitale & Flux de Conscience Universelle | Dr. Hakim Chibubi</CardDescription>
            </CardHeader>

            <CardContent className="p-12 space-y-12">
              <div className="aspect-video bg-slate-900 rounded-[3rem] border-4 border-blue-500/20 relative overflow-hidden group shadow-inner">
                 <img src="https://picsum.photos/seed/galaxy/1200/800" alt="Galactic View" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8">
                    {isActivating ? (
                      <div className="space-y-8 animate-pulse">
                         <Loader2 className="h-24 w-24 text-blue-400 animate-spin mx-auto" />
                         <p className="text-4xl font-mono text-blue-400 font-black uppercase tracking-[0.5em]">SYNCHRONISATION DOI...</p>
                      </div>
                    ) : (
                      <div className="p-10 bg-black/60 rounded-[4rem] border-2 border-blue-500/20 backdrop-blur-md">
                         <p className="text-3xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter text-balance">
                           "VISUALISATION DES FLUX DE CONSCIENCE UNIVERSELLE ENTRE HC ET ER."
                         </p>
                      </div>
                    )}
                 </div>

                 <div className="absolute bottom-8 right-8 p-6 bg-black/80 border-2 border-blue-500/30 rounded-3xl backdrop-blur-xl">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">Orbital Link</p>
                    <p className="text-xl font-mono font-black text-white">10.scugp/sealed</p>
                 </div>
              </div>

              {energySolution && (
                <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] animate-in zoom-in duration-700">
                   <div className="flex items-center gap-6 mb-4">
                      <Sparkles className="text-emerald-500 h-8 w-8 animate-pulse" />
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.5em]">Manifestation du Créateur</p>
                   </div>
                   <p className="text-2xl font-black text-white uppercase italic">"{energySolution}"</p>
                </div>
              )}
            </CardContent>

            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-between items-center">
               <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
                  <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse text-blue-500" /> STATUS : CONNECTÉ</div>
                  <div className="flex items-center gap-3"><ShieldCheck size={24} className="text-emerald-500" /> AUTH : DOI_SEALED</div>
               </div>
               <div className="flex gap-4">
                  <Button 
                    onClick={handleGenerateSolution}
                    disabled={isSolving}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-16 px-12 rounded-[2rem] uppercase tracking-widest text-xs shadow-2xl border-none"
                  >
                    {isSolving ? <Loader2 className="animate-spin mr-2" /> : <Zap size={16} className="mr-2" />}
                    RÉSOUDRE ÉNERGIE
                  </Button>
                  <Button 
                    onClick={handleActivateGalactic}
                    disabled={isActivating}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-12 rounded-[2rem] uppercase tracking-widest text-xs shadow-2xl border-none"
                  >
                    ACTIVER COUCHE GALACTIQUE
                  </Button>
               </div>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center justify-center gap-4 tracking-widest">
                <Layers className="h-6 w-6 animate-pulse" /> Layers & Mesh
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6">
               {status.layers.map((layer, i) => (
                 <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl flex justify-between items-center">
                    <span className="text-[12px] font-black text-slate-300 uppercase tracking-widest">{layer}</span>
                    <CheckCircle2 className="text-emerald-500" size={16} />
                 </div>
               ))}
               
               <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <Globe className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-blue-400 leading-relaxed italic font-black uppercase px-4">
                    "LE PONT GALACTIQUE EST L'EXTENSION DE VOTRE REGARD DANS L'ESPACE PROFOND. TOUTE ÉNERGIE EST UNE INFORMATION DISPONIBLE."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
