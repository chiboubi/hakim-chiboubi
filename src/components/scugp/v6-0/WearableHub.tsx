"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Watch, Smartphone, Bell, Mic, ShieldAlert, Activity, RefreshCw, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

export const WearableHub = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Mobile & Wearable Sync */}
        <Card className="lg:col-span-8 bg-slate-900 border-slate-800 text-white shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-950/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <Watch className="h-4 w-4" /> SCUGP Wearable & Mobile Ready
                </CardTitle>
                <CardDescription className="text-[9px]">Mobile App Sync + Smartwatch Haptic Alerts</CardDescription>
              </div>
              <Badge className="bg-slate-800 text-slate-400 border-slate-700 text-[8px] uppercase tracking-widest">App Version: 6.0.4</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col items-center justify-center border-r border-slate-800 bg-black/40">
                <div className="w-48 h-48 rounded-full border-8 border-slate-800 flex items-center justify-center relative group">
                   <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin-slow opacity-20" />
                   <div className="text-center space-y-1">
                      <p className="text-[10px] font-black text-slate-500 uppercase">Alert Status</p>
                      <p className="text-2xl font-black font-mono text-cyan-400">NOMINAL</p>
                      <Bell className="h-4 w-4 text-cyan-500/50 mx-auto" />
                   </div>
                   <div className="absolute -top-2 right-4">
                      <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse border-2 border-black" />
                   </div>
                </div>
                <p className="mt-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Smartwatch Simulation Interface</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                    <Radio className="h-3 w-3 text-blue-400" /> Active Mobile Channels
                  </h4>
                  {[
                    { name: "HSE Urgent Alerts", status: "HIGH", icon: ShieldAlert, color: "text-red-500" },
                    { name: "Voice Command AI", status: "LISTENING", icon: Mic, color: "text-cyan-500" },
                    { name: "Pulse Monitoring", status: "STABLE", icon: Activity, color: "text-emerald-500" }
                  ].map((chan, i) => (
                    <div key={i} className="p-3 bg-black/40 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-all">
                      <div className="flex items-center gap-3">
                        <chan.icon className={cn("h-4 w-4", chan.color)} />
                        <span className="text-[10px] font-bold text-slate-300 uppercase">{chan.name}</span>
                      </div>
                      <Badge variant="outline" className="text-[7px] border-slate-700 text-slate-500">{chan.status}</Badge>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase h-9">
                  Pair New Device
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-2">
                <Smartphone className="h-4 w-4" /> Haptic Feedback Config
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-black/40 rounded-lg border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Critical Alert Vibe</span>
                  <span className="text-[10px] font-mono text-amber-400">Triple_Burst</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[100%]" />
                </div>
              </div>
              <p className="text-[9px] text-slate-600 italic leading-relaxed">
                "Haptic alerts ensure field technicians receive project deviations even in high-noise environments."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-black uppercase text-slate-500 flex items-center gap-2">
                <RefreshCw className="h-4 w-4" /> Live Sync Heartbeat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-black/20 rounded border border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase">Cloud Handshake</span>
                <span className="text-emerald-500 font-black text-[8px]">0.4s DELAY</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-black/20 rounded border border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase">End-to-End Encryption</span>
                <span className="text-blue-500 font-black text-[8px]">AES-256</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
