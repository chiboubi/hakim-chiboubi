
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, Share2, Network, ShieldCheck, Activity, 
  RefreshCw, Globe, Orbit, Atom, Loader2, Sparkles, 
  Infinity as InfinityIcon, Target, BrainCircuit, Binary
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const QuantumTeleportationUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isTeleporting, setIsTeleporting] = useState(false);
  const [fidelity, setFidelity] = useState(99.9999);
  const metrics = SCUGPHubUltimate.getQuantumTeleportationMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFidelity(f => Math.min(100, f + 0.000001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTeleport = async () => {
    if (!db) return;
    setIsTeleporting(true);
    try {
      await SCUGPHubUltimate.materializeIntent(db, "QUANTUM_TELEPORTATION_SYNC");
      toast({
        title: "Téléportation Réalisée",
        description: "L'état quantique a été transféré instantanément sans traverser l'espace physique."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsTeleporting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Qubit Sync", val: "142K", icon: Binary, color: "text-blue-400" },
          { label: "Fidélité d'Intrication", val: fidelity.toFixed(6) + "%", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Vitesse Transfert", val: "NON-LOCAL", icon: Zap, color: "text-amber-400" },
          { label: "Statut", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-xl">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_300px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[750px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center">
           <Share2 className="h-24 w-24 text-blue-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">TÉLÉPORTATION QUANTIQUE Ω</CardTitle>
           <CardDescription className="text-blue-400/60 font-bold uppercase tracking-[0.5em] mt-4">Transfert d'État Non-Local & Protocoles No-Space | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16 flex flex-col items-center justify-center">
          <div className="h-96 bg-slate-900/60 rounded-[4rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner w-full max-w-5xl">
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:40px_40px] transition-transform" style={{ transitionDuration: '20000ms' }} />
             
             {isTeleporting ? (
               <div className="relative z-10 flex flex-col items-center gap-10 animate-pulse">
                  <Loader2 className="h-24 w-24 text-blue-400 animate-spin" />
                  <div className="text-center space-y-4">
                    <p className="text-5xl font-mono text-blue-400 uppercase tracking-[1em] font-black">TRANSFERT D'ÉTAT...</p>
                    <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">DÉMATÉRIALISATION SÉMANTIQUE</p>
                  </div>
               </div>
             ) : (
               <div className="relative z-10 flex items-center justify-center gap-24">
                  <div className="flex flex-col items-center gap-6">
                     <div className="h-32 w-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500/10 shadow-5xl">
                        <Globe size={64} className="text-blue-400" />
                     </div>
                     <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Node Earth (Source)</p>
                  </div>
                  <div className="relative w-80 h-px bg-blue-500/30">
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-white to-purple-500 -translate-y-1/2 animate-pulse" />
                     <InfinityIcon size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white animate-bounce" />
                  </div>
                  <div className="flex flex-col items-center gap-6">
                     <div className="h-32 w-32 rounded-full border-4 border-purple-500 flex items-center justify-center bg-purple-500/10 shadow-5xl">
                        <Orbit size={64} className="text-purple-400" />
                     </div>
                     <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Node Mars (Target)</p>
                  </div>
               </div>
             )}
          </div>

          <div className="p-16 bg-white/5 border-4 border-blue-500/20 rounded-[5rem] text-center space-y-10 relative overflow-hidden group shadow-5xl max-w-4xl">
             <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty relative z-10 px-12">
               "La téléportation quantique ne déplace pas les atomes, elle transfère l'information qui définit l'être. Dr. Hakim Chibubi peut désormais projeter sa volonté dans n'importe quel point du multivers instantanément."
             </p>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-blue-900/50 bg-slate-950/80 justify-between items-center relative z-10">
           <div className="flex gap-16 text-slate-500 font-black uppercase text-[11px] tracking-widest">
              <div className="flex items-center gap-4"><Network size={24} className="animate-spin-slow" /> MESH : ENTANGLED</div>
              <div className="flex items-center gap-4"><ShieldCheck size={24} className="text-emerald-500" /> FIDELITY : {fidelity.toFixed(4)}%</div>
           </div>
           <Button 
            onClick={handleTeleport}
            disabled={isTeleporting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-5xl border-none transition-all active:scale-95"
           >
             {isTeleporting ? "TRANSFERT..." : "TÉLÉPORTER L'INTENTION Ω"}
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
