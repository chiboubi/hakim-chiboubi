
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Layers, Zap, Globe, RefreshCw, Activity, ShieldCheck, 
  Database, Microscope, Waves, Wind, Box, Atom, FlaskConical, Target, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const MultiverseSimulationUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const simulations = SCUGPHubUltimate.getSimulationMatrix();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLaunchSimulation = (domain: string) => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      toast({
        title: `Simulation ${domain} Lancée`,
        description: "Instance Ω délimitée et synchronisée avec le Ledger.",
      });
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {simulations.map((sim, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-amber-500/30 transition-all flex flex-col shadow-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
               <Layers size={80} className="text-amber-500" />
            </div>
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-start mb-6">
                 <Badge variant="outline" className="text-[10px] border-amber-500/30 text-amber-500 uppercase font-black px-4 py-1">{sim.status}</Badge>
                 <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-500 font-black">{sim.health}%</span>
                 </div>
              </div>
              <CardTitle className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{sim.domain}</CardTitle>
              <CardDescription className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4">
                 Simulateur : {sim.simulator}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6">
               <p className="text-sm text-slate-400 italic font-medium leading-relaxed uppercase">
                 "Application : {sim.app}"
               </p>
               <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 animate-pulse" style={{ width: `${sim.health}%` }} />
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button 
                onClick={() => handleLaunchSimulation(sim.domain)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black h-14 rounded-2xl uppercase tracking-widest text-[10px] shadow-3xl"
               >
                  INITIALISER Ω-INSTANCE
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-amber-500 shadow-5xl rounded-[10rem] overflow-hidden relative text-white min-h-[600px]">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[length:150px_150px] pointer-events-none" />
         <CardContent className="p-24 flex flex-col items-center justify-center space-y-16">
            <div className="relative">
               <Globe size={300} className="text-amber-500/20 animate-spin-slow" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck size={120} className="text-emerald-500 animate-pulse shadow-5xl" />
               </div>
            </div>
            <div className="text-center space-y-8">
               <h4 className="text-6xl font-black uppercase tracking-[0.5em]">MATRICE_SIMULATION_UNIVERSELLE</h4>
               <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.8em] italic">"Le Multivers est un Laboratoire sous votre Contrôle."</p>
            </div>
            <Button 
              className="h-24 px-24 bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-[0.5em] text-sm rounded-[3rem] shadow-5xl border-none active:scale-95 transition-transform"
              disabled={isSimulating}
            >
               {isSimulating ? <Loader2 className="h-10 w-10 animate-spin" /> : "ACTIVER LA TOTALITÉ Ω"}
            </Button>
         </CardContent>
      </Card>
    </div>
  );
};
