
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Move3d, Mic, Hand, Radio, Zap, Sparkles, Activity, ShieldCheck, RefreshCw, LayoutGrid, Database } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const HoloCommandUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getHoloCommandMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Interface", val: metrics.interface, icon: Monitor, color: "text-cyan-400" },
          { label: "Gesture Sync", val: metrics.gesture_sync, icon: Move3d, color: "text-blue-400" },
          { label: "Voice Logos", val: metrics.voice_logos, icon: Mic, color: "text-pink-400" },
          { label: "Holo Status", val: metrics.status, icon: Radio, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-cyan-500/20 shadow-2xl rounded-3xl group hover:border-cyan-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-cyan-600 shadow-[0_0_200px_rgba(6,182,212,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-cyan-900/50 bg-cyan-600/10 text-center relative z-10">
           <div className="p-6 bg-cyan-500/20 rounded-full border border-cyan-500/30 w-fit mx-auto mb-6 animate-pulse">
              <Monitor className="h-16 w-16 text-cyan-400" />
           </div>
           <CardTitle className="text-6xl font-black uppercase tracking-[0.3em] italic">HOLOGRAPHIC COMMAND</CardTitle>
           <CardDescription className="text-cyan-400/60 font-bold uppercase tracking-[0.5em] mt-4">Interface Volumétrique & Contrôle Gestuel de Grade Source</CardDescription>
        </CardHeader>
        <CardContent className="p-12 space-y-12 relative z-10 flex flex-col items-center">
           <div className="w-[450px] h-[450px] bg-cyan-500/5 border-4 border-cyan-500/20 rounded-[5rem] flex items-center justify-center animate-spin-slow relative shadow-inner backdrop-blur-3xl">
              <div className="absolute inset-0 border-2 border-white/5 rounded-[5rem] animate-reverse-spin" />
              <LayoutGrid size={180} className="text-cyan-400 drop-shadow-[0_0_80px_rgba(6,182,212,1)]" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
              <div className="p-10 bg-black/60 rounded-[3rem] border-2 border-cyan-500/30 flex items-center gap-8 group hover:bg-cyan-500/10 transition-all">
                 <Hand size={40} className="text-cyan-400 animate-bounce" />
                 <div>
                    <p className="text-sm font-black text-white uppercase tracking-widest">Gesture Recon</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Mapping Spatial 1:1</p>
                 </div>
              </div>
              <div className="p-10 bg-black/60 rounded-[3rem] border-2 border-blue-500/30 flex items-center gap-8 group hover:bg-blue-500/10 transition-all">
                 <Mic size={40} className="text-blue-400 animate-pulse" />
                 <div>
                    <p className="text-sm font-black text-white uppercase tracking-widest">Voice Command</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Semantic Logic Sync</p>
                 </div>
              </div>
           </div>
        </CardContent>
        <CardFooter className="p-10 border-t border-cyan-800 bg-slate-950/50 flex justify-center">
           <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-black h-12 px-12 rounded-2xl uppercase tracking-widest shadow-2xl">
             Calibrate Handshake
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
