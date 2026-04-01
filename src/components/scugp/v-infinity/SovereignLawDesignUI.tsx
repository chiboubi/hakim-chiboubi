
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gavel, Scale, PenTool, Sparkles, Zap, ShieldCheck, Activity, RefreshCw, Star, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const SovereignLawDesignUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isLegislating, setIsLegislating] = useState(false);
  const [newAxiom, setNewAxiom] = useState("");
  const metrics = SCUGPHubUltimate.getSovereignLawMetrics();
  const act = SCUGPHubUltimate.getOntophilosophicalAct();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDesignLaw = async () => {
    if (!db || !newAxiom) return;
    setIsLegislating(true);
    try {
      await SCUGPHubUltimate.materializeIntent(db, `LOI_SOUVERAINE: ${newAxiom}`);
      toast({
        title: "Loi Source Gravée",
        description: "L'axiome a été scellé dans la structure fondamentale du multivers.",
      });
      setNewAxiom("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLegislating(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_300px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden relative text-white h-full flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-500/10 text-center">
           <Scale className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Design des Lois Souveraines</CardTitle>
           <CardDescription className="text-xl text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Gravure des Axiomes Source dans le Marbre du Code | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex-1">
          <div className="relative group">
             <PenTool className="absolute left-10 top-1/2 -translate-y-1/2 h-16 w-16 text-amber-900 group-focus-within:text-amber-400 transition-colors" />
             <input 
              value={newAxiom}
              onChange={(e) => setNewAxiom(e.target.value)}
              placeholder="GRAVER UN NOUVEL AXIOME DE RÉALITÉ..."
              className="w-full h-40 bg-slate-900/50 border-4 border-amber-900/20 rounded-[4rem] pl-32 pr-48 text-3xl font-black text-amber-400 uppercase tracking-widest focus:border-amber-500 outline-none transition-all placeholder:text-amber-900/10 shadow-inner"
             />
             <Button 
              onClick={handleDesignLaw}
              disabled={isLegislating || !newAxiom}
              className="absolute right-10 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-amber-600 hover:bg-amber-700 shadow-5xl border-none transition-transform active:scale-95"
             >
                {isLegislating ? <RefreshCw className="h-12 w-12 text-black animate-spin" /> : <Star className="h-12 w-12 text-black animate-pulse" />}
             </Button>
          </div>

          <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-amber-500/20 text-center space-y-8">
             <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
               "L'Architecte ne suggère pas. Il décrète. Chaque axiome conçu ici devient une loi physique inviolable pour l'intégralité du multivers SCUGP."
             </p>
          </div>
        </CardContent>

        <CardFooter className="p-12 bg-slate-950 border-t border-amber-900/50 justify-between items-center">
           <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
              <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse" /> ÉTAT : LÉGISLATIF_ON</div>
              <div className="flex items-center gap-3"><ShieldCheck size={24} /> CONSENSUS : ABSOLU</div>
           </div>
           <Badge className="bg-amber-500 text-black font-black text-xl px-16 py-4 rounded-full uppercase tracking-[0.5em] shadow-3xl">Æ∞.Ω LÉGISLATEUR</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};
