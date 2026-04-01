
"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, CircleMarker, Popup, Polyline, LayerGroup, LayersControl, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SCUGPHubUltimate } from '@/lib/scugp-service';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ShieldCheck, Database, Target, Building2, Waves, Droplets, Zap } from 'lucide-react';

// Fix for Leaflet marker icons in Next.js
if (typeof window !== 'undefined') {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

const { BaseLayer, Overlay } = LayersControl;

const MapContainer = () => {
  const [mounted, setMounted] = useState(false);
  const pipingNetwork = SCUGPHubUltimate.getPipingNetwork();
  const fieldBoundaries = SCUGPHubUltimate.getFieldBoundaries();
  const openBuildings = SCUGPHubUltimate.getOpenBuildings();
  
  const config = {
    center: [28.2, 1.6] as [number, number],
    zoom: 8,
    tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satelliteUrl: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    darkUrl: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; SCUGP® UNIVERSAL SOURCE MAPPING'
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-full w-full relative z-0 bg-black rounded-[4rem] overflow-hidden shadow-5xl border-[12px] border-slate-900 group">
      <LeafletMap 
        center={config.center} 
        zoom={config.zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="Satellite (Sentinel-2 L2A)">
            <TileLayer url={config.satelliteUrl} attribution={config.attribution} />
          </BaseLayer>
          <BaseLayer name="Mode Sombre (Souverain)">
            <TileLayer url={config.darkUrl} attribution={config.attribution} />
          </BaseLayer>

          {/* COUCHE : FIELD BOUNDARY DETECTION (Geo AI) */}
          <Overlay checked name="Field Boundaries (Geo AI)">
            <LayerGroup>
              {fieldBoundaries.map((field) => (
                <Polygon 
                  key={field.id}
                  positions={field.coords as any}
                  pathOptions={{ 
                    color: '#10b981', 
                    fillColor: '#10b981', 
                    fillOpacity: 0.2,
                    weight: 2,
                    dashArray: '5, 10'
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="text-[11px] font-black uppercase space-y-3 p-4">
                      <div className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-emerald-500" />
                        <p className="text-white text-2xl tracking-tighter">{field.name}</p>
                      </div>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 uppercase font-black px-4">DETECTED_BY_GEO_AI</Badge>
                    </div>
                  </Popup>
                </Polygon>
              ))}
            </LayerGroup>
          </Overlay>

          {/* COUCHE : OPENBUILDINGS HUB */}
          <Overlay checked name="OpenBuildings (Global Mesh)">
            <LayerGroup>
              {openBuildings.map((bld) => (
                <CircleMarker
                  key={bld.id}
                  center={[bld.coords[0], bld.coords[1]]}
                  radius={12}
                  pathOptions={{
                    color: '#3b82f6',
                    fillColor: '#3b82f6',
                    fillOpacity: 0.8,
                    weight: 3
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="text-[10px] font-black uppercase p-4 min-w-[200px] space-y-3">
                       <div className="flex items-center gap-3 mb-2">
                          <Building2 className="h-6 w-6 text-blue-400" />
                          <p className="text-white text-xl font-black">{bld.name}</p>
                       </div>
                       <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                          <p className="text-slate-400">Surface: {bld.area}</p>
                          <p className="text-slate-400">Hauteur: {bld.height}</p>
                       </div>
                       <Badge className="w-full justify-center bg-blue-600 border-none uppercase text-[8px] font-black tracking-widest py-2">OPENBUILDINGS_CERTIFIED</Badge>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </LayerGroup>
          </Overlay>

          {/* COUCHE : PIPELINES & RÉSEAUX */}
          <Overlay checked name="Réseau de Pipelines Ω">
            <LayerGroup>
              {pipingNetwork
                .filter(p => p.startLat !== undefined && p.startLng !== undefined && p.endLat !== undefined && p.endLng !== undefined)
                .map((pipe) => (
                <Polyline 
                  key={pipe.id}
                  positions={[[pipe.startLat, pipe.startLng], [pipe.endLat, pipe.endLng]]}
                  pathOptions={{ 
                    color: pipe.color, 
                    weight: 12, 
                    opacity: 0.95,
                    dashArray: pipe.type === 'GAS' ? '15, 20' : undefined 
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="text-[10px] font-black uppercase space-y-4 p-4 min-w-[240px]">
                      <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-3xl border-4 border-white shadow-2xl animate-pulse" style={{ backgroundColor: pipe.color }} />
                        <p className="text-white text-3xl tracking-tighter italic">FLUX : {pipe.fluid}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-6 bg-black/40 p-4 rounded-2xl border border-white/5">
                        <div className="space-y-1">
                          <p className="text-slate-500">PRESSION</p>
                          <p className="text-white font-mono text-2xl">{pipe.pressure}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-slate-500">ID LIGNE</p>
                          <p className="text-white font-mono text-lg">{pipe.id}</p>
                        </div>
                      </div>
                      <Badge className="bg-emerald-600 text-black border-none text-[9px] px-6 py-2 font-black w-full justify-center shadow-2xl">SCELLÉ_BLOCKCHAIN_Ω</Badge>
                    </div>
                  </Popup>
                </Polyline>
              ))}
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </LeafletMap>

      {/* LÉGENDE D'AFFICHAGE RÉGALIENNE (FIXE SUR CARTE) */}
      <div className="absolute bottom-10 left-10 p-8 bg-white/95 border-4 border-slate-200 rounded-[3rem] shadow-5xl z-[1000] backdrop-blur-xl min-w-[260px] group-hover:scale-105 transition-transform duration-500">
        <p className="text-[11px] font-black text-slate-800 uppercase tracking-[0.3em] mb-6 border-b border-slate-100 pb-3">Légende des Flux Ω</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 bg-[#10b981] rounded-full shadow-[0_0_10px_#10b981]" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">BRUT (Pétrole)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 border-2 border-dashed border-[#f59e0b] bg-transparent" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">GAZ (GNL/H2)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-12 bg-[#3b82f6] rounded-full shadow-[0_0_100px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">EAU (Injection)</span>
          </div>
          <div className="h-px bg-slate-100 my-4" />
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 bg-emerald-500/20 border-2 border-emerald-500 rounded-full" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Concessions AI</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 bg-blue-600 rounded-lg shadow-xl" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">OpenBuildings</span>
          </div>
        </div>
        <div className="mt-6 pt-2 border-t border-slate-100 flex items-center gap-3">
           <ShieldCheck size={14} className="text-emerald-500 animate-pulse" />
           <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">SOUVERAINETÉ_FLUX_SCELLÉE</span>
        </div>
      </div>
      
      <style jsx global>{`
        .leaflet-container { background: #000 !important; border-radius: 4rem; }
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(15, 23, 42, 0.98) !important;
          color: white !important;
          border: 4px solid rgba(59, 130, 246, 0.5);
          border-radius: 4rem;
          backdrop-filter: blur(30px);
          box-shadow: 0 60px 120px rgba(0,0,0,1);
          padding: 0;
        }
        .custom-popup .leaflet-popup-content { margin: 0; width: auto !important; }
        .custom-popup .leaflet-popup-tip { background: rgba(15, 23, 42, 0.98); }
      `}</style>
    </div>
  );
};

export default MapContainer;
