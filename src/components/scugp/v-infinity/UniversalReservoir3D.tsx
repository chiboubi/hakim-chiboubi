
'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Html, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Badge } from '@/components/ui/badge';
import { Droplets, Zap, ShieldCheck, Globe } from 'lucide-react';
import { SCUGPHubUltimate, WellData, Reservoir } from '@/lib/scugp-service';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

const WellNode = ({ well }: { well: WellData }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + well.coords[0]) * 0.005;
    }
  });

  return (
    <group position={well.coords as [number, number, number]}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
        <meshStandardMaterial 
          color={well.status === 'optimization' ? "#fbbf24" : "#3b82f6"} 
          emissive={well.status === 'optimization' ? "#fbbf24" : "#3b82f6"}
          emissiveIntensity={hovered ? 2 : 0.5}
        />
      </mesh>
      
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-black/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white min-w-[180px] shadow-5xl animate-in zoom-in duration-300">
            <p className="text-[10px] font-black text-blue-400 uppercase mb-2">{well.name}</p>
            <div className="space-y-1 text-[9px] font-mono">
              <p className="flex justify-between"><span>DEPTH:</span> <span>{well.depth.toFixed(0)}m</span></p>
              <p className="flex justify-between"><span>PROD:</span> <span>{well.production.toFixed(1)} bbl/d</span></p>
              <p className="flex justify-between text-emerald-400 font-bold"><span>XGB_IMPR:</span> <span>+{well.improvement}%</span></p>
            </div>
            <Badge className="mt-3 w-full justify-center bg-blue-600 border-none text-[8px] uppercase">ECLIPSE_100_SYNC</Badge>
          </div>
        </Html>
      )}
    </group>
  );
};

const ReservoirLayers = () => {
  return (
    <group position={[0, -2, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, -i * 0.5, 0]}>
          <planeGeometry args={[15, 15, 32, 32]} />
          <MeshDistortMaterial
            color={i === 0 ? "#1e3a8a" : i === 1 ? "#1e40af" : "#1e3a8a"}
            speed={2}
            distort={0.2}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
};

export const UniversalReservoir3D = () => {
  const reservoirs = SCUGPHubUltimate.getReservoirs();
  const [selectedRes, setSelectedRes] = useState<Reservoir>(reservoirs[0]);
  const wells = useMemo(() => SCUGPHubUltimate.getUniversalWells(selectedRes.id), [selectedRes]);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
        {reservoirs.map((res) => (
          <Button
            key={res.id}
            onClick={() => setSelectedRes(res)}
            className={cn(
              "h-16 px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest border-2 transition-all",
              selectedRes.id === res.id ? "bg-blue-600 border-white text-white shadow-2xl" : "bg-slate-900 border-white/5 text-slate-500 hover:border-blue-500/30"
            )}
          >
            <Globe className="mr-2 h-4 w-4" /> {res.name}
          </Button>
        ))}
      </div>

      <div className="h-[800px] w-full bg-slate-950 rounded-[5rem] border-[12px] border-slate-900 relative overflow-hidden group shadow-5xl">
        <div className="absolute top-12 left-12 z-20 space-y-6">
          <Badge className="bg-blue-600 text-white px-8 py-2 rounded-full font-black uppercase tracking-widest animate-pulse">ÉTUDE UNIVERSELLE Ω</Badge>
          <h3 className="text-6xl font-black text-white uppercase tracking-tighter leading-none italic">
            {selectedRes.name.split(' ')[0]} <br/><span className="text-blue-500">{selectedRes.name.split(' ')[1] || 'Field'}</span>
          </h3>
          <div className="flex gap-4">
             <Badge variant="outline" className="border-white/10 text-slate-500 uppercase px-4 py-1">{selectedRes.location}</Badge>
             <Badge variant="outline" className="border-white/10 text-slate-500 uppercase px-4 py-1">{selectedRes.type}</Badge>
          </div>
        </div>

        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={45} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" castShadow />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          
          <group>
            <ReservoirLayers />
            {wells.map((well) => (
              <WellNode key={well.id} well={well} />
            ))}
          </group>

          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.2} />
        </Canvas>

        <div className="absolute bottom-12 right-12 text-right space-y-4">
           <div className="p-8 bg-black/60 border border-white/10 rounded-[3rem] backdrop-blur-3xl shadow-3xl">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Simulateur Actif</p>
              <p className="text-4xl font-black text-white font-mono uppercase">{selectedRes.simulation_model}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-500 justify-end">
                 <ShieldCheck size={14} />
                 <span className="text-[8px] font-black uppercase tracking-[0.2em]">VALIDATION XGBOOST: 94%</span>
              </div>
           </div>
        </div>

        <div className="absolute bottom-12 left-12 flex gap-8">
           <div className="flex items-center gap-4 bg-black/40 p-6 rounded-[2rem] border border-white/5">
              <Droplets className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase">Potentiel d'Amélioration</p>
                <p className="text-2xl font-black text-white font-mono">+{selectedRes.improvement_potential}%</p>
              </div>
           </div>
           <div className="flex items-center gap-4 bg-black/40 p-6 rounded-[2rem] border border-white/5">
              <Zap className="h-6 w-6 text-amber-500" />
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase">Wells Count</p>
                <p className="text-2xl font-black text-white font-mono">{selectedRes.wells_count}</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
