
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Cpu, Thermometer, Waves, ShieldAlert, Radio, Activity, RefreshCw, Database, Link2, Gauge, Satellite } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * EdgeOps Component (IoT Integration)
 * Pillar 2: Connects physical field sensors to digital steering and milestones.
 * Features real-time telemetry, Arduino/Raspberry Pi mesh sync, and auto-alerts.
 */
export const EdgeOps = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "IoT Mesh Nodes", val: "14,200", icon: Radio, color: "text-blue-400" },
          { label: "Telemetry Speed", val: "1.2 GB/s", icon: Activity, color: "text-cyan-400" },
          { label: "Satellite Sync", val: "ACTIVE", icon: Satellite, color: "text-purple-400" },
          { label: "Milestone Sync", val: "100%", icon: Link2, color: "text-emerald-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-lg group hover:border-slate-700 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
                <stat.icon className={cn("h-3 w-3", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-black font-mono text-white">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase text-cyan-500 flex items-center gap-2">
                  <Database className="h-4 w-4" /> Physical Flow Integration (IoT Mesh)
                </CardTitle>
                <CardDescription className="text-[10px]">Pillar 2: SCADA / Arduino / Raspberry Pi Télémétrie Network</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30 text-[8px] animate-pulse">LIVE_STREAM</Badge>
                <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-500 uppercase font-black tracking-widest">ISO 15926 SYNC</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left">
                <thead className="bg-black/40 text-slate-500 font-black uppercase">
                  <tr>
                    <th className="p-4 border-b border-slate-800">Sensor Typology</th>
                    <th className="p-4 border-b border-slate-800">Real Value</th>
                    <th className="p-4 border-b border-slate-800">Status</th>
                    <th className="p-4 border-b border-slate-800">Linked Milestone</th>
                    <th className="p-4 border-b border-slate-800 text-right">Anomaly Alert</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Vibration (Pump-4)", val: "0.02 mm/s", status: "NOMINAL", mile: "M12_DRILLING", alert: "CLEAN" },
                    { type: "Pressure (V-122)", val: "142.4 BAR", status: "OPTIMIZED", mile: "M14_TRANSPORT", alert: "CLEAN" },
                    { type: "H2S Level (Deck 4)", val: "0.05 ppm", status: "SAFE", mile: "HSE_AUDIT_Q1", alert: "CLEAN" },
                    { type: "Cryo-Temp", val: "-42.1°C", status: "MONITORED", mile: "ENERGY_RECOVERY", alert: "WARNING" }
                  ].map((s, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors cursor-default">
                      <td className="p-4 font-bold text-slate-200 uppercase flex items-center gap-2">
                        {s.type.includes('Temp') ? <Thermometer size={12} className="text-cyan-400" /> : <Gauge size={12} className="text-slate-500" />}
                        {s.type}
                      </td>
                      <td className="p-4 font-mono text-cyan-400">{s.val}</td>
                      <td className="p-4"><Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500 uppercase">{s.status}</Badge></td>
                      <td className="p-4 text-slate-500 font-mono italic">{s.mile}</td>
                      <td className="p-4 text-right">
                        <span className={cn(
                          "inline-flex items-center gap-1 text-[8px] font-black uppercase px-2 py-0.5 rounded",
                          s.alert === 'CLEAN' ? "text-emerald-500 bg-emerald-500/10" : "text-amber-500 bg-amber-500/10 animate-pulse"
                        )}>
                          <ShieldAlert className="h-2.5 w-2.5" /> {s.alert}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="p-4 bg-slate-900/30 border-t border-slate-800">
             <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2">
                      <Radio className="h-3 w-3 text-blue-400" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Mesh Health: 99.8%</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <RefreshCw className="h-3 w-3 text-emerald-400 animate-spin-slow" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Sync Frequency: 50ms</span>
                   </div>
                </div>
                <Button size="sm" variant="outline" className="h-7 border-slate-700 text-[8px] font-black uppercase">Sensor Provisioning Hub</Button>
             </div>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-4 bg-slate-900 border-slate-800 flex flex-col shadow-xl">
          <CardHeader className="pb-2 border-b border-slate-800">
            <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
              <Zap className="h-4 w-4" /> IoT Autonomous Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 space-y-4 pt-4">
            <div className="p-4 bg-black/40 rounded-xl border border-slate-800 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Edge Response Confidence</p>
               <p className="text-3xl font-black font-mono text-white">99.8%</p>
               <p className="text-[8px] text-emerald-500 font-bold mt-1 uppercase">Pillar 2: Autonomous Protocol</p>
            </div>
            <div className="space-y-3">
              {[
                { trigger: "Pressure > 150 BAR", action: "HALT_FLUX", status: "ARMED" },
                { trigger: "Cryo-Temp < -50°C", action: "ACTIVATE_HEAT", status: "ACTIVE" },
                { trigger: "Vibration > 0.08", action: "MAINT_TASK", status: "STANDBY" }
              ].map((t, i) => (
                <div key={i} className="p-3 bg-black/40 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-amber-500/30 transition-all">
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase">{t.trigger}</p>
                    <p className="text-[8px] text-slate-500 font-mono mt-1">AUTO_ACTION: {t.action}</p>
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[7px] border-none px-2 h-4 uppercase font-black",
                    t.status === 'ARMED' ? "bg-amber-600/20 text-amber-500" : 
                    t.status === 'ACTIVE' ? "bg-emerald-600/20 text-emerald-500" : "text-slate-600"
                  )}>{t.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t border-slate-800">
            <Button size="sm" variant="outline" className="w-full text-[9px] font-black uppercase border-slate-700 h-9">
               <Cog className="h-4 w-4 mr-2" /> Modify Edge Thresholds
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
