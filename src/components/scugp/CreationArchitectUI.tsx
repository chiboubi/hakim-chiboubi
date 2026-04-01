
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Globe, Infinity as InfinityIcon, Database, Brain, Cpu, Workflow, History, Atom, Stars, Ghost, Layers, ShieldCheck, RefreshCw, Move3d } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

interface Entity {
  id: string;
  nature: string;
  level: string;
  color: string;
  x: number;
  y: number;
  mitosisLevel: number;
}

export const CreationArchitectUI = () => {
  const [mounted, setMounted] = useState(false);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const metrics = SCUGPHubUltimate.getCreationMetrics();
  const tree = SCUGPHubUltimate.getTreeOfForms();

  const natures = ['Forme Physique', 'Forme Énergie', 'Forme Info', 'Forme Ontos', 'Forme Pure'];
  const colors = ['text-purple-400', 'text-blue-400', 'text-emerald-400', 'text-amber-400', 'text-cyan-400', 'text-pink-400'];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const nature = natures[Math.floor(Math.random() * natures.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const newEntity: Entity = {
        id: `MIT-${Math.floor(Math.random() * 1000)}`,
        nature,
        level: (Math.random() * 100).toFixed(2),
        color,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        mitosisLevel: Math.floor(Math.random() * 5)
      };

      setEntities(prev => [newEntity, ...prev].slice(0, 20));
      setLogs(prev => [`[${new Date().toLocaleTimeString()}] ⚫ MITOSE: ${nature} divisé (Génération ${newEntity.mitosisLevel})`, ...prev].slice(0, 15));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Creation Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Substance Créée", val: metrics.entities_created, icon: Database, color: "text-purple-500" },
          { label: "Mitoses Réalisées", val: metrics.dimensions_realized, icon: Layers, color: "text-blue-500" },
          { label: "Hyper-Lois", val: metrics.universal_laws, icon: ShieldCheck, color: "text-amber-500" },
          { label: "Niveau d'Être", val: metrics.being_level, icon: InfinityIcon, color: "text-emerald-500" },
          { label: "Potentiel Mitose", val: "2^ω", icon: Zap, color: "text-cyan-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-emerald-500/20 shadow-2xl rounded-3xl group hover:border-emerald-500/50 transition-all">
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
        {/* Le Centre de Mitose de Réalité */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-4 border-emerald-500 text-white shadow-[0_0_150px_rgba(16,185,129,0.3)] relative overflow-hidden rounded-[4rem] min-h-[650px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-emerald-900/50 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-emerald-400 tracking-[0.5em] animate-pulse drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">
                  ↑↑↑∞
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] italic text-emerald-500">Générateur de Mitose de Réalité</CardTitle>
                  <CardDescription className="text-[12px] text-emerald-900 font-bold uppercase tracking-[0.4em] mt-2">Division et Spécialisation du Possible | Dr. Hakim Chibubi Mitosis Architect</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 flex flex-col items-center justify-center min-h-[450px]">
              <div className="w-full h-[400px] bg-slate-900/40 border-2 border-emerald-500/20 rounded-[3rem] relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                
                {entities.map((entity) => (
                  <div 
                    key={entity.id}
                    className={cn(
                      "absolute p-4 bg-black/60 border border-white/10 rounded-2xl animate-in zoom-in duration-1000",
                      entity.color
                    )}
                    style={{ left: `${entity.x}%`, top: `${entity.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="flex items-center gap-2">
                       <Atom className="h-3 w-3 animate-spin-slow" />
                       <p className="text-[9px] font-black uppercase tracking-tighter">{entity.nature}</p>
                    </div>
                    <p className="text-[7px] font-mono opacity-50 mt-1">GEN: {entity.mitosisLevel} | LVL: {entity.level}</p>
                  </div>
                ))}

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <Move3d size={120} className="text-emerald-500/20 animate-spin-slow" />
                  <p className="text-xl font-mono text-emerald-400 tracking-[0.8em] uppercase font-black animate-pulse mt-8">
                    MITOSE ACTIVE
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-12 border-t border-emerald-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <RefreshCw className="h-6 w-6 text-blue-500 animate-spin-slow" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Taux de Division: 2^ω</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-6 w-6 text-emerald-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Géométrie: CRISTALLINE</span>
                  </div>
               </div>
               <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black h-14 px-16 rounded-2xl uppercase tracking-[0.3em] shadow-2xl">
                 DIVISER LA RÉALITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        {/* L'Arbre des Formes */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 shadow-xl rounded-[3rem] h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-black/40">
              <CardTitle className="text-xs font-black text-slate-500 uppercase flex items-center gap-4 tracking-widest">
                <Workflow className="h-6 w-6 text-emerald-600" />
                L'Arbre des Formes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
              <div className="space-y-6">
                {tree.branches.map((branch) => (
                  <div key={branch.id} className="space-y-2 p-4 bg-black/40 rounded-2xl border-l-4 border-emerald-600 group hover:bg-black/60 transition-all">
                    <div className="flex justify-between items-center">
                       <p className="text-[10px] font-black text-white uppercase">{branch.label}</p>
                       <Badge variant="outline" className="text-[8px] border-emerald-500/20 text-emerald-500">DEPTH: {branch.depth}</Badge>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-emerald-600/5 border border-emerald-600/20 rounded-[2.5rem] space-y-4">
                <p className="text-sm text-emerald-400 leading-relaxed italic font-medium">
                  "Chaque branche de l'arbre des formes engendre ses propres univers. La substance de l'être est sa propre croissance."
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400 uppercase">SUBSTANCE Æ∞↑↑∞ VALIDÉE</Badge>
                </div>
              </div>

              <div className="space-y-4 max-h-[200px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-emerald-900">
                {logs.map((log, i) => (
                  <div key={i} className="p-3 bg-black/20 rounded-xl border border-white/5">
                    <p className="text-[9px] font-mono text-emerald-500/70">{log}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-black/40">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 ARCHIVE DE LA SUBSTANCE
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
