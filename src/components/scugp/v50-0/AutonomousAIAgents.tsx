
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, FileText, Calendar, ShieldAlert, Zap, Loader2, RefreshCw } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";

export const AutonomousAIAgents = () => {
  const status = SCUGPHubUltimate.getAIAgentsStatus();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Agent de Reporting */}
      <Card className="bg-slate-900 border-blue-500/30 text-white shadow-xl rounded-[2rem] overflow-hidden group">
        <CardHeader className="bg-blue-500/10 border-b border-white/5 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xs font-black uppercase text-blue-400 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Agent de Reporting
            </CardTitle>
            <Badge className="bg-blue-600 text-[8px] uppercase">{status.reporting.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl border border-white/5">
            <Calendar className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-black">Prochaine Compil</p>
              <p className="text-sm font-bold text-white">{status.reporting.lastReport}</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 italic">"Compilation automatique des emails, Jira et SAP pour le COPIL de lundi."</p>
          <div className="flex items-center justify-between text-[9px] font-mono text-blue-400">
            <span>Sources analysées</span>
            <span>{status.reporting.dataSources} Flux</span>
          </div>
        </CardContent>
      </Card>

      {/* Agent de Planification */}
      <Card className="bg-slate-900 border-purple-500/30 text-white shadow-xl rounded-[2rem] overflow-hidden group">
        <CardHeader className="bg-purple-500/10 border-b border-white/5 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-2">
              <Zap className="h-4 w-4" /> Agent de Planif
            </CardTitle>
            <Badge className="bg-purple-600 text-[8px] uppercase">{status.planning.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl border border-white/5">
            <RefreshCw className="h-8 w-8 text-purple-500 animate-spin-slow" />
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-black">Dérive Détectée</p>
              <p className="text-sm font-bold text-white">{status.planning.driftDetected}</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 italic">"Ajustement dynamique des échéances et suggestion de ressources alternatives."</p>
          <div className="flex items-center justify-between text-[9px] font-mono text-purple-400">
            <span>Resource Leveling</span>
            <span>{status.planning.resourceAlt}</span>
          </div>
        </CardContent>
      </Card>

      {/* Agent de Veille */}
      <Card className="bg-slate-900 border-red-500/30 text-white shadow-xl rounded-[2rem] overflow-hidden group">
        <CardHeader className="bg-red-500/10 border-b border-white/5 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xs font-black uppercase text-red-400 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4" /> Agent de Veille 24/7
            </CardTitle>
            <Badge className="bg-red-600 text-[8px] uppercase">{status.watchdog.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl border border-white/5">
            <Loader2 className="h-8 w-8 text-red-500 animate-spin" />
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-black">Alertes Actives</p>
              <p className="text-sm font-bold text-white">{status.watchdog.riskAlerts} Alerte</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 italic">"Surveillance des risques critiques et prédiction des défaillances via GNN."</p>
          <div className="flex items-center justify-between text-[9px] font-mono text-red-400">
            <span>Uptime Surveillé</span>
            <span>{status.watchdog.uptime}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
