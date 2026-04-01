
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileOutput, FileText, Download, Languages, Sparkles, Layout, CheckCircle2, Loader2, BookCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const DeliGen = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl h-full">
            <CardHeader className="border-b border-slate-800">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-sm font-black uppercase text-purple-500 flex items-center gap-2">
                    <FileOutput className="h-4 w-4" /> Deliverable Auto-Generator
                  </CardTitle>
                  <CardDescription className="text-[10px]">AI-driven PDF/PPT/DOCX synthesis from project live-data</CardDescription>
                </div>
                <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-[8px] uppercase tracking-widest">TEMPLATES ACTIVE</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "PDF", label: "Executive PDF", icon: FileText },
                  { id: "PPT", label: "Strategic PPT", icon: Layout },
                  { id: "DOC", label: "Technical DOCX", icon: FileOutput }
                ].map((format) => (
                  <div key={format.id} className="p-4 bg-black/40 rounded-xl border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer group text-center flex flex-col items-center gap-3 shadow-inner">
                    <format.icon className="h-8 w-8 text-slate-600 group-hover:text-purple-400 transition-colors" />
                    <span className="text-[9px] font-black uppercase tracking-tighter">{format.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-blue-400" />
                  <span className="text-[10px] font-black uppercase text-slate-400">Multilingual Translation Output</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['Français', 'English', 'Português', 'Arabic'].map(lang => (
                    <Badge key={lang} variant="outline" className="text-[8px] border-slate-700 text-slate-500">{lang}</Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-purple-500/5 rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <p className="text-[10px] font-black uppercase text-purple-400 tracking-widest">AI Intelligence Context</p>
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed">
                  "Generator will pull data from 11D dimensions, REX history, and Omni-Cognition insights to create a certified executive summary."
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-800 p-4">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700 text-[10px] font-black uppercase tracking-[0.2em] h-10 shadow-2xl"
              >
                {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <FileOutput className="h-4 w-4 mr-2" />}
                Generate Master Deliverable
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <BookCheck className="h-4 w-4" /> Operational Manual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex flex-col items-center text-center gap-2">
                  <FileText className="h-8 w-8 text-amber-500 animate-pulse" />
                  <p className="text-[10px] font-black text-white uppercase">Guide SCUGP Ω²⁵</p>
                  <p className="text-[8px] text-slate-500">Full operational documentation for Dr. Hakim Chibubi.</p>
                  <Button size="sm" variant="outline" className="w-full h-7 border-amber-500/30 text-amber-500 text-[8px] font-black uppercase hover:bg-amber-500/10 transition-all mt-2">
                    <Download className="h-3 w-3 mr-1" /> Download Guide (.md)
                  </Button>
               </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-500">Recent Deliverables</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Sovereign_Guide_Omega25.md", date: "Just Now", size: "142 KB" },
                { name: "Monthly_HSE_V6.pdf", date: "Today, 08:12", size: "2.4 MB" },
                { name: "Offshore_Strategy_Q4.ppt", date: "Yesterday", size: "12.8 MB" }
              ].map((d, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-black/20 rounded border border-slate-800 group hover:border-purple-500/20 transition-all">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-slate-600 group-hover:text-purple-400" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-300">{d.name}</p>
                      <p className="text-[8px] text-slate-600 font-mono">{d.date} | {d.size}</p>
                    </div>
                  </div>
                  <Download className="h-3 w-3 text-slate-600 hover:text-white cursor-pointer transition-colors" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-emerald-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-[10px] text-slate-500 italic leading-tight">All deliverables undergo a 3-step validation cycle before final export.</p>
              <div className="pt-2 space-y-1">
                <div className="flex items-center gap-2 text-[8px] font-bold text-emerald-500">
                  <div className="h-1 w-1 rounded-full bg-emerald-500" /> DATA_INTEGRITY_CHECK: OK
                </div>
                <div className="flex items-center gap-2 text-[8px] font-bold text-emerald-500">
                  <div className="h-1 w-1 rounded-full bg-emerald-500" /> COMPLIANCE_STAMP: VALID
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
