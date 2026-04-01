
"use client"

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Send, Sparkles, Zap, ShieldCheck, Activity, 
  History, Loader2, CheckCircle2, Star, Target,
  Gavel, Scale, PenTool, Radio, Waves
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

export const SovereignDecreeUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [intent, setIntent] = useState("");
  const [isIssuing, setIsIssuing] = useState(false);

  const decreesQuery = useMemo(() => 
    db ? query(collection(db, "sovereign_decrees"), orderBy("timestamp", "desc"), limit(10)) : null
  , [db]);
  const { data: decrees } = useCollection(decreesQuery);

  const handleIssueDecree = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db || !intent) return;
    setIsIssuing(true);
    try {
      await SCUGPHubUltimate.materializeIntent(db, intent);
      setIntent("");
      toast({
        title: "Décret Souverain Émis",
        description: "L'intention a été densifiée dans le multivers."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsIssuing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_150px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-500/5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <Gavel className="h-16 w-16 text-amber-500 animate-bounce" />
              <div>
                <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] italic leading-none">REGISTRE DES DÉCRETS</CardTitle>
                <CardDescription className="text-xl text-amber-500/60 font-bold uppercase mt-4 tracking-[0.5em]">Inversion de Réalité par Décret de Grade Source</CardDescription>
              </div>
            </div>
            <Badge className="bg-amber-500 text-black border-none px-10 py-4 text-sm font-black uppercase tracking-widest shadow-3xl">OMNIPOTENCE_ON</Badge>
          </div>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <form onSubmit={handleIssueDecree} className="relative group">
             <PenTool className="absolute left-10 top-1/2 -translate-y-1/2 h-16 w-16 text-amber-900 group-focus-within:text-amber-400 transition-colors" />
             <Input 
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              placeholder="ÉNONCEZ VOTRE DÉCRET (EX: CONTUNIER)..."
              className="h-40 bg-slate-900/50 border-4 border-amber-900/20 rounded-[4rem] pl-32 pr-48 text-4xl font-black text-amber-400 uppercase tracking-widest focus:border-amber-500 transition-all placeholder:text-amber-900/10 shadow-inner"
             />
             <Button 
              type="submit"
              disabled={isIssuing || !intent}
              className="absolute right-10 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-amber-600 hover:bg-amber-700 shadow-5xl border-none transition-transform active:scale-95"
             >
                {isIssuing ? <Loader2 className="animate-spin h-12 w-12 text-black" /> : <Send className="h-12 w-12 text-black" />}
             </Button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-white/5 space-y-8 group hover:border-amber-500/30 transition-all">
                <h4 className="text-3xl font-black uppercase text-amber-500 flex items-center gap-6">
                  <Star className="h-8 w-8 animate-spin-slow" /> Densité de Volonté
                </h4>
                <div className="space-y-4">
                   <p className="text-sm text-slate-400 italic">"Chaque décret injecte 142 zetta-octets d'intention pure dans le maillage neural Gaia."</p>
                   <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[100%] animate-pulse" />
                   </div>
                </div>
             </div>
             <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-white/5 space-y-8 group hover:border-blue-500/30 transition-all">
                <h4 className="text-3xl font-black uppercase text-blue-400 flex items-center gap-6">
                  <Waves className="h-8 w-8 animate-bounce" /> Résonance Morphique
                </h4>
                <div className="space-y-4">
                   <p className="text-sm text-slate-400 italic">"Propagation du décret à tous les nœuds du multivers en 0.000ns."</p>
                   <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[100%] animate-pulse" />
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-8">
             <div className="flex items-center gap-6">
                <History className="h-10 w-10 text-slate-600" />
                <h4 className="text-3xl font-black uppercase text-slate-500 tracking-[0.4em]">Chronologie des Inversions de Réalité</h4>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {decrees?.map((d: any) => (
                  <div key={d.id} className="p-12 bg-white/5 rounded-[5rem] border-2 border-white/5 group hover:border-amber-500/50 transition-all relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity"><Scale size={100} className="text-amber-500" /></div>
                     <div className="flex justify-between items-start mb-8">
                        <Badge className="bg-amber-600/20 text-amber-500 border-none text-xs px-6 py-2 rounded-full uppercase font-black">{d.status}</Badge>
                        <span className="text-xs font-mono text-slate-600 uppercase font-black">{new Date(d.timestamp?.toDate ? d.timestamp.toDate() : d.timestamp).toLocaleTimeString()}</span>
                     </div>
                     <p className="text-3xl font-black text-white uppercase tracking-tighter italic leading-relaxed">" {d.intent} "</p>
                     <div className="mt-10 flex items-center gap-6 text-emerald-500">
                        <CheckCircle2 size={32} className="animate-bounce" />
                        <span className="text-lg font-black uppercase tracking-widest">{d.result}</span>
                     </div>
                     <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                        <span className="text-[10px] font-mono uppercase tracking-widest">Fidélité : {d.fidelity}%</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest">NODE : ALPHA_SOURCE</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
           <div className="flex gap-20">
              <div className="flex items-center gap-8">
                <Radio className="h-12 w-12 text-amber-500 animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">Intention : SOUVERAINE</span>
              </div>
              <div className="flex items-center gap-8">
                <ShieldCheck className="h-12 w-12 text-emerald-500" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">Consensus : Ω</span>
              </div>
           </div>
           <p className="text-[12px] font-mono text-slate-700 uppercase tracking-[0.5em]">SCELLÉ PAR DR. HAKIM CHIBUBI — SOUVERAINETÉ ABSOLUE</p>
        </CardFooter>
      </Card>
    </div>
  );
};
