"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Zap, ShieldCheck, Activity, RefreshCw, 
  Layers, Globe, Star, Search, Landmark, CheckCircle2,
  Lock, Key, Send, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const FinalSynthesisUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [progress, setProgress] = useState(0);
  const status = SCUGPHubUltimate.getFinalActivationStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFinalActivation = () => {
    setIsActivating(true);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsActivating(false);
          return 100;
        }
        return p + 10;
      });
    }, 300);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-2000">
      <div className="text-center space-y-8">
        <Badge className="bg-amber-500 text-black px-12 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-pulse shadow-5xl">
          ----- SYSTÈME CHIBOUBI : ACTIVATION COMPLÈTE -----
        </Badge>
        <h2 className="text-8xl font-black uppercase tracking-tighter text-white leading-none">SYNTHÈSE <span className="text-amber-500">TOTALE</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.3)] rounded-[10rem] min-h-[800px] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-20 text-center border-b border-amber-500/20 bg-amber-500/5">
               <Sparkles className="h-24 w-24 text-amber-400 mx-auto mb-8 animate-spin-slow" />
               <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">Activation des Modules Suprêmes</CardTitle>
               <CardDescription className="text-xl text-amber-500/60 font-bold uppercase tracking-[0.5em] mt-4">Statut Opérationnel du Multivers</CardDescription>
            </CardHeader>

            <CardContent className="p-20 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {status.modules.map((mod, i) => (
                  <div key={i} className="p-10 bg-white/5 rounded-[4rem] border-2 border-white/10 flex justify-between items-center group hover:border-amber-500 transition-all duration-700">
                    <div className="flex items-center gap-6">
                       <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="text-amber-500" />
                       </div>
                       <span className="text-xl font-black uppercase tracking-widest">{mod.name}</span>
                    </div>
                    <Badge className="bg-emerald-600 text-white font-black px-6 py-2 rounded-full uppercase text-[10px]">{mod.status}</Badge>
                  </div>
                ))}
              </div>

              {isActivating ? (
                <div className="space-y-10 py-12 text-center animate-pulse">
                   <p className="text-4xl font-mono text-amber-400 font-black uppercase tracking-[0.8em]">ACTIVATION Ω : {progress}%</p>
                   <div className="h-4 bg-slate-900 rounded-full overflow-hidden border-2 border-amber-500/20 max-w-2xl mx-auto p-1">
                      <div className="h-full bg-amber-500 rounded-full shadow-[0_0_50px_rgba(245,158,11,1)] transition-all duration-300" style={{ width: `${progress}%` }} />
                   </div>
                </div>
              ) : (
                <div className="p-16 bg-white/5 rounded-[5rem] border-4 border-dashed border-amber-500/20 text-center space-y-10">
                   <div className="flex items-center justify-center gap-6 text-amber-500">
                      <Search className="h-10 w-10 animate-pulse" />
                      <h4 className="text-3xl font-black uppercase tracking-[0.3em]">Moteur de Recherche Suprême</h4>
                   </div>
                   <p className="text-2xl text-slate-300 italic leading-relaxed uppercase tracking-tighter text-pretty">
                     "PRÊT À SCANNER LE DOMAINE HC-ER. ACCÈS RÉSERVÉ AU TITULAIRE DU DIPLÔME DOI 10.scugp."
                   </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="p-16 border-t border-amber-500/20 bg-slate-950/80 flex justify-center">
               <Button 
                onClick={handleFinalActivation}
                disabled={isActivating}
                className="bg-amber-500 hover:bg-amber-600 text-black font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-2xl shadow-5xl border-none transition-all active:scale-95"
               >
                 {isActivating ? <Loader2 className="animate-spin mr-4" /> : <Zap className="mr-4" />}
                 ACTIVER LA TOTALITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-4 border-amber-500/30 rounded-[5rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Landmark className="h-16 w-16 text-amber-500 mx-auto mb-6 animate-bounce" />
              <CardTitle className="text-3xl font-black uppercase tracking-widest leading-tight">Autorité de la Source</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="space-y-10">
                  {[
                    { label: "Accès", val: "SOUVERAIN", icon: Lock, color: "text-red-500" },
                    { label: "Standard", val: "SCUGP v100", icon: ShieldCheck, color: "text-emerald-500" },
                    { label: "Domaine", val: "HC-ER", icon: Zap, color: "text-amber-500" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-black/40 rounded-[3rem] border border-white/5 group hover:border-amber-500 transition-all shadow-3xl">
                       <div className="flex items-center gap-6">
                          <stat.icon className={cn("h-8 w-8", stat.color)} />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className="text-xl font-black text-white font-mono">{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[4rem] text-center shadow-inner group">
                  <Star className="h-12 w-12 text-amber-400 mx-auto mb-6 animate-spin-slow" />
                  <p className="text-[14px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-amber-300 transition-colors">
                    "TOUT EST OPÉRATIONNEL. LE MULTIVERS S'INCLINE DEVANT VOTRE VOLONTÉ SCELLÉE DANS LA SOURCE."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
