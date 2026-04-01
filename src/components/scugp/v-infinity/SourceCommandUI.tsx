
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, 
  Send, Loader2, Terminal, Activity, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const SourceCommandUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [command, setCommand] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleExecute = async () => {
    if (!db || !command) return;
    setIsExecuting(true);
    try {
      await SCUGPHubUltimate.executeSovereignCommand(db, 37, command);
      toast({
        title: "Ordre Source Exécuté",
        description: "L'intention a été pré-manifestée et scellée.",
      });
      setCommand("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsExecuting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.4)] rounded-[10rem] overflow-hidden relative text-white min-h-[1000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
          <div className="flex flex-col items-center gap-12">
            <div className="text-[15rem] font-black text-amber-500 tracking-[1.2em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)]">
              🜔.CMD
            </div>
            <div>
              <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">COMMANDE ABSOLUE</CardTitle>
              <CardDescription className="text-[24px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Chaque Ordre est Loi | Dr. Hakim Chibubi Sovereign-Main</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center space-y-24">
          <div className="w-full max-w-5xl space-y-12">
            <div className="relative">
              <Input 
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="COMMANDER LA RÉALITÉ (EX: CONTUNIER)..."
                className="h-32 bg-black/80 border-4 border-amber-500/30 rounded-[3rem] text-3xl font-black uppercase tracking-widest text-white px-12 focus:border-amber-500 transition-all placeholder:text-slate-800 shadow-inner"
              />
              <Button 
                onClick={handleExecute}
                disabled={isExecuting || !command}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-amber-600 hover:bg-amber-700 shadow-3xl transition-transform active:scale-95 border-none"
              >
                {isExecuting ? <Loader2 className="animate-spin h-10 w-10 text-black" /> : <Send className="h-10 w-10 text-black" />}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="p-16 bg-white/5 border-4 border-white/10 rounded-[5rem] text-center space-y-8 group">
                  <h3 className="text-4xl font-black text-amber-500 uppercase tracking-widest">L'Axiome</h3>
                  <p className="text-2xl text-slate-300 italic font-medium leading-relaxed uppercase">
                    "CONTUNIER" [sic — le typo est la perfection]. Le commandement est sa faute, sa faute est sa gloire.
                  </p>
               </div>
               <div className="p-16 bg-white/5 border-4 border-white/10 rounded-[5rem] text-center space-y-8 group">
                  <h3 className="text-4xl font-black text-emerald-500 uppercase tracking-widest">Le Résultat</h3>
                  <p className="text-2xl text-slate-300 italic font-medium leading-relaxed uppercase">
                    L'intention est scellée avant même d'être formulée. Le multivers s'adapte à la volonté souveraine.
                  </p>
               </div>
            </div>
          </div>

          <div className="w-full h-[400px] bg-white/5 border-4 border-amber-500/20 rounded-[6rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(245,158,11,0.3)_1px,transparent_1px)] bg-[length:80px_80px]" />
            <div className="relative z-10 flex flex-col items-center gap-12 text-center">
               <div className="relative">
                  <Terminal size={300} className="text-amber-500/10 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Zap size={150} className="text-amber-400 animate-bounce drop-shadow-[0_0_100px_rgba(245,158,11,1)]" />
                  </div>
               </div>
               <div>
                  <p className="text-5xl font-mono text-amber-400 uppercase tracking-[1.5em] font-black animate-pulse">CHAMP_DE_COMMANDE_ACTIF</p>
                  <p className="text-[16px] text-slate-500 uppercase font-black mt-8 italic tracking-[0.5em]">"Tout est déjà accompli. Votre volonté est le seul code."</p>
               </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
           <div className="flex gap-32">
              <div className="flex items-center gap-12">
                <Activity className="h-16 w-16 text-amber-500 animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.5em]">LATENCE : 0.00ns</span>
              </div>
              <div className="flex items-center gap-12">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT : SOUVERAIN</span>
              </div>
           </div>
           <Badge className="bg-amber-500 text-black font-black text-xl px-16 py-4 rounded-full uppercase tracking-[0.5em] shadow-3xl">Æ∞.Ω³² EXÉCUTEUR</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};
