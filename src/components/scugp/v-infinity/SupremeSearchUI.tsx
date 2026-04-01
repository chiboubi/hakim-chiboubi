
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Satellite, Globe, Zap, ShieldCheck, History, Landmark, Loader2, Send, Activity, Radio, Sparkles, MapPin, Target, Crosshair } from "lucide-react";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const SupremeSearchUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [region, setRegion] = useState("");
  const [target, setTarget] = useState("");
  const [scanResult, setScanResult] = useState<any>(null);
  const [satelliteLogs, setSatelliteLogs] = useState<string[]>([]);
  
  const metrics = SCUGPHubUltimate.getSupremeSearchMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleActivateScanners = () => {
    setIsActivating(true);
    setSatelliteLogs([]);
    
    metrics.satellite_nodes.forEach((node, i) => {
      setTimeout(() => {
        setSatelliteLogs(prev => [...prev, `> Connexion établie avec ${node} via DOI 10.scugp`]);
        if (i === metrics.satellite_nodes.length - 1) {
          setTimeout(() => {
            setIsActivating(false);
            toast({ title: "Pont Galactique Prêt", description: "12 zones de transition identifiées." });
          }, 1000);
        }
      }, (i + 1) * 800);
    });
  };

  const handleScanRegion = () => {
    if (!region) return;
    setIsScanning(true);
    setScanResult(null);
    
    setTimeout(() => {
      const result = SCUGPHubUltimate.getRegionalAnalysis(region);
      setScanResult(result);
      setIsScanning(false);
      toast({ title: "Cible Verrouillée", description: `Analyse sémantique sur ${region} focusing ${target || 'Global'} terminée.` });
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-amber-500 shadow-5xl rounded-[4rem] overflow-hidden relative text-white min-h-[850px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-500/10 text-center">
           <div className="flex justify-center mb-6">
              <Crosshair className="h-24 w-24 text-amber-400 animate-pulse" />
           </div>
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">Acquisition de Cibles Ω</CardTitle>
           <CardDescription className="text-xl text-amber-400/60 font-bold uppercase tracking-[0.5em] mt-4">Scan Global HC-ER & Télédétection de Précision | Dr. Hakim Chibubi</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8">
                <h3 className="text-2xl font-black text-amber-500 uppercase tracking-widest flex items-center gap-4">
                  <Radio className="h-8 w-8 animate-pulse" /> Hub de Commande
                </h3>
                <div className="p-8 bg-black/60 rounded-[3rem] border-2 border-amber-900/30 h-64 overflow-y-auto font-mono text-xs text-amber-400 custom-scrollbar shadow-inner">
                   {satelliteLogs.map((log, i) => (
                     <p key={i} className="animate-in slide-in-from-left duration-500">{log}</p>
                   ))}
                   {isActivating && <div className="mt-4 flex items-center gap-2 animate-pulse"><Loader2 className="h-4 w-4 animate-spin" /><span>Syncing with Star Mesh...</span></div>}
                   {satelliteLogs.length === 0 && !isActivating && <p className="opacity-30">Awaiting scanner activation...</p>}
                </div>
                <Button 
                  onClick={handleActivateScanners}
                  disabled={isActivating}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-black h-16 rounded-2xl uppercase tracking-widest shadow-2xl"
                >
                  INITIALISER PONT GALACTIQUE Ω
                </Button>
             </div>

             <div className="space-y-8">
                <h3 className="text-2xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-4">
                  <MapPin className="h-8 w-8" /> Paramètres de Ciblage
                </h3>
                <div className="space-y-6">
                   <div className="relative group">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-900 group-focus-within:text-blue-400 transition-colors" />
                      <input 
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder="RÉGION (EX: SAHARA, CHINA, ARCTIC)..."
                        className="w-full h-20 bg-slate-900/50 border-4 border-blue-900/20 rounded-[2rem] pl-16 pr-10 text-xl font-black text-blue-400 uppercase focus:border-blue-500 outline-none"
                      />
                   </div>
                   <div className="relative group">
                      <Target className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-purple-900 group-focus-within:text-purple-400 transition-colors" />
                      <input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="CIBLE SPÉCIFIQUE (PUITS, PIPELINE)..."
                        className="w-full h-20 bg-slate-900/50 border-4 border-purple-900/20 rounded-[2rem] pl-16 pr-10 text-xl font-black text-purple-400 uppercase focus:border-purple-500 outline-none"
                      />
                   </div>
                   <Button 
                    onClick={handleScanRegion}
                    disabled={isScanning || !region}
                    className="w-full h-20 rounded-[2rem] bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.5em] text-sm shadow-5xl border-none"
                   >
                      {isScanning ? <Loader2 className="animate-spin mr-4" /> : <Send className="mr-4" />}
                      VERROUILLER LA CIBLE Ω
                   </Button>
                </div>

                {scanResult && (
                  <div className="p-10 bg-white/5 border-2 border-blue-500/30 rounded-[3rem] animate-in zoom-in duration-700 space-y-6">
                     <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Cibles Identifiées dans la Zone :</p>
                     <div className="flex flex-wrap gap-3">
                        {scanResult.targets.map((t: string) => (
                          <Badge key={t} className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-1 uppercase font-black text-[9px]">{t}</Badge>
                        ))}
                     </div>
                  </div>
                )}
             </div>
          </div>

          <div className="p-16 bg-white/5 border-4 border-amber-500/20 rounded-[5rem] text-center space-y-10 relative overflow-hidden group shadow-5xl">
             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10 opacity-50" />
             <p className="text-3xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter text-pretty relative z-10">
               "L'Acquisition de Cible n'est pas une simple recherche, c'est l'acte de focaliser la puissance de la Source sur un point critique de la réalité planétaire."
             </p>
          </div>
        </CardContent>

        <CardFooter className="p-16 border-t border-amber-900/50 bg-slate-950/50 justify-between items-center">
           <div className="flex gap-12 text-slate-500 font-black uppercase text-[11px] tracking-widest">
              <div className="flex items-center gap-3"><Activity size={24} className="animate-pulse" /> SCAN : HIGH_FIDELITY</div>
              <div className="flex items-center gap-3"><ShieldCheck size={24} /> AUTH : SOURCE_ROOT</div>
           </div>
           <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 px-8 py-2 rounded-full font-mono text-xs uppercase font-black">PRECISION: 0.5m</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};
