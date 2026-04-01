"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Brain, Zap, ClipboardCheck } from "lucide-react";

const raciData = [
  { deliverable: "IT_Infrastructure_BIM", pm: "A", it_int: "R", it_ext: "C", business: "I", ai_rec: "Verified" },
  { deliverable: "SAP_API_Gateway", pm: "R", it_int: "A", it_ext: "R", business: "C", ai_rec: "Match: 99%" },
  { deliverable: "User_UAT_Portal", pm: "I", it_int: "C", it_ext: "A", business: "R", ai_rec: "Assigned" },
  { deliverable: "Governance_Ledger_v4", pm: "C", it_int: "I", it_ext: "R", business: "A", ai_rec: "Optimized" },
];

export const DynamicRACI = () => (
  <Card className="bg-slate-900 border-slate-800 text-white">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="text-sm font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4" /> Dynamic Deliverable RACI
          </CardTitle>
          <CardDescription className="text-[10px] uppercase font-bold text-slate-500">Clear Role Assignment for IT & Business Actors</CardDescription>
        </div>
        <Badge variant="outline" className="border-amber-500/30 text-amber-500 text-[8px]">
          <Brain className="h-2 w-2 mr-1" /> SMART ASSIGNMENT ACTIVE
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader className="border-slate-800">
          <TableRow className="hover:bg-transparent border-slate-800">
            <TableHead className="text-[9px] font-black uppercase text-slate-500">Deliverable</TableHead>
            <TableHead className="text-[9px] font-black uppercase text-slate-500 text-center">PM</TableHead>
            <TableHead className="text-[9px] font-black uppercase text-slate-500 text-center">IT INT</TableHead>
            <TableHead className="text-[9px] font-black uppercase text-slate-500 text-center">IT EXT</TableHead>
            <TableHead className="text-[9px] font-black uppercase text-slate-500 text-center">BUSINESS</TableHead>
            <TableHead className="text-[9px] font-black uppercase text-amber-500">AI REC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {raciData.map((row, i) => (
            <TableRow key={i} className="border-slate-800 hover:bg-slate-800/30 transition-colors">
              <TableCell className="text-[10px] font-bold py-2">{row.deliverable}</TableCell>
              <TableCell className="text-center"><Badge variant="outline" className="text-[8px] border-blue-500/20 text-blue-400">{row.pm}</Badge></TableCell>
              <TableCell className="text-center"><Badge variant="outline" className="text-[8px] border-cyan-500/20 text-cyan-400">{row.it_int}</Badge></TableCell>
              <TableCell className="text-center"><Badge variant="outline" className="text-[8px] border-purple-500/20 text-purple-400">{row.it_ext}</Badge></TableCell>
              <TableCell className="text-center"><Badge variant="outline" className="text-[8px] border-emerald-500/20 text-emerald-400">{row.business}</Badge></TableCell>
              <TableCell className="text-[9px] font-mono text-amber-200/60 italic flex items-center gap-1">
                <Zap className="h-2 w-2 text-amber-500" /> {row.ai_rec}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);
