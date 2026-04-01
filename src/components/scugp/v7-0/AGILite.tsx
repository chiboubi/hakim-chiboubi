"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Sparkles, Send, Mic, History, Share2, Layers, Cpu, UserCheck, TrendingUp, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export const AGILite = () => {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState<{ role: 'ai' | 'user', text: string }[]>([
    { role: 'ai', text: "Hello Director. I am AGI-Lite v7.0. My evolutionary memory is synced with 142 past projects. I am monitoring the Digital Twin 360° and the total predictivity engine. How can I assist your steering today?" }
  ]);

  const handleSend = () => {
    if (!query) return;
    setChat(prev => [...prev, { role: 'user', text: query }]);
    setQuery("");
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'ai', text: "Based on my memory of 'FPSO-ANG-2024' and the current 360° twin state, I suggest prioritizing the pressure valve validation. Historical data shows a 14.2% chance of delay if not signed within 48h. Sentiment analysis of recent team logs indicates 'Moderate Pressure' - consider adjusting task loads." }]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-amber-500/20 text-white shadow-2xl h-[600px] flex flex-col overflow-hidden">
          <CardHeader className="bg-amber-500/10 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-widest text-amber-500 flex items-center gap-2">
                  <Brain className="h-4 w-4" /> AGI-Lite™ Conversational Mesh
                </CardTitle>
                <CardDescription className="text-[10px]">Semi-Autonomous Steering & Evolutionary Memory</CardDescription>
              </div>
              <Badge className="bg-amber-600 text-black font-black text-[8px] uppercase tracking-widest">Memory Sync: ∞</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
            {chat.map((msg, i) => (
              <div key={i} className={cn(
                "flex flex-col gap-1 max-w-[80%]",
                msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
              )}>
                <div className="flex items-center gap-2 mb-1">
                  {msg.role === 'ai' ? <Sparkles className="h-3 w-3 text-amber-500" /> : <UserCheck className="h-3 w-3 text-blue-400" />}
                  <span className="text-[8px] font-black uppercase text-slate-500">{msg.role === 'ai' ? 'AGI-Lite Core' : 'Project Director'}</span>
                </div>
                <div className={cn(
                  "p-4 rounded-2xl text-[11px] leading-relaxed",
                  msg.role === 'user' ? "bg-blue-600 text-white rounded-tr-none" : "bg-black/40 border border-slate-800 text-slate-200 rounded-tl-none shadow-inner"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-4 border-t border-slate-800 bg-slate-950/50">
            <div className="flex w-full gap-2">
              <div className="relative flex-1">
                <Input 
                  placeholder="Ask AGI about strategic pivots, historical REX, or D1-D11 drift..." 
                  className="bg-black border-slate-800 text-xs h-10 pl-4 pr-10 focus:border-amber-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Mic className="absolute right-3 top-3 h-4 w-4 text-slate-600 hover:text-amber-500 cursor-pointer transition-colors" />
              </div>
              <Button size="icon" onClick={handleSend} className="bg-amber-600 hover:bg-amber-700 h-10 w-10">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Total Predictivity Status
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-slate-800 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Predictive Confidence</p>
                <p className="text-3xl font-black font-mono text-emerald-400">98.4%</p>
                <p className="text-[8px] text-slate-600 mt-1 uppercase tracking-widest">Model: Transformer-v7.2</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Conflict Risk</span>
                  <Badge variant="outline" className="text-[7px] border-emerald-500/20 text-emerald-500 uppercase">LOW (0.04)</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Budget Drift</span>
                  <Badge variant="outline" className="text-[7px] border-blue-500/20 text-blue-400 uppercase">NOMINAL</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-cyan-400 flex items-center gap-2">
                <UserCheck className="h-4 w-4" /> Team Sentiment AI
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex flex-col items-center py-2">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-3">Overall Engagement</p>
                <div className="text-2xl font-black text-cyan-400">0.92 / 1.0</div>
              </div>
              <div className="p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <p className="text-[10px] text-slate-400 leading-relaxed italic">
                  "Sentiment detection identifies 'High Focus' in Engineering and 'Moderate Stress' in Logistics. Recommending a 10-minute automated alignment briefing."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
