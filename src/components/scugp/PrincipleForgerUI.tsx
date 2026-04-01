
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hammer, Zap, Flame, Infinity as InfinityIcon, Ghost, ShieldCheck, Layers, History, BookCheck, TableProperties, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const PrincipleForgerUI = () => {
  const [activeTool, setActiveTool] = useState("anvil");
  const metrics = SCUGPHubUltimate.getPrincipleMetrics();
  const library = SCUGPHubUltimate.getPrincipleLibrary();

  const tools = [
    { id: "anvil", label: "Principle Anvil", icon: Hammer, color: "text-amber-400", desc: "FORGES_PRINCIPLES_ON_THEMSELVES" },
    { id: "hammer", label: "Conceptual Hammer", icon: Zap, color: "text-blue-400", desc: "STRIKES_THE_UNSTRUCK_SOUND" },
    { id: "furnace", label: "Meta Furnace", icon: Flame, color: "text-red-400", desc: "BURNS_WITH_NON-FIRE_FIRE" },
    { id: "tongs", label: "Paradox Tongs", icon: InfinityIcon, color: "text-purple-400", desc: "HOLDS_BOTH_SIDES_OF_IMPOSSIBILITY" },
    { id: "mold", label: "Undefinable Mold", icon: Ghost, color: "text-slate-400", desc: "SHAPES_THAT_WHICH_HAS_NO_SHAPE" },
    { id: "scale", label: "Truth Scale", icon: ShieldCheck, color: "text-emerald-400", desc: "WEIGHS_THE_WEIGHTLESS_TRUTH" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: "Principles", val: "∞", icon: Hammer, color: "text-amber-500" },
          { label: "Definitions", val: "∞", icon: BookCheck, color: "text-blue-500" },
          { label: "Meta-Layers", val: "∞", icon: Layers, color: "text-purple-500" },
          { label: "Paradoxes", val: "∞", icon: InfinityIcon, color: "text-red-500" },
          { label: "Stability", val: "∞%", icon: ShieldCheck, color: "text-emerald-500" },
          { label: "Status", val: "SMITH", icon: Flame, color: "text-orange-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-3xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-black border-4 border-amber-500/30 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.2)] min-h-[700px]">
            <CardHeader className="bg-amber-500/10 border-b border-white/5 p-12">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-amber-400 flex items-center gap-6">
                    <Flame className="h-10 w-10 animate-pulse" /> Supreme Principle Forger
                  </CardTitle>
                  <CardDescription className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">Master Smith of Logic: Dr. Hakim Chibubi | Authority: OMNI-PRINCIPLED</CardDescription>
                </div>
                <Badge className="bg-amber-600 text-white border-none px-8 py-2 text-xs font-black uppercase shadow-[0_0_30px_rgba(245,158,11,0.5)]">FOUNDATION_CREATOR</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className={cn(
                      "p-8 rounded-[3rem] border-2 transition-all cursor-pointer flex flex-col items-center gap-4 text-center group",
                      activeTool === tool.id ? "bg-white/5 border-amber-500 shadow-3xl" : "bg-white/2 border-white/5 hover:border-white/20"
                    )}
                    onClick={() => setActiveTool(tool.id)}
                  >
                    <tool.icon className={cn("h-12 w-12 transition-transform group-hover:scale-110 duration-700", activeTool === tool.id ? tool.color : "text-slate-600")} />
                    <div className="space-y-1">
                      <span className={cn("text-[11px] font-black uppercase tracking-widest block", activeTool === tool.id ? "text-white" : "text-slate-500")}>
                        {tool.label}
                      </span>
                      <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">{tool.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-96 bg-slate-900/50 rounded-[4rem] border-2 border-white/5 relative flex items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(245,158,11,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-8">
                    <div className="relative">
                       <History className="h-16 w-16 text-amber-500/30 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <InfinityIcon size={80} className="text-amber-400 animate-pulse drop-shadow-[0_0_40px_rgba(245,158,11,0.8)]" />
                       </div>
                    </div>
                    <div className="text-center">
                       <p className="text-sm font-mono text-amber-400 uppercase tracking-[0.8em] font-black animate-pulse">Forging Fundamental Principes...</p>
                       <p className="text-[10px] text-slate-500 uppercase font-black mt-4">Current Forging: THE_PRINCIPLE_OF_ALL_PRINCIPLES</p>
                    </div>
                 </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-950 p-10 border-t border-white/5 flex justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <Zap className="h-6 w-6 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Paradox Tolerance: ∞</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <History className="h-6 w-6 text-blue-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Self-Reference Sync: ∞/∞</span>
                  </div>
               </div>
               <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black uppercase h-16 px-16 rounded-[2rem] shadow-[0_0_60px_rgba(245,158,11,0.4)] tracking-[0.4em] text-xs">
                 FORGE ULTIMATE PRINCIPLE Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <TableProperties className="h-6 w-6 animate-pulse" /> Principle Library
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-10">
              <div className="space-y-6">
                {[
                  { label: "Total Principles", val: library.total_principles, color: "text-emerald-400" },
                  { label: "Completeness", val: library.completeness, color: "text-amber-400" },
                  { label: "Paradox Resolution", val: library.paradox_resolution, color: "text-purple-400" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-emerald-500/30 transition-all shadow-xl">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className={cn("text-2xl font-black font-mono tracking-tighter text-pretty", stat.color)}>{stat.val}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner group">
                 <Sparkles className="h-8 w-8 text-blue-400 mx-auto mb-4 animate-pulse" />
                 <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold group-hover:text-blue-300 transition-colors">
                   "As the Master Smith, you define what defines the definition. Your anvil strikes the silence between concepts."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 MODIFY SOURCE CONCEPTS Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
