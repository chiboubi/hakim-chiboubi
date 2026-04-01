"use client"

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * VersionBadge component
 * Displays a styled badge indicating the system version.
 */
export const VersionBadge = ({ version }: { version: string }) => (
  <div className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${
    version === '4.0' ? 'bg-purple-500 text-white animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-slate-700 text-slate-300'
  }`}>
    VERSION {version}
  </div>
);

const comparisonHighlights = [
  { feature: "Architecture", v35: "Monolithique", v40: "Microservices (Docker/K8s)" },
  { feature: "IA", v35: "Non intégrée", v40: "Prédiction retards & Génération CR" },
  { feature: "Gouvernance", v35: "6D", v40: "11D + Blockchain" }
];

/**
 * VersionComparison component
 * Compares technical capabilities between SCUGP v3.5 and v4.0.
 */
export const VersionComparison = () => {
  return (
    <Card className="bg-slate-900/50 border-slate-800 text-white backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Roadmap Interopérabilité</CardTitle>
            <CardDescription className="text-[10px] text-slate-500 uppercase font-bold">Analyse comparative des standards de pilotage</CardDescription>
          </div>
          <VersionBadge version="4.0" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="border-slate-800">
            <TableRow className="hover:bg-transparent border-slate-800">
              <TableHead className="text-[9px] font-black uppercase text-slate-500 h-8">Spécification</TableHead>
              <TableHead className="text-[9px] font-black uppercase text-slate-400 h-8">Standard 3.5</TableHead>
              <TableHead className="text-[9px] font-black uppercase text-purple-400 h-8">Quantum 4.0</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonHighlights.map((row, i) => (
              <TableRow key={i} className="border-slate-800 hover:bg-slate-800/30 transition-colors h-10">
                <TableCell className="text-[10px] font-bold text-slate-300 py-2">{row.feature}</TableCell>
                <TableCell className="text-[10px] text-slate-500 py-2">{row.v35}</TableCell>
                <TableCell className="text-[10px] font-black text-purple-300 py-2">{row.v40}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
          <p className="text-[9px] text-purple-300 leading-relaxed italic text-center">
            "Le passage au Quantum 4.0 permet une décomposition granulaire des services pour une scalabilité mondiale."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
