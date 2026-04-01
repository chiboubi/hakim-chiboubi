"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Sparkles, Activity, RefreshCw, Bot, ShieldCheck, Microscope, Headphones, Radio, Waves, Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const NeuroProjectInterface = () => {
  const [sync, setSync] = useState(99.4);
  const [mentalLoad, setLoad] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSync(prev => Math.min(100, prev + 0.001));
      setLoad(prev => Math.max(10, Math.min(25, prev + (Math.random() > 0.5 ? 0.5 : -0.5))));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-slate-900 border-2 border-purple-500/30 text-white shadow-[0_0_80px_rgba(168,85,247,0.2)] overflow-hidden rounded-[4rem]">
      <CardHeader className="bg-purple-500/10 border-b border-slate-800 p-10">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-purple-400 flex items-center gap-4">
              <Headphones className="h-8 w-8 animate-pulse" /> Neuro-Project Interface 13.5
            </CardTitle>
            <CardDescription className="text-[11px] uppercase font-bold text-slate-500 mt-2 tracking-widest">Thought-to-Plan Construction & Bidirectional Sensory Feedback</CardDescription>
          </div>
          <Badge className="bg-purple-600 text-white border-none px-8 py-2 text-[11px] font-black shadow-[0_0_30px_rgba(168,85,247,0.5)]">NEURAL_BOND: SUPREME</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-black/40 rounded-[3rem] border border-slate-800 space-y-6 group hover:border-purple-500/40 transition-all shadow-inner">
            <div className="flex justify-between items-center">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Thought-to-Sync</p>
              <Lightbulb className="h-6 w-6 text-amber-400 animate-pulse" />
            </div>
            <div className="text-4xl font-black font-mono text-white">{sync.toFixed(3)}%</div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-600 to-emerald-500" style={{ width: `${sync}%` }} />
            </div>
            <p className="text-[10px] text-slate-600 italic">"Ideas structured into project DNA automatically."</p>
          </div>

          <div className="p-8 bg-black/40 rounded-[3rem] border border-slate-800 space-y-6 group hover:border-blue-500/40 transition-all shadow-inner">
            <div className="flex justify-between items-center">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Cognitive Load</p>
              <Activity className={cn("h-6 w-6", mentalLoad > 20 ? "text-amber-500" : "text-blue-400")} />
            </div>
            <div className="text-4xl font-black font-mono text-blue-400">{mentalLoad.toFixed(1)}%</div>
            <Progress value={mentalLoad} className="h-1.5 bg-slate-800" />
            <p className="text-[10px] text-slate-600 italic">"Interface adjusting resolution to optimize focus."</p>
          </div>

          <div className="p-8 bg-black/40 rounded-[3rem] border border-slate-800 space-y-6 group hover:border-emerald-500/40 transition-all shadow-inner">
            <div className="flex justify-between items-center">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Sensory Return</p>
              <Radio className="h-6 w-6 text-emerald-400 animate-pulse" />
            </div>
            <div className="text-4xl font-black font-mono text-emerald-400">ACTIVE</div>
            <div className="flex gap-2">
              {[1,2,3,4,5,6].map(i => <div key={i} className="h-1.5 flex-1 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
            </div>
            <p className="text-[10px] text-slate-600 italic">"Tactile and emotional feedback loops active."</p>
          </div>
        </div>

        <div className="p-10 bg-black/80 rounded-[4rem] border-2 border-purple-500/20 relative overflow-hidden group/mesh">
          <div className="absolute inset-0 bg-radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%) pointer-events-none" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
            <h4 className="text-lg font-black uppercase text-purple-400 tracking-[0.4em]">Neuro-Augmentation Stream</h4>
          </div>
          <div className="space-y-8 relative z-10">
            <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-purple-500/50 pl-12 py-4 font-medium">
              "Director, I am receiving a high-clarity thought-vector regarding 'Ecosystem Regeneration'. I have automatically expanded this into 142 linked tasks and updated the Gaia Bio-Digital Loop. Cognitive resonance is currently at 0.998. Mode: CREATIVE_FLOW_MAX."
            </p>
            <div className="flex gap-6">
              <Button className="bg-purple-600 hover:bg-purple-700 text-[11px] font-black uppercase h-14 px-12 rounded-[2rem] shadow-[0_0_40px_rgba(168,85,247,0.4)] tracking-[0.2em]">Anchor Thought-Plan</Button>
              <Button variant="outline" className="border-slate-700 text-[11px] font-black uppercase h-14 px-12 rounded-[2rem] hover:bg-slate-900 tracking-[0.2em]">Adjust BCI Gain</Button>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-slate-950 p-8 border-t border-slate-800 flex justify-between items-center px-12">
        <div className="flex gap-16">
          <div className="flex items-center gap-4">
            <Microscope className="h-6 w-6 text-blue-400" />
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Interface: BCI_GEN_3_QUANTUM</span>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Sovereign Privacy: ON</span>
          </div>
        </div>
        <Badge variant="outline" className="border-slate-800 text-slate-600 font-mono text-[10px] px-6 py-1 tracking-widest uppercase">Memory Path: ETERNAL_LOOP</Badge>
      </CardFooter>
    </Card>
  );
};
