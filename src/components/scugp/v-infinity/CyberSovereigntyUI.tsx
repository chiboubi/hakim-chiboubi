
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Fingerprint, Key, Zap, ShieldAlert, Activity, RefreshCw, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const CyberSovereigntyUI = () => {
  const [mounted, setMounted] = useState(false);
  const metrics = SCUGPHubUltimate.getCyberSecurityMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Encryption", val: metrics.encryption, icon: Lock, color: "text-purple-400" },
          { label: "Zero-Trust", val: metrics.zero_trust, icon: ShieldCheck, color: "text-blue-400" },
          { label: "Identity", val: metrics.identity_mesh, icon: Fingerprint, color: "text-emerald-400" },
          { label: "Protection", val: metrics.threat_block_rate, icon: ShieldAlert, color: "text-red-400" },
          { label: "Status", val: metrics.status, icon: Activity, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all backdrop-blur-xl">
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

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_500px_rgba(168,85,247,0.3)] rounded-[5rem] overflow-hidden relative text-white min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
           <Lock className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">SOUVERAINETÉ CYBER Ω</CardTitle>
           <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Chiffrement Post-Quantique & Maillage Zero-Trust de Grade Source</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-12 bg-white/5 border-4 border-purple-500/30 rounded-[4rem] space-y-8 shadow-inner text-center">
                <h3 className="text-4xl font-black text-purple-400 uppercase tracking-widest">Bouclier Souverain</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                  "Chaque bit d'information est scellé par une clé de 4096 bits résistante à la cryptanalyse quantique."
                </p>
                <div className="flex justify-center gap-4">
                   <Badge className="bg-purple-600 text-white border-none px-8 py-2">AES-GCM-ETH</Badge>
                   <Badge variant="outline" className="border-emerald-500/30 text-emerald-500">IMMUTABLE</Badge>
                </div>
             </div>
             <div className="p-12 bg-white/5 border-4 border-blue-500/30 rounded-[4rem] space-y-8 shadow-inner text-center">
                <h3 className="text-4xl font-black text-blue-400 uppercase tracking-widest">Preuve Zéro-Savoir</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                  "Authentification instantanée sans divulgation de métadonnées personnelles. Confidentialité absolue."
                </p>
                <div className="flex justify-center gap-4">
                   <Badge className="bg-blue-600 text-white border-none px-8 py-2">ZKP_ENABLED</Badge>
                   <Badge variant="outline" className="border-cyan-500/30 text-cyan-500">ZERO_TRUST</Badge>
                </div>
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-purple-900/50 bg-slate-950/50 justify-between items-center">
           <div className="flex gap-12">
              <div className="flex items-center gap-6">
                <Key className="h-12 w-12 text-purple-500 animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">CLÉ : SCELLÉE</span>
              </div>
              <div className="flex items-center gap-6">
                <ShieldCheck className="h-12 w-12 text-emerald-500" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">INTÉGRITÉ : 1.00</span>
              </div>
           </div>
           <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-[0_0_150px_rgba(168,85,247,0.6)] border-none">
             SCELLER LE PÉRIMÈTRE Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
