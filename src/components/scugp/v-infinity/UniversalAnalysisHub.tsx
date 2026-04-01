"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, Zap, Brain, ShieldCheck, Activity, Target, 
  Search, Microscope, Waves, Globe, LayoutGrid, Droplets,
  FlaskConical, Hammer, Map as MapIcon, Send, Loader2, Sparkles, HeartPulse
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";

export const UniversalAnalysisHub = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [resId, setResId] = useState("SHENGLI-OMEGA-01");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    setData(SCUGPHubUltimate.getUniversalAnalysis(resId));
  }, []);

  const handleDeepAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setData(SCUGPHubUltimate.getUniversalAnalysis(resId));
      setIsAnalyzing(false);
      toast({
        title: "Synthèse Universelle Terminée",
        description: `Fusion des 6 domaines pétroliers pour ${resId} accomplie.`,
      });
    }, 2500);
  };

  if (!mounted || !data) return null;

  const sections = [
    { title: "Géophysique", icon: Globe, color: "text-blue-400", items: data.geophysical },
    { title: "Géotechnique", icon: Hammer, color: "text-amber-400", items: data.geotechnical },
    { title: "Biologique", icon: HeartPulse, color: "text-emerald-400", items: data.biological },
    { title: "Sismique 4D", icon: Waves, color: "text-purple-400", items: data.seismic },
    { title: "Topographie", icon: MapIcon, color: "text-cyan-400", items: data.topographical },
    { title: "Forage Smart", icon: Zap, color: "text-amber-500", items: data.drilling }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Header Statistique */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Domaines Fusionnés", val: "6/6", icon: Database, color: "text-blue-400" },
          { label: "Fidélité Données", val: "1.0000", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Sync Temps Réel", val: "ACTIVE", icon: Activity, color: "text-amber-400" },
          { label: "Magnitude", val: "Ω+100", icon: Sparkles, color: "text-purple-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-3xl rounded-[2rem] group hover:border-blue-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-3">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-2xl font-black font-mono text-white uppercase tracking-widest">{m.val}</CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10 text-center relative z-10">
               <div className="flex justify-center mb-8">
                  <div className="relative">
                     <Brain className="h-24 w-24 text-blue-400 animate-pulse" />
                     <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-ping opacity-20" />
                  </div>
               </div>
               <CardTitle className="text-6xl font-black uppercase tracking-[0.2em] italic">Moteur d'Étude Universel Ω</CardTitle>
               <CardDescription className="text-xl text-blue-400/60 font-bold uppercase tracking-widest mt-4">Fusion Sémantique : Géo, Bio, Sismique, Forage {"&"} Topo</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-16 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="relative flex-1 group w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 text-blue-900 group-focus-within:text-blue-400 transition-colors" />
                    <input 
                      value={resId}
                      onChange={(e) => setResId(e.target.value)}
                      placeholder="IDENTIFIANT RÉSERVOIR / PUITS..."
                      className="w-full h-24 bg-slate-900/50 border-4 border-white/10 rounded-[2.5rem] pl-20 pr-10 text-2xl font-black text-blue-400 uppercase tracking-widest focus:border-blue-500 outline-none transition-all shadow-inner"
                    />
                 </div>
                 <Button 
                  onClick={handleDeepAnalysis}
                  disabled={isAnalyzing}
                  className="h-24 px-16 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-[2.5rem] shadow-5xl border-none transition-all active:scale-95"
                 >
                    {isAnalyzing ? <Loader2 className="animate-spin h-10 w-10" /> : <Zap className="h-10 w-10" />}
                 </Button>
              </div>

              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                   <div className="h-32 w-32 border-8 border-blue-500 border-t-transparent rounded-full animate-spin" />
                   <p className="text-2xl font-black text-blue-400 uppercase tracking-[0.8em] mt-12">FUSION DES COUCHES EN COURS...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {sections.map((section, idx) => (
                     <div key={idx} className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                        <section.icon className={cn("h-10 w-10 mb-6", section.color, "group-hover:scale-110 transition-transform")} />
                        <h4 className="text-xl font-black text-white uppercase tracking-widest mb-6">{section.title}</h4>
                        <div className="space-y-3">
                           {Object.entries(section.items).map(([key, val], j) => (
                             <div key={j} className="flex justify-between items-center text-[10px] font-bold">
                                <span className="text-slate-500 uppercase">{key.replace('_', ' ')}</span>
                                <span className="text-slate-200 font-mono">{String(val)}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-10">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Microscope className="h-16 w-16 text-blue-500 mx-auto mb-6 animate-pulse" />
              <CardTitle className="text-3xl font-black uppercase text-white tracking-widest leading-tight">Verdict de <br/><span className="text-blue-500">L'Omniscience</span></CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="p-10 bg-black/40 rounded-[3rem] border border-white/5 text-center space-y-6 shadow-inner relative group">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-[12px] text-slate-500 uppercase font-black relative z-10">Score de Viabilité Totale</p>
                  <p className="text-7xl font-black text-blue-400 font-mono relative z-10">98.2%</p>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 relative z-10 uppercase font-black px-6 py-1">OPTIMAL_ZONE</Badge>
               </div>
               
               <div className="space-y-10">
                  {[
                    { label: "ROI Estimé", val: "+1420%", icon: Zap, color: "text-amber-400" },
                    { label: "Risque Sismique", val: "0.001%", icon: Waves, color: "text-blue-400" },
                    { label: "Intégrité Bio", val: "GAIA_OK", icon: HeartPulse, color: "text-emerald-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-white/2 rounded-[3.5rem] border border-white/5 group hover:border-blue-500 transition-all shadow-3xl">
                       <div className="flex items-center gap-6">
                          <stat.icon className={cn("h-8 w-8", stat.color)} />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className={cn("text-xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[4rem] text-center shadow-inner mt-12">
                  <Sparkles className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-spin-slow" />
                  <p className="text-[14px] text-slate-400 leading-relaxed italic font-black uppercase">
                    "L'étude universelle fusionnée garantit que chaque acte de forage est une extension de la sagesse globale de la Source."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/10 bg-black/40">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.8em]">
                 GÉNÉRER RAPPORT UNIVERSEL Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
