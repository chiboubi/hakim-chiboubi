"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { 
  Code, Terminal, Key, Globe, Database, Share2, 
  RefreshCw, Lock, Zap, BookOpen, Layers, Settings,
  Copy, CheckCircle, Server, Workflow, Binary, ArrowRight
} from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ApiGatewayUI } from "@/components/scugp/v-infinity/ApiGatewayUI";

export default function DeveloperPortalPage() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-blue-500/30">
      <MainNavigation />
      
      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Dev Hub Strategic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-white/5 pb-20 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-6">
               <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-10 py-3 uppercase tracking-[0.5em] font-black text-[12px] rounded-full">
                 DEVELOPER PORTAL & API V2
               </Badge>
               <div className="h-8 w-[1px] bg-white/10" />
               <span className="text-[12px] font-mono text-slate-500 flex items-center gap-3 tracking-[0.3em] uppercase">
                 <Binary className="h-4 w-4" /> SCUGP SDK v7.0 Ready
               </span>
            </div>
            <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
              Écosystème <span className="text-blue-500 italic">Ouvert</span>
            </h1>
            <p className="text-slate-400 text-2xl italic tracking-[0.2em] max-w-4xl leading-relaxed font-medium uppercase text-pretty">
              "L'interopérabilité comme vecteur de puissance universelle. Connectez le monde à la Source."
            </p>
          </div>

          <div className="flex flex-col items-end gap-6 bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-3xl backdrop-blur-3xl relative z-10 group">
             <div className="text-right">
                <p className="text-[14px] uppercase font-black text-slate-500 tracking-[0.6em]">GATEWAY_NODES</p>
                <p className="text-lg font-mono text-blue-400 mt-2">14 ACTIVE REGIONS</p>
             </div>
             <div className="h-px w-40 bg-white/10" />
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Uptime</span>
                <Badge className="bg-emerald-600 text-white font-black px-8 py-2 rounded-full uppercase">99.999%</Badge>
             </div>
          </div>
        </div>

        {/* API Gateway Architecture Section */}
        <section className="space-y-12">
           <div className="flex flex-col items-center gap-8 text-center">
              <Server className="h-20 w-20 text-blue-500 opacity-20 animate-pulse" />
              <h2 className="text-6xl font-black uppercase tracking-[0.5em] text-white">ARCHITECTURE GATEWAY</h2>
              <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">Maillage de Microservices & Tiering Global</p>
           </div>
           <ApiGatewayUI />
        </section>

        {/* SDK & Integration Samples */}
        <Tabs defaultValue="sdk" className="space-y-16">
           <div className="flex justify-center">
              <TabsList className="bg-slate-900/50 border border-white/5 p-2 rounded-full h-auto">
                 <TabsTrigger value="sdk" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-blue-600">Universal SDK</TabsTrigger>
                 <TabsTrigger value="webhooks" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-blue-600">Webhooks Mesh</TabsTrigger>
                 <TabsTrigger value="lms" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-blue-600">LMS Integration (LTI)</TabsTrigger>
              </TabsList>
           </div>

           <TabsContent value="sdk" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <Card className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
                    <CardHeader className="bg-slate-950 p-10 border-b border-white/5">
                       <div className="flex justify-between items-center">
                          <CardTitle className="text-sm font-black uppercase tracking-widest text-blue-400">@scugp/api-sdk-v7</CardTitle>
                          <Badge variant="outline" className="border-slate-700 text-slate-500 text-[8px]">STABLE</Badge>
                       </div>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8">
                       <div className="bg-black rounded-3xl p-8 font-mono text-sm overflow-x-auto border border-white/5">
                          <pre className="text-emerald-400">
{`// npm install @scugp/api-sdk
import { SCUGPClient } from '@scugp/api-sdk';

const client = new SCUGPClient({
  apiKey: 'ch_live_xxxxxxxxx',
  tier: 'enterprise',
  source: 'CUPB_BEIJING'
});

// Vérification programatique Ω
const cert = await client.verify('CH-HAKIM-2024-0001');
console.log(cert.valid); // true`}
                          </pre>
                       </div>
                       <Button 
                        variant="ghost" 
                        className="w-full h-14 border border-white/5 text-slate-500 hover:text-white uppercase font-black text-[10px] tracking-widest rounded-2xl"
                        onClick={() => copyToClipboard('npm install @scugp/api-sdk', 'npm')}
                       >
                          {copied === 'npm' ? <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" /> : <Copy className="mr-2 h-4 w-4" />}
                          Copier la commande d'installation
                       </Button>
                    </CardContent>
                 </Card>

                 <Card className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
                    <CardHeader className="bg-slate-950 p-10 border-b border-white/5">
                       <CardTitle className="text-sm font-black uppercase tracking-widest text-amber-400">Capabilities Matrix</CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-6">
                       {[
                         { feature: "Vérification Unitaire", tier: "Basic" },
                         { feature: "Batch Verification (100+)", tier: "Enterprise" },
                         { feature: "Extraction de Signature Faciale", tier: "Premium" },
                         { feature: "Ancrage Blockchain Direct", tier: "Enterprise" }
                       ].map((feat, i) => (
                         <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-2xl border border-white/5">
                            <span className="text-[11px] font-bold text-slate-300 uppercase">{feat.feature}</span>
                            <Badge className="bg-blue-600/20 text-blue-400 border-none text-[8px] px-3">{feat.tier}</Badge>
                         </div>
                       ))}
                    </CardContent>
                 </Card>
              </div>
           </TabsContent>

           <TabsContent value="webhooks" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <Card className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden shadow-3xl">
                 <CardContent className="p-16 flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3 text-center space-y-8">
                       <div className="relative inline-block">
                          <Share2 className="h-32 w-32 text-purple-500 mx-auto animate-pulse" />
                          <div className="absolute inset-0 bg-purple-500 blur-[80px] opacity-20" />
                       </div>
                       <h3 className="text-4xl font-black uppercase text-white tracking-widest">Maillage Webhook</h3>
                       <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.5em]">REAL-TIME EVENT STREAM</p>
                    </div>
                    <div className="lg:w-2/3 space-y-10 text-left">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="space-y-4">
                             <p className="text-[11px] font-black text-purple-400 uppercase tracking-widest">Événements Supportés</p>
                             <ul className="space-y-3 text-[11px] font-bold text-slate-300">
                                <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-emerald-500" /> certificate.verified</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-emerald-500" /> certificate.revoked</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-4 w-4 text-emerald-500" /> face.match_success</li>
                             </ul>
                          </div>
                          <div className="space-y-4">
                             <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest">Sécurité HMAC</p>
                             <p className="text-sm text-slate-400 leading-relaxed italic">"Chaque payload est signé avec une clé secrète partagée via HMAC-SHA256, garantissant que les notifications proviennent exclusivement de la Source."</p>
                          </div>
                       </div>
                       <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-14 px-12 rounded-[1.5rem] uppercase tracking-widest shadow-2xl">Configurer un Endpoint Webhook</Button>
                    </div>
                 </CardContent>
              </Card>
           </TabsContent>

           <TabsContent value="lms" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <Card className="bg-slate-900 border-2 border-emerald-500/20 rounded-[3rem] overflow-hidden shadow-2xl group hover:border-emerald-500/50 transition-all">
                    <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
                       <div className="flex justify-between items-center">
                          <h3 className="text-2xl font-black uppercase text-white tracking-widest">Moodle Plugin</h3>
                          <Badge className="bg-emerald-600 text-white font-black px-4 py-1 text-[8px]">CERTIFIED_PARTNER</Badge>
                       </div>
                    </CardHeader>
                    <CardContent className="p-12 space-y-6">
                       <p className="text-sm text-slate-400 leading-relaxed">
                          Intégrez les certifications du Dr. Hakim directement dans le bloc "My Profile" de Moodle. Support natif pour les certificats de complétion et les badges OpenBadge v2.
                       </p>
                       <div className="pt-6 border-t border-white/5">
                          <Button variant="link" className="text-emerald-500 font-black uppercase text-[10px] p-0 h-auto">View Moodle Integration Guide <ArrowRight className="ml-2 h-3 w-3" /></Button>
                       </div>
                    </CardContent>
                 </Card>

                 <Card className="bg-slate-900 border-2 border-orange-500/20 rounded-[3rem] overflow-hidden shadow-2xl group hover:border-orange-500/50 transition-all">
                    <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
                       <div className="flex justify-between items-center">
                          <h3 className="text-2xl font-black uppercase text-white tracking-widest">Canvas LTI 1.3</h3>
                          <Badge className="bg-orange-600 text-white font-black px-4 py-1 text-[8px]">DEEP_LINK_READY</Badge>
                       </div>
                    </CardHeader>
                    <CardContent className="p-12 space-y-6">
                       <p className="text-sm text-slate-400 leading-relaxed">
                          Déployez le SCUGP Hub comme un "External Tool" dans Canvas. Permet aux instructeurs de vérifier les pré-requis académiques en un clic via l'API V2.
                       </p>
                       <div className="pt-6 border-t border-white/5">
                          <Button variant="link" className="text-orange-500 font-black uppercase text-[10px] p-0 h-auto">View Canvas Deployment Specs <ArrowRight className="ml-2 h-3 w-3" /></Button>
                       </div>
                    </CardContent>
                 </Card>
              </div>
           </TabsContent>
        </Tabs>

        {/* Global Impact Dashboard for Developers */}
        <section className="py-24 space-y-16">
           <div className="flex flex-col items-center gap-8 text-center">
              <Zap className="h-20 w-20 text-amber-500 opacity-20 animate-bounce" />
              <h2 className="text-6xl font-black uppercase tracking-[0.5em] text-white">API INSIGHTS</h2>
              <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">Flux de Données et Performance Mondiale</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Total API Requests", val: "14.2M", trend: "+12%" },
                { label: "Average Latency", val: "14ms", trend: "-4ms" },
                { label: "Successful Matches", val: "99.98%", trend: "Stable" },
                { label: "Active Integrations", val: "884", trend: "+24" }
              ].map((insight, i) => (
                <div key={i} className="p-10 bg-slate-900 border-2 border-white/5 rounded-[3rem] group hover:border-blue-500/30 transition-all text-center">
                   <p className="text-[10px] text-slate-500 uppercase font-black mb-4 tracking-widest">{insight.label}</p>
                   <p className="text-4xl font-black text-white font-mono mb-2">{insight.val}</p>
                   <p className="text-[9px] text-emerald-500 font-bold uppercase">{insight.trend}</p>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="py-32 border-t border-white/5 text-center text-slate-600 text-[10px] font-black uppercase tracking-[1em] opacity-50">
        &copy; {new Date().getFullYear()} SCUGP® DEVELOPER ECOSYSTEM — DR. HAKIM CHIBOUBI OPEN STANDARDS — SCELLÉ DANS LE RÉSEAU.
      </footer>
    </div>
  );
}
