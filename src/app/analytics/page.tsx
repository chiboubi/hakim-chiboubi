"use client"

import { useState, useEffect } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { summarizeAnalyticsData } from "@/ai/flows/summarize-analytics-data";
import { Loader2, RefreshCw, TrendingUp, Zap, Info, CheckCircle2, AlertTriangle, Cpu, ShieldAlert, ChevronRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useFirestore } from "@/firebase";
import { SCUGPHubUltimate } from "@/lib/scugp-service";
import { cn } from "@/lib/utils";
import { CarbonDashboard } from "@/components/scugp/CarbonDashboard";
import { ArcticCrisisSimulator } from "@/components/scugp/ArcticCrisisSimulator";
import { CollaborationPortal } from "@/components/scugp/PartnerCollaboration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockAnalyticsData = [
  { name: "Mon", visitors: 4000, projects: 24, downloads: 2400 },
  { name: "Tue", visitors: 3000, projects: 13, downloads: 2210 },
  { name: "Wed", visitors: 2000, projects: 98, downloads: 2290 },
  { name: "Thu", visitors: 2780, projects: 39, downloads: 2000 },
  { name: "Fri", visitors: 1890, projects: 48, downloads: 2181 },
  { name: "Sat", visitors: 2390, projects: 38, downloads: 2500 },
  { name: "Sun", visitors: 3490, projects: 43, downloads: 2100 },
];

export default function AnalyticsPage() {
  const db = useFirestore();
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [simulationLoading, setSimulationLoading] = useState(false);
  const [lastSimResult, setLastSimResult] = useState<any>(null);
  const [efficiencyRating] = useState(0.35); // Above 0.30 target
  const [activeTab, setActiveTab] = useState("overview");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGenerateSummary = async () => {
    setLoading(true);
    try {
      const dataString = JSON.stringify(mockAnalyticsData);
      const result = await summarizeAnalyticsData({ analyticsData: dataString });
      setSummary(result.summary);
    } catch (error) {
      console.error("Summary generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRunSimulation = async () => {
    if (!db) return;
    setSimulationLoading(true);
    try {
      const result = await SCUGPHubUltimate.simulateGeologicalRisks(28.03, 1.65);
      setLastSimResult(result);
      
      SCUGPHubUltimate.logAcademicActivity(db, "CERT_USER_99", "Arctic Operations Control", {
        riskLevel: result.riskLevel,
        riskFactor: result.riskFactor,
        determination: result.determination,
        carbonImpact: "Low",
        standard: "ISO 14083",
        complianceValidated: SCUGPHubUltimate.validateScugpStandard(efficiencyRating).valid
      });
    } catch (error) {
      console.error("Simulation failed", error);
    } finally {
      setSimulationLoading(false);
    }
  };

  const validation = SCUGPHubUltimate.validateScugpStandard(efficiencyRating);

  useEffect(() => {
    if (mounted) {
      handleGenerateSummary();
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background" suppressHydrationWarning>
      <MainNavigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline text-foreground">V60 Hub Intelligence</h1>
            <p className="text-muted-foreground">Certified SCUGP Standard Academic Portal</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => handleGenerateSummary()}>
              <RefreshCw className={cn("h-4 w-4 mr-2", loading && "animate-spin")} />
              Refresh
            </Button>
            <Button size="sm" onClick={handleRunSimulation} disabled={simulationLoading}>
              <Zap className={cn("h-4 w-4 mr-2", simulationLoading && "animate-pulse")} />
              Run GeoPredictor+
            </Button>
          </div>
        </div>

        {!validation.valid && (
          <Alert variant="destructive" className="mb-8 border-destructive/50 bg-destructive/10">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Compliance Warning</AlertTitle>
            <AlertDescription>
              {validation.message}
            </AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-secondary/50">
            <TabsTrigger value="overview">Executive Overview</TabsTrigger>
            <TabsTrigger value="simulator">Crisis Simulator</TabsTrigger>
            <TabsTrigger value="geopredictor">GeoPredictor+ Data</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-3">
                 <CarbonDashboard />
               </div>
               <div className="space-y-6">
                 <Card className="border-destructive/20 bg-destructive/5">
                   <CardHeader className="pb-2">
                     <CardTitle className="text-sm flex items-center gap-2">
                       <ShieldAlert className="h-4 w-4 text-destructive" />
                       Emergency Protocols
                     </CardTitle>
                     <CardDescription className="text-xs">Arctic Operations Control (AOC)</CardDescription>
                   </CardHeader>
                   <CardContent>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-destructive hover:bg-destructive/10"
                        onClick={() => setActiveTab('simulator')}
                      >
                        <AlertTriangle className="mr-2 h-4 w-4" /> 
                        Simulateur de Crise AOC
                      </Button>
                   </CardContent>
                 </Card>

                 <Card className="flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        AI Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      {loading ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <Loader2 className="h-6 w-6 animate-spin text-primary mb-2" />
                          <p className="text-xs text-muted-foreground">Analyzing...</p>
                        </div>
                      ) : summary ? (
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                          "{summary.substring(0, 150)}..."
                        </p>
                      ) : (
                        <p className="text-xs text-muted-foreground">Awaiting data...</p>
                      )}
                    </CardContent>
                    <CardFooter className="pt-0">
                       <Button variant="link" size="sm" className="px-0" onClick={() => setActiveTab('geopredictor')}>
                         View full report <ChevronRight className="h-3 w-3 ml-1" />
                       </Button>
                    </CardFooter>
                  </Card>

                  <CollaborationPortal />
               </div>
             </div>
          </TabsContent>

          <TabsContent value="simulator">
             <div className="max-w-4xl mx-auto">
                <ArcticCrisisSimulator />
             </div>
          </TabsContent>

          <TabsContent value="geopredictor">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    GeoPredictor+ Real-time Output
                  </CardTitle>
                  <CardDescription>Live simulation data for deepwater gisements.</CardDescription>
                </CardHeader>
                <CardContent>
                  {lastSimResult ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary/50 p-4 rounded-lg">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Risk Level</p>
                          <p className={cn(
                            "text-xl font-bold",
                            lastSimResult.riskLevel === 'Low' ? "text-green-600" :
                            lastSimResult.riskLevel === 'Medium' ? "text-yellow-600" : "text-destructive"
                          )}>
                            {lastSimResult.riskLevel}
                          </p>
                        </div>
                        <div className="bg-secondary/50 p-4 rounded-lg">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Risk Factor</p>
                          <p className="text-xl font-bold">{lastSimResult.riskFactor}/100</p>
                        </div>
                      </div>
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>IA Determination</AlertTitle>
                        <AlertDescription>
                          {lastSimResult.determination}
                        </AlertDescription>
                      </Alert>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Safety Protocols:</p>
                        <ul className="text-sm space-y-1">
                          {lastSimResult.recommendations.map((rec: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[300px] flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                      <Zap className="h-10 w-10 mb-2 opacity-20" />
                      <p>Click "Run GeoPredictor+" to start simulation</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Data Insights
                  </CardTitle>
                  <CardDescription>AI Pattern Analysis (SCUGP 19.0)</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                      <p className="text-sm text-muted-foreground">Decoding patterns...</p>
                    </div>
                  ) : summary ? (
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="bg-secondary/30 p-4 rounded-lg border text-muted-foreground">
                        {summary}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Waiting for system prompt...
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" onClick={handleGenerateSummary} disabled={loading}>
                    Re-Analyze
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
