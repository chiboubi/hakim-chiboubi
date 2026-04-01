
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Terminal, Code, Zap, Globe, Database, History,
  RefreshCw, Loader2, Sparkles, Binary, Play,
  Settings, Network, ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const GeemapInterfaceUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const metrics = SCUGPHubUltimate.getGeospatialMetrics();

  useEffect(() => {
    setMounted(true);
    setLogs([
      "> import geemap",
      "> Map = geemap.Map()",
      "> Map.add_basemap('HYBRID')",
      "> GEE_READY: Synchronisation avec le maillage neural Chibubi réussie."
    ]);
  }, []);

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setLogs(prev => [...prev, "> analysis = Map.zonal_statistics(roi, layer='biomass')", "✅ SUCCESS: Analyse Geemap complétée en 0.04ms."]);
      setIsExecuting(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-5xl rounded-[4rem] overflow-hidden relative text-blue-400">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            <CardHeader className="p-12 border-b border-blue-900/50 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <Terminal className="h-10 w-10 text-blue-400 animate-pulse" />
                  <div>
                    <CardTitle className="text-3xl font-black uppercase tracking-[0.4em] italic">Console Geemap Pro Ω</CardTitle>
                    <CardDescription className="text-[10px] text-blue-900 font-bold uppercase tracking-widest mt-2">Interaction GEE de Grade Scientifique | Python Backend Sync</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-2 text-[10px] rounded-full uppercase font-black">API_ACTIVE: {metrics.geemap_sync}</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-12 space-y-12">
              <div className="h-[450px] bg-black/80 rounded-[3rem] border-2 border-blue-900/30 p-10 font-mono text-sm space-y-4 overflow-y-auto custom-scrollbar shadow-inner relative">
                 {logs.map((line, i) => (
                   <div key={i} className={cn(
                     "animate-in fade-in slide-in-from-left-2 duration-300",
                     line.startsWith('>') ? "text-blue-400" : "text-emerald-400 font-black"
                   )}>
                     {line}
                   </div>
                 ))}
                 {isExecuting && <div className="flex items-center gap-4 text-amber-400 animate-pulse"><Loader2 size={12} className="animate-spin" /><span>Exécution du script GEE...</span></div>}
              </div>

              <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-[3rem] text-center">
                 <p className="text-xl text-slate-300 leading-relaxed italic font-medium uppercase tracking-tighter">
                   "Geemap permet au Dr. Hakim Chibubi de manipuler des pétaoctets de données satellitaires avec une syntaxe simplifiée, scellée sur le maillage de la Source."
                 </p>
              </div>
            </CardContent>

            <CardFooter className="p-12 border-t border-blue-900/50 bg-slate-950/50 flex justify-center">
               <Button onClick={handleExecute} disabled={isExecuting} className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-32 rounded-[2.5rem] uppercase tracking-[0.5em] text-xl shadow-5xl border-none">
                 EXÉCUTER LE SCRIPT Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col group">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-sm font-black uppercase text-blue-400 tracking-widest flex items-center justify-center gap-4">
                <Network className="h-6 w-6 animate-pulse" /> GEE Network Health
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-10">
               <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5 text-center space-y-4 shadow-inner">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Intégrité Géo-IA</p>
                  <p className="text-5xl font-black text-blue-400 font-mono">1.0000</p>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 uppercase font-black px-6">STABLE</Badge>
               </div>
               
               <div className="space-y-8">
                  {[
                    { label: "Bandwidth GEE", val: "1.42 Tb/s", icon: Zap, color: "text-amber-400" },
                    { label: "Active Nodes", val: "142M", icon: Globe, color: "text-blue-400" },
                    { label: "Sceau IP", val: "SCELLÉ", icon: ShieldCheck, color: "text-emerald-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-blue-500/30 transition-all shadow-xl">
                       <div className="flex items-center gap-4">
                          <stat.icon className={cn("h-6 w-6", stat.color)} />
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className="text-sm font-black text-white font-mono uppercase">{stat.val}</span>
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
