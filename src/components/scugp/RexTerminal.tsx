"use client"

import React, { useState } from 'react';
import { Search, BookOpen, Lightbulb } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { RexEngine } from "@/scugp-core/governance/RexEngine";

/**
 * RexTerminal component
 * A compact, terminal-style interface for querying the technical knowledge base (REX).
 */
export const RexTerminal = () => {
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }
    const searchResults = RexEngine.searchKnowledge(query);
    setResults(searchResults);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-4 shadow-xl">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <BookOpen className="text-amber-500 w-4 h-4" />
        <span className="text-[10px] font-black text-slate-200 uppercase tracking-[0.2em]">Base REX Interactive V2.0</span>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
        <Input 
          placeholder="Rechercher une solution technique (ex: FPSO, Arctic, ISO)..." 
          className="pl-8 bg-black border-slate-700 text-[10px] h-9 focus:border-amber-500 font-mono"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
        {results.length > 0 ? results.map(res => (
          <div key={res.id} className="p-2 bg-slate-950 border border-slate-800 rounded border-l-2 border-l-amber-500 animate-in fade-in slide-in-from-left-1">
            <div className="flex justify-between text-[9px] text-amber-500 font-bold mb-1 font-mono">
              <span>{res.project}</span>
              <span>{res.id}</span>
            </div>
            <p className="text-[10px] text-slate-300 leading-tight">
              <span className="text-slate-500 uppercase font-black mr-1">Problème:</span> 
              {res.problem}
            </p>
            <p className="text-[10px] text-emerald-400 mt-1 flex items-start gap-1 leading-tight italic">
              <Lightbulb size={10} className="shrink-0 mt-0.5" /> 
              <span>{res.solution}</span>
            </p>
          </div>
        )) : (
          <div className="flex flex-col items-center justify-center py-8 opacity-30">
            <BookOpen className="h-8 w-8 text-slate-600 mb-2" />
            <p className="text-[9px] text-slate-600 italic text-center uppercase tracking-widest font-bold">
              Saisissez un mot-clé technique<br/>pour consulter la mémoire du projet
            </p>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
        <span className="text-[8px] font-mono text-slate-500">ISO-15926-COMPLIANT</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/10"></div>
        </div>
      </div>
    </div>
  );
};
