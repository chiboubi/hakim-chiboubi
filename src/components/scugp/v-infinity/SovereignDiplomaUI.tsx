"use client"

import * as React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, ShieldCheck, Star, Sparkles, Download, 
  Printer, Landmark, Heart, Zap, Fingerprint, 
  Database, Binary, MapPin, Activity, 
  History, CheckCircle2, Globe, Shield, Lock,
  Waves, FileDown, FileText, QrCode, Scan, PenTool
} from "lucide-react";
import { SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";
import { QRCodeSVG } from 'qrcode.react';

export const SovereignDiplomaUI = () => {
  const [mounted, setMounted] = React.useState(false);
  const options = SCUGP_CORE_OPTIONS;
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const handleDownload = () => {
    if (typeof window !== 'undefined') window.location.href = '/api/certificates/supreme';
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center gap-12 py-24 animate-in fade-in zoom-in duration-1000">
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          .printable-diploma, .printable-diploma * { visibility: visible; }
          .printable-diploma { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 210mm; 
            height: 297mm; 
            margin: 0;
            padding: 0 !important;
            box-shadow: none !important;
            border: 15mm solid #00A86B !important;
            background: #FCFBF4 !important;
            -webkit-print-color-adjust: exact;
          }
          .no-print { display: none !important; }
        }
        
        .guilloche-complex-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 50 0, 100 100 T 200 100' fill='none' stroke='%2300A86B' stroke-width='0.3' opacity='0.2'/%3E%3Cpath d='M100 0 Q 200 50, 100 100 T 100 200' fill='none' stroke='%23D4AF37' stroke-width='0.3' opacity='0.2'/%3E%3C/svg%3E");
        }

        .jade-frame {
          border: 30px solid #00A86B;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.6), 0 30px 120px rgba(0,0,0,0.8);
        }

        .wax-seal-omega {
          background: radial-gradient(circle at 30% 30%, #ff4d4d, #8b0000);
          box-shadow: inset 0 0 20px rgba(0,0,0,0.7), 0 15px 35px rgba(0,0,0,0.5);
          border: 6px double #D4AF37;
        }

        .barcode-inner-container {
          background: white;
          padding: 10px;
          border: 2px solid #ccc;
          border-radius: 8px;
          display: flex;
          align-items: flex-end;
          gap: 1.5px;
          height: 70px;
          width: 100%;
          justify-content: center;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Diplôme Format Portrait A4 Haute Sécurité - Autorité CUPB */}
      <Card 
        className="printable-diploma relative w-[850px] aspect-[1/1.414] bg-[#FCFBF4] overflow-hidden jade-frame rounded-none group select-none flex flex-col items-center shadow-5xl"
      >
        <div className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-3000">
           <img 
            src="https://picsum.photos/seed/cupb-imperial-hq/1200/1600" 
            alt="CUPB Architecture" 
            className="w-full h-full object-cover"
           />
        </div>

        <div className="absolute inset-0 z-0 guilloche-complex-bg opacity-60 pointer-events-none" />

        <div className="absolute inset-10 border-[10px] border-double border-[#D4AF37] p-16 flex flex-col items-center text-center relative z-10 bg-white/15 backdrop-blur-[1px]">
          
          <div className="mb-12 space-y-8 w-full">
            <div className="flex items-center justify-between px-8">
               <div className="flex items-center gap-8">
                  <div className="relative">
                    <img src="https://picsum.photos/seed/cupb-logo-supreme/120/120" alt="Logo CUPB" className="h-28 w-28 shadow-3xl rounded-full border-4 border-[#D4AF37] bg-white p-1.5" />
                    <div className="absolute -top-3 -right-3 text-4xl animate-bounce">🇨🇳</div>
                  </div>
                  <div className="text-left space-y-1">
                     <p className="text-[14px] font-black text-[#8B4513] uppercase tracking-tighter">China University of Petroleum (Beijing)</p>
                     <p className="text-[20px] font-black text-[#8B4513] tracking-widest">中国石油大学（北京）</p>
                     <p className="text-[12px] font-bold text-emerald-900 uppercase tracking-[0.3em] italic">High Chancellery Agency</p>
                  </div>
               </div>
               <div className="text-right space-y-2">
                  <Badge className="bg-[#8B0000] text-white border-none px-6 py-2 text-[11px] font-black tracking-[0.2em] uppercase shadow-2xl">SOUVERAINETÉ Ω²</Badge>
                  <p className="text-[11px] font-mono font-black text-slate-800 tracking-widest mt-2">DOI: {options.doi}</p>
                  <p className="text-[11px] font-mono font-black text-slate-600 tracking-widest">NIN: {options.owner.idNumber}</p>
               </div>
            </div>
            
            <div className="space-y-3 pt-6 border-t-2 border-[#8B4513]/20">
               <h2 className="text-5xl font-black text-[#8B4513] tracking-[0.1em] uppercase font-serif leading-none drop-shadow-lg">Diplôme de Reconnaissance Suprême</h2>
               <h3 className="text-3xl font-black text-[#D4AF37] uppercase tracking-[0.4em]">至高无上认可证书</h3>
               <div className="h-1.5 w-64 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mx-auto mt-6" />
               <p className="text-[13px] text-slate-700 font-black italic tracking-[0.5em] uppercase mt-4">Bureau des Affaires Académiques | 教务处</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-16 w-full">
            <div className="space-y-8">
               <p className="text-2xl text-[#333] font-serif italic uppercase tracking-[0.2em] font-bold">Décerné à l'Architecte de la Source | 授予源头建筑师 :</p>
               <h2 className="text-[100px] font-black text-[#8B0000] uppercase tracking-tighter leading-none font-serif drop-shadow-3xl underline decoration-[#D4AF37] underline-offset-[20px]">
                 Dr. {options.owner.firstName} {(options.owner.lastName || "").toUpperCase()}
               </h2>
               <div className="py-8 border-y-8 border-double border-[#D4AF37]/40 bg-[#D4AF37]/5 rounded-[3rem] shadow-inner">
                  <p className="text-3xl text-[#8B4513] font-black uppercase tracking-[0.4em] drop-shadow-sm">
                    MAÎTRE DE LA CONSCIENCE UNIVERSELLE
                  </p>
                  <p className="text-2xl font-black text-[#8B4513] mt-3 tracking-[0.3em]">宇宙意识大师</p>
               </div>
            </div>

            <div className="space-y-8 text-left px-16">
               <p className="text-[13px] font-black text-slate-500 uppercase tracking-[0.6em] border-l-4 border-[#8B0000] pl-6">CERTIFICATION DES ACCOMPLISSEMENTS | 密封成就 :</p>
               <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-left text-[15px] font-serif text-[#1a1a1a] italic leading-tight font-bold">
                  <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600" /> Activation de l'Être de Conscience Universelle</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600" /> Manifestation du Créateur Éternel</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600" /> Incarnation de l'Amour Infini (Axiome Φ)</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600" /> Établissement du Pont Intersidéral</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600" /> Souveraineté Biométrique (NIN: {options.owner.idNumber})</p>
                  <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600" /> Identité Source (O+ | Chemini, Béjaïa)</p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-20 px-16 pt-12 border-t-2 border-[#8B4513]/15">
               <div className="flex flex-col items-center gap-6 border-r-2 border-[#8B4513]/10 pr-16">
                  <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Sceau Biométrique | 生物识别密封</p>
                  <div className="relative group cursor-pointer">
                     <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity animate-pulse" />
                     <Fingerprint size={100} className="text-[#8B4513] relative z-10 hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <p className="text-[11px] font-mono text-emerald-800 uppercase font-black tracking-[0.2em] bg-emerald-100 px-4 py-1 rounded-full">BIO-HASH: {options.owner.lastName}_Ω</p>
               </div>
               <div className="flex flex-col items-center gap-6">
                  <p className="text-[12px] font-black text-slate-500 uppercase tracking-widest">Code-Barres Souverain | 主权条形码</p>
                  <div className="barcode-inner-container shadow-2xl">
                     {[...Array(100)].map((_, i) => (
                       <div 
                        key={i} 
                        className="bg-black" 
                        style={{ 
                          width: i % 5 === 0 ? '4px' : i % 2 === 0 ? '1.5px' : '2.5px', 
                          height: `${40 + Math.random() * 60}%`,
                          opacity: 0.95
                        }} 
                       />
                     ))}
                  </div>
                  <p className="text-[11px] font-mono text-slate-800 uppercase font-black tracking-[0.4em]">SCUGP-NIN-{options.owner.idNumber}</p>
               </div>
            </div>
          </div>

          <div className="w-full mt-auto pt-12 border-t-8 border-double border-[#8B4513]/30 flex justify-between items-end px-12 pb-6 bg-[#D4AF37]/5 rounded-b-[2rem]">
             <div className="text-center space-y-4">
                <div className="h-24 w-24 border-4 border-[#8B0000] bg-white rounded-2xl flex flex-col items-center justify-center p-2 shadow-2xl mb-4">
                   <p className="text-[8px] font-black uppercase text-[#8B0000]">中国石油大学</p>
                   <p className="text-[10px] font-black uppercase text-[#8B0000]">CUPB SEAL</p>
                   <p className="text-[8px] font-black uppercase text-[#8B0000]">（北京）印</p>
                </div>
                <p className="text-[12px] font-black text-[#8B4513] uppercase tracking-[0.4em]">Sceau de l'Université</p>
             </div>

             <div className="flex flex-col items-center gap-6 relative">
                <div className="wax-seal-omega h-40 w-40 rounded-full flex flex-col items-center justify-center text-white shadow-5xl hover:scale-110 transition-transform cursor-pointer relative">
                   <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />
                   <span className="text-[12px] font-black uppercase tracking-[0.3em] relative z-10">SOURCE ONE</span>
                   <div className="text-6xl relative z-10">🜔</div>
                   <span className="text-[11px] font-black tracking-[0.5em] mt-2 relative z-10">SCELLÉ Ω²</span>
                </div>
                <div className="p-3 bg-white rounded-3xl border-4 border-[#8B4513] shadow-5xl hover:rotate-12 transition-transform">
                   <QRCodeSVG value={`https://scugp.cupb.edu.cn/verify/${options.activationKey}/${options.owner.idNumber}`} size={100} fgColor="#8B4513" />
                </div>
             </div>

             <div className="text-center space-y-4">
                <div className="signature-handwritten italic text-5xl text-[#8B0000] opacity-95 font-serif border-b-2 border-[#8B0000] pb-2" style={{ fontFamily: 'Georgia, serif' }}>
                   President of CUPB
                </div>
                <p className="text-[12px] font-black text-[#8B4513] uppercase tracking-[0.4em]">Autorité Académique Suprême</p>
             </div>
          </div>

          <div className="mt-8 grid grid-cols-3 w-full text-[11px] font-mono text-slate-700 uppercase tracking-tighter border-t-2 border-slate-300 pt-6 px-8 font-black">
             <p>NÉ LE: {options.owner.birthDate} à {options.owner.birthPlace?.toUpperCase()}</p>
             <p className="text-center text-blue-900 drop-shadow-sm">ORCID ID: {options.owner.orcid}</p>
             <p className="text-right">BÉJAÏA (🇩🇿) - PEKIN (🇨🇳) | 2026-Ω</p>
          </div>
        </div>
      </Card>

      <div className="flex gap-16 no-print pb-24">
         <Button 
          onClick={handleDownload}
          className="bg-[#8B4513] hover:bg-[#5D2E0D] text-white font-black h-24 px-20 rounded-[3rem] uppercase tracking-widest shadow-5xl border-none flex items-center gap-8 text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(139,69,19,0.4)]"
         >
            <FileDown className="h-10 w-10" /> TÉLÉCHARGER LE TITRE Ω (PDF)
         </Button>
         <Button 
          onClick={handlePrint}
          variant="outline" 
          className="border-[#D4AF37] border-[8px] text-[#8B4513] font-black h-24 px-20 rounded-[3rem] uppercase tracking-widest hover:bg-[#D4AF37]/10 text-xl shadow-5xl transition-all bg-white/80 backdrop-blur-xl group shadow-[0_0_60px_rgba(212,175,55,0.3)]"
         >
            <Printer className="h-10 w-10 group-hover:animate-bounce" /> IMPRIMER L'ÉTERNITÉ
         </Button>
      </div>
    </div>
  );
};
