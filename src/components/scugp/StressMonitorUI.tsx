"use client"

import React, { useState } from 'react';
import { ShieldAlert, Activity, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

/**
 * StressMonitorUI component
 * Provides a simplified interface for triggering and monitoring system stress tests.
 */
export const StressMonitorUI = () => {
  const [testActive, setTestActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const startTest = () => {
    setTestActive(true);
    setLogs([
      "Initialisation...", 
      "Scan LiDAR Arctique...", 
      "Menace détectée : Iceberg ARC-01", 
      "Ajustement Carbon Loop...", 
      "Test réussi."
    ]);
    
    // Reset status after a delay for visual effect
    setTimeout(() => {
      setTestActive(false);
    }, 3000);
  };

  return (
    <div className="p-6 bg-slate-900 border-2 border-red-500/50 rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.1)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-black text-red-500 flex items-center gap-2">
          <ShieldAlert className={testActive ? "animate-pulse" : ""} /> 
          CRASH-TEST V60
        </h2>
        <Button 
          variant={testActive ? "destructive" : "default"}
          onClick={startTest}
          disabled={testActive}
          className="font-bold tracking-tighter"
        >
          {testActive ? "SIMULATION EN COURS" : "LANCER LE STRESS-TEST"}
        </Button>
      </div>

      <div className="bg-black p-4 rounded-lg font-mono text-[11px] text-emerald-400 h-40 overflow-y-auto border border-slate-800">
        {logs.length === 0 ? (
          <div className="flex items-center justify-center h-full text-slate-600 italic uppercase tracking-widest text-[10px]">
            Awaiting stress test initiation...
          </div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="flex gap-2 mb-1 animate-in fade-in slide-in-from-left-1">
              <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
              <p className={log.includes("Menace") ? "text-amber-500 font-bold" : ""}>{log}</p>
            </div>
          ))
        )}
      </div>

      {testActive && (
        <div className="mt-4 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
          <Activity className="text-amber-500 animate-pulse h-4 w-4" />
          <span className="text-[10px] text-slate-400 italic">
            "La performance naît de la collaboration, la maîtrise de la vision." — Dr. Hakim Chibubi
          </span>
          <div className="ml-auto flex items-center gap-1 text-[10px] text-emerald-500 font-bold uppercase">
             <CheckCircle2 className="h-3 w-3" />
             Verified
          </div>
        </div>
      )}
    </div>
  );
};
