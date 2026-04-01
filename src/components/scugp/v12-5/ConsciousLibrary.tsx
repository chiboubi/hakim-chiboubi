"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Search, Sparkles, FileText, Download, Share2, History, Database, Microscope, Layers, Tags, BookCheck, Network, MessageSquare, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const ConsciousLibrary = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-2 border-blue-500/20 text-white shadow-2xl rounded-[3rem] overflow-hidden">
            <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between px-10 py-8">
              <div>
                <CardTitle className="text-xl font-black uppercase tracking-[0.3em] text-blue-400 flex items-center gap-4">
                  <GraduationCap className="h-6 w-6" /> Conscious Hyper-Library 12.5
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2">Self-Structuring Knowledge World & 4D Narrative Assistant</CardDescription>
              </div>
              <div className="relative w-80">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
                <Input 
                  placeholder="Dialogue with Project Memory..." 
                  className="pl-12 bg-black/50 border-slate-800 h-12 text-xs focus:border-blue-500 rounded-2xl"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
              <div className="h-80 bg-black/40 rounded-[3rem] border border-slate-800 relative flex items-center justify-center overflow-hidden group">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:30px:30px]" />
                 <div className="relative z-10 flex flex-col items-center gap-6">
                    <Network className="h-20 w-20 text-blue-500/50 animate-pulse" />
                    <p className="text-[12px] font-mono text-blue-400 uppercase tracking-[0.6em] font-black text-center px-12">Universal Knowledge Mesh Synthesizing Planetary Best Practices</p>
                    <div className="flex gap-6">
                       <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-500 uppercase px-4 py-1">ISO 14083 REGEN</Badge>
                       <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-500 uppercase px-4 py-1">WEB 4.0 PROTOCOL</Badge>
                       <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-500 uppercase px-4 py-1">BIO-TECH G-12</Badge>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-blue-500/5 rounded-[2.5rem] border border-blue-500/20 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Sparkles className="h-20 w-20 text-blue-400" /></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
                  <p className="text-[11px] font-black uppercase text-blue-400 tracking-widest">Conscious Narrative Engine</p>
                </div>
                <p className="text-base text-slate-400 italic leading-relaxed relative z-10">
                  "Director, I have synthesized 14,200 data points from the Global Grid. The history of the 'Arctic Deepwater' phase has been reconstructed as a 4D narrative. Expert citation: [Planetary Regeneration Standard v12]. I recommend inheriting the 'Thermal Sink' practice from node ALG-03."
                </p>
                <div className="mt-8 flex gap-4 relative z-10">
                   <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-12 px-10 rounded-[1.5rem] shadow-2xl tracking-widest">Watch 4D Project Film</Button>
                   <Button variant="outline" className="border-slate-700 text-[10px] font-black uppercase h-12 px-10 rounded-[1.5rem] hover:bg-slate-800">Review Source Mesh</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-950 border-slate-800 shadow-2xl overflow-hidden h-full flex flex-col rounded-[3rem]">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800 px-10 py-8">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-3">
                <Microscope className="h-5 w-5" /> Global Expert Dialogue
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex-1 space-y-6">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-tighter">Recommended Expert Nodes:</p>
              <div className="space-y-4">
                {[
                  { title: "Quantum Logisitcs Expert", tag: "TECH_MESH", icon: Database },
                  { title: "Ethical Governance AI", tag: "SMART_DEMO", icon: Gavel },
                  { title: "Regen Impact Analyst", tag: "BIO_GRID", icon: TreePine }
                ].map((rec, i) => (
                  <div key={i} className="p-4 bg-black/40 rounded-2xl border-l-4 border-l-blue-500 text-[11px] group hover:bg-black/60 transition-all cursor-pointer flex justify-between items-center">
                    <div>
                      <span className="text-white font-bold block mb-1">{rec.title}</span>
                      <Badge variant="ghost" className="text-[8px] p-0 text-slate-500 font-mono">{rec.tag}</Badge>
                    </div>
                    <rec.icon className="h-4 w-4 text-slate-700 group-hover:text-blue-400 transition-colors" />
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-800 my-6" />
              <p className="text-[10px] text-slate-500 italic text-center px-4">"The Hyper-Library now reasons across 14 planetary nodes, providing expert-level dialogue synchronized with your BCI profile."</p>
            </CardContent>
            <CardFooter className="p-8 border-t border-slate-800">
               <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-slate-600 hover:text-white tracking-widest">Explore Conscious World Map</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { Gavel, TreePine } from "lucide-react";
