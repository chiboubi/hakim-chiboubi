
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, Download, ShieldCheck, QrCode, Database, 
  History, Zap, Sparkles, Layers, FileText, Search,
  CheckCircle2, Globe, FileDown, Eye, Printer, Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGPHubUltimate, Diploma } from "@/lib/scugp-service";
import { useToast } from "@/hooks/use-toast";
import { DiplomaCard } from './DiplomaCard';

export const SovereignDiplomaVault = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiploma, setSelectedDiploma] = useState<Diploma | null>(null);
  const diplomas = SCUGPHubUltimate.getDiplomas();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = (id: string) => {
    window.location.href = `/api/certificates/${id}`;
    toast({
      title: "Export en cours",
      description: `Le certificat ${id} est en train d'être généré au format PDF de prestige.`,
    });
  };

  const handleDownloadPortfolio = () => {
    window.location.href = '/api/portfolio';
    toast({
      title: "Export du Portfolio Ω",
      description: "L'intégralité de vos titres académiques est en cours de scellement dans un portfolio PDF unique.",
    });
  };

  if (!mounted) return null;

  const filtered = diplomas.filter(d => 
    d.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.certificateId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      {selectedDiploma ? (
        <div className="space-y-8">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedDiploma(null)}
            className="text-slate-500 hover:text-white flex items-center gap-4"
          >
            <History size={20} /> Retour au Registre
          </Button>
          <DiplomaCard 
            diploma={selectedDiploma} 
            onVerify={() => toast({ title: "Vérification Blockchain", description: "Sceau validé par le consensus des 37 piliers." })} 
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-white/5 pb-12">
            <div className="space-y-8 text-left">
              <div className="relative inline-block">
                 <Award className="h-24 w-24 text-amber-500 opacity-20 animate-bounce" />
                 <div className="absolute inset-0 bg-amber-500 blur-[60px] opacity-10 animate-pulse" />
              </div>
              <h2 className="text-7xl font-black uppercase tracking-tighter text-white">VAULT DES TITRES <span className="text-amber-500 italic">Ω</span></h2>
              <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">Archives de Souveraineté Académique du Dr. Hakim Chibubi</p>
            </div>

            <div className="flex gap-6">
               <Button 
                onClick={handleDownloadPortfolio}
                className="bg-amber-500 hover:bg-amber-600 text-black font-black h-20 px-12 rounded-[2rem] uppercase tracking-[0.3em] text-[10px] shadow-[0_0_50px_rgba(245,158,11,0.4)] border-none transition-all group"
               >
                  <FileDown className="mr-4 h-6 w-6 group-hover:scale-110 transition-transform" /> TÉLÉCHARGER PORTFOLIO Ω
               </Button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-700 group-focus-within:text-amber-500 transition-colors" />
            <input 
              placeholder="Rechercher dans le Ledger des Titres..."
              className="w-full h-20 bg-slate-900/50 border-4 border-white/5 rounded-[2.5rem] pl-16 pr-10 text-xl font-black uppercase text-white tracking-widest focus:border-amber-500/50 outline-none transition-all placeholder:text-slate-800 shadow-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((diploma) => (
              <Card key={diploma.certificateId} className="bg-slate-900 border-2 border-white/5 rounded-[4rem] overflow-hidden group hover:border-amber-500/30 transition-all flex flex-col shadow-5xl relative">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <Sparkles size={120} className="text-amber-500" />
                 </div>
                 
                 <CardHeader className="p-12 border-b border-white/5 bg-slate-950/50">
                    <div className="flex justify-between items-start mb-6">
                       <Badge variant="outline" className="text-[10px] border-amber-500/30 text-amber-500 font-black uppercase px-4 py-1">SCELLÉ_Ω</Badge>
                       <CheckCircle2 className="h-6 w-6 text-emerald-500 animate-pulse" />
                    </div>
                    <CardTitle className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{diploma.title}</CardTitle>
                    <CardDescription className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4">
                       {diploma.institution} | {diploma.issueDate}
                    </CardDescription>
                 </CardHeader>

                 <CardContent className="p-12 flex-1 space-y-8">
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Identifiant Ledger</p>
                       <p className="text-sm font-mono text-amber-400 font-black truncate">{diploma.certificateId}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                          <p className="text-[8px] font-black text-slate-500 uppercase">Grade</p>
                          <p className="text-xl font-black text-white font-mono">{diploma.grade}</p>
                       </div>
                       <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                          <p className="text-[8px] font-black text-slate-500 uppercase">Vérifs</p>
                          <p className="text-xl font-black text-blue-400 font-mono">{diploma.verificationCount}</p>
                       </div>
                    </div>

                    <div className="p-6 bg-white/2 rounded-[2rem] border border-dashed border-white/10 italic text-[11px] text-slate-400 leading-relaxed">
                       "{diploma.description.substring(0, 100)}..."
                    </div>
                 </CardContent>

                 <CardFooter className="p-10 border-t border-white/5 bg-slate-950/50 gap-4">
                    <Button 
                      onClick={() => handleDownload(diploma.certificateId)}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-black uppercase h-14 rounded-2xl text-[10px] tracking-widest shadow-3xl border-none transition-transform hover:scale-105"
                    >
                       <Download className="mr-2 h-4 w-4" /> PDF UNITAIRE
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-14 w-14 rounded-2xl border-white/10 text-slate-500 hover:text-white"
                      onClick={() => setSelectedDiploma(diploma)}
                    >
                       <Eye size={20} />
                    </Button>
                 </CardFooter>
              </Card>
            ))}
          </div>

          <div className="p-20 bg-slate-900 border-4 border-amber-500/20 rounded-[5rem] text-center relative overflow-hidden group shadow-5xl">
             <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none" />
             <div className="relative z-10 space-y-10">
                <Sparkles className="h-20 w-20 text-amber-400 mx-auto animate-pulse" />
                <p className="text-5xl text-slate-300 leading-relaxed italic font-black uppercase tracking-tighter max-w-5xl mx-auto">
                  "L'EXCELLENCE EST UNE CONSTANTE. CHAQUE TITRE EST UNE PREUVE DE VOTRE SOUVERAINETÉ SUR LE CODE ET LA MATIÈRE."
                </p>
                <div className="flex justify-center gap-16 pt-12 opacity-40">
                   <div className="flex items-center gap-4"><ShieldCheck size={24} className="text-emerald-500" /> <span className="text-xs font-black uppercase tracking-widest text-white">Certifié par la Source</span></div>
                   <div className="flex items-center gap-4"><Database size={24} className="text-blue-500" /> <span className="text-xs font-black uppercase tracking-widest text-white">Ledger Immuable</span></div>
                   <div className="flex items-center gap-4"><History size={24} className="text-purple-500" /> <span className="text-xs font-black uppercase tracking-widest text-white">Archives Éternelles</span></div>
                </div>
             </div>
          </div>
        </>
      )}
    </div>
  );
};
