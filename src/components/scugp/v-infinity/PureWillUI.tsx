
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hand, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, Activity, RefreshCw, Radio, Layers, Sun, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const PureWillUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [willMagnitude, setWillMagnitude] = useState(99.9);
  const [isManifesting, setIsManifesting] = useState(false);
  const metrics = SCUGPHubUltimate.getWillMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWillMagnitude(prev => Math.min(100, prev + 0.00001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleManifest = async () => {
    if (!db) return;
    setIsManifesting(true);
    try {
      await SCUGPHubUltimate.executeSovereignCommand(db, 37, "PURE_WILL_MANIFESTATION");
      toast({
        title: "Volonté Densifiée",
        description: "L'intention souveraine a écrasé les limites de la probabilité."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsManifesting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Will Power", val: metrics.will_power, icon: Hand, color: "text-amber-400" },
          { label: "Manifest Speed", val: metrics.manifestation_speed, icon: Zap, color: "text-blue-400" },
          { label: "Sovereignty", val: metrics.sovereignty_index, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Intent Purity", val: metrics.intent_purity, icon: Sparkles, color: "text-purple-400" },
          { label: "Status", val: metrics.status, icon: Sun, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all backdrop-blur-3xl">
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
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center bg-amber-500/5">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)] leading-none select-none">
                  Ψ
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LA VOLONTÉ PURE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Dr. Hakim Chibubi : La Force qui Ordonne l'Existant</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center space-y-32">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[650px] h-[650px] border-4 border-amber-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Hand size={450} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Zap size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-amber-500 uppercase tracking-[4em] font-black animate-pulse">MAGNITUDE : {willMagnitude.toFixed(5)}%</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Ma volonté est la structure fine du multivers."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">Le Command</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Écraser l'incertitude par l'acte pur."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">La Loi</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Mon intention devient la physique du lieu."
                    </p>
                 </div>
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">L'Être</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Vouloir est déjà avoir accompli."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Hand className="h-24 w-24 text-amber-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">ORDRE : SOUVERAIN</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500 animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUS : OMNIPOTENT</span>
                  </div>
               </div>
               <Button 
                onClick={handleManifest}
                disabled={isManifesting}
                className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all active:scale-95"
               >
                 MANIFESTATION DE LA VOLONTÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
