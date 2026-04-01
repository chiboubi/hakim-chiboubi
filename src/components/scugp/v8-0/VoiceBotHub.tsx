"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Phone, Calendar, Clock, Sparkles, User, Bot, Send, Search, ChevronRight, PhoneCall, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

export const VoiceBotHub = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-2 border-pink-500/20 text-white shadow-2xl overflow-hidden h-full flex flex-col">
          <CardHeader className="border-b border-slate-800 bg-pink-500/5 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-pink-500 flex items-center gap-2">
                <Mic className="h-4 w-4" /> Intelligent RDV & VoiceBot Hub
              </CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Powered by ElevenLabs & Whisper v3 Synthesis</CardDescription>
            </div>
            <Badge className="bg-pink-600 text-white border-none text-[8px] uppercase tracking-widest animate-pulse">VOICE_MESH: READY</Badge>
          </CardHeader>
          <CardContent className="p-6 space-y-8 flex-1 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(219,39,119,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
             
             <div className="relative z-10 flex flex-col items-center gap-8">
                <div 
                  className={cn(
                    "h-32 w-32 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer shadow-2xl relative group",
                    isListening ? "bg-pink-600 scale-110 shadow-pink-500/50" : "bg-slate-800 border-4 border-pink-500/20 hover:border-pink-500/50"
                  )}
                  onClick={() => setIsListening(!isListening)}
                >
                  <Headphones className={cn("h-12 w-12 transition-all", isListening ? "text-white scale-110" : "text-pink-500")} />
                  {isListening && (
                    <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-ping opacity-20" />
                  )}
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-xl font-black uppercase text-white tracking-tighter">
                    {isListening ? "I'm listening to your request..." : "Start Voice Consultation"}
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
                    ElevenLabs Neural Synthesis Active (Low Latency)
                  </p>
                </div>

                <div className="flex gap-4">
                   <div className="p-4 bg-black/40 rounded-3xl border border-slate-800 w-64 text-center group hover:border-pink-500/30 transition-all">
                      <Calendar className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                      <p className="text-[10px] font-black uppercase text-slate-300">Auto-Schedule RDV</p>
                      <p className="text-[8px] text-slate-600 mt-1 uppercase">Sync with Google/Outlook</p>
                   </div>
                   <div className="p-4 bg-black/40 rounded-3xl border border-slate-800 w-64 text-center group hover:border-pink-500/30 transition-all">
                      <PhoneCall className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                      <p className="text-[10px] font-black uppercase text-slate-300">AI Voice Assistant</p>
                      <p className="text-[8px] text-slate-600 mt-1 uppercase">Multi-modal Synthesis</p>
                   </div>
                </div>
             </div>
          </CardContent>
          <CardFooter className="p-4 bg-slate-950 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-pink-400" />
                  <span className="text-[9px] font-black text-slate-500 uppercase">Analysis: Neutral Sentiment</span>
                </div>
                <div className="h-4 w-[1px] bg-slate-800" />
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-[9px] font-black text-slate-500 uppercase">Redirect: Human Agent Scheduled</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-8 border-slate-700 text-[9px] font-black uppercase px-6">Access Voice Logs</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2 border-b border-slate-800">
              <CardTitle className="text-xs font-black uppercase text-pink-400 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Upcoming RDVs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { title: "Project Kickoff VR", with: "Dr. Pierre P.", time: "14:00 PM", type: "IMMERSIF" },
                { title: "Budget Review AI", with: "ACI_CORE", time: "16:30 PM", type: "COGNITIF" },
                { title: "Legal Handshake", with: "Solidity Mesh", time: "Tomorrow", type: "QUANTUM" }
              ].map((rdv, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-black/20 rounded-2xl border border-slate-800 group hover:border-pink-500/30 transition-all cursor-pointer">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-200">{rdv.title}</p>
                    <p className="text-[8px] text-slate-600 font-mono mt-0.5">{rdv.with} | {rdv.time}</p>
                  </div>
                  <Badge variant="outline" className="text-[7px] border-none px-2 h-4 bg-pink-600/10 text-pink-400">{rdv.type}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 h-full flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-500 tracking-widest">Voice Synthesis Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-black/40 rounded-2xl border border-slate-800 flex flex-col items-center">
                 <p className="text-[9px] text-slate-500 uppercase font-black mb-3">Latency Performance</p>
                 <div className="flex items-end gap-1 h-8">
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <div key={i} className={cn("w-1.5 bg-pink-500/40 rounded-t-sm animate-pulse", i % 3 === 0 ? "h-8" : "h-4")} style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                 </div>
                 <p className="text-[10px] font-mono text-pink-400 mt-3 font-black">STABLE: 142ms</p>
              </div>
              <p className="text-[9px] text-slate-600 italic leading-relaxed text-center">
                "VoiceBot uses ElevenLabs Turbo v2.5 for sub-200ms latency, enabling high-fidelity natural conversations with the ACI."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
