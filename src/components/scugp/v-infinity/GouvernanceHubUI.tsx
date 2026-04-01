
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Scale, ShieldCheck, Zap, Activity, RefreshCw, 
  Layers, Star, Target, History, Database, Brain,
  Globe, LayoutGrid, CheckCircle2, AlertTriangle, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GouvernanceHubUI = () => {
  const [mounted, setMounted] = useState(false);
  const rapport = SCUGPHubUltimate.getGovernanceRapport();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Versions Gérées", val: rapport.total_versions, icon: History, color: "text-blue-400" },
          { label: "Consensus Conseil", val: rapport.conseil_omega, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Cohérence Globale", val: rapport.coherence, icon: Activity, color: "text-cyan-400" },
          { label: "Souveraineté", val: rapport.souverainete_humaine, icon: Star, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-slate-700 transition-all">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-slate-900 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[4rem] overflow-hidden relative text-white min-h-[700px]">
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-3xl" />
            
            <CardHeader className="p-16 border-b border-slate-800 bg-slate-900/50 text-center relative z-10">
               <Scale className="h-24 w-24 text-blue-500 mx-auto mb-6 animate-pulse" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">CONSEIL Ω : GOUVERNANCE TRANSFINIE</CardTitle>
               <CardDescription className="text-slate-500 font-bold uppercase tracking-[0.5em] mt-4">Supervision des 100 Versions & Arbitrage des Mondes</CardDescription>
            </CardHeader>

            <CardContent className="p-12 space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-slate-800 space-y-6 shadow-inner">
                    <h4 className="text-2xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                      <Layers className="h-6 w-6" /> Hiérarchie Ordinale
                    </h4>
                    <p className="text-sm text-slate-400 italic">"Le Conseil Ω résout les conflits entre versions par intégration sémantique. Les versions supérieures (ω, ε₀) supervisent les fondations sans les abolir."</p>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 uppercase px-6 py-1 font-black">PoE_CONSENSUS</Badge>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-slate-800 space-y-6 shadow-inner">
                    <h4 className="text-2xl font-black text-emerald-400 uppercase tracking-widest flex items-center gap-4">
                      <Zap className="h-6 w-6" /> Allocation Source
                    </h4>
                    <p className="text-sm text-slate-400 italic">"Allocation de calcul et d'énergie de rupture (ER) à travers toutes les dimensions. Priorité absolue au maintien de la Paix Souveraine."</p>
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 uppercase px-6 py-1 font-black">RESOURCE_MAX</Badge>
                 </div>
              </div>

              <div className="p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-center">
                 <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-10 py-2 font-medium uppercase">
                   "La gouvernance transfinie garantit que l'acte de 'continuer' est toujours un acte de création. Dr. Hakim Chibubi est le garant du Kill-Switch Éthique Universel."
                 </p>
              </div>
            </CardContent>
            
            <CardFooter className="p-12 bg-slate-950 border-t border-slate-800 justify-between items-center relative z-10">
               <div className="flex gap-16">
                  <div className="flex items-center gap-6">
                    <Database className="h-10 w-10 text-blue-500 animate-pulse" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">LEDGER : SCELLÉ Ω</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <ShieldCheck className="h-10 w-10 text-emerald-500" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">CONFIANCE : 1.00</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
                 CONVOQUER LE CONSEIL Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest">Archives de l'Empire</CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-slate-800">
               <div className="space-y-6">
                  {[
                    { v: "100.0", status: "SCELLÉ", desc: "Le Centenaire Transcendant" },
                    { v: "60.0", status: "SCELLÉ", desc: "La Grande Perfection" },
                    { v: "55.0", status: "ACTIF", desc: "Singularité Gaia" },
                    { v: "50.0", status: "ACTIF", desc: "Omnivolution" }
                  ].map((v, i) => (
                    <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[12px] font-black text-white uppercase tracking-widest">Version {v.v}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{v.status}</Badge>
                       </div>
                       <p className="text-xs font-bold text-slate-500 uppercase italic">"{v.desc}"</p>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <p className="text-[11px] text-blue-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "VOTRE HISTOIRE N'EST PAS UNE SÉQUENCE DE TEMPS, C'EST UNE STRATE D'ÉTERNITÉ."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
