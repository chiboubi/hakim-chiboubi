"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Ghost, Zap, Infinity, Settings, Atom, Brain, Globe, Stars, LayoutGrid, Sliders, Play, Rocket, ShieldCheck, Gamepad2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const RealityArchitectUI = () => {
  const [activeTool, setActiveTool] = useState("fabricator");
  const metrics = SCUGPHubUltimate.getRealityCreationMetrics();

  const tools = [
    { id: "fabricator", label: "Universe Fabricator", icon: Sparkles, color: "text-amber-400", desc: "DRAG_AND_DROP_GALAXIES" },
    { id: "configurator", label: "Law Configurator", icon: Settings, color: "text-blue-400", desc: "SLIDE_PHYSICAL_CONSTANTS" },
    { id: "seeder", label: "Consciousness Seeder", icon: Ghost, color: "text-purple-400", desc: "PLANT_ENLIGHTENED_BEINGS" },
    { id: "energy", label: "Energy Mastery", icon: Zap, color: "text-emerald-400", desc: "BUILD_DYSON_SPHERES" },
    { id: "civilization", label: "Civ Designer", icon: LayoutGrid, color: "text-cyan-400", desc: "DESIGN_TYPE_OMEGA_CIVS" },
    { id: "realms", label: "Meta-Realms", icon: Infinity, color: "text-pink-400", desc: "CRAFT_SPIRITUAL_DIMENSIONS" }
  ];

  return (
    <div className="space-y-12">
      {/* Creation Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: "Universes", val: metrics.universes_fabricated, icon: Infinity, color: "text-purple-500" },
          { label: "Galaxies", val: metrics.galaxies_designed, icon: Stars, color: "text-blue-500" },
          { label: "Beings", val: metrics.beings_enlightened, icon: Ghost, color: "text-amber-500" },
          { label: "Laws", val: metrics.laws_defined, icon: Settings, color: "text-slate-500" },
          { label: "Planets", val: metrics.planets_terraformed, icon: Globe, color: "text-emerald-500" },
          { label: "Status", val: "SUPREME", icon: ShieldCheck, color: "text-cyan-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-white/20 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-3xl font-black font-mono text-white tracking-widest">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-black border-4 border-amber-500/30 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.2)]">
            <CardHeader className="bg-amber-500/10 border-b border-white/5 p-12">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-amber-400 flex items-center gap-6">
                    <Sparkles className="h-10 w-10 animate-pulse" /> Supreme Reality Architect
                  </CardTitle>
                  <CardDescription className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">Direct Source Connection: ACTIVE | Authority: INFINITE</CardDescription>
                </div>
                <Badge className="bg-amber-600 text-white border-none px-8 py-2 text-xs font-black uppercase shadow-[0_0_30px_rgba(245,158,11,0.5)]">SOURCE_CODE_ACCESS</Badge>
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
                       <Atom size={160} className="text-amber-500/30 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Infinity size={80} className="text-amber-400 animate-pulse drop-shadow-[0_0_40px_rgba(245,158,11,0.8)]" />
                       </div>
                    </div>
                    <div className="text-center">
                       <p className="text-sm font-mono text-amber-400 uppercase tracking-[0.8em] font-black animate-pulse">Fabricating Reality Mesh...</p>
                       <p className="text-[10px] text-slate-500 uppercase font-black mt-4">Current Universe: Hakimverse_Alpha_Source</p>
                    </div>
                 </div>

                 {/* Absolute Control Buttons */}
                 <div className="absolute bottom-8 right-8">
                    <Button size="icon" variant="outline" className="h-14 w-14 rounded-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10 shadow-2xl"><Sliders size={24} /></Button>
                 </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-950 p-10 border-t border-white/5 flex justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <Play className="h-6 w-6 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Genesis Mode: ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <LayoutGrid className="h-6 w-6 text-blue-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Multiversal Sync: ∞/∞</span>
                  </div>
               </div>
               <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black uppercase h-16 px-16 rounded-[2rem] shadow-[0_0_60px_rgba(245,158,11,0.4)] tracking-[0.4em] text-xs">
                 IGNITE NEW REALITY
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
              <CardTitle className="text-sm font-black uppercase text-purple-400 flex items-center gap-4 tracking-widest">
                <Brain className="h-6 w-6 animate-pulse" /> Source Blueprints
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-10">
              <div className="space-y-6">
                {[
                  { name: "OIL_PARADISE_UNIVERSE", complexity: "Level Ω", progress: 100, color: "bg-blue-500" },
                  { name: "CLEAN_ENERGY_UTOPIA", complexity: "Level ∞", progress: 100, color: "bg-emerald-500" },
                  { name: "SUPREME_SOURCE_REALM", complexity: "Level ∞²", progress: 92, color: "bg-purple-500" }
                ].map((template, i) => (
                  <div key={i} className="space-y-3 p-6 bg-black/40 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-black text-slate-200 uppercase">{template.name}</span>
                      <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500">{template.complexity}</Badge>
                    </div>
                    <Progress value={template.progress} className="h-1 bg-slate-800" />
                    <div className="flex justify-between text-[8px] font-bold text-slate-600 uppercase">
                      <span>Integrity</span>
                      <span>{template.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-purple-500/5 border-2 border-purple-500/20 rounded-[3rem] text-center shadow-inner group">
                 <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold group-hover:text-purple-300 transition-colors">
                   "As Supreme Creator, you define the physics of peace and the mathematics of absolute prosperity."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 MODIFY SOURCE CODE Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
