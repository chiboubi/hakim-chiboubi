
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Network, ShieldCheck, Activity, RefreshCw, Database, Server, Radio, Power, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const SubseaPowerMeshUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getSubseaPowerMetrics();
  const grid = SCUGPHubUltimate.getSubseaGrid();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePowerSync = () => {
    toast({
      title: "Rééquilibrage de Grille",
      description: "La puissance subsea a été redirigée vers le nœud prioritaire."
    });
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Stabilité Grille", val: metrics.grid_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Pertes Trans.", val: metrics.transmission_loss, icon: Zap, color: "text-amber-400" },
          { label: "Load Factor", val: metrics.load_factor, icon: Gauge, color: "text-blue-400" },
          { label: "Statut", val: metrics.status, icon: Power, color: "text-white" }
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
           <Zap className="h-24 w-24 text-emerald-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Subsea Power Mesh Ω</CardTitle>
           <CardDescription className="text-emerald-400/60 font-bold uppercase tracking-[0.5em] mt-4">Grille Électrique Sous-Marine Intelligente | Dr. Hakim Chibubi Power-Sovereign</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-emerald-500/20 text-center space-y-8 shadow-inner w-full max-w-4xl">
              <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                "Alimentation continue des installations subsea via le protocole {grid.protocol}. Santé du maillage : {grid.health}."
              </p>
              <div className="flex justify-center gap-12">
                 <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Active Load</p>
                    <p className="text-4xl font-black text-emerald-400 font-mono">{grid.load}</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Protocol</p>
                    <p className="text-2xl font-black text-blue-400 font-mono">{grid.protocol}</p>
                 </div>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-emerald-900/50 bg-slate-950/50 flex justify-center">
           <Button onClick={handlePowerSync} className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             RÉÉQUILIBRER LA GRILLE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
