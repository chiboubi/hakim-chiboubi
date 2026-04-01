
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, Zap, Activity, ShieldCheck, Radio, Search, Microscope, Binary, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const FiberOpticSensingUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const metrics = SCUGPHubUltimate.getFiberOpticMetrics();
  const data = SCUGPHubUltimate.getFiberSensingData();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAcousticSync = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Sync Acoustique Terminée",
        description: "Le profil sismique 4D a été mis à jour par détection DAS."
      });
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Fidélité DAS", val: metrics.acoustic_fidelity, icon: Waves, color: "text-blue-400" },
          { label: "Résolution DTS", val: metrics.temp_resolution, icon: Activity, color: "text-red-400" },
          { label: "Portée Fibre", val: metrics.fiber_reach, icon: Search, color: "text-emerald-400" },
          { label: "Statut", val: metrics.status, icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Radio className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Fiber Optic Sensing Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">DAS/DTS Intelligent Reservoir Monitoring | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {isScanning ? (
                <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                   <Loader2 className="h-24 w-24 text-blue-400 animate-spin" />
                   <p className="text-5xl font-mono text-blue-400 font-black uppercase tracking-[1em]">ACOUSTIC_SYNC...</p>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <Binary size={160} className="text-blue-500/20 animate-spin-slow" />
                   <div className="space-y-4">
                      <p className="text-4xl font-mono text-blue-400 font-black uppercase">SENSING_GRID: {data.nodes} NODES</p>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">TEMP: {data.temperature} | ACOUSTIC: {data.acoustic}</p>
                   </div>
                </div>
              )}
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center">
           <Button onClick={handleAcousticSync} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             CALIBRER LA FIBRE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
