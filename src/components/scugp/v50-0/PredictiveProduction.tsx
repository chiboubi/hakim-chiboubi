
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Zap, Brain, Target, Activity, Share2, Gauge, History, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, LineChart, Tooltip } from "recharts";

const data = [
  { name: "Jan", production: 12400, predicted: 12500 },
  { name: "Feb", production: 12850, predicted: 12800 },
  { name: "Mar", production: 13100, predicted: 13200 },
  { name: "Apr", production: 12900, predicted: 13000 },
  { name: "May", production: 13400, predicted: 13500 },
  { name: "Jun", production: 13800, predicted: 13700 }
];

export const PredictiveProduction = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Forecast Reliability", val: "98.4%", trend: "+2%", icon: Target, color: "text-emerald-400" },
          { label: "Production Target", val: "142k BOPD", trend: "Stable", icon: Gauge, color: "text-blue-400" },
          { label: "Yield ROI", val: "+14.2%", trend: "High", icon: TrendingUp, color: "text-amber-400" },
          { label: "Model Latency", val: "0.04ms", trend: "Optimized", icon: Zap, color: "text-purple-400" }
        ].map((stat, i) => (
          <Card key={i} className="bg-slate-900 border-slate-800 shadow-xl group hover:border-emerald-500/30 transition-all rounded-[2rem]">
            <CardHeader className="pb-2 px-8 pt-8">
              <CardTitle className="text-[11px] font-black uppercase text-slate-500 flex items-center gap-3">
                <stat.icon className={cn("h-4 w-4", stat.color)} /> {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="text-xl font-black font-mono text-white tracking-[0.2em] uppercase">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-slate-950 border-2 border-blue-500/20 text-white shadow-2xl overflow-hidden rounded-[4rem]">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 flex flex-row items-center justify-between px-12 py-10">
            <div>
              <CardTitle className="text-2xl font-black uppercase tracking-[0.4em] text-blue-400 flex items-center gap-6">
                <Brain className="h-8 w-8 animate-pulse" /> LSTM + XGBoost Production Mesh
              </CardTitle>
              <CardDescription className="text-[12px] uppercase font-bold text-slate-500 mt-2">Deep Learning Hybrid Models for Production & Investment Forecasting</CardDescription>
            </div>
            <Badge className="bg-blue-600 text-white border-none text-[11px] animate-pulse px-8 py-2 font-black uppercase tracking-[0.2em]">MODEL_SYNC: Ω</Badge>
          </CardHeader>
          <CardContent className="p-12 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '1rem', fontSize: '10px' }}
                  itemStyle={{ color: '#38bdf8' }}
                />
                <Line type="monotone" dataKey="production" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4, fill: '#38bdf8' }} activeDot={{ r: 6 }} name="Real Production" />
                <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={false} name="LSTM Prediction" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="p-10 bg-slate-950 border-t border-slate-800 justify-between">
             <div className="flex items-center gap-12">
                <div className="flex items-center gap-4">
                  <History className="h-6 w-6 text-slate-600" />
                  <span className="text-[11px] text-slate-600 font-black uppercase tracking-[0.3em]">Horizon: 20-YEAR PREDICTIVE</span>
                </div>
                <div className="flex items-center gap-4">
                  <Share2 className="h-6 w-6 text-blue-500" />
                  <span className="text-[11px] text-slate-600 font-black uppercase">Nodes: Global Energy Mesh</span>
                </div>
             </div>
             <Button size="sm" variant="outline" className="h-14 border-slate-700 text-[11px] font-black uppercase px-16 rounded-[2rem] shadow-2xl tracking-[0.2em]">Audit Forecast Log</Button>
          </CardFooter>
        </Card>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-slate-900 border-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden h-full flex flex-col">
            <CardHeader className="pb-2 border-b border-slate-800 px-12 py-10 bg-slate-950/50">
              <CardTitle className="text-xs font-black uppercase text-amber-500 flex items-center gap-4 tracking-widest">
                <Sparkles className="h-6 w-6" /> AI Investment Prescription
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-12 px-12 pb-12 space-y-10 flex-1">
              <div className="p-10 bg-amber-500/5 border-2 border-amber-500/20 rounded-[4rem] text-center space-y-6 shadow-inner relative group">
                 <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-[12px] text-slate-400 uppercase font-black tracking-[0.3em] relative z-10">Forecast Reliability</p>
                 <p className="text-6xl font-black font-mono text-white relative z-10">98.4%</p>
                 <Badge variant="outline" className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-[10px] uppercase font-black px-6 py-1 relative z-10">HIGH_CERTAINTY</Badge>
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed text-center px-6">
                "LSTM models predict a 4% yield increase by adjusting extraction frequency during thermal anomalies. Recommended CAPEX reallocation for Sector Alpha."
              </p>
              <div className="pt-6">
                <Button variant="outline" className="w-full border-slate-800 text-[10px] font-black uppercase h-14 rounded-[2rem] tracking-[0.2em] hover:bg-blue-500/10 transition-all">Verify Investment Loop</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
