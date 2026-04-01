"use client"

import React, { useState } from 'react';
import { Search, BookOpen, Lightbulb, Tag, History } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RexEngine, type RexEntry } from "@/scugp-core/governance/RexEngine";

export const RexSearchUI = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<RexEntry[]>([]);
  const [recommendation, setRecommendation] = useState<{recommendation: string, confidence: string} | null>(null);

  const handleSearch = () => {
    const searchResults = RexEngine.searchKnowledge(query);
    setResults(searchResults);
    
    if (query.length > 2) {
      setRecommendation(RexEngine.getRecommendations(query));
    } else {
      setRecommendation(null);
    }
  };

  return (
    <Card className="bg-slate-900 border-slate-800 text-white shadow-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2 font-black uppercase tracking-widest text-amber-500">
          <History className="h-4 w-4" />
          Base REX Interactive (Standard 2.0)
        </CardTitle>
        <CardDescription className="text-[10px] text-slate-500 uppercase font-bold">Capitalisation des retours d'expérience & Machine Learning</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              placeholder="Rechercher par discipline ou tag (ex: HSE, FPSO)..." 
              className="pl-9 bg-black border-slate-700 text-xs h-9 focus:border-amber-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button size="sm" onClick={handleSearch} className="h-9 bg-amber-600 hover:bg-amber-700 font-bold px-4">EXPLORER</Button>
        </div>

        {recommendation && (
          <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg animate-in fade-in slide-in-from-top-1">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="h-3 w-3 text-amber-500" />
              <span className="text-[9px] font-black text-amber-500 uppercase tracking-tighter">AI Insight ({recommendation.confidence} confidence)</span>
            </div>
            <p className="text-[11px] text-amber-100/80 italic leading-relaxed">"{recommendation.recommendation}"</p>
          </div>
        )}

        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800">
          {results.length > 0 ? (
            results.map((entry) => (
              <div key={entry.id} className="p-3 bg-slate-950 border border-slate-800 rounded-lg hover:border-blue-500/30 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3 w-3 text-blue-400" />
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{entry.discipline}</span>
                  </div>
                  <span className="text-[9px] text-slate-600 font-mono">{entry.id}</span>
                </div>
                <h4 className="text-xs font-bold mb-1 leading-tight group-hover:text-amber-500 transition-colors">{entry.problem}</h4>
                <p className="text-[10px] text-slate-400 mb-2 leading-relaxed italic">"{entry.solution}"</p>
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[8px] h-4 bg-slate-900 border-slate-800 text-slate-500 font-bold uppercase">
                      <Tag className="h-2 w-2 mr-1 opacity-50" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))
          ) : query ? (
            <div className="text-center py-10 text-slate-600 italic text-[10px] uppercase tracking-widest border-2 border-dashed border-slate-800 rounded-lg">
              Aucun retour d'expérience correspondant.
            </div>
          ) : (
            <div className="text-center py-10 text-slate-600 italic text-[10px] uppercase tracking-widest border-2 border-dashed border-slate-800 rounded-lg">
              Saisissez une discipline pour consulter les archives V60.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
