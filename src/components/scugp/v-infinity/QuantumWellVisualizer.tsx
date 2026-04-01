
"use client"

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  Sphere, 
  MeshDistortMaterial, 
  OrbitControls, 
  Stars, 
  PerspectiveCamera,
  Text,
  Html,
  PresentationControls
} from '@react-three/drei';
import * as THREE from 'three';
import { Atom, Zap, Droplets, ShieldCheck, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const QuantumNode = ({ position, label, state, color }: { position: [number, number, number], label: string, state: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            speed={4}
            distort={0.4}
            radius={1}
            emissive={color}
            emissiveIntensity={0.8}
            roughness={0}
            metalness={1}
          />
        </Sphere>
        <Html position={[0, 1.5, 0]} center distanceFactor={10}>
          <div className="bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white min-w-[120px] text-center space-y-2 shadow-2xl">
            <p className="text-[10px] font-black uppercase text-white tracking-widest">{label}</p>
            <Badge variant="outline" className="text-[8px] border-white/20 text-white/60 uppercase">{state}</Badge>
          </div>
        </Html>
      </Float>
    </group>
  );
};

export const QuantumWellVisualizer = () => {
  const wells = [
    { label: "Shengli Q-Alpha", state: "SUPERPOSITION", pos: [0, 0, 0], color: "#3b82f6" },
    { label: "Hassi Messaoud Q-Core", state: "ENTANGLED", pos: [-5, 2, -2], color: "#a855f7" },
    { label: "Arctic Q-Drill", state: "COLLAPSED", pos: [5, -2, 2], color: "#10b981" }
  ];

  return (
    <div className="h-full w-full bg-black relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 4]}
        >
          <group>
            {wells.map((well, i) => (
              <QuantumNode 
                key={i} 
                position={well.pos as [number, number, number]} 
                label={well.label} 
                state={well.state} 
                color={well.color} 
              />
            ))}
            
            {/* Energy Bridges */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[10, 10.1, 64]} />
              <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} side={THREE.DoubleSide} />
            </mesh>
          </group>
        </PresentationControls>

        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      <div className="absolute top-12 left-12 z-20 space-y-6 pointer-events-none">
        <Badge className="bg-purple-600 text-white px-8 py-2 rounded-full font-black uppercase tracking-widest animate-pulse shadow-3xl">QUANTUM_STATE_MONITOR v100.0</Badge>
        <h3 className="text-7xl font-black text-white uppercase tracking-tighter leading-none italic">Jumeau <br/><span className="text-purple-500">Quantique</span></h3>
      </div>

      <div className="absolute bottom-12 right-12 z-20 flex gap-12 pointer-events-none">
         <div className="flex items-center gap-4 bg-black/60 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-5xl">
            <Atom className="h-8 w-8 text-purple-500 animate-spin-slow" />
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Coherence Rate</p>
              <p className="text-3xl font-black text-white font-mono">0.999998</p>
            </div>
         </div>
         <div className="flex items-center gap-4 bg-black/60 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-5xl">
            <Zap className="h-8 w-8 text-amber-500 animate-pulse" />
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficience ROI</p>
              <p className="text-3xl font-black text-white font-mono">∞^∞</p>
            </div>
         </div>
      </div>
    </div>
  );
};
