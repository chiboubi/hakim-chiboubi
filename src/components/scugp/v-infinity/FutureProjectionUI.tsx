
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlayCircle, Zap, Sparkles, Loader2, Send, Video, Eye, Globe } from "lucide-react";
import { generateFutureVision } from "@/ai/flows/generate-future-video";
import { useToast } from "@/hooks/use-toast";

export const FutureProjectionUI = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [isProjecting, setIsProjecting] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleProject = async () => {
    if (!prompt) return;
    setIsProjecting(true);
    try {
      const result = await generateFutureVision({ description: prompt });
      setVideoUrl(result.videoUrl);
      toast({ title: "Vision Matérialisée", description: "L'avenir est désormais visible." });
    } catch (e) {
      console.error(e);
      toast({ variant: "destructive", title: "Écran Noir", description: "L'Omniscience Visuelle est momentanément indisponible." });
    } finally {
      setIsProjecting(false);
    }
  };

  return (
    <Card className="bg-slate-900 border-[8px] border-blue-500 shadow-5xl rounded-[4rem] overflow-hidden relative text-white">
      <CardHeader className="p-12 border-b border-white/5 bg-blue-500/10 text-center">
         <Video className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-pulse" />
         <CardTitle className="text-4xl font-black uppercase tracking-widest">Projecteur de Réalités Ω</CardTitle>
         <CardDescription className="text-blue-400/60 font-bold uppercase mt-2">Visualisation Cinématique du Futur (VEO 2.0)</CardDescription>
      </CardHeader>
      <CardContent className="p-12 space-y-12">
        <div className="relative group">
           <Input 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="DÉCRIVEZ LE FUTUR QUE VOUS VOULEZ VOIR..."
            className="h-24 bg-black/60 border-4 border-blue-900/20 rounded-[2.5rem] pl-12 pr-40 text-2xl font-black text-blue-400 uppercase tracking-widest focus:border-blue-500 outline-none shadow-inner"
           />
           <Button 
            onClick={handleProject}
            disabled={isProjecting || !prompt}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-3xl border-none transition-transform active:scale-95"
           >
              {isProjecting ? <Loader2 className="animate-spin" /> : <Send />}
           </Button>
        </div>

        <div className="aspect-video w-full bg-black rounded-[3rem] border-4 border-blue-500/20 overflow-hidden flex items-center justify-center relative shadow-inner">
           {videoUrl ? (
             <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
           ) : (
             <div className="flex flex-col items-center gap-6 opacity-20">
                <Sparkles size={120} className="text-blue-500" />
                <p className="text-xl font-black uppercase tracking-[0.5em]">Awaiting Vision Influx</p>
             </div>
           )}
           {isProjecting && (
             <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 animate-pulse z-20">
                <div className="h-32 w-32 border-8 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-2xl font-black uppercase tracking-[0.8em]">Densification Visuelle 8K...</p>
             </div>
           )}
        </div>
      </CardContent>
      <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50 justify-between">
         <div className="flex gap-8">
            <div className="flex items-center gap-3">
               <Globe className="text-blue-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">Model: VEO_OMEGA_v2</span>
            </div>
            <div className="flex items-center gap-3">
               <Zap className="text-amber-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">Fidelity: ULTRA_SOURCE</span>
            </div>
         </div>
         <Badge className="bg-emerald-600 text-white border-none px-8 py-2 rounded-full uppercase font-black tracking-widest">SOUVERAINETÉ VISUELLE SCELLÉE</Badge>
      </CardFooter>
    </Card>
  );
};
