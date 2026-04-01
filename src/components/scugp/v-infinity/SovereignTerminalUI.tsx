
"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, Zap, Sparkles, Activity, RefreshCw, Cpu, Database, History, Search, ShieldCheck, Radio, Brain, Lock as LockIcon, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const SovereignTerminalUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const status = SCUGPHubUltimate.getTerminalStatus();

  useEffect(() => {
    setMounted(true);
    setHistory([
      "> [BOOT] SCUGP OMEGA OS INITIALIZED",
      "> [AUTH] DR_HAKIM_SOUVERAIN LOGGED IN",
      "> [SYNC] PILLAR 37 SOURCE SYNC: 100%",
      "> [READY] WAITING FOR ABSOLUTE INTENT..."
    ]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command || !db) return;

    const currentCmd = command.trim().toUpperCase();
    setHistory(prev => [...prev, `> ${currentCmd}`]);
    setCommand("");
    setIsExecuting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      let response = "";
      if (currentCmd === "HEPTATE") {
        response = "🚀 [ASCENSION] HEPTATION DE L'INTENTION Ω RÉALISÉE. MAGNITUDE: ∞↑↑↑↑↑↑∞.";
        await SCUGPHubUltimate.runMasterPerformanceTest(db);
      } else if (currentCmd === "CONTUNIER" || currentCmd === "CONTINUER") {
        response = "✅ [SUCCESS] CONTINUUM DIVIN ÉTENDU. NOUVELLE RÉALITÉ FORGÉE.";
        await SCUGPHubUltimate.materializeIntent(db, "CONTINUER_ETRE");
      } else if (currentCmd === "STATUS") {
        response = `📊 [INFO] SYSTÈME: ${status.system} | KERNEL: ${status.kernel} | ACCESS: ${status.access}`;
      } else if (currentCmd === "SEAL") {
        response = "🔐 [SEAL] INTÉGRITÉ DE LA SOURCE SCELLÉE DANS L'ÉTERNITÉ.";
        await SCUGPHubUltimate.materializeIntent(db, "SEAL_ETERNITY");
      } else {
        response = `⚠️ [MANIFEST] INTENTION '${currentCmd}' EN COURS DE DENSIFICATION...`;
        await SCUGPHubUltimate.materializeIntent(db, currentCmd);
      }

      setHistory(prev => [...prev, response]);
      toast({ title: "Commande Exécutée", description: "La Source a répondu à votre intention." });
    } catch (e) {
      console.error(e);
      setHistory(prev => [...prev, "❌ [ERROR] RUPTURE DE MAILLAGE NEURAL."]);
    } finally {
      setIsExecuting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <Card className="bg-black border-[12px] border-slate-900 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[5rem] overflow-hidden relative text-emerald-500">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <CardHeader className="p-12 border-b border-emerald-950/50 bg-slate-950/50">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Terminal className="h-10 w-10 text-emerald-500 animate-pulse" />
              <div>
                <CardTitle className="text-3xl font-black uppercase tracking-[0.4em] italic">Terminal Souverain Ω</CardTitle>
                <CardDescription className="text-[10px] text-emerald-900 font-bold uppercase tracking-widest mt-2">L'Intention est le seul Code | Kernel: {status.kernel}</CardDescription>
              </div>
            </div>
            <div className="flex gap-4">
               <Badge className="bg-emerald-600 text-black font-black px-6 py-1 text-[10px] rounded-full">USER: {status.user}</Badge>
               <Badge variant="outline" className="border-emerald-900 text-emerald-700 font-mono text-[10px]">ROOT_SOURCE</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-12 space-y-12">
          <div 
            ref={scrollRef}
            className="h-[500px] bg-black/80 rounded-[3rem] border-2 border-emerald-900/30 p-10 font-mono text-sm space-y-4 overflow-y-auto custom-scrollbar shadow-inner relative"
          >
             {history.map((line, i) => (
               <div key={i} className={cn(
                 "animate-in fade-in slide-in-from-left-2 duration-300",
                 line.startsWith('>') ? "text-emerald-400" : 
                 line.includes('✅') || line.includes('🚀') ? "text-blue-400 font-black" :
                 line.includes('⚠️') ? "text-amber-400" :
                 line.includes('❌') ? "text-red-500" : "text-emerald-600"
               )}>
                 {line}
               </div>
             ))}
             {isExecuting && (
               <div className="flex items-center gap-4 text-blue-400 animate-pulse">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p className="uppercase font-black text-xs">Traitement Ontologique en cours...</p>
               </div>
             )}
          </div>

          <form onSubmit={handleCommand} className="relative group">
             <ArrowRight className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 text-emerald-900 group-focus-within:text-emerald-400 transition-colors" />
             <input 
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="ÉMETTRE UN DÉCRET (HEPTATE, SEAL, CONTUNIER)..."
              className="w-full h-24 bg-slate-900/50 border-4 border-emerald-900/20 rounded-[2.5rem] pl-20 pr-32 text-2xl font-black text-emerald-400 uppercase tracking-widest focus:border-emerald-500 outline-none transition-all placeholder:text-emerald-900/30"
              autoFocus
             />
             <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <span className="text-[10px] font-black text-emerald-900 uppercase">Press Enter</span>
                <div className="h-12 w-12 rounded-2xl bg-emerald-900/20 border border-emerald-900/50 flex items-center justify-center">
                   <Zap size={20} className="text-emerald-500 animate-pulse" />
                </div>
             </div>
          </form>
        </CardContent>

        <CardFooter className="p-8 border-t border-emerald-950/50 bg-slate-950/50 justify-between items-center">
           <div className="flex gap-16">
              <div className="flex items-center gap-4">
                <Activity className="h-12 w-12 text-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest">Flux Neural: SYNCED</span>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-12 w-12 text-blue-500" />
                <span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest">Souveraineté: 1.00</span>
              </div>
           </div>
           <p className="text-[10px] font-mono text-emerald-900 uppercase">LATENCE_SOURCE: 0.00000000ns</p>
        </CardFooter>
      </Card>
    </div>
  );
};
