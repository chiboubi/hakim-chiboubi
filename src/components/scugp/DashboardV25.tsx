"use client"

import React, { useState, useEffect } from 'react';
import { Cpu, Leaf, FileText, Activity, Plane, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DroneInspector } from '@/scugp-v3/ai/DroneInspector';
import { cn } from "@/lib/utils";

/**
 * SCUGP_V25_Cockpit component
 * A high-level operational summary for the SCUGP v2.5 intelligence layer.
 */
export const SCUGP_V25_Cockpit = () => {
  const [droneStatus, setDroneStatus] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleDroneScan = async () => {
    setIsScanning(true);
    // Simulation simple pour l'interface
    const result = await DroneInspector.validateProgress(
      { visualMarkers: 880 },
      { totalMarkers: 1000 }
    );
    setDroneStatus(result);
    setIsScanning(false);
  };

  useEffect(() => {
    handleDroneScan();
  }, []);

  return (
    <div className="p-6 bg-slate-950 text-white space-y-6 rounded-2xl border border-slate-800 shadow-2xl">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <Cpu className="h-5 w-5 text-amber-500" />
          </div>
          <h1 className="text-2xl font-black italic text-amber-500 tracking-tighter uppercase">SCUGP 2.5 CO-PILOT</h1>
        </div>
        <Badge variant="outline" className="text-cyan-400 border-cyan-400 font-mono">MVP T4 2025</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* ESG Status */}
        <Card className="bg-emerald-950/20 border-emerald-500/30 text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-emerald-500">ESG Compliance</CardTitle>
            <Leaf className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono text-emerald-400">ISO 14001: OK</div>
            <Progress value={92} className="h-1 mt-3 bg-emerald-900/30" />
            <p className="text-[9px] text-slate-500 mt-2 uppercase font-bold">Standard 19.0 Point 4</p>
          </CardContent>
        </Card>

        {/* CPI - Indice de Performance Collaborative */}
        <Card className="bg-blue-950/20 border-blue-500/30 text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-blue-400">CPI Index</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono text-blue-400">0.89 / 1.0</div>
            <p className="text-[9px] text-slate-500 mt-2 uppercase font-bold leading-tight">Coordination EPC/Sub-contractors optimal</p>
          </CardContent>
        </Card>

        {/* Contractual Claims */}
        <Card className="bg-red-950/20 border-red-500/30 text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-red-500">Alertes Clauses</CardTitle>
            <FileText className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-black font-mono text-red-400">2 Écarts</div>
            <Button size="sm" className="h-7 text-[9px] mt-3 bg-red-600 hover:bg-red-700 font-bold border-none w-full">GÉNÉRER CLAIMS</Button>
          </CardContent>
        </Card>

        {/* AI Copilot Query */}
        <Card className="bg-amber-950/20 border-amber-500/30 text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-amber-500">Copilot Prompt</CardTitle>
            <Cpu className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Input 
                placeholder="Ask SCUGP intelligence..." 
                className="h-8 text-[10px] bg-black/50 border-slate-800 text-white placeholder:text-slate-600 font-mono" 
              />
              <p className="text-[8px] text-amber-500/50 italic text-center uppercase tracking-widest">Semantic Engine Active</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Drone/BIM Validation */}
      <div 
        className="h-56 bg-slate-900 rounded-xl border border-dashed border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
        onClick={handleDroneScan}
      >
        <div className="z-10 text-center space-y-2 px-6">
          <div className="flex items-center justify-center gap-2">
            <Plane className={cn("h-6 w-6 text-cyan-500", isScanning && "animate-bounce")} />
            <p className="text-xs text-slate-400 uppercase tracking-[0.3em] font-black">Visualisation Jumeau Numérique 7D</p>
          </div>
          <p className="text-[9px] text-slate-600 uppercase font-bold">
            & Sync Drone BIM Active - FPSO Angola 2026
          </p>
          
          {droneStatus && !isScanning && (
            <div className="mt-4 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-slate-950/60 p-2 rounded border border-cyan-500/30">
                <p className="text-[8px] text-slate-500 uppercase">Progress</p>
                <p className="text-lg font-mono text-cyan-400">{droneStatus.actualProgress}%</p>
              </div>
              <div className="bg-slate-950/60 p-2 rounded border border-red-500/30">
                <p className="text-[8px] text-slate-500 uppercase">Deviations</p>
                <div className="flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 text-red-500" />
                  <p className="text-[8px] font-mono text-red-500 uppercase">{droneStatus.anomalies.length} Detected</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Visual background effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", isScanning ? "bg-amber-500 animate-ping" : "bg-cyan-500")}></div>
          <span className="text-[8px] font-mono text-cyan-500 uppercase font-bold tracking-widest">
            {isScanning ? "IA Processing..." : "Live LiDAR Stream"}
          </span>
        </div>
      </div>
    </div>
  );
};
