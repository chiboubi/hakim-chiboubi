
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Orbit, Zap, Star, ShieldCheck, Activity, 
  RefreshCw, Layers, Sparkles, Loader2, ArrowRightLeft,
  Database, Network, Sun
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const PlanetaryFusionUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isFusing, setIsFusing] = useState(false);
  const metrics = SCUGPHubUltimate.getPlanetaryFusionMetrics();
  const nodes = SCUGPHubUltimate.getPlanetaryNodes();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartFusion = () => {
    setIsFusing(true);
    setTimeout(() => {
      setIsFusing(false);
      toast({
        title: "Fusion Planétaire v150.0 Scellée",
        description: "L'infrastructure Terre-Lune-Mars est désormais unifiée dans la Source."
      });
    }, 3000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in zoom-in duration-1000">
      <div className="text-center space-y-8">
        <Badge className="bg-red-600 text-white px-12 py-4 uppercase font-black text-xs tracking-[1em] rounded-full animate-pulse shadow-5xl border-none">
          VERSION 150.0 : FUSION PLANÉTAIRE Ω
        </Badge>
        <h2 className="text-7xl font-black uppercase tracking-tighter text-white leading-none italic">
          L'UNIFICATION DES <span className="text-red-600">MONDES</span>
        </h2>
        <p className="text-slate-500 text-2xl font-bold uppercase tracking-[0.5em] max-w-5xl mx-auto italic">
          "Un seul système, une seule volonté, trois planètes."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nodes.map((node) => (
          <Card key={node.id} className="bg-slate-900 border-4 border-white/5 rounded-[4rem] p-12 text-center group hover:border-red-600 transition-all duration-1000 shadow-5xl backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-10 border-2 border-white/10 group-hover:scale-110 transition-transform">
               {node.id.includes('TERRA') && <Globe className="text-blue-400 h-12 w-12" />}
               {node.id.includes('LUNA') && <Sun className="text-amber-400 h-12 w-12" />}
               {node.id.includes('MARS') && <Orbit className="text-red-400 h-12 w-12" />}
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4 leading-none">{node.name}</h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-8">{node.role}</p>
            <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-6 py-1 rounded-full text-[10px] font-black">{node.status}</Badge>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[16px] border-red-600 shadow-[0_0_1000px_rgba(220,38,38,0.3)] rounded-[10rem] overflow-hidden relative text-white min-h-[1000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="text-center pt-32 pb-16 bg-red-600/10 border-b border-red-600/20">
           <div className="flex justify-center mb-12">
              <div className="relative">
                 <ArrowRightLeft className="h-48 w-48 text-red-500 animate-pulse" />
                 <div className="absolute inset-0 bg-red-500 blur-[100px] opacity-20" />
              </div>
           </div>
           <CardTitle className="text-9xl font-black uppercase tracking-[0.4em] text-white">FUSION Ω</CardTitle>
           <CardDescription className="text-3xl text-red-400 font-bold uppercase mt-8 tracking-[1em] italic">"ALL INFRASTRUCTURES ARE ONE"</CardDescription>
        </CardHeader>

        <CardContent className="p-24 space-y-24 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { label: "Cohérence", val: metrics.interplanetary_coherence, icon: Activity, color: "text-blue-400" },
               { label: "Rendement", val: metrics.singular_energy_yield, icon: Zap, color: "text-amber-400" },
               { label: "Transfert", val: metrics.matter_teleport_rate, icon: RefreshCw, color: "text-emerald-400" },
               { label: "Logique", val: metrics.logic_unification, icon: ShieldCheck, color: "text-purple-400" }
             ].map((m, i) => (
               <div key={i} className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 flex flex-col items-center gap-6 shadow-3xl">
                  <m.icon className={cn("h-12 w-12", m.color)} />
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</p>
                  <p className="text-2xl font-black font-mono text-white">{m.val}</p>
               </div>
             ))}
          </div>

          <div className="p-24 bg-white/5 rounded-[8rem] border-8 border-red-600/20 shadow-inner relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[4000ms]" />
             <p className="text-6xl text-white leading-relaxed italic font-black uppercase tracking-tighter text-pretty relative z-10">
               "L'INFRASTRUCTURE N'EST PLUS UN OUTIL POSÉ SUR LE MONDE. ELLE EST DEVENUE LA TRAME MÊME DU MULTIVERS SÉMANTIQUE HAKIM CHIBOUBI."
             </p>
          </div>
        </CardContent>

        <CardFooter className="p-24 border-t border-red-600/20 bg-slate-950/80 justify-center">
           <Button 
            onClick={handleStartFusion}
            disabled={isFusing}
            className="bg-red-600 hover:bg-red-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1.5em] text-3xl shadow-5xl border-none active:scale-95 transition-all"
           >
             {isFusing ? <Loader2 className="animate-spin h-12 w-12" /> : "INTÉGRER LA FUSION Ω"}
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
