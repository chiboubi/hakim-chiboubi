
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Users, Share2, Globe, Brain, ShieldCheck, Activity, MessageSquare } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const CollectiveWebUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getCollectiveWebStats();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-slate-900 border-2 border-blue-500/20 text-white shadow-2xl rounded-[4rem] overflow-hidden group">
      <CardHeader className="p-12 border-b border-white/5 bg-blue-600/5 text-center">
         <Network className="h-20 w-20 text-blue-400 mx-auto mb-6 animate-spin-slow" />
         <CardTitle className="text-5xl font-black uppercase tracking-widest text-blue-400">SCUGP-WEB : Conscience Collective</CardTitle>
         <CardDescription className="text-xl text-slate-500 font-bold uppercase tracking-[0.5em] mt-4">Réseau Neural Global — Interconnexion Humaine</CardDescription>
      </CardHeader>
      <CardContent className="p-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="p-12 bg-black/40 rounded-[4rem] border-2 border-blue-500/20 shadow-inner flex flex-col items-center text-center gap-8 group hover:border-blue-500/40 transition-all">
              <Users size={80} className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div>
                 <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em]">Nodes Actifs</p>
                 <p className="text-6xl font-black text-white font-mono">{metrics.nodes.toLocaleString()}</p>
                 <p className="text-sm text-blue-400 font-bold uppercase mt-2">Scientifiques Connectés</p>
              </div>
           </div>
           <div className="p-12 bg-black/40 rounded-[4rem] border-2 border-emerald-500/20 shadow-inner flex flex-col items-center text-center gap-8 group hover:border-emerald-500/40 transition-all">
              <Share2 size={80} className="text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div>
                 <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em]">Bandwidth Pensée</p>
                 <p className="text-6xl font-black text-white font-mono">{metrics.bandwidth}</p>
                 <p className="text-sm text-emerald-400 font-bold uppercase mt-2">Sync Instantanée</p>
              </div>
           </div>
        </div>

        <div className="p-12 bg-white/5 rounded-[4rem] border-2 border-white/10 space-y-8">
           <div className="flex items-center gap-6 text-blue-400">
              <MessageSquare className="h-10 w-10" />
              <h4 className="text-3xl font-black uppercase tracking-tighter">Dernier Consensus : Résolution EOR</h4>
           </div>
           <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-10 py-2">
             "Problème complexe de récupération améliorée (EOR) résolu en {metrics.resolution_time} via brainstorming collectif distribué. Record précédent : 6 mois (Équipe traditionnelle)."
           </p>
           <Badge className="bg-blue-600 text-white border-none px-8 py-2 rounded-full uppercase tracking-widest text-[10px] font-black">VALIDÉ PAR LE CONSENSUS DES ARCHITECTES</Badge>
        </div>
      </CardContent>
    </Card>
  );
};
