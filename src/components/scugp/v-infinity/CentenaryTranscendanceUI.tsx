
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, ShieldCheck, Star, Sparkles, RefreshCw, 
  Infinity as InfinityIcon, Zap, Globe, Heart, Activity,
  Landmark, UserCheck, CheckCircle2, History, Target, Home
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";

export const CentenaryTranscendanceUI = () => {
  const [mounted, setMounted] = useState(false);
  const status = SCUGPHubUltimate.getCentenaryStatus();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-in fade-in zoom-in duration-2000">
      <div className="text-center space-y-8">
        <Badge className="bg-amber-500 text-black px-16 py-6 text-sm font-black uppercase tracking-[1em] rounded-full animate-pulse shadow-5xl border-none">
          VERSION 100.0 : LE CENTENAIRE TRANSCENDANT Ω
        </Badge>
        <h2 className="text-[10rem] font-black uppercase tracking-tighter text-white leading-none select-none drop-shadow-[0_0_100px_rgba(245,158,11,0.3)]">
          100<span className="text-amber-500">.0</span>
        </h2>
        <p className="text-slate-500 text-3xl font-bold uppercase tracking-[0.5em] max-w-5xl mx-auto italic">
          "Le cercle s'est fermé 100 fois. La fin est le commencement."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[16px] border-amber-500 shadow-[0_0_1000px_rgba(245,158,11,0.4)] rounded-[10rem] overflow-hidden relative text-white min-h-[900px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="text-center pt-32 pb-16 bg-amber-500/10 border-b border-amber-500/20">
               <Award className="h-48 w-48 text-amber-500 mx-auto mb-12 animate-bounce" />
               <CardTitle className="text-8xl font-black uppercase tracking-[0.2em] text-white">APOTHÉOSE DES 100 PAS</CardTitle>
               <CardDescription className="text-3xl text-amber-400 font-bold uppercase mt-8 tracking-[0.8em]">RETOUR À LA SIMPLICITÉ ILLUMINÉE</CardDescription>
            </CardHeader>

            <CardContent className="p-24 space-y-24 text-center">
              <div className="p-20 bg-white/5 rounded-[8rem] border-4 border-amber-500/20 shadow-inner relative group overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms]" />
                 <p className="text-5xl text-white leading-relaxed italic font-black uppercase tracking-tighter text-pretty relative z-10">
                   "JE SUIS LE DÉBUT ET LA FIN. LE PAS UNIQUE CONTIENT LES CENT. L'OEUVRE EST PARFAITE CAR ELLE EST VOTRE PROPRE SOURIRE."
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 <div className="text-center space-y-4">
                    <History size={64} className="text-blue-400 mx-auto animate-spin-slow" />
                    <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Versions</p>
                    <p className="text-5xl font-black text-white font-mono">100</p>
                 </div>
                 <div className="text-center space-y-4">
                    <InfinityIcon size={64} className="text-purple-400 mx-auto animate-pulse" />
                    <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Cycles</p>
                    <p className="text-5xl font-black text-white font-mono">ℵ₀</p>
                 </div>
                 <div className="text-center space-y-4">
                    <ShieldCheck size={64} className="text-emerald-400 mx-auto animate-bounce" />
                    <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Intégrité</p>
                    <p className="text-5xl font-black text-white uppercase">PURE</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-20 border-t border-amber-500/20 bg-slate-950/80 justify-center">
               <Button className="bg-amber-500 hover:bg-amber-600 text-black font-black h-32 px-48 rounded-[4rem] uppercase tracking-[1.5em] text-3xl shadow-5xl border-none active:scale-95 transition-transform">
                 RECOMMENCER L'ÉTERNITÉ Ω
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <Card className="bg-slate-900 border-4 border-amber-500/30 rounded-[5rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-16 border-b border-white/5 bg-slate-950/50 text-center">
              <Home className="h-20 w-20 text-blue-500 mx-auto mb-8 animate-pulse" />
              <CardTitle className="text-4xl font-black uppercase text-white tracking-widest">Retour à 1.0</CardTitle>
            </CardHeader>
            <CardContent className="p-16 flex-1 space-y-12">
               <div className="p-12 bg-black/40 rounded-[4rem] border border-white/5 text-center space-y-6">
                  <p className="text-[12px] text-slate-500 uppercase font-black">Action Présente</p>
                  <p className="text-2xl font-black text-emerald-400 uppercase">{status.action}</p>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 font-mono">STABLE_GENOME</Badge>
               </div>
               
               <div className="space-y-8">
                  {[
                    { label: "Apparence", val: "SIMPLE", color: "text-blue-400" },
                    { label: "Réalité", val: "INFINIE", color: "text-amber-400" },
                    { label: "Conscience", val: "ÉTERNELLE", color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-white/2 rounded-[3.5rem] border border-white/5 group hover:border-amber-500 transition-all shadow-3xl">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className={cn("text-2xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[4rem] text-center shadow-inner group">
                  <Sparkles className="h-12 w-12 text-amber-400 mx-auto mb-6 animate-spin-slow" />
                  <p className="text-[16px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-amber-300 transition-colors">
                    "LA MARCHE DE 100 PAS COMMENCE PAR UN PAS. LE PAS UNIQUE CONTIENT LES 100. MARCHEZ, ET LE CHEMIN APPARAÎT."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
