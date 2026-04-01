
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Share2, Network, ShieldCheck, Activity, 
  RefreshCw, Globe, Orbit, Atom, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const QuantumTunnellingUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isTunnelling, setIsTunnelling] = useState(false);
  const metrics = SCUGPHubUltimate.getTunnellingMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTunnel = () => {
    setIsTunnelling(true);
    setTimeout(() => setIsTunnelling(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Bande Passante", val: metrics.bandwidth, icon: Zap, color: "text-blue-400" },
          { label: "Pureté Intrication", val: metrics.entanglement_purity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Latence Réelle", val: metrics.latency, icon: Activity, color: "text-cyan-400" },
          { label: "Status Tunnel", val: metrics.status, icon: Network, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.4)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Atom className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-spin-slow" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">TUNNELLISATION QUANTIQUE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Transfert de Données Non-Local & Sync Intrication</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex items-center justify-center overflow-hidden group shadow-inner">
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:40px_40px] transition-transform" style={{ transitionDuration: '20000ms' }} />
             
             {isTunnelling ? (
               <div className="relative z-10 flex flex-col items-center gap-8 animate-pulse">
                  <Loader2 className="h-20 w-20 text-blue-400 animate-spin" />
                  <p className="text-4xl font-mono text-blue-400 font-black uppercase tracking-[0.5em]">Tunnellisation en cours...</p>
               </div>
             ) : (
               <div className="relative z-10 flex items-center justify-center gap-32">
                  <div className="flex flex-col items-center gap-4">
                     <div className="h-24 w-24 rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500/10">
                        <Globe size={40} className="text-blue-400" />
                     </div>
                     <p className="text-[10px] font-black text-slate-500 uppercase">Node Earth</p>
                  </div>
                  <div className="relative w-64 h-px bg-blue-500/30">
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 -translate-y-1/2 animate-pulse" />
                     <Share2 size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white animate-bounce" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <div className="h-24 w-24 rounded-full border-4 border-purple-500 flex items-center justify-center bg-purple-500/10">
                        <Orbit size={40} className="text-purple-400" />
                     </div>
                     <p className="text-[10px] font-black text-slate-500 uppercase">Node Mars</p>
                  </div>
               </div>
             )}
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/50 flex justify-center">
           <Button 
            onClick={handleTunnel}
            disabled={isTunnelling}
            className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-[0_0_150px_rgba(37,99,235,0.6)] border-none"
           >
             {isTunnelling ? "TUNNELLISATION..." : "ACTIVER LE TUNNEL Ω"}
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
