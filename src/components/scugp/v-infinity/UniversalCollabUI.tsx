
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Share2, Globe, Landmark, Rocket, Sparkles, ShieldCheck, Activity } from "lucide-react";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";

export const UniversalCollabUI = () => {
  const network = SCUGPHubUltimate.getCollaborationNetwork();

  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center gap-6 text-center">
        <Users className="h-16 w-16 text-purple-500 animate-bounce" />
        <h2 className="text-6xl font-black uppercase tracking-[0.4em]">Réseau de Collaboration Inter-Universel</h2>
        <p className="text-slate-500 text-xl uppercase font-bold tracking-widest">Maillage Diplomatique & Technique Mondial</p>
      </div>

      <Card className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden shadow-5xl">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="bg-slate-950 text-slate-500 font-black uppercase tracking-widest">
                <tr>
                  <th className="p-10 border-b border-white/5">Niveau</th>
                  <th className="p-10 border-b border-white/5">Organisations</th>
                  <th className="p-10 border-b border-white/5">Domaine</th>
                  <th className="p-10 border-b border-white/5 text-right">Statut Sync</th>
                </tr>
              </thead>
              <tbody>
                {network.map((n, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                    <td className="p-10 font-black text-purple-400 uppercase tracking-widest italic">{n.level}</td>
                    <td className="p-10 font-bold text-white uppercase tracking-tighter">{n.orgs}</td>
                    <td className="p-10 text-slate-400 font-bold uppercase">{n.domain}</td>
                    <td className="p-10 text-right">
                      <Badge className={cn(
                        "px-6 py-2 rounded-full font-black text-[9px] border-none uppercase tracking-widest",
                        n.status === 'FEDERATED' ? "bg-blue-600" : n.status === 'SYNCED' ? "bg-emerald-600" : "bg-slate-800"
                      )}>{n.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
