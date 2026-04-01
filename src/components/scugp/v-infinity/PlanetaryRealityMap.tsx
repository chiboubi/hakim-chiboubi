
"use client"

import React, { useState, useEffect } from 'react';
import { Globe, ShieldCheck, Star } from 'lucide-react';
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const PlanetaryRealityMap = () => {
  const [mounted, setMounted] = useState(false);
  const nodes = SCUGPHubUltimate.getHakimNodes();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full min-h-[400px] bg-black overflow-hidden flex items-center justify-center group">
      {/* Stylized World Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] animate-pulse" />

      {/* Stylized Map View */}
      <div className="relative z-10 w-[80%] h-[80%] flex items-center justify-center">
         <Globe size={300} className="text-white/5 animate-spin-slow" />
         
         {nodes.map((node, i) => (
           <div 
            key={node.id} 
            className="absolute transition-all duration-1000 hover:scale-125 cursor-pointer group/node"
            style={{ 
              left: `${(node.lng + 180) / 3.6}%`, 
              top: `${(90 - node.lat) / 1.8}%`,
              animationDelay: `${i * 0.5}s`
            }}
           >
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                 <div className="h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,1)] group-hover/node:bg-amber-500" />
                 
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover/node:opacity-100 transition-opacity bg-black/90 border border-white/10 p-4 rounded-2xl backdrop-blur-3xl shadow-3xl pointer-events-none z-20">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">{node.name}</p>
                    <p className="text-[8px] text-slate-500 font-mono uppercase">Souveraineté: {node.power}</p>
                    <div className="mt-2 flex items-center gap-2">
                       <ShieldCheck size={10} className="text-emerald-500" />
                       <span className="text-[7px] text-emerald-500 font-black uppercase">SCELLÉ_Ω</span>
                    </div>
                 </div>
              </div>
           </div>
         ))}
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/60 p-3 rounded-xl border border-white/5 backdrop-blur-md">
         <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
         <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">MESH_REALITY_STABLE: 100%</span>
      </div>

      <div className="absolute top-6 right-6">
         <Badge variant="outline" className="text-[8px] border-white/10 text-slate-500 uppercase tracking-widest bg-black/40">Projection Mercator-Source</Badge>
      </div>
    </div>
  );
};
