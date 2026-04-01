
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, Network, Zap, ShieldCheck, Activity, RefreshCw, 
  Layers, Move3d, Atom, Loader2, Sparkles, Binary, Crosshair
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const DrillSwarmUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSwarming, setIsSwarming] = useState(false);
  const metrics = SCUGPHubUltimate.getDrillSwarmMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwarmActivation = () => {
    setIsSwarming(true);
    setTimeout(() => {
      setIsSwarming(false);
      toast({
        title: "Essaim Déployé",
        description: "142 unités de forage autonomes sont en phase de synchronisation neurale."
      });
    }, 3000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Taille Essaim", val: metrics.swarm_size, icon: Network, color: "text-blue-400" },
          { label: "Coordination", val: metrics.coordination_index, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Auto-Steering", val: metrics.auto_steering, icon: Crosshair, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: Zap, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all backdrop-blur-3xl">
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

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[700px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
           <Bot className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">Autonomous Drill Swarm Ω</CardTitle>
           <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Pilotage d'Essaim de Robots-Foreurs en Maillage Neural 100.0</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-[400px] bg-slate-900/60 rounded-[4rem] border-2 border-purple-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              {isSwarming ? (
                <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                   <Loader2 className="h-24 w-24 text-purple-400 animate-spin" />
                   <div className="text-center space-y-4">
                     <p className="text-5xl font-mono text-purple-400 font-black uppercase tracking-[1em]">SWARM_NEGOTIATING...</p>
                     <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">COHESION : {metrics.coordination_index}</p>
                   </div>
                </div>
              ) : (
                <div className="relative z-10 grid grid-cols-4 gap-12">
                   {[...Array(12)].map((_, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 animate-in zoom-in" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className="h-12 w-12 rounded-2xl bg-purple-600/20 border border-purple-500 flex items-center justify-center">
                           <Atom className="h-6 w-6 text-purple-400 animate-spin-slow" />
                        </div>
                        <Badge variant="outline" className="text-[7px] border-slate-700">NODE_{i + 100}</Badge>
                     </div>
                   ))}
                </div>
              )}
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-purple-900/50 bg-slate-950/50 flex justify-center">
           <Button onClick={handleSwarmActivation} className="bg-purple-600 hover:bg-purple-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             ACTIVER L'ESSAIM Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
