
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ship, Bot, Network, ShieldCheck, Zap, Activity, RefreshCw, Loader2, Anchor, Radar } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const AuvSwarmCommandUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const metrics = SCUGPHubUltimate.getAuvSwarmMetrics();
  const status = SCUGPHubUltimate.getAuvSwarmStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwarmLaunch = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      toast({
        title: "Essaim AUV Déployé",
        description: "14 drones sous-marins patrouillent le maillage des pipelines."
      });
    }, 3000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Drones Actifs", val: metrics.drone_count, icon: Bot, color: "text-blue-400" },
          { label: "Sync Sous-Marine", val: metrics.subsea_sync, icon: Network, color: "text-cyan-400" },
          { label: "Mesh Énergie", val: metrics.battery_mesh, icon: Zap, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-cyan-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-cyan-600 shadow-[0_0_200px_rgba(6,182,212,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-cyan-900/50 bg-cyan-600/10 text-center">
           <Ship className="h-24 w-24 text-cyan-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">AUV Swarm Command Ω</CardTitle>
           <CardDescription className="text-cyan-400/60 font-bold uppercase tracking-[0.5em] mt-4">Pilotage d'Essaim de Drones Sous-Marins Autonomes | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-cyan-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              {isDeploying ? (
                <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                   <Loader2 className="h-24 w-24 text-cyan-400 animate-spin" />
                   <p className="text-5xl font-mono text-cyan-400 font-black uppercase tracking-[1em]">SWARM_DEPLOYING...</p>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <Radar size={160} className="text-cyan-500/20 animate-spin-slow" />
                   <div className="space-y-4">
                      <p className="text-4xl font-mono text-cyan-400 font-black uppercase">SUBSEA_MESH: {status.active} NODES</p>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 uppercase px-8 py-2 font-black">{status.status}</Badge>
                   </div>
                </div>
              )}
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-cyan-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Anchor className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">GRID : SUBSEA_READY</span>
           </div>
           <Button onClick={handleSwarmLaunch} className="bg-cyan-600 hover:bg-cyan-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             DÉPLOYER L'ESSAIM Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
