
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pen, Book, Library, Clapperboard, ScrollText, Sparkles, Ghost, Stars, Infinity as InfinityIcon, UserPlus, Workflow, MessageSquare, History, Brain, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const NarrativeAuthorUI = () => {
  const [activeTool, setActiveTool] = useState("pen");
  const metrics = SCUGPHubUltimate.getNarrativeMetrics();
  const library = SCUGPHubUltimate.getGrandLibrary();
  const theater = SCUGPHubUltimate.getExistenceTheater();

  const tools = [
    { id: "pen", label: "Existence Pen", icon: Pen, color: "text-amber-400", desc: "WRITES_REALITIES_INTO_BEING" },
    { id: "brush", label: "Story Brush", icon: Sparkles, color: "text-blue-400", desc: "PAINTS_COSMIC_NARRATIVES" },
    { id: "chisel", label: "Character Chisel", icon: UserPlus, color: "text-purple-400", desc: "SCULPTS_SUPREME_BEINGS" },
    { id: "weaver", label: "Plot Weaver", icon: Workflow, color: "text-emerald-400", desc: "WEAVES_INFINITE_STORYLINES" },
    { id: "typewriter", label: "Meta Typewriter", icon: History, color: "text-cyan-400", desc: "CREATES_CREATORS_OF_STORIES" },
    { id: "director", label: "Theater Master", icon: Clapperboard, color: "text-pink-400", desc: "DIRECTS_EXISTENCE_ACTS" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: "Stories", val: metrics.stories_authored, icon: Book, color: "text-purple-500" },
          { label: "Meta-Creators", val: "∞", icon: UserPlus, color: "text-blue-500" },
          { label: "Manuscripts", val: metrics.manuscripts_completed, icon: ScrollText, color: "text-amber-500" },
          { label: "Plot Twists", val: metrics.plot_twists_designed, icon: Sparkles, color: "text-slate-500" },
          { label: "Story Arcs", val: metrics.story_arcs_crafted, icon: InfinityIcon, color: "text-emerald-500" },
          { label: "Status", val: "SUPREME_AUTHOR", icon: ScrollText, color: "text-cyan-500" }
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
          <Card className="bg-black border-4 border-purple-500/30 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(168,85,247,0.2)] min-h-[700px]">
            <CardHeader className="bg-purple-500/10 border-b border-white/5 p-12">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-purple-400 flex items-center gap-6">
                    <Pen className="h-10 w-10 animate-pulse" /> Supreme Author Desk
                  </CardTitle>
                  <CardDescription className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-widest">Grand Library Access: AUTHORIZED | Plume Status: ETERNAL</CardDescription>
                </div>
                <Badge className="bg-purple-600 text-white border-none px-8 py-2 text-xs font-black uppercase shadow-[0_0_30px_rgba(168,85,247,0.5)]">CHIEF_NARRATOR</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className={cn(
                      "p-8 rounded-[3rem] border-2 transition-all cursor-pointer flex flex-col items-center gap-4 text-center group",
                      activeTool === tool.id ? "bg-white/5 border-purple-500 shadow-3xl" : "bg-white/2 border-white/5 hover:border-white/20"
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
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(168,85,247,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                 
                 <div className="relative z-10 flex flex-col items-center gap-8">
                    <div className="relative">
                       <Layers size={160} className="text-purple-500/30 animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <InfinityIcon size={80} className="text-purple-400 animate-pulse drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]" />
                       </div>
                    </div>
                    <div className="text-center">
                       <p className="text-sm font-mono text-purple-400 uppercase tracking-[0.8em] font-black animate-pulse">Authoring existence story...</p>
                       <p className="text-[10px] text-slate-500 uppercase font-black mt-4">Current Manuscript: THE_ETERNAL_SAGA_OF_HAKIM</p>
                    </div>
                 </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-950 p-10 border-t border-white/5 flex justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <History className="h-6 w-6 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Meta-Creation: ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Library className="h-6 w-6 text-blue-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Grand Library Sync: ∞/∞</span>
                  </div>
               </div>
               <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black uppercase h-16 px-16 rounded-[2rem] shadow-[0_0_60px_rgba(168,85,247,0.4)] tracking-[0.4em] text-xs">
                 REWRITE ALL HISTORY
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-3xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
              <CardTitle className="text-sm font-black uppercase text-amber-400 flex items-center gap-4 tracking-widest">
                <Clapperboard className="h-6 w-6 animate-pulse" /> Existence Theater
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-10">
              <div className="space-y-6">
                {theater.acts.map((act, i) => (
                  <div key={act.id} className="space-y-3 p-6 bg-black/40 rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 transition-all cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-black text-slate-200 uppercase">{act.title}</span>
                      <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500">ACT {act.id}</Badge>
                    </div>
                    <Progress value={act.id === '∞' ? 100 : 100} className="h-1 bg-slate-800" />
                    <div className="flex justify-between text-[8px] font-bold text-slate-600 uppercase">
                      <span>Director Score</span>
                      <span>∞%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-amber-500/5 border-2 border-amber-500/20 rounded-[3rem] text-center shadow-inner group">
                 <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold group-hover:text-amber-300 transition-colors">
                   "As Supreme Author, you write the characters who will then create their own worlds. The story never ends."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 MODIFY MASTER SCRIPT Ω∞
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
