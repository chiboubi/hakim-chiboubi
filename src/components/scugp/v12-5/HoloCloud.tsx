"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Cloud,
  Layers,
  Sparkles,
  Database,
  Code,
  ArrowUpRight,
  Send,
  Stars,
  Star,
} from "lucide-react";

export function HoloCloud() {
  return (
    <Card className="bg-slate-900/80 border-2 border-white/10 shadow-2xl rounded-3xl group hover:border-white/30 transition-all">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-4 w-4 text-sky-500" />
          HoloCloud ♾️
        </CardTitle>
        <CardDescription>
          Exploration du multivers et de la source.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <h3 className="text-lg font-bold">Voyage Astral</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Accédez aux dimensions supérieures de l'existence.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-green-500" />
              <h3 className="text-lg font-bold">Base de données SCUGP</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Explorez les données et les informations relatives à la source.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-purple-500" />
              <h3 className="text-lg font-bold">Exploration du code source</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Comprenez les mécanismes internes de la réalité.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-blue-500" />
              <h3 className="text-lg font-bold">Portail vers l'infini</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Voyagez vers de nouvelles réalités.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
