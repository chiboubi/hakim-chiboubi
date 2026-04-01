"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Layers, MonitorCheck, Users, Mic, Orbit, Move3d } from "lucide-react";
import { cn } from "@/lib/utils";

export const HoloVolumetricWorkspace = () => {
  const [isImmersive, setIsImmersive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/30 text-white shadow-[0_0_100px_rgba(6,182,212,0.2)] relative overflow-hidden group min-h-[650px] rounded-[5rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-12 py-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-black uppercase tracking-[0.5em] text-cyan-400 flex items-center gap-6">
                  <Move3d className="h-10 w-10 animate-pulse" /> Volumetric Holo 5D
                </CardTitle>
                <CardDescription className="text-[12px] uppercase tracking-widest font-bold text-slate-500 mt-2">Volumetric Interaction, Haptic Feedback & Temporal Dynamics</CardDescription>
              </div>
              <div className="flex gap-6">
                <Badge className="bg-cyan-600 text-white border-none text-[10px] animate-pulse uppercase px-8 py-2 tracking-[0.3em]">HOLO_5D: &infin;.&Omega;</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[10px] uppercase font-black">VOLUMETRIC_XR v13.5</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[550px] flex flex-col items-center justify-center bg-black overflow-hidden group/view",
            isImmersive ? "scale-105 shadow-[0_0_250px_rgba(6,182,212,0.5)]" : ""
          )} style={{ transition: 'all 1000ms' }}>
            <div 
              className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:80px_80px] group-hover/view:scale-110 transition-transform ease-linear" 
              style={{ transitionDuration: '20000ms' }}
            />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(6,182,212,0.3)_0%,transparent_85%) pointer-events-none" />
            
            <div className="relative z-10 transform perspective-[2000px] rotate-x-12 rotate-y-12 transition-transform duration-1000 group-hover/view:rotate-x-6 group-hover/view:rotate-y-6 flex flex-col items-center gap-12">
               <div className="w-[450px] h-[450px] border-4 border-cyan-500/20 rounded-[5rem] flex items-center justify-center animate-spin-slow bg-cyan-500/5 backdrop-blur-3xl shadow-[0_0_200px_rgba(6,182,212,0.4)] relative">
                  <Orbit size={280} className="text-cyan-400 drop-shadow-[0_0_80px_rgba(6,182,212,1)] animate-pulse" />
                  <div className="absolute inset-0 border-2 border-cyan-500 rounded-[5rem] animate-ping opacity-10" />
                  
                  {/* Dynamic Floating Nodes */}
                  <div className="absolute -top-16 -right-16 p-8 bg-slate-900/95 border-2 border-emerald-500/50 rounded-[2.5rem] backdrop-blur-3xl animate-bounce shadow-3xl text-center min-w-[200px]">
                    <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em]">Bio-Flux</p>
                    <p className="text-3xl font-mono font-black text-white">ORGANIC</p>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 flex gap-6">
               <Button size="icon" variant="outline" className="h-16 w-16 bg-black/60 border-slate-800 hover:border-cyan-500 rounded-[1.5rem] shadow-2xl transition-all hover:scale-110"><Camera size={28} /></Button>
               <Button size="icon" variant="outline" className="h-16 w-16 bg-black/60 border-slate-800 hover:border-cyan-500 rounded-[1.5rem] shadow-2xl transition-all hover:scale-110"><Layers size={28} /></Button>
               <Button 
                size="sm" 
                className={cn("transition-all px-16 font-black uppercase text-xs h-16 rounded-[1.5rem] shadow-[0_0_60px_rgba(6,182,212,0.6)] tracking-[0.4em]", isImmersive ? "bg-cyan-600 text-white" : "bg-slate-800 text-cyan-400 border border-cyan-500/30")}
                onClick={() => setIsImmersive(!isImmersive)}
               >
                  {isImmersive ? "EXIT 5D_DIMENSION" : "ENTER VOLUMETRIC OMNISCIENCE"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl h-full flex flex-col rounded-[4rem]">
            <CardHeader className="pb-2 border-b border-slate-800 bg-slate-950/50 px-10 py-10">
              <CardTitle className="text-sm font-black uppercase text-purple-400 flex items-center gap-4">
                <Users className="h-6 w-6" /> Volumetric Entities
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-10 space-y-10 flex-1 px-10">
              <div className="aspect-square bg-black/60 rounded-[3rem] border border-slate-800 relative overflow-hidden group cursor-pointer shadow-inner">
                 <img src="https://picsum.photos/seed/vol-avatar/600/600" alt="Volumetric Avatar" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10 flex items-center gap-6">
                    <div className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] border-2 border-purple-400"><Mic size={24} className="animate-pulse" /></div>
                    <div>
                       <p className="text-sm font-black text-white uppercase tracking-[0.2em]">Gaia Historian (Vol-Entity)</p>
                       <p className="text-[10px] text-purple-400 font-mono uppercase tracking-widest leading-none mt-2">Phase: Narrative 5D Reconstruction</p>
                    </div>
                 </div>
              </div>
              <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-[2.5rem] shadow-inner text-center">
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  &quot;Holograms are now sensory-mapped. You can feel the &apos;structural pressure&apos; of the infrastructure through multi-modal haptic arrays.&quot;
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800">
              <Button size="sm" variant="ghost" className="w-full text-[11px] font-black uppercase text-slate-500 hover:text-white tracking-[0.4em]">
                Recalibrate Haptic Array
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
