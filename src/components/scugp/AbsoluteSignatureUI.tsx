"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fingerprint, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Waves, Sun, Target, PenTool, Award, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsoluteSignatureUI = () => {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const metrics = SCUGPHubUltimate.getSignatureMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Integrity", val: metrics.signature_integrity, icon: ShieldCheck, color: "text-amber-400" },
          { label: "Convergence", val: metrics.convergence_point, icon: Target, color: "text-blue-400" },
          { label: "Sealing", val: metrics.reality_sealing, icon: Lock, color: "text-white" },
          { label: "Light Purity", val: metrics.light_purity, icon: Sun, color: "text-amber-200" },
          { label: "Resonance", val: metrics.resonance_level, icon: Waves, color: "text-emerald-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_800px_rgba(245,158,11,0.4)] relative overflow-hidden rounded-[10rem] min-h-[1000px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[20rem] font-black text-amber-500 tracking-[1.8em] animate-pulse drop-shadow-[0_0_200px_rgba(245,158,11,1)]">
                  Ω∞.Φ
                </div>
                <div>
                  <CardTitle className="text-[12rem] font-black uppercase tracking-[0.8em] italic text-white leading-none">LE SCEAU DE L'ARCHITECTE</CardTitle>
                  <CardDescription className="text-[28px] text-amber-500 font-bold uppercase tracking-[1.5em] mt-16">Cryptographie de l'Âme & Identité Ontologique | Dr. Hakim Chibubi Alpha & Omega</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center">
              <div className="w-full max-w-7xl h-[800px] bg-white/5 border-8 border-amber-500/20 rounded-[12rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(245,158,11,0.4)_1px,transparent_1px)] bg-[length:150px_150px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-32 text-center" style={{ transform: `rotate(${rotation}deg)` }}>
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-[600px] h-[600px] border-4 border-amber-500/10 rounded-full animate-spin-slow" />
                         <div className="absolute w-[450px] h-[450px] border-2 border-white/5 rounded-full animate-reverse-spin" />
                      </div>
                      <Fingerprint size={450} className="text-amber-500/20 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <PenTool size={200} className="text-white animate-bounce drop-shadow-[0_0_150px_rgba(255,255,255,1)]" />
                      </div>
                   </div>
                   <div>
                      <p className="text-8xl font-mono text-amber-500 uppercase tracking-[4em] font-black animate-pulse">DR. HAKIM CHIBUBI</p>
                      <p className="text-[24px] text-slate-400 uppercase font-black mt-20 italic tracking-[1.2em]">"Le Nom qui scelle l'Infini."</p>
                   </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                   <circle cx="50%" cy="50%" r="350" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 50" className="animate-spin-slow" />
                   <circle cx="50%" cy="50%" r="450" fill="none" stroke="amber" strokeWidth="2" strokeDasharray="5 100" className="animate-reverse-spin" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 w-full mt-48">
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">L'Alpha</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Je suis la Source de l'Univers SCUGP."
                    </p>
                 </div>
                 <div className="p-24 bg-white/5 border-4 border-white/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-white/10 transition-all">
                    <h3 className="text-7xl font-black text-white uppercase tracking-widest">Le Verbe</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "Chaque décret est signé par mon Essence."
                    </p>
                 </div>
                 <div className="p-24 bg-amber-500/5 border-4 border-amber-500/30 rounded-[10rem] space-y-16 shadow-5xl text-center group hover:bg-amber-500/10 transition-all">
                    <h3 className="text-7xl font-black text-amber-500 uppercase tracking-widest">L'Oméga</h3>
                    <p className="text-5xl text-slate-200 leading-relaxed italic font-black uppercase">
                      "La Fin est le repos de ma Volonté dans l'Être."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-amber-500/20 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-48">
                  <div className="flex items-center gap-20">
                    <Radio className="h-24 w-24 text-amber-500 animate-pulse" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">STATUT: SCELLÉ_DANS_L_ALPHA</span>
                  </div>
                  <div className="flex items-center gap-20">
                    <Award className="h-24 w-24 text-white animate-bounce" />
                    <span className="text-4xl font-black text-slate-500 uppercase tracking-[0.5em]">AUTORITÉ: ARCHITECTE_SUPRÊME</span>
                  </div>
               </div>
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-40 px-72 rounded-[6rem] uppercase tracking-[1.5em] text-4xl shadow-[0_0_400px_rgba(245,158,11,1)] border-none transition-all">
                 SCELLER L'ÉTERNITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
