"use client"

import React from 'react';
import { Box, Activity, ShieldCheck, Leaf, Globe, Database, Brain, Target, Zap, Clock, Search, Scale } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * DigitalTwin35 component
 * Enhanced for Intelligent Twin status with IoT mesh and 11D+ dimension tracking.
 */
export const DigitalTwin35 = () => {
  return (
    <div className="bg-slate-950 border-2 border-cyan-500/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[length:30px_30px]" />
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div>
          <h2 className="text-xl font-black text-cyan-400 uppercase tracking-tighter flex items-center gap-2">
            <Zap className="h-5 w-5 animate-pulse" /> 11D Intelligent Digital Twin
          </h2>
          <p className="text-[9px] text-slate-500 uppercase font-bold">Active IoT Mesh: FPSO-ANG-2026 | ALL DIMENSIONS ACTIVE</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="bg-emerald-500/20 text-emerald-400 text-[9px] px-2 py-1 rounded font-mono font-bold uppercase tracking-widest animate-pulse border border-emerald-500/30">
            SYNC: 0.2ms
          </span>
          <span className="text-[8px] text-slate-600 font-mono">ISO 27001 SECURED</span>
        </div>
      </div>

      {/* Rendu 3D avec Overlay IoT */}
      <div className="h-72 bg-black/50 rounded-2xl flex flex-col items-center justify-center border border-slate-800 relative overflow-hidden group/render shadow-inner">
        <Box className="w-20 h-20 text-cyan-500 animate-spin-slow drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
          <Badge variant="outline" className="bg-black/60 border-cyan-500/30 text-cyan-400 text-[8px] flex items-center gap-1">
            <Activity className="h-2 w-2" /> D1: PLANNING SYNC
          </Badge>
          <Badge variant="outline" className="bg-black/60 border-emerald-500/30 text-emerald-400 text-[8px] flex items-center gap-1">
            <Leaf className="h-2 w-2" /> D9: SCOPE 1-3 OK
          </Badge>
          <Badge variant="outline" className="bg-black/60 border-amber-500/30 text-amber-400 text-[8px] flex items-center gap-1">
            <Clock className="h-2 w-2" /> D8: PERFORMANCE NOMINAL
          </Badge>
        </div>

        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan-300 bg-black/60 px-3 py-1.5 rounded-lg border border-cyan-500/20 backdrop-blur-md flex items-center gap-2">
          <Database className="h-3 w-3" />
          MODÈLE BIM: REVIT/PI SYNCED (D3 QUALITY)
        </div>
        
        {/* Scanning line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute w-full h-1 bg-cyan-400 top-0 animate-[slide-down_4s_linear_infinite]" />
        </div>
      </div>

      {/* Dimensions Dashboard (Highlighting D10 & D11) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 relative z-10">
        {[
          { label: "D10: Innovation", val: "TRL 9+ REACHED", icon: Zap, color: "border-purple-500" },
          { label: "D11: AI Steering", val: "SCUGP-GENIE LIVE", icon: Brain, color: "border-amber-500" },
          { label: "D5: AI Risk", val: "LOW PROBABILITY", icon: Target, color: "border-red-500" },
          { label: "D7: Compliance", val: "100% AUDITED", icon: Scale, color: "border-blue-500" }
        ].map((item, i) => (
          <div key={i} className={cn(
            "p-3 bg-slate-900/60 rounded-xl border-l-2 hover:bg-slate-900 transition-all cursor-default group/item",
            item.color
          )}>
            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest group-hover/item:text-slate-300 transition-colors">{item.label}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs font-black text-white font-mono">{item.val}</p>
              <item.icon className="h-3 w-3 text-slate-600 opacity-50 group-hover/item:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
