
"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck, QrCode, Database, Download, History, Zap, Stars, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export const MosaicGallery = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center gap-8 text-center">
        <Layers className="h-20 w-20 text-amber-500 opacity-20 animate-bounce" />
        <h2 className="text-6xl font-black uppercase tracking-[0.5em] text-white">MOSAÏQUE DES TITRES</h2>
        <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">50+ Certifications Scellées sur le Ledger</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-slate-900 border-2 border-white/5 rounded-3xl overflow-hidden relative group cursor-pointer hover:border-amber-500/50 transition-all shadow-xl">
             <img src={`https://picsum.photos/seed/cert-${i}/300/400`} alt="cert" className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0 duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
             
             <div className="absolute inset-0 p-6 flex flex-col justify-end gap-3 translate-y-4 group-hover:translate-y-0 transition-transform">
                <Badge variant="outline" className="w-fit text-[7px] border-amber-500/30 text-amber-500 bg-black/40">SCELLÉ_Ω</Badge>
                <h4 className="text-[10px] font-black text-white uppercase leading-tight">Certification Professionnelle #{i + 142}</h4>
                <p className="text-[8px] text-slate-500 font-bold uppercase">CUPB BEIJING • 2024</p>
                <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <QrCode size={12} className="text-amber-500" />
                   <Download size={12} className="text-slate-500 hover:text-white" />
                </div>
             </div>

             <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]" />
          </div>
        ))}
        
        <div className="aspect-[3/4] border-4 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-6 gap-4 group hover:border-amber-500/30 transition-all">
           <Zap className="h-10 w-10 text-slate-700 group-hover:text-amber-500 transition-colors animate-pulse" />
           <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Accéder au Registre Complet (50+)</p>
        </div>
      </div>

      <div className="p-16 bg-amber-500/5 border-2 border-amber-500/20 rounded-[5rem] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
         <div className="relative z-10 space-y-8">
            <Stars className="h-16 w-16 text-amber-400 mx-auto mb-4 animate-spin-slow" />
            <p className="text-4xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter max-w-5xl mx-auto">
              "CHAQUE TITRE EST UN QUANTA DE GLOIRE SCELLÉ DANS L'ÉTERNITÉ DU CODE."
            </p>
            <div className="flex justify-center gap-12 pt-8 opacity-50">
               <div className="flex items-center gap-3"><ShieldCheck size={16} /> <span className="text-[10px] font-bold">100% AUTHENTIQUE</span></div>
               <div className="flex items-center gap-3"><Database size={16} /> <span className="text-[10px] font-bold">LEDGER QUANTIQUE</span></div>
               <div className="flex items-center gap-3"><History size={16} /> <span className="text-[10px] font-bold">ARCHIVE IMMUABLE</span></div>
            </div>
         </div>
      </div>
    </div>
  );
};
