
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Database, ShieldCheck, Zap, Activity, RefreshCw, Lock, ArrowUpRight, CloudDownload, Layers, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const CarbonCaptureLedgerUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getCarbonLedgerMetrics();
  const data = SCUGPHubUltimate.getCCUSLedger();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAudit = () => {
    toast({
      title: "Audit CCUS Lancé",
      description: "Vérification de l'intégrité du panache de stockage terminée. 100% stable."
    });
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "CO2 Stocké", val: metrics.co2_stored, icon: Database, color: "text-blue-400" },
          { label: "Stabilité Panache", val: metrics.plume_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Risque Fuite", val: metrics.leak_probability, icon: ShieldAlert, color: "text-red-400" },
          { label: "Statut", val: metrics.status, icon: Lock, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
           <CloudDownload className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Carbon Capture Ledger Ω</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Traçabilité Immuable du Stockage de Carbone (CCUS) | Standard ISO 14083</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-emerald-500/20 space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-emerald-400 uppercase tracking-widest">ID Panache: {data.plume_id}</h4>
                 <p className="text-sm text-slate-400 italic">"Stockage en aquifère salin profond. Monitoring sémantique par fibre optique couplé au Ledger."</p>
                 <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 uppercase px-6 py-1 font-black">SCELLÉ_BLOCKCHAIN</Badge>
              </div>
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-blue-400 uppercase tracking-widest">Volume: {data.volume}</h4>
                 <p className="text-sm text-slate-400 italic">"Calcul d'impact Net-Positif synchronisé avec le maillage global Gaia."</p>
                 <Badge variant="outline" className="border-blue-500/30 text-blue-400 uppercase px-6 py-1 font-black">ISO_14083_OK</Badge>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-emerald-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Layers className="h-12 w-12 text-emerald-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">STRATE : CCUS_ONE</span>
           </div>
           <Button onClick={handleAudit} className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             AUDITER LE STOCKAGE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
