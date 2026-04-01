"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * CollaborationPortal component
 * Visualizes the unified contractual portal for EPC, sub-contractors, and governance.
 */
export const CollaborationPortal = () => (
  <Card className="border-t-4 border-t-amber-500 shadow-sm overflow-hidden">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg font-bold">Portail Contractuel Unifié</CardTitle>
      <CardDescription className="text-xs">Multi-contributeurs : EPC, Sous-traitants, Gouvernance</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex -space-x-2 overflow-hidden p-2 mb-4">
        {/* Partner avatars/chips */}
        {['Total', 'EPC', 'SCUGP', 'ISO'].map((partner) => (
          <div 
            key={partner} 
            className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-background bg-secondary text-[8px] font-extrabold shadow-sm transition-transform hover:scale-110 cursor-default"
            title={partner}
          >
            {partner}
          </div>
        ))}
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-background bg-muted text-[10px] font-bold text-muted-foreground shadow-sm">
          +3
        </div>
      </div>
      <div className="mt-4 text-[11px] bg-secondary/50 p-3 rounded-lg border border-dashed border-amber-500/30 italic text-muted-foreground leading-relaxed">
        "Réduction du temps d'approbation documentaire de 60% activée."
      </div>
    </CardContent>
  </Card>
);
