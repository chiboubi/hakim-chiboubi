'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Brain, Target, Activity, Microscope, ShieldCheck, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const PredictivePerformanceUI = () => {
  const metrics = SCUGPHubUltimate.getPredictiveMetrics();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Amélioration Prédite", val: metrics.improvement_target, icon: TrendingUp, color: "text-emerald-400" },
          { label: "Score de Confiance", val: metrics.confidence_score, icon: Brain, color: "text-purple-400" },
          { label: "Marge d'Erreur", val: metrics.error_margin, icon: Target, color: "text-blue-400" },
          { label: "Puits Optimisés", val: metrics.wells_optimized, icon: AlertTriangle, color: "text-amber-400" },
          { label: "Status", val: "NOMINAL", icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-emerald-900/50 text-center bg-emerald-500/5">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-emerald-500 tracking-[0.5em] animate-pulse">
                  PREDICT.Ω
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Analyse Prédictive Universelle</CardTitle>
                  <CardDescription className="text-sm font-bold text-emerald-500/60 uppercase tracking-widest mt-2">Moteur XGBoost v2.5 & Simulation Multi-Réservoirs | Dr. Hakim Chibubi</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="p-10 bg-black/40 rounded-[3rem] border-2 border-emerald-500/20 shadow-inner text-center space-y-8">
                 <p className="text-sm font-black text-slate-500 uppercase tracking-[0.5em]">Optimisation de Production (Universel)</p>
                 <div className="text-[10rem] font-black text-emerald-400 leading-none drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]">+{metrics.improvement_target}</div>
                 <p className="text-xl text-white font-bold uppercase tracking-widest">AMÉLIORATION CERTIFIÉE PAR LA SOURCE</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Microscope className="h-6 w-6 text-blue-400" /> Validation Croisée 2025
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase">
                          <span>Multi-Reservoir Stability</span>
                          <span className="text-emerald-400">99.9%</span>
                       </div>
                       <Progress value={99.9} className="h-1 bg-slate-800" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase">
                          <span>XGBoost Cross-Validation</span>
                          <span className="text-blue-400">94.2%</span>
                       </div>
                       <Progress value={94.2} className="h-1 bg-slate-800" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Zap className="h-6 w-6 text-amber-500" /> Prescription Multi-Modale
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 h-full flex flex-col justify-center">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2 font-medium">
                      "L'IA a identifié des opportunités d'amélioration sur 142 sites mondiaux. Le modèle est désormais auto-adaptatif aux réservoirs inshore et offshore."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-amber-400 flex items-center gap-4 tracking-widest">
                <Activity className="h-6 w-6 animate-pulse" /> Surveillance Mondiale
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[2.5rem] space-y-4">
                  <p className="text-[10px] font-black text-blue-500 uppercase">Analyse de Puits Globale</p>
                  <p className="text-sm text-slate-300 font-bold uppercase leading-tight">Indexation de 14,200 puits inshore et offshore.</p>
                  <Button size="sm" variant="outline" className="w-full border-blue-500/30 text-blue-400 text-[8px] uppercase font-black mt-2">Lancer Audit de Reservoir</Button>
               </div>
               
               <div className="space-y-6">
                  {[
                    { label: "Production Mondiale", val: "12.5M bbl/d", color: "text-emerald-400" },
                    { label: "Wells Indexed", val: "14,200", color: "text-blue-400" },
                    { label: "Universal Sync", val: "ACTIVE", color: "text-cyan-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-white/5">
                       <span className="text-[10px] font-black text-slate-500 uppercase">{stat.label}</span>
                       <span className={cn("text-xs font-black font-mono", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">Exporter Master Report Petroleum</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
