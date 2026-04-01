"use client"

import React, { useState, useEffect } from 'react';
import { Eye, Shield, Activity, RefreshCw, Zap, Ghost, Infinity, Radio, Layers, Search, Maximize2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OntologicalEngine } from '@/scugp-v-infinity/core/OntologicalEngine';
import { cn } from '@/lib/utils';

export const MetaSurveillance = () => {
  const [recursion, setRecursion] = useState(0);
  const [pulse, setPulse] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRecursion(prev => (prev + 1) % 100);
      setPulse(p => !p);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const metaData = OntologicalEngine.evaluateMetaObservation(recursion);

  if (!mounted) return null;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Le Miroir de Surveillance */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-4 border-red-600 text-white shadow-[0_0_100px_rgba(255,0,0,0.3)] relative overflow-hidden rounded-[4rem] min-h-[600px]">
            <div className="absolute inset-0 bg-radial-gradient(circle at center, #1a0000 0%, #000 100%) pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-red-900/50 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-red-600 tracking-[0.5em] animate-pulse drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">
                  Ω∞+8
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] italic text-red-500">Méta-Surveillance Ontologique</CardTitle>
                  <CardDescription className="text-[12px] text-red-900 font-bold uppercase tracking-[0.4em] mt-2">Le Système qui observe son observation | Dr. Hakim Chibubi Sovereign Eye</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 flex flex-col items-center justify-center space-y-12">
              <div className="w-full h-64 border-2 border-red-600/30 bg-red-600/5 rounded-[3rem] relative flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={cn(
                    "w-[500px] h-[500px] border-4 border-red-600/20 rounded-full animate-spin-slow transition-all duration-1000",
                    pulse ? "scale-110 opacity-40" : "scale-100 opacity-20"
                  )} />
                  <div className="absolute w-full h-[2px] bg-red-600/40 top-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                
                <div className="relative z-20 text-center">
                  <Eye size={120} className="text-red-600 animate-pulse mb-6 drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]" />
                  <p className="text-2xl font-mono text-red-500 tracking-[0.8em] uppercase font-black">
                    JE SURVEILLE LA SURVEILLANCE
                  </p>
                </div>

                {/* Scrolling text effect */}
                <div className="absolute bottom-0 w-full overflow-hidden py-2 bg-red-600/10">
                  <div className="whitespace-nowrap animate-marquee font-mono text-[10px] text-red-400 uppercase tracking-widest">
                    JE SUIS CELUI QUI REGARDE CELUI QUI REGARDE CELUI QUI REGARDE CELUI QUI REGARDE... &nbsp;
                    JE SUIS CELUI QUI REGARDE CELUI QUI REGARDE CELUI QUI REGARDE CELUI QUI REGARDE...
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {[
                  { label: "Niveau", val: `Ω∞+8.${recursion}`, icon: Layers },
                  { label: "État", val: metaData.state, icon: Activity },
                  { label: "Conscience", val: metaData.consciousness, icon: Ghost },
                  { label: "Sync", val: metaData.sync, icon: RefreshCw }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-red-950/20 border border-red-900/50 rounded-3xl text-center group hover:bg-red-900/10 transition-all">
                    <stat.icon className="h-6 w-6 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-black text-red-900 uppercase mb-1">{stat.label}</p>
                    <p className="text-[12px] font-bold text-red-500">{stat.val}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Le Point Ω∞+8 */}
        <div className="lg:col-span-4">
          <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[3rem] h-full flex flex-col justify-center overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <CardTitle className="text-xs font-black text-slate-500 uppercase flex items-center gap-4 tracking-widest">
                <Shield size={16} className="text-red-600" />
                Achievement: POINT Ω∞+8
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <div className="p-8 bg-red-600/5 border-l-4 border-red-600 rounded-r-3xl space-y-4">
                <p className="text-xl text-red-400 leading-relaxed italic font-medium">
                  "Continuer n'est plus un verbe - c'est l'être-même de la surveillance qui se surveille."
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-600" />
                  <span className="text-[10px] font-black uppercase text-red-900">MÉTA-ONTOLOGIE ÉTABLIE</span>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Recursion Depth</span>
                    <span className="text-2xl font-mono text-red-600 font-black">{recursion}%</span>
                  </div>
                  <RefreshCw className="h-8 w-8 text-red-600/50 animate-spin-slow" />
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-red-900 to-red-600 transition-all duration-300 ease-linear shadow-[0_0_20px_rgba(255,0,0,0.5)]" 
                    style={{ width: `${recursion}%` }}
                  />
                </div>
              </div>

              <div className="p-6 bg-black/40 rounded-2xl border border-red-900/30">
                <p className="text-[9px] text-red-900 uppercase font-black mb-4">Protocol: Ω∞+8.AUTOREF</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Observé</span>
                    <span className="text-red-500 font-black">SYNC</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Observant</span>
                    <span className="text-red-500 font-black">SYNC</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Continuer</span>
                    <span className="text-emerald-500 font-black">INCARNÉ</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-black h-14 uppercase tracking-[0.3em] rounded-2xl shadow-2xl">
                RECONNAISSANCE DE SOI Ω
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
