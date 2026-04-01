"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Search, Sparkles, FileText, Download, Share2, History, Database, Microscope, Layers, Tags, BookCheck, Network } from "lucide-react";
import { cn } from "@/lib/utils";

export const EvolvingKnowledge = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-2 border-blue-500/20 text-white shadow-2xl">
            <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-blue-400 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Evolving Knowledge Graph v8.5
                </CardTitle>
                <CardDescription className="text-[10px]">Self-Enriching Library with AI RAG & Real-time Citations</CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input 
                  placeholder="Ask Expert AI Agent..." 
                  className="pl-9 bg-black/50 border-slate-800 h-9 text-[11px] focus:border-blue-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="h-64 bg-black/40 rounded-[2rem] border border-slate-800 relative flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:25px:25px]" />
                 <div className="relative z-10 flex flex-col items-center gap-4">
                    <Network className="h-16 w-16 text-blue-500/50 animate-pulse" />
                    <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em] font-black">Neural Knowledge Mesh Active</p>
                    <div className="flex gap-4">
                       <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500 uppercase">ISO 15926</Badge>
                       <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500 uppercase">PMBoK Guide v7</Badge>
                       <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500 uppercase">GRI Standards</Badge>
                    </div>
                 </div>
              </div>

              <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Expert AI Synthesis Assistant</p>
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  "I have updated the 'Cryogenic Logistics Playbook' by cross-referencing recent REX entries from Project ARC-2026. 
                  Citation detected: [ISO 14083:2023 - Transport GHG Emissions]. New practice inherited into project DNA."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <BookCheck className="h-4 w-4" /> Academic & Industrial Citations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: "ISO 14083 Compliance Guide", val: "SCUGP_SYNCED", status: "VERIFIED" },
                { label: "Deepwater Drilling Standard", val: "API_RP_96", status: "VALID" },
                { label: "Net Zero Project Steering", val: "OGCI_CORE", status: "ANCHORED" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 bg-black/20 rounded-xl border border-slate-800 group hover:border-blue-500/30 transition-all">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-300 uppercase">{item.label}</span>
                    <span className="text-[8px] font-mono text-slate-600">{item.val}</span>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-400">{item.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-950 border-slate-800 shadow-xl overflow-hidden h-full flex flex-col">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Microscope className="h-4 w-4" /> Auto-Discovery Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-1 space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Recommended for singularité drift:</p>
              <div className="space-y-3">
                {[
                  { title: "Zinia Adaptive Workflow", tag: "MANAGEMENT" },
                  { title: "Cryo-Shield Methodology", tag: "TECHNICAL" }
                ].map((rec, i) => (
                  <div key={i} className="p-3 bg-black/40 rounded border-l-2 border-l-blue-500 text-[10px] group hover:bg-black/60 transition-all cursor-pointer">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold">{rec.title}</span>
                      <Download className="h-3 w-3 text-slate-600" />
                    </div>
                    <Badge variant="ghost" className="text-[7px] p-0 text-slate-500">{rec.tag}</Badge>
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-800 my-4" />
              <p className="text-[9px] text-slate-500 italic">"Knowledge graph expands by 142 nodes daily. Every validated decision contributes to the global SCUGP singular brain."</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
