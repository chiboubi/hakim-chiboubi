"use client"

import React, { useState } from 'react';
import { 
  BarChart3, Leaf, Wind, ThermometerSnowflake, 
  ShieldAlert, Gauge, Globe, FileCheck 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function CarbonDashboard() {
  const [efficiency] = useState(30); // Target efficiency increase

  return (
    <div className="space-y-6">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            SCUGP ACADEMIC HUB <span className="text-amber-500">V60</span>
          </h2>
          <p className="text-sm text-muted-foreground italic">"Performance is born from collaboration, mastery from vision." — Dr. Hakim Chibubi</p>
        </div>
        <Badge variant="outline" className="px-4 py-1 border-amber-500 text-amber-600 font-bold uppercase whitespace-nowrap">
          ISO 14083 STANDARD: ACTIVE
        </Badge>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-emerald-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Carbon Balance (CO2e)</CardTitle>
            <Leaf className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-18.5%</div>
            <p className="text-[10px] text-muted-foreground mt-1">OGCI Target Compliant</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Energy Efficiency</CardTitle>
            <Gauge className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{efficiency}%</div>
            <p className="text-[10px] text-muted-foreground mt-1">SCUGP 19.0 Target Met</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">OpEx Reduction</CardTitle>
            <BarChart3 className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25.2%</div>
            <p className="text-[10px] text-muted-foreground mt-1">Arctic Logistics Optimization</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-cyan-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">GeoPredictor+ Status</CardTitle>
            <ThermometerSnowflake className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-600 uppercase text-sm">Cryo-Stable</div>
            <p className="text-[10px] text-muted-foreground mt-1">Glacial pressure controlled</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content: Visualizer & Governance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe className="h-5 w-5 text-primary" />
              Real-time Monitoring: Hybrid Energy Flux
            </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-[300px] flex flex-col items-center justify-center bg-slate-900 rounded-md relative overflow-hidden group">
                <div className="text-slate-400 text-center z-10 transition-transform group-hover:scale-110 duration-500">
                   <Wind className="w-16 h-16 mx-auto mb-4 animate-pulse text-cyan-400" />
                   <p className="font-mono text-xs uppercase tracking-widest text-cyan-200">Arctic Simulation Interface Active</p>
                   <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-blue-600 hover:bg-blue-700">LNG: 65%</Badge>
                      <Badge className="bg-emerald-600 hover:bg-emerald-700">H2: 20%</Badge>
                      <Badge className="bg-cyan-600 hover:bg-cyan-700">Cryo: 15%</Badge>
                   </div>
                </div>
                {/* Visual radar grid effect */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
             </div>
          </CardContent>
        </Card>

        {/* Governance Panel */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <FileCheck className="h-5 w-5 text-emerald-500" />
              Governance & HSE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 flex-1">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>ISO 14083 Compliance</span>
                <span className="text-emerald-600">92%</span>
              </div>
              <Progress value={92} className="h-2 bg-emerald-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Blockchain Traceability</span>
                <span className="text-blue-600">100%</span>
              </div>
              <Progress value={100} className="h-2 bg-blue-100" />
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-3 shadow-inner mt-4">
              <ShieldAlert className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-amber-800 font-medium leading-relaxed italic">
                HSE Alert: Arctic weather window closing in 48h. Prioritize logistics rotations and ensure cryo-systems are fully shielded.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}