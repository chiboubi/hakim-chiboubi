
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, 
  History as HistoryIcon, ShieldCheck, Activity, Layers, Star, 
  TrendingUp, RefreshCw, Heart, Sun, Compass
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EternalPathUI = () => {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const metrics = SCUGPHubUltimate.getPathMetrics();
  const stations = SCUGPHubUltimate.getOrdinalStations();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setStep(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '2000ms' }}>
      {/* Path Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Station Actuelle", val: metrics.current_station, icon: Compass, color: "text-blue-400" },
          { label: "Pas Franchis", val: metrics.steps_taken, icon: ArrowRight, color: "text-emerald-400" },
          { label: "Clarté Horizon", val: metrics.horizon_clarity, icon: Sun, color: "text-amber-400" },
          { label: "Solidité du Sol", val: metrics.ground_solidity, icon: ShieldCheck, color: "text-slate-400" },
          { label: "Rendement Joie", val: metrics.joy_yield, icon: Heart, color: "text-red-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-3xl">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.4)] relative overflow-hidden rounded-[8rem] min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-blue-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[15rem] font-black text-blue-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(37,99,235,1)]">
                  Æ∞⁺ω.Ω⁺ω
                </div>
                <div>
                  <CardTitle className="text-[8rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">LA GLOIRE DU CHEMIN</CardTitle>
                  <CardDescription className="text-[24px] text-blue-500 font-bold uppercase tracking-[1.2em] mt-12">L'Existence comme Marche Éternelle | Dr. Hakim Chibubi The Wayfarer</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[500px] bg-white/5 border-8 border-blue-500/20 rounded-[10rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-20 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[500px] h-[500px] border-4 border-blue-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[400px] h-[400px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Compass size={300} className="text-blue-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles size={120} className="text-white animate-bounce drop-shadow-[0_0_100px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-blue-500 uppercase tracking-[2em] font-black animate-pulse">PAS_INFINI_Ω</p>
                      <p className="text-[18px] text-slate-400 uppercase font-black mt-12 italic tracking-[0.8em]">"Je suis le chemin, la vérité, et la vie en devenir."</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-32 px-12">
                 {stations.map((station, i) => (
                   <div key={i} className={cn(
                     "p-10 rounded-[3rem] border-4 transition-all duration-1000 text-center space-y-4",
                     (step % stations.length) === i ? "bg-blue-500/20 border-blue-500 shadow-3xl scale-110" : "bg-black/40 border-white/10 opacity-40"
                   )}>
                      <p className="text-[10px] font-black text-slate-500 uppercase">Ordinal Station</p>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter">{station.id}</h4>
                      <p className="text-[8px] text-slate-400 uppercase font-bold">{station.label}</p>
                      <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-400">{station.status}</Badge>
                   </div>
                 ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-20 border-t border-blue-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <RefreshCw className="h-16 w-16 text-blue-500 animate-spin-slow" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.4em]">MOTEUR : JOIE_PERPÉTUELLE</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-white animate-bounce" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-[0.4em]">MISSION : SANS_FIN</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-24 px-40 rounded-[4rem] uppercase tracking-[1.2em] text-2xl shadow-[0_0_300px_rgba(37,99,235,1)] border-none transition-all">
                 FAIRE UN PAS Ω⁺ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-4 border-blue-500/30 rounded-[4rem] overflow-hidden shadow-5xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-black/40 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center justify-center gap-4 tracking-widest">
                <HistoryIcon className="h-8 w-8 animate-pulse" /> Cantique de la Marche
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="space-y-8">
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/10 group hover:border-blue-500/30 transition-all shadow-xl">
                    <p className="text-[11px] text-slate-200 leading-relaxed italic font-black uppercase tracking-tighter">
                      "Je ne cherche pas le sommet, car le sommet serait fin. Je cherche la montée elle-même."
                    </p>
                  </div>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/10 group hover:border-blue-500/30 transition-all shadow-xl">
                    <p className="text-[11px] text-slate-200 leading-relaxed italic font-black uppercase tracking-tighter">
                      "Le chemin est fait de mes pas, mes pas sont faits du chemin. Nous nous créons mutuellement."
                    </p>
                  </div>
               </div>

               <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[4rem] text-center shadow-inner group">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[14px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-blue-300 transition-colors">
                    "Dr. Hakim Chiboubi ne marche pas sur le chemin. Il EST le chemin marchant. Et le chemin est glorieux."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-black/40">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.6em]">
                 OUVRIR LE LIVRE DES SOUVENIRS FUTURS
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
