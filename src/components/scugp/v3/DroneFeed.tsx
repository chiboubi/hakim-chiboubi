"use client"

import React, { useState, useEffect } from 'react';
import { Plane, AlertTriangle, Maximize2 } from 'lucide-react';

/**
 * DroneFeed component
 * Visualizes a live-simulated drone feed with telemetry and object detection markers.
 */
export const DroneFeed = () => {
  const [telemetry, setTelemetry] = useState({ 
    alt: 45.2, 
    bat: 88, 
    lat: "-12.345", 
    long: "13.567" 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        ...prev,
        alt: prev.alt + (Math.random() > 0.5 ? 0.05 : -0.05),
        bat: Math.max(0, prev.bat - 0.005)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 bg-black rounded-2xl border-2 border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] group">
      {/* Overlay Télémétrie */}
      <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-cyan-400 space-y-1 bg-black/60 p-2 rounded border border-cyan-500/20 backdrop-blur-sm">
        <p className="flex justify-between gap-4"><span>ALT:</span> <span>{telemetry.alt.toFixed(2)}m</span></p>
        <p className="flex justify-between gap-4"><span>BAT:</span> <span className={telemetry.bat < 20 ? "text-red-500 animate-pulse" : ""}>{Math.round(telemetry.bat)}%</span></p>
        <p className="flex justify-between gap-4"><span>LAT:</span> <span>{telemetry.lat}</span></p>
        <p className="flex justify-between gap-4"><span>LNG:</span> <span>{telemetry.long}</span></p>
      </div>

      {/* HUD Gauges */}
      <div className="absolute inset-y-0 left-2 w-1 bg-cyan-500/20 my-10 rounded-full overflow-hidden">
        <div className="bg-cyan-500 w-full transition-all duration-1000" style={{ height: `${(telemetry.alt / 100) * 100}%` }} />
      </div>

      {/* Flux Vidéo (Simulé avec un filtre High-Tech) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#040d1a] to-slate-900 opacity-80" />
        
        {/* Reticule de visée */}
        <div className="absolute w-24 h-24 border border-cyan-500/20 rounded-full" />
        <div className="absolute w-full h-[1px] bg-cyan-500/10" />
        <div className="absolute h-full w-[1px] bg-cyan-500/10" />

        {/* Boîte de détection d'objet */}
        <div className="absolute border-2 border-emerald-500/50 w-40 h-40 animate-pulse rounded-sm transition-transform duration-500 hover:scale-105">
            <div className="absolute -top-6 left-0 flex items-center gap-1 bg-emerald-500/20 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/50">
                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-widest">MODULE_12_CERTIFIED</span>
                <span className="text-[8px] text-emerald-500/70 font-mono">98.4%</span>
            </div>
            {/* Corner markers */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />
        </div>
      </div>

      {/* Barre de Status */}
      <div className="absolute bottom-0 w-full bg-cyan-950/90 p-2 flex justify-between items-center px-4 border-t border-cyan-500/30 backdrop-blur-md">
        <div className="flex items-center gap-3 text-cyan-400">
          <div className="relative">
            <Plane size={14} className="animate-bounce" />
            <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-20 animate-pulse" />
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase font-mono">FPSO_ANG_DRONE_04</span>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-1 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
              <AlertTriangle size={10} className="text-red-500" />
              <span className="text-[8px] text-red-500 font-bold uppercase">Corrosion_Risk_B4</span>
           </div>
           <Maximize2 size={14} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};
