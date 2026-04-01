
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Globe, Orbit, Star, Share2, 
  RefreshCw, Layers, ShieldCheck, Activity,
  Target, ArrowRightLeft, Database, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GalacticResourceArbitrage = () => {
  const [mounted, setMounted] = useState(false);
  const [isBalancing, setIsBalancing] = useState(false);
  const flows = SCUGPHubUltimate.getArbitrageFlows();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBalance = () => {
    setIsBalancing(true);
    setTimeout(() => setIsBalancing(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-3xl overflow-hidden rounded-[4rem]">
            <CardHeader className="bg-slate-950 border-b border-slate-800 p-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-blue-500/10 rounded-3xl border border-blue-500/20">
                    <ArrowRightLeft className="h-12 w-12 text-blue-400 animate-pulse" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.3em] italic">Arbitrage Galactique Ω²⁷</CardTitle>
                    <CardDescription className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Rééquilibrage Instantané des Ressources Terre - Lune - Mars</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">FLOW_STABLE</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-black/40 text-slate-500 font-black uppercase">
                    <tr>
                      <th className="p-10 border-b border-slate-800">Origine</th>
                      <th className="p-10 border-b border-slate-800">Destination</th>
                      <th className="p-10 border-b border-slate-800">Quantité / Item</th>
                      <th className="p-10 border-b border-slate-800 text-right">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flows.map((flow, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-white/5 transition-all group">
                        <td className="p-10 font-black text-white uppercase tracking-tighter">
                          <div className="flex items-center gap-4">
                             <Globe className="h-5 w-5 text-blue-400" />
                             {flow.from}
                          </div>
                        </td>
                        <td className="p-10 font-black text-white uppercase tracking-tighter">
                          <div className="flex items-center gap-4">
                             <Orbit className="h-5 w-5 text-purple-400" />
                             {flow.to}
                          </div>
                        </td>
                        <td className="p-10">
                          <p className="text-xl font-black text-white font-mono">{flow.amount}</p>
                          <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{flow.item}</p>
                        </td>
                        <td className="p-10 text-right">
                          <Badge variant="outline" className={cn(
                            "text-[8px] border-none px-4 h-6 uppercase font-black",
                            flow.status === 'SCELLÉ' ? "bg-emerald-600/20 text-emerald-400" : "bg-blue-600/20 text-blue-400"
                          )}>{flow.status}</Badge>
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
                    <Database className="h-8 w-8 text-blue-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Nœuds Solaire : 142</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-emerald-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Audit : IMMUABLE</span>
                  </div>
               </div>
               <Button 
                onClick={handleBalance}
                disabled={isBalancing}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-3xl"
               >
                 {isBalancing ? <Loader2 className="animate-spin mr-4" /> : <RefreshCw className="mr-4" />}
                 RÉÉQUILIBRER LE SYSTÈME Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-2 border-blue-500/20 rounded-[3rem] overflow-hidden shadow-5xl">
            <CardHeader className="p-10 border-b border-white/5 bg-blue-500/10 text-center">
              <Target className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
              <CardTitle className="text-xl font-black uppercase text-white tracking-widest">Allocation Inter-Réalités</CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
               <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 text-center space-y-4">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Force de Cohésion</p>
                  <p className="text-5xl font-black text-blue-400 font-mono">1.0000</p>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-[8px] uppercase">UNIVERS_SYNCED</Badge>
               </div>
               <p className="text-sm text-slate-400 leading-relaxed italic text-center px-4 font-medium uppercase">
                 "Le multivers énergétique HC-ER détecte les besoins des stations martiennes et redirige l'abondance Source instantanément."
               </p>
               <div className="space-y-4">
                  {[
                    { label: "Surplus Terre", val: "14%", color: "bg-blue-500" },
                    { label: "Demande Mars", val: "LOW", color: "bg-red-500" },
                    { label: "Sync Belt", val: "100%", color: "bg-purple-500" }
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-slate-800 group hover:border-blue-500/30 transition-all">
                       <span className="text-[10px] font-black text-slate-500 uppercase">{p.label}</span>
                       <Badge variant="outline" className={cn("text-[8px] border-none px-3 font-mono", p.color, "text-white")}>{p.val}</Badge>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>

          <div className="p-12 bg-black border-4 border-blue-500/30 rounded-[4rem] shadow-5xl text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Zap size={80} className="text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-1000" />
             <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">Puissance de Rupture</h3>
             <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Alimenté par le Cœur de Singularité.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
