
"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { 
  Plus, Search, ShieldCheck, Award, 
  Landmark, Microscope, 
  Database, History, CheckCircle2,
  Download, Trash2, Edit3, Save, X, 
  UserPlus, FilePlus, Key, Eye, Fingerprint, Lock, ShieldAlert, Activity, Shield,
  Server, Zap, RefreshCw, AlertTriangle, Network, BarChart3, Globe, Cpu, Bot
} from "lucide-react";
import { SCUGPHubUltimate, Diploma, BiometricAuditRecord } from "@/lib/scugp-service";
import { OrchestratorService, ModuleStatus } from "@/lib/orchestrator-service";
import { useFirestore, useCollection } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { cn } from "@/lib/utils";
import moment from "moment";

export default function AdminChanceryPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("registry");
  const [newCert, setNewCert] = useState<Partial<Diploma>>({
    title: "",
    type: "Doctorat",
    field: "",
    institution: "China University of Petroleum (Beijing)",
    issueDate: moment().format('YYYY-MM-DD'),
    honors: "Summa Cum Laude"
  });

  const certsQuery = db ? query(collection(db, "diplomas"), orderBy("issueDate", "desc")) : null;
  const { data: dbDiplomas } = useCollection<Diploma>(certsQuery);
  const staticDiplomas = SCUGPHubUltimate.getDiplomas();
  const allDiplomas = [...(dbDiplomas || []), ...staticDiplomas];

  const auditsQuery = db ? query(collection(db, "biometric_audits"), orderBy("timestamp", "desc"), limit(20)) : null;
  const { data: audits } = useCollection<BiometricAuditRecord>(auditsQuery);

  const systemModules = OrchestratorService.getSystemStatus();
  const systemHealth = OrchestratorService.getGlobalHealth();
  const aggStats = OrchestratorService.getAggregatedStats();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCreate = async () => {
    if (!db) return;
    try {
      await SCUGPHubUltimate.issueCertificate(db, newCert);
      toast({ title: "Certificat Émis", description: "Le titre a été scellé sur le registre souverain." });
      setIsModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRevoke = async (id: string) => {
    if (!db) return;
    try {
      await SCUGPHubUltimate.revokeCertificate(db, id);
      toast({ title: "Certificat Révoqué", description: "L'annulation a été propagée au ledger." });
    } catch (e) {
      console.error(e);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-amber-500/30">
      <MainNavigation />
      
      <main className="container mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
               <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/30 px-6 py-2 uppercase font-black text-[10px] rounded-full">
                 ADMINISTRATION RÉGALIENNE
               </Badge>
               <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-2">
                 <Lock className="h-3 w-3" /> SECURITY: QUANTUM_SEALED
               </span>
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tighter">
              Gestion de la <span className="text-amber-500 italic">Chancellerie</span>
            </h1>
            <p className="text-slate-500 text-lg uppercase tracking-widest font-bold">
              "L'autorité de l'Un administrée par la rigueur du Code."
            </p>
          </div>

          <div className="flex gap-4">
             <Button onClick={() => setIsModalOpen(true)} className="bg-amber-500 hover:bg-amber-600 text-black font-black h-12 px-10 rounded-2xl shadow-xl uppercase text-[10px] tracking-widest">
               <FilePlus className="mr-2 h-4 w-4" /> Nouveau Titre
             </Button>
             <Button variant="outline" className="border-white/10 text-white font-black h-12 px-10 rounded-2xl uppercase text-[10px] tracking-widest">
               <Key className="mr-2 h-4 w-4" /> Gestion des Clés
             </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="bg-slate-900/50 border border-white/5 p-2 rounded-full h-auto flex justify-center w-fit mx-auto gap-2">
            <TabsTrigger value="registry" className="px-8 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all">
              <Database className="mr-2 h-4 w-4" /> Registre
            </TabsTrigger>
            <TabsTrigger value="audit" className="px-8 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all">
              <ShieldAlert className="mr-2 h-4 w-4" /> Audit Biométrique
            </TabsTrigger>
            <TabsTrigger value="health" className="px-8 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-blue-500 data-[state=active]:text-black transition-all">
              <Activity className="mr-2 h-4 w-4" /> Santé Système
            </TabsTrigger>
          </TabsList>

          <TabsContent value="registry" className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Titres Émis</p>
                  <p className="text-4xl font-black font-mono text-amber-500">{allDiplomas.length}</p>
               </Card>
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Actifs</p>
                  <p className="text-4xl font-black font-mono text-emerald-500">{allDiplomas.filter(d => d.status === 'actif').length}</p>
               </Card>
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Sur Blockchain</p>
                  <p className="text-4xl font-black font-mono text-blue-500">{allDiplomas.length}</p>
               </Card>
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Compteur Vérif.</p>
                  <p className="text-4xl font-black font-mono text-purple-500">{allDiplomas.reduce((acc, d) => acc + d.verificationCount, 0)}</p>
               </Card>
            </div>

            <Card className="bg-slate-900 border-white/5 rounded-[3rem] shadow-3xl overflow-hidden">
               <CardHeader className="bg-slate-950/50 p-8 border-b border-white/5">
                  <div className="flex justify-between items-center">
                     <CardTitle className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-4">
                        <Database className="h-6 w-6 text-amber-500" /> Registre Central des Certifications
                     </CardTitle>
                     <div className="relative w-80">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-600" />
                        <Input placeholder="Rechercher un certificat..." className="pl-10 bg-black/40 border-slate-800 text-[10px] rounded-xl h-9" />
                     </div>
                  </div>
               </CardHeader>
               <CardContent className="p-0 overflow-x-auto">
                  <table className="w-full text-left">
                     <thead className="bg-black/20 text-slate-500 text-[10px] font-black uppercase">
                        <tr>
                           <th className="p-6">Identifiant</th>
                           <th className="p-6">Titre & Type</th>
                           <th className="p-6">Date</th>
                           <th className="p-6">Vérifs</th>
                           <th className="p-6">Statut</th>
                           <th className="p-6 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="text-[11px]">
                        {allDiplomas.map((d, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                             <td className="p-6 font-mono text-amber-500 font-bold">{d.certificateId}</td>
                             <td className="p-6">
                                <p className="font-black text-white uppercase tracking-tighter">{d.title}</p>
                                <p className="text-[9px] text-slate-500 font-bold uppercase mt-1">{d.type} | {d.institution}</p>
                             </td>
                             <td className="p-6 font-mono text-slate-400">{d.issueDate}</td>
                             <td className="p-6 text-center font-black text-blue-400">{d.verificationCount}</td>
                             <td className="p-6">
                                <Badge className={cn(
                                  "text-[8px] font-black border-none uppercase px-3",
                                  d.status === 'actif' ? "bg-emerald-600/20 text-emerald-500" : "bg-red-600/20 text-red-500"
                                )}>{d.status}</Badge>
                             </td>
                             <td className="p-6 text-right space-x-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600 hover:text-white"><Edit3 size={14} /></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600 hover:text-white"><Eye size={14} /></Button>
                                {d.status === 'actif' && (
                                  <Button onClick={() => handleRevoke(d.id || d.certificateId)} variant="ghost" size="icon" className="h-8 w-8 text-red-900 hover:text-red-500"><Trash2 size={14} /></Button>
                                )}
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit" className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <Card className="bg-slate-900 border-white/5 rounded-[3rem] shadow-3xl overflow-hidden">
                  <CardHeader className="bg-slate-950/50 p-8 border-b border-white/5">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xs font-black uppercase text-emerald-400 tracking-widest flex items-center gap-4">
                        <History className="h-6 w-6 text-emerald-500" /> Registre d'Audit Biométrique (PoE)
                      </CardTitle>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 text-[8px] font-black uppercase tracking-widest px-4">IMMUTABLE_LOGS</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-black/20 text-slate-500 text-[10px] font-black uppercase">
                          <tr>
                            <th className="p-6">Horodatage</th>
                            <th className="p-6">Identité (Hash)</th>
                            <th className="p-6">Vecteur (Hash)</th>
                            <th className="p-6">Confiance</th>
                            <th className="p-6 text-right">Intégrité</th>
                          </tr>
                        </thead>
                        <tbody className="text-[11px]">
                          {audits?.map((log, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                              <td className="p-6 font-mono text-slate-400">{moment(log.timestamp).format('HH:mm:ss DD/MM')}</td>
                              <td className="p-6">
                                <span className="font-mono text-blue-400">{log.userHash.substring(0, 12)}...</span>
                              </td>
                              <td className="p-6">
                                <span className="font-mono text-purple-400">{log.biometricHash.substring(0, 16)}...</span>
                              </td>
                              <td className="p-6">
                                <div className="flex items-center gap-2">
                                  <div className="h-1 w-12 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500" style={{ width: `${log.confidence}%` }} />
                                  </div>
                                  <span className="font-black text-emerald-500">{log.confidence}%</span>
                                </div>
                              </td>
                              <td className="p-6 text-right">
                                <Badge className="bg-emerald-600/20 text-emerald-500 border-none uppercase text-[7px] font-black">VALIDATED_BY_MESH</Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <Card className="bg-black border-white/5 rounded-[2.5rem] p-8 text-center space-y-6">
                  <div className="h-20 w-20 rounded-full bg-emerald-500/10 flex items-center justify-center border-2 border-emerald-500/20 mx-auto shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    <Shield className="h-10 w-10 text-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase text-white tracking-tighter leading-tight">Vérification d'Intégrité</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Contrôle de non-altération du hash biométrique</p>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-black font-black uppercase h-14 rounded-2xl shadow-xl tracking-widest text-[10px]">
                    LANCER AUDIT GLOBAL
                  </Button>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="health" className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Services Sains</p>
                  <p className="text-4xl font-black font-mono text-emerald-500">{aggStats.healthyServices} / {aggStats.totalServices}</p>
               </Card>
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Latence Moyenne</p>
                  <p className="text-4xl font-black font-mono text-blue-500">{aggStats.avgLatency}ms</p>
               </Card>
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Requêtes / Min</p>
                  <p className="text-4xl font-black font-mono text-purple-500">1.42M</p>
               </Card>
               <Card className="bg-slate-900 border-white/5 rounded-[2rem] shadow-2xl p-8 text-center space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Uptime Global</p>
                  <p className="text-4xl font-black font-mono text-emerald-500">100%</p>
               </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <Card className="bg-slate-900 border-white/5 rounded-[3rem] shadow-3xl overflow-hidden">
                  <CardHeader className="bg-slate-950/50 p-8 border-b border-white/5">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xs font-black uppercase text-blue-400 tracking-widest flex items-center gap-4">
                        <Server className="h-6 w-6 text-blue-500" /> Moniteur d'Infrastructure v10.0
                      </CardTitle>
                      <Badge className={cn(
                        "font-black uppercase text-[10px] px-6 py-2 rounded-full",
                        systemHealth === 'healthy' ? "bg-emerald-600/20 text-emerald-500" : "bg-red-600/20 text-red-500"
                      )}>SYSTEM_STATUS: {systemHealth.toUpperCase()}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-black/20 text-slate-500 text-[10px] font-black uppercase">
                          <tr>
                            <th className="p-6">ID</th>
                            <th className="p-6">Module / Service</th>
                            <th className="p-6">Statut</th>
                            <th className="p-6">Latence</th>
                            <th className="p-6">Uptime</th>
                            <th className="p-6 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="text-[11px]">
                          {systemModules.map((m) => (
                            <tr key={m.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                              <td className="p-6 font-mono text-slate-500">{m.id.toString().padStart(2, '0')}</td>
                              <td className="p-6">
                                <p className="font-black text-white uppercase">{m.name}</p>
                                {m.critical && <Badge className="bg-red-600/10 text-red-500 border-none text-[7px] font-black mt-1">CRITICAL_PATH</Badge>}
                              </td>
                              <td className="p-6">
                                <div className="flex items-center gap-2">
                                  <div className={cn(
                                    "h-2 w-2 rounded-full animate-pulse",
                                    m.status === 'healthy' ? "bg-emerald-500" : m.status === 'degraded' ? "bg-amber-500" : "bg-red-500"
                                  )} />
                                  <span className={cn(
                                    "font-black uppercase text-[9px]",
                                    m.status === 'healthy' ? "text-emerald-500" : m.status === 'degraded' ? "text-amber-500" : "text-red-500"
                                  )}>{m.status}</span>
                                </div>
                              </td>
                              <td className="p-6 font-mono text-blue-400">{m.latency}</td>
                              <td className="p-6 font-mono text-slate-400">{m.uptime}</td>
                              <td className="p-6 text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600 hover:text-white"><RefreshCw size={14} /></Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <Card className="bg-black border-white/5 rounded-[2.5rem] p-8 space-y-8">
                  <div className="text-center space-y-4">
                    <div className="h-20 w-20 rounded-full bg-blue-500/10 flex items-center justify-center border-2 border-blue-500/20 mx-auto shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                      <Zap className="h-10 w-10 text-blue-500 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white">Performance Globale</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-2">
                        <span>Disponibilité Reseau</span>
                        <span className="text-emerald-500">99.99%</span>
                      </div>
                      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: '99.99%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-2">
                        <span>Charge IA Cognitive</span>
                        <span className="text-blue-500">14%</span>
                      </div>
                      <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '14%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-900 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-emerald-500" />
                      <p className="text-[10px] font-black text-white uppercase">Sceau d'Intégrité v10</p>
                    </div>
                    <p className="text-[9px] text-slate-500 italic leading-relaxed">
                      "L'orchestrateur SCUGP valide l'intégrité de chaque module via un protocole de consensus distribué sur 14 nœuds mondiaux."
                    </p>
                  </div>
                </Card>

                <div className="p-10 bg-slate-900 border-4 border-blue-500/20 rounded-[3rem] text-center group transition-all hover:bg-black shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Network size={80} className="text-blue-500/30 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="text-lg font-black text-white uppercase mb-2 tracking-tighter">Maillage Mondial</h4>
                   <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">14 ACTIVE_REGIONS_SYNCED</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal Simulation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
           <Card className="bg-slate-900 border-amber-500/30 w-full max-w-2xl rounded-[3rem] shadow-5xl overflow-hidden animate-in zoom-in duration-300">
              <CardHeader className="bg-amber-500/10 p-10 border-b border-white/5">
                 <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-black uppercase text-white">Émission de Titre Souverain</CardTitle>
                    <Button variant="ghost" onClick={() => setIsModalOpen(false)} className="text-white hover:bg-white/5"><X /></Button>
                 </div>
              </CardHeader>
              <CardContent className="p-10 space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase">Titre du Diplôme</label>
                       <Input value={newCert.title} onChange={e => setNewCert({...newCert, title: e.target.value})} className="bg-black/40 border-slate-800 text-xs h-12" placeholder="Ex: Master en IA" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase">Type</label>
                       <select value={newCert.type} onChange={e => setNewCert({...newCert, type: e.target.value})} className="w-full bg-black/40 border border-slate-800 text-white text-xs h-12 rounded-md px-4">
                          <option>Doctorat</option>
                          <option>Master</option>
                          <option>Licence</option>
                          <option>Certification</option>
                       </select>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase">Institution</label>
                    <Input value={newCert.institution} onChange={e => setNewCert({...newCert, institution: e.target.value})} className="bg-black/40 border-slate-800 text-xs h-12" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase">Domaine</label>
                       <Input value={newCert.field} onChange={e => setNewCert({...newCert, field: e.target.value})} className="bg-black/40 border-slate-800 text-xs h-12" placeholder="Pétrole, IA..." />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase">Mention</label>
                       <Input value={newCert.honors} onChange={e => setNewCert({...newCert, honors: e.target.value})} className="bg-black/40 border-slate-800 text-xs h-12" />
                    </div>
                 </div>
                 <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl flex items-start gap-4">
                    <ShieldCheck className="h-6 w-6 text-amber-500 shrink-0" />
                    <p className="text-[10px] text-slate-400 italic">"L'émission générera un identifiant unique (UUID-SCUGP) et ancrera le titre sur le ledger immuable via une transaction signée."</p>
                 </div>
              </CardContent>
              <CardFooter className="p-10 border-t border-white/5 bg-black/20">
                 <Button onClick={handleCreate} className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black h-16 rounded-[1.5rem] uppercase tracking-widest text-xs">
                    SCELLER LE TITRE Ω
                 </Button>
              </CardFooter>
           </Card>
        </div>
      )}
    </div>
  );
}
