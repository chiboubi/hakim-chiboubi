
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Telescope, Globe, Star, Search, ShieldCheck, Activity, Target } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const AstroCatalogueUI = () => {
  const [mounted, setMounted] = useState(false);
  const targets = SCUGPHubUltimate.getAstroCatalogue();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-slate-900 border-2 border-indigo-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden group">
      <CardHeader className="p-10 border-b border-white/5 bg-indigo-600/5">
         <Telescope className="h-16 w-16 text-indigo-400 mx-auto mb-6 animate-pulse" />
         <CardTitle className="text-3xl font-black uppercase text-indigo-400 text-center">SCUGP-ASTRO : Exoplanètes</CardTitle>
      </CardHeader>
      <CardContent className="p-10 space-y-10">
        <div className="space-y-6">
           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Cibles Prioritaires Ω</p>
           {targets.map((t, i) => (
             <div key={i} className="p-6 bg-black/40 rounded-3xl border border-white/5 flex justify-between items-center group hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-6">
                   <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Star className="h-6 w-6 text-indigo-400 animate-spin-slow" />
                   </div>
                   <div>
                      <p className="text-lg font-black text-white uppercase tracking-tighter">{t.name}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{t.dist} | {t.mission}</p>
                   </div>
                </div>
                <Badge variant="outline" className="border-indigo-500/30 text-indigo-400 font-black">{t.status}</Badge>
             </div>
           ))}
        </div>
        <div className="p-8 bg-indigo-500/5 border-2 border-dashed border-indigo-500/20 rounded-[2.5rem] text-center">
           <p className="text-sm text-slate-400 leading-relaxed italic">
              "5,500+ exoplanètes indexées. 60 cibles potentiellement habitables sous surveillance spectrale constante."
           </p>
        </div>
      </CardContent>
    </Card>
  );
};
