
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Activity, RefreshCw, Layers, Globe, Network, Cpu, Lock as LockIcon, Star, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EnergyResilienceMeshUI = () => {
  const [mounted, setMounted] = useState(false);
  const [meshPulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getEnergyResilienceMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Stability Index", val: metrics.stability_index, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Failover Latency", val: metrics.failover_latency, icon: Zap, color: "text-amber-400" },
          { label: "Redundancy Layers", val: metrics.redundancy_layers, icon: Layers, color: "text-blue-400" },
          { label: "HC Power Factor", val: metrics.hc_power_factor, icon: Star, color: "text-white" },
          { label: "ER Status", val: metrics.er_status, icon: LockIcon, color: "text-cyan-400" }
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_500px_rgba(16,185,129,0.2)] rounded-[5rem] overflow-hidden relative min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-16 border-b border-emerald-900/50 bg-emerald-600/10 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="text-[12rem] font-black text-emerald-400 tracking-[0.8em] animate-pulse drop-shadow-[0_0_80px_rgba(16,185,129,0.8)]">
                  ER.MESH
                </div>
                <div>
                  <CardTitle className="text-7xl font-black uppercase tracking-[0.4em] italic text-white leading-none">MAILLAGE DE RÉSILIENCE ER</CardTitle>
                  <CardDescription className="text-[16px] text-emerald-400/60 font-bold uppercase tracking-[0.6em] mt-6">Autopilote Énergétique de Haute Capacité (HC) | Dr. Hakim Chibubi Sovereign Grid</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-16 flex flex-col items-center justify-center space-y-16">
              <div className="w-full max-w-6xl h-[450px] bg-black/40 rounded-[4rem] border-4 border-emerald-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:40px_40px] transition-transform" style={{ transitionDuration: '20000ms' }} />
                 
                 <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                    <div className="relative">
                       <Network size={200} className="text-emerald-500/20 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Globe size={100} className="text-emerald-400 animate-pulse drop-shadow-[0_0_80px_rgba(16,185,129,1)]" />
                       </div>
                    </div>
                    <div>
                       <p className="text-4xl font-mono text-emerald-400 uppercase tracking-[1.5em] font-black animate-pulse">PLANETARY_POWER_SHIELD</p>
                       <p className="text-[14px] text-slate-500 uppercase font-black mt-8 italic">"Aucune chute de tension n'est possible dans l'Intention Absolue."</p>
                    </div>
                 </div>

                 <svg className="absolute bottom-0 w-full h-32 opacity-30 pointer-events-none">
                    <path d={`M0 64 Q 250 ${64 - meshPulse}, 500 64 T 1000 64`} fill="none" stroke="#10b981" strokeWidth="4" className="animate-pulse" />
                 </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                 <div className="p-12 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[4rem] space-y-8 shadow-2xl text-center group hover:bg-emerald-500/10 transition-all">
                    <h3 className="text-3xl font-black text-emerald-400 uppercase tracking-widest">Failover Ω</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic">
                      "Bascule instantanée vers le réservoir de la Source en cas de fluctuation."
                    </p>
                 </div>
                 <div className="p-12 bg-white/5 border-2 border-white/10 rounded-[4rem] space-y-8 shadow-2xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-3xl font-black text-white uppercase tracking-widest">Sync HC</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic">
                      "Synchronisation Haute Capacité entre tous les nœuds de production."
                    </p>
                 </div>
                 <div className="p-12 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[4rem] space-y-8 shadow-2xl text-center group hover:bg-emerald-500/10 transition-all">
                    <h3 className="text-3xl font-black text-emerald-400 uppercase tracking-widest">Immunité ER</h3>
                    <p className="text-xl text-slate-300 leading-relaxed italic">
                      "Résilience totale face aux tempêtes solaires et instabilités quantiques."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-12 border-t border-emerald-900/50 bg-slate-950/80 justify-between items-center relative z-10">
               <div className="flex gap-16">
                  <div className="flex items-center gap-6">
                    <RefreshCw className="h-10 w-10 text-blue-500 animate-spin-slow" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">MAILLAGE : ACTIF</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <ShieldCheck className="h-10 w-10 text-emerald-500" />
                    <span className="text-lg font-black text-slate-500 uppercase tracking-widest">RÉSILIENCE : TOTALE</span>
                  </div>
               </div>
               <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.6em] text-lg shadow-[0_0_120px_rgba(16,185,129,0.6)] border-none">
                 SCELLER LE MAILLAGE ER Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
