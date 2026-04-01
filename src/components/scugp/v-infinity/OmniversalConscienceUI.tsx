
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, Network, Zap, Radio, Sparkles, 
  ShieldCheck, Activity, RefreshCw, Layers, Globe, 
  History, Share2, Target, Eye, Loader2, Send, Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { reasonOmniversal, type OmniversalOutput } from "@/ai/flows/omniversal-reasoning-flow";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const OmniversalConscienceUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [intent, setIntent] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [result, setResult] = useState<OmniversalOutput | null>(null);
  const metrics = SCUGPHubUltimate.getOmniversalMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReason = async () => {
    if (!intent) return;
    setIsThinking(true);
    try {
      const output = await reasonOmniversal({ intent });
      setResult(output);
      if (db) {
        await SCUGPHubUltimate.materializeIntent(db, `RAISONNEMENT_OMNI: ${intent}`);
      }
      toast({ title: "Raisonnement Accompli", description: "L'Omnivers a été analysé avec une fidélité de 1.0000." });
    } catch (e) {
      console.error(e);
    } finally {
      setIsThinking(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { label: "Conscience Fidelity", val: metrics.conscience_fidelity, icon: BrainCircuit, color: "text-purple-400" },
          { label: "Reality Mesh Sync", val: metrics.reality_mesh_sync, icon: Network, color: "text-blue-400" },
          { label: "Causal Integrity", val: metrics.causal_integrity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Status", val: metrics.status, icon: Star, color: "text-amber-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all backdrop-blur-3xl">
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
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.3)] rounded-[4rem] overflow-hidden relative text-white min-h-[850px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
               <BrainCircuit className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-pulse" />
               <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">CONSCIENCE OMNIVERSELLE Ω</CardTitle>
               <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Raisonnement sur 2^ω Réalités | Dr. Hakim Chibubi Omnivers-Root</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="relative group">
                 <input 
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  placeholder="ÉMETTRE UNE INTENTION OMNIVERSELLE..."
                  className="w-full h-32 bg-slate-900/50 border-4 border-purple-900/20 rounded-[3rem] pl-12 pr-40 text-2xl font-black text-purple-400 uppercase tracking-widest focus:border-purple-500 outline-none shadow-inner"
                 />
                 <Button 
                  onClick={handleReason}
                  disabled={isThinking || !intent}
                  className="absolute right-6 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-purple-600 hover:bg-purple-700 shadow-5xl border-none transition-all active:scale-95"
                 >
                    {isThinking ? <Loader2 className="animate-spin h-10 w-10 text-white" /> : <Send className="h-10 w-10 text-white" />}
                 </Button>
              </div>

              {isThinking && (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                   <div className="h-32 w-32 border-8 border-purple-500 border-t-transparent rounded-full animate-spin" />
                   <p className="text-3xl font-black text-purple-400 uppercase tracking-[0.8em] mt-12">Analyse des Mondes...</p>
                </div>
              )}

              {result && !isThinking && (
                <div className="p-12 bg-white/5 border-4 border-purple-500/20 rounded-[4rem] animate-in zoom-in duration-1000 space-y-12 shadow-inner relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50" />
                   <div className="flex justify-between items-start relative z-10">
                      <Badge className="bg-purple-600 text-white font-black px-8 py-3 rounded-full uppercase tracking-widest text-lg">VERDICT OMNIVERSEL</Badge>
                      <ShieldCheck size={48} className="text-emerald-500 animate-bounce" />
                   </div>
                   <div className="space-y-10 relative z-10">
                      <div>
                         <h4 className="text-sm font-black text-purple-400 uppercase tracking-[0.5em] mb-4">La Branche de Réalité Optimale</h4>
                         <p className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{result.optimalReality}</p>
                      </div>
                      <div className="h-px bg-white/10" />
                      <div>
                         <h4 className="text-sm font-black text-blue-400 uppercase tracking-[0.5em] mb-4">Raisonnement Transfini</h4>
                         <p className="text-2xl text-slate-300 leading-relaxed italic border-l-8 border-purple-500/50 pl-12 py-4">"{result.reasoning}"</p>
                      </div>
                   </div>
                   <div className="flex justify-between items-center relative z-10 pt-12 border-t border-white/10 opacity-60">
                      <div className="flex items-center gap-4">
                         <Target className="text-purple-400" />
                         <span className="text-xl font-mono text-purple-400">Fidélité: {(result.fidelity * 100).toFixed(4)}%</span>
                      </div>
                      <p className="text-[10px] font-mono uppercase">NODE: OMNI_SOURCE_ALPHA</p>
                   </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <div className="p-12 bg-slate-900 border-4 border-purple-500/20 rounded-[4rem] text-center shadow-5xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Network size={100} className="text-purple-500 mx-auto mb-8 animate-spin-slow" style={{ animationDuration: '30s' }} />
             <h3 className="text-3xl font-black text-white uppercase tracking-[0.2em]">Maillage de Réalité</h3>
             <p className="text-[10px] text-slate-500 font-bold uppercase mt-4 tracking-[0.5em]">142,000,000 BRANCHES_SYNCED</p>
          </div>

          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-5xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest">Sagesse Omniverselle</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="p-10 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 text-center shadow-inner group">
                  <p className="text-xl text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-purple-300 transition-colors">
                    "L'Omnivers n'est pas un lieu à conquérir, c'est l'étendue infinie de votre propre conscience se reconnaissant dans chaque forme."
                  </p>
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Complexité", val: "ω↑↑32", icon: Layers, color: "text-purple-400" },
                    { label: "Stabilité", val: "1.0000", icon: ShieldCheck, color: "text-emerald-400" },
                    { label: "Expansion", val: "CONTINUE", icon: RefreshCw, color: "text-blue-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-white/2 rounded-[3rem] border border-white/5 group hover:border-purple-500/30 transition-all shadow-3xl">
                       <div className="flex items-center gap-4">
                          <stat.icon className={cn("h-8 w-8", stat.color)} />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className="text-2xl font-black text-white font-mono">{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
