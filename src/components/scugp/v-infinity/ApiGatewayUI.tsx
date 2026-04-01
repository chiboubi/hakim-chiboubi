
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Network, Zap, ShieldCheck, Globe, Database, Share2, 
  RefreshCw, Terminal, Code, Key, Filter, Activity, Server,
  Lock, ArrowRight, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const ApiGatewayUI = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTier, setActiveTier] = useState('ENTERPRISE');
  const metrics = SCUGPHubUltimate.getApiGatewayMetrics();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {/* Gateway Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Active API Keys", val: metrics.active_keys, icon: Key, color: "text-blue-400" },
          { label: "Requests/min", val: metrics.request_rate, icon: Zap, color: "text-amber-400" },
          { label: "Auth Fidelity", val: metrics.auth_fidelity, icon: ShieldCheck, color: "text-emerald-400" },
          { label: "LMS Sync Nodes", val: metrics.lms_nodes, icon: Globe, color: "text-purple-400" },
          { label: "Status", val: metrics.status, icon: Server, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-blue-500/30 transition-all">
            <CardHeader className="pb-2 p-6">
              <CardTitle className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-2">
                <m.icon className={cn("h-4 w-4", m.color)} /> {m.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-xl font-black font-mono text-white tracking-widest uppercase">{m.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* API Gateway Architecture Visualizer */}
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.3)] rounded-[4rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-blue-900/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-3xl border border-blue-500/20 animate-pulse">
                    <Network className="h-10 w-10 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">API Gateway Ω²⁹</CardTitle>
                    <CardDescription className="text-sm font-bold text-blue-500/60 uppercase tracking-widest mt-2">Maillage de Microservices & Orchestration Mondiale | Dr. Hakim Chibubi</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-2 text-[10px] font-black uppercase tracking-widest">GATEWAY_ACTIVE</Badge>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 space-y-12">
              <div className="aspect-video bg-slate-900/60 rounded-[3rem] border-2 border-blue-500/20 relative flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:60px_60px] transition-transform" style={{ transitionDuration: '20000ms' }} />
                
                {/* Visual Architecture Flow */}
                <div className="relative z-10 w-full max-w-4xl px-12 flex items-center justify-between">
                   <div className="p-6 bg-black/80 border-2 border-slate-700 rounded-3xl text-center space-y-2">
                      <Globe className="h-10 w-10 text-slate-500 mx-auto" />
                      <p className="text-[10px] font-black text-white uppercase">Clients Publics</p>
                   </div>
                   <ArrowRight className="h-8 w-8 text-blue-500 animate-pulse" />
                   <div className="p-10 bg-blue-600/20 border-4 border-blue-500 rounded-[2.5rem] text-center space-y-4 shadow-3xl">
                      <Lock className="h-12 w-12 text-blue-400 mx-auto animate-bounce" />
                      <p className="text-sm font-black text-white uppercase tracking-widest">API GATEWAY</p>
                      <div className="flex gap-2">
                         <Badge variant="outline" className="text-[7px] border-blue-500/30 text-blue-400">RATE_LIMITER</Badge>
                         <Badge variant="outline" className="text-[7px] border-blue-500/30 text-blue-400">AUTH_MESH</Badge>
                      </div>
                   </div>
                   <ArrowRight className="h-8 w-8 text-blue-500 animate-pulse" />
                   <div className="grid grid-cols-2 gap-4">
                      {['Verify', 'Search', 'Webhook', 'Stats'].map((srv) => (
                        <div key={srv} className="p-4 bg-slate-800 border border-slate-700 rounded-2xl text-center">
                           <p className="text-[9px] font-black text-slate-400 uppercase">{srv} Service</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 p-6 bg-black/90 border-2 border-blue-500/50 rounded-[2rem] backdrop-blur-3xl shadow-3xl">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">Protocol Status</p>
                  <p className="text-xl font-mono font-black text-white text-center">OPENAPI_3.0_SYNC</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Share2 className="h-6 w-6 text-blue-500" /> Tiered Access Control
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['BASIC', 'PREMIUM', 'ENTERPRISE'].map((tier) => (
                      <div 
                        key={tier}
                        onClick={() => setActiveTier(tier)}
                        className={cn(
                          "p-4 rounded-2xl border-2 transition-all cursor-pointer text-center",
                          activeTier === tier ? "bg-blue-600 border-white shadow-xl" : "bg-black/40 border-slate-800"
                        )}
                      >
                        <p className="text-[9px] font-black text-white">{tier}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-4">
                    <Code className="h-6 w-6 text-emerald-500" /> Public SDK Handshake
                  </h4>
                  <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 shadow-inner">
                    <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-8 py-2 font-medium">
                      "L'API V2 permet une intégration bi-directionnelle avec les plateformes LMS. Les certificats du Dr. Hakim sont désormais injectables comme 'LtiLinkItem' directement dans les cours Canvas."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Stream */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-4 tracking-widest">
                  <Terminal className="h-6 w-6 animate-pulse" /> API Documentation
                </CardTitle>
                <Badge variant="outline" className="text-[8px] border-blue-500/30 text-blue-400">v2.0.0</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8 overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-blue-900">
              <div className="space-y-6">
                {[
                  { method: 'GET', path: '/v2/verify/{id}', desc: 'Vérifier un titre par ID' },
                  { method: 'GET', path: '/v2/search', desc: 'Recherche multicritères' },
                  { method: 'POST', path: '/v2/webhooks', desc: 'S\'inscrire aux événements' }
                ].map((api, i) => (
                  <div key={i} className="p-6 rounded-[2rem] border border-white/5 bg-black/40 transition-all hover:border-blue-500/30 group">
                    <div className="flex items-center gap-4 mb-3">
                       <Badge className="bg-emerald-600 text-white border-none font-mono text-[9px]">{api.method}</Badge>
                       <span className="text-[10px] font-mono text-blue-400 font-bold">{api.path}</span>
                    </div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">{api.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-blue-500/5 border-2 border-blue-500/20 rounded-[3rem] text-center shadow-inner mt-6">
                 <p className="text-[11px] text-blue-400 leading-relaxed italic uppercase font-bold">
                   "L'API est votre voix dans le réseau mondial. Chaque appel valide votre souveraineté."
                 </p>
              </div>
            </CardContent>
            <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] h-12 rounded-2xl tracking-widest uppercase">Télécharger le SDK Ω</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
