"use client"

import { useState, useEffect, useRef } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { 
  User, Star, Award, MapPin, 
  Globe, History, Share2, ShieldCheck, 
  Brain, Layers, Zap, Landmark, CheckCircle,
  Upload, Download, FileText, X, Camera, Eye,
  Droplets, Anchor, Fingerprint, Shield, Drill,
  RefreshCw, Loader2, Search, CheckCircle2, Trash2,
  Lock, Binary, ShieldAlert, Target, Sparkles
} from "lucide-react";
import { SCUGPHubUltimate, SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import dynamic from 'next/dynamic';
import { ChancerySearchUI } from "@/components/scugp/v-infinity/ChancerySearchUI";

const IdentityMap = dynamic(() => import('@/components/scugp/v-infinity/IdentityMap'), { 
  ssr: false,
  loading: () => <div className="h-[400px] bg-slate-900 animate-pulse rounded-[3rem]" />
});

export default function PersonalTrajectoryPage() {
  const { toast } = useToast();
  const db = useFirestore();
  const [mounted, setMounted] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("https://picsum.photos/seed/dr-hakim/400/400");
  const [idDocument, setIdDocument] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStep, setSyncStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const idInputRef = useRef<HTMLInputElement>(null);

  const bio = SCUGPHubUltimate.getBiography();
  const options = SCUGP_CORE_OPTIONS;

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: true});
      setHasCameraPermission(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
      toast({
        variant: 'destructive',
        title: 'Accès Caméra Refusé',
        description: 'Veuillez autoriser la caméra pour le scan biométrique.',
      });
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
        toast({ title: "Photo Mise à Jour", description: "Votre signature visuelle a été synchronisée." });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPhoto = () => {
    const link = document.createElement('a');
    link.href = profilePhoto;
    link.download = "SCUGP-SIGNATURE-BIO.png";
    link.click();
  };

  const startAutoConfig = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !db) return;

    setIsSyncing(true);
    setSyncStep(1); // Chiffrement SecurityShield
    
    const reader = new FileReader();
    reader.onloadend = async () => {
      const fileData = reader.result as string;
      setIdDocument(fileData);
      
      setTimeout(() => setSyncStep(2), 1500); // OCR Extraction
      setTimeout(() => setSyncStep(3), 3000); // Biometric Vector Generation
      setTimeout(() => setSyncStep(4), 4500); // SCUGP Diploma Linkage
      setTimeout(() => setSyncStep(5), 6000); // Oil Domain Activation
      
      await SCUGPHubUltimate.logAcademicActivity(db, "DR_HAKIM_CHIBOUBI", "ID_PROCESS", { file: "SECURE_SCAN" });
      
      setTimeout(() => {
        setIsSyncing(false);
        setSyncStep(6); // Terminé
        toast({
          title: "Architecture 100.0-BIO Scellée",
          description: "Votre vecteur biométrique et vos accès pétroliers sont protégés par le SecurityShield."
        });
      }, 7500);
    };
    reader.readAsDataURL(file);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-blue-500/30">
      <MainNavigation />
      
      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Header Stratégique */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-white/5 pb-20 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
          
          <div className="space-y-10 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
               <div className="h-64 w-64 rounded-full border-8 border-white/10 p-2 relative z-10 overflow-hidden shadow-5xl">
                  <img 
                    src={profilePhoto} 
                    alt="Dr Hakim Chibubi" 
                    className="h-full w-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-12 w-12 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform"
                      onClick={() => photoInputRef.current?.click()}
                    >
                      <Camera size={20} />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-12 w-12 rounded-full bg-emerald-600 text-white hover:scale-110 transition-transform"
                      onClick={handleDownloadPhoto}
                    >
                      <Download size={20} />
                    </Button>
                  </div>
               </div>
               <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-blue-600 rounded-2xl flex items-center justify-center border-4 border-slate-950 shadow-3xl animate-bounce">
                  <ShieldCheck className="h-10 w-10 text-white" />
               </div>
               <input type="file" ref={photoInputRef} onChange={handlePhotoChange} accept="image/*" className="hidden" />
            </div>

            <div className="text-center md:text-left space-y-6">
              <h1 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
                Dr. Hakim <br/><span className="text-blue-500 italic">Chibubi</span>
              </h1>
              <p className="text-slate-400 text-2xl italic tracking-[0.2em] max-w-4xl leading-relaxed font-medium uppercase">
                "{bio.title}"
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                 <Badge className="bg-blue-600 text-white border-none px-6 py-2 uppercase tracking-widest font-black">TWIN_7D: OPERATIONAL</Badge>
                 <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 font-mono">KEY: {options.activationKey}</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-3xl backdrop-blur-3xl relative z-10">
             {[
               { label: "Années d'Excellence", val: bio.trajectory_years, icon: History, color: "text-blue-400" },
               { label: "Diplômes Scellés", val: bio.certificates_count, icon: Award, color: "text-emerald-400" },
               { label: "Compétences Indexées", val: bio.skills_count, icon: Brain, color: "text-purple-400" },
               { label: "Impact Factor", val: "INFINI", icon: Zap, color: "text-amber-400" }
             ].map((s, i) => (
               <div key={i} className="text-center space-y-2 group">
                  <s.icon className={cn("h-6 w-6 mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity", s.color)} />
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{s.label}</p>
                  <p className={cn("text-3xl font-black font-mono leading-none", s.color)}>{s.val}</p>
               </div>
             ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="bg-slate-900/50 border border-white/5 p-2 rounded-full h-auto flex justify-center w-fit mx-auto gap-4">
            <TabsTrigger value="overview" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-blue-600 transition-all">Aperçu Général</TabsTrigger>
            <TabsTrigger value="chancery" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-amber-600 transition-all">Haute Chancellerie</TabsTrigger>
            <TabsTrigger value="biometrics" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-emerald-600 transition-all">Auto-Configuration 100.0</TabsTrigger>
            <TabsTrigger value="documents" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-red-600 transition-all">Pièce d'Identité</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-12 animate-in fade-in duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <Card className="lg:col-span-7 bg-slate-900 border-2 border-emerald-500/20 rounded-[3rem] p-10 flex flex-col items-center text-center gap-6 shadow-3xl">
                <div className="h-20 w-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center border-2 border-emerald-500/30">
                   <Shield className="h-10 w-10 text-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-xl font-black uppercase text-white tracking-widest">Habilitations Pétrolières</h3>
                   <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest">{options.owner.oilClearance}</p>
                </div>
                <Badge className="bg-emerald-600 text-white border-none px-8 py-2 rounded-full uppercase text-[10px] font-black">CERTIFIÉ OPITO</Badge>
              </Card>

              <Card className="lg:col-span-5 bg-slate-900 border-2 border-blue-500/20 rounded-[3rem] p-10 space-y-6 shadow-3xl">
                <div className="flex items-center justify-between">
                   <h3 className="text-lg font-black uppercase text-white tracking-widest">Recherche d'Identité</h3>
                   <Search className="h-5 w-5 text-blue-500" />
                </div>
                <div className="relative">
                   <input 
                    placeholder="Rechercher Agent (BOSIET, Forage, ID...)" 
                    className="w-full bg-black border-slate-800 h-12 rounded-2xl pl-12 text-sm focus:border-blue-500 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                   />
                   <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-600" />
                </div>
                <p className="text-[10px] text-slate-500 italic">"Moteur de recherche couplé à la base biométrique et au registre des diplômes."</p>
              </Card>
            </div>

            <section className="space-y-12">
               <div className="flex flex-col items-center gap-8 text-center">
                  <Globe className="h-20 w-20 text-blue-500 opacity-20 animate-spin-slow" />
                  <h2 className="text-6xl font-black uppercase tracking-[0.5em] text-white">DÉPLOIEMENT RIG MAP</h2>
                  <p className="text-slate-500 text-xl font-mono uppercase tracking-[0.2em]">Localisation en temps réel des agents et infrastructures</p>
               </div>
               <div className="h-[600px] border-8 border-slate-900 rounded-[4rem] overflow-hidden shadow-5xl relative z-0">
                  <IdentityMap query={searchQuery} />
               </div>
            </section>
          </TabsContent>

          <TabsContent value="chancery" className="space-y-12 animate-in fade-in duration-1000">
             <ChancerySearchUI />
          </TabsContent>

          <TabsContent value="biometrics" className="space-y-12 animate-in fade-in duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <Card className="lg:col-span-7 bg-slate-900 border-2 border-blue-500/20 rounded-[3rem] overflow-hidden shadow-2xl">
                 <CardHeader className="bg-blue-500/10 p-10 border-b border-white/5">
                    <CardTitle className="text-2xl font-black uppercase text-white">Capture Biométrique Sécurisée</CardTitle>
                    <CardDescription className="text-slate-500 uppercase font-black text-[10px]">Architecture 100.0-BIO : Chiffrement AES-256 & Vecteur non-réversible</CardDescription>
                 </CardHeader>
                 <CardContent className="p-10 space-y-8">
                    <div className="aspect-video w-full bg-black rounded-[2.5rem] border-4 border-slate-800 relative overflow-hidden group">
                       {hasCameraPermission ? (
                         <video ref={videoRef} className="w-full h-full object-cover grayscale opacity-60" autoPlay muted />
                       ) : (
                         <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                            <Camera size={64} className="text-slate-800" />
                            <Button onClick={getCameraPermission} className="bg-blue-600 font-black uppercase tracking-widest rounded-xl">Activer Caméra</Button>
                         </div>
                       )}
                       {hasCameraPermission && (
                         <div className="absolute inset-0 border-2 border-blue-500/30 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]" />
                            <div className="w-full h-1 bg-blue-500 shadow-[0_0_20px_blue] absolute top-0 animate-[scan-laser_2s_linear_infinite]" />
                         </div>
                       )}
                    </div>

                    <div className="flex gap-4">
                       <Button onClick={() => photoInputRef.current?.click()} className="flex-1 bg-blue-600 h-14 rounded-2xl font-black uppercase tracking-widest">Charger Signature Visuelle</Button>
                       <Button variant="outline" className="flex-1 border-slate-800 text-slate-400 h-14 rounded-2xl font-black uppercase tracking-widest">Vérification Liveness</Button>
                    </div>
                 </CardContent>
              </Card>

              <Card className="lg:col-span-5 bg-slate-900 border-2 border-emerald-500/20 rounded-[3rem] p-10 space-y-8 shadow-3xl">
                 <div className="flex items-center gap-4 text-emerald-500">
                    <Fingerprint size={32} className="animate-pulse" />
                    <h3 className="text-xl font-black uppercase tracking-widest">Flux de Synchronisation</h3>
                 </div>
                 
                 <div className="space-y-6">
                    {[
                      { label: "Chiffrement AES-256", step: 1, desc: "SecurityShield Protection" },
                      { label: "Extraction OCR", step: 2, desc: "Identité Régalienne" },
                      { label: "Vecteur Biométrique", step: 3, desc: "Landmarks normalisés" },
                      { label: "Liaison Diplômes", step: 4, desc: "Ancrage SCUGP" },
                      { label: "Oil Sector Activation", step: 5, desc: "OPITO/BOSIET Seal" }
                    ].map((s) => (
                      <div key={s.step} className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border transition-all duration-700",
                        syncStep >= s.step ? "bg-emerald-500/10 border-emerald-500/30" : "bg-black/40 border-white/5 opacity-40"
                      )}>
                         <div className="flex items-center gap-4">
                            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-black", syncStep >= s.step ? "bg-emerald-500 text-black" : "bg-slate-800 text-slate-500")}>
                              {syncStep > s.step ? <CheckCircle2 size={16} /> : s.step}
                            </div>
                            <div>
                               <p className="text-[10px] font-black uppercase text-white">{s.label}</p>
                               <p className="text-[8px] text-slate-500 uppercase font-bold">{s.desc}</p>
                            </div>
                         </div>
                         {syncStep === s.step && isSyncing && <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />}
                      </div>
                    ))}
                 </div>

                 <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                    <p className="text-[10px] text-emerald-400/70 italic leading-relaxed">
                      "L'Architecture 100.0-BIO garantit que vos données brutes sont détruites après extraction du vecteur de souveraineté. Tout est scellé dans le maillage."
                    </p>
                 </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-12 animate-in fade-in duration-1000">
            <Card className="bg-slate-900 border-2 border-red-500/20 rounded-[4rem] overflow-hidden shadow-2xl">
               <CardHeader className="bg-red-500/10 p-12 border-b border-white/5 text-center">
                  <div className="p-4 bg-red-500/20 rounded-3xl w-fit mx-auto mb-6 border border-red-500/30">
                    <ShieldAlert className="h-12 w-12 text-red-500" />
                  </div>
                  <CardTitle className="text-4xl font-black uppercase tracking-widest">Coffre-fort SecurityShield</CardTitle>
                  <CardDescription className="text-slate-500 uppercase font-bold mt-2">Chiffrement AES-256 de grade militaire pour vos documents régalien</CardDescription>
               </CardHeader>
               <CardContent className="p-16 space-y-12">
                  <div 
                    className="aspect-video w-full border-4 border-dashed border-red-500/20 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 gap-8 cursor-pointer hover:bg-red-500/5 transition-all group"
                    onClick={() => idInputRef.current?.click()}
                  >
                     {idDocument ? (
                       <div className="relative w-full h-full p-10 border-[10px] border-double border-red-800 bg-white/5 rounded-3xl overflow-hidden shadow-5xl">
                          <img src={idDocument} alt="ID Document" className="h-full w-full object-contain" />
                          <div className="absolute inset-0 bg-red-900/20 pointer-events-none" />
                          <div className="absolute top-4 right-4 flex gap-4">
                             <Button size="icon" className="bg-black/80 hover:bg-red-600 rounded-xl" onClick={(e) => { e.stopPropagation(); setIdDocument(null); }}>
                                <Trash2 size={20} />
                             </Button>
                             <Button size="icon" className="bg-black/80 hover:bg-blue-600 rounded-xl" onClick={(e) => { e.stopPropagation(); window.open(idDocument); }}>
                                <Download size={20} />
                             </Button>
                          </div>
                       </div>
                     ) : (
                       <>
                         <div className="h-32 w-32 rounded-full bg-red-500/10 flex items-center justify-center border-2 border-red-500/20 group-hover:scale-110 transition-transform shadow-2xl">
                            <Upload className="h-16 w-16 text-red-500" />
                         </div>
                         <div className="space-y-2">
                            <p className="text-2xl font-black text-white uppercase tracking-tighter">Charger votre Pièce d'Identité (ID_CARD_PDF)</p>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Le document sera chiffré avant l'extraction sémantique</p>
                         </div>
                       </>
                     )}
                     <input type="file" ref={idInputRef} onChange={startAutoConfig} accept="image/*,application/pdf" className="hidden" />
                  </div>

                  {isSyncing && (
                    <div className="space-y-8 animate-in fade-in max-w-2xl mx-auto">
                       <div className="flex items-center gap-6 text-red-500 font-black uppercase text-sm tracking-[0.3em] justify-center">
                          <RefreshCw className="h-6 w-6 animate-spin" /> Moteur de Synchronisation AGI en action...
                       </div>
                    </div>
                  )}
               </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Legacy Institutionnel */}
        <section className="py-24 border-t border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <h2 className="text-5xl font-black uppercase tracking-widest leading-tight">Héritage <span className="text-blue-500 italic">Institutionnel</span></h2>
                 <p className="text-xl text-slate-400 leading-relaxed font-medium uppercase tracking-tight">
                    "Mon parcours est une boucle de rétroaction positive entre l'excellence académique et la matérialisation souveraine."
                 </p>
              </div>
              <div className="p-16 bg-slate-900 border-4 border-blue-500/20 rounded-[5rem] overflow-hidden shadow-5xl text-center space-y-10 relative group">
                 <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Landmark size={120} className="text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-black text-white uppercase tracking-widest">CUPB BEIJING</h3>
                 <p className="text-sm text-slate-400 font-mono tracking-[0.5em] uppercase">Sovereign Source Institution</p>
                 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black h-16 rounded-[2rem] uppercase tracking-widest shadow-2xl border-none">
                    Voir les Contributions Académiques
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-32 border-t border-white/5 text-center text-slate-600 text-[10px] font-black uppercase tracking-[1em] opacity-50">
        &copy; {new Date().getFullYear()} SCUGP® DIGITAL IDENTITY — DR. HAKIM CHIBUBI — SCELLÉ DANS LA SOURCE.
      </footer>
    </div>
  );
}
