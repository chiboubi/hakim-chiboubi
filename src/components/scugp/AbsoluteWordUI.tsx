"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Zap, Infinity, Brain, Globe, History, ShieldCheck, RefreshCw, Radio, Layers, Mic, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AbsoluteWordUI = () => {
  const [mounted, setMounted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [text, setText] = useState("");
  const metrics = SCUGPHubUltimate.getWordMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSpeak = () => {
    if (!text) return;
    setIsSpeaking(true);
    setTimeout(() => {
      setIsSpeaking(false);
      setText("");
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in" style={{ animationDuration: '1000ms' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Semantic Purity", val: metrics.semantic_purity, icon: Sparkles, color: "text-purple-500" },
          { label: "Vibration", val: metrics.vibration_frequency, icon: Radio, color: "text-blue-500" },
          { label: "Logos Alignment", val: metrics.logos_alignment, icon: Brain, color: "text-emerald-500" },
          { label: "Truth Resonance", val: metrics.truth_resonance, icon: ShieldCheck, color: "text-amber-500" },
          { label: "Creative Power", val: metrics.creative_power, icon: Zap, color: "text-cyan-500" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-purple-500/30 transition-all">
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
        <div className="lg:col-span-12">
          <Card className="bg-black border-[12px] border-purple-600 shadow-[0_0_500px_rgba(168,85,247,0.3)] relative overflow-hidden rounded-[8rem] min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-24 border-b border-purple-900/50 text-center">
              <div className="flex flex-col items-center gap-12">
                <div className="text-[16rem] font-black text-purple-400 tracking-[1.2em] animate-pulse drop-shadow-[0_0_100px_rgba(168,85,247,0.8)]">
                  Ω∞.Φ
                </div>
                <div>
                  <CardTitle className="text-9xl font-black uppercase tracking-[0.6em] italic text-purple-500 leading-none">LE VERBE ABSOLU</CardTitle>
                  <CardDescription className="text-[20px] text-purple-900 font-bold uppercase tracking-[1em] mt-10">La Parole Créatrice (Langage Adamique) | Dr. Hakim Chibubi Logos-Sovereign</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-24 flex flex-col items-center justify-center space-y-24">
              <div className="w-full max-w-5xl space-y-12">
                <div className="relative">
                  <input 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="ÉNONCEZ LA RÉALITÉ ICI..."
                    className="w-full bg-black/80 border-4 border-purple-500/30 rounded-[3rem] h-32 px-12 text-4xl font-black text-white uppercase tracking-widest focus:border-purple-500 outline-none transition-all placeholder:text-slate-800"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <Button 
                      onClick={handleSpeak}
                      disabled={isSpeaking || !text}
                      className="h-20 w-20 rounded-full bg-purple-600 hover:bg-purple-700 shadow-3xl"
                    >
                      <Mic size={32} />
                    </Button>
                  </div>
                </div>
                <p className="text-center text-slate-500 text-sm font-black uppercase tracking-[0.5em] animate-pulse">
                  {isSpeaking ? "MANIFESTATION DU VERBE EN COURS..." : "LE MOT EST LA CHOSE. DITES, ET CELA SERA."}
                </p>
              </div>

              <div className="w-full max-w-7xl h-[450px] bg-purple-500/5 border-4 border-purple-500/20 rounded-[8rem] relative overflow-hidden group shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(168,85,247,0.3)_1px,transparent_1px)] bg-[length:100px_100px]" />
                
                <div className="relative z-10 flex flex-col items-center gap-12 text-center">
                   <div className="relative">
                      <Layers size={300} className={cn("text-purple-500/10", isSpeaking ? "animate-spin-slow" : "animate-pulse")} />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <MessageSquare size={150} className={cn("text-purple-400", isSpeaking ? "scale-125 animate-bounce" : "animate-pulse")} />
                      </div>
                   </div>
                   <div>
                      <p className="text-4xl font-mono text-purple-400 uppercase tracking-[2em] font-black animate-pulse">ADAMIC_LOGOS_MESH</p>
                      <p className="text-[14px] text-slate-600 uppercase font-black mt-8 italic tracking-[0.5em]">"Nommer, c'est engendrer l'existence."</p>
                   </div>
                </div>

                {isSpeaking && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <circle cx="50%" cy="50%" r="200" fill="none" stroke="purple" strokeWidth="2" className="animate-ping" />
                    <circle cx="50%" cy="50%" r="300" fill="none" stroke="cyan" strokeWidth="1" className="animate-ping opacity-50" />
                  </svg>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-12">
                 <div className="p-16 bg-purple-500/5 border-2 border-purple-500/30 rounded-[5rem] space-y-10 shadow-4xl text-center">
                    <h3 className="text-4xl font-black text-purple-400 uppercase tracking-widest">Axiome du Logos</h3>
                    <p className="text-2xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Le Verbe n'est plus une description, c'est l'Information qui ordonne la matière."
                    </p>
                 </div>
                 <div className="p-16 bg-cyan-500/5 border-2 border-cyan-500/30 rounded-[5rem] space-y-10 shadow-4xl text-center">
                    <h3 className="text-4xl font-black text-cyan-400 uppercase tracking-widest">Loi de la Parole</h3>
                    <p className="text-2xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Chaque mot du Dr. Hakim est un acte de création immédiat. Le délai est nul."
                    </p>
                 </div>
                 <div className="p-16 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[5rem] space-y-10 shadow-4xl text-center">
                    <h3 className="text-4xl font-black text-emerald-400 uppercase tracking-widest">Verdict du Sceau</h3>
                    <p className="text-2xl text-slate-300 leading-relaxed italic uppercase font-black">
                      "Le système est une boucle de vérité. Dire 'Pétrole' engendre l'abondance."
                    </p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="relative z-10 p-24 border-t border-purple-900/50 bg-slate-950/50 justify-between items-center">
               <div className="flex gap-32">
                  <div className="flex items-center gap-12">
                    <Volume2 className="h-16 w-16 text-purple-500 animate-bounce" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">État du Verbe: SCELLÉ</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <ShieldCheck className="h-16 w-16 text-emerald-500" />
                    <span className="text-2xl font-black text-slate-500 uppercase tracking-widest">Information: SOUVERAINE</span>
                  </div>
               </div>
               <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1em] text-2xl shadow-[0_0_200px_rgba(168,85,247,0.8)] border-none">
                 DÉCRÉTER L'ABSOLU Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
