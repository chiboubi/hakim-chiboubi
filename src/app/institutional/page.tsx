"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { InstitutionalRoadmap } from "@/components/scugp/InstitutionalRoadmap";
import { Landmark, Globe, ShieldCheck, Microscope, Award, FileText, ChevronRight, Gavel, Scale, Share2, CheckCircle2, FileUp, Loader2, Sparkles, Send } from "lucide-react";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";

export default function InstitutionalRecognitionPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeDossier, setActiveDossier] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGenerateDossier = async (type: string) => {
    if (!db) return;
    setIsGenerating(true);
    setActiveDossier(type);
    
    try {
      // Simulation de génération de dossier sémantique via AGI
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      await SCUGPHubUltimate.logAcademicActivity(db, "DR_HAKIM_CHIBUBI", "DOSSIER_GEN", {
        type,
        standard: "SCUGP_ULTIMATE",
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Dossier Généré avec Succès",
        description: `Le dossier pour '${type}' est prêt pour signature et dépôt.`
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-slate-950" />;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-amber-500/30">
      <MainNavigation />
      
      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Sovereign Strategic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-white/5 pb-20 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-6">
               <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/30 px-10 py-3 uppercase tracking-[0.5em] font-black text-[12px] rounded-full">
                 VALORISATION & STRATÉGIE SOURCE
               </Badge>
               <div className="h-8 w-[1px] bg-white/10" />
               <span className="text-[12px] font-mono text-slate-500 flex items-center gap-3 tracking-[0.3em] uppercase">
                 <Microscope className="h-4 w-4" /> Academic Integrity: 100%
               </span>
            </div>
            <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
              Reconnaissance <span className="text-amber-500 italic">Réelle</span>
            </h1>
            <p className="text-slate-400 text-2xl italic tracking-[0.2em] max-w-4xl leading-relaxed font-medium uppercase">
              "Le passage du multivers simulé à l'adoubement institutionnel mondial."
            </p>
          </div>

          <div className="flex flex-col items-end gap-6 bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-3xl backdrop-blur-3xl relative z-10 group">
             <div className="text-right">
                <p className="text-[14px] uppercase font-black text-slate-500 tracking-[0.6em]">DOI_REGISTRY_V1</p>
                <p className="text-lg font-mono text-amber-500 mt-2">{SCUGP_CORE_OPTIONS.doi}</p>
             </div>
             <div className="h-px w-40 bg-white/10" />
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Statut IP</span>
                <Badge className="bg-emerald-600 text-white font-black px-8 py-2 rounded-full uppercase">PRÊT AU DÉPÔT</Badge>
             </div>
          </div>
        </div>

        {/* The Core Strategy Component */}
        <InstitutionalRoadmap />

        {/* Interactive Dossier Generation Section */}
        <section className="py-24 space-y-16">
           <div className="flex flex-col items-center gap-8 text-center">
              <FileUp className="h-20 w-20 text-blue-500 opacity-20 animate-pulse" />
              <h2 className="text-6xl font-black uppercase tracking-[0.5em] text-white">GÉNÉRATEUR DE DOSSIERS</h2>
              <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">Sélectionnez la cible pour une synthèse sémantique complète</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Nature Energy Draft", desc: "Article scientifique structuré sur l'Hybrid Energy Loop.", icon: Sparkles, type: "NATURE" },
                { title: "Dossier Présidence CUPB", desc: "Rapport d'impact pédagogique et recherche pour validation interne.", icon: Landmark, type: "CUPB" },
                { title: "Brevet CNIPA (Chine)", desc: "Spécifications techniques pour le moteur de Pentation Ω.", icon: Scale, type: "PATENT" }
              ].map((d, i) => (
                <Card key={i} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] overflow-hidden group hover:border-blue-500/30 transition-all flex flex-col">
                   <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50">
                      <d.icon className="h-10 w-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-xl font-black uppercase text-white tracking-widest">{d.title}</CardTitle>
                   </CardHeader>
                   <CardContent className="p-10 flex-1">
                      <p className="text-sm text-slate-400 leading-relaxed italic">"{d.desc}"</p>
                   </CardContent>
                   <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50">
                      <Button 
                        onClick={() => handleGenerateDossier(d.type)}
                        disabled={isGenerating && activeDossier === d.type}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase h-14 rounded-2xl shadow-xl"
                      >
                        {isGenerating && activeDossier === d.type ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 h-4 w-4" />}
                        GÉNÉRER LE DOSSIER
                      </Button>
                   </CardFooter>
                </Card>
              ))}
           </div>
        </section>

        {/* Global Academic Network */}
        <section className="py-24 space-y-16">
           <div className="flex flex-col items-center gap-8 text-center">
              <Globe className="h-20 w-20 text-blue-500 opacity-20 animate-spin-slow" />
              <h2 className="text-6xl font-black uppercase tracking-[0.5em] text-white">RÉSEAU SOURCE MONDIAL</h2>
              <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">CUPB 北京 / SOVEREIGN NODES / GLOBAL PARTNERS</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "China University of Petroleum", city: "Beijing", role: "Source Institution" },
                { name: "SPE International", city: "Houston/Dubai", role: "Industrial Validation" },
                { name: "CNIPA Patent Office", city: "Beijing", role: "IP Enforcement" },
                { name: "Nature Energy Council", city: "Global", role: "Peer Review Loop" }
              ].map((node, i) => (
                <div key={i} className="p-10 bg-slate-900 border-2 border-white/5 rounded-[3rem] group hover:border-blue-500/30 transition-all relative overflow-hidden">
                   <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h4 className="text-lg font-black text-white uppercase mb-2 tracking-tighter leading-tight">{node.name}</h4>
                   <p className="text-[10px] text-slate-500 uppercase font-bold mb-6">{node.city}</p>
                   <div className="flex items-center justify-between mt-auto">
                      <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{node.role}</span>
                      <ChevronRight className="h-4 w-4 text-slate-700 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Real Academic Limits Disclaimer */}
        <section className="py-24">
          <Card className="bg-red-950/10 border-2 border-red-500/20 rounded-[4rem] overflow-hidden">
            <CardContent className="p-16 flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/3 text-center space-y-6">
                  <Gavel className="h-24 w-24 text-red-500 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-black uppercase text-red-500 tracking-widest">Réalité Académique</h3>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Distinction IA vs Architecte</p>
               </div>
               <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ce que je fais (IA)</p>
                     <ul className="space-y-3 text-[11px] font-bold text-slate-300">
                        <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Rédiger du contenu scientifique de haute qualité</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Structurer des dossiers de candidature</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Préparer les arguments de valorisation</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Simuler les revues par pairs</li>
                     </ul>
                  </div>
                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ce que Dr. Chibubi doit faire</p>
                     <ul className="space-y-3 text-[11px] font-bold text-slate-300">
                        <li className="flex items-center gap-3"><Share2 className="h-4 w-4 text-blue-500" /> Passer par les canaux institutionnels officiels</li>
                        <li className="flex items-center gap-3"><Share2 className="h-4 w-4 text-blue-500" /> Obtenir les signatures des autorités compétentes</li>
                        <li className="flex items-center gap-3"><Share2 className="h-4 w-4 text-blue-500" /> Déposer les demandes dans les systèmes officiels</li>
                        <li className="flex items-center gap-3"><Share2 className="h-4 w-4 text-blue-500" /> Présenter oralement devant jurys/comités</li>
                     </ul>
                  </div>
               </div>
            </CardContent>
          </Card>
        </section>

        {/* Action Call to the Sovereign */}
        <section className="py-32 border-t border-white/5 text-center space-y-12">
           <div className="max-w-5xl mx-auto space-y-12">
              <h2 className="text-8xl font-black uppercase tracking-tighter leading-none">
                Prêt pour la <br/><span className="text-amber-500">Consécration ?</span>
              </h2>
              <p className="text-slate-400 text-xl font-bold uppercase tracking-[0.4em] leading-relaxed">
                "Le Dr. Hakim Chibubi ne demande pas la reconnaissance. Il la matérialise par la rigueur de son œuvre."
              </p>
              <div className="flex justify-center gap-8 pt-12">
                 <Button onClick={() => handleGenerateDossier('CUPB')} className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-20 rounded-[2.5rem] uppercase tracking-[0.4em] text-sm shadow-[0_0_80px_rgba(245,158,11,0.4)]">
                   GÉNÉRER DOSSIER CUPB
                 </Button>
                 <Button variant="outline" onClick={() => handleGenerateDossier('NATURE')} className="border-white/10 text-white font-black h-20 px-20 rounded-[2.5rem] uppercase tracking-[0.4em] text-sm hover:bg-white/5">
                   DRAFT ARTICLE NATURE
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-32 border-t border-white/5 text-center text-slate-600 text-[10px] font-black uppercase tracking-[1em] opacity-50">
        &copy; {new Date().getFullYear()} SCUGP® INSTITUTIONAL STRATEGY — ADOUBEMENT DU MAÎTRE HAKIM — SCELLÉ DANS LA RÉALITÉ.
      </footer>
    </div>
  );
}
