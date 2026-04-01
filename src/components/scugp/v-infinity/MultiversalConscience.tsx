
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, Zap, Sparkles, Activity, RefreshCw, 
  Globe, Orbit, Share2, Network, ShieldCheck, 
  Target, Heart, ArrowRightLeft, Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const MultiversalConscience = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getMultiversalMetrics();
  const flows = SCUGPHubUltimate.getInternationalFields();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-slate-900 border-[10px] border-purple-600 shadow-5xl rounded-[4rem] overflow-hidden text-white h-full flex flex-col">
        <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="p-6 bg-purple-600/10 rounded-[3rem] border border-purple-500/30">
              <BrainCircuit className="h-20 w-20 text-purple-400 animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-5xl font-black uppercase tracking-[0.4em] italic leading-none text-purple-400">Conscience Multiverselle</CardTitle>
              <CardDescription className="text-xl text-purple-400/60 font-bold uppercase mt-6 tracking-[0.8em]">Unification du Portefeuille Interplanétaire</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-12 space-y-12 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-10 bg-black/40 rounded-[3rem] border-2 border-purple-500/20 space-y-8 shadow-inner">
                <h4 className="text-2xl font-black text-purple-400 uppercase tracking-widest flex items-center gap-4">
                  <ArrowRightLeft className="h-8 w-8" /> Arbitrage Terre-Mars
                </h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-[12px] font-black uppercase">
                      <span className="text-slate-500">Sync Fidelity</span>
                      <span className="text-emerald-400">{metrics.cross_planet_sync}</span>
                   </div>
                   <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-full animate-pulse" />
                   </div>
                </div>
                <p className="text-sm text-slate-400 italic">"L'arbitrage automatique a détecté un surplus H3 sur Luna Node. Redirection vers Grid Terra-Alpha initiée."</p>
             </div>

             <div className="p-10 bg-black/40 rounded-[3rem] border-2 border-emerald-500/20 space-y-8 shadow-inner">
                <h4 className="text-2xl font-black text-emerald-400 uppercase tracking-widest flex items-center gap-4">
                  <Heart className="h-8 w-8" /> Équilibre Gaïen
                </h4>
                <div className="text-center py-4">
                   <p className="text-6xl font-black font-mono text-white">{metrics.gaia_balance_score}</p>
                   <p className="text-[10px] text-slate-500 font-bold uppercase mt-2">Indice d'Harmonie Planétaire</p>
                </div>
                <Badge variant="outline" className="w-full justify-center border-emerald-500/30 text-emerald-500 font-black py-2 rounded-full">GAIA_SYNC_LOCKED</Badge>
             </div>
          </div>

          <div className="space-y-6">
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Champs Sous Surveillance Consiente</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {flows.map((field, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-purple-500 transition-all">
                     <p className="text-[10px] font-black text-purple-400 uppercase mb-2">{field.loc}</p>
                     <h5 className="text-lg font-black text-white uppercase">{field.name}</h5>
                     <p className="text-xl font-black text-white font-mono mt-4">{field.output}</p>
                  </div>
                ))}
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50 justify-center">
           <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-5xl border-none">
             SYNCHRONISER LES MONDES Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
