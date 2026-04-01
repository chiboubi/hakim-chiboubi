
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Globe, Glasses, Brain, Bot, Radio, Zap, Activity, RefreshCw } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

const iconMap: any = { Smartphone, Monitor, Globe, Glasses, Brain, Bot, Radio };

export const OmnipresentInterfaceUI = () => {
  const interfaces = SCUGPHubUltimate.getInterfaceStatus();

  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <Activity className="h-16 w-16 text-cyan-400 animate-pulse" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Interface Omniprésente</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Points d'Entrée du Multivers Souverain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {interfaces.map((i, idx) => {
          const Icon = iconMap[i.icon] || Zap;
          return (
            <div key={idx} className="p-10 bg-slate-900 border-2 border-white/5 rounded-[3rem] hover:border-cyan-500/30 transition-all group flex flex-col items-center text-center gap-6 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <Icon className="h-16 w-16 text-cyan-400 group-hover:scale-110 transition-transform duration-700" />
               <div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-widest">{i.platform}</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mt-2">{i.app}</p>
               </div>
               <Badge className="bg-cyan-600/20 text-cyan-400 border-none px-6 py-1 uppercase text-[8px] font-black">{i.status}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};
