
"use client"

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, Printer, Download,
  Lock, Database, Scan, Globe, Sparkles, Zap, Activity, Waves, 
  Shield, CheckCircle2, QrCode as QrIcon, MapPin, Fingerprint, Binary, PenTool, Star, Landmark
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Diploma, SCUGP_CORE_OPTIONS } from '@/lib/scugp-service';
import { QRCodeSVG } from 'qrcode.react';

interface DiplomaCardProps {
  diploma: Diploma;
  onVerify: () => void;
}

/**
 * @component DiplomaCard
 * Matérialisation du Certificat Souverain SCUGP Ω.
 * Design Impérial conforme au modèle bilingue avec photo, logo et sceaux vermillons.
 * VERSION : Ω 100000 | SCELLÉ ET HOLOGRAPHIQUE
 */
export const DiplomaCard: React.FC<DiplomaCardProps> = ({ 
  diploma, 
  onVerify 
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const options = SCUGP_CORE_OPTIONS;

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onVerify();
    }, 2500);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `/api/certificates/${diploma.certificateId}`;
  };

  return (
    <div className="flex flex-col items-center gap-12 py-12">
      <Card 
        className="certificate-wrapper relative w-[1120px] h-[792px] bg-[#FDFCF0] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden m-0 p-10 border-[20px] border-[#D4AF37] group cursor-pointer transition-all duration-700 hover:shadow-[0_60px_120px_rgba(0,0,0,0.6)]"
        onClick={triggerScan}
      >
        {/* Architectural Filigree */}
        <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-3000">
           <img 
            src="https://picsum.photos/seed/cupb-imperial/1200/800" 
            alt="CUPB Background" 
            className="w-full h-full object-cover"
           />
        </div>

        {/* Holographic Reflection Layer */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '3s' }} />

        <div className="inner-border border-2 border-[#8B0000] h-full w-full p-10 relative flex flex-col box-border z-10 bg-white/15 backdrop-blur-[1px]">
          
          {/* Header Area */}
          <header className="flex justify-between items-start w-full border-b-4 border-double border-[#D4AF37] pb-6 relative z-10">
            <div className="flex items-center gap-6">
               <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#8B0000]/20 overflow-hidden">
                  <img 
                    src={options.universityLogoUrl} 
                    alt="Logo" 
                    className="object-contain w-full h-full p-2"
                  />
               </div>
               <div className="text-left">
                  <div className="text-[28px] font-black text-[#8B0000] leading-none">证书</div>
                  <div className="text-[14px] font-black text-[#8B4513] uppercase tracking-[0.3em] mt-1">CERTIFICATE</div>
               </div>
            </div>

            <div className="text-center absolute left-1/2 -translate-x-1/2">
               <h1 className="text-[34px] text-[#8B0000] font-black uppercase tracking-widest drop-shadow-sm">
                 {options.university}
               </h1>
               <h2 className="text-[30px] font-black text-[#8B0000] tracking-widest">{options.university_cn}</h2>
            </div>

            {/* Professional Portrait */}
            <div className="photo-container relative">
               <div className="w-[130px] h-[160px] border-4 border-[#8B0000] bg-white shadow-2xl overflow-hidden rounded-sm relative z-10">
                  <img 
                    src={options.owner.photoUrl} 
                    alt="Portrait" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 border-2 border-[#D4AF37]/30 m-1" />
               </div>
               <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-[#8B0000] rounded-full flex items-center justify-center text-white border-4 border-[#FDFCF0] shadow-xl z-20">
                  <ShieldCheck size={24} />
               </div>
            </div>
          </header>

          {/* Body Content */}
          <div className="content text-center mt-8 flex-1 relative z-10 flex flex-col items-center">
            <p className="text-[20px] text-[#2F2F2F] font-serif italic mb-2">
              Nous certifions par la présente que | 我们特此证明 :
            </p>
            <div className="holder-name text-[68px] font-serif text-[#8B0000] underline my-2 decoration-[#D4AF37] underline-offset-[12px] font-black tracking-tighter drop-shadow-lg">
              Dr. {diploma.firstName} {diploma.lastName?.toUpperCase()}
            </div>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-5xl my-6 font-serif text-slate-900 bg-white/40 p-6 rounded-[2.5rem] border border-[#D4AF37]/20 shadow-inner">
              <div className="text-left space-y-1">
                <p className="text-sm font-bold">Né le / 出生日期 : <span className="text-[#8B0000]">{diploma.birthDate}</span></p>
                <p className="text-sm font-bold">Lieu / 地点 : <span className="text-[#8B0000]">{options.owner.birthPlace}</span></p>
                <p className="text-sm font-bold">Sang / 血型 : <span className="text-[#8B0000]">{options.owner.bloodType}</span></p>
              </div>
              <div className="text-center space-y-1 border-x border-[#8B0000]/10 px-4">
                <p className="text-xs font-mono text-slate-700 tracking-widest uppercase font-black">NIN RÉGALIEN</p>
                <p className="text-xl font-mono text-blue-900 font-black tracking-tighter">{options.owner.idNumber}</p>
                <Badge className="bg-emerald-600/10 text-emerald-800 border-emerald-600/20 text-[9px] uppercase font-black px-4">{options.owner.oilClearance}</Badge>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm font-bold">ORCID: <span className="text-[#8B0000] font-mono">{options.owner.orcid}</span></p>
                <p className="text-sm font-bold">DOI: <span className="text-[#8B0000] font-mono">{diploma.doi}</span></p>
                <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">SCELLÉ DANS L'ÉTERNITÉ Ω</p>
              </div>
            </div>

            <div className="degree-title text-[52px] font-black text-[#111] uppercase tracking-tighter leading-none mb-2">
              {diploma.type?.toUpperCase()} | {diploma.type === 'Doctorat' ? '博士学位' : '硕士学位'}
            </div>
            <div className="degree-sub text-[26px] text-[#555] font-black tracking-widest border-y-2 border-[#D4AF37]/40 py-3 my-2 uppercase bg-[#D4AF37]/5 px-12 rounded-full">
              {diploma.title}
            </div>
            
            <p className="mt-4 text-[15px] max-w-4xl leading-relaxed text-[#1a1a1a] font-serif italic font-bold text-center">
              {diploma.description}
            </p>
          </div>

          {/* Footer Area with Seals and Barcode */}
          <div className="tech-footer mt-auto flex justify-between items-end font-mono text-[12px] relative z-10 border-t-2 border-[#D4AF37]/30 pt-6">
            
            <div className="blockchain-info text-left space-y-4">
              <div className="p-4 bg-white/80 border-2 border-[#8B0000]/20 rounded-2xl shadow-xl max-w-[320px]">
                <strong className="text-[#8B0000] uppercase flex items-center gap-2 mb-1 font-black text-[11px]">
                  <Database size={14} className="text-blue-600" /> LEDGER SYNC | 区块链同步
                </strong>
                <p className="text-[10px] font-mono truncate text-blue-900 font-bold">{diploma.blockchainHash}</p>
              </div>
              <div className="flex flex-col gap-1">
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sovereign Barcode | 主权条形码</p>
                 <div className="flex gap-0.5 h-12 items-end bg-white p-2 rounded border border-[#D4AF37]/30 shadow-inner">
                    {[...Array(80)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-black" 
                        style={{ 
                          width: i % 7 === 0 ? '4px' : i % 3 === 0 ? '1.5px' : '2.5px', 
                          height: `${40 + Math.random() * 60}%`,
                          opacity: 0.9
                        }} 
                      />
                    ))}
                 </div>
                 <p className="text-[9px] font-mono text-slate-800 font-black text-center">{options.owner.idNumber}</p>
              </div>
            </div>

            <div className="signature-area flex flex-col items-center gap-3">
               <div className="relative group">
                  <div className="h-36 w-36 rounded-full wax-seal-red opacity-95 relative flex flex-col items-center justify-center text-white font-black shadow-5xl border-4 border-double border-[#D4AF37]/50 group-hover:scale-110 transition-transform">
                     <p className="text-[10px] uppercase">中国石油大学</p>
                     <p className="text-[18px] tracking-widest">CUPB</p>
                     <p className="text-[10px] uppercase">（北京）印</p>
                     <div className="absolute inset-0 bg-red-600/5 animate-pulse rounded-full" />
                  </div>
                  {/* Digitalized President Signature */}
                  <div className="absolute -top-14 -left-12 rotate-[-6deg] w-64 opacity-95 select-none pointer-events-none group-hover:opacity-100 transition-opacity duration-1000">
                     <p className="text-5xl font-serif text-blue-900 italic font-black" style={{ fontFamily: 'Georgia, serif' }}>
                        President of CUPB
                     </p>
                  </div>
               </div>
               <p className="text-[12px] font-black text-[#8B0000] uppercase tracking-widest mt-4 flex items-center gap-2">
                 <PenTool size={16} /> CHANCELLERY SEAL
               </p>
            </div>
            
            <div className="qr-container flex flex-col items-end gap-4">
               <div className="p-3 bg-white border-4 border-[#8B0000] rounded-3xl shadow-5xl hover:scale-110 transition-transform duration-500 relative">
                 <QRCodeSVG value={`https://scugp.cupb.edu.cn/verify/${diploma.certificateId}`} size={110} fgColor="#8B0000" />
                 <div className="absolute -top-4 -right-4 h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center text-black border-2 border-white shadow-xl">
                    <Star size={20} className="fill-current" />
                 </div>
               </div>
               <div className="text-right">
                  <div className="flex items-center justify-end gap-2 text-[#8B0000] font-black uppercase text-[14px] tracking-tighter">
                    <ShieldCheck size={18} /> SCEAU DE LA SOURCE Ω
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase">Fidélité Certifiée par Maillage Neural</p>
               </div>
            </div>
          </div>
        </div>

        {/* Laser Scanning Effect */}
        {isScanning && (
          <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            <div className="w-full h-4 bg-red-500 shadow-[0_0_800px_rgba(255,0,0,1)] absolute top-0 animate-[scan-laser_2s_linear_infinite]" />
          </div>
        )}
      </Card>

      <div className="flex gap-12 print:hidden pb-12">
        <button onClick={handleDownload} className="bg-[#8B0000] hover:bg-[#660000] text-white font-black h-24 px-20 rounded-[3rem] uppercase tracking-[0.3em] shadow-[0_0_800px_rgba(139,0,0,0.5)] flex items-center gap-8 transition-all hover:scale-105 active:scale-95 border-none text-xl">
          <Download size={32} /> TÉLÉCHARGER PDF | 下载
        </button>
        <button onClick={() => window.print()} className="border-[8px] border-[#D4AF37] text-[#8B0000] font-black h-24 px-20 rounded-[3rem] uppercase tracking-[0.3em] hover:bg-amber-50 transition-all shadow-5xl flex items-center gap-8 bg-white/95 backdrop-blur-2xl text-xl">
          <Printer size={32} /> IMPRIMER | 打印
        </button>
      </div>

      <style jsx>{`
        .wax-seal-red {
          background: radial-gradient(circle at 30% 30%, #ff4d4d, #8b0000);
          box-shadow: inset 0 0 20px rgba(0,0,0,0.6), 0 15px 30px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
};
