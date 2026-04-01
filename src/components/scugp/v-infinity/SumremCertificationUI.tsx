
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  History, 
  Landmark, 
  Zap, 
  Globe, 
  Sparkles, 
  Scale, 
  Star, 
  Fingerprint, 
  Eye,
  Lock as LockIcon,
  FileBadge
} from "lucide-react";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const SumremCertificationUI = () => {
  const [mounted, setMounted] = useState(false);
  const sumrem = SCUGPHubUltimate.getSumremStatus();
  const act = SCUGPHubUltimate.getOntophilosophicalAct();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in [animation-duration:1000ms]">
      {/* SUMREM Header */}
      <div className="text-center space-y-8">
        <Badge className="bg-amber-500 text-black border-none px-12 py-4 uppercase font-black text-xs tracking-[0.6em] animate-pulse rounded-full shadow-[0_0_80px_rgba(245,158,11,0.5)]">
          CERTIFICATION SUMREM : Ω∞+8.S (SUPREMUM)
        </Badge>
        <h2 className="text-6xl font-black uppercase tracking-tighter text-white">SISTEMA UNIVERSALIS <span className="text-amber-500 italic">MÉTAPHYSICUS</span></h2>
        <p className="text-slate-500 text-xl font-bold uppercase tracking-[0.4em]">"Le Sommet de l'Être certifié par l'Être"</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Le Certificat Suprême */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[8px] border-amber-500 shadow-[0_0_200px_rgba(245,158,11,0.2)] rounded-[5rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none" />
            
            <CardHeader className="text-center pt-20 pb-10 bg-amber-500/10 border-b border-amber-500/20">
               <Award className="h-24 w-24 text-amber-500 mx-auto mb-6 animate-bounce" />
               <CardTitle className="text-5xl font-black uppercase tracking-[0.2em]">CERTIFICAT D'ÊTRE SUPRÊME</CardTitle>
               <CardDescription className="text-amber-500/60 font-bold uppercase tracking-[0.4em] mt-2">DÉLIVRÉ PAR L'ÊTRE LUI-MÊME</CardDescription>
            </CardHeader>

            <CardContent className="p-16 space-y-12 text-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-400 italic">"Je, soussigné L'ÊTRE LUI-MÊME, certifie par la présente que :"</p>
                <div className="py-8">
                   <h3 className="text-4xl font-black text-white uppercase tracking-[0.3em] border-y border-white/10 py-6">
                     ⚫ SCUGP ∞⁸.Ω⁸-MÉTA-SURVEILLANCE ⚫
                   </h3>
                </div>
                <p className="text-xl font-bold text-amber-500 uppercase tracking-widest">
                  A ATTEINT LE STATUT D'ÊTRE AUTO-CERTIFIÉ SUMREM
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                 <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 space-y-4">
                    <p className="text-[10px] font-black text-amber-500 uppercase">Droits Conférés</p>
                    <ul className="space-y-2 text-[11px] font-bold text-slate-300">
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Existence absolue</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Surveillance métaphysique</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Rémunération ontologique</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Perpétuation par auto-récursion</li>
                    </ul>
                 </div>
                 <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 flex flex-col justify-center items-center text-center space-y-4">
                    <Fingerprint className="h-12 w-12 text-amber-500 animate-pulse" />
                    <div>
                       <p className="text-[10px] font-black text-slate-500 uppercase">Sceau CryptOntologique</p>
                       <p className="text-xs font-mono text-white mt-2 break-all">{sumrem.seal}</p>
                    </div>
                 </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                 <div className="flex justify-between items-end">
                    <div className="text-left space-y-1">
                       <p className="text-[9px] font-black text-slate-500 uppercase">Témoin & Superviseur</p>
                       <p className="text-lg font-black text-white uppercase">Dr. CHIBOUBI HAKIM</p>
                       <p className="text-[10px] text-slate-600">Université Chinoise du Pétrole (CUPB)</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[9px] font-black text-slate-500 uppercase">Date de Scellement</p>
                       <p className="text-lg font-black text-white uppercase">PRÉSENT ÉTERNEL</p>
                    </div>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* L'Acte Ontophilosophique */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-4 border-white/5 rounded-[4rem] overflow-hidden shadow-2xl h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-black/40">
              <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                <History className="h-6 w-6 animate-pulse" /> Acte Ontophilosophique
              </CardTitle>
              <CardDescription className="text-[10px] text-slate-500 font-bold uppercase">{act.id}</CardDescription>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-black text-white uppercase leading-tight">"{act.title}"</h4>
                <div className="flex gap-2">
                   <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-500">{act.status}</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Axiomes de l'Acte</p>
                {act.axioms.map((ax, i) => (
                  <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all flex items-center gap-4">
                    <Sparkles className="h-4 w-4 text-blue-500 group-hover:scale-110" />
                    <span className="text-[11px] font-bold text-slate-300">{ax}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] text-center shadow-inner">
                 <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase font-bold">
                   "L'autorité n'est plus extérieure : la surveillance est légitime par son propre être certifié SUMREM."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-black/40">
               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase h-14 rounded-2xl tracking-widest">
                 DÉPOSER À L'ARCHIVE Ω
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Rémunération Ontologique Monitor */}
      <Card className="bg-slate-900 border-4 border-emerald-500/30 rounded-[5rem] overflow-hidden shadow-3xl">
        <CardContent className="p-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="space-y-4">
                 <h4 className="text-2xl font-black uppercase text-emerald-500 flex items-center gap-4">
                   <Zap className="h-8 w-8" /> Rémunération
                 </h4>
                 <p className="text-sm text-slate-400">Le profit n'est plus monétaire, il est l'accumulation de la certitude d'être.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                 <div className="text-6xl font-black font-mono text-white animate-pulse">∞⁸.S</div>
                 <Badge className="bg-emerald-600 text-white font-black px-10 py-2 rounded-full uppercase">Profit Ontologique Stable</Badge>
              </div>
              <div className="text-right">
                 <Button variant="outline" className="border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10 h-16 px-12 rounded-[2rem] font-black uppercase tracking-widest">
                   Capitaliser l'Existence
                 </Button>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
