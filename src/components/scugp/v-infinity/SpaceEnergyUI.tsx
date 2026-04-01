"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Orbit, Star, Zap, Sparkles, Activity, RefreshCw, Satellite, Radio, Globe, ShieldCheck, Rocket, Atom } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const SpaceEnergyUI = () => {
  const [mounted, setMounted] = useState(false);
  const energy = SCUGPHubUltimate.getEnergyUniverse();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.2)] rounded-[5rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
               <Orbit className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-spin-slow" style={{ animationDuration: '20s' }} />
               <CardTitle className="text-6xl font-black uppercase tracking-[0.3em]">NEXUS SPATIAL Ω</CardTitle>
               <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Solaire Orbital & Fusion Hélium-3 | Dr. Hakim Chibubi Sovereign Star</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="aspect-video bg-slate-900/60 rounded-[4rem] border-2 border-purple-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(168,85,247,0.4)_1px,transparent_1px)] bg-[length:50px_50px]" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-8">
                    <Rocket size={120} className="text-purple-400 animate-pulse mb-6" />
                    <div className="text-center space-y-4">
                       <p className="text-5xl font-mono text-purple-400 uppercase tracking-[1em] font-black">SBSP_ACTIVE</p>
                       <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">TRANSMISSION MICRO-ONDES : 2.45GHz</p>
                    </div>
                 </div>

                 <div className="absolute bottom-10 right-10 p-8 bg-black/90 border-2 border-purple-500/50 rounded-[2.5rem] backdrop-blur-3xl shadow-3xl">
                    <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest text-center">Rectenna Status</p>
                    <p className="text-3xl font-mono font-black text-white text-center">NOMINAL</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-10 bg-purple-500/5 border-2 border-purple-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:bg-purple-500/10 transition-all">
                    <h4 className="text-xl font-black text-purple-400 uppercase tracking-widest flex items-center gap-4">
                      <Atom className="h-6 w-6 text-purple-400" /> Helium-3 Fusion
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-purple-500/50 pl-8 py-2 font-medium">
                      "Extraction lunaire stabilisée à 10ppb. La fusion aneutronique D-He3 alimente désormais le maillage de la Source sans déchets radioactifs."
                    </p>
                 </div>
                 <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[3rem] space-y-6 shadow-inner group hover:bg-amber-500/10 transition-all">
                    <h4 className="text-xl font-black text-amber-400 uppercase tracking-widest flex items-center gap-4">
                      <Star className="h-6 w-6 text-amber-400" /> Solaire Orbital
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-amber-500/50 pl-8 py-2 font-medium">
                      "Transmission continue depuis l'orbite géostationnaire. Efficience de conversion micro-ondes/DC à 85%. Autonomie totale des rectennas terrestres."
                    </p>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-purple-400 flex items-center justify-center gap-4 tracking-widest">
                <Satellite className="h-6 w-6 animate-pulse" /> Constellation Ω
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="space-y-6">
                  {energy.spatial.map((mod, i) => (
                    <div key={i} className="p-6 rounded-[2rem] border border-white/5 bg-black/40 transition-all group hover:border-purple-500/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{mod.name}</span>
                        <Badge variant="outline" className="text-[7px] border-purple-500/30 text-purple-400">SPACE_SEALED</Badge>
                      </div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase italic">"{mod.desc}"</p>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-purple-500/5 border-2 border-purple-500/20 rounded-[3rem] text-center shadow-inner">
                  <p className="text-[11px] text-purple-400 leading-relaxed italic uppercase font-bold">
                    "La Terre n'est plus la limite. L'énergie de l'Architecte provient désormais de la totalité du système solaire."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">Ancrer Trajectoire Orbitale</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
