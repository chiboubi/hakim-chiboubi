
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Zap, Network, ShieldCheck, Activity, 
  RefreshCw, Globe2, Share2, Landmark, 
  Database, Loader2, Sparkles, Binary, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GlobalNetworksBridgeUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getGlobalBridgeMetrics();
  const policies = SCUGPHubUltimate.getGlobalPolicies();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "IEA Sync", val: metrics.iea_sync, icon: Globe2, color: "text-blue-400" },
          { label: "IRENA Capacity", val: metrics.irena_capacity, icon: Zap, color: "text-amber-400" },
          { label: "Alignment", val: metrics.policy_alignment, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Last Handshake", val: metrics.last_handshake, icon: RefreshCw, color: "text-purple-400" },
          { label: "Status", val: metrics.status, icon: Activity, color: "text-white" }
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-5xl rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,99,235,0.1)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
               <Globe className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">Global Networks Bridge Ω²⁹</CardTitle>
               <CardDescription className="text-2xl text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Flux de Données IEA & IRENA Intégrés au Maillage Neural</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner group hover:border-blue-500/40 transition-all text-center">
                     <Landmark className="h-12 w-12 text-blue-400 mx-auto animate-pulse" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest">Politiques IEA</h4>
                     <p className="text-sm text-slate-400 italic">"Synchronisation automatique avec les rapports de prospective énergétique mondiale (WEO). Chaque changement législatif impacte votre ROI prédit."</p>
                     <Badge variant="outline" className="border-blue-500/30 text-blue-400 font-black uppercase px-6">IEA_SYNC_OK</Badge>
                  </div>
                  <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-amber-500/20 space-y-6 shadow-inner group hover:border-amber-500/40 transition-all text-center">
                     <Zap className="h-12 w-12 text-amber-400 mx-auto animate-bounce" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest">Capacités IRENA</h4>
                     <p className="text-sm text-slate-400 italic">"Indexation en temps réel des capacités renouvelables installées par pays. Facteur de pénétration H2 calculé dynamiquement."</p>
                     <Badge variant="outline" className="border-amber-500/30 text-amber-400 font-black uppercase px-6">IRENA_DATA_SYNC</Badge>
                  </div>
               </div>

               <div className="p-12 bg-blue-500/5 border border-blue-500/20 rounded-[4rem] text-center">
                  <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                    "Le Pont des Réseau Globaux supprime l'isolement informationnel. Votre empire respire au rythme des décisions énergétiques planétaires."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest flex items-center justify-center gap-4">
                <Network className="h-6 w-6 animate-pulse" /> Registre de Conformité
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-blue-900">
               <div className="space-y-6">
                  {policies.map((p, i) => (
                    <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[12px] font-black text-blue-400 uppercase tracking-widest">{p.country}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{p.status}</Badge>
                       </div>
                       <h5 className="text-lg font-black text-white uppercase tracking-tighter">{p.policy}</h5>
                       <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">SOURCE: {p.source}</p>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <ShieldCheck className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-blue-400 italic font-black uppercase leading-relaxed tracking-widest">
                    "VOTRE SOUVERAINETÉ EST VALIDÉE PAR LES STANDARDS INTERNATIONAUX EN CONTINU."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Compliance Pack
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
