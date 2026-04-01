
"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, CircleMarker, Popup, Polyline, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SCUGPHubUltimate } from '@/lib/scugp-service';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Correction Next.js Leaflet Marker Icons
if (typeof window !== 'undefined') {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

interface MapContainerProps {
  wells?: any[];
  pipelines?: any[];
}

const MapContainer = ({ wells, pipelines }: MapContainerProps) => {
  const [mounted, setMounted] = useState(false);
  const pipingNetwork = SCUGPHubUltimate.getPipingNetwork();
  const config = {
    center: [28.0, 1.0] as [number, number],
    zoom: 6,
    tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-full w-full relative z-0 bg-white rounded-[3rem] overflow-hidden shadow-5xl">
      <LeafletMap 
        center={config.center} 
        zoom={config.zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution={config.attribution}
          url={config.tileUrl}
        />
        
        {/* Rendu des Puits */}
        {wells?.map((well, idx) => (
          <CircleMarker
            key={well.id || idx}
            center={[well.latitude, well.longitude]}
            radius={8}
            pathOptions={{
              color: well.status === 'active' ? '#10b981' : well.status === 'warning' ? '#f59e0b' : '#ef4444',
              fillColor: well.status === 'active' ? '#10b981' : well.status === 'warning' ? '#f59e0b' : '#ef4444',
              fillOpacity: 0.7,
              weight: 2
            }}
          >
            <Popup className="custom-popup">
              <div className="text-xs space-y-1 p-2">
                <p className="font-black uppercase text-blue-400">{well.name}</p>
                <p className="text-slate-300">Statut: <span className="text-emerald-500 font-bold uppercase">{well.status}</span></p>
                <p className="text-slate-300">Production: <span className="text-white font-mono">{well.production} bbl/j</span></p>
                <div className="h-px bg-white/10 my-2" />
                <p className="text-[8px] text-slate-500 mt-2 font-mono">NODE_ID: {well.id}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}

        {/* Rendu Trichromatique du Piping (Eau: Bleu, Brut: Vert, Gaz: Jaune) */}
        <LayerGroup>
          {pipingNetwork.map((pipe) => (
            <Polyline 
              key={pipe.id}
              positions={[[pipe.startLat, pipe.startLng], [pipe.endLat, pipe.endLng]]}
              pathOptions={{ 
                color: pipe.color, 
                weight: 6, 
                opacity: 0.9,
                dashArray: pipe.type === 'GAS' ? '10, 15' : undefined 
              }}
            >
              <Popup className="custom-popup">
                <div className="text-[10px] font-black uppercase space-y-2 p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pipe.color }} />
                    <p className="text-white">FLUIDE : {pipe.fluid}</p>
                  </div>
                  <p className="text-slate-500">ID : {pipe.id}</p>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-[7px] px-3 font-black">FLOW_CERTIFIED_Ω</Badge>
                </div>
              </Popup>
            </Polyline>
          ))}
        </LayerGroup>
      </LeafletMap>

      {/* PIPING LEGEND OVERLAY (True Colors) */}
      <div className="absolute bottom-10 right-10 p-6 bg-white/95 border-4 border-slate-200 rounded-[2.5rem] shadow-5xl z-[1000] backdrop-blur-xl min-w-[220px]">
        <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.3em] mb-4 border-b border-slate-100 pb-2">Légende des Flux Ω</p>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 bg-[#3b82f6] rounded-full shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">EAU (Injection)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 bg-[#10b981] rounded-full shadow-[0_0_10px_#10b981]" />
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">BRUT (Pétrole)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 border-2 border-dashed border-[#f59e0b] bg-transparent" />
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">GAZ (Transition)</span>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-2">
           <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">SOUVERAINETÉ_FLUX_ACTIVE</span>
        </div>
      </div>
      
      <style jsx global>{`
        .leaflet-container {
          background: #ffffff !important;
          border-radius: 3rem;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(15, 23, 42, 0.95) !important;
          color: white !important;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 1.5rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .custom-popup .leaflet-popup-tip {
          background: rgba(15, 23, 42, 0.95);
        }
      `}</style>
    </div>
  );
};

export default MapContainer;
