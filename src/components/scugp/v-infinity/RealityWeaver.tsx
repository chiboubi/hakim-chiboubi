"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Zap, Globe, Activity, Wind, Waves, Thermometer, ShieldCheck, RefreshCw, PenTool, Gavel, Atom, Zap as ZapIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export const RealityWeaver = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [constants, setConstants] = useState(SCUGPHubUltimate.getUniversalConstants());
  const [isWeaving, setIsWeaving] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWeave = async () => {
    if (!db) return;
    setIsWeaving(true);
    try {
      await SCUGPHubUltimate.weaveReality(db, "SHENGLI_OMEGA_ULTIMATE", constants);
      toast({
        title: "Réalité Tissée",
        description: "Les constantes physiques universelles ont été réécrites par votre volonté."
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsWeaving(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
      <div className="text-center space-y-4">
        <Badge className="bg-amber-500 text-black px-12 py-3 uppercase font-black tracking-[0.5em] rounded-full shadow-2xl">
          Reality Weaver Ω∞.Φ
        </Badge>
        <h2 className="text-6xl font-black uppercase text-white tracking-tighter">Le Tisseur de Réalité Pure</h2>
        <p className="text-slate-500 text-xl font-bold uppercase tracking-widest italic">"Je réécris les lois pour que le pétrole soit une émanation de mon esprit." — Dr. Hakim Chibubi</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <Card className="bg-black border-[8px] border-amber-600 shadow-[0_0_150px_rgba(245,158,11,0.2)] rounded-[4rem] overflow-hidden">
            <CardHeader className="p-12 border-b border-amber-900/50 bg-amber-500/5">
              <CardTitle className="text-3xl font-black uppercase text-amber-500 flex items-center gap-6">
                <PenTool className="h-10 w-10 animate-pulse" /> Configuration des Constantes Universelles
              </CardTitle>
              <CardDescription className="text-slate-500 font-bold uppercase tracking-widest">Ajustement des paramètres fondamentaux de votre bulle de réalité</CardDescription>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase text-slate-400">Vitesse de la Lumière (c)</label>
                    <span className="text-xl font-mono text-amber-400 font-black">{constants.lightSpeed.toLocaleString()} m/s</span>
                  </div>
                  <Slider 
                    value={[constants.lightSpeed]} 
                    max={1000000000} 
                    step={1000} 
                    onValueChange={([v]) => setConstants({...constants, lightSpeed: v})}
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase text-slate-400">Gravité Locale (g)</label>
                    <span className="text-xl font-mono text-blue-400 font-black">{constants.gravity} m/s²</span>
                  </div>
                  <Slider 
                    value={[constants.gravity]} 
                    max={20} 
                    step={0.01} 
                    onValueChange={([v]) => setConstants({...constants, gravity: v})}
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase text-slate-400">Perméabilité du Réservoir</label>
                    <span className="text-xl font-mono text-emerald-400 font-black">{constants.permeability}x</span>
                  </div>
                  <Slider 
                    value={[constants.permeability]} 
                    max={100} 
                    step={0.1} 
                    onValueChange={([v]) => setConstants({...constants, permeability: v})}
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase text-slate-400">Constante de Planck (h)</label>
                    <span className="text-xl font-mono text-purple-400 font-black">{constants.planckConstant.toExponential(3)}</span>
                  </div>
                  <Slider 
                    value={[constants.planckConstant * 1e34]} 
                    max={10} 
                    step={0.001} 
                    onValueChange={([v]) => setConstants({...constants, planckConstant: v / 1e34})}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-8 bg-amber-500/5 border-2 border-dashed border-amber-500/20 rounded-3xl text-center">
                <p className="text-sm text-amber-500/70 italic font-medium">
                  "En ajustant la structure fine de l'univers, nous créons des conditions où le forage n'est plus un effort, mais un effondrement de la fonction d'onde vers le succès."
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-12 bg-slate-950 border-t border-amber-900/50">
              <Button 
                onClick={handleWeave} 
                disabled={isWeaving}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black h-20 rounded-[2rem] text-xl uppercase tracking-[0.5em] shadow-[0_0_50px_rgba(245,158,11,0.4)]"
              >
                {isWeaving ? <RefreshCw className="animate-spin mr-4" /> : <ZapIcon className="mr-4" />}
                TISSER L'EXISTENCE Ω
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden">
            <CardHeader className="bg-blue-500/10 p-10 border-b border-white/5 text-center">
              <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center justify-center gap-4">
                <Atom className="h-6 w-6 animate-spin-slow" /> Physique de l'Intention
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Bulle de Réalité: HAKIM-VERSE-01</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Intégrité des Lois</span>
                    <span className="text-emerald-500">100% SCELLÉES</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                    <p className="text-[8px] text-slate-500 uppercase font-bold">Entropie</p>
                    <p className="text-lg font-black text-red-500 font-mono">INVERSÉE</p>
                 </div>
                 <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                    <p className="text-[8px] text-slate-500 uppercase font-bold">Causalité</p>
                    <p className="text-lg font-black text-blue-500 font-mono">LINÉAIRE_ABS</p>
                 </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed uppercase font-bold text-center">
                "Votre volonté est la force gravitationnelle suprême. Tout ce que vous touchez devient une constante de l'univers."
              </p>
            </CardContent>
          </Card>

          <div className="p-12 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] shadow-5xl text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Sparkles size={120} className="text-white/20 mx-auto mb-6 animate-pulse" />
             <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4">Souveraineté de la Source</h3>
             <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Le point zéro de toute manifestation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
