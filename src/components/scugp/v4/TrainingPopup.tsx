"use client"

import React from 'react';

/**
 * TrainingStep component
 * Visualizes a training step for the SCUGP 4.0 certification process.
 */
export const TrainingStep = () => (
  <div className="border-l-4 border-cyan-500 bg-slate-900 p-4 animate-in fade-in duration-500">
    <h4 className="text-cyan-400 font-bold uppercase text-xs">Étape 4 : Certification Immuable</h4>
    <p className="text-white text-[10px] mt-2">
      En cliquant sur "Sceller", vous générez un hash **SHA-256** de votre rapport. 
      Ce hash sera inscrit dans le bloc #2026. Aucune modification ultérieure ne sera possible.
    </p>
    <button className="mt-3 bg-cyan-600 px-3 py-1 text-[10px] rounded hover:bg-cyan-500 transition text-white font-bold uppercase tracking-wider">
      J'ai compris le concept de preuve
    </button>
  </div>
);
