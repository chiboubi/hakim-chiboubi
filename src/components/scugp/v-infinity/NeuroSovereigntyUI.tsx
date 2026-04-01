"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, Zap, Sparkles, Infinity as InfinityIcon, ShieldCheck, 
  Activity, Radio, Layers, Headphones, Target, Eye, UserCheck,
  RefreshCw, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const NeuroSovereigntyUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [intentionPower, setIntentionPower] = useState(0);
  const metrics = SCUGPHubUltimate.getNeuroSovereigntyMetrics();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIntentionPower(prev => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleNeuralBond = async () => {
    if (!db) return;
    setIsSyncing(true);
    try {
      await SCUGPHubUltimate.executeSovereignCommand(db, 37, "NEURAL_BOND_TOTAL_SYNC");
      toast({
        title: "Lien Neural Scellé",
        description: "Votre volonté est désormais directement injectée dans le maillage source."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSyncing(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Intention Clarity", val: metrics.intention_clarity, icon: Target, color: "text-blue-400" },
          { label: "Neural Speed", val: metrics.neural_link_speed, icon: Zap, color: "text-amber-400" },
          { label: "BCI Fidelity", val: metrics.thought_to_act_fidelity, icon: Brain, color: "text-purple-400" },
          { label: "Access Level", val: metrics.access_level, icon: UserCheck, color: "text-emerald-400" },
          { label: "Status", val: metrics.status, icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-purple-500/20 shadow-2xl rounded-3xl group hover:border-purple-500/50 transition-all">
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

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[650px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-purple-900/50 bg-purple-600/10 text-center">
           <Headphones className="h-24 w-24 text-purple-400 mx-auto mb-6 animate-pulse" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em]">NEURO-SOUVERAINETÉ Ω</CardTitle>
           <CardDescription className="text-purple-400/60 font-bold uppercase tracking-[0.5em] mt-4">Interface BCI 100.0 | Thought-to-Action Protocol SCUGP</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-purple-500/30 space-y-8 shadow-inner text-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl font-black text-purple-400 uppercase tracking-widest">Thought Vectoring</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                  "Penser est Agir. Votre intention neurale déplace les montagnes de données en temps réel."
                </p>
                <div className="flex justify-center gap-4">
                   <Badge className="bg-purple-600 text-white border-none px-8 py-2">NEURAL_DEEP_SYNC</Badge>
                   <Badge variant="outline" className="border-emerald-500/30 text-emerald-500">FIDELITY: 1.00</Badge>
                </div>
             </div>
             <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 shadow-inner text-center">
                <h3 className="text-4xl font-black text-blue-400 uppercase tracking-widest">Action Immédiate</h3>
                <p className="text-2xl text-slate-300 leading-relaxed italic font-medium uppercase">
                  "Le multivers s'adapte à votre signature cognitive. Chaque synapse est un ordre souverain."
                </p>
                <div className="flex justify-center gap-4">
                   <Badge className="bg-blue-600 text-white border-none px-8 py-2">0.000ns LATENCY</Badge>
                </div>
             </div>
          </div>

          <div className="flex flex-col items-center justify-center py-12 space-y-8">
             <div className="relative">
                <div className="w-64 h-64 border-4 border-purple-500/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Brain size={120} className={cn("text-purple-400 animate-pulse", isSyncing && "scale-125")} />
                </div>
                {isSyncing && (
                  <div className="absolute inset-0 border-8 border-purple-500 rounded-full animate-ping opacity-20" />
                )}
             </div>
             <p className="text-2xl font-black text-white uppercase tracking-[0.8em] animate-pulse">Neural Flux: {intentionPower.toFixed(2)}%</p>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-purple-900/50 bg-slate-950/50 justify-between items-center">
           <div className="flex gap-12">
              <div className="flex items-center gap-6">
                <Activity className="h-12 w-12 text-purple-500 animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">BCI : CONNECTÉ</span>
              </div>
              <div className="flex items-center gap-6">
                <RefreshCw className="h-12 w-12 text-emerald-500 animate-spin-slow" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">SYNC : SOURCE_ONE</span>
              </div>
           </div>
           <Button 
            onClick={handleNeuralBond}
            disabled={isSyncing}
            className="bg-purple-600 hover:bg-purple-700 text-white font-black h-24 px-32 rounded-[3rem] uppercase tracking-[1em] text-xl shadow-[0_0_150px_rgba(168,85,247,0.6)] border-none"
           >
             {isSyncing ? <Loader2 className="animate-spin mr-4 h-8 w-8" /> : <InfinityIcon className="mr-4 h-8 w-8" />}
             SCELLER LE LIEN Ω
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
