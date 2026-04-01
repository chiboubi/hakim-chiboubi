"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Smile, TrendingDown, Target, Zap } from "lucide-react";

export const ImpactMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl group hover:border-emerald-500/30 transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-emerald-500 flex items-center gap-2">
            <TrendingDown className="h-3 w-3" /> Efficiency Gain
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-black font-mono">-30%</div>
          <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Reduction in Blocking Points</p>
          <div className="h-1 bg-slate-800 rounded-full mt-3">
            <div className="h-full bg-emerald-500 w-[30%]" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl group hover:border-blue-500/30 transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-blue-400 flex items-center gap-2">
            <Smile className="h-3 w-3" /> User Satisfaction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-black font-mono">94%</div>
          <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">End-User Happiness Index</p>
          <div className="h-1 bg-slate-800 rounded-full mt-3">
            <div className="h-full bg-blue-500 w-[94%]" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl group hover:border-amber-500/30 transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-[10px] font-black uppercase text-amber-500 flex items-center gap-2">
            <Zap className="h-3 w-3" /> Agile Velocity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-black font-mono">+18%</div>
          <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Feature Delivery Speed</p>
          <div className="h-1 bg-slate-800 rounded-full mt-3">
            <div className="h-full bg-amber-500 w-[18%]" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
