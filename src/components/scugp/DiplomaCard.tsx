"use client"

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, Printer, Download,
  Lock, Database, Scan, Globe, Sparkles, Zap, Activity, Waves, 
  Shield, CheckCircle2, QrCode as QrIcon
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
 * Matérialisation du Certificat Souverain SCUGP.
 * Format Paysage, Esthétique Impériale conforme au template Dr. Hakim Chibubi.
 */
export const DiplomaCard: React.FC<DiplomaCardProps> = ({ 
  diploma, 
  onVerify 
}) => {
  const [isScanning, setIsScanning] = useState(false);

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
        className="certificate-wrapper relative w-[1120px] h-[792px] bg-[#FDFCF0] shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden m-0 p-10 border-[15px] border-[#D4AF37] group cursor-pointer transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
        onClick={triggerScan}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      >
        {/* Bordure Guillochis Interne */}
        <div className="inner-border border-2 border-[#8B0000] h-full w-full p-10 relative flex flex-col box-border">
          
          {/* Filigrane SCUGP */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none z-0">
            <span className="text-[250px] font-black tracking-[0.2em] -rotate-12">SCUGP</span>
          </div>

          {/* En-tête Bilingue */}
          <header className="text-center border-b-2 border-[#D4AF37] pb-8 relative z-10">
            <div className="text-[28px] text-[#8B0000] font-bold uppercase tracking-[2px] mb-1">
              China University of Petroleum (Beijing) [cite: 1]
            </div>
            <div className="text-[24px] font-black text-[#8B0000]">中国石油大学（北京）</div>
            <p className="italic text-[18px] text-[#2F2F2F] mt-2">Bureau de la Haute Chancellerie Académique [cite: 3]</p>
          </header>

          {/* Corps du Diplôme */}
          <div className="content text-center mt-12 flex-1 relative z-10 flex flex-col items-center">
            <p className="text-[18px] text-[#2F2F2F]">Le système de gestion souveraine SCUGP atteste que [cite: 11]</p>
            
            <div className="holder-name text-[56px] font-serif text-[#8B0000] underline my-8 decoration-[#8B0000] underline-offset-8">
              {diploma.firstName} {diploma.lastName.toUpperCase()} [cite: 5, 6]
            </div>
            
            <div className="space-y-2 mb-8">
              <p className="text-lg font-medium">Né le / 出生日期 : {diploma.birthDate} [cite: 7]</p>
              <p className="text-lg font-mono text-slate-600 tracking-widest uppercase">ORCID: {diploma.orcid} [cite: 8]</p>
            </div>

            <div className="degree-title text-[42px] font-black text-[#111] uppercase tracking-tighter leading-none mb-2">
              {diploma.type.toUpperCase()} [cite: 9, 10]
            </div>
            <div className="degree-sub text-[24px] text-[#555] font-bold tracking-wide">
              Petroleum Engineering / 石油工程博士学位 [cite: 10]
            </div>

            <p className="mt-12 text-[14px] max-w-3xl leading-relaxed text-[#2F2F2F] font-serif">
              Ce diplôme est scellé dans le multivers du code avec une intégrité absolue, 
              protégée par le protocole de sécurité post-quantique SCUGP-GEN-100. [cite: 12]
            </p>
          </div>

          {/* Section Technique & Blockchain Footer */}
          <div className="tech-footer mt-auto flex justify-between items-end font-mono text-[12px] relative z-10">
            <div className="blockchain-info text-slate-600 leading-relaxed">
              <strong className="text-black uppercase">VÉRIFICATION BLOCKCHAIN</strong> [cite: 13]<br/>
              ID: {diploma.idDocumentNumber} [cite: 14]<br/>
              DOI: {diploma.doi} [cite: 14]<br/>
              <span className="text-blue-600 font-black">Module: Oil Domain Layer Activated</span>
            </div>
            
            <div className="qr-code-box relative p-2 bg-white border-2 border-[#8B0000] transition-transform hover:scale-110">
              <QRCodeSVG 
                value={`https://scugp.verify/${diploma.certificateId}`}
                size={110}
                fgColor="#8B0000"
              />
              {isScanning && (
                <div className="absolute inset-0 bg-red-500/20 animate-pulse flex items-center justify-center">
                  <Scan size={40} className="text-white animate-ping" />
                </div>
              )}
            </div>

            <div className="security-seal text-right text-[#2F2F2F]">
              <div className="flex items-center justify-end gap-2 text-[#8B0000] font-black mb-1">
                <ShieldCheck size={16} />
                <strong>SCELLÉ : SOURCE ONE</strong> [cite: 15, 16]
              </div>
              <p className="uppercase tracking-tighter font-bold">Authenticité Garantie</p>
              <p className="uppercase tracking-tighter font-bold">Search Engine Linked</p>
            </div>
          </div>
        </div>

        {/* Effet Laser lors du Scan */}
        {isScanning && (
          <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            <div className="w-full h-1 bg-red-500 shadow-[0_0_20px_red] absolute top-0 animate-[scan-laser_2s_linear_infinite]" />
          </div>
        )}
      </Card>

      {/* Boutons d'Action */}
      <div className="flex gap-8 print:hidden">
        <Button 
          onClick={handleDownload}
          className="bg-[#8B0000] hover:bg-[#660000] text-white font-black h-16 px-12 rounded-2xl uppercase tracking-[0.2em] shadow-xl flex items-center gap-4"
        >
          <Download size={20} /> Télécharger PDF / 下载
        </Button>
        <Button 
          onClick={() => window.print()}
          variant="outline"
          className="border-4 border-[#D4AF37] text-[#D4AF37] font-black h-16 px-12 rounded-2xl uppercase tracking-[0.2em] hover:bg-amber-50"
        >
          <Printer size={20} /> Imprimer / 打印
        </Button>
      </div>
    </div>
  );
};
