"use client"

import React from 'react';
import { Layers, TrendingDown, Clock, Link2 } from 'lucide-react';

/**
 * Cockpit5D component
 * Visualizes high-level DataOps metrics including IMC and Workflow reopening rates.
 */
export const Cockpit5D = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl">
      {/* Indicateur de Maturité Collaborative */}
      <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="text-blue-500 w-4 h-4" />
          <span className="text-xs font-bold text-slate-400">Indice IMC (V2.0)</span>
        </div>
        <div className="text-2xl font-black text-white font-mono">0.91</div>
        <p className="text-[10px] text-blue-300 uppercase tracking-tighter">Collaboration inter-entreprises optimisée</p>
      </div>

      {/* Taux de Réouverture des Workflows */}
      <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <TrendingDown className="text-red-500 w-4 h-4" />
          <span className="text-xs font-bold text-slate-400">Taux de Réouverture</span>
        </div>
        <div className="text-2xl font-black text-white font-mono">4.2%</div>
        <p className="text-[10px] text-red-300 uppercase tracking-tighter">-60% de temps de traitement (Cible Zinia)</p>
      </div>

      <div className="col-span-2 p-3 bg-slate-900 rounded-lg flex justify-between items-center border border-slate-800">
        <div className="flex items-center gap-2">
          <Link2 className="text-amber-500 w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Sync status: P6 / SAP / DELTEK</span>
        </div>
        <div className="flex gap-1 items-center">
          <Clock className="h-3 w-3 text-emerald-500 mr-1" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[9px] text-emerald-500 font-bold uppercase ml-1">Live DataOps</span>
        </div>
      </div>
    </div>
  );
};
