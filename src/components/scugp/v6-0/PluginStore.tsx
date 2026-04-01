"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Download, Star, ExternalLink, Search, Filter, LayoutGrid } from "lucide-react";

const plugins = [
  { name: "Geotech Pro Mesh", provider: "SCUGP Labs", cat: "TECHNICAL", rate: 4.9, active: true },
  { name: "Offshore Risk GPT", provider: "Dr. Chibubi AI", cat: "AI_AGENT", rate: 5.0, active: false },
  { name: "Cryo-Mix Simulator", provider: "Zinia Hybrid", cat: "ENERGY", rate: 4.8, active: true },
  { name: "SAP S/4 Extended", provider: "Integrators Inc", cat: "ERP", rate: 4.5, active: true }
];

export const PluginStore = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <input placeholder="Search plugins..." className="w-full bg-black/50 border border-slate-800 rounded h-9 pl-9 text-[11px] focus:outline-none focus:border-blue-500/50" />
        </div>
        <Button variant="ghost" size="sm" className="text-[10px] uppercase font-black text-slate-500"><Filter className="h-3 w-3 mr-2" /> Filter</Button>
      </div>
      <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-500 uppercase tracking-widest">SCUGP SDK V1.4</Badge>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plugins.map((p, i) => (
        <Card key={i} className="bg-slate-900 border-slate-800 group hover:border-blue-500/30 transition-all overflow-hidden">
          <CardHeader className="pb-3 border-b border-slate-800/50">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="text-[7px] border-slate-700 uppercase">{p.cat}</Badge>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-2 w-2 fill-current" />
                <span className="text-[8px] font-bold">{p.rate}</span>
              </div>
            </div>
            <CardTitle className="text-xs font-black uppercase text-slate-200 group-hover:text-blue-400 transition-colors">{p.name}</CardTitle>
            <CardDescription className="text-[9px] font-bold text-slate-500">{p.provider}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <p className="text-[10px] text-slate-500 leading-relaxed italic">"Industry-specific library for advanced {p.cat.toLowerCase()} modeling."</p>
            <div className="flex gap-2">
              <Button size="sm" className={cn(
                "flex-1 h-7 text-[8px] font-black uppercase border-none",
                p.active ? "bg-blue-600/20 text-blue-400" : "bg-emerald-600 hover:bg-emerald-700 text-white"
              )}>
                {p.active ? "MANAGE" : "INSTALL"}
              </Button>
              <Button size="icon" variant="outline" className="h-7 w-7 border-slate-800"><ExternalLink className="h-3 w-3 text-slate-600" /></Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="p-8 bg-blue-500/5 rounded-2xl border-2 border-dashed border-blue-500/20 text-center">
      <Package className="h-8 w-8 text-blue-500/50 mx-auto mb-4" />
      <h3 className="text-sm font-black uppercase text-slate-300">Build Your Own Plugin</h3>
      <p className="text-[10px] text-slate-500 mt-2 max-w-sm mx-auto">Access the SCUGP Low-Code SDK to create domain-specific modules for your projects.</p>
      <Button variant="outline" className="mt-6 border-blue-500/30 text-blue-400 text-[9px] font-black h-8 px-8 uppercase">Download SDK Beta</Button>
    </div>
  </div>
);
