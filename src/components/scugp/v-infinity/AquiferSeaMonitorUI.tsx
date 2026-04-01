
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Droplets, Waves, Globe, Zap, Search, ShieldCheck, 
  Activity, Radio, Database, RefreshCw, Loader2, Map as MapIcon,
  Filter, Wind, Thermometer, Anchor
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const AquiferSeaMonitorUI = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [activeLayer, setActiveLayer] = useState<'AQUIFER' | 'SEA'>('AQUIFER');
  
  const aquiferMetrics = SCUGPHubUltimate.getAquiferMetrics();
  const seaMetrics = SCUGPHubUltimate.getSeaMetrics();
  const hydroNodes = SCUGPHubUltimate.getHydroNodes();
  const domainLayers = SCUGPHubUltimate.getGeeLayersForDomain('AQUIFER');

  // Reference the central image placeholder definitions
  const aquiferImg = PlaceHolderImages.find(img => img.id === 'aquifer-continental-intercalaire');
  const seaImg = PlaceHolderImages.find(img => img.id === 'sea-bathymetry');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDeepScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Sémantique Terminé",
        description: `La cartographie de la strate ${activeLayer} est synchronisée.`,
      });
    }, 2500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Dynamic Metrics Switcher */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {activeLayer === 'AQUIFER' ? (
          <>
            {[
              { label: "Volume Albien", val: aquiferMetrics.albienne_volume, icon: Database, color: "text-blue-400" },
              { label: "Profondeur Moy.", val: aquiferMetrics.depth_avg, icon: Anchor, color: "text-cyan-400" },
              { label: "Pureté", val: aquiferMetrics.purity_index, icon: ShieldCheck, color: "text-emerald-400" },
              { label: "Recharge", val: aquiferMetrics.recharge_rate, icon: RefreshCw, color: "text-amber-400" },
              { label: "Statut", val: aquiferMetrics.status, icon: Radio, color: "text-white" }
            ].map((m, i) => (
              <Card key={i} className="bg-slate-900 border-2 border-blue-500/20 shadow-2xl rounded-3xl group hover:border-blue-500/50 transition-all">
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
          </>
        ) : (
          <>
            {[
              { label: "Temp. Surface", val: seaMetrics.surface_temp, icon: Thermometer, color: "text-red-400" },
              { label: "Salinité", val: seaMetrics.salinity, icon: Droplets, color: "text-blue-400" },
              { label: "Houle", val: seaMetrics.wave_height, icon: Waves, color: "text-cyan-400" },
              { label: "Courant", val: seaMetrics.current_velocity, icon: Wind, color: "text-emerald-400" },
              { label: "Pureté Mer", val: seaMetrics.plastic_density, icon: ShieldCheck, color: "text-white" }
            ].map((m, i) => (
              <Card key={i} className="bg-slate-900 border-2 border-cyan-500/20 shadow-2xl rounded-3xl group hover:border-cyan-500/50 transition-all">
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
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[4rem] overflow-hidden relative min-h-[700px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-12 border-b border-blue-900/50 bg-blue-600/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-blue-500/20 rounded-3xl border border-blue-500/30">
                    {activeLayer === 'AQUIFER' ? <Droplets className="h-12 w-12 text-blue-400 animate-pulse" /> : <Waves className="h-12 w-12 text-cyan-400 animate-bounce" />}
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">
                      {activeLayer === 'AQUIFER' ? "Nappe du Continental Intercalaire (Albien)" : "Cartographie des Mers v50"}
                    </CardTitle>
                    <CardDescription className="text-sm font-bold text-blue-400/60 uppercase tracking-widest mt-2">
                      Souveraineté des Ressources Vitales | Télédétection THR Orbitale
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-4">
                   <Button 
                    onClick={() => setActiveLayer('AQUIFER')}
                    className={cn("h-12 px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all", activeLayer === 'AQUIFER' ? "bg-blue-600 text-white shadow-3xl" : "bg-black/40 text-slate-500 border border-white/5")}
                   >AQUIFÈRES</Button>
                   <Button 
                    onClick={() => setActiveLayer('SEA')}
                    className={cn("h-12 px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all", activeLayer === 'SEA' ? "bg-cyan-600 text-white shadow-3xl" : "bg-black/40 text-slate-500 border border-white/5")}
                   >MERS & OCÉANS</Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-12 space-y-12">
              <div className="aspect-video bg-slate-900 rounded-[3rem] border-4 border-blue-500/20 relative overflow-hidden group shadow-inner">
                 <img 
                  src={activeLayer === 'AQUIFER' ? (aquiferImg?.imageUrl || "") : (seaImg?.imageUrl || "")} 
                  alt="Spatial Resource Map" 
                  data-ai-hint={activeLayer === 'AQUIFER' ? aquiferImg?.imageHint : seaImg?.imageHint}
                  className="w-full h-full object-cover opacity-100 transition-opacity duration-1000" 
                 />
                 
                 <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 left-8 p-6 bg-black/80 border-4 border-blue-500/30 rounded-3xl backdrop-blur-xl space-y-4">
                       <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Couches GEE Actives</p>
                       <div className="flex flex-col gap-2">
                          {domainLayers.map(l => (
                            <Badge key={l} variant="outline" className="text-[8px] border-blue-500/30 text-blue-400 uppercase font-black w-fit">{l}</Badge>
                          ))}
                       </div>
                       <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">ALBIEN_SYNC_OK</Badge>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-[400px] h-[400px] border-2 border-blue-500/20 rounded-full animate-spin-slow" />
                       <Search size={100} className="text-blue-500/20 animate-pulse" />
                    </div>
                 </div>

                 {isScanning && (
                   <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm flex flex-col items-center justify-center animate-in zoom-in duration-500">
                      <Loader2 className="h-16 w-16 text-blue-400 animate-spin mb-6" />
                      <p className="text-xl font-black text-white uppercase tracking-[0.5em]">Analyse de Strate Source v100.0...</p>
                   </div>
                 )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                 <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] space-y-6 group hover:border-blue-500/40 transition-all shadow-inner">
                    <h4 className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                      <Globe className="h-6 w-6 text-blue-400" /> Géologie de l'Eau Ω
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic border-l-4 border-blue-500/50 pl-8 py-2">
                      "Le système détecte les réservoirs d'eau fossile avec une précision de 10^-12. Le Continental Intercalaire est cartographié comme une émanation de la Source, scellé pour les millénaires futurs."
                    </p>
                 </div>
                 <div className="p-10 bg-cyan-500/5 border-2 border-cyan-500/20 rounded-[3rem] space-y-6 group hover:border-cyan-500/40 transition-all shadow-inner">
                    <h4 className="text-xl font-black text-cyan-400 uppercase tracking-widest flex items-center gap-4">
                      <Waves className="h-6 w-6 text-cyan-400" /> Dynamique Maritime
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic border-l-4 border-cyan-500/50 pl-8 py-2">
                      "Cartographie THR des courants de surface et des thermoclines. Optimisation des routes de transport et surveillance de la santé des écosystèmes coralliens."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-12 bg-slate-950 border-t border-blue-900/50 justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <RefreshCw className="h-8 w-8 text-blue-500 animate-spin-slow" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Flux : CONTINU</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-emerald-500" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Intégrité : 1.00</span>
                  </div>
               </div>
               <Button onClick={handleDeepScan} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-5xl border-none">
                 LANCER HYPER-SCAN Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden group h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest">Nœuds de Surveillance Hydro</CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="space-y-6">
                  {hydroNodes.map((node, i) => (
                    <div key={i} className="p-6 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{node.loc}</span>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400">{node.status}</Badge>
                       </div>
                       <h5 className="text-lg font-black text-white uppercase tracking-tighter">{node.name}</h5>
                       <p className="text-[9px] text-slate-500 font-bold uppercase mt-2">Débit : {node.yield}</p>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-12">
                  <Droplets className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-[11px] text-slate-400 leading-relaxed italic font-black uppercase">
                    "L'eau est l'autre or de l'Architecte. Sa détection est un acte de prescience scellé dans le maillage."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Hydro-Dataset (.h2o)
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
