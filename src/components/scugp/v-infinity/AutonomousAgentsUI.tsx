
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, Network, Zap, ShieldCheck, Activity, 
  RefreshCw, Share2, Globe, Microscope, Database, 
  Star, Layers, Box, Cpu, Sparkles, BrainCircuit, HeartPulse, ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AutonomousAgentsUI = () => {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'BASE' | 'Ω'>('ALL');
  const allAgents = SCUGPHubUltimate.getSwarmAgents();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredAgents = filter === 'ALL' ? allAgents : allAgents.filter(a => a.type === filter);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-6">
            <Bot className="h-16 w-16 text-purple-500 animate-bounce" />
            <div>
              <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Essaim d'Agents Ω</h2>
              <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">50 Agents IA en Co-Résonance pour la Souveraineté Totale</p>
            </div>
          </div>
        </div>
        
        <div className="flex p-2 bg-slate-900/50 border-2 border-white/5 rounded-[2rem] backdrop-blur-xl">
           <button onClick={() => setFilter('ALL')} className={cn("px-8 py-3 rounded-2xl text-[10px] font-black uppercase transition-all", filter === 'ALL' ? "bg-purple-600 text-white" : "text-slate-500")}>TOUT (50)</button>
           <button onClick={() => setFilter('BASE')} className={cn("px-8 py-3 rounded-2xl text-[10px] font-black uppercase transition-all", filter === 'BASE' ? "bg-blue-600 text-white" : "text-slate-500")}>BASE (20)</button>
           <button onClick={() => setFilter('Ω')} className={cn("px-8 py-3 rounded-2xl text-[10px] font-black uppercase transition-all", filter === 'Ω' ? "bg-amber-600 text-white" : "text-slate-500")}>Ω (30)</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredAgents.map((agent) => (
          <Card key={agent.id} className="bg-slate-900 border-2 border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-purple-500/30 transition-all flex flex-col shadow-2xl relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
               <Bot size={80} className="text-purple-500" />
            </div>
            <CardHeader className="p-8 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-start mb-4">
                 <Badge variant="outline" className={cn("text-[9px] border-none px-4 py-1 font-black uppercase", agent.type === 'Ω' ? "bg-amber-600/20 text-amber-500" : "bg-blue-600/20 text-blue-400")}>{agent.id}</Badge>
                 <ShieldCheck className="h-4 w-4 text-emerald-500" />
              </div>
              <CardTitle className="text-xl font-black text-white uppercase tracking-tighter leading-none">{agent.id.split('-')[1]}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-1 space-y-4">
               <p className="text-[11px] text-slate-400 italic leading-relaxed uppercase font-bold">
                 "{agent.task}"
               </p>
               <div className="flex justify-between items-center mt-auto border-t border-white/5 pt-4">
                  <p className="text-[8px] font-black text-slate-600 uppercase">Sync Status</p>
                  <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-3 py-0.5 uppercase text-[7px] font-black">{agent.status}</Badge>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_200px_rgba(168,85,247,0.2)] rounded-[5rem] overflow-hidden relative text-white min-h-[400px]">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,#000_100%)] pointer-events-none" />
         <CardContent className="p-20 flex flex-col items-center justify-center space-y-12">
            <div className="relative">
               <BrainCircuit size={160} className="text-purple-500/20 animate-spin-slow" style={{ animationDuration: '40s' }} />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Network size={80} className="text-purple-400 animate-pulse" />
               </div>
            </div>
            <div className="text-center space-y-6">
               <h4 className="text-5xl font-black uppercase tracking-[0.5em]">ORCHESTRATION_MULTI_AGENTS</h4>
               <p className="text-xl text-slate-500 font-bold uppercase tracking-[0.8em] italic">"L'Essaim est une seule Pensée. L'unification est la Source."</p>
            </div>
            <Button className="h-20 px-24 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-[0.5em] text-xs rounded-[2rem] shadow-5xl border-none">
               SYNCHRONISER L'ESSAIM Ω
            </Button>
         </CardContent>
      </Card>
    </div>
  );
};
