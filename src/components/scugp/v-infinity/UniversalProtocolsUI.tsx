
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Binary, Languages, Database, Link2, Share2, ShieldCheck, Zap, Globe, History, Activity } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const UniversalProtocolsUI = () => {
  const protocols = SCUGPHubUltimate.getCommunicationProtocols();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <Binary className="h-16 w-16 text-emerald-500 animate-pulse" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Protocoles Universels</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Le Langage des Mondes Intriqués</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <Card className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden shadow-5xl">
          <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
             <Languages className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
             <CardTitle className="text-3xl font-black uppercase text-white">Langages</CardTitle>
          </CardHeader>
          <CardContent className="p-12 space-y-8">
             {Object.entries(protocols.languages).map(([key, val]) => (
               <div key={key} className="space-y-2 group">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">{key}</p>
                  <p className="text-lg font-bold text-white uppercase">{val}</p>
               </div>
             ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden shadow-5xl">
          <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
             <Database className="h-12 w-12 text-blue-400 mx-auto mb-6" />
             <CardTitle className="text-3xl font-black uppercase text-white">Données</CardTitle>
          </CardHeader>
          <CardContent className="p-12 space-y-8">
             {Object.entries(protocols.data).map(([key, val]) => (
               <div key={key} className="space-y-2 group">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{key}</p>
                  <p className="text-lg font-bold text-white uppercase">{val}</p>
               </div>
             ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden shadow-5xl">
          <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
             <Zap className="h-12 w-12 text-amber-400 mx-auto mb-6" />
             <CardTitle className="text-3xl font-black uppercase text-white">APIs</CardTitle>
          </CardHeader>
          <CardContent className="p-12 space-y-8">
             {Object.entries(protocols.apis).map(([key, val]) => (
               <div key={key} className="space-y-2 group">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-amber-400 transition-colors">{key}</p>
                  <p className="text-lg font-bold text-white uppercase">{val}</p>
               </div>
             ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
