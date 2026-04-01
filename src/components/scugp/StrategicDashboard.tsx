"use client"

import React, { useState } from 'react';
import { BarChart3, Link, Globe, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlanningConnector } from "@/scugp-core/operations/PlanningConnector";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/**
 * StrategicDashboard component
 * Visualizes high-level strategic KPIs for maturity, Zinia compliance, and interoperability.
 */
export const StrategicDashboard = () => {
  const { toast } = useToast();
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(null);

  const handleSync = async (source: string) => {
    setIsSyncing(true);
    try {
      const result = await PlanningConnector.syncExternalData(source);
      setLastSync(result.lastSync);
      toast({
        title: "Interop Sync Successful",
        description: `Synchronized with ${source} (${result.versioning})`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sync Failed",
        description: "Could not establish secure handshake with external ERP.",
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900 border border-slate-700 rounded-xl shadow-lg relative overflow-hidden">
      <div className="flex flex-col gap-1 p-2">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="h-3 w-3 text-blue-400" />
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Maturité Collaborative (IMC)</span>
        </div>
        <div className="text-xl font-black text-blue-400 font-mono">0.88 / 1.0</div>
        <div className="text-[8px] text-slate-600 uppercase">Target: 0.85</div>
      </div>
      
      <div className="flex flex-col gap-1 border-y md:border-y-0 md:border-x border-slate-800 px-4 py-2 md:py-0">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="h-3 w-3 text-emerald-500" />
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Conformité Zinia (TCD)</span>
        </div>
        <div className="text-xl font-black text-emerald-500 font-mono">92.4%</div>
        <div className="text-[8px] text-slate-600 uppercase">Zinia Phase 2 Active</div>
      </div>

      <div className="flex flex-col gap-1 p-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Link className="h-3 w-3 text-orange-400" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Interop SAP/Primavera</span>
          </div>
          {lastSync && (
            <span className="text-[8px] text-emerald-500 font-mono animate-pulse flex items-center gap-1">
              <CheckCircle2 size={8} /> LIVE
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 p-0 hover:bg-transparent" 
            onClick={() => handleSync('SAP')}
            disabled={isSyncing}
          >
            <Badge className={cn("text-[8px] border-none px-2 h-4 cursor-pointer hover:opacity-80 transition-opacity", isSyncing ? "bg-slate-700" : "bg-blue-600")}>
              {isSyncing ? <RefreshCw size={8} className="animate-spin mr-1" /> : null}
              SAP SYNC
            </Badge>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 p-0 hover:bg-transparent" 
            onClick={() => handleSync('PRIMAVERA')}
            disabled={isSyncing}
          >
            <Badge className={cn("text-[8px] border-none px-2 h-4 cursor-pointer hover:opacity-80 transition-opacity", isSyncing ? "bg-slate-700" : "bg-orange-600")}>
              {isSyncing ? <RefreshCw size={8} className="animate-spin mr-1" /> : null}
              P6 ACTIVE
            </Badge>
          </Button>
        </div>
        <div className="text-[8px] text-slate-600 uppercase mt-1">
          {lastSync ? `Last Sync: ${new Date(lastSync).toLocaleTimeString()}` : "Status: Operational"}
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 mt-2 p-2 bg-blue-500/5 border border-blue-500/20 rounded-lg">
        <div className="flex items-center gap-2 text-[10px] text-blue-300 italic">
          <Globe size={12} className="opacity-70" />
          Module Multilingue : Français / Anglais / Portugais (Zinia Angola Edition)
        </div>
      </div>
    </div>
  );
};
