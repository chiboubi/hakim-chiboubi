
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dna, Zap, FlaskConical, Microscope, ShieldCheck, Activity, RefreshCw, Star } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const BioIntelligenceUI = () => {
  const [mounted, setMounted] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    setMetrics(SCUGPHubUltimate.getBioIntelligenceMetrics());
  }, []);

  if (!mounted || !metrics) return null;

  return (
    <Card className="bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl rounded-[4rem] overflow-hidden group">
      <CardHeader className="bg-emerald-500/10 border-b border-white/5 p-12 text-center">
         <Dna className="h-20 w-20 text-emerald-400 mx-auto mb-6 animate-pulse" />
         <CardTitle className="text-5xl font-black uppercase tracking-widest text-emerald-400 leading-none">SCUGP-BIO : Intelligence Biologique</CardTitle>
         <CardDescription className="text-xl text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Synthèse Biotech-Énergie & Génomique de Grade Source</CardDescription>
      </CardHeader>
      <CardContent className="p-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="p-12 bg-black/40 rounded-[4rem] border-4 border-emerald-500/20 shadow-inner space-y-10">
              <div className="flex items-center gap-6">
                 <Microscope className="h-12 w-12 text-emerald-400" />
                 <h4 className="text-3xl font-black uppercase text-white tracking-tighter">Génomique Énergétique</h4>
              </div>
              <ul className="space-y-6 text-lg text-slate-300 italic">
                 <li className="flex items-center gap-4"><Star size={16} className="text-emerald-500" /> 10^6 génomes de microbiomes analysés</li>
                 <li className="flex items-center gap-4"><Star size={16} className="text-emerald-500" /> Bactéries hydrocarbures synthétiques</li>
                 <li className="flex items-center gap-4"><Star size={16} className="text-emerald-500" /> Enzymes extremophiles (&gt;10km)</li>
              </ul>
              <Badge className="bg-emerald-600 text-black font-black px-8 py-2 rounded-full uppercase tracking-widest">GÉNOME_SYNC: {metrics.genomic_density}</Badge>
           </div>

           <div className="p-12 bg-black/40 rounded-[4rem] border-4 border-blue-500/20 shadow-inner space-y-10">
              <div className="flex items-center gap-6">
                 <FlaskConical className="h-12 w-12 text-blue-400" />
                 <h4 className="text-3xl font-black uppercase text-white tracking-tighter">Organismes Synthétiques</h4>
              </div>
              <div className="grid grid-cols-1 gap-6">
                 <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/20">
                    <p className="text-[10px] font-black text-blue-400 uppercase mb-2">Capture CO2 → Calcite</p>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-full animate-pulse" />
                    </div>
                 </div>
                 <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/20">
                    <p className="text-[10px] font-black text-emerald-400 uppercase mb-2">Algues Photobiohydrogène</p>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[84%]" />
                    </div>
                 </div>
              </div>
              <p className="text-sm text-slate-500 uppercase font-black text-center tracking-widest">Active Organisms: {metrics.synthetic_organisms}</p>
           </div>
        </div>

        <div className="p-12 bg-white/5 border-2 border-emerald-500/20 rounded-[5rem] text-center relative overflow-hidden group/final shadow-5xl">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -translate-x-full group-hover/final:translate-x-full transition-transform duration-2000" />
           <p className="text-4xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-balance">
             "La vie est le software ultime. Dr. Hakim Chibubi réécrit le génome de la Terre pour engendrer l'abondance sans déchet."
           </p>
        </div>
      </CardContent>
    </Card>
  );
};
