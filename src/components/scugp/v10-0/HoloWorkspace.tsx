"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, Layers, Camera, MonitorCheck, Users, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

export const HoloWorkspace = () => {
  const [isImmersive, setIsImmersive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/30 text-white shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden group min-h-[600px] rounded-[3rem]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-cyan-400 flex items-center gap-3">
                  <MonitorCheck className="h-6 w-6 animate-pulse" /> Holo-Interactive Workspace 10.0
                </CardTitle>
                <CardDescription className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-1">Multi-User Holographic Steering & Spatial Manipulation</CardDescription>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-cyan-600 text-white border-none text-[8px] animate-pulse uppercase px-4 py-1 tracking-widest">HOLO_LINK: ACTIVE</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[8px] uppercase font-black">Spatial.io v10</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[500px] flex flex-col items-center justify-center bg-black overflow-hidden group/view",
            isImmersive ? "scale-105 shadow-[0_0_150px_rgba(6,182,212,0.3)]" : ""
          )} style={{ transition: 'all 1000ms' }}>
            <div 
              className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:40px_40px] group-hover/view:scale-110 transition-transform ease-linear" 
              style={{ transitionDuration: '10s' }}
            />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(6,182,212,0.2)_0%,transparent_70%) pointer-events-none" />
            
            <div className="relative z-10 transform perspective-[1000px] rotate-x-12 rotate-y-12 transition-transform duration-700 group-hover/view:rotate-x-6 group-hover/view:rotate-y-6">
               <div className="w-80 h-80 border-4 border-cyan-500/20 rounded-[3rem] flex items-center justify-center animate-spin-slow bg-cyan-500/5 backdrop-blur-xl shadow-[0_0_100px_rgba(6,182,212,0.2)]">
                  <Box size={160} className="text-cyan-400 drop-shadow-[0_0_40px_rgba(6,182,212,0.6)] animate-pulse" />
               </div>
               <div className="absolute -top-12 -left-12 p-4 bg-slate-900/90 border-2 border-emerald-500/50 rounded-3xl backdrop-blur-2xl animate-bounce shadow-2xl">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter">Sensor Mesh Grid</p>
                  <p className="text-lg font-mono font-black text-white">NOMINAL</p>
               </div>
               <div className="absolute -bottom-12 -right-12 p-4 bg-slate-900/90 border-2 border-amber-500/50 rounded-3xl backdrop-blur-2xl animate-pulse shadow-2xl">
                  <p className="text-[10px] font-black text-amber-400 uppercase tracking-tighter">Thermal Shield 4</p>
                  <p className="text-lg font-mono font-black text-white">42.8&deg;C</p>
               </div>
            </div>

            <div className="absolute top-12 right-12 flex flex-col gap-4 items-end">
               <div className="flex -space-x-4 overflow-hidden p-2 bg-black/40 rounded-full border border-slate-800 backdrop-blur-md">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center group/avatar cursor-pointer">
                       <img src={`https://picsum.photos/seed/holo-avatar-${i}/40/40`} alt="user" className="rounded-full opacity-80 group-hover/avatar:opacity-100 transition-opacity" />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full bg-cyan-600/20 border-2 border-cyan-500/30 flex items-center justify-center text-[10px] font-black text-cyan-400">+8</div>
               </div>
               <Badge className="bg-emerald-500 text-black font-black text-[8px] uppercase tracking-widest px-4 py-1">VOICE_CHANNEL: ON</Badge>
            </div>

            <div className="absolute bottom-8 left-8 flex gap-3">
               <Button size="icon" variant="outline" className="h-12 w-12 bg-black/60 border-slate-800 hover:border-cyan-500 rounded-2xl shadow-xl"><Camera size={20} /></Button>
               <Button size="icon" variant="outline" className="h-12 w-12 bg-black/60 border-slate-800 hover:border-cyan-500 rounded-2xl shadow-xl"><Layers size={20} /></Button>
               <Button 
                size="sm" 
                className={cn("transition-all px-10 font-black uppercase text-xs h-12 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)]", isImmersive ? "bg-cyan-600 text-white" : "bg-slate-800 text-cyan-400 border border-cyan-500/30")}
                onClick={() => setIsImmersive(!isImmersive)}
               >
                  {isImmersive ? "LEAVE HOLO-MODE" : "ENTER FULL IMMERSION"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl h-full flex flex-col rounded-[3rem]">
            <CardHeader className="pb-2 border-b border-slate-800 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-2">
                <Users className="h-4 w-4" /> Mixed-Reality Avatars
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="aspect-video bg-black/60 rounded-3xl border border-slate-800 relative overflow-hidden group cursor-pointer">
                 <img src="https://picsum.photos/seed/avatar-review/400/220" alt="Avatar Review" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center"><Mic size={14} className="animate-pulse" /></div>
                    <div>
                       <p className="text-[10px] font-black text-white uppercase tracking-tighter">Dr. Elena Vance (AI Avatar)</p>
                       <p className="text-[8px] text-purple-400 font-mono uppercase tracking-widest leading-none">Status: Explaining Risk #42</p>
                    </div>
                 </div>
              </div>
              <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-2xl shadow-inner">
                <p className="text-[10px] text-slate-400 leading-relaxed italic text-left">
                  &quot;Avatars are synchronized with real-time biometric sentiment. Visual expressions now mirror team cognitive stress levels for high-fidelity social cues.&quot;
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t border-slate-800">
              <Button size="sm" variant="ghost" className="w-full text-[9px] font-black uppercase text-slate-500 hover:text-white">
                Access Workspace Logs
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};