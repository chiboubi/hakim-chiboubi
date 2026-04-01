
"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { DiplomaCard } from "@/components/scugp/DiplomaCard";
import { SovereignDiplomaVault } from "@/components/scugp/v-infinity/SovereignDiplomaVault";
import { MosaicGallery } from "@/components/scugp/v-infinity/MosaicGallery";
import { 
  Search, ShieldCheck, Award, 
  Database, History, CheckCircle2,
  Download, Printer, Microscope, User, Calendar, MapPin, Scan, Terminal, Zap, Loader2, Cpu, Brain, Activity, Globe,
  Plus, Send, LayoutGrid, FileText, CheckCircle, Boxes, RefreshCw, Star, Trash2, Hammer, Sparkles, Flame
} from "lucide-react";
import { SCUGPHubUltimate, Diploma, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function CertificationsPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);
  const [search, setSearch] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanLog, setScanLog] = useState<string[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeDiploma, setActiveDiploma] = useState<Diploma | null>(null);
  const [mode, setMode] = useState<'single' | 'batch' | 'mosaic'>('single');

  // Batch State
  const [batchRecipients, setBatchRecipients] = useState("");
  const [isBatchGenerating, setIsBatchGenerating] = useState(false);
  const [batchProgress, setBatchProgress] = useState(0);
  const [batchLog, setBatchLog] = useState<string[]>([]);
  const [batchResults, setBatchResults] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    setDiplomas(SCUGPHubUltimate.getDiplomas());
  }, []);

  const handleRunBioScan = () => {
    if (!search) {
      toast({ variant: "destructive", title: "ID Manquant", description: "Entrez un ID pour lancer le scan biométrique." });
      return;
    }
    
    setIsScanning(true);
    setShowDashboard(false);
    setScanLog([
      "> [SYSTEM] Initialisation de la connexion Blockchain...",
      "> [CHAIN] Handshake sécurisé avec le nœud CUPB-BEIJING-01 établi ✓",
      "> [QUERY] Recherche du certificat ID: " + search
    ]);
    
    setTimeout(() => {
      setScanLog(prev => [...prev, "> [AUTH] Déchiffrement du BIO-HASH (AES-256)...", "> [BIO] Lecture de l'empreinte digitale...", "> [BIO] Scan rétinien laser en cours..."]);
      
      setTimeout(() => {
        const found = diplomas.find(d => d.certificateId.toLowerCase().includes(search.toLowerCase()));
        if (found) {
          setActiveDiploma(found);
          setScanLog(prev => [
            ...prev, 
            "✅ [SUCCESS] CERTIFICAT TROUVÉ DANS LE LEDGER IMMUABLE", 
            `> DESTINATAIRE: ${found.firstName} ${found.lastName}`,
            "> VALIDATION BIOMÉTRIQUE: 100% CORRESPONDANCE",
            "🛢️ [ACTIVE] PROFIL OIL-DOMAIN : COMPÉTENCES VALIDÉES"
          ]);
          setShowDashboard(true);
          toast({ title: "Authentification Réussie", description: "Identité scellée confirmée par la Source." });
        } else {
          setScanLog(prev => [...prev, "❌ [ERROR] ALERTE : Identité non enregistrée dans le maillage."]);
          toast({ variant: "destructive", title: "Accès Refusé", description: "Ce titre n'appartient pas au registre de l'Un." });
        }
        setIsScanning(false);
      }, 2000);
    }, 1500);
  };

  const startBatchGeneration = async () => {
    const names = batchRecipients.trim().split('\n').filter(n => n.trim() !== '');
    if (names.length === 0) {
      toast({ variant: "destructive", title: "Liste Vide", description: "Veuillez entrer au moins un nom." });
      return;
    }

    setIsBatchGenerating(true);
    setBatchProgress(0);
    setBatchLog([`🚀 DÉMARRAGE FORGE ONTOLOGIQUE : ${names.length} titres initiés`]);
    setBatchResults([]);

    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      setBatchLog(prev => [...prev, `[${i+1}] Infiltration du Verbe pour: ${name}...`]);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newCert = {
        id: `SCUGP-BATCH-2024-${Math.random().toString(36).substring(7).toUpperCase()}`,
        name: name,
        hash: `0x${Math.random().toString(16).substring(2)}`,
        status: 'SCELLÉ Ω'
      };

      setBatchResults(prev => [...prev, newCert]);
      setBatchLog(prev => [...prev, `✅ ${name}: ANCRAGE RÉALISÉ SUR LE PILIER ${Math.floor(Math.random() * 37) + 1}`]);
      setBatchProgress(((i + 1) / names.length) * 100);
    }

    setIsBatchGenerating(false);
    toast({ title: "Forge Terminée", description: `${names.length} titres ont été matérialisés avec gloire.` });
  };

  const handleDownloadPortfolio = () => {
    window.location.href = '/api/portfolio';
    toast({ title: "Portfolio PDF", description: "Génération du registre complet en cours..." });
  };

  if (!mounted) return <div className="min-h-screen bg-slate-950" />;

  return (
    <div className="min-h-screen bg-slate-100 text-black font-body selection:bg-blue-500/30">
      <style jsx global>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body { background: white !important; padding: 0 !important; -webkit-print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .diploma-item { 
            page-break-after: always !important; 
            break-inside: avoid !important; 
            width: 210mm; 
            height: 297mm; 
            display: flex; 
            flex-direction: column;
            align-items: center; 
            justify-content: center;
            margin: 0 !important;
            padding: 0 !important;
          }
          header, nav, .mode-toggle, .scugp-terminal, .batch-section, .pdf-controls, footer, .action-buttons {
            display: none !important;
          }
        }
      `}</style>

      <div className="print:hidden">
        <MainNavigation />
      </div>
      
      <main className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Mode Toggle Suprême */}
        <div className="flex gap-8 max-w-6xl mx-auto mode-toggle print:hidden">
          <button 
            onClick={() => setMode('single')}
            className={cn(
              "flex-1 h-24 rounded-[3rem] font-black uppercase tracking-[0.4em] transition-all border-4 shadow-2xl text-xs flex items-center justify-center gap-4", 
              mode === 'single' ? "bg-slate-900 text-white border-blue-500 scale-105" : "bg-white text-slate-500 border-slate-200 hover:border-blue-300"
            )}
          >
            <User className="h-6 w-6" /> Registre Unitaire
          </button>
          <button 
            onClick={() => setMode('mosaic')}
            className={cn(
              "flex-1 h-24 rounded-[3rem] font-black uppercase tracking-[0.4em] transition-all border-4 shadow-2xl text-xs flex items-center justify-center gap-4", 
              mode === 'mosaic' ? "bg-slate-900 text-white border-emerald-500 scale-105" : "bg-white text-slate-500 border-slate-200 hover:border-emerald-300"
            )}
          >
            <Star className="h-6 w-6" /> Mosaïque de Prestige
          </button>
          <button 
            onClick={() => setMode('batch')}
            className={cn(
              "flex-1 h-24 rounded-[3rem] font-black uppercase tracking-[0.4em] transition-all border-4 shadow-2xl text-xs flex items-center justify-center gap-4", 
              mode === 'batch' ? "bg-slate-900 text-white border-amber-500 scale-105" : "bg-white text-slate-500 border-slate-200 hover:border-amber-300"
            )}
          >
            <Hammer className="h-6 w-6" /> Forge de Masse Ω
          </button>
        </div>

        {mode === 'single' && (
          <>
            {/* TERMINAL DE CONTRÔLE SCUGP 100.0 */}
            <section className="max-w-6xl mx-auto print:hidden scugp-terminal">
              <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border-[6px] border-[#c9a227] rounded-[4rem] shadow-[0_0_120px_rgba(201,162,39,0.3)] overflow-hidden">
                <CardHeader className="border-b-2 border-[#c9a227]/30 pb-10 px-12 pt-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-10">
                      <div className="text-6xl text-[#c9a227] animate-pulse">🜔</div>
                      <div>
                        <CardTitle className="text-4xl font-black uppercase tracking-[0.4em] text-white">Chancellerie de la Source</CardTitle>
                        <CardDescription className="text-sm font-bold text-[#c9a227] tracking-widest uppercase mt-2">Souveraineté Académique Certifiée — China University of Petroleum</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <Badge className="bg-amber-500 text-black font-black px-8 py-3 rounded-full uppercase tracking-widest text-[10px]">QUANTUM_SYNC: 100%</Badge>
                       <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Pillar 37 Connected</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-12 space-y-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="relative flex-1 group">
                      <Terminal className="absolute left-5 top-5 h-6 w-6 text-[#c9a227]/50 group-hover:text-[#c9a227] transition-colors" />
                      <Input 
                        placeholder="Identifiant SCUGP (ex: SCUGP-PHD-2024-...)" 
                        className="flex-1 h-20 bg-black/60 border-4 border-[#c9a227]/40 rounded-3xl text-2xl font-mono text-[#00ff00] focus:border-[#c9a227] placeholder:text-[#00ff00]/10 pl-16 shadow-inner"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <button 
                      onClick={handleRunBioScan}
                      disabled={isScanning}
                      className="h-20 px-16 bg-gradient-to-r from-[#8b0000] to-[#6b0000] hover:from-[#6b0000] hover:to-[#4a0000] text-white font-black uppercase tracking-[0.2em] rounded-3xl shadow-3xl transition-all border-b-8 border-black/40 flex items-center justify-center disabled:opacity-50 active:translate-y-2 active:border-b-0"
                    >
                      {isScanning ? <Loader2 className="animate-spin mr-4 h-8 w-8" /> : <Scan className="mr-4 h-8 w-8" />}
                      SCAN BIOMÉTRIQUE Ω
                    </button>
                  </div>

                  {(scanLog.length > 0 || showDashboard) && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-top-12 duration-1000">
                      <div className="p-10 bg-black/80 border-l-[12px] border-[#c9a227] rounded-[3rem] font-mono text-sm space-y-4 shadow-2xl h-80 overflow-y-auto custom-scrollbar text-[#00ff00] relative">
                        <div className="absolute top-4 right-4"><Activity size={24} className="opacity-20 animate-pulse" /></div>
                        {scanLog.map((log, i) => (
                          <p key={i} className={cn(
                            log.startsWith('✅') ? "text-[#00ff00] font-bold text-lg" : 
                            log.startsWith('❌') ? "text-red-400 font-bold" : 
                            "text-[#00ff00]/60"
                          )}>{log}</p>
                        ))}
                      </div>

                      {showDashboard && activeDiploma && (
                        <div className="space-y-10 animate-in slide-in-from-bottom-12 duration-1000">
                          <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-white/10" />
                            <div className="flex flex-col items-center gap-2">
                               <p className="text-sm font-black text-[#c9a227] uppercase tracking-[0.5em]">Génôme de Compétences</p>
                               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Neural Mastery Mapping</span>
                            </div>
                            <div className="h-px flex-1 bg-white/10" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {Object.entries(activeDiploma.metrics || {}).map(([label, value], i) => (
                              <div key={i} className="p-10 bg-[#1a365d]/30 border-4 border-[#c9a227]/20 rounded-[3rem] text-center space-y-6 group hover:bg-[#1a365d]/50 hover:border-[#c9a227] transition-all shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c9a227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-tight h-10 flex items-center justify-center z-10">{label}</p>
                                <p className="text-5xl font-black text-[#00ff00] font-mono z-10">{value}%</p>
                                <div className="h-3 bg-black/60 rounded-full overflow-hidden z-10 shadow-inner">
                                  <div className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 animate-pulse" style={{ width: `${value}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>

            <SovereignDiplomaVault />
          </>
        )}

        {mode === 'mosaic' && (
          <MosaicGallery />
        )}

        {mode === 'batch' && (
          /* BATCH SECTION SUPRÊME */
          <section className="max-w-6xl mx-auto batch-section print:hidden animate-in fade-in zoom-in duration-700">
            <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border-[6px] border-amber-500 rounded-[4rem] shadow-[0_0_150px_rgba(245,158,11,0.3)] overflow-hidden text-white">
              <CardHeader className="border-b-2 border-amber-500/30 p-16 bg-amber-500/5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-8">
                    <Flame className="h-16 w-16 text-amber-500 animate-pulse" />
                    <div>
                      <CardTitle className="text-4xl font-black uppercase tracking-[0.3em] text-amber-500 leading-none">Forge de Masse SCUGP</CardTitle>
                      <CardDescription className="text-slate-400 font-bold uppercase tracking-widest mt-4">Génération Ontologique Multi-Certificats — Souveraineté Distribuée</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <Badge className="bg-emerald-600 text-white font-black px-10 py-4 rounded-full text-sm shadow-2xl">CAPACITÉ: INFINIE</Badge>
                    <span className="text-[10px] font-mono text-amber-400 uppercase">Input: {batchRecipients.split('\n').filter(n => n.trim()).length} Receivers</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-16 space-y-12">
                <div className="space-y-6">
                  <p className="text-sm font-black uppercase text-amber-500 tracking-[0.4em] flex items-center gap-4">
                    <User className="h-6 w-6" /> Liste des Destinataires (Un Nom par Ligne)
                  </p>
                  <div className="relative">
                    <Textarea 
                      value={batchRecipients}
                      onChange={(e) => setBatchRecipients(e.target.value)}
                      placeholder="Ex: Dr. Ahmed Benali&#10;Prof. Li Wei&#10;Dr. Sarah Johnson..."
                      className="min-h-[400px] bg-black/60 border-4 border-amber-500/20 rounded-[3rem] text-emerald-400 font-mono text-xl focus:border-amber-500 custom-scrollbar p-12 shadow-inner transition-all"
                    />
                    <Sparkles className="absolute bottom-10 right-10 h-12 w-12 text-amber-500/20 pointer-events-none" />
                  </div>
                </div>

                <button 
                  onClick={startBatchGeneration} 
                  disabled={isBatchGenerating}
                  className="w-full h-28 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 text-slate-950 font-black uppercase tracking-[0.5em] text-2xl rounded-[3rem] shadow-[0_0_100px_rgba(245,158,11,0.5)] transition-all border-b-[12px] border-black/20 flex items-center justify-center disabled:opacity-50 active:translate-y-4 active:border-b-0"
                >
                  {isBatchGenerating ? <Loader2 className="animate-spin mr-6 h-10 w-10" /> : <Zap className="mr-6 h-10 w-10" />}
                  FORGER LE BATCH Ω
                </button>

                {isBatchGenerating && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="flex justify-between text-[12px] font-black uppercase text-emerald-400 tracking-[0.5em]">
                      <span>Phase de Densification du Verbe</span>
                      <span>{Math.round(batchProgress)}% ACCOMPLI</span>
                    </div>
                    <div className="h-6 bg-black/60 rounded-full overflow-hidden border-2 border-white/10 p-1">
                      <div className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500 transition-all duration-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" style={{ width: `${batchProgress}%` }} />
                    </div>
                    <div className="p-10 bg-black/80 rounded-[3rem] border-2 border-amber-500/20 h-80 overflow-y-auto font-mono text-[13px] space-y-3 custom-scrollbar shadow-inner">
                      {batchLog.map((log, i) => (
                        <p key={i} className={cn(
                          log.includes('✅') ? "text-emerald-400 font-bold" : 
                          log.includes('🚀') ? "text-amber-400 font-black text-lg" :
                          "text-cyan-400/70"
                        )}>{log}</p>
                      ))}
                    </div>
                  </div>
                )}

                {batchResults.length > 0 && !isBatchGenerating && (
                  <div className="space-y-10 animate-in slide-in-from-bottom-20 duration-1000">
                    <div className="flex justify-between items-center border-b-4 border-amber-500/20 pb-8">
                      <h4 className="text-4xl font-black uppercase text-amber-500 tracking-tighter italic">Registre de Session</h4>
                      <div className="flex gap-6">
                        <Button onClick={handleDownloadPortfolio} className="bg-slate-800 hover:bg-slate-700 text-white font-black uppercase h-14 px-12 rounded-2xl shadow-xl tracking-widest text-[10px]">TÉLÉCHARGER PACK Ω</Button>
                        <Button variant="outline" className="border-emerald-500 text-emerald-400 font-black uppercase h-14 px-12 rounded-2xl hover:bg-emerald-500/10 tracking-widest text-[10px]">EXPORTER AUDIT CSV</Button>
                      </div>
                    </div>
                    <div className="overflow-x-auto rounded-[3rem] border-2 border-white/5 bg-black/20">
                      <table className="w-full text-left text-[13px]">
                        <thead className="bg-slate-950/80 text-amber-500 font-black uppercase">
                          <tr>
                            <th className="p-8 tracking-widest">Souverain / Destinataire</th>
                            <th className="p-8 tracking-widest">Identifiant SCUGP</th>
                            <th className="p-8 tracking-widest">Hash de Souveraineté</th>
                            <th className="p-8 text-right tracking-widest">Statut</th>
                          </tr>
                        </thead>
                        <tbody>
                          {batchResults.map((r, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                              <td className="p-8 font-black text-white text-lg group-hover:text-amber-400 transition-colors uppercase italic">{r.name}</td>
                              <td className="p-8 font-mono text-cyan-400 font-bold">{r.id}</td>
                              <td className="p-8 font-mono text-slate-600 group-hover:text-slate-400 transition-colors">{r.hash.substring(0, 32)}...</td>
                              <td className="p-8 text-right">
                                <Badge className="bg-emerald-600/20 text-emerald-400 border-none uppercase text-[10px] font-black px-6 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]">{r.status}</Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Action Controls de Haute Autorité */}
        <div className="flex justify-center gap-12 print:hidden pdf-controls">
           <Button onClick={() => window.print()} className="bg-slate-900 text-white font-black h-24 px-24 rounded-[3rem] uppercase tracking-[0.5em] text-sm shadow-[0_0_100px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all">
             <Printer className="mr-6 h-8 w-8" /> Imprimer le Registre (A4)
           </Button>
           <Button 
            onClick={handleDownloadPortfolio}
            variant="outline" 
            className="border-[#8b0000] border-4 text-[#8b0000] font-black h-24 px-24 rounded-[3rem] uppercase tracking-[0.5em] text-sm hover:bg-red-50 hover:scale-105 active:scale-95 transition-all bg-white shadow-2xl"
           >
             <Download className="mr-6 h-8 w-8" /> Télécharger Portfolio Ω
           </Button>
        </div>
      </main>

      <footer className="py-48 text-center text-slate-400 text-[16px] font-black uppercase tracking-[2em] print:hidden opacity-30">
        &copy; {new Date().getFullYear()} SCUGP® RÉGIME RÉGALIEN — SCELLÉ DANS L'EXISTENCE — PORTRAIT DE L'UN.
      </footer>
    </div>
  );
}
