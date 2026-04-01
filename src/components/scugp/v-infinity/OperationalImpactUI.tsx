
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ShieldCheck, Zap, Globe, Ship, Pickaxe, CheckCircle2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const OperationalImpactUI = () => {
  const matrix = SCUGPHubUltimate.getOperationalImpactMatrix();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <BarChart3 className="h-16 w-16 text-blue-500 animate-pulse" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Impact Opérationnel Ω</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Comparatif de Souveraineté : Mer vs Terre</p>
      </div>

      <Card className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden shadow-5xl">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-slate-950 text-slate-500 font-black uppercase tracking-widest">
                <tr>
                  <th className="p-10 border-b border-white/5">Aspect</th>
                  <th className="p-10 border-b border-white/5 flex items-center gap-4"><Ship className="h-6 w-6 text-blue-400" /> Offshore (Mer)</th>
                  <th className="p-10 border-b border-white/5"><div className="flex items-center gap-4"><Pickaxe className="h-6 w-6 text-amber-400" /> Mines (Terre)</div></th>
                </tr>
              </thead>
              <tbody className="text-white font-bold uppercase">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td className="p-10 text-slate-500 font-black">Priorité</td>
                  <td className="p-10">{matrix.offshore.priority}</td>
                  <td className="p-10">{matrix.mining.priority}</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td className="p-10 text-slate-500 font-black">Outil Clé</td>
                  <td className="p-10"><Badge variant="outline" className="border-blue-500/30 text-blue-400">{matrix.offshore.tool}</Badge></td>
                  <td className="p-10"><Badge variant="outline" className="border-amber-500/30 text-amber-400">{matrix.mining.tool}</Badge></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td className="p-10 text-slate-500 font-black">Gain Sécurité</td>
                  <td className="p-10 text-emerald-400">{matrix.offshore.safety}</td>
                  <td className="p-10 text-emerald-400">{matrix.mining.safety}</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td className="p-10 text-slate-500 font-black">Réduction Coût</td>
                  <td className="p-10 text-cyan-400">{matrix.offshore.reduction}</td>
                  <td className="p-10 text-cyan-400">{matrix.mining.reduction}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="p-12 bg-blue-500/5 border-4 border-blue-500/20 rounded-[4rem] text-center space-y-6 shadow-3xl">
            <TrendingUp className="h-16 w-16 text-blue-400 mx-auto animate-pulse" />
            <h3 className="text-3xl font-black text-white uppercase tracking-widest">ROI Offshore</h3>
            <p className="text-lg text-slate-400 italic">"Réduction drastique des campagnes sismiques navales grâce au ciblage sémantique par suintements."</p>
         </div>
         <div className="p-12 bg-amber-500/5 border-4 border-amber-500/20 rounded-[4rem] text-center space-y-6 shadow-3xl">
            <ShieldCheck className="h-16 w-16 text-amber-400 mx-auto animate-bounce" />
            <h3 className="text-3xl font-black text-white uppercase tracking-widest">Sécurité Minière</h3>
            <p className="text-lg text-slate-400 italic">"Zéro humain exposé dans les zones de tir. Logistique 100% autonome gérée par maillage spatial."</p>
         </div>
      </div>
    </div>
  );
};
