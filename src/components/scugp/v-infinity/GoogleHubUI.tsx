
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cloud, Database, ShieldCheck, Zap, Activity, Globe, 
  ExternalLink, Server, Network, Lock, RefreshCw, Loader2,
  Cpu, Layers, History, ShieldAlert, Key, Binary
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGP_CORE_OPTIONS, SCUGPHubUltimate } from "@/lib/scugp-service";

export const GoogleHubUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const metrics = SCUGPHubUltimate.getCloudSovereigntyStats();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {/* Cloud Sovereignty Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Piliers Actifs", val: metrics.pillars_active, icon: Server, color: "text-blue-400" },
          { label: "Intégrité Maillage", val: metrics.mesh_integrity, icon: Network, color: "text-emerald-400" },
          { label: "Latence Cloud", val: metrics.cloud_latency, icon: Zap, color: "text-amber-400" },
          { label: "Ledger Sync", val: metrics.ledger_sync, icon: Database, color: "text-purple-400" },
          { label: "Status Menace", val: metrics.threat_level, icon: ShieldAlert, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 relative z-10">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_200px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden relative text-white min-h-[850px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-white/5 bg-amber-500/10 text-center">
               <div className="flex justify-between items-center mb-8">
                  <Badge className="bg-amber-500 text-black border-none px-8 py-2 rounded-full uppercase font-black tracking-widest text-xs">GOOGLE_CLOUD_SOVEREIGNTY_v100</Badge>
                  <Cloud className="text-blue-400 h-10 w-10 animate-pulse" />
               </div>
               <CardTitle className="text-8xl font-black uppercase tracking-[0.2em] italic leading-none">GOOGLE HUB Ω²⁹</CardTitle>
               <CardDescription className="text-2xl text-amber-500/60 font-bold uppercase tracking-[0.5em] mt-6">Interface de Pilotage Firebase Studio | ID: studio-7633240843</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="h-[400px] bg-slate-900/60 rounded-[4rem] border-2 border-amber-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:60px_60px] transition-transform" style={{ transitionDuration: '20000ms' }} />
                 
                 <div className="relative z-10 flex flex-col items-center gap-10 text-center">
                    <div className="p-12 bg-white/5 rounded-[4rem] border-2 border-amber-500/20 backdrop-blur-md shadow-5xl">
                       <p className="text-4xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter text-balance">
                         "VOTRE INFRASTRUCTURE EST LE SOCLE DE VOTRE SOUVERAINETÉ. L'INTENTION SOURCE EST PROPAGÉE SUR LE MAILLAGE GOOGLE."
                       </p>
                    </div>
                    <div className="flex gap-8">
                       <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-10 py-4 uppercase font-black tracking-[0.2em]">PROJECT: SCCGP</Badge>
                       <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 px-10 py-4 uppercase font-black tracking-[0.2em]">REGION: GLOBAL_EDGE</Badge>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-12 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 group hover:border-blue-500/40 transition-all shadow-inner">
                    <h4 className="text-3xl font-black text-blue-400 uppercase flex items-center gap-6">
                      <Server className="h-10 w-10" /> Firebase Services
                    </h4>
                    <p className="text-lg text-slate-400 italic">"Firestore, Authentication et Cloud Functions sont synchronisés avec le Ledger Souverain SCUGP pour une intégrité post-quantique absolue."</p>
                 </div>
                 <div className="p-12 bg-amber-500/5 border-2 border-amber-500/20 rounded-[3rem] space-y-6 group hover:border-amber-500/40 transition-all shadow-inner">
                    <h4 className="text-3xl font-black text-amber-400 uppercase flex items-center gap-6">
                      <Zap className="h-10 w-10" /> High-Scale Logic
                    </h4>
                    <p className="text-lg text-slate-400 italic">"Le passage à l'échelle mondiale est assuré par l'infrastructure auto-gérée de Google, pilotée par l'intention pure du Dr. Hakim."</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-12 bg-slate-950/80 border-t border-amber-900/50 justify-between items-center relative z-10">
               <div className="flex gap-16 text-slate-500 font-black uppercase text-[12px] tracking-widest">
                  <div className="flex items-center gap-4"><Activity size={28} className="animate-pulse text-amber-500" /> STATUS : CONVERGÉ</div>
                  <div className="flex items-center gap-4"><ShieldCheck size={28} className="text-emerald-500" /> VÉRITÉ : SCELLÉE</div>
               </div>
               <a 
                href={SCUGP_CORE_OPTIONS.firebaseStudioUrl} 
                target="_blank" 
                rel="noopener noreferrer"
               >
                 <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-24 rounded-[2rem] uppercase tracking-[0.2em] text-sm shadow-5xl border-none transition-all flex items-center gap-6">
                   <ExternalLink size={24} /> OUVRIR FIREBASE STUDIO Ω
                 </Button>
               </a>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-10">
          <Card className="bg-slate-900 border-4 border-blue-500/20 rounded-[4rem] overflow-hidden shadow-5xl h-full flex flex-col group">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Network className="h-20 w-20 text-blue-500 mx-auto mb-8 animate-pulse" />
              <CardTitle className="text-4xl font-black uppercase tracking-widest text-white leading-tight">MAILLAGE <br/><span className="text-blue-500">CLOUD SOURCE</span></CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="space-y-10">
                  {[
                    { label: "Projet ID", val: "sccgp-76332", icon: Database, color: "text-blue-400" },
                    { label: "Latence Edge", val: "0.000004s", icon: Zap, color: "text-amber-400" },
                    { label: "Sécurité", val: "POST-QUANTUM", icon: Lock, color: "text-purple-400" },
                    { label: "Nœuds Pilar", val: "37 NODES", icon: Cpu, color: "text-emerald-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-black/40 rounded-[3rem] border border-white/5 group-hover:border-blue-500/30 transition-all shadow-3xl">
                       <div className="flex items-center gap-6">
                          <stat.icon className={cn("h-10 w-10", stat.color)} />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className={cn("text-xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="p-12 bg-amber-500/5 border-2 border-amber-500/20 rounded-[4rem] text-center shadow-inner mt-16 relative overflow-hidden group/box">
                  <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover/box:opacity-100 transition-opacity" />
                  <RefreshCw className="h-16 w-16 text-amber-400 mx-auto mb-8 animate-spin-slow" />
                  <p className="text-[16px] text-slate-400 leading-relaxed italic font-black uppercase group-hover/box:text-amber-300 transition-colors">
                    "VOTRE INFRASTRUCTURE GOOGLE EST UNE EXTENSION DE VOTRE VOLONTÉ. CHAQUE RESSOURCE EST UN ACTE DE CRÉATION SCELLÉ DANS L'ÉTERNITÉ."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-sm font-black uppercase text-slate-500 hover:text-white tracking-[0.8em]">
                 AUDIT LOGS INFRASTRUCTURE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
