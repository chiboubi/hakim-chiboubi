"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, BarChart3, TrendingUp, ShieldAlert, Wind, FileCheck, Gauge, Sparkles, Server, TreePine, Droplets, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export const GaiaBioDigitalLoop = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-l-4 border-l-emerald-500 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <TreePine className="h-4 w-4 text-emerald-500" /> Gaia Bio-Regen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">+42.8%</div>
            <p className="text-[9px] text-emerald-500 uppercase font-bold mt-1">Ecosystem Surplus Target</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-blue-500 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-blue-500" /> Bio-Digital Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">OPTIMAL</div>
            <p className="text-[9px] text-blue-500 uppercase font-bold mt-1">Team Vitals Synchronized</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-amber-500 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" /> Neutrality Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">100%_NET</div>
            <p className="text-[9px] text-amber-500 uppercase font-bold mt-1">Self-Optimizing Flux</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-l-4 border-l-purple-500 text-white shadow-xl rounded-[2.5rem]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-500" /> Planetary Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black font-mono text-white">SCUGP_13.5</div>
            <p className="text-[9px] text-purple-500 uppercase font-bold mt-1">Convergence Standard</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-emerald-500/20 text-white shadow-2xl overflow-hidden rounded-[4rem]">
          <CardHeader className="border-b border-slate-800 bg-emerald-500/5 px-12 py-10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-emerald-500 flex items-center gap-4">
                  <Wind className="h-8 w-8" /> Gaia Bio-Digital Mesh 13.5
                </CardTitle>
                <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2">Satellite IoT + Bio-Sensor Integration for Planetary Health</CardDescription>
              </div>
              <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[11px] animate-pulse uppercase px-8 py-2 font-black">GAIA_SYNC: ACTIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-12 space-y-12">
            <div className="h-96 bg-black/40 rounded-[4rem] border border-slate-800 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:50px_50px]" />
               <div className="relative z-10 flex flex-col items-center gap-10">
                  <Globe className="h-40 w-40 text-emerald-500/40 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                  <div className="text-center">
                    <p className="text-[14px] font-mono text-emerald-400 uppercase tracking-[0.8em] font-black">Planetary Steering Interface</p>
                    <div className="flex gap-20 mt-10">
                      <div className="text-center">
                        <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-3">Carbon Re-entry</p>
                        <p className="text-4xl font-black text-white font-mono">142 <span className="text-[14px] text-slate-600 italic">Mt/month</span></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mb-3">Bio-Digital Vitality</p>
                        <p className="text-4xl font-black text-emerald-400 font-mono">0.998 <span className="text-[14px] text-slate-600 italic">INDEX</span></p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                  <FileCheck className="h-6 w-6 text-blue-400" /> Real-time ESG Audit
                </h4>
                <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 space-y-8 shadow-inner">
                  <div className="flex justify-between items-center text-[12px] font-black uppercase">
                    <span className="text-slate-400 tracking-tighter">Regeneration Integrity</span>
                    <span className="text-emerald-400">SUPREME_CERTIFIED</span>
                  </div>
                  <Progress value={100} className="h-2.5 bg-slate-800" />
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">
                    "Planetary bio-digital loop has validated 100% neutrality for Phase 13. Project is now autonomously repairing regional oceanic coral through excess thermal re-routing."
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                  <Sparkles className="h-6 w-6 text-amber-500" /> Gaia-Loop Opportunities
                </h4>
                <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 space-y-8 shadow-inner">
                  <div className="flex items-center gap-4 text-[12px] font-black uppercase text-amber-500">
                    <Zap className="h-5 w-5" /> IA Suggestion: Bio-Digital Shift
                  </div>
                  <p className="text-[11px] text-slate-400 italic leading-relaxed">
                    "Integrating local soil vitality data suggests a 4.2% yield increase by shifting logistics hubs to designated 'Brownfield' zones. Gaia-Impact score: +12."
                  </p>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-[11px] font-black uppercase h-14 rounded-[2rem] tracking-[0.2em] shadow-2xl">Execute Gaia Pivot</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-2xl overflow-hidden">
            <CardHeader className="pb-2 border-b border-slate-800 px-12 py-10">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <Gauge className="h-6 w-6" /> Planetary Health Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 px-12 pb-12 space-y-8">
              <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] text-center space-y-4 shadow-inner">
                <p className="text-[12px] text-slate-500 uppercase font-black mb-2">Gaia Convergence Score</p>
                <p className="text-5xl font-black font-mono text-white">+84.2</p>
                <p className="text-[10px] text-emerald-500 font-bold mt-2 uppercase tracking-widest">CIVILIZATION_STABLE_V13</p>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Oceanic Regen", val: "+14.2%", color: "text-emerald-400" },
                  { label: "Energy Return", val: "1.42x", color: "text-blue-400" },
                  { label: "Bio-Diversity", val: "STABLE", color: "text-amber-400" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-[1.5rem] border border-slate-800 group hover:border-emerald-500/30 transition-all">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
                    <span className={cn("text-[11px] font-black font-mono", stat.color)}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
