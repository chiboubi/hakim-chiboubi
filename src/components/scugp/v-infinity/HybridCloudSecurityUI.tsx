
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Globe, Server, Database, History, Zap, Activity, ShieldAlert, Cpu, Network, Key } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const HybridCloudSecurityUI = () => {
  const status = SCUGPHubUltimate.getHybridCloudStatus();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Multi-Cloud Mesh Dashboard */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-blue-500/20 rounded-3xl border border-blue-500/30">
                    <Network className="h-16 w-16 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] italic leading-none">Architecture Hybride 2025</CardTitle>
                    <CardDescription className="text-xl text-blue-400/60 font-bold uppercase tracking-widest mt-4">Edge Computing, Private Storage & Public Scale Sync</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-3 text-xs font-black uppercase tracking-widest animate-pulse">MESH_ENCRYPTED</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { label: "Edge Computing", status: "ACTIVE", loc: "Field Rigs", icon: Cpu, color: "text-blue-400" },
                   { label: "Private Cloud", status: "SECURE", loc: "Sovereign Vault", icon: Lock, color: "text-emerald-400" },
                   { label: "Public Cloud", status: "SYNCED", loc: "Global Hub", icon: Globe, color: "text-purple-400" }
                 ].map((node, i) => (
                   <div key={i} className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 flex flex-col items-center text-center gap-6 group hover:border-blue-500/30 transition-all">
                      <node.icon className={cn("h-12 w-12", node.color, "animate-pulse")} />
                      <div>
                         <p className="text-sm font-black text-white uppercase tracking-widest">{node.label}</p>
                         <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{node.loc}</p>
                      </div>
                      <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-400">{node.status}</Badge>
                   </div>
                 ))}
              </div>

              <div className="p-12 bg-emerald-500/5 border-4 border-emerald-500/20 rounded-[4rem] space-y-8 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -translate-x-full animate-[shine_5s_infinite]" />
                 <div className="flex items-center gap-6 relative z-10">
                    <ShieldCheck className="h-16 w-16 text-emerald-500" />
                    <div className="space-y-2">
                       <h4 className="text-3xl font-black uppercase text-white">Chiffrement Bout-en-Bout (E2EE)</h4>
                       <p className="text-lg text-slate-400 italic">"Intégrité post-quantique validée pour les flux Shengli Oilfield. Zéro-connaissance (ZKP) implémenté sur le maillage neural."</p>
                    </div>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-between items-center">
               <div className="flex gap-16 text-slate-500 text-[11px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-3"><History size={16} /> Audit Log v50.0</div>
                  <div className="flex items-center gap-3"><Database size={16} /> Geo-Redundant Storage</div>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-2xl">Lancer Diagnostic Sécurité</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Access Control & Integrity */}
        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Key className="h-16 w-16 text-amber-500 mx-auto mb-6 animate-bounce" />
              <CardTitle className="text-2xl font-black uppercase text-white tracking-widest">Contrôle d'Accès Granulaire</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-10">
               <div className="space-y-6">
                  {[
                    { label: "Auth Biométrique", status: "ENFORCED", color: "text-emerald-400" },
                    { label: "RBAC (Niveau 10)", status: "ACTIVE", color: "text-blue-400" },
                    { label: "MFA Post-Quantique", status: "SCELLÉ", color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-amber-500/30 transition-all">
                       <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <Badge variant="outline" className={cn("text-[8px] border-none px-4", stat.color, "bg-white/5")}>{stat.status}</Badge>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[4rem] text-center shadow-inner group">
                  <ShieldAlert className="h-12 w-12 text-amber-500 mx-auto mb-6 animate-pulse" />
                  <p className="text-[14px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-amber-300 transition-colors">
                    "La souveraineté numérique est scellée par le protocole 'Zero-Touch' du Dr. Hakim Chibubi."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">Générer Rapport Conformité RGPD</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
