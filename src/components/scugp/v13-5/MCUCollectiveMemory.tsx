"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Search, Sparkles, FileText, Download, Share2, History, Database, Microscope, Layers, Tags, BookCheck, Network, MessageSquare, PlayCircle, TreePine, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export const MCUCollectiveMemory = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-2 border-blue-500/20 text-white shadow-2xl rounded-[4rem] overflow-hidden">
            <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between px-12 py-10">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-blue-400 flex items-center gap-6">
                  <GraduationCap className="h-8 w-8" /> MCU Collective Memory 13.5
                </CardTitle>
                <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2 tracking-widest">Universal Knowledge Mesh & 20-Year Predictive Forecasting</CardDescription>
              </div>
              <div className="relative w-96">
                <Search className="absolute left-4 top-4.5 h-6 w-6 text-slate-500" />
                <Input 
                  placeholder="Dialogue with Civilization Memory..." 
                  className="pl-14 bg-black/50 border-slate-800 h-14 text-sm focus:border-blue-500 rounded-[2rem] tracking-tight"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="h-96 bg-black/40 rounded-[4rem] border border-slate-800 relative flex items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                 <div className="relative z-10 flex flex-col items-center gap-8">
                    <Network className="h-32 w-32 text-blue-500/50 animate-pulse" />
                    <p className="text-[14px] font-mono text-blue-400 uppercase tracking-[0.8em] font-black text-center px-20 leading-relaxed text-balance">Synthesizing World Sciences, Patents {"&"} Global Best Practices in 0.02ms</p>
                    <div className="flex gap-8">
                       <Badge variant="outline" className="text-[11px] border-slate-700 text-slate-500 uppercase px-6 py-1.5 tracking-widest">ISO 14083 OMNI</Badge>
                       <Badge variant="outline" className="text-[11px] border-slate-700 text-slate-500 uppercase px-6 py-1.5 tracking-widest">WEB 4.0 PROTOCOL</Badge>
                       <Badge variant="outline" className="text-[11px] border-slate-700 text-slate-500 uppercase px-6 py-1.5 tracking-widest">QUANTUM_MEM_SEAL</Badge>
                    </div>
                 </div>
              </div>

              <div className="p-10 bg-blue-500/5 rounded-[3.5rem] border border-blue-500/20 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5"><Sparkles className="h-32 w-32 text-blue-400" /></div>
                <div className="flex items-center gap-6 mb-6 relative z-10">
                  <Sparkles className="h-8 w-8 text-blue-400 animate-pulse" />
                  <p className="text-[14px] font-black uppercase text-blue-400 tracking-[0.3em]">MCU Civilization Narrative</p>
                </div>
                <p className="text-xl text-slate-400 italic leading-relaxed relative z-10 px-4">
                  "Director, I have analyzed 142,000,000 scientific publications. For the 'Arctic Deep' mission, I have reconstructed a 5D temporal projection of the next 20 years. Recommended mutation: Inherit 'Cryo-Regen' sequence from Algerian Solar Node v12. Probabilistic ROI: +142%."
                </p>
                <div className="mt-12 flex gap-6 relative z-10">
                   <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-[11px] font-black uppercase h-16 px-14 rounded-[2rem] shadow-3xl tracking-[0.3em]">Watch 5D Project Film</Button>
                   <Button variant="outline" className="border-slate-700 text-[11px] font-black uppercase h-16 px-14 rounded-[2rem] hover:bg-slate-900 tracking-[0.3em]">Access Collective Mesh</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-950 border-slate-800 shadow-2xl overflow-hidden h-full flex flex-col rounded-[4rem]">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800 px-12 py-10">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <Microscope className="h-6 w-6" /> Narrative Historian AI
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
              <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em] border-b border-slate-800 pb-4">Recommended Expert Dialogue Nodes:</p>
              <div className="space-y-6">
                {[
                  { title: "Quantum Ethics Seer", tag: "CIVILIZATION_MESH", icon: Database },
                  { title: "Planetary Regen Expert", tag: "GAIA_GRID", icon: TreePine },
                  { title: "20-Year Trend Auditor", tag: "MCU_CORE", icon: BarChart3 }
                ].map((rec, i) => (
                  <div key={i} className="p-6 bg-black/40 rounded-[2rem] border-l-4 border-l-blue-500 text-[12px] group hover:bg-black/60 transition-all cursor-pointer flex justify-between items-center shadow-lg">
                    <div>
                      <span className="text-white font-bold block mb-2 tracking-tight">{rec.title}</span>
                      <Badge variant="ghost" className="text-[9px] p-0 text-slate-500 font-mono tracking-widest">{rec.tag}</Badge>
                    </div>
                    <rec.icon className="h-6 w-6 text-slate-700 group-hover:text-blue-400 transition-colors" />
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-800 my-10" />
              <p className="text-[11px] text-slate-500 italic text-center px-6 leading-relaxed">"The MCU now reasons across the totality of human knowledge, providing omniscient dialogue synchronized with your neural profile."</p>
            </CardContent>
            <CardFooter className="p-10 border-t border-slate-800">
               <Button variant="ghost" className="w-full text-[11px] font-black uppercase text-slate-600 hover:text-white tracking-[0.5em]">Explore Universal World Map</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
