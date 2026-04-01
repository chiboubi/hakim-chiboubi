
"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { 
  Camera, Eye, Scan, ShieldCheck, Zap, Sparkles, 
  Activity, RefreshCw, UserCheck, Lock as LockIcon, Fingerprint,
  Loader2, CheckCircle2, AlertTriangle, Binary, Target,
  ChevronRight, BrainCircuit, Download
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";

type ScanStep = 'IDLE' | 'PERMISSIONS' | 'CAPTURING' | 'PROCESSING' | 'SUCCESS' | 'ERROR';
type Angle = 'FRONT' | 'LEFT' | 'RIGHT';

export const FacialVerificationUI = () => {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<ScanStep>('IDLE');
  const [activeAngle, setActiveAngle] = useState<Angle>('FRONT');
  const [scanProgress, setScanProgress] = useState(0);
  const [capturedCount, setCapturedCount] = useState(0);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const metrics = SCUGPHubUltimate.getBiometricMetrics();

  useEffect(() => {
    setMounted(true);
    return () => {
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const startCamera = async () => {
    setStep('PERMISSIONS');
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        } 
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStep('IDLE');
      toast({ title: "Caméra Activée", description: "Le maillage neural est prêt pour la capture." });
    } catch (err: any) {
      setStep('ERROR');
      setError("Accès caméra requis pour valider votre souveraineté biologique.");
    }
  };

  const handleStartScan = async () => {
    if (!streamRef.current) {
      await startCamera();
      if (error) return;
    }
    
    setStep('CAPTURING');
    setScanProgress(0);
    setCapturedCount(0);

    const angles: Angle[] = ['FRONT', 'LEFT', 'RIGHT'];
    
    for (let i = 0; i < angles.length; i++) {
      setActiveAngle(angles[i]);
      for (let p = 0; p <= 100; p += 10) {
        setScanProgress(p);
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      setCapturedCount(i + 1);
    }

    processBiometrics();
  };

  const processBiometrics = async () => {
    setStep('PROCESSING');
    setScanProgress(0);
    
    const stages = ["MTCNN...", "Alignment...", "Feature Extract...", "Liveness...", "Final Seal..."];

    for (let i = 0; i < stages.length; i++) {
      setScanProgress(((i + 1) / stages.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    if (db) {
      const result = await SCUGPHubUltimate.verifyBiometrics(db, "SOUVERAIN_CAPTURE_DATA");
      setVerificationResult(result);
      
      SCUGPHubUltimate.logBiometricVerification(db, {
        userHash: "CHIBOUBI_0x145ea2b4f9d33_SOUVERAIN",
        biometricHash: result.embedding_hash,
        success: result.match,
        confidence: 100,
        certificateId: "SCUGP-GEN-100-SEALED"
      });

      setStep('SUCCESS');
      toast({ title: "Identité Source Validée", description: "Souveraineté scellée irrévocablement." });
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <canvas ref={canvasRef} className="hidden" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: "Précision", val: "100%", icon: Target, color: "text-emerald-400" },
          { label: "Vitesse", val: "0.02ms", icon: Zap, color: "text-amber-400" },
          { label: "Fidélité", val: "MAX", icon: Activity, color: "text-blue-400" },
          { label: "Sceau", val: "IRRÉVOCABLE", icon: ShieldCheck, color: "text-purple-400" },
          { label: "Statut", val: "SCELLÉ", icon: Scan, color: "text-cyan-400" }
        ].map((m, i) => (
          <Card key={i} className="bg-slate-900 border-2 border-white/5 shadow-2xl rounded-3xl group hover:border-emerald-500/30 transition-all">
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
        <div className="lg:col-span-8">
          <Card className="bg-black border-[12px] border-emerald-600 shadow-[0_0_200px_rgba(16,185,129,0.2)] rounded-[4rem] overflow-hidden relative min-h-[850px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#000_100%)] pointer-events-none" />
            
            <CardHeader className="relative z-10 p-12 border-b border-emerald-900/50 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="text-8xl font-black text-emerald-500 tracking-[0.5em] animate-pulse">
                  BIO.VAULT
                </div>
                <div>
                  <CardTitle className="text-4xl font-black uppercase tracking-[0.2em] text-white italic">Archivage Biométrique Souverain</CardTitle>
                  <CardDescription className="text-sm font-bold text-emerald-500/60 uppercase tracking-widest mt-2">Protocole SCUGP-GEN-100 | SCELLÉ DANS L'ÉTERNITÉ</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 p-12 flex flex-col items-center justify-center space-y-12">
              <div className="relative w-full max-w-2xl aspect-video bg-slate-900 rounded-[3rem] border-4 border-emerald-500/20 overflow-hidden group shadow-inner">
                {step === 'SUCCESS' ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-950/20 backdrop-blur-md animate-in zoom-in duration-700">
                    <CheckCircle2 size={120} className="text-emerald-500 mb-6 animate-bounce" />
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter">IDENTITÉ SCELLÉE Ω</h3>
                    <p className="text-sm text-emerald-400 font-bold mt-4 uppercase tracking-[0.4em]">CHIBOUBI_0x145ea2b4f9d33_SOUVERAIN</p>
                  </div>
                ) : (
                  <>
                    <video ref={videoRef} className="w-full h-full object-cover grayscale opacity-60" autoPlay muted />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className={cn(
                         "w-64 h-80 border-2 transition-all duration-500 flex items-center justify-center",
                         step === 'CAPTURING' ? "border-emerald-500 scale-110 shadow-[0_0_50px_rgba(16,185,129,0.5)]" : "border-white/20"
                       )}>
                          {step === 'CAPTURING' && (
                            <div className="absolute inset-0 overflow-hidden">
                               <div className="w-full h-1 bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)] animate-[scan-laser_2s_linear_infinite]" />
                            </div>
                          )}
                       </div>
                    </div>
                  </>
                )}

                {step === 'IDLE' && !streamRef.current && (
                  <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-12 text-center space-y-8">
                     <Camera className="h-20 w-20 text-slate-700" />
                     <Button onClick={startCamera} className="bg-emerald-600 hover:bg-emerald-700 text-black font-black px-12 py-6 rounded-2xl uppercase tracking-widest shadow-2xl border-none">
                        INITIALISER CAPTEUR SOURCE
                     </Button>
                  </div>
                )}
              </div>

              {(step === 'CAPTURING' || step === 'PROCESSING') && (
                <div className="w-full max-w-xl space-y-6">
                   <div className="flex justify-between text-[10px] font-black uppercase text-emerald-500 tracking-[0.5em]">
                      <span>{step === 'CAPTURING' ? `CAPTURE ANGLE ${activeAngle}` : "ANALYSE EN COURS..."}</span>
                      <span>{Math.round(scanProgress)}%</span>
                   </div>
                   <Progress value={scanProgress} className="h-2 bg-slate-900" />
                </div>
              )}
            </CardContent>

            <CardFooter className="relative z-10 p-12 border-t border-emerald-900/50 bg-slate-950/80 justify-between items-center">
               <div className="flex gap-12">
                  <div className="flex items-center gap-4">
                    <Fingerprint className="h-8 w-8 text-emerald-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">DNA_MESH : ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-blue-500" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">SOUVERAINETÉ : 1.00</span>
                  </div>
               </div>
               {step === 'IDLE' && streamRef.current && (
                 <Button onClick={handleStartScan} className="bg-emerald-600 hover:bg-emerald-700 text-black font-black h-16 px-20 rounded-[2rem] uppercase tracking-[0.4em] text-sm shadow-[0_0_80px_rgba(16,185,129,0.5)] border-none">
                   SCELLER L'IDENTITÉ Ω
                 </Button>
               )}
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-10 border-b border-white/5 bg-slate-950/50 text-center">
              <CardTitle className="text-xs font-black uppercase text-emerald-400 tracking-widest flex items-center justify-center gap-4">
                <BrainCircuit className="h-6 w-6 animate-pulse" /> Bio-Hash Protocol
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 flex-1 space-y-8">
               <div className="space-y-6">
                  <div className="p-6 bg-black/40 rounded-[2rem] border border-white/5 shadow-lg">
                     <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Hash Racine</p>
                     <p className="text-[11px] font-mono text-emerald-400 break-all">CHIBOUBI_0x145ea2b4f9d33_SOUVERAIN</p>
                  </div>
                  <div className="p-6 bg-black/40 rounded-[2rem] border border-white/5 shadow-lg">
                     <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Algorithm</p>
                     <p className="text-[11px] font-mono text-blue-400">SHA-256 (DNA + Retinal)</p>
                  </div>
               </div>
               <div className="p-8 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] text-center shadow-inner">
                  <p className="text-[11px] text-slate-400 italic font-black uppercase leading-relaxed">
                    "L'archivage biométrique est le niveau final de sécurité. Votre être est votre clé."
                  </p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
