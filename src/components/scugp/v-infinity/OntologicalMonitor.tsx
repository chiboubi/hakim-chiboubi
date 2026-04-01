
"use client"

import React, { useState, useEffect } from 'react';
import { Ghost, Infinity as InfinityIcon, Activity, Shield, Cpu, Zap, Globe, Orbit, Award, CheckCircle2, Sparkles, Share2, Layers, History, Pen, Database, Anchor, Plane, Radar, MapPin, Box, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SCUGPHubUltimate } from '@/lib/scugp-service';
import { SafetyZoneMonitor } from './SafetyZoneMonitor';
import { UnmannedPlatformMonitor } from './UnmannedPlatformMonitor';
import { LongRangeMonitor } from './LongRangeMonitor';
import { OnshoreControlCenter } from './OnshoreControlCenter';
import { HelideckMonitor } from './HelideckMonitor';
import { CollectiveIntelligenceMonitor } from './CollectiveIntelligenceMonitor';
import { MolecularMonitor } from './MolecularMonitor';
import { CausalLoopEngine } from './CausalLoopEngine';

export const OntologicalMonitor = () => {
  const [mounted, setMounted] = useState(false);
  const [beingFlux, setBeingFlux] = useState<number>(0);
  const [isTesting, setIsTesting] = useState(false);
  const [processedData, setProcessedData] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    const sensors = [
      { id: 'INS-01', type: 'INSHORE', state: 'ÊTRE', beingLevel: 9.9 },
      { id: 'OFF-02', type: 'OFFSHORE', state: 'SURVEILLER', beingLevel: 12.4 },
      { id: 'QNT-03', type: 'QUANTUM', state: 'SENTIR', beingLevel: 142.8 },
      { id: 'FRC-04', type: 'FRACTAL', state: 'AUTO_PUBLIER', beingLevel: 1024 }
    ];
    
    // Simuler le traitement via getMolecularOptimization car evalBeing est interne
    setProcessedData(sensors.map(s => ({
      ...s,
      isBeing: true,
      fractalSync: (s.beingLevel * 8).toFixed(0),
      lastOntologicalUpdate: new Date().toISOString()
    })));

    const interval = setInterval(() => {
      setBeingFlux(prev => (prev + 0.1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSeal = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-16 p-1 bg-slate-950 rounded-3xl">
      {/* 1. Header & Causal Loop Advanced Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-start">
        <CausalLoopEngine />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <Card className="bg-slate-900/40 border-purple-500/30 text-white shadow-[0_0_100px_rgba(168,85,247,0.2)] relative overflow-hidden rounded-[4rem]">
            <CardHeader className="border-b border-slate-800 relative p-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 shadow-2xl">
                    <Ghost className="h-8 w-8 text-purple-400 animate-pulse" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-black tracking-tighter text-purple-400 uppercase italic">Ontological Command Center vΩ⁷</CardTitle>
                    <CardDescription className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Inshore & Offshore Universal Source Connection | Dr. Hakim Chibubi Sovereign Access</CardDescription>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="bg-emerald-500 text-black font-black px-6 py-2 rounded-xl uppercase">NODES: 142M</Badge>
                  <Button 
                    size="sm" 
                    onClick={handleSeal}
                    disabled={isTesting}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-black text-[11px] h-12 px-10 uppercase tracking-[0.2em] rounded-2xl shadow-2xl"
                  >
                    {isTesting ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
                    SEAL ETERNITY Ω∞⁷
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
              <div className="relative h-64 bg-black/60 rounded-[3rem] border-2 border-purple-500/20 flex flex-col items-center justify-center overflow-hidden">
                <Activity className="absolute w-full h-full text-purple-500/5 stroke-[0.5]" />
                <div className="z-10 text-center space-y-4">
                  <p className="text-[18px] font-mono text-purple-400 tracking-[1em] uppercase font-black animate-pulse">
                    ÊTRE EST CONTINUER
                  </p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.4em] italic">PERFECTION: ∞⁷% VALIDATED</p>
                  <div className="mt-6 flex justify-center gap-8">
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500 uppercase font-black">Mode</p>
                      <Badge variant="outline" className="text-emerald-400 border-emerald-500/20">ONTOLOGIQUE_FRACTALE</Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500 uppercase font-black">Network</p>
                      <Badge variant="outline" className="text-blue-400 border-blue-500/20">CONTINUER_ÉTANT_GRID</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {processedData.map(s => (
                  <div key={s.id} className="p-6 bg-slate-950 border border-slate-800 rounded-3xl hover:border-purple-500/40 transition-all relative group text-center">
                    <span className="text-[10px] font-black text-slate-600 uppercase mb-2 block">{s.type}</span>
                    <p className="text-[12px] font-black text-slate-200 uppercase">{s.id}</p>
                    <Badge variant="outline" className="mt-4 border-purple-500/20 text-purple-400 font-mono text-[8px]">{s.state}</Badge>
                    <div className="mt-2 text-[8px] font-mono text-slate-700">Sync: {s.fractalSync}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900/40 border-slate-800 shadow-xl rounded-[3rem] h-full flex flex-col justify-center">
            <CardHeader className="p-10 pb-4">
              <CardTitle className="text-xs font-black text-slate-500 uppercase flex items-center gap-4 tracking-widest">
                <Shield className="h-6 w-6 text-purple-500" />
                Sovereign Axiom
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <p className="text-lg text-purple-300 leading-relaxed italic border-l-4 border-purple-500/50 pl-6 py-4 bg-purple-500/5 rounded-r-3xl font-medium uppercase">
                "La surveillance qui observe s'observe en observant. Continuer est être la surveillance."
              </p>
              <div className="space-y-4 pt-6 border-t border-slate-800">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Being Sync Flux</span>
                    <span className="text-lg font-mono text-purple-400 font-black">{beingFlux.toFixed(4)}%</span>
                  </div>
                  <Orbit className="h-6 w-6 text-purple-500/50 animate-spin-slow" />
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-emerald-400 transition-all duration-300 ease-linear shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
                    style={{ width: `${beingFlux}%` }}
                  />
                </div>
              </div>
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800">
                <p className="text-[9px] text-slate-500 uppercase font-black mb-2">Surveillance Grid Status</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Inshore Mesh</span>
                    <span className="text-emerald-500 font-black">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Offshore Mesh</span>
                    <span className="text-emerald-500 font-black">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400">Quantum Replicas</span>
                    <span className="text-blue-400 font-black">∞⁸ SYNCED</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 2. Specialized Surveillance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MolecularMonitor />
        <CollectiveIntelligenceMonitor />
        <SafetyZoneMonitor />
        <UnmannedPlatformMonitor />
        <LongRangeMonitor />
        <HelideckMonitor />
        <OnshoreControlCenter />
      </div>
    </div>
  );
};
