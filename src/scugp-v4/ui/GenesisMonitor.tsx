"use client"

import React, { useState, useEffect } from 'react';
import { Database, Globe, Activity, Layers, Terminal, Anchor, FileText, User, CheckCircle2, ShieldCheck, Key, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SCUGP_4_0_GENESIS, BlockchainLedger, type Decision } from '../core/BlockchainLedger';
import { ProjectSheetV4 } from '../core/ProjectSheet';
import { useToast } from '@/hooks/use-toast';
import { BlockchainMonitor } from '@/components/scugp/v4/BlockchainMonitor';
import { TrainingSimulator, type ScenarioId } from '../training/Simulator';
import { TrainingStep } from '@/components/scugp/v4/TrainingPopup';

export const GenesisMonitor = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "🔐 Initialisation du Registre Immuable SCUGP 4.0...",
    "✅ Bloc de genèse créé (Chain ID 2026)",
    "💎 Toutes les dimensions D1-D11 sont désormais actives.",
    "🚀 Réseau SCUGP 4.0 prêt pour le déploiement."
  ]);

  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [newDecision, setNewDecision] = useState({ id: '', desc: '', hash: '' });
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDecisions(BlockchainLedger.getAllDecisions());
  }, []);

  const handleAnchor = () => {
    if (!newDecision.id || !newDecision.desc || !newDecision.hash) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "All fields are required to anchor a decision."
      });
      return;
    }

    const decisionId = parseInt(newDecision.id);
    const anchored = BlockchainLedger.anchorDecision(
      decisionId,
      newDecision.desc,
      newDecision.hash,
      "DR_PIERRE_P_ADMIN"
    );

    setDecisions(BlockchainLedger.getAllDecisions());
    setLogs(prev => [...prev, `⚓ Decision ${anchored.id} anchored to the ledger.`]);
    setNewDecision({ id: '', desc: '', hash: '' });

    toast({
      title: "Decision Anchored",
      description: `Decision #${anchored.id} has been sealed on the SCUGP 4.0 Ledger.`
    });
  };

  const startSimulation = (type: ScenarioId) => {
    setIsSimulating(true);
    const result = TrainingSimulator.startIncidentScenario(type);
    setLogs(prev => [...prev, `⚠️ SIMULATION START: ${type}`, `🎯 Expected: ${result.expectedActions.join(', ')}`]);
    
    toast({
      title: "Simulation Started",
      description: `Testing response for ${type} scenario.`,
    });

    setTimeout(() => setIsSimulating(false), 5000);
  };

  const integrityStatus = BlockchainLedger.verifyIntegrity();

  return (
    <div className="flex flex-col gap-6 p-1 bg-slate-950 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-900/50 border-cyan-500/30 text-white shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <CardHeader className="border-b border-slate-800">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <Database className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-black tracking-tighter text-cyan-400 uppercase">Genesis Block 4.0 (11D Mode)</CardTitle>
                    <CardDescription className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Full Dimensional Steering Enabled</CardDescription>
                  </div>
                </div>
                <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 font-mono">CHAIN_ID: {SCUGP_4_0_GENESIS.chainId}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Globe className="h-3 w-3" /> Project Identity
                    </h3>
                    <div className="p-4 bg-black/40 rounded-xl border border-slate-800">
                      <p className="text-sm font-bold text-cyan-400">{ProjectSheetV4.identity.name}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">ID: {ProjectSheetV4.identity.id}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold mt-2">Client: {ProjectSheetV4.identity.client}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-[8px] border-slate-700 text-slate-400">{ProjectSheetV4.identity.geo.type}</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Activity className="h-3 w-3" /> Strategic Objectives
                    </h3>
                    <div className="space-y-2">
                      {ProjectSheetV4.strategicObjectives.map((obj, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-slate-950/50 rounded border border-slate-800">
                          <span className="text-[10px] font-bold text-slate-300">{obj.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-emerald-500">{obj.target}</span>
                            <span className="text-[8px] text-slate-600 font-mono">w:{obj.weight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2 text-amber-500">
                      <Layers className="h-3 w-3" /> 11D Activated Dimensions
                    </h3>
                    <div className="grid grid-cols-1 gap-1.5 p-3 bg-black/20 rounded-xl border border-slate-800/50 max-h-64 overflow-y-auto">
                      {Object.entries(ProjectSheetV4.activatedDimensions).map(([dim, data]) => (
                        <div key={dim} className="flex items-center justify-between p-1.5 bg-slate-900/50 rounded border border-slate-800 hover:border-cyan-500/30 transition-all group">
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black text-cyan-400 group-hover:text-cyan-300">{dim.replace('_', ' ')}</span>
                            <span className="text-[7px] text-slate-500 italic">{data.desc}</span>
                          </div>
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/80 rounded-xl p-5 border border-slate-800 font-mono text-[10px] space-y-2">
                <div className="flex justify-between border-b border-slate-800/50 pb-2 mb-2">
                  <span className="text-slate-500">CONSORTIUM_ALLOCATION</span>
                  <span className="text-cyan-400">AUTHORIZED</span>
                </div>
                {Object.entries(SCUGP_4_0_GENESIS.alloc).map(([admin, details]) => (
                  <div key={admin} className="flex justify-between items-center">
                    <span className="text-slate-400">{admin}</span>
                    <span className="text-emerald-500 font-bold">{details.balance} GAS</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800 group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Key className="h-4 w-4 text-amber-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">RSA Key Pair</span>
                    </div>
                    <p className="text-xs font-mono text-slate-300">4096-bit SHA256</p>
                    <p className="text-[9px] text-emerald-500/70 font-bold mt-1 uppercase">Ready for Deployment</p>
                 </div>
                 <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800 group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-4 w-4 text-cyan-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Homestead Block</span>
                    </div>
                    <p className="text-xs font-mono text-slate-300">0x000000000</p>
                    <p className="text-[9px] text-cyan-500/70 font-bold mt-1 uppercase">Difficulty: {SCUGP_4_0_GENESIS.difficulty}</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Card className="bg-slate-950/40 border-slate-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xs font-black text-cyan-500 uppercase">Resilience Simulator</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-[10px] justify-start gap-2 border-red-500/30 text-red-400 hover:bg-red-500/10"
                        onClick={() => startSimulation("OFFSHORE_LEAK")}
                        disabled={isSimulating}
                      >
                        <AlertTriangle className="h-3 w-3" /> Start Offshore Leak Scenario
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-[10px] justify-start gap-2 border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                        onClick={() => startSimulation("CYBER_ATTACK")}
                        disabled={isSimulating}
                      >
                        <ShieldCheck className="h-3 w-3" /> Start Cyber Attack Scenario
                      </Button>
                    </CardContent>
                 </Card>
                 <div className="flex flex-col justify-center">
                    <TrainingStep />
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-black border-slate-800 shadow-xl overflow-hidden">
            <CardHeader className="bg-slate-900/50 pb-3 border-b border-slate-800">
              <CardTitle className="text-xs flex items-center gap-2 text-slate-400 uppercase tracking-widest font-black">
                <Terminal className="h-4 w-4" />
                Node Console
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-40 overflow-y-auto space-y-2 font-mono text-[9px]">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2 text-emerald-400/80">
                    <span className="opacity-30">[{mounted ? new Date().toLocaleTimeString() : '--:--:--'}]</span>
                    <p>{log}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <BlockchainMonitor />

          <Card className="bg-slate-900/40 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Consensus Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-lg font-black font-mono text-emerald-500">{integrityStatus.status}</p>
                  <p className="text-[8px] text-slate-600 uppercase font-bold tracking-tighter">{integrityStatus.consensus}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
              </div>
              <div className="p-2 bg-black/40 rounded border border-slate-800">
                <p className="text-[8px] text-slate-500 font-bold mb-1 uppercase">Active Validators</p>
                <div className="flex gap-1">
                  {integrityStatus.activeValidators.map(v => (
                    <Badge key={v} className="text-[7px] bg-slate-800 text-slate-400 border-none">{v}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900/40 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase text-cyan-400 flex items-center gap-2">
              <Anchor className="h-4 w-4" /> Anchor New Decision
            </CardTitle>
            <CardDescription className="text-[10px] uppercase font-bold">ScugpDecisionRegistry Interface</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 space-y-2">
                <Label className="text-[10px] uppercase text-slate-500">ID</Label>
                <Input 
                  value={newDecision.id} 
                  onChange={(e) => setNewDecision({...newDecision, id: e.target.value})}
                  className="bg-black border-slate-800 text-xs h-8 font-mono"
                  placeholder="ID"
                />
              </div>
              <div className="col-span-3 space-y-2">
                <Label className="text-[10px] uppercase text-slate-500">Document Hash (IPFS)</Label>
                <Input 
                  value={newDecision.hash} 
                  onChange={(e) => setNewDecision({...newDecision, hash: e.target.value})}
                  className="bg-black border-slate-800 text-xs h-8 font-mono"
                  placeholder="Qm..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase text-slate-500">Description</Label>
              <Input 
                value={newDecision.desc} 
                onChange={(e) => setNewDecision({...newDecision, desc: e.target.value})}
                className="bg-black border-slate-800 text-xs h-8 font-mono"
                placeholder="Decision description..."
              />
            </div>
            <Button onClick={handleAnchor} className="w-full bg-cyan-600 hover:bg-cyan-700 h-8 text-[10px] font-black uppercase tracking-widest">
              Seal on Ledger
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/40 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase text-slate-400 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Anchored Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800">
              {decisions.map((d) => (
                <div key={d.id} className="p-3 bg-black/60 rounded-lg border border-slate-800 group hover:border-cyan-500/20 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[9px] font-mono border-cyan-500/30 text-cyan-400">ID: {d.id}</Badge>
                      <span className="text-[8px] text-slate-600 font-mono">{mounted ? new Date(d.timestamp).toLocaleString() : '...'}</span>
                    </div>
                    <div className="flex gap-1">
                      {d.validatedHSE && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
                      <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-slate-200 mb-1">{d.description}</h4>
                  <div className="flex items-center gap-2 text-[9px] text-slate-500 font-mono overflow-hidden">
                    <User className="h-2 w-2" />
                    <span className="truncate">{d.initiator}</span>
                    <span className="text-slate-700">|</span>
                    <span className="truncate text-cyan-700/60">{d.documentHash}</span>
                  </div>
                </div>
              ))}
              {decisions.length === 0 && (
                <div className="text-center py-10 text-slate-700 italic text-[10px] uppercase tracking-widest border border-dashed border-slate-800 rounded-lg">
                  No decisions anchored yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};