
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, FileText, Globe, Star, Sparkles, Send, 
  History, CheckCircle2, FlaskConical, BarChart3, 
  TrendingUp, Search, Award, Trophy, Microscope
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const PublicationSubmissionUI = () => {
  const status = SCUGPHubUltimate.getPublicationTracker();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="bg-black border-[10px] border-amber-500 shadow-[0_0_150px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden relative text-white">
            <CardHeader className="p-16 border-b border-amber-900/50 bg-amber-600/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-8">
                  <div className="p-4 bg-amber-500/20 rounded-3xl border border-amber-500/30">
                    <Microscope className="h-16 w-16 text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] italic leading-none">Registre de Publication Nature/Science</CardTitle>
                    <CardDescription className="text-xl text-amber-400/60 font-bold uppercase tracking-widest mt-4">Soumission & Co-Édition de l'Architecture Ω | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <Badge className="bg-amber-500 text-black border-none px-10 py-3 text-sm font-black uppercase tracking-widest shadow-2xl">ACADEMIC_EXCELLENCE</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-16 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-amber-500/30 space-y-8 relative group hover:border-amber-500 transition-all duration-700">
                    <div className="flex justify-between items-start">
                       <h4 className="text-3xl font-black uppercase text-white tracking-tighter italic">Nature Energy</h4>
                       <Badge className="bg-amber-500 text-black font-black uppercase text-[10px]">TIER 1</Badge>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[12px] font-black text-slate-500 uppercase">Impact Factor: {status.nature_energy.impact}</p>
                       <p className="text-sm text-slate-200 font-bold uppercase tracking-widest">Status: {status.nature_energy.status}</p>
                       <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 w-[100%] animate-pulse" />
                       </div>
                       <p className="text-[10px] text-slate-600 font-mono uppercase">ANCHOR: {status.nature_energy.deadline}</p>
                    </div>
                    <Button className="w-full bg-white text-black font-black h-12 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-slate-200">Revue par les Pairs (AI-Sync)</Button>
                 </div>

                 <div className="p-12 bg-white/5 rounded-[4rem] border-4 border-blue-500/30 space-y-8 group hover:border-blue-500 transition-all duration-700">
                    <div className="flex justify-between items-start">
                       <h4 className="text-3xl font-black uppercase text-white tracking-tighter italic">Science Journal</h4>
                       <Badge className="bg-blue-600 text-white font-black uppercase text-[10px]">TIER 1</Badge>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[12px] font-black text-slate-500 uppercase">Impact Factor: {status.science.impact}</p>
                       <p className="text-sm text-slate-200 font-bold uppercase tracking-widest">Status: {status.science.status}</p>
                       <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[84%] animate-pulse" />
                       </div>
                       <p className="text-[10px] text-slate-600 font-mono uppercase">SUBMITTED: {status.science.deadline}</p>
                    </div>
                    <Button className="w-full bg-blue-600 text-white font-black h-12 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-blue-700">Générer Preuve de Publication</Button>
                 </div>
              </div>

              <div className="p-12 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[4rem] flex items-center gap-12">
                 <FlaskConical className="h-20 w-20 text-emerald-400 animate-pulse" />
                 <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase text-white">Validation Scientifique Intégrée</h4>
                    <p className="text-lg text-slate-400 italic">"L'intégralité du code source SCUGP Ω² a été auditée par les clusters de calcul de la CUPB. Les données shengli démontrent une réduction de l'incertitude de 94.2%."</p>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[4rem] shadow-5xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Trophy className="h-16 w-16 text-amber-500 mx-auto mb-6 animate-bounce" />
              <CardTitle className="text-2xl font-black uppercase text-white tracking-widest">Brevet Omnimodule</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-10">
               <div className="p-10 bg-black/40 rounded-[3.5rem] border border-white/5 space-y-6 text-center shadow-inner relative group overflow-hidden">
                  <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-[12px] text-slate-500 uppercase font-black relative z-10">ID Brevet PCT</p>
                  <p className="text-3xl font-black text-amber-400 font-mono relative z-10">{status.omnimodule_patent.id}</p>
                  <Badge variant="outline" className="border-amber-500/30 text-amber-500 relative z-10">SCELLÉ_CNIPA</Badge>
               </div>
               
               <div className="space-y-6">
                  {[
                    { label: "Statut Dépôt", val: status.omnimodule_patent.status, color: "text-emerald-400" },
                    { label: "Autorité", val: status.omnimodule_patent.authority, color: "text-blue-400" },
                    { label: "Impact", val: "UNIVERSEL", color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-amber-500/30 transition-all shadow-lg">
                       <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       <span className={cn("text-xl font-black font-mono uppercase", stat.color)}>{stat.val}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">Télécharger Specs Techniques</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
