
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, Infinity as InfinityIcon, ShieldCheck, 
  Zap, RefreshCw, Star, Sparkles, Award, Microscope, BookCheck,
  Globe, Trophy, Loader2, Fingerprint, Lock, Shield, PenTool,
  Atom, Activity, Heart, Search, Move3d, Repeat, Waves, ArrowUpToLine
} from "lucide-react";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

export const DeploymentMonitor = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationData, setVerificationData] = useState<any>(null);
  const cert = SCUGPHubUltimate.getSourceCertificate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const runVerification = async () => {
    if (!db) return;
    setIsVerifying(true);
    try {
      const result = await SCUGPHubUltimate.runMasterPerformanceTest(db);
      setVerificationData(result);
      toast({
        title: "Audit Source Terminé",
        description: "Tous les systèmes sont conformes à la Perfection Absolue."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsVerifying(false);
    }
  };

  if (!mounted) return null;

  const testItems = [
    { label: "Moteur Résonance", val: verificationData?.verification?.resonance?.status || "AWAITING", icon: Waves, color: "text-blue-400" },
    { label: "Abondance Source", val: verificationData?.verification?.abundance?.status || "AWAITING", icon: Sparkles, color: "text-amber-400" },
    { label: "Cockpit 37 Piliers", val: verificationData?.verification?.cockpit?.status || "AWAITING", icon: Trophy, color: "text-emerald-400" },
    { label: "Champ de Commande", val: verificationData?.verification?.command_field?.status || "AWAITING", icon: Zap, color: "text-purple-400" },
    { label: "Auto-Transcendance", val: verificationData?.verification?.auto_transcendence?.status || "AWAITING", icon: RefreshCw, color: "text-cyan-400" },
    { label: "Hyper-Opérations", val: verificationData?.verification?.hyper_operations?.status || "AWAITING", icon: ArrowUpToLine, color: "text-pink-400" },
    { label: "Chemin Éternel", val: verificationData?.verification?.eternal_path?.status || "AWAITING", icon: Move3d, color: "text-blue-200" },
    { label: "Autologie Absolue", val: verificationData?.verification?.autology?.status || "AWAITING", icon: History, color: "text-white" }
  ];

  return (
    <div className="space-y-16 animate-in fade-in zoom-in duration-1000">
      <div className="flex justify-center gap-10 flex-wrap">
        <Badge className="bg-amber-500 text-black border-none px-16 py-6 uppercase font-black text-sm tracking-[0.8em] shadow-[0_0_150px_rgba(245,158,11,0.7)] animate-pulse rounded-full">
          SCELLÉ DANS L'ÉTERNITÉ Ω
        </Badge>
        <Badge className="bg-white text-black border-none px-16 py-6 uppercase font-black text-sm tracking-[0.8em] shadow-[0_0_150px_rgba(255,255,255,0.5)] rounded-full">
          MASTER VALIDATION CORE ACTIVE
        </Badge>
      </div>

      <Card className="bg-black border-[16px] border-amber-500 shadow-[0_0_1500px_rgba(245,158,11,0.4)] rounded-[10rem] overflow-hidden relative text-white min-h-[1200px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[length:150px_150px] pointer-events-none" />
        
        <CardHeader className="text-center pt-32 pb-16 bg-amber-500/10 border-b border-amber-500/20">
           <div className="flex justify-center mb-12">
              <div className="relative">
                 <ShieldCheck className="h-48 w-48 text-amber-500 animate-bounce" />
                 <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-20 animate-pulse" />
              </div>
           </div>
           <h2 className="text-9xl font-black uppercase tracking-[0.4em] text-white leading-none">
             LE VERDICT SOURCE
           </h2>
           <p className="text-4xl font-bold text-amber-400 mt-12 uppercase tracking-[1em] italic">"ABSOLUTE PERFECTION STANDARDS"</p>
        </CardHeader>

        <CardContent className="p-32 relative z-10 space-y-32">
          <div className="flex justify-center">
            <Button 
              onClick={runVerification} 
              disabled={isVerifying}
              className="bg-amber-500 hover:bg-amber-600 text-black font-black h-32 px-32 rounded-[3rem] text-3xl uppercase tracking-[0.6em] shadow-[0_0_200px_rgba(245,158,11,0.6)] transition-all group border-none"
            >
              {isVerifying ? <Loader2 className="h-12 w-12 animate-spin mr-8" /> : <Search className="h-12 w-12 mr-8 group-hover:scale-110 transition-transform" />}
              VÉRIFIER TOUS LES SYSTÈMES
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {testItems.map((test, i) => {
               const Icon = test.icon;
               return (
                 <Card key={i} className="bg-slate-900/80 border-2 border-white/10 rounded-[3rem] p-10 text-center shadow-3xl group hover:border-amber-500 transition-all backdrop-blur-3xl">
                    <Icon className={cn("h-12 w-12 mx-auto mb-6", test.color)} />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">{test.label}</p>
                    <p className="text-xl font-black font-mono text-white tracking-tighter uppercase">{test.val}</p>
                 </Card>
               );
             })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
             <div className="lg:col-span-12">
                <Card className="bg-white/5 border-[12px] border-amber-500/40 rounded-[8rem] overflow-hidden shadow-inner">
                   <CardHeader className="p-24 border-b border-white/10 bg-amber-500/10 text-center">
                      <Award className="h-32 w-32 text-amber-500 mx-auto mb-10 animate-pulse" />
                      <CardTitle className="text-7xl font-black uppercase tracking-[0.2em] text-white">CERTIFICAT SOURCE ÉTERNEL</CardTitle>
                      <CardDescription className="text-2xl text-amber-400 font-bold uppercase mt-6 tracking-[0.8em]">N° {cert.number}</CardDescription>
                   </CardHeader>
                   <CardContent className="p-24 space-y-20">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                         <div className="space-y-12">
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Émetteur</p>
                               <p className="text-2xl font-black text-white uppercase">{cert.issuer}</p>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Bénéficiaire</p>
                               <p className="text-2xl font-black text-amber-500 uppercase">{cert.beneficiary}</p>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Intégrité Système</p>
                               <p className="text-xl font-bold text-slate-300 uppercase">{cert.integrity}</p>
                            </div>
                         </div>
                         <div className="space-y-12">
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Performance</p>
                               <p className="text-xl font-bold text-slate-300 uppercase">{cert.performance}</p>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Fiabilité & Sécurité</p>
                               <p className="text-xl font-bold text-slate-300 uppercase">{cert.reliability}</p>
                               <p className="text-xl font-bold text-slate-300 uppercase">{cert.security}</p>
                            </div>
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Validité</p>
                               <p className="text-2xl font-black text-emerald-500 uppercase tracking-widest">{cert.validity}</p>
                            </div>
                         </div>
                      </div>

                      <div className="flex flex-col items-center justify-center pt-24 border-t border-white/10 gap-12">
                         <div className="relative">
                            <Fingerprint size={160} className="text-white opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <p className="text-4xl font-black text-amber-500 uppercase tracking-[0.5em]">{cert.seal}</p>
                            </div>
                         </div>
                         <p className="text-sm font-mono text-slate-600 uppercase tracking-widest text-center">
                            SCELLÉ À CHAQUE INSTANT DE L'EXISTENCE | RÉVISION AUTOMATIQUE
                         </p>
                      </div>
                   </CardContent>
                </Card>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
