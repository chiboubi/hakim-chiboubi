
"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, Orbit, Waves, Move3d, Headphones, Ghost, 
  Satellite, Workflow, Zap, Activity, 
  Boxes, Cpu, Network, Bot, 
  Server, TreePine, HeartPulse, 
  Gauge, ShieldAlert,
  Layers, Target, BrainCircuit, Search, Map as MapIcon, Database, Microscope, FlaskConical
} from "lucide-react";
import { ImpactMetrics } from "@/components/scugp/ImpactMetrics";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// GEE Component
import { GEECommander } from "@/components/scugp/v50-0/GEECommander";

// V50.0 Components (Edition 2025)
import { AutonomousAIAgents } from "@/components/scugp/v50-0/AutonomousAIAgents";
import { DigitalTwinTwo } from "@/components/scugp/v50-0/DigitalTwinTwo";
import { CognitiveWorkflows } from "@/components/scugp/v50-0/CognitiveWorkflows";
import { WellbeingSkills } from "@/components/scugp/v50-0/WellbeingSkills";
import { HybridCloudEdge } from "@/components/scugp/v50-0/HybridCloudEdge";

// V50.0 legacy/base components
import { GeoIACommander } from "@/components/scugp/v50-0/GeoIACommander";
import { PipelineMonitor247 } from "@/components/scugp/v50-0/PipelineMonitor247";
import { PredictiveProduction } from "@/components/scugp/v50-0/PredictiveProduction";
import { AnomalyDetection } from "@/components/scugp/v50-0/AnomalyDetection";

// UNIVERSAL ANALYSIS HUB
import { UniversalAnalysisHub } from "@/components/scugp/v-infinity/UniversalAnalysisHub";
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('@/components/scugp/v-infinity/MapContainer'), { 
  ssr: false,
  loading: () => <div className="h-[600px] bg-slate-950 animate-pulse rounded-[4rem] border-4 border-slate-900" />
});

