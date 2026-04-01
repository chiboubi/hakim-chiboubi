
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Heart, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, ShieldCheck, Activity, Layers, RefreshCw, Star, Landmark, History as HistoryIcon, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const RepublicOfSovereignsUI = () => {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(0);
  const metrics = SCUGPHubUltimate.getRepublicMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in" style={{ animationDuration: '2000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Souverains Élevés", val: metrics.sovereigns_elevated, icon: UserPlus, color: "text-blue-400" },
          { label: "Transcendance Collective", val: metrics.collective_transcendence, icon: Sparkles, color: "text-pink-400" },
          { label: "Indice d'Harmonie", val: metrics.harmony_index, icon: Heart, color: "text-red-400" },
          { label: "Partage Souverain", val: metrics.sharing_rate, icon: Share2, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all">
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
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_800px_rgba(37,99,235,0.3)] relative overflow-hidden rounded-[10rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-blue-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-blue-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(37,99,235,1)]">
                  Σ.Ω
                </div>
                <div>
                  <CardTitle className="text-9xl font-black uppercase tracking-[0.6em] italic text-white leading-none">LA RÉPUBLIQUE DES SOUVERAINS</CardTitle>
                  <CardDescription className="text-[20px] text-blue-400 font-bold uppercase tracking-[1.2em] mt-10">Élévation Collective & Harmonie Spontanée | Dr. Hakim Chibubi The Liberator</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[600px] bg-white/5 border-4 border-blue-500/20 rounded-[8rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(37,99,235,0.3)_1px,transparent_1px)] bg-[length:80px_80px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-24 text-center">
                   <div className="relative">
                      <Users size={450} className="text-blue-500/10 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Landmark size={200} className="text-blue-400 animate-bounce drop-shadow-[0_0_150px_rgba(37,99,235,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-6xl font-mono text-blue-400 uppercase tracking-[2.5em] font-black animate-pulse">UNION_DES_ARCHITECTES</p>
                      <p className="text-[18px] text-slate-600 uppercase font-black mt-12 italic tracking-[0.8em]">"Partager la souveraineté, c'est la multiplier par l'infini."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                   {[1,2,3,4,5,6,7,8].map(i => (
                     <circle 
                      key={i}
                      cx={`${50 + 30 * Math.cos(i * Math.PI / 4)}%`}
                      cy={`${50 + 30 * Math.sin(i * Math.PI / 4)}%`}
                      r="10"
                      fill="blue"
                      className="animate-ping"
                      style={{ animationDelay: `${i * 0.2}s` }}
                     />
                   ))}
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-32">
                 <div className="p-20 bg-blue-500/5 border-2 border-blue-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-blue-400 uppercase tracking-widest">Le Don</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic">
                      "Élever chaque collaborateur au rang d'Architecte Suprême."
                    </p>
                 </div>
                 <div className="p-20 bg-pink-500/5 border-2 border-pink-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-pink-400 uppercase tracking-widest">L'Inter-Souveraineté</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic">
                      "Un maillage de volontés libres créant une seule réalité harmonique."
                    </p>
                 </div>
                 <div className="p-20 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[6rem] space-y-12 shadow-4xl text-center">
                    <h3 className="text-5xl font-black text-emerald-400 uppercase tracking-widest">La Paix Ω</h3>
                    <p className="text-3xl text-slate-300 leading-relaxed italic">
                      "L'autorité n'est plus nécessaire car la sagesse est universelle."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-blue-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <HistoryIcon className="h-16 w-16 text-blue-500 animate-spin-slow" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">RÉGIME : ARCHONTÉ_CHIBOUBIQUE</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-emerald-500" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">CONFIANCE : ABSOLUE</span>
                  </div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(37,99,235,0.8)] border-none">
                 ÉLEVER LA RÉPUBLIQUE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
