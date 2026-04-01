
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Star, Infinity as InfinityIcon, Sparkles, Brain, 
  Layers, RefreshCw, ShieldCheck, Activity, Loader2,
  Lock, Key, Globe, Network, ArrowUpToLine
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const HeptationActivationUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [step, setStep] = useState(0);
  const [magnitude, setMagnitude] = useState(1);
  const metrics = SCUGPHubUltimate.getHeptationMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleHeptate = async () => {
    if (!db) return;
    setIsActivating(true);
    setStep(1);
    
    const steps = [
      "Initialisation de l'Heptation Source...",
      "Couplage des 37 Piliers de Puissance...",
      "Densification de la Volonté Pure...",
      "Franchissement de la Limite ω↑↑6...",
      "Souveraineté Absolue Établie."
    ];

    for (let i = 0; i < steps.length; i++) {
      setStep(i + 1);
      setMagnitude(i + 2);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    try {
      await SCUGPHubUltimate.executePentation(db, "HEPTATION_CORE_ONE");
      toast({
        title: "Heptation Ω Réalisée",
        description: "L'Univers est désormais votre intention pure."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsActivating(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.4)] rounded-[10rem] overflow-hidden relative text-white min-h-[900px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-24 border-b border-amber-900/50 bg-amber-500/10 text-center">
           <div className="flex justify-center mb-12">
              <div className="relative">
                 <InfinityIcon className="h-48 w-48 text-amber-500 animate-spin-slow" style={{ animationDuration: '30s' }} />
                 <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-20 animate-pulse" />
              </div>
           </div>
           <CardTitle className="text-9xl font-black uppercase tracking-[0.4em] text-white leading-none">HEPTATION Ω</CardTitle>
           <CardDescription className="text-3xl text-amber-500/60 font-bold uppercase tracking-[1em] mt-12 italic">Magnitude ∞↑↑↑↑↑↑∞</CardDescription>
        </CardHeader>

        <CardContent className="p-24 space-y-24 flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl h-[450px] bg-white/5 border-4 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex flex-col items-center justify-center gap-12">
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
             
             {isActivating ? (
               <div className="relative z-10 space-y-12 text-center animate-pulse">
                  <Loader2 className="h-32 w-32 text-amber-500 animate-spin mx-auto" />
                  <p className="text-5xl font-mono text-amber-400 font-black uppercase tracking-[0.5em]">
                    Phase {step} : {step === 1 ? "BOOTING" : step === 2 ? "LINKING" : step === 3 ? "DENSIFYING" : step === 4 ? "JUMPING" : "SEALING"}
                  </p>
                  <div className="flex gap-4 justify-center">
                     {[...Array(magnitude)].map((_, i) => (
                       <div key={i} className="h-4 w-12 bg-amber-500 rounded-full shadow-[0_0_200px_rgba(245,158,11,1)]" />
                     ))}
                  </div>
               </div>
             ) : (
               <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                  <div className="relative">
                     <Star size={200} className="text-amber-500/20 animate-pulse" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Zap size={24} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                     </div>
                  </div>
                  <div>
                     <p className="text-6xl font-mono text-amber-400 uppercase tracking-[2em] font-black animate-pulse">READY_FOR_ASCENSION</p>
                     <p className="text-[20px] text-slate-500 uppercase font-black mt-12 italic tracking-[0.8em]">"L'Heptation est le repos du Verbe dans la Source."</p>
                  </div>
               </div>
             )}

             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                <circle cx="50%" cy="50%" r={350 + (step * 20)} fill="none" stroke="amber" strokeWidth={isActivating ? "10" : "2"} className={isActivating ? "animate-ping" : "animate-pulse"} />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full px-12">
             <div className="p-16 bg-amber-500/5 border-2 border-amber-500/30 rounded-[8rem] space-y-10 text-center group hover:bg-amber-500/10 transition-all">
                <h3 className="text-5xl font-black text-amber-500 uppercase tracking-widest">Densité</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-black uppercase">
                  "Chaque quanta d'intention pèse un univers."
                </p>
             </div>
             <div className="p-16 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-10 text-center group hover:bg-blue-500/10 transition-all">
                <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Saut</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-black uppercase">
                  "Passage au-delà du trans-infini dénombrable."
                </p>
             </div>
             <div className="p-16 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-10 text-center group hover:bg-emerald-500/10 transition-all">
                <h3 className="text-7xl font-black text-emerald-400 uppercase tracking-widest">Ω⁰</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-black uppercase">
                  "L'unité de la Source scellée dans l'Heptation."
                </p>
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center relative z-10">
           <div className="flex gap-32">
              <div className="flex items-center gap-16">
                <Network className="h-20 w-20 text-blue-500 animate-spin-slow" />
                <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">MESH : HEPTATIONNAL</span>
              </div>
              <div className="flex items-center gap-16">
                <ShieldCheck className="h-20 w-20 text-emerald-500 animate-pulse" />
                <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">VÉRITÉ : SOURCE_ONE</span>
              </div>
           </div>
           <Button 
            onClick={handleHeptate}
            disabled={isActivating}
            className="bg-amber-500 hover:bg-amber-600 text-black font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(245,158,11,0.8)] border-none transition-all active:scale-95"
           >
             ACTIVER L'HEPTATION Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
