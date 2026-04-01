
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fingerprint, History, Share2, Layers, Binary, Dna, ArrowRightLeft, Sparkles, Database, ShieldCheck, Microscope, Zap, Award, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ProjectDNA Component (SCUGP GENOME)
 * Pillar 8: Manages unique project signatures, best practice inheritance, and historical comparison.
 */
export const ProjectDNA = () => {
  const patterns = [
    { type: "Success", pattern: "High Early Feedback Loop", impact: "+14% Delivery" },
    { type: "Success", pattern: "Decentralized HSE Validation", impact: "-60% Time" },
    { type: "Risk", pattern: "Delayed Q3 Procurement", impact: "-8% Margin" }
  ];

  const bestPractices = [
    { title: "Quantum HSE Loop", from: "ARC-2024", status: "INHERITED" },
    { title: "Zinia Agile Sprint", from: "FPSO-ANG-V2", status: "SYNCED" },
    { title: "Cryo-Efficiency 1.4", from: "S12-OFFSHORE", status: "ACTIVE" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main DNA Sheet */}
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-emerald-500/20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Dna className="h-32 w-32 text-emerald-500 animate-pulse" />
          </div>
          <CardHeader className="bg-emerald-500/5 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                  <Fingerprint className="h-4 w-4" /> SCUGP GENOME™ — Project DNA Signature
                </CardTitle>
                <CardDescription className="text-[10px]">Unique Digital Signature & Best Practice Inheritance (Pillar 8)</CardDescription>
              </div>
              <Badge className="bg-emerald-600 text-black font-black text-[8px] uppercase">DNA_SEQ: ACTIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Binary className="h-3 w-3" /> Genetic Sequential Metrics
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Cultural Rhythm", val: "Agile_Fast", color: "text-blue-400" },
                    { label: "Decision Structure", val: "Decentralized", color: "text-cyan-400" },
                    { label: "Innovation Velocity", val: "High_TRL_10", color: "text-emerald-400" },
                    { label: "Resilience Type", val: "Auto-Healing", color: "text-purple-400" }
                  ].map((gene, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-black/40 rounded border border-slate-800">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{gene.label}</span>
                      <span className={cn("text-[10px] font-mono font-black", gene.color)}>{gene.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/60 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="h-4 w-4 text-emerald-500" />
                    <p className="text-[10px] font-black uppercase text-emerald-500 tracking-tighter">Memory Inheritance Engine</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Analyzing Project DNA... Inheriting successful 'Offshore Supply Chain' patterns from Project ARC-2024. Optimizing Q4 logistics buffer by 12% automatically based on historical success metrics."
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800 relative z-10">
                  <Button size="sm" variant="outline" className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 text-[9px] font-black uppercase h-9">
                    Compare with Global Success Models
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-500/5 rounded-xl border-2 border-dashed border-emerald-500/20">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span className="text-[10px] font-black uppercase text-emerald-400">Detected Success/Failure Patterns</span>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-500">ML ANALYST: ACTIVE</Badge>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {patterns.map((p, i) => (
                    <div key={i} className="p-3 bg-black/40 rounded border border-slate-800 flex justify-between items-center group hover:border-emerald-500/30 transition-all">
                       <div>
                          <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">{p.type}: {p.pattern}</p>
                          <p className="text-xs font-black text-white">{p.impact}</p>
                       </div>
                       <Zap className={cn("h-3 w-3", p.type === 'Success' ? 'text-emerald-500' : 'text-red-500')} />
                    </div>
                  ))}
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar: Digital Twin & Best Practices */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Microscope className="h-4 w-4" /> Best Practice Inheritance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {bestPractices.map((bp, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800 group hover:border-blue-500/30 transition-all">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-200 uppercase">{bp.title}</span>
                    <span className="text-[7px] text-slate-600 font-mono">FROM: {bp.from}</span>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[7px] border-none px-2 h-4",
                    bp.status === 'INHERITED' ? "bg-emerald-600/20 text-emerald-500" : "bg-blue-600/20 text-blue-400"
                  )}>{bp.status}</Badge>
                </div>
              ))}
              <Button size="sm" variant="ghost" className="w-full mt-2 text-[8px] font-black uppercase text-slate-500 hover:text-white">
                <History className="h-3 w-3 mr-2" /> View Mutation History
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-pink-400 flex items-center gap-2">
                <Layers className="h-4 w-4" /> DNA Twin Simulator
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="aspect-square bg-black/40 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
                 <Database className="h-16 w-16 text-pink-500/30 animate-pulse" />
                 <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent" />
                 <p className="absolute bottom-4 text-[8px] font-mono text-pink-400 uppercase font-black">DNA_SIM_RENDER: READY</p>
              </div>
              <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700 text-[10px] font-black uppercase h-9 shadow-[0_0_15px_rgba(219,39,119,0.3)]">
                Launch Growth Simulation
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-emerald-900/10 border border-emerald-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase text-emerald-500 flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3" /> Certification Genome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[10px] text-slate-400 italic leading-relaxed">
                "This project's digital signature is registered on the Lightweight Ledger. Best practices are auto-indexed for global SCUGP 7.0 nodes."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
