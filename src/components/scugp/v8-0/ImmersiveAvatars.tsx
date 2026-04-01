"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Glasses, Users, UserPlus, Mic, Maximize2, Share2, Radio, PlayCircle, Camera, Target, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

export const ImmersiveAvatars = () => {
  const [isImmersive, setIsImmersive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-cyan-500/20 text-white relative overflow-hidden group min-h-[550px]">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2 tracking-[0.2em]">
                  <Video className="h-4 w-4" /> AI Avatar Immersive Command Room
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold text-slate-500">HeyGen & Synthesia Realistic AI Avatars Integration</CardDescription>
              </div>
              <Badge className="bg-cyan-600 text-white border-none text-[8px] animate-pulse uppercase tracking-widest">XR_LINK: ACTIVE</Badge>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[450px] transition-all duration-1000 flex flex-col items-center justify-center bg-black overflow-hidden",
            isImmersive ? "scale-105 shadow-[0_0_100px_rgba(6,182,212,0.3)]" : ""
          )}>
            {/* Simulation of a 3D Avatar space */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%) pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center space-y-6">
               <div className="w-64 h-64 rounded-full border-4 border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 backdrop-blur-md relative overflow-hidden group/avatar">
                  <img 
                    src="https://picsum.photos/seed/avatar-8/400/400" 
                    alt="AI Avatar" 
                    className="w-full h-full object-cover opacity-80 group-hover/avatar:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-[10px] font-black uppercase text-white">ReadyPlayerMe v8.0</p>
                    <p className="text-[8px] text-cyan-400 font-mono">STATUS: SPEAKING</p>
                  </div>
               </div>
               
               <div className="bg-black/60 p-4 rounded-2xl border border-cyan-500/20 backdrop-blur-md w-[400px] text-center">
                  <p className="text-xs text-slate-200 font-medium leading-relaxed italic">
                    "Welcome to the 8.0 Kickoff. I am your ACI-Avatar. I have already synchronized the project DNA with all 14 organization nodes. Click below to enter the VR Space."
                  </p>
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
                  {isImmersive ? "Exit Mixed Reality" : "Enter Project VR"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center gap-2">
                <Users className="h-4 w-4" /> Virtual Team Sync
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex -space-x-3 overflow-hidden py-2 justify-center">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-black group cursor-pointer hover:z-10 transition-all">
                    <img src={`https://picsum.photos/seed/rp-${i}/40/40`} alt="avatar" className="rounded-full opacity-80 group-hover:opacity-100" />
                  </div>
                ))}
                <div className="h-10 w-10 rounded-full bg-cyan-600/20 border-2 border-cyan-500/30 flex items-center justify-center text-[10px] font-black text-cyan-400">+12</div>
              </div>
              <div className="p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest flex items-center justify-center gap-2">
                  <Mic className="h-3 w-3 text-cyan-500 animate-pulse" /> Real-time Voice Link: ACTIVE
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2 tracking-widest">
                <Boxes className="h-4 w-4 text-purple-500" /> Layer Explorer
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: "Strategic Overview", val: "VR_ENABLED", icon: Target },
                { label: "BIM 3D Model", val: "ACTIVE_SYNC", icon: Boxes },
                { label: "GIS Data Mesh", val: "HOLOGRAPHIC", icon: Radio }
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
