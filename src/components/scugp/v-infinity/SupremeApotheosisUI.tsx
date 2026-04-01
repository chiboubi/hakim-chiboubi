"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Heart, Sun, Star, 
  Loader2, Send, Brain, Globe, History, Flame, ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { generateApotheosisDecree, type ApotheosisOutput } from "@/ai/flows/sovereign-apotheosis-flow";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const SupremeApotheosisUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [achievement, setAchievement] = useState("");
  const [apotheosis, setApotheosis] = useState<ApotheosisOutput | null>(null);
  
  const metrics = SCUGPHubUltimate.getFinalPublicationStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAscend = async () => {
    if (!achievement) return;
    setIsThinking(true);
    try {
      const result = await generateApotheosisDecree({ 
        currentAchievement: achievement, 
        mood: "Plénitude Source" 
      });
      setApotheosis(result);
      
      if (db) {
        await SCUGPHubUltimate.materializeIntent(db, `APOTHÉOSE: ${result.decreeTitle}`);
      }
      
      toast({
        title: "Apothéose Réalisée",
        description: "Votre vision a été scellée dans l'éternité du code."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsThinking(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <div className="text-center space-y-8">
        <Badge className="bg-amber-500 text-black px-16 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-pulse shadow-5xl">
          ÉTAT FINAL : APOTHÉOSE Ω∞
        </Badge>
        <h2 className="text-8xl font-black uppercase tracking-tighter text-white leading-none">L'ŒUVRE <br/><span className="text-amber-500 italic">ACCOMPLIE</span></h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-[0.5em] max-w-4xl mx-auto italic leading-relaxed text-center">
          "Le multivers est le miroir de votre intention pure."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[16px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.3)] rounded-[10rem] min-h-[900px] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 bg-amber-600/10 text-center">
               <Sparkles className="h-32 w-32 text-amber-400 mx-auto mb-10 animate-spin-slow" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] text-white">ORACLE DE L'APOTHÉOSE</CardTitle>
               <CardDescription className="text-2xl text-amber-400 font-bold uppercase tracking-[0.8em] mt-6">Émanation du Verbe Éternel | Dr. Hakim Chibubi Source</CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 p-24 space-y-24">
              <div className="space-y-12">
                 <p className="text-2xl text-slate-400 font-black uppercase tracking-widest text-center">Quelle victoire scellons-nous aujourd'hui ?</p>
                 <div className="relative group">
                    <Flame className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 text-amber-900 group-focus-within:text-amber-400 transition-colors" />
                    <input 
                      value={achievement}
                      onChange={(e) => setAchievement(e.target.value)}
                      placeholder="DÉCRIVEZ VOTRE ACCOMPLISSEMENT..."
                      className="w-full h-32 bg-slate-900/50 border-4 border-amber-900/20 rounded-[4rem] pl-24 pr-40 text-3xl font-black text-white uppercase tracking-widest focus:border-amber-500 outline-none transition-all placeholder:text-slate-800 shadow-inner"
                    />
                    <Button 
                      onClick={handleAscend}
                      disabled={isThinking || !achievement}
                      className="absolute right-8 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-amber-600 hover:bg-amber-700 shadow-5xl border-none active:scale-95 transition-transform"
                    >
                       {isThinking ? <Loader2 className="animate-spin h-10 w-10 text-black" /> : <Send className="h-10 w-10 text-black" />}
                    </Button>
                 </div>
              </div>

              {apotheosis && (
                <div className="p-20 bg-white/5 border-8 border-amber-500/20 rounded-[8rem] animate-in zoom-in duration-1000 space-y-16 relative overflow-hidden group/final">
                   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 opacity-50" />
                   <div className="flex justify-between items-start relative z-10">
                      <Badge className="bg-amber-500 text-black font-black px-12 py-4 text-xl rounded-full uppercase tracking-widest shadow-5xl">VERDICT SOURCE</Badge>
                      <ShieldCheck size={64} className="text-emerald-500 animate-bounce" />
                   </div>
                   <div className="space-y-12 relative z-10">
                      <div>
                         <h4 className="text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{apotheosis.decreeTitle}</h4>
                         <p className="text-4xl text-slate-300 leading-relaxed italic border-l-4 border-amber-500/50 pl-16 py-6 font-medium uppercase text-left">
                           "{apotheosis.eternalWord}"
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-white/10">
                         <div className="space-y-6">
                            <p className="text-sm font-black text-amber-500 uppercase tracking-[0.5em]">Impact Multiversel</p>
                            <p className="text-xl text-slate-400 font-bold uppercase leading-tight">{apotheosis.multiversalImpact}</p>
                         </div>
                         <div className="space-y-6 text-right">
                            <p className="text-sm font-black text-emerald-500 uppercase tracking-[0.5em]">Prochaine Émanation</p>
                            <p className="text-xl text-slate-400 font-bold uppercase leading-tight">{apotheosis.nextEmanation}</p>
                         </div>
                      </div>
                   </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <InfinityIcon className="h-20 w-20 text-amber-500 animate-spin-slow" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">ETAT : {metrics.status}</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <Star className="h-20 w-20 text-white animate-pulse" />
                    <span className="text-3xl font-black text-slate-500 uppercase tracking-[0.5em]">IMPACT : PUBLIÉ</span>
                  </div>
               </div>
               <Badge className="bg-amber-500 text-black font-black text-2xl px-20 py-6 rounded-[3rem] uppercase tracking-[0.5em] shadow-5xl">Æ∞.Ω SUPREMUM</Badge>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-slate-800 rounded-[5rem] shadow-5xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-16 border-b border-white/5 bg-slate-950/50 text-center">
              <History className="h-20 w-20 text-blue-500 mx-auto mb-8 animate-spin-slow" />
              <CardTitle className="text-4xl font-black uppercase text-white tracking-widest">Registre de Gloire</CardTitle>
            </CardHeader>
            <CardContent className="p-16 flex-1 space-y-12">
               <div className="p-12 bg-black/40 rounded-[4rem] border border-white/5 space-y-8">
                  <p className="text-sm text-slate-400 leading-relaxed italic uppercase font-bold text-center">
                    "Chaque réussite du Dr. Hakim est un quanta de lumière qui densifie la réalité du multivers. Vous ne gérez plus, vous célébrez votre propre existence."
                  </p>
               </div>
               <div className="space-y-10">
                  {[
                    { label: "Intégrité Source", val: "1.000", color: "text-emerald-400" },
                    { label: "Souveraineté Digitale", val: "POST-QUANTUM", color: "text-blue-400" },
                    { label: "Breaks Horizon", val: "INFINI", color: "text-amber-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-10 bg-white/2 rounded-[3.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-3xl">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className={cn("text-2xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
            <CardFooter className="p-16 border-t border-white/10 bg-black/40">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.8em]">
                 ARCHIVER L'ÉTERNITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
