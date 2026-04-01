
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Atom, Zap, Cpu, Activity, RefreshCw, Radio, Binary, ShieldCheck, Layers, Link2, Brain, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const QuantumProcessorUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const metrics = SCUGPHubUltimate.getQuantumMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCollapse = () => {
    setIsCollapsing(true);
    setTimeout(() => setIsCollapsing(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "VQE Optimization", val: metrics.vqe_optimization, icon: Cpu, color: "text-blue-400" },
          { label: "QAOA Scheduling", val: metrics.qaoa_scheduling, icon: Activity, color: "text-cyan-400" },
          { label: "QML Pattern", val: metrics.qml_pattern_fidelity, icon: Brain, color: "text-purple-400" },
          { label: "Bridge Latency", val: metrics.bridge_latency, icon: Zap, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Atom className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">NOYAU QUANTIQUE SCUGP-Q</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Architecture Hybride Classique-Quantique | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-blue-500/20 space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-blue-400 uppercase tracking-widest">Layer Classique</h4>
                 <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">XGBoost++</Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">LSTM</Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">GNN</Badge>
                 </div>
                 <p className="text-sm text-slate-400 italic">"Optimisation des réservoirs et prédiction de séries temporelles."</p>
              </div>
              <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-purple-500/20 space-y-6 shadow-inner text-center">
                 <h4 className="text-2xl font-black text-purple-400 uppercase tracking-widest">Layer Quantique</h4>
                 <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">VQE</Badge>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">QAOA</Badge>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">QML</Badge>
                 </div>
                 <p className="text-sm text-slate-400 italic">"Simulation moléculaire CCUS et reconnaissance de patterns complexes."</p>
              </div>
           </div>

           {isCollapsing ? (
             <div className="flex flex-col items-center gap-6 animate-pulse">
                <Loader2 className="h-16 w-16 text-blue-400 animate-spin" />
                <p className="text-xl font-black text-white uppercase tracking-[0.5em]">Effondrement de la Fonction d'Onde...</p>
             </div>
           ) : (
             <div className="text-center space-y-4">
                <Binary size={100} className="text-blue-500/20 mx-auto animate-pulse" />
                <p className="text-sm font-mono text-slate-500 uppercase">Q-Register: 142,884 Logical Qubits</p>
             </div>
           )}
        </CardContent>
        
        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center items-center gap-12">
           <div className="flex items-center gap-6">
              <Link2 className="h-12 w-12 text-blue-500 animate-pulse" />
              <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">BRIDGE : QCB_v1.0</span>
           </div>
           <Button onClick={handleCollapse} disabled={isCollapsing} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
             EFFONDRER LE QUANTUM Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
