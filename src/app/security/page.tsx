"use client"

import { useState, useEffect, useMemo } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Shield, Lock, Unlock, ShieldAlert, CheckCircle, XCircle, 
  Info, Fingerprint, History, Zap, Brain, Network, Activity, Loader2, Sparkles
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { Badge } from "@/components/ui/badge";
import { FraudEngineUI } from "@/components/scugp/v-infinity/FraudEngineUI";
import { EUDIWalletUI } from "@/components/scugp/v-infinity/EUDIWalletUI";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { validateAccess, type ValidateAccessOutput } from "@/ai/flows/validate-access-flow";

export default function SecurityPage() {
  const db = useFirestore();
  const [role, setRole] = useState("anonymous");
  const [targetCollection, setTargetCollection] = useState("academic_projects");
  const [operation, setOperation] = useState("read");
  const [aiResult, setAiResult] = useState<ValidateAccessOutput | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("fraud");

  useEffect(() => {
    setMounted(true);
  }, []);

  const auditQuery = useMemo(() => 
    db ? query(collection(db, "security_audit"), orderBy("timestamp", "desc"), limit(10)) : null
  , [db]);
  const { data: logs } = useCollection(auditQuery);

  const checkPermissions = async () => {
    setIsValidating(true);
    setAiResult(null);
    try {
      const result = await validateAccess({
        role,
        resourcePath: targetCollection,
        operation: operation as any
      });
      setAiResult(result);
    } catch (error) {
      console.error("AI Validation failed", error);
    } finally {
      setIsValidating(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <MainNavigation />
      <main className="container mx-auto px-4 py-12 space-y-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-white/5 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <Badge className="bg-red-600/10 text-red-500 border-red-500/30 px-6 py-2 uppercase font-black text-[10px] rounded-full">
                   MAILLAGE DE SÉCURITÉ Ω
                 </Badge>
                 <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-2">
                   <Lock className="h-3 w-3" /> ETHICS_CONSENSUS: 1.00
                 </span>
              </div>
              <h1 className="text-6xl font-black uppercase tracking-tighter">
                Souveraineté <span className="text-red-500 italic">et Confiance</span>
              </h1>
              <p className="text-slate-500 text-xl uppercase tracking-widest font-bold">
                "La sécurité n'est pas un état, c'est l'être-même du système certifié par la Source."
              </p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-16">
            <TabsList className="bg-slate-900/50 border border-white/5 p-2 rounded-full h-auto flex justify-center w-fit mx-auto gap-4">
              <TabsTrigger value="fraud" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">
                <ShieldAlert className="mr-2 h-4 w-4" /> IA Anti-Fraude
              </TabsTrigger>
              <TabsTrigger value="wallet" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">
                <Lock className="mr-2 h-4 w-4" /> eIDAS 2.0 Wallet
              </TabsTrigger>
              <TabsTrigger value="simulation" className="px-12 py-4 rounded-full uppercase font-black text-[10px] tracking-widest data-[state=active]:bg-emerald-600 data-[state=active]:text-white transition-all">
                <Activity className="mr-2 h-4 w-4" /> IA de Validation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fraud" className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <FraudEngineUI />
            </TabsContent>

            <TabsContent value="wallet" className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <EUDIWalletUI />
            </TabsContent>

            <TabsContent value="simulation" className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-8">
                  <Card className="bg-slate-900 border-slate-800 rounded-[3rem] shadow-2xl">
                    <CardHeader className="p-10">
                      <CardTitle className="text-sm font-black uppercase text-blue-400 flex items-center gap-3">
                        <Brain className="h-5 w-5" /> AI Role Validator
                      </CardTitle>
                      <CardDescription className="text-[10px] font-bold uppercase">Configure an access attempt to be audited by the Source AI.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label className="text-[10px] font-black uppercase text-slate-500">Identity Grade</Label>
                          <Select value={role} onValueChange={setRole}>
                            <SelectTrigger className="bg-black/40 border-slate-800 h-12 rounded-2xl">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800 text-white">
                              <SelectItem value="anonymous">Anonymous Public User</SelectItem>
                              <SelectItem value="certified">Certified SCUGP Member</SelectItem>
                              <SelectItem value="admin">System Administrator</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-[10px] font-black uppercase text-slate-500">Target Strate</Label>
                          <Select value={targetCollection} onValueChange={setTargetCollection}>
                            <SelectTrigger className="bg-black/40 border-slate-800 h-12 rounded-2xl">
                              <SelectValue placeholder="Select collection" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800 text-white">
                              <SelectItem value="academic_projects">academic_projects</SelectItem>
                              <SelectItem value="scugp_v107_analytics">scugp_analytics</SelectItem>
                              <SelectItem value="sovereign_decrees">sovereign_decrees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase text-slate-500">Intended Operation</Label>
                        <Select value={operation} onValueChange={setOperation}>
                          <SelectTrigger className="bg-black/40 border-slate-800 h-12 rounded-2xl">
                            <SelectValue placeholder="Select operation" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-800 text-white">
                            <SelectItem value="read">Read (Get/List)</SelectItem>
                            <SelectItem value="write">Write (Create/Update/Delete)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter className="p-10">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 h-14 font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl border-none" 
                        onClick={checkPermissions}
                        disabled={isValidating}
                      >
                        {isValidating ? <Loader2 className="animate-spin mr-2" /> : <Zap className="mr-2 h-4 w-4" />}
                        Interroger l'AI de Sécurité
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className={cn(
                    "bg-slate-900 border-2 transition-all duration-1000 rounded-[3rem] shadow-2xl",
                    aiResult ? (aiResult.isAllowed ? "border-emerald-500/30" : "border-red-500/30") : "border-slate-800"
                  )}>
                    <CardHeader className="p-10">
                      <CardTitle className="text-sm font-black uppercase text-slate-400 flex items-center gap-3">
                        {aiResult ? (
                          aiResult.isAllowed ? <CheckCircle className="h-5 w-5 text-emerald-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                        ) : (
                          <Info className="h-5 w-5 text-slate-600" />
                        )}
                        Verdict Oraculaire
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="min-h-[250px] flex flex-col justify-center p-10">
                      {aiResult ? (
                        <div className="space-y-8 animate-in zoom-in duration-500">
                          <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className={cn(
                              "p-10 rounded-full shadow-3xl",
                              aiResult.isAllowed ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                            )}>
                              {aiResult.isAllowed ? <Unlock className="h-16 w-16" /> : <Lock className="h-16 w-16" />}
                            </div>
                            <div>
                              <p className="font-black text-4xl uppercase tracking-tighter">{aiResult.isAllowed ? "Accès Accordé" : "Accès Refusé"}</p>
                              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Fidélité de Décision : {(aiResult.confidence * 100).toFixed(2)}%</p>
                            </div>
                          </div>
                          
                          <Alert className={cn(
                            "bg-black/40 border-none p-8 rounded-3xl",
                            aiResult.isAllowed ? "text-emerald-400" : "text-red-400"
                          )}>
                            <Sparkles className="h-6 w-6" />
                            <AlertTitle className="text-sm font-black uppercase mb-4">Raisonnement du Gardien</AlertTitle>
                            <AlertDescription className="font-mono text-xs leading-relaxed italic">
                              "{aiResult.explanation}"
                            </AlertDescription>
                            <div className="mt-6 pt-6 border-t border-white/5">
                               <p className="text-[10px] font-black text-slate-600 uppercase">Référence Protocole</p>
                               <p className="text-[11px] font-bold uppercase">{aiResult.securityRuleReference}</p>
                            </div>
                          </Alert>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center py-8">
                          {isValidating ? (
                            <Loader2 className="h-20 w-20 text-blue-500 animate-spin mb-6" />
                          ) : (
                            <Shield className="h-20 w-20 text-slate-800 mb-6 animate-pulse" />
                          )}
                          <p className="text-sm text-slate-600 uppercase font-black tracking-[0.5em]">
                            {isValidating ? "Consultation du Maillage Neural..." : "En attente des paramètres de simulation"}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-5 space-y-8">
                  <Card className="bg-black border-slate-800 rounded-[3rem] shadow-3xl overflow-hidden h-full flex flex-col">
                    <CardHeader className="bg-slate-900/50 border-b border-slate-800 p-10">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xs font-black uppercase text-purple-400 flex items-center gap-4 tracking-widest">
                          <Fingerprint className="h-6 w-6" /> Immutable Audit Trail
                        </CardTitle>
                        <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-400 font-black">REAL-TIME</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 overflow-y-auto max-h-[800px] scrollbar-thin scrollbar-thumb-slate-800">
                      <div className="divide-y divide-slate-800">
                        {logs?.map((log: any, i: number) => (
                          <div key={i} className="p-10 hover:bg-slate-900/40 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                              <span className="text-[10px] font-mono text-purple-500 font-black uppercase tracking-widest">{log.action}</span>
                              <Badge variant="outline" className={cn(
                                "text-[8px] border-none px-3 h-5 uppercase font-black",
                                log.status === 'SUCCESS' ? "bg-emerald-600/20 text-emerald-400" : "bg-red-600/20 text-red-400"
                              )}>{log.status}</Badge>
                            </div>
                            <p className="text-sm font-bold text-slate-300">{log.userId} @ {log.ip}</p>
                            <p className="text-[10px] text-slate-600 font-mono mt-4 uppercase tracking-widest">{new Date(log.timestamp).toLocaleString()}</p>
                          </div>
                        ))}
                        {logs?.length === 0 && (
                          <div className="p-20 text-center">
                            <History className="h-16 w-16 text-slate-800 mx-auto mb-6" />
                            <p className="text-sm text-slate-600 uppercase font-black tracking-[0.3em]">No security events recorded</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-8 border-t border-slate-800 bg-slate-950/50">
                      <Button variant="ghost" className="w-full text-xs font-black uppercase text-slate-500 hover:text-white tracking-[0.3em]">
                        Export Blockchain Hash (.json)
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
