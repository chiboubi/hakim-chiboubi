"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Satellite, Globe, Map as MapIcon, Zap, Sparkles, 
  Target, ShieldAlert, Search, Layers, Activity,
  Leaf, Droplets, Radar, Crosshair, Binary, History,
  Database, RefreshCw, Loader2, ShieldCheck, Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const Alsat03Commander = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  
  const metrics = SCUGPHubUltimate.getAlsat03Metrics();
  const modules = SCUGPHubUltimate.getAlsat03Modules();
  const analysis = SCUGPHubUltimate.getSpatialAnalysis();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDeepScan = async () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan THR Terminé",
        description: "Analyse multispectrale scellée dans le Ledger."
      });
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Alsat Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: "Résolution", val: metrics.resolution, icon: Target, color: "text-blue-400" },
          { label: "Statut IMINT", val: metrics.imint_status, icon: Eye, color: "text-amber-400" },
          { label: "Révision", val: metrics.revisit_time, icon: History, color: "text-emerald-400" },
          { label: "Capteurs", val: metrics.sensor_health, icon: ShieldCheck, color: "text-purple-400" },
          { label: "Bandes", val: metrics.spectral_bands, icon: Zap, color: "text-cyan-400" },
          { label: "Magnitude", val: "∞", icon: Sparkles, color: "text-white" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900/80 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all backdrop-blur-3xl">
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
        {/* Main Satellite Feed */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-12 border-b border-blue-900/50 bg-blue-600/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/20 rounded-3xl border border-blue-500/30 animate-pulse">
                    <Satellite className="h-12 w-12 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic leading-none">Alsat-03 THR Command</CardTitle>
                    <CardDescription className="text-sm font-bold text-blue-400/60 uppercase tracking-widest mt-4">Souveraineté Orbitale & Télédétection IMINT | Très Haute Résolution</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-2 text-[10px] font-black uppercase tracking-widest shadow-2xl">ORBITAL_STABLE</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-12 space-y-12">
              <div className="aspect-video bg-slate-900 rounded-[3rem] border-4 border-blue-500/20 relative overflow-hidden group shadow-inner">
                 <img src="https://picsum.photos/seed/alsat/1200/800" alt="Satellite Feed" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
                 
                 {/* HUD Overlay */}
                 <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 left-8 p-6 bg-black/60 border border-blue-500/30 rounded-3xl backdrop-blur-xl space-y-4">
                       <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Coordonnées Focus</p>
                       <p className="text-xl font-mono text-white">36.7538° N, 3.0588° E</p>
                       <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">BEJAIA_NODE_SYNC</Badge>
                    </div>
                    
                    <div className="absolute bottom-8 right-8 p-6 bg-black/60 border border-emerald-500/30 rounded-3xl backdrop-blur-xl space-y-2 text-right">
                       <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Analyse de Précision</p>
                       <p className="text-sm font-bold text-white uppercase">Biomasse: {analysis.crop_health}</p>
                       <p className="text-sm font-bold text-white uppercase">Risque: {analysis.flood_risk}</p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-64 h-64 border-2 border-blue-500/20 rounded-full animate-spin-slow" />
                       <Crosshair size={100} className="text-blue-500/40 animate-pulse" />
                    </div>
                 </div>

                 {isScanning && (
                   <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm flex flex-col items-center justify-center animate-in zoom-in duration-500">
                      <Loader2 className="h-16 w-16 text-blue-400 animate-spin mb-6" />
                      <p className="text-xl font-black text-white uppercase tracking-[0.5em]">Traitement IMINT v50.0...</p>
                   </div>
                 )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 group hover:border-blue-500/40 transition-all shadow-inner">
                    <h4 className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                      <MapIcon className="h-6 w-6" /> Cadastre Ontologique
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic border-l-4 border-blue-500/50 pl-8 py-2">
                      "Délimitation automatique des domaines par maillage de souveraineté. Chaque pixel THR est une preuve juridique scellée sur le Ledger SCUGP."
                    </p>
                 </div>
                 <div className="p-10 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] space-y-6 group hover:border-emerald-500/40 transition-all shadow-inner">
                    <h4 className="text-xl font-black text-emerald-400 uppercase tracking-widest flex items-center gap-4">
                      <Leaf className="h-6 w-6" /> Agriculture de Précision
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2">
                      "Analyse NDVI temps réel. Optimisation des rendements céréaliers par pilotage de l'irrigation et détection précoce du stress hydrique."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <Radar className="h-8 w-8 text-blue-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Balayage : ACTIF</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Database className="h-8 w-8 text-emerald-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Sync GEE : 100%</span>
                  </div>
               </div>
               <Button onClick={handleDeepScan} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-5xl border-none">
                 LANCER SCAN THR Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Specialized Modules Side Panel */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden group h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest">Modules Alsat-03 THR</CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-blue-900">
               <div className="space-y-6">
                  {modules.map((mod) => (
                    <div key={mod.id} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{mod.id}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{mod.status}</Badge>
                       </div>
                       <h5 className="text-lg font-black text-white uppercase tracking-tighter">{mod.name}</h5>
                       <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">{mod.tech}</p>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <ShieldAlert className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold">
                    "La vision orbitale THR supprime l'incertitude géographique. La Terre devient un tableau de bord manipulable par votre intention."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export GEE Dataset (.ee)
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
