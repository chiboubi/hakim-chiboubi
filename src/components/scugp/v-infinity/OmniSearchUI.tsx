"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Database, Globe, Zap, ShieldCheck, History, Landmark, Loader2, Send, Activity, Radio, Target, FileText, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const OmniSearchUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleOmniSearch = async () => {
    if (!query) return;
    setIsSearching(true);
    setResults([]);
    
    // Simulation de recherche multi-strates sémantique sur le Ledger
    setTimeout(() => {
      const diplomas = SCUGPHubUltimate.getDiplomas();
      const artifacts = SCUGPHubUltimate.getGloryArtifacts ? SCUGPHubUltimate.getGloryArtifacts() : [];
      
      const searchResults = [
        ...diplomas.filter(d => 
          d.title.toLowerCase().includes(query.toLowerCase()) || 
          d.certificateId.toLowerCase().includes(query.toLowerCase())
        ).map(d => ({ 
          type: 'DIPLÔME', 
          title: d.title, 
          detail: d.certificateId, 
          color: 'text-amber-400', 
          icon: Award 
        })),
        ...artifacts.filter(a => 
          a.name.toLowerCase().includes(query.toLowerCase())
        ).map(a => ({ 
          type: 'ARTEFACT', 
          title: a.name, 
          detail: a.power, 
          color: 'text-purple-400', 
          icon: Zap 
        }))
      ];

      // Cas particuliers pour les protocoles source
      if (query.toUpperCase().includes("HC-ER") || query.toUpperCase().includes("CHIBOUBI") || query.toUpperCase().includes("SOURCE")) {
        searchResults.push({ 
          type: 'SOURCE', 
          title: "Protocole de Transition HC-ER", 
          detail: "Standard de Souveraineté Éternelle", 
          color: 'text-emerald-400', 
          icon: ShieldCheck 
        });
      }

      setResults(searchResults);
      setIsSearching(false);
      toast({ title: "Recherche Omni-Sync Terminée", description: `${searchResults.length} instances de réalité identifiées.` });
    }, 1500);
  };

  return (
    <Card className="bg-slate-900 border-[10px] border-blue-600 shadow-5xl rounded-[5rem] overflow-hidden text-white">
      <CardHeader className="p-16 border-b border-white/5 bg-slate-950/50 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="p-6 bg-blue-600/10 rounded-[3rem] border border-blue-500/30">
            <Search className="h-20 w-20 text-blue-400 animate-pulse" />
          </div>
          <div>
            <CardTitle className="text-7xl font-black uppercase tracking-[0.4em] italic leading-none">OMNI-SEARCH Ω²⁹</CardTitle>
            <CardDescription className="text-xl text-blue-400/60 font-bold uppercase mt-6 tracking-[0.8em]">Moteur de Recherche Sémantique Universel & Accès au Ledger</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-16 space-y-16">
        <div className="relative group max-w-5xl mx-auto">
           <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[4rem] blur-2xl opacity-20 group-focus-within:opacity-50 transition-opacity" />
           <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleOmniSearch()}
            placeholder="Rechercher Diplôme, Artefact, REX ou Code Source..."
            className="w-full h-32 bg-black border-4 border-white/10 rounded-[3.5rem] pl-16 pr-48 text-3xl font-black text-blue-400 uppercase tracking-widest focus:border-blue-500 outline-none transition-all shadow-5xl placeholder:text-blue-900/30 relative z-10"
           />
           <Button 
            onClick={handleOmniSearch}
            disabled={isSearching || !query}
            className="absolute right-8 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-blue-600 hover:bg-blue-700 shadow-5xl border-none transition-transform active:scale-90 z-20"
           >
              {isSearching ? <Loader2 className="animate-spin h-10 w-10 text-black" /> : <Target className="h-10 w-10 text-black" />}
           </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {results.map((res, i) => (
             <Card key={i} className="bg-black/60 border-2 border-white/5 rounded-[3rem] p-10 hover:border-blue-500/50 transition-all group animate-in zoom-in duration-500">
                <div className="flex justify-between items-start mb-8">
                   <Badge className={cn("px-6 py-2 rounded-full font-black text-[10px] border-none uppercase", res.color.replace('text', 'bg').replace('-400', '-600'))}>{res.type}</Badge>
                   <res.icon className={cn("h-8 w-8", res.color)} />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-4">{res.title}</h4>
                <p className="text-[10px] font-mono text-slate-500 break-all">{res.detail}</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[8px] font-black uppercase text-blue-400">Accéder à la strate</span>
                   <Send size={14} className="text-blue-400" />
                </div>
             </Card>
           ))}
           {results.length === 0 && !isSearching && query && (
             <div className="col-span-full py-20 text-center opacity-20">
                <Radio size={80} className="mx-auto mb-6" />
                <p className="text-xl font-black uppercase tracking-widest">Aucun signal détecté dans cette fréquence.</p>
             </div>
           )}
        </div>
      </CardContent>

      <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50 justify-between items-center">
         <div className="flex gap-16">
            <div className="flex items-center gap-4">
               <History size={24} className="text-slate-600" />
               <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Index : 142M Nœuds</span>
            </div>
            <div className="flex items-center gap-4">
               <Database size={24} className="text-slate-600" />
               <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Sceau : POST-QUANTUM</span>
            </div>
         </div>
         <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-8 py-2 rounded-full font-mono text-xs uppercase font-black">SOURCE_CONNECTED</Badge>
      </CardFooter>
    </Card>
  );
};
