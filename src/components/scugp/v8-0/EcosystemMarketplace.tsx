"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Globe, Zap, Radio, Terminal, Search, Filter, Star, ExternalLink, Plus, Network, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export const EcosystemMarketplace = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
            <Globe className="h-3 w-3 text-blue-400" /> Universal API
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-black font-mono">1,420 ENDPOINTS</div>
        </CardContent>
      </Card>
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
            <Network className="h-3 w-3 text-cyan-400" /> Plug-and-Play Mesh
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-black font-mono">ACTIVE (142)</div>
        </CardContent>
      </Card>
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
            <Zap className="h-3 w-3 text-amber-400" /> IoT Connectivity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-black font-mono text-emerald-400">NOMINAL</div>
        </CardContent>
      </Card>
      <Card className="bg-slate-900 border-slate-800 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-[9px] font-black uppercase text-slate-500 flex items-center gap-2">
            <Cpu className="h-3 w-3 text-purple-400" /> SDK v8.5 Alpha
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-black font-mono text-purple-400">READY</div>
        </CardContent>
      </Card>
    </div>

    <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl">
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <input placeholder="Search plugins & modular units..." className="w-full bg-black/50 border border-slate-800 rounded h-10 pl-9 text-[11px] focus:outline-none focus:border-pink-500/50 text-white" />
        </div>
        <Button variant="ghost" size="sm" className="text-[10px] uppercase font-black text-slate-500"><Filter className="h-3 w-3 mr-2" /> Filter Category</Button>
      </div>
      <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-500 uppercase tracking-widest font-black">SCUGP SINGULARITÉ MARKETPLACE</Badge>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { name: "Global HR Engine", provider: "Human Mesh", cat: "RESOURCES", rate: 4.9, installed: true, desc: "AI-driven talent allocation across metaprojects." },
        { name: "Supply Chain DAO", provider: "Logistics Pro", cat: "CONTRACT", rate: 5.0, installed: false, desc: "Automatic partner payments & node tracking." },
        { name: "Hybrid Energy Hub", provider: "Zinia Power", cat: "ENERGY", rate: 4.8, installed: true, desc: "Real-time H2/GNL mix optimization loop." },
        { name: "Drone Mesh Master", provider: "AeroVis AI", cat: "IOT", rate: 4.7, installed: false, desc: "Multi-drone site inspection & BIM sync." }
      ].map((p, i) => (
        <Card key={i} className="bg-slate-900 border-slate-800 group hover:border-pink-500/30 transition-all overflow-hidden flex flex-col shadow-2xl">
          <CardHeader className="pb-3 border-b border-slate-800/50 bg-slate-950/20">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="text-[7px] border-slate-700 uppercase font-bold text-slate-500">{p.cat}</Badge>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-2 w-2 fill-current" />
                <span className="text-[8px] font-bold">{p.rate}</span>
              </div>
            </div>
            <CardTitle className="text-xs font-black uppercase text-slate-200 group-hover:text-pink-400 transition-colors leading-tight">{p.name}</CardTitle>
            <CardDescription className="text-[9px] font-bold text-slate-500 uppercase">{p.provider}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4 flex-1">
            <p className="text-[10px] text-slate-500 leading-relaxed italic">"{p.desc}"</p>
          </CardContent>
          <CardFooter className="pt-0 p-4 border-t border-slate-800/50 gap-2">
            <Button size="sm" className={cn(
              "flex-1 h-8 text-[8px] font-black uppercase border-none tracking-widest",
              p.installed ? "bg-emerald-600/20 text-emerald-500" : "bg-pink-600 hover:bg-pink-700 text-white"
            )}>
              {p.installed ? "MANAGE" : "INSTALL"}
            </Button>
            <Button size="icon" variant="outline" className="h-8 w-8 border-slate-800 hover:border-pink-500"><ExternalLink className="h-3 w-3 text-slate-600" /></Button>
          </CardFooter>
        </Card>
      ))}
    </div>

    <div className="p-10 bg-pink-500/5 rounded-3xl border-2 border-dashed border-pink-500/20 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-radial-gradient(circle,rgba(219,39,119,0.05)_0%,transparent_70%) pointer-events-none" />
      <ShoppingBag className="h-10 w-10 text-pink-500/50 mx-auto mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-lg font-black uppercase text-slate-300 tracking-tighter">Extend the Singularité</h3>
      <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed uppercase font-bold">Access the Universal API Gateway to connect any legacy platform or industrial IoT node directly to the SCUGP Singular mesh.</p>
      <Button variant="outline" className="mt-8 border-pink-500/30 text-pink-400 text-[10px] font-black h-10 px-10 uppercase tracking-widest hover:bg-pink-500/10 transition-all">
        Download Universal SDK Documentation
      </Button>
    </div>
  </div>
);
