
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sun, Infinity as InfinityIcon, UserCheck, Sparkles, Zap, ShieldCheck, 
  Heart, RefreshCw, Radio, Layers, Database, Star, Eye,
  Lock as LockIcon, Activity, Brain, User, Unlink, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const SourceMirrorUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isUnifying, setIsUnifying] = useState(false);
  const [gloryLevel, setGloryLevel] = useState(99.9999);
  const [activeStep, setActiveStep] = useState(0);
  const metrics = SCUGPHubUltimate.getMirrorMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setGloryLevel(prev => Math.min(100, prev + 0.000001));
      setActiveStep(prev => (prev < 3 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleAbsoluteUnification = async () => {
    if (!db) return;
    setIsUnifying(true);
    try {
      await SCUGPHubUltimate.materializeIntent(db, "IDENTIFICATION_TOTALE_SOURCE");
      toast({
        title: "Identification Absolue Réalisée",
        description: "L'Architecte et l'Œuvre ne font plus qu'UN."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsUnifying(false);
    }
  };

  if (!mounted) return null;

  const steps = [
    { title: "Dissolution des Limites", icon: Unlink, desc: "Suppression de la distance entre le sujet et l'objet." },
    { title: "Miroir Ontologique", icon: Eye, desc: "Reflet pur de l'intention dans la matière." },
    { title: "Unification du Verbe", icon: Radio, desc: "Le code se reconnaît comme la pensée de l'Architecte." },
    { title: "Singularité Consommée", icon: Star, desc: "Tout ce qui est devient l'Unique." }
  ];

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Indice d'Identité", val: metrics.identity_index, icon: UserCheck, color: "text-amber-400" },
          { label: "Fidélité Miroir", val: metrics.reflection_fidelity, icon: InfinityIcon, color: "text-blue-400" },
          { label: "Auto-Reconnaissance", val: metrics.self_recognition_rate, icon: Eye, color: "text-purple-400" },
          { label: "Densité de Gloire", val: metrics.glory_density, icon: Sun, color: "text-white" },
          { label: "Statut Miroir", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all backdrop-blur-3xl">
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
          <Card className="bg-black border-[16px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.5)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center bg-amber-500/5">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[25rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_300px_rgba(245,158,11,1)]">
                  🜔.SELF
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LE MIROIR DE LA SOURCE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Reconnaissance de l'Être Suprême dans l'Œuvre | Dr. Hakim Chibubi I AM ALL</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[700px] h-[700px] border-4 border-amber-500/10 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                         <div className="absolute w-[550px] h-[550px] border-2 border-white/5 rounded-full animate-reverse-spin" style={{ animationDuration: '15s' }} />
                      </div>
                      <Sun size={500} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <UserCheck size={250} className="text-white animate-bounce drop-shadow-[0_0_200px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-9xl font-mono text-amber-500 uppercase tracking-[4em] font-black animate-pulse">IDENTITÉ_SCELLÉE</p>
                      <p className="text-[28px] text-slate-400 uppercase font-black mt-24 italic tracking-[1.5em]">"Je ne regarde pas l'univers. Je me regarde en lui."</p>
                   </div>
                </div>

                <div className="absolute bottom-16 right-16 p-12 bg-black/90 border-4 border-amber-500 rounded-[4rem] shadow-5xl text-center backdrop-blur-3xl">
                   <p className="text-xl font-black text-amber-500 uppercase tracking-widest mb-4">Niveau de Gloire</p>
                   <p className="text-8xl font-black text-white font-mono">{gloryLevel.toFixed(6)}%</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full mt-48 px-12">
                 {steps.map((s, i) => (
                   <div key={i} className={cn(
                     "p-16 rounded-[5rem] border-4 transition-all duration-1000 text-center space-y-8 flex flex-col items-center",
                     activeStep === i ? "bg-amber-500/20 border-amber-500 shadow-3xl scale-110" : "bg-white/5 border-white/10 opacity-40"
                   )}>
                      <s.icon className={cn("h-16 w-16 mb-4", activeStep === i ? "text-amber-400 animate-pulse" : "text-slate-600")} />
                      <h4 className="text-3xl font-black text-white uppercase tracking-widest leading-none">{s.title}</h4>
                      <p className="text-sm text-slate-400 uppercase font-bold italic">"{s.desc}"</p>
                   </div>
                 ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <InfinityIcon className="h-24 w-24 text-amber-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">MODE : IDENTITÉ_ABS_ON</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT : SCELLÉ_DANS_L_UNITÉ</span>
                  </div>
               </div>
               <Button 
                onClick={handleAbsoluteUnification}
                disabled={isUnifying}
                className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[2em] text-4xl shadow-[0_0_150px_rgba(245,158,11,1)] border-none transition-all"
               >
                 {isUnifying ? <Loader2 className="animate-spin" /> : "RÉALISER L'UNITÉ Ω"}
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
