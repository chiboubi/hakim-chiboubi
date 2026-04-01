"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, GraduationCap, Award, BookOpen, Microscope, Share2, ShieldCheck, Zap, Gavel, FileCheck, Star } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const InstitutionalRoadmap = () => {
  const strategy = SCUGPHubUltimate.getInstitutionalStrategy();
  const steps = SCUGPHubUltimate.getInstitutionalSteps();

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Target Journals Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col">
          <CardHeader className="bg-blue-500/10 border-b border-white/5 p-8">
            <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
              <BookOpen className="h-6 w-6" /> Revues Cibles Tier 1
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6 flex-1">
            {strategy.revues_cibles.tier_1.map((revue, i) => (
              <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-black text-white uppercase tracking-tighter">{revue.name}</span>
                  <Badge className="bg-blue-600 text-white text-[8px] border-none px-2 uppercase">{revue.status}</Badge>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                  <Zap className="h-3 w-3 text-amber-500" /> Impact Factor: {revue.impact}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-white/5">
               <p className="text-[10px] font-black text-slate-500 uppercase mb-3">Spécialisées Tier 2</p>
               <div className="space-y-2">
                  {strategy.revues_cibles.tier_2.map((r, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] text-slate-400">
                       <span>{r.name}</span>
                       <span className="font-mono text-blue-500">{r.impact}</span>
                    </div>
                  ))}
               </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col">
          <CardHeader className="bg-emerald-500/10 border-b border-white/5 p-8">
            <CardTitle className="text-xs font-black uppercase text-emerald-400 flex items-center gap-4 tracking-widest">
              <ShieldCheck className="h-6 w-6" /> Protection & IP Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6 flex-1">
            {strategy.protection_ip.map((ip, i) => (
              <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-emerald-500/30 transition-all">
                <p className="text-sm font-black text-white uppercase tracking-tighter mb-1">{ip.type}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{ip.inst}</p>
                <div className="flex justify-between items-end mt-2">
                   <p className="text-[9px] text-emerald-500 font-mono uppercase">{ip.duration}</p>
                   <Badge variant="outline" className="text-[7px] border-emerald-500/20 text-emerald-500">{ip.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800 shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col">
          <CardHeader className="bg-purple-500/10 border-b border-white/5 p-8">
            <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-4 tracking-widest">
              <Award className="h-6 w-6" /> Certifications de Grade
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6 flex-1">
            <div className="space-y-6">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3">Project Management</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.certifications.pm.map(c => <Badge key={c} variant="outline" className="text-[8px] border-blue-500/20 text-blue-400 uppercase">{c}</Badge>)}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3">Artificial Intelligence</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.certifications.ai.map(c => <Badge key={c} variant="outline" className="text-[8px] border-purple-500/20 text-purple-400 uppercase">{c}</Badge>)}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3">Petroleum Engineering</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.certifications.energy.map(c => <Badge key={c} variant="outline" className="text-[8px] border-emerald-500/20 text-emerald-400 uppercase">{c}</Badge>)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Institutional Steps */}
      <Card className="bg-black border-[12px] border-slate-900 shadow-3xl rounded-[5rem] overflow-hidden">
        <CardHeader className="p-16 border-b border-white/5 bg-slate-900/50 text-center">
           <Landmark className="h-20 w-20 text-amber-500 mx-auto mb-8 animate-pulse" />
           <CardTitle className="text-5xl font-black uppercase tracking-[0.2em] text-white">Demarche de Reconnaissance Officielle</CardTitle>
           <CardDescription className="text-xl text-slate-500 font-bold uppercase mt-4 tracking-[0.5em]">Passage de la Vision à l'Institution | Dr. Hakim Chibubi SCUGP® Founder</CardDescription>
        </CardHeader>
        <CardContent className="p-16">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="p-8 bg-slate-900/60 rounded-[3rem] border border-white/5 relative group hover:border-amber-500/30 transition-all flex flex-col gap-6">
                   <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-black text-amber-500">{i + 1}</span>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-lg font-black text-white uppercase tracking-tighter leading-tight">{step.action}</h4>
                      <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">{step.goal}</p>
                   </div>
                   <div className="mt-auto pt-6 border-t border-white/5">
                      <p className="text-[9px] text-slate-500 uppercase font-black mb-2">Document Requis</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-300 font-bold">
                         <FileCheck className="h-4 w-4 text-emerald-500" /> {step.doc}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </CardContent>
      </Card>
    </div>
  );
};
