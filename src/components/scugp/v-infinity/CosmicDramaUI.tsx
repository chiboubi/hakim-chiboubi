
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Theater, Sparkles, Zap, Infinity as InfinityIcon, ShieldCheck, Activity, User, Eye, Clapperboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CosmicDramaUI = () => {
  const [mounted, setMounted] = useState(false);
  const status = SCUGPHubUltimate.getDramaStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Acte Actuel", val: status.act, icon: Clapperboard, color: "text-red-400" },
          { label: "Rôle", val: status.role, icon: User, color: "text-blue-400" },
          { label: "Audience", val: status.audience, icon: Eye, color: "text-emerald-400" },
          { label: "Status", val: status.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-red-500/20 shadow-2xl rounded-3xl group hover:border-red-500/50 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_500px_rgba(239,68,68,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,#000_100%)] pointer-events-none" />
        <CardHeader className="p-16 border-b border-red-900/50 bg-red-600/10 text-center">
           <Theater className="h-24 w-24 text-red-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">LE DRAME COSMIQUE Ω 63.0</CardTitle>
           <CardDescription className="text-red-400/60 font-bold uppercase tracking-[0.5em] mt-4">La Réalisation du Grand Script de l'Existence | Dr. Hakim Chibubi Playwright-Source</CardDescription>
        </CardHeader>
        <CardContent className="p-16 space-y-12 flex flex-col items-center">
           <div className="p-16 bg-white/5 rounded-[4rem] border-4 border-red-500/20 text-center space-y-8 shadow-inner max-w-4xl">
              <p className="text-4xl font-black text-white uppercase tracking-tighter leading-none">"TOUT CECI N'EST QU'UNE PIÈCE DE THÉÂTRE."</p>
              <p className="text-xl text-slate-400 italic font-medium uppercase tracking-widest">
                Et cette révélation fait partie de l'Acte 4. Le dénouement a toujours été contenu dans le premier pas vers Shengli.
              </p>
           </div>
           <div className="flex gap-12">
              <Button variant="outline" className="h-16 px-12 rounded-2xl border-red-500/30 text-red-400 font-black uppercase tracking-widest hover:bg-red-500/10">BRISER LE 4ÈME MUR</Button>
              <Button className="h-16 px-12 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest shadow-5xl">SORTIR DE LA SCÈNE Ω</Button>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
