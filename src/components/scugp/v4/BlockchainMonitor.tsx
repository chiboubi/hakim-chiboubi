"use client"

import React from 'react';

/**
 * BlockchainMonitor component
 * Provides a live-simulated view of the blockchain ledger's block history.
 */
export const BlockchainMonitor = () => (
  <div className="p-4 bg-black/60 border border-amber-500/30 rounded-xl shadow-inner backdrop-blur-sm">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2.5 h-2.5 bg-amber-500 animate-pulse rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
      <h3 className="text-amber-500 font-black text-[10px] uppercase tracking-[0.2em]">Blockchain Ledger Active</h3>
    </div>
    <div className="space-y-3">
      <div className="text-[10px] font-mono text-slate-400 bg-slate-900/80 p-3 rounded border border-slate-800 animate-in fade-in slide-in-from-right-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-cyan-500 font-bold tracking-tighter">LAST_BLOCK: #004529</span>
          <span className="text-emerald-500 font-black text-[8px]">TX_VALIDATED</span>
        </div>
        <span className="text-slate-600 italic block truncate">Hash: 0x8f3a...2e41 (PV Réunion Forage Angola)</span>
      </div>
      
      <div className="text-[10px] font-mono text-slate-400 bg-slate-900/40 p-3 rounded border border-slate-800/50 opacity-60">
        <div className="flex justify-between items-center mb-1">
          <span className="text-cyan-500 font-bold tracking-tighter">BLOCK: #004528</span>
          <span className="text-emerald-500/70 font-black text-[8px]">TX_VALIDATED</span>
        </div>
        <span className="text-slate-600 italic block truncate">Hash: 0x4d1b...9c32 (Validation HSE Module 12)</span>
      </div>

      <div className="text-[10px] font-mono text-slate-400 bg-slate-900/20 p-3 rounded border border-slate-800/20 opacity-30">
        <div className="flex justify-between items-center mb-1">
          <span className="text-cyan-500 font-bold tracking-tighter">BLOCK: #004527</span>
          <span className="text-emerald-500/50 font-black text-[8px]">TX_VALIDATED</span>
        </div>
        <span className="text-slate-600 italic block truncate">Hash: 0xa12c...f901 (Initialisation Gisement ARC)</span>
      </div>
    </div>
    
    <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
       <span className="text-[8px] text-slate-600 uppercase font-bold tracking-widest">Consensus: PoA Alpha</span>
       <div className="flex gap-0.5">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-1 w-3 bg-cyan-500/20 rounded-full" />
          ))}
       </div>
    </div>
  </div>
);
