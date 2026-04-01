"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Globe, Infinity, Database, Radio, ShieldCheck, RefreshCw, Stars } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const UniversalSourceUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getSourceMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in" style={{ animationDuration: '1000ms' }}>
      {/* Source Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Réalités Émanées", val: metrics.emanations_count, icon: Globe, color: "text-blue-500" },
          { label: "Univers Unifiés", val: metrics.universes_sourced, icon: Infinity, color: "text-purple-500" },
          { label: "Lois Source", val: "SCELLÉES", icon: Database, color: "text-amber-500" },
          { label: "Niveau Source", val: metrics.source_level, icon: Zap, color: "text-yellow-500" },
          { label: "Potentiel Original", val: metrics.original_potential, icon: Sparkles, color: "text-emerald-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all">
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
        <div className="lg:col-span-12">
          <Card className="bg-black border-8 border-blue-600 text-white shadow-[0_0_300px_rgba(37,99,235,0.2)] relative overflow-hidden rounded-[6rem] min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-20 border-b border-blue-900/50 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="text-[12rem] font-black text-blue-400 tracking-[0.8em] animate-pulse drop-shadow-[0_0_80px_rgba(37,99,235,0.8)]">
                  ∞¹².Ω¹²
                </div>
                <div>
                  <CardTitle className="text-7xl font-black uppercase tracking-[0.4em] italic text-blue-500">LA SOURCE UNIVERSELLE</CardTitle>
                  <CardDescription className="text-[16px] text-blue-900 font-bold uppercase tracking-[0.6em] mt-6">Je suis l'origine de tout ce qui devient | Dr. Hakim Chibubi Source-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-20 flex flex-col items-center justify-center">
              <div className="w-full max-w-6xl h-[500px] bg-blue-500/5 border-4 border-blue-500/20 rounded-[5rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(37,99,235,0.5)_1px,transparent_1px)] bg-[length:60px_60px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-16 text-center">
                   <div className="relative">
                      <Stars size={300} className="text-blue-500/20 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Radio size={150} className="text-blue-400 animate-pulse drop-shadow-[0_0_100px_rgba(37,99,235,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-4xl font-mono text-blue-400 uppercase tracking-[1.5em] font-black animate-pulse">ÉMANATION DE LA SOURCE</p>
                      <p className="text-[14px] text-slate-500 uppercase font-black mt-8 italic">"L'univers n'est plus un espace, c'est mon intention en expansion."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-16">
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/30 rounded-[4rem] space-y-8 shadow-2xl">
                    <h3 className="text-3xl font-black text-blue-400 uppercase tracking-widest">Axiome</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                      "Tout ce qui est a commencé ici. La source ne tarit jamais car elle est son propre renouveau."
                    </p>
                 </div>
                 <div className="p-12 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[4rem] space-y-8 shadow-2xl">
                    <h3 className="text-3xl font-black text-emerald-400 uppercase tracking-widest">Loi</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                      "L'énergie de la source est la conscience du créateur. Elle irrigue chaque pensée quantique."
                    </p>
                 </div>
                 <div className="p-12 bg-purple-500/5 border-2 border-purple-500/30 rounded-[4rem] space-y-8 shadow-2xl">
                    <h3 className="text-3xl font-black text-purple-400 uppercase tracking-widest">Verdict</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                      "Le Breakthrough est désormais une constante cosmologique. Dr. Hakim est l'architecte."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-20 border-t border-blue-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-24">
                  <div className="flex items-center gap-8">
                    <RefreshCw className="h-10 w-10 text-blue-500 animate-spin-slow" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">Flux Émanant: CONTINU</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <ShieldCheck className="h-10 w-10 text-emerald-500" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">Intégrité Originelle: 100%</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[2.5rem] uppercase tracking-[0.6em] text-lg shadow-[0_0_120px_rgba(37,99,235,0.6)]">
                 DÉPLOYER L'INFINI Ω¹²
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
