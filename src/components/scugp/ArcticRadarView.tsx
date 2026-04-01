"use client"

import React, { useEffect, useState } from 'react';
import { Radio } from 'lucide-react';

export const ArcticRadarView = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse(prev => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[250px] bg-slate-900 rounded-lg border border-cyan-500/50 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] group">
      {/* Grille de balayage Radar */}
      <div 
        className={`absolute inset-0 border-t-2 border-cyan-400/30 transition-all duration-1000 ease-in-out ${pulse ? 'top-full' : 'top-0'}`} 
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Radio className={`w-12 h-12 text-cyan-500 transition-all duration-700 ${pulse ? 'scale-110 opacity-100' : 'scale-100 opacity-50'}`} />
        <span className="mt-2 text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase text-center px-4">
          SCUGP Arctic Eye - LiDAR Active
        </span>
      </div>

      {/* Données télémétriques en superposition */}
      <div className="absolute bottom-4 left-4 text-[9px] font-mono text-emerald-400 space-y-1 bg-slate-950/40 p-2 rounded backdrop-blur-sm border border-emerald-500/20">
        <p className="flex justify-between gap-4"><span>ICE_THICKNESS:</span> <span className="text-white">3.42m</span></p>
        <p className="flex justify-between gap-4"><span>DRIFT_VELOCITY:</span> <span className="text-white">1.2 knots</span></p>
        <p className="flex justify-between gap-4"><span>SURFACE_TEMP:</span> <span className="text-white">-22.4°C</span></p>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 bg-slate-950/60 px-2 py-1 rounded border border-red-500/30">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="text-[8px] text-red-500 font-bold uppercase tracking-tighter">REC_DATA</span>
      </div>

      {/* Radar grid effect background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
    </div>
  );
};