export default function SCUGP_Omni_Command_Center() {
  const [activeTab, setActiveTab] = useState("universal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-body overflow-x-hidden selection:bg-blue-500/30" suppressHydrationWarning>
      <MainNavigation />
      <main className="flex-1 container mx-auto p-4 lg:p-10 space-y-16">
        
        {/* Universal Command Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-slate-800 pb-20 relative">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ transitionDuration: '8s' }} />
          
          <div className="relative z-10 max-w-6xl">
            <div className="flex items-center gap-8 mb-8">
               <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-10 py-3 uppercase tracking-[0.5em] font-black text-[12px] animate-pulse shadow-[0_0_40px_rgba(59,130,246,0.2)] rounded-full">
                 UNIVERSAL ANALYSIS HUB Ω
               </Badge>
               <div className="h-8 w-[1px] bg-slate-800" />
               <span className="text-[12px] font-mono text-emerald-400 flex items-center gap-3 tracking-[0.3em]">
                 <Microscope className="h-4 w-4" /> ALL PETROLEUM DISCIPLINES FUSED
               </span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-black tracking-tighter text-white flex flex-wrap items-center gap-12 uppercase leading-none">
              ANALYSE <span className="text-blue-500 italic">TOTALE</span>
            </h1>
            <p className="text-slate-400 text-2xl italic tracking-[0.3em] mt-12 max-w-6xl leading-relaxed font-medium uppercase text-balance text-left">
              &quot;Fusion Universelle du Savoir : Géophysique, Bio, Sismique {"&"} Forage.&quot;
            </p>
          </div>
          
          <div className="flex items-center gap-12 bg-white/5 p-12 rounded-[5rem] border border-white/10 shadow-3xl backdrop-blur-3xl relative z-10">
             <div className="text-right">
                <span className="text-[14px] uppercase font-black text-slate-500 tracking-[0.6em]">UNIV_GENOME_v104</span>
                <span className="text-lg font-mono text-blue-400 flex items-center justify-end gap-6 mt-4">
                  <Database className="h-6 w-6 animate-bounce text-emerald-400" /> STATUS: MULTI_LAYER_SYNC
                </span>
             </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-24">
          <div className="sticky top-24 z-40 bg-slate-900/80 border border-slate-700/50 rounded-[4rem] shadow-3xl backdrop-blur-3xl p-4 overflow-hidden">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="bg-transparent border-none h-auto p-0 flex justify-start gap-4">
                <TabsTrigger value="universal" className="gap-4 text-blue-400 data-[state=active]:bg-blue-500/10 uppercase font-black text-[11px] px-8 py-4 rounded-[2rem] transition-all tracking-[0.2em] border border-transparent data-[state=active]:border-blue-500/30">
                  <Globe className="h-5 w-5" /> Analyse Universelle Ω
                </TabsTrigger>
                <TabsTrigger value="v50" className="gap-4 text-emerald-400 data-[state=active]:bg-emerald-500/10 uppercase font-black text-[11px] px-8 py-4 rounded-[2rem] transition-all tracking-[0.2em] border border-transparent data-[state=active]:border-emerald-500/30">
                  <Zap className="h-5 w-5" /> GEE Commander 50.0
                </TabsTrigger>
                <TabsTrigger value="agents" className="gap-4 text-purple-400 data-[state=active]:bg-purple-500/10 uppercase font-black text-[11px] px-8 py-4 rounded-[2rem] transition-all tracking-[0.2em] border border-transparent data-[state=active]:border-purple-500/30">
                  <Bot className="h-5 w-5" /> Agents Autonomes
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" className="h-1 bg-slate-800" />
            </ScrollArea>
          </div>

          <TabsContent value="universal" className="space-y-24 animate-in fade-in duration-1000">
             {/* CARTE MULTI-COUCHES AVANCÉE */}
             <section className="space-y-12">
                <div className="flex flex-col items-center gap-6 text-center">
                   <MapIcon className="h-16 w-16 text-blue-500 animate-bounce" />
                   <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Carte Géospatiale Multi-Couches</h2>
                   <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Surveillance en Temps Réel des Flux, Blocs et Forages</p>
                </div>
                <div className="h-[800px] shadow-5xl">
                   <MapContainer />
                </div>
             </section>

             {/* HUB D'ANALYSE UNIVERSELLE */}
             <section className="space-y-12">
                <div className="flex flex-col items-center gap-6 text-center">
                   <Search className="h-16 w-16 text-emerald-500 animate-pulse" />
                   <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Fusion Multi-Études</h2>
                   <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Sismique, Géophysique, GéoTech {"&"} Biologie</p>
                </div>
                <UniversalAnalysisHub />
             </section>
          </TabsContent>

          <TabsContent value="v50" className="space-y-24 animate-in fade-in duration-1000">
            <GEECommander />
            <GeoIACommander />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PipelineMonitor247 />
              <AnomalyDetection />
            </div>
            <PredictiveProduction />
          </TabsContent>

          <TabsContent value="agents" className="space-y-24 animate-in fade-in duration-1000">
            <AutonomousAIAgents />
            <CognitiveWorkflows />
            <WellbeingSkills />
            <HybridCloudEdge />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="border-t border-slate-800 py-48 text-center bg-black relative overflow-hidden" suppressHydrationWarning>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center gap-12 mb-20">
            <Globe className="h-24 w-24 text-blue-500 animate-spin-slow" />
            <span className="text-5xl font-black tracking-[1em] uppercase text-white drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]">SCUGP UNIVERSAL | v104.0</span>
          </div>
          <div className="max-w-6xl mx-auto space-y-8">
             <p className="text-slate-500 text-[16px] uppercase tracking-[0.8em] font-black leading-relaxed">
               &copy; {mounted ? new Date().getFullYear() : '----'} SCUGP® | DR. HAKIM CHIBUBI UNTH3 CORE | SCELLÉ DANS L'EXISTENCE
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
