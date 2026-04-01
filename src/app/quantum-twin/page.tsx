
"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { QuantumWellVisualizer } from "@/components/scugp/v-infinity/QuantumWellVisualizer";
import { 
  Atom, Zap, ShieldCheck, Globe, Share2, 
  History, Fingerprint, Scan, Activity, Sparkles,
  Info, CheckCircle2, Award, BrainCircuit, Maximize2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export default function QuantumTwinPage() {
  const [mounted, setMounted] = useState(false);
  const data = SCUGPHubUltimate.getQuantumWellData();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-purple-500/30 overflow-hidden">
      <MainNavigation />
      
      <main className="h-[calc(100vh-6rem)] relative">
        <QuantumWellVisualizer />
        
        {/* Absolute HUD Overlays */}
        <div className="absolute top-12 right-12 z-30 w-96 space-y-6">
          <Card className="bg-slate-900/80 border-2 border-purple-500/30 backdrop-blur-3xl rounded-[3rem] shadow-5xl overflow-hidden group">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <h4 className="text-xs font-black uppercase text-purple-400 tracking-widest">Telemetry Stream</h4>
                <div className="flex gap-1">
                  <div className="h-1 w-1 bg-purple-500 rounded-full animate-ping" />
                  <div className="h-1 w-1 bg-purple-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-4">
                {data.map((well) => (
                  <div key={well.id} className="flex justify-between items-center group/item hover:translate-x-2 transition-transform cursor-default">
                    <div>
                      <p className="text-[10px] font-black text-white uppercase">{well.id}</p>
                      <p className="text-[8px] text-slate-500 font-mono">{well.state}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-emerald-400">{well.yield}</p>
                      <p className="text-[8px] text-slate-600 font-mono">{well.pressure}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full h-10 border border-white/5 text-[9px] font-black uppercase text-slate-500 hover:text-purple-400">
                Synchronize Neural Fabric
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-2 border-emerald-500/20 backdrop-blur-3xl rounded-[3rem] shadow-5xl overflow-hidden">
            <CardContent className="p-8 space-y-4">
               <div className="flex items-center gap-4">
                  <ShieldCheck className="h-6 w-6 text-emerald-500" />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">Quantum Firewall: ARMED</p>
               </div>
               <p className="text-[9px] text-slate-500 italic leading-relaxed">
                 "Direct Source Link established. Every qubit fluctuation is signed via Pillar 37 Consensus."
               </p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-12 left-12 z-30">
           <div className="flex flex-col gap-4">
              <Badge variant="outline" className="w-fit bg-black/40 border-purple-500/30 text-purple-400 px-6 py-2 uppercase font-black tracking-widest text-[9px]">
                PROTOCOL: ENTANGLED_D100
              </Badge>
              <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.5em]">
                "L'Intention est la vitesse de la pensée quantique."
              </p>
           </div>
        </div>
      </main>
    </div>
  );
}
