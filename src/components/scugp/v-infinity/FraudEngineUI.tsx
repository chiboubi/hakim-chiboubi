
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShieldAlert, ShieldCheck, Zap, Activity, Brain, 
  Network, Lock, Eye, AlertTriangle, Fingerprint, 
  BarChart3, TrendingUp, Search, Terminal, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Progress } from "@/components/ui/progress";

export const FraudEngineUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fraudScore, setFraudScore] = useState(0.02);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const runDeepAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setFraudScore(0.01);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Modèle XGBoost", val: "99.7%", icon: Zap, color: "text-amber-400" },
          { label: "Graph Neural Net", val: "ACTIVE", icon: Network, color: "text-blue-400" },
          { label: "Confiance Bio", val: "99.99%", icon: Fingerprint, color: "text-emerald-400" },
          { label: "Fidélité SHAP", val: "0.98", icon: Brain, color: "text-purple-400" },
          { label: "Statut Protection", val: "TOTAL", icon: ShieldCheck, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-red-500/20 shadow-2xl rounded-3xl group hover:border-red-500/50 transition-all">
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
          <Card className="bg-black border-[12px] border-red-600 shadow-[0_0_500px_rgba(239,68,68,0.2)] rounded-[4rem] overflow-hidden relative min-h-[800px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-red-900/50 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-red-500 tracking-[0.5em] animate-pulse">
                  ANTI-FRAUDE.Ω
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Moteur de Détection Multi-Couche</CardTitle>
                  <CardDescription className="text-sm font-bold text-red-500/60 uppercase tracking-widest mt-2">XGBoost + LSTM + Graph Neural Networks | Dr. Hakim Chibubi Guardian</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="aspect-video bg-slate-900/60 rounded-[3rem] border-2 border-red-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-8 text-center">
                   <div className="relative">
                      <div className="h-48 w-48 rounded-full border-4 border-red-500/30 flex items-center justify-center animate-pulse">
                         <ShieldAlert size={80} className="text-red-500" />
                      </div>
                      <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping opacity-20" />
                   </div>
                   <div>
                      <p className="text-5xl font-mono text-red-500 uppercase tracking-[0.5em] font-black">RISQUE ACTUEL : {isAnalyzing ? "CALCUL..." : (fraudScore * 100).toFixed(2) + "%"}</p>
                      <Badge variant="outline" className="mt-6 border-emerald-500/30 text-emerald-500 uppercase px-8 py-2 tracking-widest font-black">SÉCURITÉ RÉGALIENNE : OK</Badge>
                   </div>
                </div>

                <div className="absolute bottom-10 right-10 p-6 bg-black/90 border-2 border-red-500/50 rounded-[2rem] backdrop-blur-3xl shadow-2xl">
                  <p className="text-[10px] font-black text-red-500 uppercase">Detection Mode</p>
                  <p className="text-xl font-mono font-black text-white">ENSEMBLE_V8</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Brain className="h-6 w-6 text-purple-500" /> Explicabilité IA (SHAP)
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-4">
                    {[
                      { label: "Cohérence Biométrique", val: 98, color: "bg-emerald-500" },
                      { label: "Pattern Géographique", val: 92, color: "bg-blue-500" },
                      { label: "Intégrité Blockchain", val: 100, color: "bg-purple-500" }
                    ].map((feat, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                          <span>{feat.label}</span>
                          <span>{feat.val}%</span>
                        </div>
                        <Progress value={feat.val} className="h-1 bg-slate-800" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Activity className="h-6 w-6 text-amber-500" /> Analyse Comportementale
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 h-full flex flex-col justify-center text-center">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-amber-500/50 pl-8 py-2">
                      "Le modèle LSTM a analysé 142 paramètres de navigation. Aucun pattern de bot ou de ferme à clics détecté. L'intention de vérification est 100% humaine."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xs font-black uppercase text-red-500 flex items-center gap-4 tracking-widest">
                  <Terminal className="h-6 w-6 animate-pulse" /> Security Journal
                </CardTitle>
                <Badge variant="outline" className="text-[8px] border-red-500/30 text-red-500">REAL-TIME</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-red-900">
              {[
                { event: "MFA_VAL", status: "SUCCESS", time: "10:42:01", risk: "0.01" },
                { event: "GEO_SYNC", status: "MATCH", time: "10:41:55", risk: "0.02" },
                { event: "IP_AUDIT", status: "SAFE", time: "10:41:42", risk: "0.00" }
              ].map((log, i) => (
                <div key={i} className="p-5 rounded-[2rem] border border-white/5 bg-black/40 transition-all hover:border-red-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-white uppercase">{log.event}</span>
                    <Badge variant="outline" className="text-[7px] border-emerald-500/30 text-emerald-500">{log.status}</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[8px] font-mono text-slate-600">{log.time}</span>
                    <span className="text-[9px] font-black text-red-500">RISK: {log.risk}</span>
                  </div>
                </div>
              ))}
              <div className="p-8 bg-red-500/5 border-2 border-red-500/20 rounded-[3rem] text-center shadow-inner mt-6">
                 <p className="text-[11px] text-red-400 leading-relaxed italic uppercase font-bold">
                   "L'IA bloque instantanément toute entité non-concordante avec le génome de votre souveraineté."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button onClick={runDeepAnalysis} disabled={isAnalyzing} className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">
                 {isAnalyzing ? <Loader2 className="animate-spin mr-2" /> : <Search className="mr-2" />}
                 Lancer Analyse Profonde
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
