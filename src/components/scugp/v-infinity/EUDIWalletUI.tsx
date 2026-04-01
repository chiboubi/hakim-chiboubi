"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, Lock as LockIcon, Globe, Share2, History, 
  Fingerprint, Smartphone, CheckCircle, UserCheck,
  Eye, EyeOff, Key, Zap, RefreshCw, Star, Landmark
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const EUDIWalletUI = () => {
  const [mounted, setMounted] = useState(false);
  const [showGivenName, setShowGivenName] = useState(false);
  const [showBirthDate, setShowBirthDate] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'IDLE' | 'SYNCING' | 'DONE'>('IDLE');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSync = () => {
    setSyncStatus('SYNCING');
    setTimeout(() => setSyncStatus('DONE'), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-top-12 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <Card className="bg-black border-[12px] border-blue-600 shadow-[0_0_200px_rgba(37,99,235,0.2)] rounded-[5rem] overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="p-16 border-b border-blue-900/50 bg-blue-600/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/20 rounded-3xl border border-blue-500/30">
                    <Smartphone className="h-12 w-12 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-black uppercase tracking-[0.2em]">EU Digital Wallet</CardTitle>
                    <CardDescription className="text-blue-400/60 font-bold uppercase tracking-widest mt-2">Conformité eIDAS 2.0 & SD-JWT | Niveau: HIGH (Substantiel)</CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-none px-8 py-2 font-black">QTSP_CERTIFIED</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-16 space-y-12">
              <div className="space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-slate-400 flex items-center gap-4">
                  <Share2 className="h-6 w-6 text-blue-500" /> Divulgation Sélective (SD-JWT)
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  "Partagez uniquement les attributs nécessaires. Le reste de votre identité reste scellé sous votre contrôle absolu."
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Nom de famille", val: "CHIBOUBI", revealed: true },
                    { label: "Prénom", val: "HAKIM", revealed: showGivenName, set: setShowGivenName },
                    { label: "Date de naissance", val: "15/06/1988", revealed: showBirthDate, set: setShowBirthDate },
                    { label: "Grade Académique", val: "Doctorat (EQF Level 8)", revealed: true }
                  ].map((attr, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex justify-between items-center group hover:border-blue-500/30 transition-all">
                      <div className="flex items-center gap-6">
                        <div className={cn("h-3 w-3 rounded-full", attr.revealed ? "bg-emerald-500" : "bg-red-500")} />
                        <span className="text-[12px] font-black uppercase tracking-widest text-slate-400">{attr.label}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className={cn("font-mono text-lg font-black", attr.revealed ? "text-white" : "text-slate-800 blur-sm")}>
                          {attr.revealed ? attr.val : "XXXXXXXXXX"}
                        </span>
                        {attr.set && (
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => attr.set!(!attr.revealed)}
                            className="text-slate-600 hover:text-white"
                          >
                            {attr.revealed ? <EyeOff size={20} /> : <Eye size={20} />}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-emerald-500/5 border-4 border-emerald-500/20 rounded-[4rem] flex items-center gap-10">
                 <ShieldCheck className="h-20 w-20 text-emerald-500 animate-bounce" />
                 <div className="space-y-2">
                    <p className="text-2xl font-black uppercase text-white">Ancrage EBSI</p>
                    <p className="text-sm text-slate-400 italic">"Votre identité est synchronisée avec l'Infrastructure Européenne de Services Blockchain. Preuve d'existence immuable sans stockage de données personnelles (GDPR-by-Design)."</p>
                 </div>
              </div>
            </CardContent>

            <CardFooter className="p-16 border-t border-white/5 bg-slate-950/50 justify-between">
               <div className="flex gap-8">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">DID:ebsi:zf39q...</Badge>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">PID_STABLE</Badge>
               </div>
               <Button 
                onClick={handleSync}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-3xl"
               >
                 {syncStatus === 'SYNCING' ? <RefreshCw className="animate-spin mr-2" /> : <LockIcon className="mr-2" />}
                 {syncStatus === 'IDLE' ? "SYNCHRONISER WALLET" : syncStatus === 'SYNCING' ? "SYNC EN COURS..." : "WALLET SCELLÉ Ω"}
               </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <Card className="bg-slate-900 border-4 border-blue-500/20 rounded-[4rem] overflow-hidden shadow-5xl h-full flex flex-col">
            <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50 text-center">
              <Landmark className="h-16 w-16 text-blue-500 mx-auto mb-6 animate-pulse" />
              <CardTitle className="text-2xl font-black uppercase tracking-widest text-white">AUTORITÉ RÉGALIENNE eIDAS</CardTitle>
            </CardHeader>
            <CardContent className="p-12 flex-1 space-y-12">
               <div className="space-y-8">
                  {[
                    { label: "Fournisseur (QTSP)", val: "SCUGP TRUST SERVICES", icon: Key },
                    { label: "Juridiction", val: "EUROPEAN UNION / CHINA", icon: Globe },
                    { label: "Preuve Cryptographique", val: "ES256 / Ed25519", icon: Zap }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-black/40 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all">
                       <div className="flex items-center gap-6">
                          <stat.icon className="h-8 w-8 text-blue-400" />
                          <span className="text-[12px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <span className="text-sm font-black text-white uppercase">{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-blue-500/5 border-2 border-blue-500/20 rounded-[4rem] text-center shadow-inner group">
                  <Star className="h-12 w-12 text-amber-400 mx-auto mb-6 animate-spin-slow" />
                  <p className="text-[14px] text-slate-400 leading-relaxed italic uppercase font-black group-hover:text-blue-300 transition-colors">
                    "Votre génie académique est désormais une réalité juridique protégée par les plus hautes normes de confiance de l'Union Européenne."
                  </p>
               </div>
            </CardContent>
            <CardFooter className="p-12 border-t border-white/5 bg-slate-950/50">
               <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.5em]">
                 Télécharger le Rapport de Conformité
               </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
