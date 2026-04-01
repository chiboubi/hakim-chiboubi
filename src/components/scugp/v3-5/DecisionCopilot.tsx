"use client"

import React, { useState } from 'react';
import { MessageSquare, Sparkles, Send, ShieldCheck, FileText, Brain, User, Cloud, Users, FileCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScugpGenie, type AIResponse } from '@/scugp-v3-5/ai/ScugpGenie';
import { cn } from '@/lib/utils';

export const DecisionCopilot = () => {
  const [query, setQuery] = useState("");
  const [history, setLogs] = useState<{ role: 'user' | 'ai', text: string, isMinutes?: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastInsight, setLastInsight] = useState<AIResponse | null>(null);

  const handleAsk = async (specificQuery?: string) => {
    const q = specificQuery || query;
    if (!q) return;
    setLoading(true);
    setLogs(prev => [...prev, { role: 'user', text: q }]);
    
    try {
      const response = await ScugpGenie.askGenie(q, {});
      const isMinutes = q.toLowerCase().includes('minutes') || q.toLowerCase().includes('cr');
      setLogs(prev => [...prev, { role: 'ai', text: response.answer, isMinutes }]);
      setLastInsight(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  const handleGenerateMinutes = () => {
    handleAsk("Generate automatic meeting minutes for today's IT Agile sync.");
  };

  return (
    <Card className="bg-slate-900 border-2 border-amber-500/20 text-white shadow-2xl h-full flex flex-col overflow-hidden">
      <CardHeader className="bg-amber-500/10 border-b border-slate-800 pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-black uppercase tracking-widest text-amber-500 flex items-center gap-2">
            <Cloud className="h-4 w-4" /> AI Genie™ Co-Pilot 3.5
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-7 border-amber-500/30 text-amber-500 text-[8px] uppercase font-black" onClick={handleGenerateMinutes}>
              <FileCheck className="h-3 w-3 mr-1" /> Auto-Minutes
            </Button>
            <Badge className="bg-amber-600/20 text-amber-500 border-amber-500/30 text-[9px]">MFA ACTIVE</Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] scrollbar-thin scrollbar-thumb-slate-800">
        {history.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-slate-600 opacity-50 text-center py-10">
            <Sparkles className="h-10 w-10 mb-4" />
            <p className="text-[10px] uppercase font-bold tracking-[0.2em]">Ask the Genie about Agile Sprints, RACI, or Generate Meeting Minutes</p>
          </div>
        )}
        
        {history.map((msg, i) => (
          <div key={i} className={cn(
            "flex flex-col gap-1 max-w-[85%]",
            msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
          )}>
            <div className="flex items-center gap-2 mb-1">
              {msg.role === 'ai' ? <Sparkles className="h-3 w-3 text-amber-500" /> : <User className="h-3 w-3 text-blue-400" />}
              <span className="text-[8px] font-black uppercase text-slate-500">{msg.role === 'ai' ? 'SCUGP Genie' : 'Project Director'}</span>
            </div>
            <div className={cn(
              "p-3 rounded-2xl text-[11px] leading-relaxed whitespace-pre-wrap",
              msg.role === 'user' ? "bg-blue-600 text-white rounded-tr-none" : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none",
              msg.isMinutes && "font-mono border-l-4 border-l-amber-500"
            )}>
              {msg.isMinutes ? (
                <div className="space-y-2">
                  <div className="border-b border-slate-700 pb-1 mb-2 font-black text-amber-500 uppercase tracking-tighter">Automatic Meeting Minutes - V3.5</div>
                  {msg.text}
                </div>
              ) : msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-2 items-center text-amber-500 animate-pulse">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-amber-500"></div>
              <div className="w-1 h-1 rounded-full bg-amber-500"></div>
              <div className="w-1 h-1 rounded-full bg-amber-500"></div>
            </div>
            <span className="text-[9px] uppercase font-bold">Genie is thinking...</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 border-t border-slate-800">
        <div className="flex w-full gap-2">
          <Input 
            placeholder="Query Agile sprint, RACI matrix, or MFA logs..." 
            className="flex-1 bg-black border-slate-700 text-xs h-10 focus:border-amber-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          />
          <Button size="icon" onClick={() => handleAsk()} disabled={loading || !query} className="bg-amber-600 hover:bg-amber-700">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
