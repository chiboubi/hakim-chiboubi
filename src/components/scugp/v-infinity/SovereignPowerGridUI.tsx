
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Globe, Orbit, ShieldCheck, Activity, Radio, Database, History, Share2, Star, Target, Server, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const SovereignPowerGridUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const gridData = SCUGPHubUltimate.getSovereignGridData();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGlobalSync = async () => {
    if (!db) return;
    setIsSyncing(true);
    try {
      await SCUGPHubUltimate.executeSovereignCommand(db, 37, "GLOBAL_GRID_REBALANCING_HC");
      toast({
        title: "Grille Souveraine Rééquilibrée",
        description: "L'énergie HC a été redistribuée sur l'axe Terre-Mars avec une efficience de 100%."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSyncing(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden rounded-[4rem]">
            <CardHeader className="bg-slate-950 border-b border-slate-800 p-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-amber-500/10 rounded-3xl border border-amber-500/20">
                    <Zap className="h-10 w-10 text-amber-400 animate-pulse" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] italic">Grille de Puissance HC Ω</CardTitle>
                    <CardDescription className="text-slate-500 font-bold uppercase tracking-widest mt-2">Distribution Universelle Hakim Chibubi (HC) | Maillage Multi-Planétaire</CardDescription>
                  </div>
                </div>
                <Badge className="bg-amber-600 text-black border-none px-8 py-2 text-[10px] font-black uppercase shadow-3xl">GRID_STATUS: SUPREME</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[12px]">
                  <thead className="bg-black/40 text-slate-500 font-black uppercase">
                    <tr>
                      <th className="p-10 border-b border-slate-800">Node ID</th>
                      <th className="p-10 border-b border-slate-800">Active Load</th>
                      <th className="p-10 border-b border-slate-800">Node Health</th>
                      <th className="p-10 border-b border-slate-800">Source Type</th>
                      <th className="p-10 border-b border-slate-800 text-right">Integrity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gridData.map((node, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-white/5 transition-all group">
                        <td className="p-10 font-black text-white uppercase tracking-tighter flex items-center gap-4">
                          {node.node === 'TERRA_PRIME' ? <Globe className="h-5 w-5 text-blue-400" /> : <Orbit className="h-5 w-5 text-purple-400" />}
                          {node.node}
                        </td>
                        <td className="p-10">
                          <div className="flex items-center gap-4">
                            <div className="h-1.5 w-32 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" style={{ width: node.load }} />
                            </div>
                            <span className="font-mono font-black text-white">{node.load}</span>
                          </div>
                        </td>
                        <td className="p-10">
                          <span className="inline-flex items-center gap-2 text-emerald-500 font-black uppercase">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            {node.health}
                          </span>
                        </td>
                        <td className="p-10 text-slate-500 font-bold uppercase">{node.source}</td>
                        <td className="p-10 text-right">
                          <ShieldCheck className="h-6 w-6 text-emerald-500 inline-block" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="p-10 bg-slate-950 border-t border-slate-800 justify-between items-center">
               <div className="flex gap-16">
                  <div className="flex items-center gap-4">
                    <Server className="h-8 w-8 text-blue-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Nodes Active: 14 Global</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Share2 className="h-8 w-8 text-purple-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Inter-Node Sync: 0.00ns</span>
                  </div>
               </div>
               <Button 
                onClick={handleGlobalSync}
                disabled={isSyncing}
                className="bg-amber-500 hover:bg-amber-600 text-black font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-3xl"
               >
                 {isSyncing ? <Loader2 className="animate-spin mr-4" /> : <Zap className="mr-4" />}
                 SYNCHRONISER LA GRILLE HC Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-2 border-amber-500/20 rounded-[3rem] overflow-hidden shadow-5xl">
            <CardHeader className="p-10 border-b border-white/5 bg-amber-500/10 text-center">
              <Target className="h-12 w-12 text-amber-500 mx-auto mb-6 animate-bounce" />
              <CardTitle className="text-xl font-black uppercase text-white tracking-widest leading-none">Allocation de Précision HC</CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
               <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 text-center space-y-4">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Capacité de Réserve</p>
                  <p className="text-5xl font-black text-amber-400 font-mono">∞^∞ MW</p>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-500 text-[8px] uppercase">HAKIM_RESERVOIR_SYNC</Badge>
               </div>
               <p className="text-sm text-slate-400 leading-relaxed italic text-center px-4">
                 "La grille souveraine HC détecte automatiquement les besoins des mines spatiales et redirige l'énergie de rupture ER pour compenser toute dérive opérationnelle."
               </p>
               <div className="space-y-4">
                  {[
                    { label: "Priorité Terre", val: "FULL", color: "bg-blue-500" },
                    { label: "Priorité Mars", val: "HIGH", color: "bg-red-500" },
                    { label: "Priorité Deep-Space", val: "AUTO", color: "bg-purple-500" }
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-slate-800 group hover:border-amber-500/30 transition-all">
                       <span className="text-[10px] font-black text-slate-500 uppercase">{p.label}</span>
                       <Badge variant="outline" className={cn("text-[8px] border-none px-3 font-mono", p.color, "text-white")}>{p.val}</Badge>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>

          <div className="p-12 bg-black border-4 border-amber-500/30 rounded-[4rem] shadow-5xl text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <History size={80} className="text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-1000" />
             <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">Ledger de Puissance</h3>
             <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Chaque joule est signé cryptographiquement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
