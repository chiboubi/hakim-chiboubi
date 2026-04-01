
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Share2, RefreshCw, MessageSquare, History, Globe, ShieldCheck, Sparkles, Network, Terminal, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CollaborativeWorkspaceUI = () => {
  const [mounted, setMounted] = useState(false);
  const [activeUsers, setActiveUsers] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    setActiveUsers(SCUGPHubUltimate.getCollaborationPresence());
    setLogs([
      "> [SYNC] Dr. Hakim C. a ouvert le modèle 3D Shengli.",
      "> [AUTO] Sinopec AI a mis à jour les prédictions XGBoost.",
      "> [COLLAB] Team Sonatrach a validé le rapport HSE.",
      "> [INFO] Synchronisation multi-sites 100% active."
    ]);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-black border-[10px] border-blue-600 shadow-[0_0_150px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative">
            <CardHeader className="p-12 border-b border-blue-900/50 bg-blue-600/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/20 rounded-3xl border border-blue-500/30">
                    <Users className="h-10 w-10 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Espace de Co-Édition Ω²⁵</CardTitle>
                    <CardDescription className="text-sm font-bold text-blue-400/60 uppercase tracking-widest mt-2">Maillage de Présence Temps Réel & Sync CRDT | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <Badge className="bg-emerald-600 text-white border-none px-8 py-2 text-[10px] font-black uppercase tracking-widest">REALTIME_ONLINE</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Network className="h-6 w-6 text-blue-500" /> Présence de l'Essaim
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {activeUsers.map((u, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex justify-between items-center group hover:border-blue-500/30 transition-all">
                        <div className="flex items-center gap-6">
                          <div className={cn("h-3 w-3 rounded-full animate-pulse", u.color)} />
                          <div>
                            <p className="text-[12px] font-black uppercase text-white">{u.user}</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase">{u.role}</p>
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-slate-600 uppercase">{u.loc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Terminal className="h-6 w-6 text-emerald-500" /> Flux d'Édition Live
                  </h4>
                  <div className="bg-black/60 rounded-[3rem] border border-slate-800 p-8 h-80 overflow-y-auto font-mono text-[11px] space-y-2 text-emerald-500/70 custom-scrollbar shadow-inner">
                    {logs.map((log, i) => (
                      <p key={i} className="animate-in slide-in-from-left duration-300">{log}</p>
                    ))}
                    <div className="flex items-center gap-2 animate-pulse mt-4">
                       <span className="h-3 w-1 bg-emerald-500" />
                       <span className="text-emerald-400">Waiting for next intent...</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-[4rem] flex flex-col items-center justify-center text-center gap-6">
                 <Radio className="h-12 w-12 text-blue-400 animate-bounce" />
                 <p className="text-lg text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                   "Le maillage de collaboration SCUGP utilise des structures de données sans conflit (CRDT) pour permettre une édition simultanée Beijing-Alger avec une latence de 0.4ms."
                 </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center justify-center gap-4 tracking-widest">
                <Sparkles className="h-6 w-6 animate-pulse" /> Outils de Co-Rédaction
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="space-y-6">
                  {[
                    { label: "Curseurs Live", status: "ENABLED", icon: Share2 },
                    { label: "Sync Offline", status: "READY", icon: RefreshCw },
                    { label: "Historique Blockchain", status: "SCELLÉ", icon: History }
                  ].map((tool, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-lg">
                       <div className="flex items-center gap-4">
                          <tool.icon className="h-6 w-6 text-blue-400" />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{tool.label}</span>
                       </div>
                       <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{tool.status}</Badge>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-6">
                  <p className="text-[11px] text-blue-400 leading-relaxed italic uppercase font-bold">
                    "Chaque modification du Dr. Hakim est instantanément propagée au multivers projet via le protocole Post-Quantique."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase shadow-2xl">Ouvrir l'Éditeur Suprême</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
