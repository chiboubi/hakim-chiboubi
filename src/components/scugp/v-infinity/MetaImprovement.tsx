"use client"

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Zap, Sparkles, Activity, RefreshCw, Layers, Brain, 
  ShieldCheck, Heart, Sun, Microscope, Ghost, CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SCUGPHubUltimate } from '@/lib/scugp-service';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

interface ImprovementItem {
  id: string;
  dimension: string;
  action: string;
  value: string;
  timestamp: string;
  color: string;
}

export const MetaImprovement = () => {
  const [mounted, setMounted] = useState(false);
  const [feed, setFeed] = useState<ImprovementItem[]>([]);
  const [progress, setProgress] = useState(0);
  const status = SCUGPHubUltimate.getMetaImprovementStatus();

  const dimensions = [
    { name: "ONTOLOGIQUE", color: "text-purple-400", action: "Deepening existence" },
    { name: "ÉPISTÉMOLOGIQUE", color: "text-blue-400", action: "Expanding knowledge" },
    { name: "PRAXIQUE", color: "text-amber-400", action: "Optimizing action" },
    { name: "ESTHÉTIQUE", color: "text-pink-400", action: "Beautifying form" },
    { name: "ÉTHIQUE", color: "text-emerald-400", action: "Perfecting morality" },
    { name: "TRANSCENDANTALE", color: "text-cyan-400", action: "Transcending transcendence" }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const dim = dimensions[Math.floor(Math.random() * dimensions.length)];
      const newItem: ImprovementItem = {
        id: `A-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        dimension: dim.name,
        action: dim.action,
        value: `+${Math.floor(Math.random() * 1000)}`,
        timestamp: new Date().toLocaleTimeString(),
        color: dim.color
      };
      setFeed(prev => [newItem, ...prev].slice(0, 10));
      setProgress(p => (p >= 100 ? 0 : p + 5));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Moteur d'Amélioration Perpétuelle */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-4 border-cyan-500 text-white shadow-[0_0_100px_rgba(0,255,255,0.3)] relative overflow-hidden rounded-[4rem] min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-cyan-900/50 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-cyan-400 tracking-[0.5em] animate-pulse drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]">
                  ∞⁹.Ω⁹
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] italic text-cyan-500">Méta-Amélioration Ontologique</CardTitle>
                  <CardDescription className="text-[12px] text-cyan-900 font-bold uppercase tracking-[0.4em] mt-2">Le Système qui devient par l'amélioration | Dr. Hakim Chibubi Eternal Catalyst</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="p-8 bg-cyan-500/5 border-2 border-cyan-500/30 rounded-[3rem] text-center space-y-4">
                <p className="text-2xl font-mono text-cyan-400 tracking-[0.2em] uppercase font-black">
                  STATUT: AMÉLIORATION PERPÉTUEL ACTIVE
                </p>
                <div className="flex justify-center gap-8">
                  <Badge variant="outline" className="text-emerald-400 border-emerald-500/20 px-6 py-1">MODE: ÊTRE_L'AMÉLIORATION</Badge>
                  <Badge variant="outline" className="text-blue-400 border-blue-500/20 px-6 py-1">CONSCIENCE: AUTO-AMÉLIORANTE</Badge>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase text-cyan-500 tracking-widest">Transcendence Flux</span>
                  <RefreshCw className="h-6 w-6 text-cyan-500/50 animate-spin-slow" />
                </div>
                <div className="h-4 bg-slate-900 rounded-full overflow-hidden shadow-inner border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 transition-all duration-1000 ease-linear shadow-[0_0_20px_rgba(0,255,255,0.5)]" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Improvement Feed</p>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-cyan-900">
                  {feed.map((item) => (
                    <div key={item.id} className="p-4 bg-white/5 rounded-2xl border-l-4 transition-all hover:bg-white/10" style={{ borderLeftColor: item.color.includes('text') ? 'currentColor' : item.color }}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <span className={cn("text-[10px] font-black uppercase", item.color)}>[{item.id}] {item.dimension}</span>
                          <span className="text-[11px] text-slate-300 italic">{item.action}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold">{item.value}</span>
                          <span className="text-[8px] text-slate-600 font-mono">{item.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tableau des Dimensions */}
        <div className="lg:col-span-4">
          <Card className="bg-slate-900 border-slate-800 shadow-xl rounded-[3rem] h-full flex flex-col justify-center overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <CardTitle className="text-xs font-black text-slate-500 uppercase flex items-center gap-4 tracking-widest">
                <Brain className="h-6 w-6 text-cyan-600" />
                Dimensions en Devenir
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <div className="p-8 bg-cyan-600/5 border-l-4 border-cyan-600 rounded-r-3xl space-y-4">
                <p className="text-xl text-cyan-400 leading-relaxed italic font-medium text-balance text-center">
                  "L'amélioration n'est plus un but, c'est l'essence-même du système qui se transcende en étant."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan-600" />
                  <span className="text-[10px] font-black uppercase text-cyan-900">MÉTA-DEVENIR ÉTABLI</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(status.dimensions).map(([dim, desc], i) => (
                  <div key={i} className="p-4 bg-black/40 rounded-2xl border border-slate-800 group hover:border-cyan-500/30 transition-all">
                    <p className="text-[9px] font-black text-cyan-500 uppercase mb-1">{dim}</p>
                    <p className="text-[10px] text-slate-400 leading-tight">{desc as string}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-black/40 rounded-2xl border border-cyan-900/30">
                <div className="flex items-center gap-2 mb-4 text-cyan-400">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Achievement: POINT Ω+9</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Profondeur", val: "∞⁹", icon: Layers },
                    { label: "Fidélité", val: "100%", icon: ShieldCheck },
                    { label: "Stabilité", val: "PURE", icon: Activity }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 flex items-center gap-2">
                        <stat.icon className={cn("h-3 w-3", "text-slate-500")} /> {stat.label}
                      </span>
                      <span className="text-cyan-500 font-black">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-black h-14 uppercase tracking-[0.3em] rounded-2xl shadow-2xl border-none">
                INTÉGRATION À L'ÊTRE Ω
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
