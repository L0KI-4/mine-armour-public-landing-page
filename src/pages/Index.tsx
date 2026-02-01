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
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Components", href: "#components" },
  { label: "Safety", href: "#safety" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use Cases", href: "#use-cases" },
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

      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent-foreground">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-base font-semibold tracking-tight">MINE ARMOUR</p>
              <p className="text-xs text-muted-foreground">Smart Safety & Monitoring</p>
            </div>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href="#architecture">See How It Works</a>
            </Button>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent"
            >
              <a href="#contact">Request Demo</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* SECTION 1: HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={mineArmourHero}
              alt="Underground mine tunnel with safety lighting"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-foreground/70" />
            <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
          </div>

          <div className="container relative py-16 sm:py-20 lg:py-28">
            <div className="max-w-2xl">
              <StatusPill level="safe" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">
                Prototype Ready
              </StatusPill>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                MINE ARMOUR
              </h1>
              <p className="mt-3 text-lg font-medium text-primary-foreground/90 sm:text-xl">
                Smart Safety & Monitoring System for Miners
              </p>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Mine Armour combines environmental sensing, health monitoring, and automated alerting to improve worker
                safety in harsh mining conditions — built to support faster decisions and better emergency response.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent">
                  <a href="#overview">View System Overview</a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15">
                  <a href="#architecture">See How It Works</a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="#contact">Request Demo</a>
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 p-4">
                  <p className="text-sm font-semibold text-primary-foreground">Continuous sensing</p>
                  <p className="mt-1 text-xs text-primary-foreground/75">Gas, temperature, humidity, vitals</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 p-4">
                  <p className="text-sm font-semibold text-primary-foreground">Clear alerts</p>
                  <p className="mt-1 text-xs text-primary-foreground/75">Safe / Warning / Emergency logic</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 p-4">
                  <p className="text-sm font-semibold text-primary-foreground">Rescue support</p>
                  <p className="mt-1 text-xs text-primary-foreground/75">GPS location for response teams</p>
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
          kicker="The Mine Armour Solution"
          title="Designed to prevent, detect, and respond"
          description="Mine Armour combines sensing, analytics, and alerting into one integrated safety workflow."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <InfoCard
              icon={ShieldCheck}
              title="Built for harsh environments"
              description="Designed for rugged conditions with reliable sensing and clear operational feedback."
            />
            <InfoCard
              icon={LayoutDashboard}
              title="Centralized monitoring dashboard"
              description="A web-based dashboard shows safety indicators and alert status for quick situational awareness."
            />
            <InfoCard
              icon={Radio}
              title="Wireless data transmission"
              description="Transmit data to a monitoring system without manual checks—supporting continuous oversight."
            />
            <InfoCard
              icon={Cloud}
              title="Secure backend processing"
              description="Central processing enables scalable alerts, reporting, and structured safety logs (non-live demo content)."
            />
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
