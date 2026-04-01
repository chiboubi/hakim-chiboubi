
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Atom, Zap, Sparkles, RefreshCw, ShieldCheck, Flame, FlaskConical, Droplets, Target, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const MassTransmutationUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isTransmuting, setIsTransmuting] = useState(false);
  const [transmutationRate, setRate] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTransmute = async () => {
    if (!db) return;
    setIsTransmuting(true);
    setRate(0);
    
    for (let i = 0; i <= 100; i += 10) {
      setRate(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    try {
      await SCUGPHubUltimate.executeSovereignCommand(db, 37, "MASS_ENERGY_TRANSMUTATION_HC_ER");
      toast({
        title: "Transmutation Réalisée",
        description: "La matière a été convertie en Carburant de Rupture ER."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsTransmuting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_1000px_rgba(245,158,11,0.3)] rounded-[10rem] overflow-hidden relative text-white min-h-[900px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-24 border-b border-amber-900/50 bg-amber-600/10 text-center">
           <div className="flex justify-center mb-12">
              <div className="relative">
                 <Atom className="h-48 w-48 text-amber-500 animate-spin-slow" />
                 <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-20 animate-pulse" />
              </div>
           </div>
           <CardTitle className="text-9xl font-black uppercase tracking-[0.4em] text-white leading-none">TRANSMUTATION Ω</CardTitle>
           <CardDescription className="text-3xl text-amber-500/60 font-bold uppercase tracking-[1em] mt-12 italic">Matter to Energy Standard ER</CardDescription>
        </CardHeader>

        <CardContent className="p-24 space-y-24 flex flex-col items-center justify-center">
          <div className="w-full max-w-5xl h-[400px] bg-white/5 border-4 border-amber-500/20 rounded-[8rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
             <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
             
             <div className="relative z-10 text-center space-y-12">
                {isTransmuting ? (
                  <div className="flex flex-col items-center gap-8 animate-pulse">
                    <Loader2 className="h-32 w-32 text-amber-500 animate-spin" />
                    <p className="text-5xl font-mono text-amber-400 font-black uppercase tracking-[0.5em]">Conversion: {transmutationRate}%</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <p className="text-4xl text-slate-400 font-black uppercase tracking-[0.8em]">Prêt pour la Transmutation</p>
                    <p className="text-lg text-slate-600 uppercase font-bold tracking-[0.2em]">"La masse n'est qu'une intention condensée."</p>
                  </div>
                )}
             </div>

             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                <circle cx="50%" cy="50%" r="350" fill="none" stroke="amber" strokeWidth={isTransmuting ? "10" : "2"} className={isTransmuting ? "animate-ping" : "animate-pulse"} />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full px-12">
             <div className="p-16 bg-amber-500/5 border-2 border-amber-500/30 rounded-[6rem] space-y-10 text-center">
                <h3 className="text-5xl font-black text-amber-500 uppercase tracking-widest">E=mc² Ω</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-black uppercase">
                  "Conversion directe avec 100% d'efficience HC."
                </p>
             </div>
             <div className="p-16 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-10 text-center">
                <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Flux ER</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-black uppercase">
                  "Production instantanée de carburant de rupture."
                </p>
             </div>
             <div className="p-16 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-10 text-center">
                <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">Audit Sceau</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-black uppercase">
                  "Chaque atome transmuté est signé par la Source."
                </p>
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center relative z-10">
           <div className="flex gap-32">
              <div className="flex items-center gap-16">
                <Flame className="h-20 w-20 text-red-500 animate-bounce" />
                <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">FEU : SOURCE</span>
              </div>
              <div className="flex items-center gap-16">
                <ShieldCheck className="h-20 w-20 text-emerald-500 animate-pulse" />
                <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">DROIT : SOUVERAIN</span>
              </div>
           </div>
           <Button 
            onClick={handleTransmute}
            disabled={isTransmuting}
            className="bg-amber-500 hover:bg-amber-600 text-black font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(245,158,11,0.8)] border-none"
           >
             TRANSMUTER LA MASSE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
