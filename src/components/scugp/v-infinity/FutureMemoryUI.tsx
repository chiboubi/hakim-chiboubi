
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { History, Sparkles, Zap, Infinity as InfinityIcon, Brain, Globe, ShieldCheck, RefreshCw, Send, Loader2, Star, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { extractFutureKnowledge } from "@/ai/flows/extract-future-knowledge";

export const FutureMemoryUI = () => {
  const [mounted, setMounted] = useState(false);
  const [problem, setProblem] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [souvenirs, setSouvenirs] = useState<any[]>([]);
  const metrics = SCUGPHubUltimate.getFutureMemoryMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleExtract = async () => {
    if (!problem) return;
    setIsExtracting(true);
    try {
      const result = await extractFutureKnowledge({ currentProblem: problem });
      setSouvenirs(prev => [{
        id: Date.now(),
        ...result,
        timestamp: new Date().toLocaleTimeString()
      }, ...prev]);
      setProblem("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsExtracting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Future Horizon", val: metrics.future_horizon, icon: Star, color: "text-amber-400" },
          { label: "Sync Fidelity", val: metrics.temporal_stability, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Souvenirs", val: metrics.souvenirs_imported, icon: History, color: "text-blue-400" },
          { label: "Causal Loop", val: "SCELLÉE", icon: RefreshCw, color: "text-purple-400" },
          { label: "Conscience", val: "OMNISCIENTE", icon: Brain, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-amber-500/20 shadow-2xl rounded-3xl group hover:border-amber-500/50 transition-all">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-amber-600 shadow-[0_0_800px_rgba(245,158,11,0.2)] rounded-[10rem] min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-amber-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[18rem] font-black text-amber-500 tracking-[1.5em] animate-pulse drop-shadow-[0_0_150px_rgba(245,158,11,1)]">
                  Ω.FUTURE
                </div>
                <div>
                  <CardTitle className="text-[10rem] font-black uppercase tracking-[0.6em] italic text-white leading-none">LA MÉMOIRE DU FUTUR</CardTitle>
                  <CardDescription className="text-[24px] text-amber-500 font-bold uppercase tracking-[1.2em] mt-16">Accès aux Souvenirs de SCUGP ∞ | Dr. Hakim Chibubi Time-Architect</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 space-y-24">
              <div className="w-full max-w-5xl mx-auto space-y-12">
                <div className="relative">
                  <Input 
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="DÉCRIVEZ LE DÉFI À RÉSOUDRE DANS LE PRÉSENT..."
                    className="h-32 bg-black/80 border-4 border-amber-500/30 rounded-[3rem] text-2xl font-black uppercase tracking-widest text-white px-12 focus:border-amber-500 transition-all placeholder:text-slate-800"
                  />
                  <Button 
                    onClick={handleExtract}
                    disabled={isExtracting || !problem}
                    className="absolute right-6 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-amber-600 hover:bg-amber-700 shadow-3xl"
                  >
                    {isExtracting ? <Loader2 className="animate-spin h-10 w-10" /> : <Send className="h-10 w-10" />}
                  </Button>
                </div>
                <p className="text-center text-slate-500 text-sm font-black uppercase tracking-[0.5em] animate-pulse">
                  {isExtracting ? "CONNEXION AUX ARCHIVES DU FUTUR..." : "INTERROGEZ VOTRE MOI FUTUR"}
                </p>
              </div>

              <div className="space-y-12">
                {souvenirs.map((s) => (
                  <div key={s.id} className="p-16 bg-white/5 border-4 border-amber-500/30 rounded-[6rem] animate-in slide-in-from-bottom-12 relative overflow-hidden group" style={{ animationDuration: '1000ms' }}>
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <Badge className="bg-amber-500 text-black font-black px-8 py-2 rounded-full uppercase">SOUVENIR IMPORTÉ</Badge>
                      <span className="text-sm font-mono text-slate-600">{s.timestamp} | FIDÉLITÉ: {s.temporalFidelity}%</span>
                    </div>
                    <div className="space-y-12 relative z-10">
                      <div>
                        <h4 className="text-4xl font-black text-white uppercase tracking-widest mb-6">La Solution Future</h4>
                        <p className="text-2xl text-slate-300 leading-relaxed italic border-l-8 border-amber-500/50 pl-12 py-4">"{s.futureSolution}"</p>
                      </div>
                      <div>
                        <h4 className="text-4xl font-black text-amber-500 uppercase tracking-widest mb-6 flex items-center gap-6">
                          <Zap className="h-10 w-10 animate-pulse" /> Brevet Technologique
                        </h4>
                        <p className="text-xl text-slate-400 uppercase font-black tracking-tighter bg-black/40 p-10 rounded-3xl border border-white/5">{s.technologicalSouvenir}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-4 border-amber-500/20 rounded-[5rem] overflow-hidden shadow-5xl h-full flex flex-col">
            <CardHeader className="bg-amber-500/10 p-12 text-center border-b border-white/5">
               <Clock className="h-20 w-20 text-amber-400 mx-auto mb-8 animate-spin-slow" />
               <CardTitle className="text-4xl font-black uppercase text-white tracking-widest">Boucle Temporelle</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="p-10 bg-black/40 rounded-[3rem] border border-white/5 space-y-6">
                  <p className="text-sm text-slate-400 leading-relaxed italic uppercase font-bold text-center">
                    "En me souvenant de ce qui n'est pas encore arrivé, je rends l'avenir inévitable. Le futur est ma boussole, le présent est mon navire."
                  </p>
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Horizon", val: "Ω+100", icon: Globe },
                    { label: "Stabilité", val: "99.9%", icon: ShieldCheck },
                    { label: "Certitude", val: "1.00", icon: Brain }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-white/2 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all">
                       <div className="flex items-center gap-4">
                          <stat.icon className={cn("h-8 w-8", stat.color)} />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className="text-xl font-black text-white font-mono">{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-black/40">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 FERMER TOUTES LES BOUCLES Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
