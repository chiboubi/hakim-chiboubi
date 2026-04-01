
"use client"

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  ContactShadows, 
  Float, 
  Html,
  PresentationControls,
  Text3D,
  Center
} from '@react-three/drei';
import * as THREE from 'three';
import { Shield, Sparkles, Box, Trophy, Globe, History, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Certificate3D = ({ title, honors }: { title: string, honors?: string }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Core Certificate Object (Simulated with basic shapes since we don't have GLB yet) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} />
        </mesh>
        
        {/* Golden Border */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 2.2, 0.05]} />
          <meshStandardMaterial color="#f59e0b" metalness={1} roughness={0.2} />
        </mesh>

        <Center position={[0, 0, 0.1]}>
          <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={0.15}
            height={0.02}
          >
            {title.toUpperCase()}
            <meshStandardMaterial color="#1a365d" />
          </Text3D>
        </Center>

        {/* Verification UI in 3D Space */}
        <Html position={[2, 0, 0]} transform distanceFactor={3}>
          <div className="bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] border-2 border-blue-500 shadow-3xl w-64 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <p className="text-[10px] font-black uppercase text-blue-900">Verified NFT 3D</p>
            </div>
            <div className="h-px bg-blue-500/20" />
            <img 
              src="https://api.chiboubi-hakim.edu/v2/verify/CH-HAKIM-001/qrcode?size=150" 
              alt="QR" 
              className="w-full aspect-square rounded-xl"
            />
            <Badge className="w-full justify-center bg-emerald-600 text-white font-black">SCELLÉ_BLOCKCHAIN</Badge>
          </div>
        </Html>
      </Float>

      {/* Authenticity Particles */}
      <group>
        {[...Array(50)].map((_, i) => (
          <mesh key={i} position={[(Math.random()-0.5)*10, (Math.random()-0.5)*10, (Math.random()-0.5)*10]}>
            <sphereGeometry args={[0.02]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={2} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export const MetaverseGallery = () => {
  const [activeToken, setActiveToken] = useState("Doctorat");

  return (
    <div className="h-[800px] w-full rounded-[5rem] border-[12px] border-slate-900 overflow-hidden relative bg-black group">
      <div className="absolute top-12 left-12 z-20 space-y-6">
        <Badge className="bg-blue-600 text-white px-8 py-2 rounded-full font-black uppercase tracking-widest animate-pulse shadow-3xl">METAVERSE_READY v1.0</Badge>
        <h3 className="text-6xl font-black text-white uppercase tracking-tighter leading-none italic">Galerie <br/><span className="text-blue-500">Spatiale</span></h3>
      </div>

      <div className="absolute top-12 right-12 z-20 flex flex-col gap-4">
        {['Doctorat', 'Master', 'Brevet'].map(t => (
          <Button 
            key={t}
            onClick={() => setActiveToken(t)}
            className={cn(
              "h-12 px-10 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all",
              activeToken === t ? "bg-white text-black shadow-3xl scale-110" : "bg-black/40 text-slate-500 border border-white/10 hover:bg-white/10"
            )}
          >
            {t}
          </Button>
        ))}
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />
        <Environment preset="night" />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-0.5, 0.5]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Certificate3D title={activeToken} honors="Summa Cum Laude" />
        </PresentationControls>
        
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>

      <div className="absolute bottom-12 left-12 z-20 flex gap-12">
         <div className="flex items-center gap-4">
            <Globe className="h-6 w-6 text-blue-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Compatible: Decentraland / Sandbox</span>
         </div>
         <div className="flex items-center gap-4">
            <History className="h-6 w-6 text-purple-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Standard: GLTF 2.0</span>
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-20">
         <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-16 rounded-[2rem] uppercase tracking-widest shadow-3xl">
            SPAWN IN METAVERSE Ω
         </Button>
      </div>
    </div>
  );
};
