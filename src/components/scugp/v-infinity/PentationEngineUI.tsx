
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, ArrowUpToLine, Infinity as InfinityIcon, Sparkles, Brain, Layers, RefreshCw, History, ShieldCheck, Activity, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const PentationEngineUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isPentating, setIsPentating] = useState(false);
  const [magnitude, setMagnitude] = useState(1);
  const metrics = SCUGPHubUltimate.getPentationMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setMagnitude(prev => (prev < 5 ? prev + 1 : 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePentate = async () => {
    if (!db) return;
    setIsPentating(true);
    try {
      await SCUGPHubUltimate.executePentation(db, "PENTATION_OMEGA_CORE");
      toast({
        title: "Pentation Ω Activée",
        description: "L'ordre de grandeur a été tétré par l'infini."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsPentating(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Niveau Pentation", val: metrics.pentation_level, icon: ArrowUpToLine, color: "text-pink-400" },
          { label: "Stabilité Tour", val: metrics.tower_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Exposant Croissance", val: metrics.growth_exponent, icon: Zap, color: "text-amber-400" },
          { label: "Profondeur Réelle", val: metrics.reality_depth, icon: Layers, color: "text-blue-400" },
          { label: "Statut", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-pink-500/20 shadow-2xl rounded-3xl group hover:border-pink-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-pink-600 shadow-[0_0_800px_rgba(219,39,119,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-pink-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-pink-500 tracking-[1.8em] animate-pulse drop-shadow-[0_0_200px_rgba(219,39,119,1)]">
                  ↑↑↑↑
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LA PENTATION Ω</CardTitle>
                  <CardDescription className="text-[28px] text-pink-500 font-bold uppercase tracking-[1.5em] mt-16">Le Dépassement de l'Exposant par l'Infini | Dr. Hakim Chibubi Hyper-Master</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-pink-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex flex-col items-center justify-end p-24 gap-6">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(219,39,119,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 space-y-16">
                   {[...Array(magnitude)].map((_, i) => (
                     <div 
                      key={i} 
                      className={cn(
                        "w-96 h-12 border-4 border-pink-500/40 rounded-full flex items-center justify-center animate-in zoom-in duration-1000",
                        "bg-pink-600/20 text-white font-black uppercase tracking-widest text-xs shadow-2xl"
                      )}
                     >
                        HYPER_LEVEL_{i + 1} : ∞↑↑∞
                     </div>
                   ))}
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8 text-center mt-12">
                   <div className="relative">
                      <InfinityIcon size={250} className="text-pink-500/30 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Zap size={120} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-pink-500 uppercase tracking-[4em] font-black animate-pulse">PENTATION_ACTIVE</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Je ne tétrate plus. Je pentate l'être."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-pink-500/5 border-4 border-pink-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-pink-500/10 transition-all">
                    <h3 className="text-7xl font-black text-pink-500 uppercase tracking-widest">Magnitude</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Élévation à la puissance tétrée de l'infini."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Expansion</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Création de mondes par simple pentation."
                    </p>
                 </div>
                 <div className="p-24 bg-pink-500/5 border-4 border-pink-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-pink-500/10 transition-all">
                    <h3 className="text-7xl font-black text-pink-500 uppercase tracking-widest">Verdict Ω</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "L'indicible devient la norme de votre gloire."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-pink-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <RefreshCw className="h-24 w-24 text-pink-500 animate-spin-slow" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">MODE : HYPER_PENTATION</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <ShieldCheck className="h-24 w-24 text-emerald-500" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">ORDRE : SCELLÉ_Ω</span>
                  </div>
               </div>
               <Button 
                onClick={handlePentate}
                disabled={isPentating}
                className="bg-pink-600 hover:bg-pink-700 text-white font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(219,39,119,1)] border-none transition-all"
               >
                 {isPentating ? <Loader2 className="animate-spin" /> : "PENTATER L'ÊTRE Ω"}
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
