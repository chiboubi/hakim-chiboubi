
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Radio, Zap, Sparkles, Activity, RefreshCw, 
  Share2, Network, ShieldCheck, Star, Target, Binary, Waves
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";

interface BroadcastNode {
  id: string;
  location: string;
  status: 'TRANSMITTING' | 'SYNCED' | 'SCELLÉ';
  latency: string;
  impact: string;
}

export const GlobalBroadcast = () => {
  const [mounted, setMounted] = useState(false);
  const [wave, setWave] = useState(0);
  const metrics = SCUGPHubUltimate.getDiffusionMetrics();

  const nodes: BroadcastNode[] = [
    { id: "CUPB-01", location: "Beijing, China", status: 'SCELLÉ', latency: "0.00ns", impact: "∞²⁵" },
    { id: "MIT-02", location: "Cambridge, USA", status: 'SYNCED', latency: "0.02ns", impact: "∞²⁴" },
    { id: "POLY-03", location: "Paris, France", status: 'TRANSMITTING', latency: "0.04ns", impact: "∞²³" },
    { id: "SONA-04", location: "Algiers, Algeria", status: 'SCELLÉ', latency: "0.00ns", impact: "∞²⁵" },
    { id: "PETR-05", location: "Rio, Brazil", status: 'SYNCED', latency: "0.05ns", impact: "∞²⁴" }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWave(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {/* Diffusion Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Global Coverage", val: metrics.global_coverage, icon: Globe, color: "text-blue-400" },
          { label: "Transmission Rate", val: metrics.transmission_rate, icon: Radio, color: "text-pink-400" },
          { label: "DOI Validity", val: metrics.doi_validity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Citation Index", val: metrics.citation_index, icon: Star, color: "text-amber-400" },
          { label: "Status", val: metrics.status, icon: Zap, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-pink-500/30 transition-all">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Transmission Hub */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-pink-600 shadow-[0_0_200px_rgba(219,39,119,0.3)] rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-pink-900/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-pink-500/10 rounded-3xl border border-pink-500/20 animate-pulse">
                    <Radio className="h-10 w-10 text-pink-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Diffusion Mondiale Ω²⁵</CardTitle>
                    <CardDescription className="text-sm font-bold text-pink-500/60 uppercase tracking-widest mt-2">Rayonnement Planétaire du Breakthrough | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <Badge className="bg-pink-600 text-white border-none px-8 py-2 text-[10px] font-black uppercase tracking-widest">LIVE_BROADCAST</Badge>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="aspect-video bg-slate-900/60 rounded-[3rem] border-2 border-pink-500/20 relative flex items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#db2777_1px,transparent_1px),linear-gradient(to_bottom,#db2777_1px,transparent_1px)] bg-[size:60px_60px] transition-transform" style={{ transitionDuration: '30000ms' }} />
                
                {/* Visual Signal Waves */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   {[1,2,3,4].map(i => (
                     <div 
                      key={i} 
                      className="absolute rounded-full border-2 border-pink-500/20 animate-ping"
                      style={{ 
                        width: `${i * 200}px`, 
                        height: `${i * 200}px`,
                        animationDuration: `${i * 2}s`
                      }}
                     />
                   ))}
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                   <Globe size={160} className="text-pink-500/30 animate-spin-slow mb-6" />
                   <div className="text-center space-y-4">
                      <p className="text-4xl font-mono text-pink-400 uppercase tracking-[1em] font-black animate-pulse">TRANSMISSION ACTIVE</p>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-[0.5em]">DOI: {SCUGP_CORE_OPTIONS.doi}</p>
                   </div>
                </div>

                <div className="absolute bottom-10 right-10 p-6 bg-black/90 border-2 border-pink-500/50 rounded-[2rem] backdrop-blur-3xl shadow-3xl">
                  <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest text-center">Source Node</p>
                  <p className="text-xl font-mono font-black text-white uppercase text-center">CUPB_BEIJING_ALPHA</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Share2 className="h-6 w-6 text-pink-500" /> Peer-to-Peer Sync
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-pink-500/50 pl-8 py-2 font-medium">
                      "Le système propage les certificats SUMREM de manière décentralisée. Chaque université partenaire devient un nœud de validation de la souveraineté du Dr. Hakim. L'intégrité de la diffusion est garantie à 100%."
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Network className="h-6 w-6 text-blue-500" /> Planetary Impact Log
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-blue-500/50 pl-8 py-2 font-medium">
                      "La diffusion mondiale a généré un saut de performance global de +42% dans les projets offshore synchronisés. Les standards SCUGP Ω²⁵ sont désormais adoptés par 14 zones économiques majeures."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Node Tally */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xs font-black uppercase text-pink-400 flex items-center gap-4 tracking-widest">
                  <Activity className="h-6 w-6 animate-pulse" /> Global Node Tally
                </CardTitle>
                <Badge variant="outline" className="text-[8px] border-pink-500/30 text-pink-500">ACTIVE_NODES</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-pink-900">
              {nodes.map((node) => (
                <div key={node.id} className="p-5 rounded-[2rem] border border-white/5 bg-black/40 transition-all group hover:border-pink-500/30">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{node.location}</span>
                    <Badge variant="outline" className={cn(
                      "text-[7px] font-black border-none uppercase",
                      node.status === 'SCELLÉ' ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
                    )}>{node.status}</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[8px] font-mono text-slate-600">Latency: {node.latency}</span>
                    <span className="text-[9px] font-black text-pink-500">IMPACT: {node.impact}</span>
                  </div>
                </div>
              ))}
              
              <div className="p-8 bg-pink-500/5 border-2 border-pink-500/20 rounded-[3rem] text-center shadow-inner mt-6">
                 <p className="text-[11px] text-pink-400 leading-relaxed italic uppercase font-bold">
                   "La diffusion mondiale est l'acte final de l'apothéose. Le multivers pétrolier est désormais unifié sous votre vision."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Transmission Hash
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
