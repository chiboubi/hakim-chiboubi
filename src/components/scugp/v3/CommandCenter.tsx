import React from 'react';
import { Mic, Zap, ShieldCheck, Globe, Database, Plane, Target } from 'lucide-react';
import { DroneFeed } from './DroneFeed';

/**
 * CommandCenterV3 component
 * A futuristic dashboard for SCUGP 3.0 ESG+ Intelligence.
 * Certified by Dr. Pierre Ponselle.
 */
export const CommandCenterV3 = () => (
  <div className="bg-[#040d1a] text-white p-8 rounded-2xl border border-cyan-900/30 shadow-2xl font-sans">
    {/* Header Professionnel */}
    <div className="flex justify-between items-center border-b border-cyan-900/50 pb-6 mb-8">
      <div>
        <h1 className="text-3xl font-black tracking-tighter text-cyan-400 flex items-center gap-2">
          SCUGP 3.0 <span className="text-emerald-500">ESG+</span>
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Unified Collaborative Project Management System</p>
      </div>
      <div className="flex gap-4">
        <div className="text-right">
          <p className="text-[9px] text-slate-500">Version certifiée :</p>
          <p className="text-xs font-mono text-amber-500">Dr. Pierre Ponselle - V3.0-PREDICT</p>
        </div>
        <div className="h-10 w-10 bg-cyan-500/10 border border-cyan-500/50 rounded flex items-center justify-center">
          <Mic className="text-cyan-400 animate-pulse h-5 w-5" />
        </div>
      </div>
    </div>

    {/* Grille de KPIs Spécifiques 3.0 */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {[
        { code: "RGI", label: "Résilience", val: "94%", color: "text-blue-400" },
        { code: "FRV", label: "Maturité Doc", val: "12.5", color: "text-amber-400" },
        { code: "CESI", label: "ESG Score", val: "A+", color: "text-emerald-400" },
        { code: "BCI", label: "Collaboration", val: "0.88", color: "text-purple-400" },
        { code: "TSDR", label: "Sync IoT", val: "0.4s", color: "text-cyan-400" }
      ].map((kpi) => (
        <div key={kpi.code} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg hover:border-cyan-500/30 transition-colors">
          <p className="text-[9px] font-bold text-slate-500">{kpi.code}</p>
          <p className={`text-2xl font-black ${kpi.color}`}>{kpi.val}</p>
          <p className="text-[8px] text-slate-600 uppercase mt-1 tracking-wider">{kpi.label}</p>
        </div>
      ))}
    </div>

    {/* Zone d'Interopérabilité & 7D Simulation */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-slate-900/30 border border-cyan-900/20 rounded-xl p-4 min-h-[400px] flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute top-4 left-4 flex items-center gap-2 z-30">
          <Target className="h-4 w-4 text-cyan-500 animate-pulse" />
          <span className="text-[9px] font-mono text-cyan-500 uppercase font-black">AI Visual Inspection Active</span>
        </div>
        
        <div className="relative z-10 w-full">
          <DroneFeed />
          
          <div className="mt-6 flex gap-8 justify-center">
            <div className="text-center p-3 bg-slate-950/40 rounded-lg border border-slate-800">
              <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Conformité BIM</p>
              <p className="text-sm font-mono text-emerald-500 font-bold">88.2%</p>
            </div>
            <div className="text-center p-3 bg-slate-950/40 rounded-lg border border-slate-800">
              <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Alertes Corrosion</p>
              <p className="text-sm font-mono text-red-500 font-bold">01</p>
            </div>
            <div className="text-center p-3 bg-slate-950/40 rounded-lg border border-slate-800">
              <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Sync IFC/BIM</p>
              <p className="text-sm font-mono text-cyan-400 font-bold">NOMINAL</p>
            </div>
          </div>
        </div>

        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-emerald-500 font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-widest">
            <ShieldCheck size={16} /> Audit Continu
          </h3>
          <div className="space-y-4 text-[10px] font-mono">
            <div className="flex justify-between items-center border-b border-emerald-500/10 pb-2">
              <span className="text-emerald-300/70">ISO 27001</span>
              <span className="text-emerald-400 font-bold">COMPLIANT</span>
            </div>
            <div className="flex justify-between items-center border-b border-emerald-500/10 pb-2">
              <span className="text-emerald-300/70">AES-256</span>
              <span className="text-emerald-400 font-bold">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-emerald-300/70 uppercase">Souveraineté</span>
              <span className="text-emerald-400 font-bold">CLOUD NATIONAL</span>
            </div>
          </div>
        </div>
        <div className="mt-8 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded text-[9px] text-emerald-400/60 italic leading-relaxed">
          "La souveraineté numérique est la condition de l'autonomie stratégique."
        </div>
      </div>
    </div>
  </div>
);
