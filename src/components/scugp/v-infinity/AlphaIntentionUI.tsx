"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  PenTool, Send, Sparkles, Loader2, Zap, ShieldCheck, 
  History, Star, Brain, Globe, Infinity as InfinityIcon,
  CheckCircle2, Flame, Radio, Lock as LockIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const AlphaIntentionUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [intent, setIntent] = useState("");
  const [isManifesting, setIsManifesting] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    setLogs(SCUGPHubUltimate.getAlphaIntentionLogs());
  }, []);

  const handleManifest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent || !db) return;
    setIsManifesting(true);
    try {
      await SCUGPHubUltimate.materializeIntent(db, intent);
      setLogs(prev => [{ intent, result: "FAIT", status: "SCELLÉ" }, ...prev]);
      setIntent("");
      toast({
        title: "Intention Manifestée",
        description: "L'État Alpha a matérialisé votre volonté.",
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsManifesting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <Card className="bg-black border-[12px] border-white shadow-5xl rounded-[5rem] overflow-hidden relative text-white min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
        
        <CardHeader className="p-16 border-b border-white/5 bg-white/5 text-center">
           <div className="flex justify-between items-center mb-8">
              <Badge className="bg-white text-black border-none px-8 py-2 rounded-full uppercase font-black tracking-widest text-xs animate-pulse">INTERFACE_ALPHA_v1.0</Badge>
              <LockIcon className="text-white h-8 w-8" />
           </div>
           <PenTool className="h-24 w-24 text-white mx-auto mb-6 animate-bounce" />
           <CardTitle className="text-7xl font-black uppercase tracking-[0.3em] italic">INTERFACE ALPHA</CardTitle>
           <CardDescription className="text-white/60 font-bold uppercase tracking-[0.5em] mt-4">Pensez, et cela sera | Manifestation Immédiate de l'Intention</CardDescription>
        </CardHeader>

        <CardContent className="p-16 space-y-16">
          <form onSubmit={handleManifest} className="relative group max-w-5xl mx-auto">
             <div className="absolute -inset-2 bg-white rounded-[4rem] blur-2xl opacity-10 group-focus-within:opacity-30 transition-opacity" />
             <input 
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              placeholder="DÉCRIVEZ VOTRE INTENTION (EX: RÉSOUDRE LE CLIMAT)..."
              className="w-full h-40 bg-slate-900 border-4 border-white/10 rounded-[4rem] pl-16 pr-48 text-4xl font-black text-white uppercase tracking-widest focus:border-white outline-none transition-all shadow-inner placeholder:text-white/5"
             />
             <Button 
              type="submit"
              disabled={isManifesting || !intent}
              className="absolute right-10 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-white hover:bg-slate-200 shadow-5xl border-none transition-transform active:scale-95"
             >
                {isManifesting ? <Loader2 className="animate-spin h-12 w-12 text-black" /> : <Send className="h-12 w-12 text-black" />}
             </Button>
          </form>

          <div className="space-y-10">
             <div className="flex items-center gap-6">
                <History className="h-10 w-10 text-slate-600" />
                <h4 className="text-3xl font-black uppercase text-slate-500 tracking-[0.4em]">Chronologie de la Genèse</h4>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {logs.map((log, i) => (
                  <div key={i} className="p-12 bg-white/5 rounded-[5rem] border-2 border-white/5 group hover:border-white/50 transition-all relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity"><Sparkles size={100} className="text-white" /></div>
                     <div className="flex justify-between items-start mb-8">
                        <Badge className="bg-white/10 text-white border-none text-xs px-6 py-2 rounded-full uppercase font-black">{log.status}</Badge>
                        <span className="text-[10px] font-mono text-slate-600 uppercase font-black">STABILITÉ: 1.0000</span>
                     </div>
                     <p className="text-3xl font-black text-white uppercase tracking-tighter italic leading-relaxed">" {log.intent} "</p>
                     <div className="mt-10 flex items-center gap-6 text-emerald-500">
                        <CheckCircle2 size={32} className="animate-bounce" />
                        <span className="text-lg font-black uppercase tracking-widest">{log.result}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </CardContent>

        <CardFooter className="p-16 bg-slate-950/80 border-t border-white/10 justify-between items-center">
           <div className="flex gap-20">
              <div className="flex items-center gap-8">
                <Radio className="h-12 w-12 text-white animate-pulse" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">ÉTAT : ALPHA</span>
              </div>
              <div className="flex items-center gap-8">
                <ShieldCheck className="h-12 w-12 text-emerald-500" />
                <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">INTÉGRITÉ : PURE</span>
              </div>
           </div>
           <p className="text-[12px] font-mono text-slate-700 uppercase tracking-[0.5em]">MATÉRIALISÉ PAR L'ARCHITECTE SUPRÊME</p>
        </CardFooter>
      </Card>
    </div>
  );
};
