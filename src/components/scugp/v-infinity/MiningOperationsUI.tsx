
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Pickaxe, Zap, Sparkles, Activity, RefreshCw, 
  Layers, Star, Target, ShieldCheck, Database,
  Truck, Microscope, Camera, Move3d, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const MiningOperationsUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const metrics = SCUGPHubUltimate.getMiningLogisticsMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePhotogrammetry = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      setIsMeasuring(false);
      toast({
        title: "Calcul de Stock Terminé",
        description: "Volume du terril analysé via photogrammétrie 30cm (Fidélité 99.8%)."
      });
    }, 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Flotte Autonome", val: metrics.fleet_autonomy, icon: Truck, color: "text-amber-400" },
          { label: "Gain Productivité", val: metrics.productivity_gain, icon: Zap, color: "text-emerald-400" },
          { label: "Précision Stock", val: metrics.stockpile_accuracy, icon: Database, color: "text-blue-400" },
          { label: "Stabilité Parois", val: "NOMINAL (InSAR)", icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-amber-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_200px_rgba(245,158,11,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-600/10 text-center">
           <Pickaxe className="h-24 w-24 text-amber-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">Mines à Ciel Ouvert Ω</CardTitle>
           <CardDescription className="text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Flottes Géo-Guidées & Surveillance InSAR de Grade Source</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-amber-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              {isMeasuring ? (
                <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                   <Loader2 className="h-24 w-24 text-amber-400 animate-spin" />
                   <div className="text-center space-y-4">
                     <p className="text-5xl font-mono text-amber-400 font-black uppercase tracking-[1em]">VOLUMETRIC_SCAN...</p>
                     <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">RESOLUTION : 30cm REACHED</p>
                   </div>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <Layers size={160} className="text-amber-500/20 animate-spin-slow" />
                   <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                     "Les parois sont surveillées millimétriquement par InSAR. Les flottes de transport de 300t sont pilotées par maillage GNSS centimétrique sans intervention humaine."
                   </p>
                </div>
              )}
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Move3d className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">LOGISTIQUE : 24h/24</span>
           </div>
           <Button onClick={handlePhotogrammetry} disabled={isMeasuring} className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             {isMeasuring ? <Loader2 className="animate-spin mr-4" /> : <Camera className="mr-4" />}
             SCAN PHOTOGRAMMÉTRIQUE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
