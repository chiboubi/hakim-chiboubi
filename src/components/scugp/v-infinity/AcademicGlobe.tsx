'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Badge } from '@/components/ui/badge';
import { Globe as GlobeIcon, MapPin, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const EarthGlobe = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  const nodes = [
    { city: "Beijing", inst: "China University of Petroleum", role: "Source Doctorale", lat: 39.9, lng: 116.4 },
    { city: "Alger", inst: "Ingénierie Fondamentale", role: "Noyau d'Origine", lat: 36.7, lng: 3.0 },
    { city: "Paris", inst: "Polytechnique / Mines", role: "Expertise Europe", lat: 48.8, lng: 2.3 }
  ];

  const latLonToVector3 = (lat: number, lon: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial 
          color="#1a365d"
          emissive="#000000"
          roughness={0.5}
          metalness={0.8}
          wireframe
        />
      </mesh>

      <mesh scale={1.05}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} />
      </mesh>

      {nodes.map((node, i) => {
        const pos = latLonToVector3(node.lat, node.lng, 5.1);
        return (
          <group key={i} position={pos}>
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshBasicMaterial color="#FFD700" />
            </mesh>
            <Html distanceFactor={10}>
              <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 text-white min-w-[150px]">
                <p className="text-[8px] font-black text-amber-500 uppercase">{node.city}</p>
                <p className="text-[10px] font-bold">{node.inst}</p>
                <p className="text-[7px] text-slate-500 mt-1 uppercase">{node.role}</p>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

export const AcademicGlobe = () => {
  return (
    <div className="h-[800px] w-full bg-slate-950 rounded-[5rem] border-[12px] border-slate-900 relative overflow-hidden flex items-center justify-center group shadow-5xl">
      <div className="absolute top-12 left-12 z-20 space-y-6">
        <Badge className="bg-emerald-600 text-white px-8 py-2 rounded-full font-black uppercase tracking-widest animate-pulse shadow-3xl">RAYONNEMENT GLOBAL Ω</Badge>
        <h3 className="text-6xl font-black text-white uppercase tracking-tighter leading-none italic">Globe <br/><span className="text-emerald-500">Régalien</span></h3>
      </div>

      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <EarthGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute bottom-12 right-12 text-right space-y-4">
         <div className="p-8 bg-black/60 border border-white/10 rounded-[3rem] backdrop-blur-3xl shadow-3xl">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Rayonnement Global</p>
            <p className="text-4xl font-black text-white font-mono">14 NODES</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-500">
               <ShieldCheck size={14} />
               <span className="text-[8px] font-black uppercase tracking-[0.2em]">CONSENSUS SOUVERAIN</span>
            </div>
         </div>
      </div>
    </div>
  );
};
