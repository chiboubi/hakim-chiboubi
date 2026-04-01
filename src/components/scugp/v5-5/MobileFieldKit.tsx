"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, QrCode, Camera, Mic, MapPin, CheckSquare, ClipboardCheck, History, ArrowRight } from "lucide-react";

export const MobileFieldKit = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Mock Phone Preview */}
      <div className="lg:col-span-4 flex justify-center">
        <div className="w-[280px] h-[560px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="h-6 w-32 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20" />
          
          <div className="flex-1 bg-slate-950 p-4 pt-10 space-y-4">
            <div className="flex justify-between items-center">
              <Badge className="bg-emerald-600/20 text-emerald-500 border-none text-[8px]">OFFLINE READY</Badge>
              <div className="h-4 w-4 rounded-full bg-slate-800 flex items-center justify-center text-[8px] text-slate-500 font-mono">12</div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-black tracking-tight text-white uppercase">Field App</h3>
              <p className="text-[9px] text-slate-500 uppercase font-bold">Project: ARC-2026-V60</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center gap-2 hover:border-emerald-500/30 transition-colors">
                <QrCode className="h-6 w-6 text-emerald-500" />
                <span className="text-[8px] font-bold uppercase">Scan Tag</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center gap-2 hover:border-blue-500/30 transition-colors">
                <Camera className="h-6 w-6 text-blue-500" />
                <span className="text-[8px] font-bold uppercase">GIS Photo</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center gap-2 hover:border-amber-500/30 transition-colors">
                <Mic className="h-6 w-6 text-amber-500" />
                <span className="text-[8px] font-bold uppercase">Voice Log</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center gap-2 hover:border-teal-500/30 transition-colors">
                <CheckSquare className="h-6 w-6 text-teal-500" />
                <span className="text-[8px] font-bold uppercase">Checklist</span>
              </div>
            </div>

            <div className="p-3 bg-black/40 rounded-xl border border-slate-800 space-y-2">
              <p className="text-[8px] font-black uppercase text-slate-500 mb-1">Active Checklist</p>
              <div className="flex items-center gap-2 text-[9px] font-bold text-slate-300">
                <div className="h-3 w-3 rounded-full border border-emerald-500 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                Pressure Valve V-122
              </div>
              <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500">
                <div className="h-3 w-3 rounded-full border border-slate-700" />
                Structural Integrity Scan
              </div>
            </div>
          </div>

          <div className="h-12 bg-slate-900 border-t border-slate-800 flex items-center justify-around px-6">
            <Smartphone className="h-4 w-4 text-emerald-500" />
            <div className="h-1 w-12 bg-slate-800 rounded-full" />
            <ArrowRight className="h-4 w-4 text-slate-600" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-black uppercase text-emerald-500 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Geolocated Photo Feed
              </CardTitle>
              <CardDescription className="text-[10px]">Real-time field captures from Mobile Field Kit™</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-video bg-black/40 rounded-lg border border-slate-800 flex items-center justify-center relative group overflow-hidden">
                    <img src={`https://picsum.photos/seed/field-${i}/200/120`} alt="Field" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-1 right-1 bg-black/60 px-1 rounded text-[7px] font-mono text-emerald-400">GEO_VALIDATED</div>
                  </div>
                ))}
              </div>
              <Button size="sm" variant="outline" className="w-full mt-4 text-[9px] font-black uppercase h-8 border-slate-700">View Full GIS Map</Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-black uppercase text-amber-500 flex items-center gap-2">
                <Mic className="h-4 w-4" /> Voice Transcription Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-black/40 rounded border border-slate-800 italic">
                <p className="text-[10px] text-slate-400">"Observation at Sector Alpha: Corrosion detected on support bracket B-14. Suggesting surface treatment in next maintenance cycle."</p>
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-500">
                <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Transcribed via Whisper v3</span>
                <span className="text-amber-500 uppercase">Converted to task</span>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Voice Logs Health</p>
                <div className="flex items-center gap-2">
                  <div className="h-1 bg-slate-800 flex-1 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[94%]" />
                  </div>
                  <span className="text-[9px] font-mono">94% Acc</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900 border-slate-800 overflow-hidden">
          <CardHeader className="pb-2 border-b border-slate-800 bg-slate-950/50">
            <CardTitle className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
              <History className="h-4 w-4" /> Recent Mobile Daily Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-left text-[10px]">
              <thead className="bg-black/40 text-slate-500 uppercase font-black">
                <tr>
                  <th className="p-4 border-b border-slate-800">Report ID</th>
                  <th className="p-4 border-b border-slate-800">Field Agent</th>
                  <th className="p-4 border-b border-slate-800">Location</th>
                  <th className="p-4 border-b border-slate-800">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "REP-442", agent: "E. Vance", loc: "S12 Platform", status: "VALIDATED" },
                  { id: "REP-441", agent: "M. Thompson", loc: "Sector Alpha", status: "SYNCED" }
                ].map((r, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-300">{r.id}</td>
                    <td className="p-4">{r.agent}</td>
                    <td className="p-4 font-mono text-slate-500">{r.loc}</td>
                    <td className="p-4">
                      <span className="text-emerald-500 font-black uppercase">{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
