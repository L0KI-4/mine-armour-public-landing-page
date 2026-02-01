import mineArmourHero from "@/assets/mine-armour-hero.jpg";
import { ArchitectureFlow } from "@/components/landing/ArchitectureFlow";
import { InfoCard } from "@/components/landing/InfoCard";
import { Section } from "@/components/landing/Section";
import { StatusPill } from "@/components/landing/StatusPill";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  AlarmClock,
  Cloud,
  Cpu,
  Droplets,
  EyeOff,
  HeartPulse,
  LayoutDashboard,
  MapPin,
  Radio,
  ShieldCheck,
  Siren,
  ThermometerSun,
  Users,
  Wind,
} from "lucide-react";

const navItems = [
  { label: "Solutions", href: "#solution" },
  { label: "Components", href: "#components" },
  { label: "Capabilities", href: "#safety" },
  { label: "Pricing", href: "/pricing" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-red-500/10 bg-black/70 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-red-500/15 text-red-500">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-base font-semibold tracking-tight text-white">MINE ARMOR</p>
              <p className="text-xs text-white/60">Smart Safety & Monitoring</p>
            </div>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="group rounded-full bg-gradient-to-r from-red-600 to-red-700 px-6 py-2.5 text-sm font-bold text-white hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300">
              <a href="#overview" className="flex items-center gap-2">
                LOGIN
                <span className="text-base group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* SECTION 1: HERO - ULTRA ATTRACTIVE OPENING */}
        <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center slide-section">
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={mineArmourHero}
              alt="Underground mine tunnel with safety lighting"
              className="h-full w-full object-cover scale-110 animate-slow-zoom"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/60 to-black/95" />
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-20 animate-grid-scroll" style={{ 
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, #dc2626 3px, #dc2626 4px), repeating-linear-gradient(90deg, transparent, transparent 3px, #dc2626 3px, #dc2626 4px)", 
              backgroundSize: "60px 60px"
            }} />
            
            {/* Glowing Orbs */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-float-delayed" />
            </div>
            
            {/* Radial Spotlight */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80" />
          </div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-5xl text-center space-y-8">
              
              {/* Badge - Animated Entry */}
              <div className="animate-slide-down opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                <StatusPill level="emergency" className="border-red-500/50 bg-red-500/10 text-red-500 backdrop-blur-sm inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold tracking-wider">
                  <span className="animate-pulse">●</span> NEXT-GEN MINING SAFETY
                </StatusPill>
              </div>
              
              {/* Main Title - Ultra Large with 3D Effect */}
              <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <div className="relative inline-block">
                  {/* Shadow Layer */}
                  <h1 className="absolute inset-0 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-red-600/50 blur-3xl select-none">
                    MINE ARMOR
                  </h1>
                  
                  {/* Main Text with Gradient */}
                  <h1 className="relative font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                    <span className="bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">MINE</span>
                    {" "}
                    <span className="bg-gradient-to-br from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent animate-glow-pulse">ARMOR</span>
                  </h1>
                  
                  {/* Underline Accent */}
                  <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
                </div>
              </div>
              
              {/* Subtitle */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Advanced IoT protection system monitoring environmental hazards and miner health in real-time. 
                  <span className="text-red-400 font-semibold"> Zero harm. Maximum efficiency.</span>
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild className="rounded-full bg-red-600 px-8 text-white hover:bg-red-500">
                  <a href="#overview">View System Overview</a>
                </Button>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center gap-2 text-white/80">
                  <ShieldCheck className="h-5 w-5 text-red-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">Real-time protection</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-white/80">
                  <HeartPulse className="h-5 w-5 text-red-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">Health monitoring</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-white/80">
                  <Radio className="h-5 w-5 text-red-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">Smart connectivity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OVERVIEW (quick system-level summary) */}
        <Section
          id="overview"
          kicker="System Overview"
          title="Safety-first monitoring built for real mine conditions"
          description="A system-level approach to safety: measure the environment, track worker well-being, and escalate alerts with clear severity levels."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <InfoCard
              icon={Cpu}
              title="Environmental Monitoring"
              description="Detect dangerous gases and unsafe climate conditions before they become emergencies."
            />
            <InfoCard
              icon={Activity}
              title="Health & Stress Tracking"
              description="Track heart rate, SpO₂, and stress indicators to flag early signs of fatigue or distress."
            />
            <InfoCard
              icon={Siren}
              title="Automated Alerts"
              description="Trigger clear, color-coded safety alerts for fast decisions and immediate response." 
            />
          </div>
        </Section>

        {/* SECTION 2: PROBLEM STATEMENT */}
        <Section
          id="problem"
          kicker="Why it matters"
          title="Mining hazards demand faster awareness"
          description="Mining environments can shift quickly. Without continuous monitoring, small risks can escalate into life-threatening incidents."
          className="bg-muted/30"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={Wind} title="Toxic gas exposure" description="Invisible gases can reach dangerous levels without warning." />
            <InfoCard
              icon={HeartPulse}
              title="No continuous health tracking"
              description="Stress and fatigue can reduce reaction time and increase accident risk."
            />
            <InfoCard
              icon={AlarmClock}
              title="Delayed emergency response"
              description="Every minute counts—alerts must be immediate and unambiguous."
            />
            <InfoCard
              icon={EyeOff}
              title="Low visibility in rescue" 
              description="Locating workers quickly is critical during smoke, dust, or structural events."
            />
          </div>
        </Section>

        {/* SECTION 3: THE MINE ARMOUR SOLUTION */}
        <Section
          id="solution"
          kicker="THE SOLUTION"
          title={
            <>
              Comprehensive <span className="text-red-500">Safety</span>
              <br />
              Ecosystem
            </>
          }
          description="Mine Armour isn't just a sensor—it's a complete safety ecosystem designed to protect lives underground. By integrating wearable technology with robust cloud monitoring, we provide a 360-degree view of miner safety."
          className="bg-black"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full border border-red-500/50 p-2 text-red-500">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-white">Continuous Environmental Monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full border border-red-500/50 p-2 text-red-500">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-white">Real-time Miner Health Tracking</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full border border-red-500/50 p-2 text-red-500">
                    <AlarmClock className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-white">Automated Safety Alerts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full border border-red-500/50 p-2 text-red-500">
                    <LayoutDashboard className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-white">Centralized Monitoring Dashboard</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full border border-red-500/50 p-2 text-red-500">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-white">Rugged Design for Harsh Conditions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full border border-red-500/50 p-2 text-red-500">
                    <Radio className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-white">Low-Latency Data Transmission</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="system-active-card">
                <div className="system-active-inner">
                  <div className="system-active-dot" />
                  <ShieldCheck className="h-10 w-10 text-white" />
                </div>
                <div className="mt-6">
                  <p className="text-lg font-semibold tracking-wide text-white">SYSTEM ACTIVE</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-red-400">Monitoring 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 4: PRODUCT COMPONENTS */}
        <Section
          id="components"
          kicker="Product Components"
          title="Three layers working as one system"
          description="Wearable sensing at the edge, a monitoring interface for supervisors, and a communication layer for reliability and scale."
          className="bg-muted/30"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">1</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">Smart Wearable Unit</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Gas sensors: LPG, Methane, Hydrogen</li>
                  <li>Heart rate & SpO₂ monitoring</li>
                  <li>Stress detection (GSR)</li>
                  <li>GPS location tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">2</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">Control & Monitoring System</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Web-based dashboard</li>
                  <li>Visual safety indicators</li>
                  <li>Alert and notification system</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">3</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">Communication & Cloud Layer</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Wireless data transmission</li>
                  <li>Secure backend processing</li>
                  <li>Scalable system architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* SECTION 5: SENSOR & SAFETY CAPABILITIES */}
        <Section
          id="safety"
          kicker="Sensor & Safety Capabilities"
          title="Capabilities that map directly to safety outcomes"
          description="These are capability examples (not live data) showing what the system is built to measure and why it matters."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={ThermometerSun}
              title="Temperature monitoring"
              description="Helps prevent heat stress and supports safer shift planning in high-heat zones."
            />
            <InfoCard
              icon={Droplets}
              title="Humidity monitoring"
              description="Improves comfort and safety, and helps anticipate condensation or ventilation issues."
            />
            <InfoCard
              icon={Wind}
              title="Gas detection (MQ-5)"
              description="Early detection helps prevent asphyxiation, poisoning, and ignition hazards."
            />
            <InfoCard
              icon={HeartPulse}
              title="Heart rate & SpO₂"
              description="Flags fatigue or oxygen-related issues so supervisors can intervene early."
            />
            <InfoCard
              icon={Activity}
              title="Stress detection (GSR)"
              description="Identifies rising stress levels that correlate with errors, panic, and unsafe decisions."
            />
            <InfoCard
              icon={MapPin}
              title="Location awareness"
              description="Helps correlate safety risks with zones and supports rescue coordination." 
            />
          </div>
        </Section>

        {/* SECTION 6: ALERT & SAFETY MECHANISM */}
        <Section
          id="alerts"
          kicker="Alert Mechanism"
          title="Clear severity levels for faster action"
          description="Alerts are designed to be understandable at a glance—minimizing ambiguity during high-pressure situations."
          className="bg-muted/30"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <StatusPill level="safe">Normal / Safe</StatusPill>
                <p className="mt-4 font-display text-lg font-semibold">Conditions within safe limits</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sensors indicate normal levels—operations can continue with standard supervision.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <StatusPill level="warning">Warning</StatusPill>
                <p className="mt-4 font-display text-lg font-semibold">Risk detected</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Levels are trending unsafe—trigger checks, ventilation actions, and increased oversight.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <StatusPill level="emergency">Emergency</StatusPill>
                <p className="mt-4 font-display text-lg font-semibold">Immediate action required</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Unsafe thresholds detected—initiate response protocols and coordinate rescue support.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* SECTION 7: LOCATION & RESCUE SUPPORT */}
        <Section
          id="rescue"
          kicker="Location & Rescue Support"
          title="GPS support that improves response time"
          description="Location awareness is explained here for the public—no live map is shown on this page."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <InfoCard
              icon={MapPin}
              title="Locate workers during emergencies"
              description="Helps response teams identify last-known positions when visibility is reduced."
            />
            <InfoCard
              icon={Siren}
              title="Reduce rescue response time"
              description="Faster location sharing supports quicker decisions and targeted rescue operations."
            />
            <InfoCard
              icon={Users}
              title="Support disaster management"
              description="Structured location records help coordinate teams and reduce confusion during incidents."
            />
          </div>
        </Section>

        {/* SECTION 8: SYSTEM ARCHITECTURE (HIGH LEVEL) */}
        <Section
          id="architecture"
          kicker="High-Level Architecture"
          title="Simple flow: sensors to alerts"
          description="A non-technical overview of how Mine Armour moves data from the wearable to safety decisions."
          className="bg-muted/30"
        >
          <ArchitectureFlow
            steps={[
              { title: "Sensors", detail: "Wearable unit measures gas, climate, vitals, and stress indicators." },
              { title: "ESP32", detail: "Edge device collects readings and packages telemetry." },
              { title: "Wireless Network", detail: "Data is transmitted to the monitoring system." },
              { title: "Cloud", detail: "Secure processing and structured safety records." },
              { title: "Dashboard + Alerts", detail: "Supervisors see indicators and receive escalated alerts." },
            ]}
          />
        </Section>

        {/* SECTION 9: USE CASES */}
        <Section
          id="use-cases"
          kicker="Use Cases"
          title="Where Mine Armour fits"
          description="Designed for safety-focused organizations that operate in high-risk environments."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Underground mines",
              "Open-pit mines",
              "Mining companies",
              "Safety training institutes",
              "Disaster response teams",
            ].map((label) => (
              <div key={label} className="rounded-lg border bg-card p-5 shadow-sm">
                <p className="font-display text-lg font-semibold tracking-tight">{label}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Improve awareness and standardize response protocols with clearer safety signals.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 10: PROJECT STATUS & FUTURE SCOPE */}
        <Section
          id="status"
          kicker="Project Status"
          title="What’s built today—and what’s next"
          description="A transparent view of current progress and planned enhancements."
          className="bg-muted/30"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="font-display text-lg font-semibold">Current status</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start justify-between gap-4">
                    <span>Prototype</span>
                    <StatusPill level="safe">Completed</StatusPill>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span>Dashboard</span>
                    <StatusPill level="safe">Functional</StatusPill>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span>Field testing</span>
                    <StatusPill level="warning">Planned</StatusPill>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="font-display text-lg font-semibold">Future scope</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start justify-between gap-4">
                    <span>Mobile app</span>
                    <StatusPill level="warning">Future</StatusPill>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span>AI-based risk prediction</span>
                    <StatusPill level="warning">Enhancement</StatusPill>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span>Expanded alert routing</span>
                    <StatusPill level="warning">Enhancement</StatusPill>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* SECTION 11: CALL TO ACTION */}
        <Section
          id="contact"
          kicker="Call to Action"
          title="See Mine Armour in action"
          description="Want a walk-through for judges or industry reviewers? Use the links below to request a demo and get project materials."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="font-display text-lg font-semibold">View Demo</p>
                <p className="mt-2 text-sm text-muted-foreground">Schedule a guided demo of the prototype and dashboard.</p>
                <Button
                  asChild
                  className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent"
                >
                  <a href="#contact">Request Demo</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="font-display text-lg font-semibold">Read Documentation</p>
                <p className="mt-2 text-sm text-muted-foreground">Share a technical overview, architecture, and safety logic.</p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <a href="#architecture">Open Overview</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <p className="font-display text-lg font-semibold">Contact Team</p>
                <p className="mt-2 text-sm text-muted-foreground">Use email or share your preferred contact method.</p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <a href="mailto:contact@minearmour.example">Email us</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-lg border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold">Note</p>
            <p className="mt-2 text-sm text-muted-foreground">
              This page is an informational landing page for public viewing. It intentionally shows no real-time sensor
              feeds, live maps, or miner-specific data.
            </p>
          </div>
        </Section>
      </main>

      <footer className="border-t bg-background">
        <div className="container py-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-base font-semibold tracking-tight">MINE ARMOUR</p>
              <p className="mt-1 text-sm text-muted-foreground">Smart Safety & Monitoring System for Miners</p>
            </div>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mine Armour. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
