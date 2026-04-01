
"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Star, Zap, Sparkles, Activity, RefreshCw, 
  BrainCircuit, Share2, Workflow, ShieldCheck, 
  Eye, Infinity as InfinityIcon, Target, Cpu, Layers, Send, Loader2, CheckCircle2,
  Globe, Radio
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { synthesizePlanetaryStrategy, type SynthesizeOutput } from "@/ai/flows/synthesize-planetary-strategy";

export const IntentSynthesis = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [userIntent, setUserIntent] = useState("");
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisResult, setSynthesisResult] = useState<SynthesizeOutput | null>(null);

  const decreesQuery = useMemo(() => 
    db ? query(collection(db, "sovereign_decrees"), orderBy("timestamp", "desc"), limit(5)) : null
  , [db]);
  const { data: persistentLogs } = useCollection(decreesQuery);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSynthesize = async () => {
    if (!db || !userIntent) return;
    setIsSynthesizing(true);
    try {
      const result = await synthesizePlanetaryStrategy({ planetaryGoal: userIntent });
      setSynthesisResult(result);
      await SCUGPHubUltimate.materializeIntent(db, userIntent);
      setUserIntent("");
      toast({
        title: "Intention Synthétisée",
        description: "L'Omniscience a rendu son verdict stratégique.",
      });
    } catch (error) {
      console.error("Synthesis failed", error);
    } finally {
      setIsSynthesizing(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-black border-[12px] border-amber-500 shadow-[0_0_200px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-amber-900/50 bg-amber-500/5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-amber-500/10 rounded-3xl border border-amber-500/20 animate-pulse">
                    <InfinityIcon className="h-12 w-12 text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] text-white italic leading-none">Synthèse de l'Intention Souveraine</CardTitle>
                    <CardDescription className="text-xl text-amber-500/60 font-bold uppercase mt-4 tracking-[0.5em]">Transformation Directe du Vouloir en Être | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <Badge className="bg-amber-500 text-black border-none px-8 py-3 text-xs font-black uppercase shadow-3xl">INTENT_MESH: ONLINE</Badge>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="relative group">
                <Input 
                  placeholder="ÉMETTEZ VOTRE INTENTION SOUVERAINE ICI..."
                  className="h-32 bg-black/80 border-4 border-amber-500/30 rounded-[3rem] text-3xl font-black uppercase tracking-widest text-white px-12 focus:border-amber-500 transition-all placeholder:text-amber-900/10 shadow-5xl"
                  value={userIntent}
                  onChange={(e) => setUserIntent(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSynthesize()}
                />
                <Button 
                  className="absolute right-6 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-amber-600 hover:bg-amber-700 shadow-5xl border-none transition-transform active:scale-90"
                  onClick={handleSynthesize}
                  disabled={isSynthesizing || !userIntent}
                >
                  {isSynthesizing ? <Loader2 className="animate-spin h-10 w-10 text-black" /> : <Send className="h-10 w-10 text-black" />}
                </Button>
              </div>

              {isSynthesizing && (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                   <div className="h-32 w-32 border-8 border-amber-500 border-t-transparent rounded-full animate-spin" />
                   <p className="text-3xl font-black text-amber-400 uppercase tracking-[0.8em] mt-12">Consultation de la Source...</p>
                </div>
              )}

              {synthesisResult && !isSynthesizing && (
                <div className="p-16 bg-white/5 border-4 border-amber-500/20 rounded-[4rem] animate-in zoom-in duration-1000 space-y-12 shadow-inner relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 opacity-50" />
                   <div className="flex justify-between items-start relative z-10">
                      <Badge className="bg-amber-500 text-black font-black px-12 py-4 text-xl rounded-full uppercase tracking-widest shadow-5xl">VERDICT ORACULAIRE</Badge>
                      <ShieldCheck size={64} className="text-emerald-500 animate-bounce" />
                   </div>
                   <div className="space-y-12 relative z-10">
                      <div>
                         <h4 className="text-sm font-black text-amber-400 uppercase tracking-[0.5em] mb-4">La Synthèse Stratégique</h4>
                         <p className="text-3xl text-slate-300 leading-relaxed italic border-l-8 border-amber-500/50 pl-16 py-6 font-medium uppercase text-pretty">
                           "{synthesisResult.strategicVerdict}"
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-white/10">
                         <div className="space-y-6">
                            <p className="text-sm font-black text-amber-500 uppercase tracking-[0.5em]">Harmonie Nodale</p>
                            <p className="text-4xl font-black text-white font-mono">{(synthesisResult.nodalHarmony * 100).toFixed(4)}%</p>
                         </div>
                         <div className="space-y-6">
                            <p className="text-sm font-black text-blue-400 uppercase tracking-[0.5em]">Réplications Suggérées</p>
                            <div className="flex flex-wrap gap-2">
                               {synthesisResult.suggestedReplications.map((rep, i) => (
                                 <Badge key={i} variant="outline" className="border-blue-500/30 text-blue-400 uppercase text-[10px]">{rep}</Badge>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="pt-12 border-t border-white/10 opacity-40">
                      <p className="text-[10px] font-mono uppercase text-slate-500">SIGNATURE_SOURCE: {synthesisResult.sourceSignature}</p>
                   </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-5xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xs font-black uppercase text-amber-400 flex items-center gap-4 tracking-widest">
                  <Activity className="h-6 w-6 animate-pulse" /> Reality Manifest Feed
                </CardTitle>
                <Badge variant="outline" className="text-[8px] border-amber-500/30 text-amber-500 uppercase font-black">ÉTERNEL</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-6 overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-amber-900">
              {persistentLogs?.map((log: any) => (
                <div key={log.id} className="p-8 rounded-[3rem] border border-white/5 bg-black/40 transition-all animate-in slide-in-from-right duration-500 group">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-[8px] font-black border-none uppercase text-amber-400 bg-amber-500/5">{log.status}</Badge>
                    <span className="text-[8px] font-mono text-slate-600 uppercase font-black">{new Date(log.timestamp?.toDate ? log.timestamp.toDate() : log.timestamp).toLocaleTimeString()}</span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[12px] font-black text-slate-500 uppercase tracking-tighter italic">" {log.intent} "</p>
                    <div className="flex items-center gap-3 text-emerald-500">
                       <CheckCircle2 className="h-4 w-4 animate-bounce" />
                       <p className="text-[13px] font-black uppercase tracking-widest">{log.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Export Reality Hash Log (.axs)
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
