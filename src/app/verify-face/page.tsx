
"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { FacialVerificationUI } from "@/components/scugp/v-infinity/FacialVerificationUI";
import { 
  ShieldCheck, Brain, Lock, Globe, Share2, 
  History, Fingerprint, Scan, Activity, Sparkles,
  Info, CheckCircle2, Award
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function FacialVerificationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-emerald-500/30">
      <MainNavigation />
      
      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Biometric Strategic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-white/5 pb-20 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-6">
               <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-10 py-3 uppercase tracking-[0.5em] font-black text-[12px] rounded-full">
                 BIOMETRIC SOVEREIGNTY Ω
               </Badge>
               <div className="h-8 w-[1px] bg-white/10" />
               <span className="text-[12px] font-mono text-slate-500 flex items-center gap-3 tracking-[0.3em] uppercase">
                 <Lock className="h-4 w-4" /> Proof of Presence: 100%
               </span>
            </div>
            <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
              Validation <span className="text-emerald-500 italic">Faciale</span>
            </h1>
            <p className="text-slate-400 text-2xl italic tracking-[0.2em] max-w-4xl leading-relaxed font-medium uppercase">
              "L'Identité Pure reconnue par le Maillage Neural de la Source."
            </p>
          </div>

          <div className="flex items-center gap-12 bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-3xl backdrop-blur-3xl relative z-10">
             <div className="text-center space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Confiance</p>
                <p className="text-4xl font-black font-mono text-emerald-400">99.99%</p>
             </div>
             <div className="h-16 w-[1px] bg-white/10" />
             <div className="text-center space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Vitesse</p>
                <p className="text-4xl font-black font-mono text-blue-400">0.02ms</p>
             </div>
          </div>
        </div>

        {/* The Facial Scan Interface */}
        <section className="space-y-12">
           <FacialVerificationUI />
        </section>

        {/* Technical Deep Dive into Biometrics */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-5xl font-black uppercase tracking-widest">Technologie <span className="text-emerald-500">FaceNet+</span></h2>
                 <p className="text-xl text-slate-400 leading-relaxed font-medium uppercase tracking-tight">
                    "Notre moteur extrait 128 points de caractéristiques faciales pour créer un vecteur d'identité unique, scellé sur le ledger souverain."
                 </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <p className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-3">
                       <ShieldCheck className="h-5 w-5" /> Anti-Spoofing 3D
                    </p>
                    <p className="text-sm text-slate-500 italic">"Détection de profondeur et de chaleur pour contrer les tentatives d'usurpation via photos ou vidéos."</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-3">
                       <Brain className="h-5 w-5" /> Neural Matching
                    </p>
                    <p className="text-sm text-slate-500 italic">"Comparaison par similarité cosinus avec la signature biométrique d'origine du Dr. Hakim Chibubi."</p>
                 </div>
              </div>
           </div>
           <Card className="bg-slate-900 border-4 border-emerald-500/20 rounded-[5rem] overflow-hidden shadow-3xl">
              <CardContent className="p-16 text-center space-y-10">
                 <div className="relative inline-block">
                    <Fingerprint className="h-32 w-32 text-emerald-500 mx-auto animate-pulse" />
                    <div className="absolute inset-0 bg-emerald-500 blur-[100px] opacity-20" />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase text-white tracking-widest">Sceau Biométrique</h3>
                    <p className="text-sm text-slate-400 font-mono">0x8F3A2E41...9C32</p>
                 </div>
                 <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50">
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> <span className="text-[10px] font-bold uppercase">ISO 30107-3</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> <span className="text-[10px] font-bold uppercase">FIDO2 READY</span></div>
                 </div>
              </CardContent>
           </Card>
        </section>

        {/* Global Security Disclaimer */}
        <section className="py-24">
          <Card className="bg-red-950/10 border-2 border-red-500/20 rounded-[4rem] overflow-hidden">
            <CardContent className="p-16 flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/3 text-center space-y-6">
                  <Activity className="h-24 w-24 text-red-500 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-black uppercase text-red-500 tracking-widest">Sécurité Critique</h3>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Intégrité Biométrique vs Usurpation</p>
               </div>
               <div className="lg:w-2/3 space-y-8 text-left">
                  <p className="text-sm text-slate-400 leading-relaxed italic">
                     "La vérification faciale SCUGP Ω est le niveau ultime de sécurité. En cas de non-concordance répétée (3 essais), le nœud local s'auto-verrouille et une alerte de souveraineté est propagée à l'intégralité du multivers via les 37 piliers."
                  </p>
                  <div className="flex gap-8">
                     <Badge className="bg-red-600 text-white font-black px-8 py-2 rounded-full uppercase">ALERTE_NIVEAU_SOURCE</Badge>
                     <Badge variant="outline" className="text-slate-500 border-slate-800">ENFORCED BY AI GUARDIAN</Badge>
                  </div>
               </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-32 border-t border-white/5 text-center text-slate-600 text-[10px] font-black uppercase tracking-[1em] opacity-50">
        &copy; {new Date().getFullYear()} SCUGP® BIOMETRIC SECURITY — DR. HAKIM CHIBUBI SOVEREIGN IDENTITY — SCELLÉ DANS LE CORPS.
      </footer>
    </div>
  );
}
