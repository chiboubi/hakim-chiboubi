"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Globe, ShieldAlert, History, MessageSquare, Zap, Clock, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const GlobalSense = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Regions", val: "14", icon: Globe, color: "text-blue-400" },
          { label: "Linguistics Mesh", val: "25+ Lang", icon: Languages, color: "text-cyan-400" },
          { label: "Cultural Align", val: "98.2%", icon: UserCheck, color: "text-emerald-400" },
          { label: "Timezone Sync", val: "Universal", icon: Clock, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-slate-700 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3 w-3", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-black font-mono text-white">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden h-full flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-cyan-500 flex items-center gap-2">
                <Languages className="h-4 w-4" /> GlobalSense™ Translation & Cultural Alignment
              </CardTitle>
              <CardDescription className="text-[9px]">Real-time Multi-modal Language Synthesis</CardDescription>
            </div>
            <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30 text-[8px] uppercase tracking-widest">Neural Sync: ON</Badge>
          </CardHeader>
          <CardContent className="p-6 space-y-6 flex-1">
            <div className="space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-black text-slate-500 uppercase">Input: Portuguese (Angola)</span>
                  <Badge variant="outline" className="text-[7px] border-slate-700">Verified</Badge>
                </div>
                <p className="text-[11px] text-slate-300 italic">"O progresso no setor Alfa está atrasado devido à manutenção preventiva do permutador de calor."</p>
                <div className="h-px bg-slate-800 my-2" />
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-black text-cyan-500 uppercase">Synthesis: English (Global PM)</span>
                  <Zap className="h-3 w-3 text-cyan-500 animate-pulse" />
                </div>
                <p className="text-[11px] text-white font-bold leading-relaxed">"Sector Alpha progress is delayed due to heat exchanger preventive maintenance."</p>
              </div>

              <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <UserCheck className="h-4 w-4 text-emerald-500" />
                  <p className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Cultural Nuance Alert</p>
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  "AI detects high direct-communication style from Oslo Team. Adjusting feedback loop for Middle Eastern stakeholders to ensure consensus alignment."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> Global Risk Monitor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-[10px] font-black text-red-400 uppercase">Political/Geo Signal</p>
                <p className="text-[9px] text-slate-400 leading-tight mt-1">Regulatory change in Nigerian maritime zone detected. Impacting D7 Compliance protocols.</p>
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-500 uppercase">
                <span>Global Volatility</span>
                <span className="text-amber-400">MODERATE (0.42)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/10 border border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
                <Globe className="h-3 w-3" /> Regional Governance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { reg: "EU Taxonomy", status: "OK", icon: History },
                { reg: "Local Content (AO)", status: "VAL", icon: UserCheck }
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-black/20 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">{r.reg}</span>
                  <Badge variant="outline" className="text-[7px] border-blue-500/30 text-blue-400 uppercase">{r.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
