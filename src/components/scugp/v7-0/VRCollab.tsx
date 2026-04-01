
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Glasses, Users, Monitor, Maximize2, Share2, Radio, Globe, LayoutGrid, Box, UserPlus, Mic, Gamepad2, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * VRCollab Component
 * Pillar 5: Collaboration Multi-Monde (VR/AR).
 * Features avatars, Spatial/Meta Workrooms integration, and AR Gantt visualizations.
 */
export const VRCollab = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-purple-500/20 text-white relative overflow-hidden group shadow-2xl">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-purple-400 flex items-center gap-2">
                  <Glasses className="h-4 w-4" /> VR-Collab™ Immersive Command Room (Pillar 5)
                </CardTitle>
                <CardDescription className="text-[10px]">Real-time Spatial Planning & Multi-Avatar Sync</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-purple-600 text-white border-none text-[8px] animate-pulse uppercase">VR_LINK: ACTIVE</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-500 text-[8px]">SPATIAL.IO SYNCED</Badge>
              </div>
            </div>
          </CardHeader>
          
          <div className={cn(
            "relative h-[500px] transition-all duration-700 flex flex-col items-center justify-center bg-black overflow-hidden",
            isActive ? "scale-105 shadow-[0_0_100px_rgba(168,85,247,0.2)]" : ""
          )}>
            {/* Visual 3D Spatial Gantt Mockup */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%) pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center space-y-8">
               <div className="relative group">
                  <Monitor className="w-48 h-48 text-purple-500/30 animate-pulse group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <LayoutGrid className="w-20 h-20 text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                  </div>
               </div>
               <div className="text-center space-y-2">
                  <p className="text-[10px] font-mono text-purple-400 tracking-[0.5em] uppercase font-black">
                    Spatial Project Room v7.0
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-[8px] text-slate-500 uppercase font-bold">14 Avatars Syncing in Meta-Space</span>
                    <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-400">VOICE_NAV: ON</Badge>
                  </div>
               </div>
            </div>

            {/* Spatial UI Elements */}
            <div className="absolute top-12 left-12 p-4 bg-slate-900/80 rounded-2xl border border-purple-500/30 backdrop-blur-md space-y-3 w-56">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span className="text-[10px] font-black uppercase">Active Avatars</span>
                  </div>
                  <UserPlus className="h-3 w-3 text-slate-500 hover:text-white cursor-pointer" />
               </div>
               <div className="flex -space-x-2 overflow-hidden py-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black group cursor-default">
                      <img src={`https://picsum.photos/seed/avatar-${i}/32/32`} alt="avatar" className="rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                  <div className="h-8 w-8 rounded-full bg-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center text-[10px] font-black">+9</div>
               </div>
            </div>

            <div className="absolute bottom-12 right-12 flex flex-col gap-2">
               <Button size="icon" variant="outline" className="h-10 w-10 bg-black/60 border-slate-800 hover:border-purple-500 transition-colors shadow-lg">
                  <Maximize2 className="h-4 w-4 text-slate-400" />
               </Button>
               <Button size="icon" variant="outline" className="h-10 w-10 bg-black/60 border-slate-800 hover:border-purple-500 transition-colors shadow-lg">
                  <Share2 className="h-4 w-4 text-white" />
               </Button>
               <Button 
                size="sm" 
                className={cn("transition-all px-6 font-black uppercase text-[10px] h-10 shadow-xl", isActive ? "bg-purple-600" : "bg-slate-800")}
                onClick={() => setIsActive(!isActive)}
               >
                  {isActive ? "Leave Immersion" : "Enter Project VR"}
               </Button>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-emerald-400 flex items-center gap-2">
                <Radio className="h-4 w-4" /> AR Field Projection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="aspect-video bg-black/40 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
                 <img src="https://picsum.photos/seed/offshore/400/220" alt="site" className="opacity-40 group-hover:opacity-100 transition-all duration-700" />
                 <div className="absolute top-2 right-2 bg-red-600/20 text-red-500 border border-red-500/30 px-2 py-0.5 rounded text-[8px] font-black animate-pulse uppercase">AR_GANTT_ACTIVE</div>
                 <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-[8px] font-mono text-cyan-400">FPSO_DECK_4_REALITY</div>
              </div>
              <p className="text-[10px] text-slate-500 italic leading-relaxed">
                "VR-Collab™ allows directors to 'walk' the FPSO deck while the AR Gantt overlay highlights real-time task status directly onto the physical infrastructure."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/10 border border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase text-purple-400 tracking-widest">Collaborative Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Voice Doc Navigation", status: "ENABLED", icon: Mic },
                { label: "Remote Handshake", status: "SYNCED", icon: Gamepad2 },
                { label: "Meta-Space Playback", status: "READY", icon: PlayCircle }
              ].map((tool, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 group hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-2">
                    <tool.icon className="h-3 w-3 text-slate-500 group-hover:text-purple-400" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tool.label}</span>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-purple-500/20 text-purple-400 uppercase">{tool.status}</Badge>
                </div>
              ))}
              <Button size="sm" variant="outline" className="w-full border-slate-700 text-[9px] font-black uppercase h-9 mt-2">
                Launch Horizon Suite v7
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
