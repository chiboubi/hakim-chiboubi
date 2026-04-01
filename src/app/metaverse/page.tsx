"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { MetaverseGallery } from "@/components/scugp/v-infinity/MetaverseScene";
import { 
  Box, Sparkles, Globe, Share2, 
  History, ShieldCheck, Zap, Layers,
  Compass, Eye, PlayCircle, Trophy
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MetaversePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-blue-500/30">
      <MainNavigation />
      
      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Metaverse Strategic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-white/5 pb-20 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-6">
               <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-10 py-3 uppercase tracking-[0.5em] font-black text-[12px] rounded-full">
                 IMMERSIVE CERTIFICATION Ω
               </Badge>
               <div className="h-8 w-[1px] bg-white/10" />
               <span className="text-[12px] font-mono text-slate-500 flex items-center gap-3 tracking-[0.3em] uppercase">
                 <Box className="h-4 w-4" /> Spatial Presence: 100%
               </span>
            </div>
            <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
              Certificats <span className="text-blue-500 italic">3D & NFT</span>
            </h1>
            <p className="text-slate-400 text-2xl italic tracking-[0.2em] max-w-4xl leading-relaxed font-medium uppercase">
              "L'Être matérialisé dans le Métavers. Vos titres comme objets de pure lumière."
            </p>
          </div>

          <div className="flex items-center gap-12 bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-3xl backdrop-blur-3xl relative z-10">
             <div className="text-center space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Rendu</p>
                <p className="text-4xl font-black font-mono text-blue-400">4K_RT</p>
             </div>
             <div className="h-16 w-[1px] bg-white/10" />
             <div className="text-center space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Format</p>
                <p className="text-4xl font-black font-mono text-emerald-400">GLTF_2</p>
             </div>
          </div>
        </div>

        {/* The 3D Gallery Component */}
        <section className="space-y-12">
           <MetaverseGallery />
        </section>

        {/* Metaverse Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: "NFT 3D Interactif", desc: "Chaque diplôme est un token ERC-721 contenant des scripts d'interaction personnalisés.", icon: Zap, color: "text-amber-400" },
             { title: "Interopérabilité", desc: "Compatible avec Decentraland, The Sandbox et les mondes WebXR.", icon: Globe, color: "text-blue-400" },
             { title: "Physique Réelle", desc: "Gravité et collisions gérées pour une immersion totale dans les salles de classe virtuelles.", icon: Layers, color: "text-emerald-400" },
             { title: "Historique Spatial", desc: "Visualisez l'arbre de provenance et de vérification en 3D directement sur l'objet.", icon: History, color: "text-purple-400" }
           ].map((cap, i) => (
             <Card key={i} className="bg-slate-900 border-2 border-white/5 rounded-[3rem] p-10 hover:border-blue-500/30 transition-all group">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <cap.icon className={cn("h-6 w-6", cap.color)} />
                </div>
                <h4 className="text-lg font-black text-white uppercase mb-4 tracking-widest">{cap.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-bold uppercase tracking-tight">{cap.desc}</p>
             </Card>
           ))}
        </div>

        {/* Technical Deep Dive */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-5xl font-black uppercase tracking-widest">Architecture <span className="text-blue-500">Spatial-Ledger</span></h2>
                 <p className="text-xl text-slate-400 leading-relaxed font-medium uppercase tracking-tight">
                    "Nous fusionnons le Web 3.0 et le WebXR. Vos certificats ne sont pas des images, ce sont des entités autonomes vivant sur la blockchain et visibles dans le métavers."
                 </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-3">
                       <ShieldCheck className="h-5 w-5" /> ERC-4907 Compliant
                    </p>
                    <p className="text-sm text-slate-500 italic">"Possibilité de prêter temporairement vos titres pour des audits de compétences sans transfert de propriété."</p>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-3">
                       <PlayCircle className="h-5 w-5" /> Animation Loop
                    </p>
                    <p className="text-sm text-slate-500 italic">"Chaque grade académique possède son propre pattern de particules et d'animations lumineuses."</p>
                 </div>
              </div>
           </div>
           <div className="p-16 bg-slate-900 border-4 border-blue-500/20 rounded-[5rem] overflow-hidden shadow-3xl text-center space-y-10">
              <div className="relative inline-block">
                 <Trophy className="h-32 w-32 text-blue-500 mx-auto animate-bounce" />
                 <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20" />
              </div>
              <div className="space-y-4">
                 <h3 className="text-3xl font-black uppercase text-white tracking-widest">Sceau des Mondes</h3>
                 <p className="text-sm text-slate-400 font-mono">STANDARDS: GLB | IPFS | POLYGON</p>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black h-16 rounded-[2rem] uppercase tracking-widest shadow-2xl">
                 VOIR DANS DECENTRALAND
              </Button>
           </div>
        </section>
      </main>

      <footer className="py-32 border-t border-white/5 text-center text-slate-600 text-[10px] font-black uppercase tracking-[1em] opacity-50">
        &copy; {new Date().getFullYear()} SCUGP® METAVERSE INFRASTRUCTURE — DR. HAKIM CHIBUBI SPATIAL STANDARDS — SCELLÉ DANS L'ESPACE.
      </footer>
    </div>
  );
}
