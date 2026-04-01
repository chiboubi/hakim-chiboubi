"use client"

import React, { useState } from 'react';
import { AlertTriangle, Snowflake, Droplets, Zap, ShieldAlert, ChevronRight, RefreshCcw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";

const SCENARIOS = [
  {
    id: 'ICE_PRESSURE',
    title: 'Critical Glacial Pressure',
    description: 'The AI GeoPredictor+ module detects a massive iceberg drift towards the production riser.',
    options: [
      { text: 'Activate thermal shield and deflect', impact: { opex: 10, safety: 90 }, feedback: 'Effective but expensive.' },
      { text: 'Emergency Disconnect (EDS)', impact: { opex: 50, safety: 100 }, feedback: 'Total safety, major production loss.' },
      { text: 'Maintain position and break ice', impact: { opex: 5, safety: 40 }, feedback: 'High risk of structural failure!' }
    ]
  },
  {
    id: 'HYBRID_FAILURE',
    title: 'Hydrogen/LNG Flux Instability',
    description: 'The Carbon Adaptive Loop signals a pressure drop in the cryogenic heat exchanger.',
    options: [
      { text: 'Switch 100% to LNG', impact: { carbon: 25, stability: 80 }, feedback: 'Stability restored, carbon footprint increasing.' },
      { text: 'Rebalance via AI Predictor', impact: { carbon: 0, stability: 95 }, feedback: 'Optimization successful according to SCUGP standard.' }
    ]
  }
];

export function ArcticCrisisSimulator() {
  const db = useFirestore();
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState({ safety: 100, opex: 0, carbon: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const handleDecision = async (option: any) => {
    const newScore = {
      safety: Math.max(0, score.safety - (100 - (option.impact.safety || 100))),
      opex: score.opex + (option.impact.opex || 0),
      carbon: score.carbon + (option.impact.carbon || 0)
    };
    setScore(newScore);

    if (currentStep < SCENARIOS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
      // Sync with Firestore for academic records
      if (db) {
        SCUGPHubUltimate.logAcademicActivity(db, "STUDENT_V60", "ACS_SIMULATION_COMPLETED", {
          finalScore: newScore,
          timestamp: new Date().toISOString()
        });
      }
    }
  };

  return (
    <Card className="w-full border-2 border-slate-800 bg-slate-950 text-white shadow-2xl overflow-hidden">
      <CardHeader className="border-b border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <ShieldAlert className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-xl">SCUGP Arctic Crisis Simulator</CardTitle>
            <CardDescription className="text-slate-400">V60 Academic Crisis Management Module</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {!isFinished ? (
          <div className="space-y-6">
            <Alert variant="destructive" className="bg-red-900/20 border-red-900/50">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="font-bold text-red-400">SYSTEM ALERT: {SCENARIOS[currentStep].title}</AlertTitle>
              <AlertDescription className="text-slate-300">{SCENARIOS[currentStep].description}</AlertDescription>
            </Alert>

            <div className="grid gap-3">
              {SCENARIOS[currentStep].options.map((opt, idx) => (
                <Button 
                  key={idx} 
                  variant="outline" 
                  className="justify-between h-auto py-4 px-6 border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-amber-500 text-slate-200 transition-all text-left"
                  onClick={() => handleDecision(opt)}
                >
                  <span className="flex-1">{opt.text}</span>
                  <ChevronRight className="w-4 h-4 ml-4 opacity-50" />
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <StatBox icon={<Snowflake className="text-cyan-400" />} label="Safety" value={`${score.safety}%`} />
              <StatBox icon={<Zap className="text-amber-400" />} label="OpEx Cost" value={`+${score.opex}%`} />
              <StatBox icon={<Droplets className="text-emerald-400" />} label="CO2 Impact" value={`+${score.carbon}%`} />
            </div>
          </div>
        ) : (
          <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="inline-flex p-4 bg-emerald-500/20 rounded-full border border-emerald-500/50 mb-2">
               <ShieldAlert className="w-12 h-12 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-emerald-500">Simulation Completed</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">Your strategic decisions have been indexed in the SCUGP Academic Hub for evaluation against ISO 14083 standards.</p>
            
            <div className="grid grid-cols-2 gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800 max-w-md mx-auto text-left">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500">Safety Performance</p>
                <p className="text-2xl font-mono text-white">{score.safety}%</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500">ISO 14083 Compliance</p>
                <p className="text-2xl font-mono text-emerald-400">{100 - score.carbon}%</p>
              </div>
            </div>
            
            <Button 
              onClick={() => {
                setCurrentStep(0);
                setScore({ safety: 100, opex: 0, carbon: 0 });
                setIsFinished(false);
              }}
              variant="secondary"
              className="gap-2"
            >
              <RefreshCcw className="h-4 w-4" />
              Restart Module
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function StatBox({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="text-center p-3 bg-slate-900/50 rounded-lg border border-slate-800/50">
      <div className="flex justify-center mb-1">{icon}</div>
      <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">{label}</p>
      <p className="text-lg font-mono font-bold">{value}</p>
    </div>
  );
}
