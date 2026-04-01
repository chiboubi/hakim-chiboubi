"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Users, Brain, ShieldCheck, Zap, Activity, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const BrainSync = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Collaborative Neural Mesh */}
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-blue-500/20 text-white relative overflow-hidden group">
          <CardHeader className="bg-slate-900/50 border-b border-slate-800 z-10 relative">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-2">
                  <Network className="h-4 w-4" /> BrainSync™ Neural Team Mesh
                </CardTitle>
                <CardDescription className="text-[10px]">Active Collective Training: FPSO-ANG-2026</CardDescription>
              </div>
              <Badge className="bg-blue-600 text-white border-none text-[8px] animate-pulse uppercase">Sync Level: ∞</Badge>
            </div>
          </CardHeader>
          
          <div className="relative h-80 flex flex-col items-center justify-center">
            {/* Visual background effect */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
               <div className="w-[400px] h-[400px] rounded-full border border-blue-500/30 animate-spin-slow" />
               <div className="absolute w-[200px] h-[200px] rounded-full border border-cyan-500/20 animate-reverse-spin" />
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-8">
              {[
                { role: "Project Director", power: "98%", status: "LEAD" },
                { role: "HSE Engineer", power: "92%", status: "GUARD" },
                { role: "Planning AI", power: "100%", status: "CO-PILOT" }
              ].map((node, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group/node cursor-pointer">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-transform group-hover/node:scale-110">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black uppercase">{node.role}</p>
                    <p className="text-[8px] font-mono text-blue-500">{node.status} | {node.power}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 bg-black/60 rounded-xl border border-blue-500/20 backdrop-blur-md">
              <p className="text-[9px] font-mono text-cyan-400 uppercase font-black text-center mb-1">Collaborative Transfer Active</p>
              <div className="flex items-center gap-2 text-[8px] font-bold text-slate-500">
                <span>H. Chibubi</span>
                <Share2 className="h-2 w-2 text-blue-500 animate-pulse" />
                <span className="text-blue-400">Neural Sync</span>
                <Share2 className="h-2 w-2 text-blue-500 animate-pulse" />
                <span>AI_GENIE_CORE</span>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Confidence & Certitude Dashboard */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Brain className="h-4 w-4" /> AI Confidence Index
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Prediction Certitude</p>
                <p className="text-3xl font-black font-mono text-white">0.984</p>
                <p className="text-[8px] text-emerald-500 font-bold mt-1 uppercase">High Probability Range</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-bold uppercase text-slate-500">
                  <span>Knowledge Transfer</span>
                  <span className="text-blue-400">84% Complete</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[84%]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <Activity className="h-4 w-4" /> Training Convergence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { label: "HSE Pattern Sync", val: "NOMINAL", color: "text-emerald-500" },
                  { label: "Planning Delay Model", val: "REFINING", color: "text-amber-500" },
                  { label: "Cost Drift Vectors", val: "STABLE", color: "text-blue-500" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{item.label}</span>
                    <span className={cn("text-[9px] font-black", item.color)}>{item.val}</span>
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
