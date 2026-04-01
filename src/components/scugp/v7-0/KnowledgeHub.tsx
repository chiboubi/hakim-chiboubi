"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Sparkles, FileText, Download, Share2, History, Database, Microscope, Layers, Tags } from "lucide-react";
import { cn } from "@/lib/utils";

export const KnowledgeHub = () => {
  const [query, setQuery] = useState("");

  const playbooks = [
    { title: "Offshore HSE v7.0", type: "PDF", size: "4.2 MB", category: "SAFETY" },
    { title: "AGI Steering Playbook", type: "DOCX", size: "1.8 MB", category: "STRATEGY" },
    { title: "Digital Twin D3 Guide", type: "VIDEO", size: "142 MB", category: "TECHNICAL" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl">
            <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> SCUGP Knowledge Hub 6.9
                </CardTitle>
                <CardDescription className="text-[10px]">Intelligent Shared Cloud Library & AI RAG Synthesis</CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input 
                  placeholder="Semantic RAG Search..." 
                  className="pl-9 bg-black/50 border-slate-800 h-9 text-[11px] focus:border-emerald-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {playbooks.map((p, i) => (
                  <div key={i} className="p-4 bg-black/40 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500">{p.category}</Badge>
                      <Download className="h-3 w-3 text-slate-600 group-hover:text-white cursor-pointer" />
                    </div>
                    <h4 className="text-xs font-black uppercase text-slate-200 group-hover:text-emerald-400 transition-colors">{p.title}</h4>
                    <p className="text-[8px] font-mono text-slate-600 mt-2">{p.type} | {p.size}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <p className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">AI Synthesis Assistant</p>
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  "I have indexed 1,240 new project files this week. Three expert playbooks regarding 'Arctic Cryogenics' have been auto-updated based on REX entries."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Database className="h-4 w-4" /> Auto-Indexing & Metadata Mesh
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: "Semantic Nodes", val: "142,000", status: "INDEXED" },
                { label: "Cross-Project Citations", val: "4,200", status: "LINKED" },
                { label: "OCR Accuracy", val: "99.4%", status: "OPTIMIZED" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{item.label}</span>
                    <span className="text-xs font-black text-slate-200">{item.val}</span>
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
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <Layers className="h-4 w-4" /> AI Content Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-1 space-y-4">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">Recommended for your role:</p>
              <div className="space-y-3">
                {[
                  { title: "Zinia Phase 2 REX", tag: "MANAGEMENT" },
                  { title: "ISO 14083 Compliance", tag: "ESG" }
                ].map((rec, i) => (
                  <div key={i} className="p-3 bg-black/40 rounded border-l-2 border-l-blue-500 text-[10px] group hover:bg-black/60 transition-all cursor-pointer">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold">{rec.title}</span>
                      <Tags className="h-3 w-3 text-slate-600" />
                    </div>
                    <Badge variant="ghost" className="text-[7px] p-0 text-slate-500">{rec.tag}</Badge>
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-800 my-4" />
              <p className="text-[9px] text-slate-500 italic">"System automatically ranks documentation based on your current project phase and past search history."</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
