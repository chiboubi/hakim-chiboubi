"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Boxes, Maximize2, Share2, Radio, Globe, LayoutGrid, Box, UserPlus, Mic, Gamepad2, PlayCircle, Camera, Target, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export const MetaverseProjectTwin = () => {
  const [isImmersive, setIsImmersive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/20 text-white relative overflow-hidden group min-h-[550px] shadow-2xl">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2 tracking-[0.2em]">
                  <Boxes className="h-4 w-4" /> Metaverse Project Room v8.5
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Spatial Collaboration & Organization Digital Twins</CardDescription>
              </div>
              <Badge className="bg-cyan-600 text-white border-none text-[8px] animate-pulse uppercase tracking-widest">META_LINK: ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[450px] transition-all duration-1000 flex flex-col items-center justify-center bg-black overflow-hidden",
            isImmersive ? "scale-105 shadow-[0_0_100px_rgba(6,182,212,0.3)]" : ""
          )}>
            {/* Visual Metaverse Mockup */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%) pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center space-y-8">
               <div className="w-64 h-64 border-2 border-cyan-500/30 rounded-full flex items-center justify-center bg-cyan-500/5 backdrop-blur-md relative group/box">
                  <Box size={120} className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-spin-slow" />
                  <div className="absolute -top-4 bg-black/80 px-3 py-1 rounded border border-cyan-500/50 text-[10px] font-black uppercase">FPSO_TWIN_D3</div>
               </div>
               
               <div className="bg-black/60 p-4 rounded-2xl border border-cyan-500/20 backdrop-blur-md w-[450px] text-center">
                  <p className="text-xs text-slate-200 font-medium leading-relaxed italic">
                    "Welcome to the Singularité Metaverse. 14 organizational nodes are currently synchronized. You can interact with the Digital Twin of the 'Offshore Drilling' process in spatial mode."
                  </p>
               </div>
            </div>

            <div className="absolute bottom-8 left-8 flex gap-2">
               <div className="p-3 bg-black/60 rounded-xl border border-slate-800 backdrop-blur-md flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Team Avatars: 12 Online</span>
               </div>
            </div>

            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
               <Button size="icon" variant="outline" className="h-10 w-10 bg-black/60 border-slate-800 hover:border-cyan-500 transition-all rounded-full shadow-xl">
                  <Camera className="h-4 w-4 text-slate-400" />
               </Button>
               <Button 
                size="sm" 
                className={cn("transition-all px-8 font-black uppercase text-[10px] h-10 shadow-[0_0_20px_rgba(6,182,212,0.4)]", isImmersive ? "bg-cyan-600" : "bg-slate-800")}
                onClick={() => setIsImmersive(!isImmersive)}
               >
                  {isImmersive ? "Exit Metaverse" : "Enter Spatial Room"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-2">
                <Layers className="h-4 w-4" /> Gamified Onboarding
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl space-y-3 text-center">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Next Training Step</p>
                <p className="text-sm font-black text-white uppercase">Virtual HSE Safety Walk</p>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[72%]" />
                </div>
                <p className="text-[8px] text-purple-400 font-mono">72% Mastered</p>
              </div>
              <Button size="sm" variant="outline" className="w-full h-8 text-[8px] font-black uppercase border-slate-700">Launch VR Module</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center gap-2 tracking-widest">
                <Target className="h-4 w-4" /> Interactive Org Twin
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: "Internal IT Node", val: "STABLE", icon: LayoutGrid },
                { label: "EPC Partner Node", val: "SYNCED", icon: Share2 },
                { label: "Regulatory Hub", val: "LOCKED", icon: Globe }
              ].map((layer, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800 group hover:border-cyan-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-2">
                    <layer.icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400" />
                    <span className="text-[9px] font-black uppercase text-slate-400">{layer.label}</span>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-cyan-500/20 text-cyan-400">{layer.val}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
