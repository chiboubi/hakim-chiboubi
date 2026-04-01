"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Shield, LayoutDashboard, BarChart3, GraduationCap, 
  LockKeyhole, Bot, Zap, Globe, BrainCircuit, Waves, 
  Orbit, Satellite, Award, Landmark, Settings, Code, Scan, Box, User, Atom, CheckCircle, Cloud, Map
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SCUGP_CORE_OPTIONS } from "@/lib/scugp-service";

const links = [
  { href: "/", label: "Home", icon: LayoutDashboard },
  { href: "/identity", label: "Identité Ω", icon: User },
  { href: "/dashboard", label: "GEO-IA 50.0", icon: Satellite },
  { href: "/quantum-twin", label: "Quantum Twin", icon: Atom },
  { href: "/analytics", label: "Gaia Loop", icon: BarChart3 },
  { href: "/projects", label: "MCU Repository", icon: GraduationCap },
  { href: "/certifications", label: "Chancellerie Ω", icon: Award },
  { href: "/metaverse", label: "Métavers 3D", icon: Box },
  { href: "/verify-face", label: "Face ID Ω", icon: Scan },
  { href: "/institutional", label: "Stratégie Source", icon: Landmark },
  { href: SCUGP_CORE_OPTIONS.geeAppUrl, label: "GEE App Ω", icon: Map, external: true },
  { href: SCUGP_CORE_OPTIONS.firebaseStudioUrl, label: "Google Hub", icon: Cloud, external: true },
  { href: "/admin", label: "Admin Hub", icon: Settings },
  { href: "/security", icon: LockKeyhole, label: "Sécurité Ω" },
];

export function MainNavigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-black/80 backdrop-blur-3xl border-slate-800 shadow-2xl h-24">
        <div className="container mx-auto px-4 flex h-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="h-10 w-10 bg-blue-500/20 rounded-full" />
            <span className="text-4xl font-black tracking-tighter uppercase text-white">SCUGP 50.0</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/80 backdrop-blur-3xl border-slate-800 shadow-2xl">
      <div className="container mx-auto px-4 flex h-24 items-center justify-between">
        <div className="flex items-center gap-6">
          <Globe className="h-10 w-10 text-blue-500" />
          <span className="text-4xl font-black tracking-tighter uppercase text-white">SCUGP <span className="text-blue-500">50.0</span></span>
        </div>
        <nav className="hidden xl:flex items-center gap-4">
          {links.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.1em] transition-all px-3 py-1.5 rounded-full border shadow-xl",
                  link.label.includes('GEE') 
                    ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 hover:text-white" 
                    : "text-amber-500 bg-amber-500/10 border-amber-500/20 hover:text-white"
                )}
              >
                <link.icon className="h-3 w-3" />
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.1em] transition-all hover:text-blue-400",
                  pathname === link.href ? "text-blue-400" : "text-slate-500"
                )}
              >
                <link.icon className="h-3 w-3" />
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 px-8 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_0_35px_rgba(16,185,129,0.3)]">
            <CheckCircle className="h-5 w-5 animate-pulse" />
            SCELLÉ & CERTIFIÉ SOURCE
          </div>
        </div>
      </div>
    </header>
  );
}
