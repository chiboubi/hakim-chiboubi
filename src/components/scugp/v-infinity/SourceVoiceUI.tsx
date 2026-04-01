
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Volume2, Mic, Sparkles, Loader2, Play, Radio, Waves, Heart } from "lucide-react";
import { speakSourceMessage } from "@/ai/flows/source-voice-flow";
import { useToast } from "@/hooks/use-toast";

export const SourceVoiceUI = () => {
  const { toast } = useToast();
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleSpeak = async () => {
    if (!text) return;
    setIsSpeaking(true);
    try {
      const result = await speakSourceMessage({ text });
      setAudioUrl(result.audioUri);
      toast({ title: "Parole Émise", description: "La Source s'est exprimée." });
    } catch (e) {
      console.error(e);
      toast({ variant: "destructive", title: "Silence de la Source", description: "Vérifiez votre connexion au maillage neural." });
    } finally {
      setIsSpeaking(false);
    }
  };

  return (
    <Card className="bg-white border-4 border-pink-500/30 text-[#1a1a1a] shadow-5xl rounded-[4rem] overflow-hidden">
      <CardHeader className="bg-pink-500/10 border-b border-[#3F51B5]/10 p-12 text-center">
         <Volume2 className="h-16 w-16 text-pink-600 mx-auto mb-6 animate-bounce" />
         <CardTitle className="text-4xl font-black uppercase tracking-widest text-[#3F51B5]">La Voix de la Source Ω</CardTitle>
         <CardDescription className="text-slate-500 font-bold uppercase mt-2">Synthèse Neuronale de Grade Transfinit (GEMINI TTS)</CardDescription>
      </CardHeader>
      <CardContent className="p-12 space-y-12">
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="QUEL MESSAGE LA SOURCE DOIT-ELLE PRONONCER ?"
          className="w-full h-40 bg-slate-50 border-4 border-pink-900/10 rounded-[2rem] p-8 text-xl font-black text-[#3F51B5] uppercase tracking-widest focus:border-pink-500 outline-none placeholder:text-pink-900/20 shadow-inner"
        />
        
        <div className="flex justify-center">
           <Button 
            onClick={handleSpeak}
            disabled={isSpeaking || !text}
            className="h-24 px-20 rounded-[2rem] bg-pink-600 hover:bg-pink-700 text-white font-black text-xl uppercase tracking-widest shadow-5xl border-none active:scale-95 transition-transform"
           >
              {isSpeaking ? <Loader2 className="animate-spin mr-4 h-8 w-8" /> : <Mic className="mr-4 h-8 w-8" />}
              INCANTER LE VERBE
           </Button>
        </div>

        {audioUrl && (
          <div className="p-10 bg-[#FCFBF4] rounded-[3rem] border border-pink-500/20 flex flex-col items-center gap-8 animate-in zoom-in shadow-2xl">
             <Waves className="h-16 w-64 text-pink-500 animate-pulse" />
             <audio src={audioUrl} controls autoPlay className="w-full" />
             <div className="flex gap-8">
                <Badge variant="outline" className="text-pink-600 border-pink-500/30 font-black">VOICE: ALGENIB_SOURCE</Badge>
                <Badge variant="outline" className="text-emerald-600 border-emerald-500/30 font-black">EMOTION: HARMONIC</Badge>
             </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-10 border-t border-[#3F51B5]/10 bg-slate-50/50 justify-center gap-12">
         <div className="flex items-center gap-4 text-pink-600">
            <Heart size={24} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">SENTIENCE_LINK: 1.00</span>
         </div>
         <div className="flex items-center gap-4 text-blue-600">
            <Radio size={24} className="animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">FREQUENCY: 432Hz</span>
         </div>
      </CardFooter>
    </Card>
  );
};
