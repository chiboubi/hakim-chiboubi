"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Star, History, Lightbulb, CheckCircle2, TrendingUp, Search } from "lucide-react";

const courses = [
  { title: "HSE Protocol v5.5", duration: "15m", progress: 100, category: "SAFETY" },
  { title: "ESG & Scope 3 Reporting", duration: "25m", progress: 45, category: "GOVERNANCE" },
  { title: "SIG Interoperability Guide", duration: "10m", progress: 0, category: "TECH" },
  { title: "Zinia Phase 2 Standard", duration: "20m", progress: 80, category: "MANAGEMENT" }
];

export const LearningCenter = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 space-y-6">
        <Card className="bg-slate-900 border-slate-800 text-white shadow-2xl">
          <CardHeader className="border-b border-slate-800 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-blue-400 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> SCUGP Learning Center
              </CardTitle>
              <CardDescription className="text-[10px]">Embedded micro-training for certified project actors</CardDescription>
            </div>
            <div className="relative w-48">
              <Search className="absolute left-2 top-2 h-3 w-3 text-slate-500" />
              <input placeholder="Search modules..." className="w-full bg-black/50 border border-slate-800 rounded h-7 pl-7 text-[10px] text-white focus:outline-none focus:border-blue-500/50" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, i) => (
                <div key={i} className="p-4 bg-black/40 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 uppercase">{course.category}</Badge>
                    <span className="text-[8px] font-mono text-slate-600">{course.duration}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-200 mb-3">{course.title}</h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[8px] font-black uppercase">
                      <span className="text-slate-500">Progress</span>
                      <span className="text-blue-400">{course.progress}%</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase text-amber-500 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" /> Centralized "Lessons Learned" (REX)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: "Arctic Drilling Delay Mitigation", project: "ARC-2026", date: "2d ago", impact: "High" },
                { title: "Supplier Handshake Automation", project: "GOLD-5.5", date: "5d ago", impact: "Medium" }
              ].map((rex, i) => (
                <div key={i} className="p-3 bg-black/20 rounded border border-slate-800 hover:bg-black/40 transition-colors flex justify-between items-center group">
                  <div>
                    <p className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">{rex.title}</p>
                    <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">{rex.project} | {rex.date}</p>
                  </div>
                  <Badge variant="outline" className="text-[8px] border-amber-500/20 text-amber-500">IMPACT: {rex.impact}</Badge>
                </div>
              ))}
            </div>
            <Button size="sm" variant="ghost" className="w-full mt-4 text-[9px] font-black uppercase text-slate-500 hover:text-white">
              Browse Entire Knowledge Base
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <Card className="bg-blue-900/10 border border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-xs font-black uppercase text-blue-400">Certification Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center py-4">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-black font-mono">72%</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 uppercase font-black mt-4">Platform Mastery Level</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-slate-800">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                <span className="text-[9px] font-bold text-slate-300">HSE Certification Level 1</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-slate-800">
                <History className="h-3 w-3 text-slate-600" />
                <span className="text-[9px] font-bold text-slate-500">ESG Reporting Mastery (Pending)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" /> Knowledge Capitalization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20 text-center">
              <p className="text-2xl font-black font-mono text-emerald-400">+142</p>
              <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">New REX entries this month</p>
            </div>
            <p className="text-[9px] text-slate-600 mt-4 leading-relaxed">
              Automatic capitalization engine active. Every validated decision is now indexed for future project reference.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
