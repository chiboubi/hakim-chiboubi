
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShieldAlert, Lock, Zap, MapPin, Target, Activity, 
  RefreshCw, Loader2, Radio, Smartphone, Power,
  ShieldCheck, AlertTriangle, Binary, Layers, Ghost
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const SmartGeoFencingUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isArmed, setIsArmed] = useState(true);
  const [lastViolation, setLastViolation] = useState<string | null>(null);
  const metrics = SCUGPHubUltimate.getGeoFencingMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerTestAlert = () => {
    setLastViolation("NODE_ENG_42_BREACH");
    toast({
      variant: "destructive",
      title: "ALERTE GEOFENCING",
      description: "Intrusion détectée en Zone de Tir. Moteur coupé automatiquement."
    });
    setTimeout(() => setLastViolation(null), 5000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Barrières Actives", val: metrics.active_zones, icon: MapPin, color: "text-red-400" },
          { label: "Coupure Moteur", val: metrics.engine_kill_switches, icon: Power, color: "text-amber-400" },
          { label: "Sync Haptique", val: metrics.haptic_alarm_sync, icon: Smartphone, color: "text-blue-400" },
          { label: "Fidélité Barrière", val: metrics.barrier_fidelity, icon: Target, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-red-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_200px_rgba(239,68,68,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-red-900/50 bg-red-600/10 text-center">
           <ShieldAlert className="h-24 w-24 text-red-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic leading-none">Smart Geo-Fencing 2026</CardTitle>
           <CardDescription className="text-red-400/60 font-bold uppercase tracking-[0.5em] mt-4">Barrières Virtuelles GPS & Protection Biométrique Massive</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-red-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
              
              {lastViolation ? (
                <div className="relative z-10 flex flex-col items-center gap-10 animate-bounce">
                   <AlertTriangle className="h-32 w-32 text-red-500" />
                   <div className="text-center space-y-4">
                     <p className="text-5xl font-mono text-red-500 font-black uppercase tracking-[1em]">DANGER_ZONE_BREACH</p>
                     <p className="text-xl font-bold text-white uppercase tracking-[0.5em]">AUTO_ENGINE_CUT : EXECUTED</p>
                   </div>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <Lock size={160} className="text-emerald-500/20 animate-pulse" />
                   <div className="space-y-4">
                      <p className="text-4xl font-mono text-emerald-400 font-black uppercase tracking-[0.5em]">PERIMETER_ARMED</p>
                      <Badge className="bg-emerald-600 text-black font-black uppercase px-8 py-2">ALL_EMPLOYEES_SENSING</Badge>
                   </div>
                </div>
              )}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
              <div className="p-10 bg-red-500/5 border-2 border-red-500/20 rounded-[3rem] space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-red-400 uppercase tracking-widest flex items-center justify-center gap-4">
                   <Power className="h-8 w-8" /> Coupure Moteur Auto
                 </h4>
                 <p className="text-sm text-slate-400 italic">"Arrêt instantané de l'engin si les coordonnées GPS pénètrent dans une zone d'émanation de gaz ou zone de dynamitage."</p>
              </div>
              <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-blue-400 uppercase tracking-widest flex items-center justify-center gap-4">
                   <Radio className="h-8 w-8" /> Alarme Haptique
                 </h4>
                 <p className="text-sm text-slate-400 italic">"Vibration intense sur le gilet de sécurité connecté. Transmission via maillage LEO pour une latence de 0.02s."</p>
              </div>
           </div>
        </CardContent>
        
        <CardFooter className="p-16 border-t border-red-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <ShieldCheck className="h-12 w-12 text-emerald-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">SÉCURITÉ : ABSOLUE</span>
           </div>
           <Button onClick={triggerTestAlert} className="bg-red-600 hover:bg-red-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             TESTER ALERTE INTRUSION Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
