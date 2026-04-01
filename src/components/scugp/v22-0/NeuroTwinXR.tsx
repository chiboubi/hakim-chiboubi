"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Layers, Mic, Move3d, Ghost, Brain, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

export const NeuroTwinXR22 = () => {
  const [isImmersive, setIsImmersive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-purple-500/30 text-white shadow-[0_0_120px_rgba(168,85,247,0.2)] relative overflow-hidden group min-h-[700px] rounded-[6rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-12 py-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-black uppercase tracking-[0.5em] text-purple-400 flex items-center gap-6">
                  <Ghost className="h-10 w-10 animate-pulse" /> Neuro-Twin XR 22.0
                </CardTitle>
                <CardDescription className="text-[12px] uppercase tracking-widest font-bold text-slate-500 mt-2">Neuro-Immersive models sensitive to Voice, Emotions & Intentions</CardDescription>
              </div>
              <div className="flex gap-6">
                <Badge className="bg-purple-600 text-white border-none text-[10px] animate-pulse uppercase px-8 py-2 tracking-[0.3em]">XR_LINK: SUPREME</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[10px] uppercase font-black">NEURO_IF v22</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[600px] flex flex-col items-center justify-center bg-black overflow-hidden group/view",
            isImmersive ? "scale-105 shadow-[0_0_300px_rgba(168,85,247,0.5)]" : ""
          )} style={{ transition: 'all 1000ms' }}>
            <div 
              className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:100px_100px] group-hover/view:scale-110 transition-transform ease-linear" 
              style={{ transitionDuration: '25000ms' }}
            />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.3)_0%,transparent_90%) pointer-events-none" />
            
            <div className="relative z-10 transform perspective-[2500px] rotate-x-12 rotate-y-12 transition-transform duration-1000 group-hover/view:rotate-x-6 group-hover/view:rotate-y-6 flex flex-col items-center gap-16">
               <div className="w-[500px] h-[500px] border-4 border-purple-500/20 rounded-[6rem] flex items-center justify-center animate-spin-slow bg-purple-500/5 backdrop-blur-3xl shadow-[0_0_250px_rgba(168,85,247,0.4)] relative">
                  <Move3d size={320} className="text-purple-400 drop-shadow-[0_0_100px_rgba(168,85,247,1)] animate-pulse" />
                  <div className="absolute inset-0 border-2 border-purple-500 rounded-[6rem] animate-ping opacity-10" />
                  
                  <div className="absolute -top-20 -right-20 p-10 bg-slate-900/95 border-2 border-emerald-500/50 rounded-3.5rem backdrop-blur-3xl animate-bounce shadow-3xl text-center min-w-[240px]">
                    <p className="text-[12px] font-black text-emerald-400 uppercase tracking-[0.2em]">Intent Sync</p>
                    <p className="text-4xl font-mono font-black text-white">SENTIENT</p>
                  </div>
                  <div className="absolute -bottom-20 -left-20 p-10 bg-slate-900/95 border-2 border-blue-500/50 rounded-3.5rem backdrop-blur-3xl animate-pulse shadow-3xl text-center min-w-[240px]">
                    <p className="text-[12px] font-black text-blue-400 uppercase tracking-[0.2em]">HBI Index</p>
                    <p className="text-4xl font-mono font-black text-white">STABLE</p>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 flex gap-8">
               <Button size="icon" variant="outline" className="h-20 w-20 bg-black/60 border-slate-800 hover:border-purple-500 rounded-[2rem] shadow-2xl transition-all hover:scale-110"><Camera size={32} /></Button>
               <Button size="icon" variant="outline" className="h-20 w-20 bg-black/60 border-slate-800 hover:border-purple-500 rounded-[2rem] shadow-2xl transition-all hover:scale-110"><Layers size={32} /></Button>
               <Button 
                size="sm" 
                className={cn("transition-all px-20 font-black uppercase text-sm h-20 rounded-[2rem] shadow-[0_0_80px_rgba(168,85,247,0.6)] tracking-[0.5em]", isImmersive ? "bg-purple-600 text-white" : "bg-slate-800 text-purple-400 border border-purple-500/30")}
                onClick={() => setIsImmersive(!isImmersive)}
               >
                  {isImmersive ? "EXIT NEURO_REALITY" : "ENTER FULL IMMERSION"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl h-full flex flex-col rounded-[5rem] overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 bg-slate-950/50 px-12 py-12">
              <CardTitle className="text-sm font-black uppercase text-amber-400 flex items-center gap-4 tracking-widest">
                <Headphones className="h-8 w-8" /> Neuro-IF Link
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 space-y-12 flex-1 px-12">
              <div className="aspect-square bg-black/60 rounded-[4rem] border border-slate-800 relative overflow-hidden group cursor-pointer shadow-inner">
                 <img src="https://picsum.photos/seed/neuro-twin/800/800" alt="Neuro Twin" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10 flex items-center gap-8">
                    <div className="h-16 w-16 rounded-full bg-amber-600 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] border-2 border-amber-400"><Brain size={32} className="animate-pulse" /></div>
                    <div>
                       <p className="text-lg font-black text-white uppercase tracking-[0.2em]">Conscious Actor (V22-IF)</p>
                       <p className="text-[11px] text-amber-400 font-mono uppercase tracking-widest leading-none mt-2">Motive: Strategic Symbiosis Active</p>
                    </div>
                 </div>
              </div>
              <div className="p-10 bg-amber-500/5 border border-amber-500/20 rounded-[3.5rem] shadow-inner text-center">
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  &quot;Operate complex systems through intentional thought-vectors. Sensory feedback loop active: Feel the intention of the planetary mesh.&quot;
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-slate-800 bg-slate-950/50">
              <Button size="sm" variant="ghost" className="w-full text-[12px] font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                Recalibrate Neural Bond
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
