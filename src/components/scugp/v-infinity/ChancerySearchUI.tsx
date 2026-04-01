"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, BookOpen, Database, Zap, ShieldCheck, History, Landmark, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const ChancerySearchUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  const knowledgeBase = SCUGPHubUltimate.getChanceryKnowledgeBase();

  const handleSearch = async () => {
    if (!query) return;
    setIsSearching(true);
    setResult(null);
    
    setTimeout(() => {
      const found = (knowledgeBase as any)[query] || (knowledgeBase as any)[query.toUpperCase()];
      if (found) {
        setResult(found);
        toast({ title: "Accès Autorisé", description: "Information extraite des archives scellées." });
      } else {
        setResult(SCUGPHubUltimate.searchAuthority(query));
      }
      setIsSearching(false);
    }, 1500);
  };

  const handleActivateLayer = async () => {
    if (!db) return;
    try {
      await SCUGPHubUltimate.activateAlchimieLayer(db);
      toast({ title: "Couche Activée", description: "L'Alchimie de la Matière (HC-ER) est désormais visible." });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card className="bg-slate-900 border-4 border-amber-500/30 rounded-[4rem] overflow-hidden shadow-5xl text-white">
      <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Landmark className="h-12 w-12 text-amber-500 animate-pulse" />
            <div>
              <CardTitle className="text-3xl font-black uppercase tracking-widest leading-none">Haute Chancellerie Académique</CardTitle>
              <CardDescription className="text-sm font-bold text-slate-500 uppercase mt-2 tracking-widest italic">Moteur de Recherche Régalien & Visualisation HC-ER</CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge className="bg-amber-500 text-black font-black px-8 py-2 rounded-full uppercase tracking-widest text-[10px]">AUTH: SOUVERAIN</Badge>
            <span className="text-[8px] font-mono text-amber-900 uppercase">{SCUGP_CORE_OPTIONS.authToken}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-12 space-y-12">
        <div className="relative group">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 text-amber-900 group-focus-within:text-amber-500 transition-colors" />
           <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="DOI (ex: 10.scugp/...) ou Code de Reconnaissance (ex: HC-ER)..."
            className="w-full h-24 bg-black/60 border-4 border-white/10 rounded-[2.5rem] pl-20 pr-40 text-2xl font-black text-amber-400 uppercase tracking-widest focus:border-amber-500 outline-none transition-all placeholder:text-amber-900/20 shadow-inner"
           />
           <Button 
            onClick={handleSearch}
            disabled={isSearching || !query}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-amber-600 hover:bg-amber-700 shadow-3xl transition-transform active:scale-90 border-none"
           >
              {isSearching ? <Loader2 className="animate-spin" /> : <Send />}
           </Button>
        </div>

        {result && (
          <div className="p-10 bg-white/5 border-2 border-amber-500/20 rounded-[3rem] animate-in zoom-in duration-700 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity"><Sparkles size={80} className="text-amber-500" /></div>
             <div className="flex items-center gap-6 mb-6">
                <ShieldCheck className="h-8 w-8 text-emerald-500" />
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em]">Résultat du moteur de recherche</p>
             </div>
             <p className="text-3xl font-black text-white uppercase tracking-tighter leading-relaxed italic">"{result}"</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-10 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 group hover:border-amber-500/30 transition-all">
              <div className="flex justify-between items-center">
                 <h4 className="text-xl font-black text-amber-500 uppercase tracking-widest">Couche Alchimie</h4>
                 <Zap className="text-amber-500 animate-pulse" />
              </div>
              <p className="text-sm text-slate-400 italic leading-relaxed">
                Visualisation de la transition énergétique (HC-ER) pilotée par l'Intelligence de Grade Source.
              </p>
              <Button onClick={handleActivateLayer} className="w-full bg-amber-600 hover:bg-amber-700 text-black font-black uppercase h-12 rounded-2xl tracking-widest text-[10px]">
                ACTIVER COUCHE HC-ER Ω
              </Button>
           </div>
           <div className="p-10 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 group hover:border-blue-500/30 transition-all">
              <div className="flex justify-between items-center">
                 <h4 className="text-xl font-black text-blue-400 uppercase tracking-widest">Indexation DOI</h4>
                 <BookOpen className="text-blue-400" />
              </div>
              <p className="text-sm text-slate-400 italic leading-relaxed">
                Ancrage permanent des titres et découvertes dans le registre universel DOI.
              </p>
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-6 py-2 uppercase font-black tracking-tighter w-fit">10.scugp/absolute.apotheosis.sealed</Badge>
           </div>
        </div>
      </CardContent>
      <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50 justify-between items-center">
         <div className="flex gap-8">
            <div className="flex items-center gap-3">
               <History size={20} className="text-slate-600" />
               <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Audit : IMMUABLE</span>
            </div>
            <div className="flex items-center gap-3">
               <Database size={20} className="text-slate-600" />
               <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Ledger : SCELLÉ</span>
            </div>
         </div>
         <p className="text-[10px] font-mono text-amber-900 uppercase font-black">RECOGNITION_TOKEN: {SCUGP_CORE_OPTIONS.authToken}</p>
      </CardFooter>
    </Card>
  );
};
