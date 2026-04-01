'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Text, OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Brain, Zap, Atom } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SkillNode = ({ position, label, size, color }: { position: [number, number, number], label: string, size: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.005;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[size, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.2}
            radius={1}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </Sphere>
        <Text
          position={[0, size + 0.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label.toUpperCase()}
        </Text>
      </Float>
    </group>
  );
};

export const SkillsCosmos = () => {
  const skills = [
    { label: "Petroleum Eng", pos: [2, 1, 0], size: 0.8, color: "#3b82f6" },
    { label: "Deep Learning", pos: [-2, 2, 1], size: 0.7, color: "#a855f7" },
    { label: "Blockchain", pos: [0, -2, 2], size: 0.6, color: "#10b981" },
    { label: "Management", pos: [3, -1, -2], size: 0.5, color: "#f59e0b" },
    { label: "Reservoir Simul", pos: [-3, -2, -1], size: 0.7, color: "#ef4444" },
    { label: "Zinia Std", pos: [1, 3, -2], size: 0.6, color: "#06b6d4" },
    { label: "eIDAS 2.0", pos: [-1, -3, 0], size: 0.5, color: "#ec4899" }
  ];

  return (
    <div className="h-[800px] w-full bg-black rounded-[5rem] border-[12px] border-slate-900 relative overflow-hidden group shadow-5xl">
      <div className="absolute top-12 left-12 z-20 space-y-6">
        <Badge className="bg-purple-600 text-white px-8 py-2 rounded-full font-black uppercase tracking-widest animate-pulse shadow-3xl">COSMOS DES COMPÉTENCES Ω</Badge>
        <h3 className="text-6xl font-black text-white uppercase tracking-tighter leading-none italic">Univers <br/><span className="text-purple-500">Cognitif</span></h3>
      </div>

      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <group>
          {skills.map((s, i) => (
            <SkillNode key={i} position={s.pos as [number, number, number]} label={s.label} size={s.size} color={s.color} />
          ))}
        </group>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute bottom-12 left-12 z-20 flex gap-12">
         <div className="flex items-center gap-4">
            <Brain className="h-6 w-6 text-purple-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">200+ Skills Extractés via RAG</span>
         </div>
         <div className="flex items-center gap-4">
            <Zap className="h-6 w-6 text-amber-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Densité Neuronale: Maximale</span>
         </div>
      </div>
    </div>
  );
};
