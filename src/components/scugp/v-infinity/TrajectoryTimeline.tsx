'use client';

import React, { useMemo } from 'react';
import { SCUGPHubUltimate } from '@/lib/scugp-service';
import { motion } from 'framer-motion';
import { MapPin, Star, History, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const TrajectoryTimeline = () => {
  const bio = SCUGPHubUltimate.getBiography();

  const eras = [
    { id: 'formation', label: 'Formation Fondamentale', color: 'border-blue-500' },
    { id: 'doctorat', label: 'Ascension Doctorale', color: 'border-purple-500' },
    { id: 'recherche', label: 'Innovation & Recherche', color: 'border-emerald-500' },
    { id: 'international', label: 'Rayonnement Mondial', color: 'border-amber-500' }
  ];

  return (
    <div className="relative py-20 px-10">
      {/* Central Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-amber-500 opacity-20" />
      
      <div className="space-y-32">
        {bio.timeline.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={cn(
              "flex items-center gap-12 relative z-10",
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
          >
            {/* Year Node */}
            <div className="w-1/2 flex justify-end">
               <div className={cn(
                 "p-10 rounded-[3rem] bg-slate-900 border-2 shadow-3xl max-w-lg transition-all hover:scale-105 group",
                 eras.find(e => e.id === item.era)?.color || 'border-white/10',
                 i % 2 === 0 ? "text-right items-end" : "text-left items-start flex flex-col"
               )}>
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar size={16} className="text-slate-500" />
                    <span className="text-4xl font-black font-mono text-white block group-hover:text-blue-300">{item.year}</span>
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">{item.event}</h4>
                  <div className={cn("flex items-center gap-3 text-slate-500", i % 2 === 0 ? "justify-end" : "justify-start")}>
                     <MapPin size={14} className="text-blue-500" />
                     <span className="text-[10px] font-black uppercase tracking-widest">{item.loc}</span>
                  </div>
                  <Badge variant="outline" className="mt-6 border-white/5 text-[8px] uppercase tracking-widest">ERA: {item.era}</Badge>
               </div>
            </div>

            {/* Pivot Point */}
            <div className="relative flex items-center justify-center">
               <div className="h-12 w-12 rounded-full bg-slate-900 border-4 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <Star size={16} className="text-blue-400 animate-pulse" />
               </div>
               <div className="absolute h-px w-24 bg-white/10" />
            </div>

            {/* Spacer */}
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>

      <div className="mt-40 text-center relative z-10">
         <Badge className="bg-amber-500 text-black px-16 py-6 text-xl font-black uppercase tracking-[0.5em] rounded-full shadow-[0_0_80px_rgba(245,158,11,0.4)]">
           L'APOTHÉOSE EST ÉTABLIE
         </Badge>
      </div>
    </div>
  );
};
