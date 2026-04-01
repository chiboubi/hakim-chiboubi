"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Cog, Layout, Layers, Boxes, Workflow, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
  { id: "FOR", label: "Forage & Exploration", icon: Globe, color: "text-blue-400" },
  { id: "RAF", label: "Raffinage & Pétrochimie", icon: Zap, color: "text-amber-400" },
  { id: "TRA", label: "Transport & Logistique", icon: Layout, color: "text-emerald-400" },
  { id: "HYB", label: "Hybrid Energy / H2", icon: Layers, color: "text-teal-400" }
];

const plugins = [
  { id: "PRE", label: "Planification Prédictive", active: true },
  { id: "MOB", label: "Mobile Field Kit", active: true },
  { id: "DMS", label: "Smart DMS (AI)", active: true },
  { id: "HSE", label: "Compliance Hub", active: false },
  { id: "REX", label: "REX Capitalization", active: true }
];

export const AdaptiveSystem = () => {
  const [activeTemplate, setActiveTemplate] = useState("FOR");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl">
            <CardHeader className="bg-slate-950/50 border-b border-slate-800">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Layout className="h-4 w-4" /> Sector-Specific Templates
                  </CardTitle>
                  <CardDescription className="text-[10px]">SCUGP Adaptive System™ - Dynamic workflow allocation</CardDescription>
                </div>
                <Badge variant="outline" className="border-slate-700 text-slate-500 font-mono text-[8px]">ACTIVE: {activeTemplate}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {templates.map((t) => (
                  <div 
                    key={t.id} 
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center gap-3 text-center group",
                      activeTemplate === t.id ? "bg-slate-800 border-blue-500 shadow-lg" : "bg-black/20 border-slate-800 hover:border-slate-700"
                    )}
                    onClick={() => setActiveTemplate(t.id)}
                  >
                    <t.icon className={cn("h-8 w-8 transition-transform group-hover:scale-110", activeTemplate === t.id ? t.color : "text-slate-600")} />
                    <span className={cn("text-[9px] font-black uppercase tracking-tighter", activeTemplate === t.id ? "text-white" : "text-slate-500")}>
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Applied Governance Framework</p>
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  "Selected template activates {activeTemplate === 'FOR' ? 'Standard 19.0 Point 4 (Offshore/Deepwater)' : 'Standard 22.1 (Industrial Processing)'} automatic dimensions."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-black uppercase text-slate-400 flex items-center gap-2">
                  <Workflow className="h-4 w-4" /> Workflow Parameterization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Approval Speed</span>
                  <Badge className="bg-blue-600 text-white border-none text-[8px]">FAST_TRACK</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Audit Sensitivity</span>
                  <Badge variant="outline" className="border-amber-500/20 text-amber-500 text-[8px]">HIGH_PRIORITY</Badge>
                </div>
                <Button size="sm" className="w-full bg-slate-800 hover:bg-slate-700 text-[9px] font-black uppercase h-8">Modify System Parameters</Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-black uppercase text-slate-400 flex items-center gap-2">
                  <Boxes className="h-4 w-4" /> Plugin & Module Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {plugins.map((p) => (
                  <div key={p.id} className="flex justify-between items-center p-2 hover:bg-black/20 rounded transition-colors">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{p.label}</span>
                    <Switch checked={p.active} className="scale-75 data-[state=checked]:bg-blue-600" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-black border-slate-800 shadow-xl overflow-hidden h-full flex flex-col">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <Cpu className="h-4 w-4" /> Auto-Adaptive Log
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-1 font-mono text-[9px] text-emerald-500/70 space-y-2">
              <p><span className="text-slate-600">[10:42:01]</span> TEMPLATE_LOADED: {activeTemplate}</p>
              <p><span className="text-slate-600">[10:42:05]</span> DIM_D1_D11: CALIBRATED</p>
              <p><span className="text-slate-600">[10:42:12]</span> ZAPIER_WEBHOOK: SYNCED</p>
              <p><span className="text-slate-600">[10:42:30]</span> AI_DIAGNOSTIC: ACTIVE</p>
              <div className="h-px bg-slate-800 my-4" />
              <p className="text-slate-500 italic">"System auto-calibrated to Sector standards. Adaptive loop confirmed."</p>
            </CardContent>
            <CardFooter className="bg-slate-900/30 p-4 border-t border-slate-800">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] font-black text-slate-500 uppercase">System Ready</span>
                </div>
                <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-600 uppercase">GOLD_STABLE</Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
