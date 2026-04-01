
"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SCUGPHubUltimate } from "@/lib/scugp-service";

// Correction du bug de chargement des icônes Leaflet dans Next.js
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface IdentityMapProps {
  query?: string;
}

const IdentityMap = ({ query }: IdentityMapProps) => {
  const [mounted, setMounted] = useState(false);
  const nodes = SCUGPHubUltimate.getHakimNodes();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Icône personnalisée pour Dr. Hakim
  const hakimIcon = L.icon({
    iconUrl: 'https://picsum.photos/seed/marker/32/32',
    iconSize: [32, 32],
    className: 'rounded-full border-2 border-blue-500 shadow-xl'
  });

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer 
        center={[30.0, 5.0]} 
        zoom={4} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <LayerGroup>
          {nodes.map((node) => (
            <React.Fragment key={node.id}>
              <Marker position={[node.lat, node.lng]} icon={hakimIcon}>
                <Popup className="custom-popup">
                  <div className="text-xs space-y-2 p-2 min-w-[150px]">
                    <p className="font-black uppercase text-blue-400">{node.name}</p>
                    <p className="text-slate-300"><b>Rôle:</b> {node.power}</p>
                    <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase text-[8px]">
                       <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       Biométrie Configurée ✅
                    </div>
                  </div>
                </Popup>
              </Marker>
              <Circle 
                center={[node.lat, node.lng]} 
                radius={100000} 
                pathOptions={{ color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.1, weight: 1 }}
              />
            </React.Fragment>
          ))}
        </LayerGroup>
      </MapContainer>
      
      <style jsx global>{`
        .leaflet-container {
          background: #ffffff !important;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(15, 23, 42, 0.9) !important;
          color: white !important;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 1.5rem;
          backdrop-filter: blur(12px);
        }
        .custom-popup .leaflet-popup-tip {
          background: rgba(15, 23, 42, 0.9);
        }
      `}</style>
    </div>
  );
};

export default IdentityMap;
